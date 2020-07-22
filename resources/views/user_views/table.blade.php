<div class="row">
    <div class="col-lg-12">
        <div class="box-solid box-body" id="viewV">
            {{ Form::open([
          'method' => 'POST',
          'route' => ['hardware/bulkedit'],
          'class' => 'form-inline',
          'onkeydown' => 'return event.key != \'Enter\';',
           'id' => 'bulkForm']) }}
            <div class="row">
                <div class="col-md-12">
                    @if (Request::get('status')!='Deleted')
                        <div id="toolbar">
                            <select name="bulk_actions" class="form-control select2">
                                <option value="edit">Edit</option>
                                <option value="delete">Delete</option>
                                <option value="labels">Generate Labels</option>
                            </select>
                            <button class="btn btn-primary" id="bulkEdit" disabled>Go</button>
                        </div>
                    @endif
                    <table data-advanced-search="true"
                           data-click-to-select="true"
                           data-columns="{{ \App\Presenters\UserViewsPresenter::customDataTableLayout($id) }}"
                           data-cookie-id-table="userView{{$id}}Table"
                           data-pagination="true"
                           data-id-table="userView{{$id}}Table"
                           data-search="true"
                           data-side-pagination="server"
                           data-show-columns="true"
                           data-filter-show-clear="true"
                           data-show-export="true"
                           data-show-footer="true"
                           data-show-refresh="true"
                           data-sort-order="asc"
                           data-sort-name="name"
                           data-search-on-enter-key="true"
                           data-toolbar="#toolbar"
                           id="userView{{$id}}Table"
                           class="table table-striped snipe-table"
                           data-url="{{ route('api.user_views.datatable',
                                            array('id'=>$id,'status' => e(Request::get('status')),
                                            'order_number'=>e(Request::get('order_number')),
                                            'company_id'=>e(Request::get('company_id')),
                                            'status_id'=>e(Request::get('status_id'))
                                            )) }}"
                           data-export-options='{
                                        "fileName": "export{{ (Request::has('status')) ? '-'.str_slug(Request::get('status')) : '' }}-assets-{{ date('Y-m-d') }}",
                                        "ignoreColumn": ["actions","image","change","checkbox","checkincheckout","icon"]
                                        }'>
                    </table>
                </div>
            </div>
            {{ Form::close() }}
        </div>
    </div>
</div>
<script type="text/javascript">
    $(document).ready(function () {
        initiateCustomTable();
    })
</script>