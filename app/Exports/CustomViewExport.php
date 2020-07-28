<?php

namespace App\Exports;

use App\Http\Transformers\AssetsExportTransformer;
use App\Http\Transformers\AssetsTransformer;
use App\Models\Asset;
use App\Models\Company;
use App\Models\CustomField;
use App\Models\Setting;
use App\Models\UserViews;
use Maatwebsite\Excel\Concerns\FromArray;
use Maatwebsite\Excel\Concerns\WithHeadings;

class CustomViewExport implements FromArray, WithHeadings
{
    public $id;
    public $headings;
    private $standard_fields;
    private $custom_fields;
    private $view;

    public function __construct($id)
    {
        $this->id = $id;
        $this->view = UserViews::find($id);
        $columns = json_decode($this->view->columns);

        $this->standard_fields = $columns->standard_fields;
        $this->custom_fields = CustomField::whereIn('id',$columns->custom_fields)->get();

        foreach ($this->standard_fields as $standard_field) {
            $this->headings[] = $standard_field;
        }
        foreach ($this->custom_fields as $custom_field) {
            $this->headings[] = $custom_field->name;
        }

    }

    /**
     * @return array
     */
    public function headings(): array
    {
        return $this->headings;
    }


    /**
     * @return array
     */
    public function array(): array
    {
        $view = $this->view;
        $columns = json_decode($view->columns);
        $sf = []; $cf = [];
        foreach ($columns->standard_fields as $standard_field) {
            $sf[] = 'assets.'.$standard_field;
        }
        foreach($columns->custom_fields as $key=>$value){
            $cf[] = $value;
        }

        /*THE CUSTOM VIEW HAS NO FIELD SO EXIT WITHOUT RESULTS*/
        if(sizeof($sf) == 0 && sizeof($cf) == 0)
            return (new AssetsTransformer)->transformAssets(null, 0);

        /*CONTINUE*/
        $filters = json_decode($view->filters);
        $select = null;
        $custom_fields = CustomField::select('db_column')->whereIn('id',$cf)->pluck('db_column')->toArray();

        $standard_filters_keys = [];
        $standard_filters = [];
        $custom_filters = [];

        $where = null;$key=0;
        foreach ($filters->filters as $filter){
            $fid = (int)$filter->field;
            if($fid === 0) {
                $standard_filters_keys[] = $filter->field;
                $standard_filters[] = ['field'=>$filter->field,'operator'=>$filter->operator,'value'=>$filter->value,'label'=>$filter->label];
            }
            else{
                $custom_filters[] = ['field'=>'_snipeit_'.str_replace(' ','_',strtolower($filter->label)).'_'.$filter->field,'operator'=>$filter->operator,'value'=>$filter->value];
            }
        }

        //$this->authorize('index', Asset247::class);
        $settings = Setting::getSettings();

        $allowed_columns = [
            'id',
            'name',
            'asset_tag',
            'serial',
            'model_number',
            'last_checkout',
            'notes',
            'expected_checkin',
            'order_number',
            'image',
            'assigned_to',
            'created_at',
            'updated_at',
            'purchase_date',
            'purchase_cost',
            'last_audit_date',
            'next_audit_date',
            'warranty_months',
            'checkout_counter',
            'checkin_counter',
            'requests_counter',
        ];
        $filter = array();

        $all_custom_fields = CustomField::whereIn('id',$cf)->get(); //used as a 'cache' of custom fields throughout this page load
        foreach ($all_custom_fields as $field) {
            $allowed_columns[]=$field->db_column_name();
        }
        $standard_fields = [];
        foreach ($this->standard_fields as $standard_field)
        {
            $standard_fields[] = 'assets.'.$standard_field;
        }

        $all_fields = array_merge(['assets.*'],$custom_fields);

        $assets = Company::scopeCompanyables(Asset::select($all_fields),"company_id","assets")
            ->with('location', 'assetstatus', 'assetlog', 'company', 'defaultLoc','assignedTo',
                'model.category', 'model.manufacturer', 'model.fieldset','supplier');

        $statusFilter = null;
        foreach ($filters->filters as $fSt){
            if($fSt->field=='status')
                $statusFilter = $fSt->value;
        }
        switch ($statusFilter) {
            case 'Deleted':
                $assets->onlyTrashed();
                break;
            case 'Pending':
                $assets->join('status_labels AS status_alias', function ($join) {
                    $join->on('status_alias.id', "=", "assets.status_id")
                        ->where('status_alias.deployable', '=', 0)
                        ->where('status_alias.pending', '=', 1)
                        ->where('status_alias.archived', '=', 0);
                });
                break;
            case 'RTD':
                $assets->whereNull('assets.assigned_to')
                    ->join('status_labels AS status_alias', function ($join) {
                        $join->on('status_alias.id', "=", "assets.status_id")
                            ->where('status_alias.deployable', '=', 1)
                            ->where('status_alias.pending', '=', 0)
                            ->where('status_alias.archived', '=', 0);
                    });
                break;
            case 'Undeployable':
                $assets->Undeployable();
                break;
            case 'Archived':
                $assets->join('status_labels AS status_alias', function ($join) {
                    $join->on('status_alias.id', "=", "assets.status_id")
                        ->where('status_alias.deployable', '=', 0)
                        ->where('status_alias.pending', '=', 0)
                        ->where('status_alias.archived', '=', 1);
                });
                break;
            case 'Requestable':
                $assets->where('assets.requestable', '=', 1)
                    ->join('status_labels AS status_alias', function ($join) {
                        $join->on('status_alias.id', "=", "assets.status_id")
                            ->where('status_alias.deployable', '=', 1)
                            ->where('status_alias.pending', '=', 0)
                            ->where('status_alias.archived', '=', 0);
                    });

                break;
            case 'Deployed':
                // more sad, horrible workarounds for laravel bugs when doing full text searches
                $assets->where('assets.assigned_to', '>', '0');
                break;
            default:

                if ($statusFilter!=null && ($settings->show_archived_in_list != '1')) {
                    // terrible workaround for complex-query Laravel bug in fulltext
                    $assets->join('status_labels AS status_alias', function ($join) {
                        $join->on('status_alias.id', "=", "assets.status_id")
                            ->where('status_alias.archived', '=', 0);
                    });

                    // If there is a status ID, don't take show_archived_in_list into consideration
                } else {
                    $assets->join('status_labels AS status_alias', function ($join) {
                        $join->on('status_alias.id', "=", "assets.status_id");
                    });
                }

        }

        foreach($standard_filters as $sf){
            $filter[] =[$sf['field']=>trim($sf['value']),'operator'=>$sf['operator']];
        }

        if ((!is_null($filter)) && (count($filter)) > 0) {
            $assets->ByFilter($filter,$custom_filters);
        }

        foreach ($custom_filters as $sf){
            $assets = $assets->where($sf['field'],$sf['operator'],$sf['value']);
        }

        try {
            $assets = $assets->get();
        }catch (\Exception $exception){
            $assets = null;
        }
        return (new AssetsExportTransformer())->transformAssetsForExport($assets,$standard_fields,$custom_fields);
    }

}


