@if(!isset($userView))
    <h4 class="box-title">
        New Custom View
    </h4>
@endif
@if(isset($userView))
    {{ Form::model($userView,['route'=>['user_views.update','id'=>$id],'method'=>'POST','class'=>'form-horizontal has-validation-callback','id'=>'addform','name'=>'addform']) }}
    {{ Form::input('hidden','ajax','ajax',[]) }}
@else
    @php($userView = new \App\Models\UserViews())
    {{ Form::open(['route'=>'user_views.store','method'=>'POST','class'=>'form-horizontal has-validation-callback','id'=>'addform','name'=>'addform']) }}
@endif
<br/>
<div class="row">
    <div class="col-lg-6 col-md-6 col-sm-6">
        <div class="form-group">
            <label for="name" class="control-label col-md-2"> Name</label>
            <div class="col-md-10">
                {{ Form::input('text','name',$userView->name,['class'=>'form-control col-md-6 has-feedback','id'=>'name','onchange'=>'validateForm()']) }}
                <p class="help-block hidden" id="nameError" style="color: red;"><i
                            class="fa fa-question-circle"></i><span id="errorMessage"> </span></p>
            </div>
        </div>
    </div>
    <div class="col-lg-6 col-md-6 col-sm-6 text-left">
        <div class="form-group">
            <label for="public" class="control-label">
                {{ Form::checkbox('public',1,$userView->public,['class'=>'minimal']) }}
                Public View
            </label>
            <p class="help-block"><i class="fa fa-question-circle"></i> Make your view visible to others</p>
        </div>
    </div>
</div>

