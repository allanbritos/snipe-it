<?php
namespace App\Presenters;

use App\Http\Controllers\Api\UserViewsController;
use App\Models\CustomField;
use App\Models\UserViews;
use DateTime;

/**
 * Class AssetPresenter
 * @package App\Presenters
 */
class UserViewsPresenter extends  AssetPresenter
{

    public static function customDataTableLayout($id)
    {
        $view = UserViews::find($id);
        $columns = json_decode($view->columns);
        $orders = json_decode($view->orders);
        $standard_fields = [];
        $cf = [];
        $column_order = [];

        foreach ($columns->standard_fields as $standard_field) {
            $standard_fields[] = $standard_field;
        }

        foreach ($columns->custom_fields as $custom_field) {
            $cf[] = $custom_field;
        }

        foreach ($orders->orders as $order) {
            $column_order[] = $order;
        }

        if(sizeof($standard_fields) == 0 && sizeof($cf) == 0)
            return json_encode([]);


        $filters = json_decode($view->filters);
        $select = null;
        $custom_fields = CustomField::select('*')->whereIn('id',$cf)->get();
        $where = null;$key=0;

        foreach ($filters->filters as $filter){
            if($key!=0) $where.=' AND ';$key++;
            $where.= " (_snipeit_$filter->field $filter->operator '$filter->value') ";
        }

        $layout = [];


        //$column_presentation = $column_order;
        foreach ($column_order as $order){
            if(true)
                false;
            if((int)$order->field == 0){
                //Standard Field;
                false;
            }else{
                //Custom Field
            }
        }



        foreach ($standard_fields as $sf) {

            $pc = self::standardFieldsTableFormatting($sf);
            unset($pc['raw']);
            if($pc!=null){
                $layout[] = $pc;

            }
        }

        foreach ($custom_fields as $field) {
            $layout[] = [
                "field" => 'custom_fields.' . $field->convertUnicodeDbSlug(),
                "searchable" => true,
                "sortable" => true,
                //"switchable" => true,
                "title" => ($field->field_encrypted == '1') ? '<i class="fa fa-lock"></i> ' . e($field->name) : e($field->name),
                "formatter" => "customFieldsFormatter",
                "filterControl" => 'input',
                "_id"=>$field->id,

            ];
        }

        $reorder = [];
        $reorder[] = [
            "field" => "checkbox",
            "checkbox" => true,
        ];
        $reorder[] = [
            "field" => "id",
            "searchable" => false,
            "sortable" => true,
            "switchable" => true,
            "title" => trans('general.id'),
            "visible" => false
        ];
        foreach ($column_order as $co){
            foreach ($layout as $l) {
                if(isset($l['_id'])) {
                    if($l['_id']==$co->field) {
                        $reorder[] = $l;break;
                    }
                }else{
                    if($l['field']==$co->field || $l['field'].'_id'==$co->field || ($co->field=='status_id' && $l['field']=='status_label')) {
                        $reorder[] = $l;
                        break;
                    }
                }
            }
        }

        $layout = $reorder;
        /*
        */
        $layout[] = [
            "field" => "checkincheckout",
            "searchable" => false,
            "sortable" => false,
            "switchable" => true,
            "title" => trans('general.checkin').' / '.trans('general.checkout'),
            "visible" => false,
            "formatter" => "hardwareInOutFormatter",
        ];

        $layout[] = [
            "field" => "actions",
            "searchable" => false,
            "sortable" => false,
            "switchable" => false,
            "title" => trans('table.actions'),
            "formatter" => "hardwareActionsFormatter",
        ];

        return json_encode($layout);
    }


