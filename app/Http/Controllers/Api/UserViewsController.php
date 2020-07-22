<?php

namespace App\Http\Controllers\Api;

//use App\Exports\CustomViewExport;
use App\Http\Transformers\AssetsTransformer;
use App\Http\Transformers\SelectlistTransformer;
use App\Models\Asset;
use App\Models\Company;
use App\Models\CustomField;
use App\Models\Setting;
use App\UsersViews;
use App\UserViews;
//use App\UserViewsDownloads;
use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use stdClass;

class UserViewsController extends Controller
{

    public function dataTable(Request $request)
    {
        $request_filter = null;
        $standard_fields = [];
        $custom_fields = [];
        $view = UserViews::find($request->id);
        $columns = json_decode($view->columns);

        foreach ($columns->standard_fields as $standard_field) {
            $standard_fields[] = 'assets.' . $standard_field;
        }
        /*IF GLOBAL SEARCH IS EMPTY, THEN BUILD THE QUERY INCLUDING CUSTOM FIELDS*/
        if ($request->search == null) {
            foreach ($columns->custom_fields as $custom_field) {
                $custom_fields[] = $custom_field;
            }
        }
        /*THE CUSTOM VIEW HAS NO FIELD SO EXIT WITHOUT RESULTS*/
        if (sizeof($standard_fields) == 0 && sizeof($custom_fields) == 0)
            return (new AssetsTransformer)->transformAssets(null, 0);

        /*CONTINUE*/
        $filters = json_decode($view->filters);
        $select = null;
        $custom_fields = CustomField::select('db_column')->whereIn('id', $custom_fields)->pluck('db_column')->toArray();

        $standard_filters_keys = [];
        $standard_filters = [];
        $custom_filters = [];

        foreach ($filters->filters as $filter) {
            $fid = (int)$filter->field;
            if ($fid === 0) {
                $standard_filters_keys[] = $filter->field;
                $standard_filters[] = ['field' => $filter->field, 'operator' => $filter->operator, 'value' => $filter->value, 'label' => isset($filter->label) ? $filter->label : null];
            } else {
                $custom_filters[] = ['field' => 'assets._snipeit_' . str_replace(' ', '_', strtolower($filter->label)) . '_' . $filter->field, 'operator' => $filter->operator, 'value' => $filter->value];
            }
        }

        $this->authorize('index', Asset::class);
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

        if ($request->filled('filter')) {
            $request_filter = json_decode($request->input('filter'), true);
        }

        $all_custom_fields = CustomField::whereIn('id', $custom_fields)->get(); //used as a 'cache' of custom fields throughout this page load

        foreach ($all_custom_fields as $field) {
            $allowed_columns[] = $field->db_column_name();
        }

        $all_fields = array_merge(['assets.*'], $custom_fields);

        $assets = Company::scopeCompanyables(Asset::select($all_fields), "company_id", "assets")
            ->with('location', 'assetstatus', 'assetlog', 'company', 'defaultLoc', 'assignedTo',
                'model.category', 'model.manufacturer', 'model.fieldset', 'supplier');


        // These are used by the API to query against specific ID numbers.
        // They are also used by the individual searches on detail pages like
        // locations, etc.
        if ($request->filled('status_id')) {
            $assets->where('assets.status_id', '=', $request->input('status_id'));
        }

        if ($request->input('requestable') == 'true') {
            $assets->where('assets.requestable', '=', '1');
        }

        if ($request->filled('model_id')) {
            $assets->InModelList([$request->input('model_id')]);
        }

        if ($request->filled('category_id')) {
            $assets->InCategory($request->input('category_id'));
        }

        if ($request->filled('department_id')) {
            $assets->InDepartment($request->input('department_id'));
        }

        if ($request->filled('location_id')) {
            $assets->where('assets.location_id', '=', $request->input('location_id'));
        }

        if ($request->filled('supplier_id')) {
            $assets->where('assets.supplier_id', '=', $request->input('supplier_id'));
        }

        if (($request->filled('assigned_to')) && ($request->filled('assigned_type'))) {
            $assets->where('assets.assigned_to', '=', $request->input('assigned_to'))
                ->where('assets.assigned_type', '=', $request->input('assigned_type'));
        }

        if ($request->filled('company_id')) {
            $assets->where('assets.company_id', '=', $request->input('company_id'));
        }

        if ($request->filled('manufacturer_id')) {
            $assets->ByManufacturer($request->input('manufacturer_id'));
        }

        if ($request->filled('depreciation_id')) {
            $assets->ByDepreciationId($request->input('depreciation_id'));
        }

        $request->filled('order_number') ? $assets = $assets->where('assets.order_number', '=', e($request->get('order_number'))) : '';


        $offset = (($assets) && (request('offset') > $assets->count())) ? 0 : request('offset', 0);
        $limit = $request->input('limit', 20);
        $order = $request->input('order') === 'asc' ? 'asc' : 'desc';

        // This is used by the sidenav, mostly

        // We switched from using query scopes here because of a Laravel bug
        // related to fulltext searches on complex queries.
        // I am sad. :(
        foreach ($filters->filters as $fSt){
            if($fSt->field=='status')
                \Input::replace(['status'=>$fSt->value]);
        }
        switch ($request->input('status')) {
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

                if ((!$request->filled('status_id')) && ($settings->show_archived_in_list != '1')) {
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

        foreach ($standard_filters as $sf) {
            $filter[] = [$sf['field'] => trim($sf['value']), 'operator' => $sf['operator']];
        }


        if ((!is_null($filter)) && (count($filter)) > 0 && !$request->filled('search')) {
            $assets->ByFilter($filter, $custom_filters, $request_filter);
            foreach ($custom_filters as $sf) {
                $assets = $assets->where($sf['field'], $sf['operator'], $sf['value']);
            }
        } elseif ($request->filled('search') && !$request->filled('filter')) {
            $assets->TextSearch($request->input('search'));

        } elseif ($request->filled('filter')) {
            if ((!is_null($filter)) && (count($filter)) > 0 && !$request->filled('search')) {
                $assets->ByFilter($filter, $custom_filters, $request_filter);
                foreach ($custom_filters as $sf) {
                    $assets = $assets->where($sf['field'], $sf['operator'], $sf['value']);
                }
            }
            $table_filters = json_decode($request->filter, true);
            foreach ($table_filters as $key => $value) {
                $filter[] = ['field' => $key, 'operator' => 'LIKE', 'value' => "%$value%", 'label' => $key];
                $assets->ByFilter($filter, $custom_filters, $request_filter);
            }
        } else {
            foreach ($custom_filters as $sf) {
                $assets = $assets->where($sf['field'], $sf['operator'], $sf['value']);
            }
        }


        // This is kinda gross, but we need to do this because the Bootstrap Tables
        // API passes custom field ordering as custom_fields.fieldname, and we have to strip
        // that out to let the default sorter below order them correctly on the assets table.
        $sort_override = str_replace('custom_fields.', '', $request->input('sort'));

        // This handles all of the pivot sorting (versus the assets.* fields
        // in the allowed_columns array)
        $column_sort = in_array($sort_override, $allowed_columns) ? $sort_override : 'assets.created_at';


        switch ($sort_override) {
            case 'model':
                $assets->OrderModels($order);
                break;
            case 'model_number':
                $assets->OrderModelNumber($order);
                break;
            case 'category':
                $assets->OrderCategory($order);
                break;
            case 'manufacturer':
                $assets->OrderManufacturer($order);
                break;
            case 'company':
                $assets->OrderCompany($order);
                break;
            case 'location':
                $assets->OrderLocation($order);
            case 'rtd_location':
                $assets->OrderRtdLocation($order);
                break;
            case 'status_label':
                $assets->OrderStatus($order);
                break;
            case 'supplier':
                $assets->OrderSupplier($order);
                break;
            case 'assigned_to':
                $assets->OrderAssigned($order);
                break;
            default:
                $assets->orderBy($column_sort, $order);
                break;
        }
        $total = $assets->count();
        //$sql = $this->getEloquentSqlWithBindings($assets);
        $assets = $assets->skip($offset)->take($limit)->get();

        return (new AssetsTransformer)->transformAssets($assets, $total);
    }

    public function selectlist(Request $request)
    {
        $views = UserViews::select([
            'id',
            'name',
            'public',
        ])->where('user_id','=',Auth::user()->id)->orWhere('public','=',1);

        if ($request->filled('search')) {
            $views = $views->where('name', 'LIKE', '%'.$request->get('search').'%');
        }

        $views = $views->orderBy('name', 'ASC')->paginate(50);

        // Loop through and set some custom properties for the transformer to use.
        // This lets us have more flexibility in special cases like assets, where
        // they may not have a ->name value but we want to display something anyway
        foreach ($views as $view) {
            $view->use_text = $view->name;
        }

        return (new SelectlistTransformer)->transformSelectlist($views);
    }

    public function fieldlist(Request $request){
        $fields = CustomField::select([
            'id',
            'name'
        ]);
        if ($request->filled('search')) {
            $fields = $fields->where('name', 'LIKE', '%'.$request->get('search').'%');
        }
        $fields = $fields->orderBy('name', 'ASC')->paginate(50);
        // Loop through and set some custom properties for the transformer to use.
        // This lets us have more flexibility in special cases like assets, where
        // they may not have a ->name value but we want to display something anyway
        $sfields=self::standardFieldsCollection();
        foreach($sfields as $sf){
            if($request->has('search')){
                if (str_contains(strtolower($sf['name']),strtolower($request->get('search')))){
                    $f = new StdClass();
                    $f->id = $sf['id'];
                    $f->name = str_replace('_id',' ',ucwords($sf['name']));
                    $f->use_image = false;
                    $fields[] = $f;
                }
            }
            else{
                $f = new StdClass();
                $f->id = $sf['id'];
                $f->name = str_replace('_id',' ',ucwords($sf['name']));
                $f->use_image = false;
                $fields[] = $f;
            }
        }
        foreach ($fields as $field) {
            $field->use_text = $field->name;
        }


        return (new SelectlistTransformer)->transformSelectlist($fields);
    }

    public function filterhint(Request $request){
        $field =$request->field;
        $term = $request->term;
        $oper = $request->oper;
        $field_t = trim($request->field_t);
        if($field !='Select a Field' && $field != '' && $field != null) {
            if ($field[0] == '_') {
                $fieldname = substr($field, 1);
                $term = explode($oper, $term);
                if (sizeof($term) > 1) $term = $term[1]; else $term = $term[0];
                $term = trim($term);
            } else {
                $cfieldname = CustomField::find($field);
                if ($cfieldname)
                    $fieldname = $cfieldname->db_column;
            }

            if ($field >= 1000 && !isset($fieldname))
                $fieldname = trim($field_t);

            $fieldname = trim($fieldname);

            switch (strtolower($field_t)) {
                case 'location':
                    $results = \App\Models\Location::where('name', 'LIKE', '%' . $term . '%');
                    $fieldname = 'name';
                    break;
                case 'supplier':
                    $results = \App\Models\Supplier::where('name', 'LIKE', '%' . $term . '%');
                    $fieldname = 'name';
                    break;
                case 'department':
                    $results = \App\Models\Department::where('name', 'LIKE', '%' . $term . '%');
                    $fieldname = 'name';
                    break;
                case 'model':
                    $results = \App\Models\AssetModel::where('name', 'LIKE', '%' . $term . '%');
                    $fieldname = 'name';
                    break;
                case 'status':
                    $results = \App\Models\Statuslabel::where('name', 'LIKE', '%' . $term . '%');
                    $fieldname = 'name';
                    break;
                case 'category':
                    $results = \App\Models\Category::where('name', 'LIKE', '%' . $term . '%');
                    $fieldname = 'name';
                    break;
                default:
                    $results = Asset::where($fieldname, 'LIKE', '%' . $term . '%');
                    break;

            }
            $results = $results->distinct()->limit(5)->get([strtolower($fieldname)])->pluck(strtolower($fieldname));

            $res = null;
            if (str_contains(strtolower($fieldname), ['created_at', 'updated_at', '_date', 'expected_checkin', 'last_checkout'])) {
                $res = $results->map(function ($item) {
                    return $item->toDateString();
                });
            }
            if ($res != null) $results = $res;
            return response()->json($results);
        }else return response()->json([null]);
    }

    public function filterhintColumn(Request $request){
        $field = trim($request->field);
        $term = '';
        switch (strtolower($field)){
            case 'location':
                $results = \App\Models\Location::where('name','LIKE','%'.$term.'%');
                $fieldname='name';
                break;
            case 'supplier':
                $results = \App\Models\Supplier::where('name','LIKE','%'.$term.'%');
                $fieldname='name';
                break;
            case 'department':
                $results = \App\Models\Department::where('name','LIKE','%'.$term.'%');
                $fieldname='name';
                break;
            case 'model':
                $results = \App\Models\AssetModel::where('name','LIKE','%'.$term.'%');
                $fieldname='name';
                break;
            case 'status':
                $results = \App\Models\Statuslabel::where('name','LIKE','%'.$term.'%');
                $fieldname='name';
                break;
            default:
                $results = Asset::where($field,'LIKE','%'.$term.'%');
                break;

        }
        $results = $results->distinct()->limit(5)->get([strtolower($fieldname)])->pluck(strtolower($fieldname),strtolower($fieldname));
        return response()->json($results);
    }


    /**
     * Get list of views for the authenticated user.
     *
     * @author Allan Solis <allanbritos@gmail.com>
     *
     * @since 4.7.0
     *
     * @return string
     */

    public static function userViewsList()
    {
        $view_list = UserViews::where('user_id','=',Auth::user()->id)
            ->orWhere('public','=',1)
            ->orderBy('name','asc')
            ->pluck('name','id')
            ->toArray();
        return $view_list;
    }

    /**
     * Get list of views for the authenticated user.
     *
     * @author Allan Solis <allanbritos@gmail.com>
     *
     * @since 4.7.0
     *
     * @return string
     */

    public static function userViews()
    {
        $view_list = UserViews::select('name','id')->where('user_id','=',Auth::user()->id)
            ->orderBy('name','asc')
            ->get();
        return $view_list;
    }

    public static function standardFieldsCollection()
    {
        $standard_fields = [
            ['name'=>'accepted','id'=>1000],
            ['name'=>'archived','id'=>1001],
            ['name'=>'asset_tag','id'=>1002],
            ['name'=>'assigned_to','id'=>1003],
            ['name'=>'assigned_type','id'=>1004],
            ['name'=>'checkin_counter','id'=>1005],
            ['name'=>'category_id','id'=>1006],
            ['name'=>'checkout_counter','id'=>1007],
            ['name'=>'company_id','id'=>1008],
            ['name'=>'created_at','id'=>1009],
            ['name'=>'deleted_at','id'=>1010],
            ['name'=>'department','id'=>1011],
            ['name'=>'depreciate','id'=>1012],
            ['name'=>'expected_checkin','id'=>1013],
            ['name'=>'id','id'=>1014],
            ['name'=>'image','id'=>1015],
            ['name'=>'last_audit_date','id'=>1016],
            ['name'=>'last_checkout','id'=>1017],
            ['name'=>'location_id','id'=>1018],
            ['name'=>'manufacturer_id','id'=>1019],
            ['name'=>'model_id','id'=>1020],
            ['name'=>'name','id'=>1021],
            ['name'=>'next_audit_date','id'=>1022],
            ['name'=>'notes','id'=>1023],
            ['name'=>'order_number','id'=>1024],
            ['name'=>'physical','id'=>1025],
            ['name'=>'purchase_cost','id'=>1026],
            ['name'=>'purchase_date','id'=>1027],
            ['name'=>'requestable','id'=>1028],
            ['name'=>'requests_counter','id'=>1029],
            ['name'=>'rtd_location_id','id'=>1030],
            ['name'=>'serial','id'=>1031],
            ['name'=>'status_id','id'=>1032],
            ['name'=>'supplier_id','id'=>1033],
            ['name'=>'updated_at','id'=>1034],
            ['name'=>'user_id','id'=>1035],
            ['name'=>'warranty_months','id'=>1036],
        ];
        return $standard_fields;
    }

    public static function customFieldsCollection()
    {
        $custom_fields = CustomField::orderBy('name','asc')->get();
        return $custom_fields;
    }
}