<div class="row">
    <div class="col-lg-12 col-md-12 col-sm-12">
        <div class="nav-tabs-custom">
            <ul class="nav nav-tabs">
                <li class="active">
                    <a href="#sfields" data-toggle="tab"><span class=""></span>
                        <span class="">Standard Fields</span></a>
                </li>
                <li>
                    <a href="#cfields" data-toggle="tab"><span class=""></span>
                        <span class="">Custom Fields</span></a>
                </li>
                <li>
                    <a href="#filters" data-toggle="tab"><span class=""></span>
                        <span class=""> Pre-Filter</span></a>
                </li>
                <li>
                    <a href="#order" data-toggle="tab"><span class=""></span>
                        <span class=""> Column Order</span></a>
                </li>
                <li class="pull-right with-border">
                    <a href="#" class="btn btn-sm btn-primary" id="btnSubmit" onclick="submitView()">
                        <span><i id="lblSave" class="fa fa-floppy-o"></i></span>
                        <span> Save</span>
                    </a>
                </li>
                <li class="pull-right">
                    @if(isset($userView->id))
                        <a href="#" class="btn btn-sm btn-primary"
                           onclick="$('#editV').removeClass('active');$('#editTab').removeClass('active');">
                            <span><i class="fa fa-stop-circle"></i></span>
                            <span> Cancel</span>
                        </a>
                    @else
                        <a href="#" class="btn btn-sm btn-primary" onclick="loadHelp()">
                            <span><i class="fa fa-stop-circle"></i></span>
                            <span> Cancel</span>
                        </a>
                    @endif
                </li>
            </ul>
        </div>
    </div>
    <div class="col-lg-12 col-md-12 col-sm-12">
        <div class="tab-content">
            <div class="tab-pane fade in active box-body" id="sfields">
                <div class="row">
                    <div class="col-lg-4 col-md-6 col-sm-12 col-lg-offset-2">
                        <p class="help-block"><i class="fa fa-question-circle"></i> Double click a field to select</p>

                        @php($sfields=\App\Http\Controllers\Api\UserViewsController::standardFieldsCollection())

                        <select class="form-control" style="min-width: 300px;" id="sFields1" name="sFields1" multiple
                                size="8">
                            @foreach($sfields as $s)
                                @if(!in_array($s['name'],$sf))
                                    <option value="{{$s['name']}}">{{ $s['text'] }}</option>
                                @endif
                            @endforeach

                        </select>
                        <br/>
                        <a href="#" class="btn btn-primary btn-sm " id="sbtnAllRight">Add All Fields</a>
                        <a href="#" class="btn btn-primary btn-sm " id="sbtnRight">(Add Fields) -></a>
                    </div>
                    <div class="col-lg-4 col-md-6 col-sm-12">
                        <p class="help-block"><i class="fa fa-question-circle"></i> Double click a field to remove</p>
                        @php($sfields=\App\Http\Controllers\Api\UserViewsController::standardFieldsCollection())
                        <select class="form-control" style="min-width: 300px;" id="sFields2" name="sFields2" multiple
                                size="8">
                            @foreach($sf as $key => $value)
                                <option value="{{$value}}">{{str_replace('_',' ',ucwords($value))}}</option>
                            @endforeach
                        </select>
                        <br/>
                        <a href="#" class="btn btn-primary btn-sm " id="sbtnLeft"> <- (Remove Fields) </a>
                        <a href="#" class="btn btn-primary btn-sm " id="sbtnAllLeft">Clear All Fields</a>
                    </div>
                </div>
            </div>

            <div class="tab-pane fade in box-body" id="cfields">
                <div class="row">
                    <div class="col-lg-4 col-md-6 col-sm-12 col-lg-offset-2">
                        <p class="help-block"><i class="fa fa-question-circle"></i> Double click a field to add</p>
                        @php($fields=\App\Http\Controllers\Api\UserViewsController::customFieldsCollection())
                        <select class="form-control" style="min-width: 300px;" id="lstBox1" name="lstBox1" multiple
                                size="8">
                            @foreach($fields as $field)
                                @if(!in_array($field->id,$cf))
                                    <option value="{{$field->id}}">{{$field->name}}</option>
                                @endif
                            @endforeach
                        </select>
                        <br/>
                        <a href="#" class="btn btn-primary btn-sm " id="btnAllRight">Add All Fields</a>
                        <a href="#" class="btn btn-primary btn-sm " id="btnRight"> (Add Fields) -></a>
                    </div>
                    <div class="col-lg-4 col-md-6 col-sm-12">
                        <p class="help-block"><i class="fa fa-question-circle"></i> Double click a field to remove</p>
                        <select class="form-control" style="min-width: 300px;" id="lstBox2" name="lstBox2" multiple
                                size="8">
                            @foreach($fields as $field)
                                @if(in_array($field->id,$cf))
                                    <option value="{{$field->id}}">{{$field->name}}</option>
                                @endif
                            @endforeach
                        </select>
                        <br/>
                        <a href="#" class="btn btn-primary btn-sm" id="btnLeft"> <- (Remove Fields) </a>
                        <a href="#" class="btn btn-primary btn-sm" id="btnAllLeft">Clear All Fields</a>
                    </div>
                </div>
            </div>
            <div class="tab-pane fade in box-body" id="filters">
                <div class="row text-right">
                    <div class="col-lg-8 col-md-12 col-sm-12 col-lg-offset-2">
                        <a href="#" class="btn btn-sm btn-default hidden" id="cancelFilterBtn"
                           onclick="
                           $('#addFilterBtn').removeClass('hidden');
                           $('#cancelFilterBtn').addClass('hidden');
                           $('#add_filter').addClass('hidden');">
                            <i class="fa fa-stop-circle"></i> Cancel
                        </a>
                        <a href="#" class="btn btn-sm btn-default" id="addFilterBtn"
                           onclick="
                           $('#addFilterBtn').addClass('hidden');
                           $('#cancelFilterBtn').removeClass('hidden');
                           addCondition()" title="New Filter">
                            <i class="fa fa-plus-circle"></i> New Filter
                        </a>
                    </div>
                </div>
                <div class="row hidden" id="add_filter">
                    <div class="col-lg-8 col-md-12 col-sm-12 col-lg-offset-2">
                        <h5 class="box-title">Add Pre-Filter</h5>
                        <div class="col-lg-4 col-md-12 col-sm-12">
                            <label class="control-label" for="_field">Field</label>
                            <select class="" data-endpoint="fields/list" data-placeholder="Select a Field"
                                    id="_field" style="width: 100%;">
                                <option>Select a Field</option>
                            </select>
                        </div>
                        <div class="col-lg-4 col-md-12 col-sm-12">
                            <label class="control-label" for="_condition"> Operator</label>
                            <select class="form-control" id="_operator" onchange="operatorHelp($(this).val())">
                                <option value="[Equal]">Equal (=)</option>
                                <option value="[Greater]">Greater Than (>)</option>
                                <option value="[Greater]">Greater Than (>)</option>
                                <option value="[Lesser]">Lesser Than (<)</option>
                                <option value="[Equal-Greater]">Equal or Greater Than (>=)</option>
                                <option value="[Equal-Lesser]">Equal or Lesser Than (<=)</option>
                                <option value="[Not-Equal]">Not Equal to (!=)</option>
                                <option value="[In]">In</option>
                                <option value="[Not-In]">Not In</option>
                                <option value="[Like]">Like</option>
                            </select>
                        </div>
                        <div class="col-lg-4 col-md-12 col-sm-12">
                            <label class="control-label" for="_value"> Value</label>
                            <div class="input-group col-md-12" style="padding-left: 0px;">
                                <div class="ui-widget">
                                    <input type="text" id="_value" class="form-control">
                                </div>
                                <span class="input-group-addon" style="margin: 0;padding:0">
                                    <a href="#" class="btn btn-sm btn-default btn-group" onclick="saveCondition();"> Add Filter</a>
                                </span>

                            </div>
                            <p class="help-block"><i class="fa fa-question-circle"></i> <span id="helpBlock"></span></p>
                        </div>
                    </div>
                </div>
                <div class="row" id="conditions">
                    <div id="conditions_result" class="col-lg-12 col-md-12 col-sm-12">
                        <label class="control-label" for="_value"> Filters</label>
                        @foreach($filters as $filter)
                            @if(isset($filter->field))
                                <div id="_con_{{$filter->field}}" class="input-group input-group-sm">
                                    <input type="text"
                                           data-oper="{{$filter->operator}}"
                                           data-field="{{$filter->field}}"
                                           data-limit="{{$filter->delimiter}}"
                                           id='_{{$filter->field}}'
                                           name='_{{$filter->field}}'
                                           value='{{$filter->label}} {{$filter->delimiter}} {{$filter->value}}'
                                           class="_cond form-control" readonly>
                                    <span class="input-group-btn">
                                            <button type="button" class="btn btn-danger btn-flat"
                                                    onclick="$('#_con_{{$filter->field}}').remove()" title="Delete">
                                                <i class="fa fa-trash"></i>
                                            </button>
                                    </span>
                                    <script>
                                        $('#_{{$filter->field}}').on('keypress, keydown', function (event) {
                                            var $field = $(this);
                                            if ((event.which !== 37 && (event.which !== 39))
                                                && ((this.selectionStart < $(`#_${$(this).attr('data-field')}`).val().indexOf(`${$(this).attr('data-oper')}`) + (`${$(this).attr('data-oper')}`).length)
                                                    || ((this.selectionStart == $(`#_${$(this).attr('data-field')}`).val().indexOf(`${$(this).attr('data-oper')}`) + (`${$(this).attr('data-oper')}`).length) && (event.which == 8)))) {
                                                return false;
                                            }
                                        });
                                    </script>
                                    <br/>
                                </div>
                            @endif
                        @endforeach
                    </div>
                </div>
            </div>
            <div class="tab-pane fade in box-body" id="order">
                <div class="row">
                    <div class="col-lg-4 col-md-6 col-sm-12 col-lg-offset-4 col-md-offset-2">
                        <p class="help-block"><i class="fa fa-question-circle"></i> Drag the fields to re-order</p>
                        <ul id="sortable" class="list-unstyled">
                            @foreach($orders as $order)
                                @if($order->label!='' && $order->field != 'undefined')
                                    <li class="ui-state-default" id="_o_{{$order->field}}"><span
                                                class="fa fa-ellipsis-v"></span>{{$order->label}}</li>
                                @endif
                            @endforeach
                        </ul>
                        <script>
                            $(function () {
                                $("#sortable").sortable();
                                $("#sortable").disableSelection();
                            });
                        </script>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
{{ Form::close() }}
<script type="text/javascript">
    function changed() {
        $('#lblSave').removeClass('fa-check');
        $('#lblSave').addClass('fa-floppy-o');
    }

    function saveCondition() {
        changed();
        var res = $('#conditions_result');
        var field = $('#_field');
        var fieldName = $('#_field option:selected').text().trim();
        var operator = $('#_operator');
        var value = $('#_value');
        var id;
        if (!field.val() || !operator.val() || !value.val() || field.val() === 'Select a Field') {
            alert('Fill all the required fields');
            if (!operator.val()) operator.addClass('required');
            if (!value.val()) value.addClass('required');
        } else {
            if (field.val() >= 1000) id = fieldName.trimRight(); else id = field.val();
            res.append(`<div id="_con_${id}" class="form-group">
                            <div class="input-group input-group-sm">
                                <input  type="text"
                                        id='_${id}'
                                        name='_${id}'
                                        value='${fieldName} ${operator.val()} ${value.val()}'
                                        class="col-lg-10 form-control" readonly>
                                <span class="input-group-btn">
                                    <button type="button" class="btn btn-danger btn-flat"  onclick="$('#_con_${id}').remove()"  title="Delete">
                                        <i class="fa fa-trash"></i>
                                    </button>
                                </span>
                            </div>
                            <br/>
                        </div>`);
            field.val(null);
            field.trigger('change');
            value.val(null);
            operator.select(null);
        }
    }


    function addCondition() {
        $('#add_filter').removeClass('hidden');
        initFieldSearch();
        initFilterHint();
    }

    function operatorHelp(id) {
        if (id === '[In]' || id === '[Not-In]') {
            $('#helpBlock').html('Separte each value with a comma: a,b,c')
        } else if (id === '[Like]') {
            $('#helpBlock').html('Use % as wildcards in your search: %abc%')
        } else {
            $('#helpBlock').html('For date fields, use: YYYY-MM-DD format')
        }
    }


    function formatDatalist(datalist) {
        console.log(datalist);
        var loading_markup = '<i class="fa fa-spinner fa-spin" aria-hidden="true"></i> Loading...';
        if (datalist.loading) {
            return loading_markup;
        }
        var markup = "<div class='clearfix'>";
        markup += "<div>" + datalist.text + "</div>";
        markup += "</div>";
        return markup;
    }

    function formatDataSelection(datalist) {
        console.log(datalist);
        return datalist.text;
    }

    function initFieldSearch() {
        $('#_field').select2({
            placeholder: '',
            allowClear: true,
            ajax: {
                url: '{{ route('api.fields.selectlist') }}',
                dataType: 'json',
                delay: 250,
                headers: {
                    "X-Requested-With": 'XMLHttpRequest',
                    "X-CSRF-TOKEN": $('meta[name="csrf-token"]').attr('content')
                },
                data: function (params) {
                    var data = {
                        search: params.term,
                        page: params.page || 1
                    };
                    return data;
                },
                processResults: function (data, params) {
                    params.page = params.page || 1;
                    var answer = {
                        results: data.items,
                        pagination: {
                            more: "false"
                        }
                    };
                    return answer;
                },
                cache: false,
                error: function (request, status, error) {
                    console.log(request, status, error);
                }
            },
            escapeMarkup: function (markup) {
                return markup;
            },
            templateResult: formatDatalist,
            templateSelection: formatDataSelection
        });
    }

    function initFilterHint() {
        $('#_value').each(function (i, item) {
            var c = $(item);
            c.autocomplete({
                source: function (request, response) {
                    $.ajax({
                        url: '{{ route('api.fields.filterhint') }}',
                        dataType: "json",
                        headers: {
                            "X-Requested-With": 'XMLHttpRequest',
                            "X-CSRF-TOKEN": $('meta[name="csrf-token"]').attr('content')
                        },
                        data: {
                            term: request.term,
                            field: $('#_field').val(),
                            field_t: $('#_field :selected').text(),
                            oper: $('#_operator :selected').text()
                        },
                        success: function (data) {
                            response(data);
                        }
                    });
                },
                minLength: 2
            });
        });
    }

    function submitView() {
        var n = $('#name');
        if (!n.val()) {
            n.addClass('has-error');
            alert('Please type a name');
            n.focus();
        } else {
            var form = $('#addform');
            var selected = [];
            $("#sFields2 > option").each(function () {
                selected.push(this.value);
            });
            var standard_fields = selected.toString();
            $(`<input name="standard_fields" value="${standard_fields}">`).attr('type', 'hidden').appendTo(form);

            selected = [];
            $("#lstBox2 > option").each(function () {
                selected.push(this.value);
            });
            var custom_fields = selected.toString();
            $(`<input name="custom_fields" value="${custom_fields}">`).attr('type', 'hidden').appendTo(form);
            var order = [];
            $('#sortable li').each(function (i) {
                order.push($(this).attr('id').toString().substr(3) + ':' + $(this).text()); // This is your rel value
            });
            $(`<input name="order_fields" value="${order}">`).attr('type', 'hidden').appendTo(form);

            if (standard_fields.length > 0 || custom_fields.length > 0) {
                @if(isset($id))
                $.ajax({
                    url: '{{route('user_views.update',['id'=>$id])}}',
                    method: 'POST',
                    type: 'JSON',
                    data: $('#addform').serialize()
                }).done(function (response) {
                    @if(isset($id))
                    $('.custom-view-title').text(n.val());
                    $('.user-views[data-value="{{ $id }}"]').text(n.val());
                    reloadView({{$userView->id}});
                    @else
                    openView(response.id);
                    @endif
                    $('#lblSave').fadeOut().removeClass('fa-floppy-o');
                    $('#lblSave').fadeIn().addClass('fa-check');
                }).fail(function () {
                    @if(isset($id))
                    alert('Failed updating view!');
                    @else
                    alert('Failed creating the view!');
                    @endif
                });
                @else
                $('#addform').submit();
                @endif
            } else {
                alert('Select at least 1 field to include in the view!')
            }
        }
    }

    function validateForm() {
        changed();
        var n = $('#name');
        var e = $('#nameError');
        var em = $('#errorMessage');
        $.ajax({
            url: '{{route('user_views.validate')}}',
            method: 'POST',
            type: 'JSON',
            data: {name: n.val()},
        }).done(function (data) {
            if ($.parseJSON(data).exists) {
                var message = $.parseJSON(data).message;
                em.text(message);
                e.removeClass('hidden')
                $('#btnSubmit').addClass('hidden');
                n.focus();
            } else {
                e.addClass('hidden')
                $('#btnSubmit').removeClass('hidden');
            }
        }).fail(function () {
            alert("there was an error validating the form, please report it to your administrator");
        });
    }


    function sortFields(box) {
        changed();
        var options = $(`#${box} option`);
        var arr = options.map(function (_, o) {
            return {
                t: $(o).text(),
                v: o.value
            };
        }).get();
        arr.sort(function (o1, o2) {
            return o1.t > o2.t ? 1 : o1.t < o2.t ? -1 : 0;
        });
        options.each(function (i, o) {
            o.value = arr[i].v;
            $(o).text(arr[i].t);
        });
    }

    $(function () {
        //STANDARD FIELD SELECT
        $('#sFields1').dblclick(function (e) {
            var selectedOpts = $('#sFields1 option:selected');
            if (selectedOpts.length == 0) {
                e.preventDefault();
            }
            $('#sFields2').append($(selectedOpts).clone());
            $('#sortable').append(`<li class="ui-state-default" id="_o_${selectedOpts.val()}"><span class="fa fa-ellipsis-v"></span>${selectedOpts.text()}</li>`)
            $(selectedOpts).remove();
            e.preventDefault();
            changed();
        });
        $('#sbtnRight').click(function (e) {
            var selectedOpts = $('#sFields1 option:selected');
            if (selectedOpts.length == 0) {
                e.preventDefault();
            }
            $('#sFields2').append($(selectedOpts).clone());
            $('#sortable').append(`<li class="ui-state-default" id="_o_${selectedOpts.val()}"><span class="fa fa-ellipsis-v"></span>${selectedOpts.text()}</li>`)
            $(selectedOpts).remove();
            e.preventDefault();
            changed();
        });
        $('#sbtnAllRight').click(function (e) {
            var selectedOpts = $('#sFields1 option');
            if (selectedOpts.length == 0) {
                e.preventDefault();
            }
            $('#sFields2').append($(selectedOpts).clone());
            $("#sFields1 > option").each(function () {
                $('#sortable').append(`<li class="ui-state-default" id="_o_${this.value}"><span class="fa fa-ellipsis-v"></span>${this.text}</li>`)
            });
            $(selectedOpts).remove();
            e.preventDefault();
            changed();
        });
        //STANDARD FIELD DE-SELECT
        $('#sFields2').dblclick(function (e) {
            var selectedOpts = $('#sFields2 option:selected');
            if (selectedOpts.length == 0) {
                e.preventDefault();
            }
            $('#sFields1').append($(selectedOpts).clone());
            $(`#_o_${selectedOpts.val()}`).remove();
            $(selectedOpts).remove();
            sortFields('sFields1');
            e.preventDefault();
            changed();
        });
        $('#sbtnLeft').click(function (e) {
            var selectedOpts = $('#sFields2 option:selected');
            if (selectedOpts.length == 0) {
                e.preventDefault();
            }
            $('#sFields1').append($(selectedOpts).clone());
            $(`#_o_${selectedOpts.val()}`).remove();
            $(selectedOpts).remove();
            sortFields('sFields1');
            e.preventDefault();
            changed();
        });
        $('#sbtnAllLeft').click(function (e) {
            var selectedOpts = $('#sFields2 option');
            if (selectedOpts.length == 0) {
                e.preventDefault();
            }
            $('#sFields1').append($(selectedOpts).clone());
            $("#sFields2 > option").each(function () {
                $(`#_o_${this.value}`).remove();
            });
            $(selectedOpts).remove();
            sortFields('sFields1');
            e.preventDefault();
            changed();
        });

        //CUSTOM FIELDS SELECT

        $('#lstBox1').dblclick(function (e) {
            var selectedOpts = $('#lstBox1 option:selected');
            if (selectedOpts.length == 0) {
                e.preventDefault();
            }
            $('#lstBox2').append($(selectedOpts).clone());
            $('#sortable').append(`<li class="ui-state-default" id="_o_${selectedOpts.val()}"><span class="fa fa-ellipsis-v"></span>${selectedOpts.text()}</li>`)
            $(selectedOpts).remove();
            e.preventDefault();
            changed();
        });

        $('#btnRight').click(function (e) {
            var selectedOpts = $('#lstBox1 option:selected');
            if (selectedOpts.length == 0) {
                e.preventDefault();
            }
            $('#lstBox2').append($(selectedOpts).clone());
            $('#sortable').append(`<li class="ui-state-default" id="_o_${selectedOpts.val()}"><span class="fa fa-ellipsis-v"></span>${selectedOpts.text()}</li>`)
            $(selectedOpts).remove();
            e.preventDefault();
            changed();
        });
        $('#btnAllRight').click(function (e) {
            var selectedOpts = $('#lstBox1 option');
            if (selectedOpts.length == 0) {
                e.preventDefault();
            }
            $('#lstBox2').append($(selectedOpts).clone());
            $("#lstBox1 > option").each(function () {
                $('#sortable').append(`<li class="ui-state-default" id="_o_${this.value}"><span class="fa fa-ellipsis-v"></span>${this.text}</li>`)
            });
            $(selectedOpts).remove();
            e.preventDefault();
            changed();
        });

        //CUSTOM FIELDS DE-SELECT
        $('#lstBox2').dblclick(function (e) {
            var selectedOpts = $('#lstBox2 option:selected');
            if (selectedOpts.length == 0) {
                e.preventDefault();
            }
            $('#lstBox1').append($(selectedOpts).clone());
            $(`#_o_${selectedOpts.val()}`).remove();
            $(selectedOpts).remove();
            sortFields('lstBox1');
            e.preventDefault();
            changed();
        });

        $('#btnLeft').click(function (e) {
            var selectedOpts = $('#lstBox2 option:selected');
            if (selectedOpts.length == 0) {
                e.preventDefault();
            }
            $('#lstBox1').append($(selectedOpts).clone());
            $(`#_o_${selectedOpts.val()}`).remove();
            $(selectedOpts).remove();
            sortFields('lstBox1');
            e.preventDefault();
            changed();
        });
        $('#btnAllLeft').click(function (e) {
            var selectedOpts = $('#lstBox2 option');
            if (selectedOpts.length == 0) {
                e.preventDefault();
            }
            $('#lstBox1').append($(selectedOpts).clone());
            $("#lstBox2 > option").each(function () {
                $(`#_o_${this.value}`).remove();
            });
            $(selectedOpts).remove();
            sortFields('lstBox1');
            e.preventDefault();
            changed();
        });

    });

    $(function () {
        $('._cond').each(function (i, item) {
            var c = $(item);
            c.autocomplete({
                source: function (request, response) {
                    $.ajax({
                        url: '{{ route('api.fields.filterhint') }}',
                        dataType: "json",
                        headers: {
                            "X-Requested-With": 'XMLHttpRequest',
                            "X-CSRF-TOKEN": $('meta[name="csrf-token"]').attr('content')
                        },
                        data: {
                            term: request.term,
                            field: c.attr('name'),
                            field_t: c.attr('data-field'),
                            oper: c.attr('data-oper')
                        },
                        success: function (data) {
                            response(data);
                        }
                    });
                },
                minLength: 2,
                select: function (event, ui) {
                    var resp = `${c.attr('data-field')} ${c.attr('data-oper')} ${ui.item.value}`;
                    $(this).val(resp);
                    return false;
                }
            });
        });
    });

    $(document).ready(function () {
        initFieldSearch();
        initFilterHint();

    });
</script>
