<?php
namespace App\Http\Transformers;

use App\Models\Asset;
use Illuminate\Database\Eloquent\Collection;
use App\Http\Transformers\UsersTransformer;
use Illuminate\Contracts\Auth\Access\Gate;
use App\Helpers\Helper;

/**
 * This class transforms assets to be displayed
 * for a table to be exported
 *
 * @version    v1.0
 * @author [Allan R. Solis] [<allanbritos@gmail.com>]
 */
class AssetsExportTransformer extends AssetsTransformer
{
    /**
     * Returns an array of transformed assets to be exported offline
     *
     * @param Collection $assets
     * @param $standard_fields
     * @param $custom_fields
     * @return array
     */
    public function transformAssetsForExport(Collection $assets,$standard_fields,$custom_fields)
    {
        $array = array();
        foreach ($assets as $asset) {
            $array[] = self::transformAssetForExport($asset,$standard_fields,$custom_fields);
        }
        return $array;
    }

    /**
     * Returns an array of transformed assets to be presented in a bootstraptable
     *
     * @param Collection $assets
     * @param $total
     * @return mixed
     * @throws \Exception
     */
    public function transformAssets(Collection $assets, $total)
    {
        $array = array();
        foreach ($assets as $asset) {
            $array[] = self::transformAsset($asset);
        }
        return (new DatatablesTransformer)->transformDatatables($array, $total);
    }