    private static function standardFieldsTableFormatting($field)
    {

        $layout = [
            [   "raw" => "id",
                "field" => "id",
                "searchable" => true,
                "sortable" => true,
                "switchable" => true,
                "title" => trans('general.id'),
                "visible" => false
            ], [
                "raw" => "accepted",
                "field" => "accepted",
                "searchable" => true,
                "sortable" => false,
                "switchable" => false,
                "title" => ucfirst(trans('general.accepted')),
                "visible" => true,
                "filterControl" => 'input',
            ], [
                "raw" => "name",
                "field" => "name",
                "searchable" => true,
                "sortable" => true,
                "title" => trans('admin/hardware/form.name'),
                "visible" => true,
                "formatter" => "hardwareLinkFormatter",
                "filterControl" => 'input',
            ], [
                "raw" => "image",
                "field" => "image",
                "searchable" => true,
                "sortable" => true,
                "switchable" => true,
                "title" => trans('admin/hardware/table.image'),
                "visible" => true,
                "formatter" => "imageFormatter"
            ], [
                "raw" => "asset_tag",
                "field" => "asset_tag",
                "searchable" => true,
                "sortable" => true,
                "title" => trans('admin/hardware/table.asset_tag'),
                "visible" => true,
                "formatter" => "hardwareLinkFormatter",
                "filterControl" => 'input',
            ], [
                "raw" => "serial",
                "field" => "serial",
                "searchable" => true,
                "sortable" => true,
                "title" => trans('admin/hardware/form.serial'),
                "visible" => true,
                "formatter" => "serialLinkFormatter",
                "filterControl" => 'input',
            ],  [
                "raw" => "model_id",
                "field" => "model",
                "searchable" => true,
                "sortable" => true,
                "title" => trans('general.asset_model'),
                "visible" => true,
                "formatter" => "modelsLinkObjFormatter",
                "filterControl" => 'input',
            ], [
                "raw" => "model_id",
                "field" => "model_number",
                "searchable" => true,
                "sortable" => true,
                "title" => trans('general.model_no'),
                "visible" => false
            ],[
                "raw" => "department",
                "field" => "department",
                "searchable" => true,
                "sortable" => true,
                "title" => trans('general.department'),
                "visible" => true,
                "filterControl" => 'select',
                "filterData" => 'url:'.route('api.fields.filterhintColumn',['field'=>'department'])

            ], [
                "raw" => "category_id",
                "field" => "category",
                "searchable" => true,
                "sortable" => true,
                "title" => trans('general.category'),
                "visible" => true,
                "formatter" => "categoriesLinkObjFormatter",
                "filterControl" => 'input',
            ], [
                "raw" => "status_id",
                "field" => "status_label",
                "searchable" => true,
                "sortable" => true,
                "title" => trans('admin/hardware/table.status'),
                "visible" => true,
                "formatter" => "statuslabelsLinkObjFormatter",
                "filterControl" => 'select',
                "filterData" => 'url:'.route('api.fields.filterhintColumn',['field'=>'status'])
            ], [
                "raw" => "assigned_to",
                "field" => "assigned_to",
                "searchable" => true,
                "sortable" => true,
                "title" => trans('admin/hardware/form.checkedout_to'),
                "visible" => true,
                "formatter" => "polymorphicItemFormatter",
                "filterControl" => 'input',
            ], [
                "raw" => "employee_number",
                "field" => "employee_number",
                "searchable" => true,
                "sortable" => false,
                "title" => trans('admin/users/table.employee_num'),
                "visible" => true,
                "formatter" => "employeeNumFormatter",
                "filterControl" => 'input',
            ],[
                "raw" => "location_id",
                "field" => "location",
                "filter-control"=>"select",
                "searchable" => true,
                "sortable" => true,
                "title" => trans('admin/hardware/table.location'),
                "visible" => true,
                "formatter" => "deployedLocationFormatter",
                "filterControl" => 'select',
                "filterData" => 'url:'.route('api.fields.filterhintColumn',['field'=>'location'])
            ], [
                "raw" => "rtd_location",
                "field" => "rtd_location",
                "searchable" => true,
                "sortable" => true,
                "title" => trans('admin/hardware/form.default_location'),
                "visible" => false,
                "formatter" => "deployedLocationFormatter"
            ], [
                "raw" => "manufacturer_id",
                "field" => "manufacturer",
                "searchable" => true,
                "sortable" => true,
                "title" => trans('general.manufacturer'),
                "visible" => true,
                "formatter" => "manufacturersLinkObjFormatter",
                "filterControl" => 'input',
                //"filterData" => 'url:'.route('api.fields.filterhintColumn',['field'=>'manufacturer'])
            ],[
                "raw" => "supplier_id",
                "field" => "supplier",
                "searchable" => true,
                "sortable" => true,
                "title" => trans('general.supplier'),
                "visible" => true,
                "formatter" => "suppliersLinkObjFormatter",
                "filterControl" => 'select',
                "filterData" => 'url:'.route('api.fields.filterhintColumn',['field'=>'supplier'])
            ], [
                "raw" => "purchase_date",
                "field" => "purchase_date",
                "searchable" => true,
                "sortable" => true,
                "visible" => true,
                "title" => trans('general.purchase_date'),
                "formatter" => "dateDisplayFormatter",
                "filterControl" => 'input',
            ], [
                "raw" => "purchase_cost",
                "field" => "purchase_cost",
                "searchable" => true,
                "sortable" => true,
                "title" => trans('general.purchase_cost'),
                "footerFormatter" => 'sumFormatter',
                "filterControl" => 'input',
            ], [
                "raw" => "order_number",
                "field" => "order_number",
                "searchable" => true,
                "sortable" => true,
                "visible" => true,
                "title" => trans('general.order_number'),
                'formatter' => "orderNumberObjFilterFormatter",
                "filterControl" => 'input',
            ], [
                "raw" => "eol",
                "field" => "eol",
                "searchable" => true,
                "sortable" => false,
                "visible" => true,
                "title" => trans('general.eol'),
                "formatter" => "dateDisplayFormatter",
                "filterControl" => 'input',
            ], [
                "raw" => "warranty_months",
                "field" => "warranty_months",
                "searchable" => true,
                "sortable" => true,
                "visible" => true,
                "title" => trans('admin/hardware/form.warranty'),
                "filterControl" => 'input',
            ],[
                "raw" => "warranty_expires",
                "field" => "warranty_expires",
                "searchable" => true,
                "sortable" => false,
                "visible" => true,
                "title" => trans('admin/hardware/form.warranty_expires'),
                "formatter" => "dateDisplayFormatter",
                "filterControl" => 'input',
            ],[
                "raw" => "notes",
                "field" => "notes",
                "searchable" => true,
                "sortable" => true,
                "visible" => true,
                "title" => trans('general.notes'),

            ], [
                "raw" => "checkout_counter",
                "field" => "checkout_counter",
                "searchable" => true,
                "sortable" => true,
                "visible" => true,
                "title" => trans('general.checkouts_count'),
                "filterControl" => 'input',

            ],[
                "raw" => "checkin_counter",
                "field" => "checkin_counter",
                "searchable" => true,
                "sortable" => true,
                "visible" => true,
                "title" => trans('general.checkins_count'),
                "filterControl" => 'input',

            ], [
                "raw" => "requests_counter",
                "field" => "requests_counter",
                "searchable" => true,
                "sortable" => true,
                "visible" => true,
                "title" => trans('general.user_requests_count'),
                "filterControl" => 'input',

            ], [
                "raw" => "created_at",
                "field" => "created_at",
                "searchable" => true,
                "sortable" => true,
                "visible" => true,
                "title" => trans('general.created_at'),
                "formatter" => "dateDisplayFormatter",
                "filterControl" => 'input',
            ], [
                "raw" => "updated_at",
                "field" => "updated_at",
                "searchable" => true,
                "sortable" => true,
                "visible" => true,
                "title" => trans('general.updated_at'),
                "formatter" => "dateDisplayFormatter",
                "filterControl" => 'input',
            ],[
                "raw" => "deleted_at",
                "field" => "deleted_at",
                "searchable" => true,
                "sortable" => true,
                "visible" => true,
                "title" => 'Deleted At',
                "formatter" => "dateDisplayFormatter",
                "filterControl" => 'input',
            ], [
                "raw" => "last_checkout",
                "field" => "last_checkout",
                "searchable" => true,
                "sortable" => true,
                "visible" => true,
                "title" => trans('admin/hardware/table.checkout_date'),
                "formatter" => "dateDisplayFormatter",
                "filterControl" => 'input',
            ], [
                "raw" => "expected_checkin",
                "field" => "expected_checkin",
                "searchable" => true,
                "sortable" => true,
                "visible" => true,
                "title" => trans('admin/hardware/form.expected_checkin'),
                "formatter" => "dateDisplayFormatter",
                "filterControl" => 'input',
            ], [
                "raw" => "last_audit_date",
                "field" => "last_audit_date",
                "searchable" => true,
                "sortable" => true,
                "visible" => true,
                "title" => trans('general.last_audit'),
                "formatter" => "dateDisplayFormatter",
                "filterControl" => 'input',
            ], [
                "raw" => "next_audit_date",
                "field" => "next_audit_date",
                "searchable" => true,
                "sortable" => true,
                "visible" => true,
                "title" => trans('general.next_audit_date'),
                "formatter" => "dateDisplayFormatter",
                "filterControl" => 'input',
            ],
        ];
        foreach ($layout as $l) {
            if($l['raw'] == $field)
                return $l;
        }
    }
}