    /**
     * Returns a representation of an Asset to be presented in a bootstrap table
     *
     * @param Asset $asset
     * @return array
     * @throws \Exception
     */
    public function transformAsset(Asset $asset)
    {
        $array = [
            'id' => (int) $asset->id,
            'name' => e($asset->name),
            'asset_tag' => e($asset->asset_tag),
            'serial' => e($asset->serial),
            'model' => ($asset->model) ? [
                'id' => (int) $asset->model->id,
                'name'=> e($asset->model->name)
            ] : null,
            'department' => (($asset->department) && ($asset->department->name)) ? e($asset->department->name) : null,
            'model_number' => (($asset->model) && ($asset->model->model_number)) ? e($asset->model->model_number) : null,
            'eol' => ($asset->purchase_date!='') ? $asset->purchase_date->toDateString() : null ,
            'status_label' => ($asset->assetstatus) ? [
                'id' => (int) $asset->assetstatus->id,
                'name'=> e($asset->assetstatus->name),
                'status_type'=> e($asset->assetstatus->getStatuslabelType()),
                'status_meta' => e($asset->present()->statusMeta),
            ] : null,
            'category' => (($asset->model) && ($asset->model->category)) ? [
                'id' => (int) $asset->model->category->id,
                'name'=> e($asset->model->category->name)
            ]  : null,
            'manufacturer' => (($asset->model) && ($asset->model->manufacturer)) ? [
                'id' => (int) $asset->model->manufacturer->id,
                'name'=> e($asset->model->manufacturer->name)
            ] : null,
            'supplier' => ($asset->supplier) ? [
                'id' => (int) $asset->supplier->id,
                'name'=> e($asset->supplier->name)
            ]  : null,
            'notes' => ($asset->notes) ? e($asset->notes) : null,
            'order_number' => ($asset->order_number) ? e($asset->order_number) : null,
            'company' => ($asset->company) ? [
                'id' => (int) $asset->company->id,
                'name'=> e($asset->company->name)
            ] : null,
            'location' => ($asset->location) ? [
                'id' => (int) $asset->location->id,
                'name'=> e($asset->location->name)
            ]  : null,
            'rtd_location' => ($asset->defaultLoc) ? [
                'id' => (int) $asset->defaultLoc->id,
                'name'=> e($asset->defaultLoc->name)
            ]  : null,
            'image' => ($asset->getImageUrl()) ? $asset->getImageUrl() : null,
            'assigned_to' => $this->transformAssignedTo($asset),
            'warranty_months' =>  ($asset->warranty_months > 0) ? e($asset->warranty_months . ' ' . trans('admin/hardware/form.months')) : null,
            'warranty_expires' => ($asset->warranty_months > 0) ?  Helper::getFormattedDateObject($asset->warranty_expires, 'date') : null,
            'created_at' => Helper::getFormattedDateObject($asset->created_at, 'datetime'),
            'updated_at' => Helper::getFormattedDateObject($asset->updated_at, 'datetime'),
            'last_audit_date' => Helper::getFormattedDateObject($asset->last_audit_date, 'datetime'),
            'next_audit_date' => Helper::getFormattedDateObject($asset->next_audit_date, 'date'),
            'deleted_at' => Helper::getFormattedDateObject($asset->deleted_at, 'datetime'),
            'purchase_date' => ($asset->purchase_date!='' && $asset->purchase_date!=null) ? $asset->purchase_date->toDateString() : null ,
            'last_checkout' => Helper::getFormattedDateObject($asset->last_checkout, 'datetime'),
            'expected_checkin' => Helper::getFormattedDateObject($asset->expected_checkin, 'date'),
            'purchase_cost' => Helper::formatCurrencyOutput($asset->purchase_cost),
            'checkin_counter' => (int) $asset->checkin_counter,
            'checkout_counter' => (int) $asset->checkout_counter,
            'requests_counter' => (int) $asset->requests_counter,
            'user_can_checkout' => (bool) $asset->availableForCheckout(),
        ];

        if (($asset->model) && ($asset->model->fieldset) && ($asset->model->fieldset->fields->count() > 0)) {
            $fields_array = array();

            foreach ($asset->model->fieldset->fields as $field) {

                if ($field->isFieldDecryptable($asset->{$field->convertUnicodeDbSlug()})) {
                    $decrypted = \App\Helpers\Helper::gracefulDecrypt($field,$asset->{$field->convertUnicodeDbSlug()});
                    $value = (Gate::allows('superadmin')) ? $decrypted : strtoupper(trans('admin/custom_fields/general.encrypted'));

                    $fields_array[$field->name] = [
                        'field' => $field->convertUnicodeDbSlug(),
                        'value' => $value,
                        'field_format' => $field->format,
                    ];

                } else {
                    $fields_array[$field->name] = [
                        'field' => $field->convertUnicodeDbSlug(),
                        'value' => $asset->{$field->convertUnicodeDbSlug()},
                        'field_format' => $field->format,
                    ];
                }
                $array['custom_fields'] = $fields_array;
            }
        } else {
            $array['custom_fields'] = array();
        }

        $permissions_array['available_actions'] = [
            'checkout' => (bool) Gate::allows('checkout', Asset::class),
            'checkin' => (bool) Gate::allows('checkin', Asset::class),
            'clone' => Gate::allows('create', Asset::class) ? true : false,
            'restore' => false,
            'update' => (bool) Gate::allows('update', Asset::class),
            'delete' => ($asset->assigned_to=='' && Gate::allows('delete', Asset::class) ? true : false),
        ];

        if ($asset->deleted_at!='') {
            $permissions_array['available_actions'] = [
                'checkout' => true,
                'checkin' => false,
                'clone' => Gate::allows('create', Asset::class) ? true : false,
                'restore' => Gate::allows('create', Asset::class) ? true : false,
                'update' => false,
                'delete' => false,
            ];
        }

        $array += $permissions_array;
        return $array;
    }

    /**
     * Returns an array of assets to be exported offline through a custom view definition
     *
     * @param Asset $asset
     * @param $standard_fields
     * @param $custom_fields
     * @return array
     */
    public function transformAssetForExport(Asset $asset,$standard_fields,$custom_fields)
    {
        $array = [];
        foreach ($standard_fields as $standard_field) {
            $field = explode('.',$standard_field)[1];
            if($field!='id'){
                if(str_contains($field,'_id'))
                    $field = explode('_id',$field)[0];


                switch($field){
                    case 'status':
                        $field='status_label';break;
                    default: break;
                }
            }
            switch ($field){
                case 'id': $array['id']=(int) $asset->id;break;
                case 'name': $array['name'] =e($asset->name); break;
                case 'asset_tag': $array['asset_tag'] =e($asset->asset_tag); break;
                case 'serial': $array['serial'] =e($asset->serial); break;
                case 'model': $array['model'] =($asset->model) ? ($asset->model->name) : null; break;
                case 'department': $array['department'] =(($asset->department) && ($asset->department->name)) ? e($asset->department->name) : null; break;
                case 'model_number': $array['model_number'] =(($asset->model) && ($asset->model->model_number)) ? e($asset->model->model_number) : null; break;
                case 'eol': $array['eol'] =($asset->purchase_date!='' && $asset->purchase_date!=null) ? $asset->purchase_date->toDateString() : null ; break;
                case 'status_label': $array['status_label'] =($asset->assetstatus) ? e($asset->assetstatus->name) : null; break;
                case 'category': $array['category'] =(($asset->model) && ($asset->model->category)) ? e($asset->model->category->name) : null; break;
                case 'manufacturer': $array['manufacturer'] =(($asset->model) && ($asset->model->manufacturer)) ? e($asset->model->manufacturer->name) : null; break;
                case 'supplier': $array['supplier'] =($asset->supplier) ? e($asset->supplier->name) : null; break;
                case 'notes': $array['notes'] =($asset->notes) ? e($asset->notes) : null; break;
                case 'order_number': $array['order_number'] =($asset->order_number) ? e($asset->order_number) : null; break;
                case 'company': $array['company'] =($asset->company) ?  e($asset->company->name) : null; break;
                case 'location': $array['location'] =($asset->location) ? e($asset->location->name): null; break;
                case 'rtd_location': $array['rtd_location'] =($asset->defaultLoc) ?  e($asset->defaultLoc->name) : null; break;
                case 'image': $array['image'] =($asset->getImageUrl()) ? $asset->getImageUrl() : null; break;
                case 'assigned_to': $array['assigned_to'] =$this->transformAssignedTo($asset); break;
                case 'warranty_months': $array['warranty_months'] = ($asset->warranty_months > 0) ? e($asset->warranty_months . ' ' . trans('admin/hardware/form.months')) : null; break;
                case 'warranty_expires': $array['warranty_expires'] =($asset->warranty_months > 0) ?  Helper::getFormattedDateObject($asset->warranty_expires, 'date') : null; break;
                case 'last_audit_date': $array['last_audit_date'] =Helper::getFormattedDateObject($asset->last_audit_date, 'datetime'); break;
                case 'next_audit_date': $array['next_audit_date'] =Helper::getFormattedDateObject($asset->next_audit_date, 'date'); break;
                case 'purchase_date': $array['purchase_date'] =($asset->purchase_date!='' && $asset->purchase_date!=null) ? $asset->purchase_date->toDateString() : null ; break;
                case 'last_checkout': $array['last_checkout'] =Helper::getFormattedDateObject($asset->last_checkout, 'datetime'); break;
                case 'expected_checkin': $array['expected_checkin'] =Helper::getFormattedDateObject($asset->expected_checkin, 'date'); break;
                case 'purchase_cost': $array['purchase_cost'] =Helper::formatCurrencyOutput($asset->purchase_cost); break;
                case 'checkin_counter': $array['checkin_counter'] =(int) $asset->checkin_counter; break;
                case 'checkout_counter': $array['checkout_counter'] =(int) $asset->checkout_counter; break;
                case 'requests_counter': $array['requests_counter'] =(int) $asset->requests_counter; break;
                case 'user_can_checkout': $array['user_can_checkout'] =(bool) $asset->availableForCheckout(); break;
                case 'created_at': $array['created_at'] =($asset->created_at!='' && $asset->created_at!=null) ? $asset->created_at->toDateString() : null ; break;
                case 'updated_at': $array['updated_at'] =($asset->updated_at!='' && $asset->updated_at!=null) ? $asset->updated_at->toDateString() : null ; break;
                case 'deleted_at': $array['deleted_at'] =($asset->deleted_at!='' && $asset->deleted_at!=null) ? $asset->deleted_at->toDateString() : null ; break;

                default : $array[$field] = $asset[$field];
            }
        }
        foreach ($custom_fields as $custom_field) {
            $array[$custom_field] = $asset->$custom_field;
        }
        return $array;
    }
}