@extends('layouts/default')

@section('title0')
    {{ trans('userviews.title') }}
@stop

{{-- Page title --}}
@section('title')
    @yield('title0')    @parent
@stop

@section('header_right')
    @can('create', \App\Models\Asset::class)

        {{ trans('userviews.searchviews') }}
        <select class="js-data-ajax pull-left " data-endpoint="views/list" data-placeholder="Search View"
                name="user_view"
                id="user_view"
                onchange="openView(this.value,$('#select2-user_view-container').text().substr(1))"
                style="display: table; min-width: 300px;">
            <option value="">{{ trans('userviews.searchviews') }}</option>
        </select>

        <a href="{{ route('userdownloads.index') }}" style="margin-right: 5px"
           class="btn btn-default" data-toggle="tooltip">{{ trans('general.download') }}</a>
        <a href="#" class="btn btn-primary pull-right" data-toggle="tooltip"
           onclick="newCustomView()">{{ trans('userviews.newview') }}</a>

    @endcan
@stop

{{-- Page content --}}
@section('content')
    <div class="box">
        <div class="box-body">
            <div class="row">
                {{--<div class="list-group hidden-md hidden-sm">
                    @php($myViews = \App\Http\Controllers\Api\UserViewsController::userViews())
                    @foreach($myViews as $view)
                        <a onclick="openView('{{$view->id}}','{{$view->name}}')" data-value="{{$view->id}}"
                           class="user-views list-group-item list-group-item-action"> {{$view->name}}</a>
                    @endforeach
                </div>--}}


                <div class="col-md-12" id="maincontent">

                </div>


            </div>
        </div>
    </div>
@stop

@push('js')
    <script nonce="{{ csrf_token() }}">
        function loadHelp() {
            $.ajax({
                url: '{{route('user_views.help')}}',
                success: function (data) {
                    $('#maincontent').html(data);
                }
            });
        }

        function newCustomView() {
            $.ajax({
                url: '{{ route('user_views.create') }}',
                beforeSend: function () {
                    $('#maincontent').html('<div class="text-center" <h2 style="padding-top: 30px;"><i class="fa fa-spinner fa-spin" aria-hidden="true"></i> Loading</h2></div>');
                },
                success: function (data) {
                    $('#maincontent').html(data);
                }
            });
        }

        function openView(id = null, name = null, reload = null) {
            $('#select2-user_view-container').text('');
            window.history.pushState('', '', '{{Request::url()}}?id=' + id);
            if (id > 0) {
                var url = '{{ route('user_views.show',['id'=>':id']) }}';
                url = url.replace(':id', id);
                $.ajax({
                    url: url,
                    beforeSend: function () {
                        $('#maincontent').html('<div class="text-center" <h2 style="padding-top: 30px;"><i class="fa fa-spinner fa-spin" aria-hidden="true"></i> Loading</h2></div>');
                    },
                    success: function (data) {
                        $('#maincontent').html(data);
                        $('.nav-tabs-custom').prepend(`<h4 class="custom-view-title">${name}</h4>`)
                    }
                });
            }
        }

        function reloadView(id = null) {
            var url = '<?php echo e(route('user_views.show', ['id' => ':id', 'reload' => true])); ?>';
            url = url.replace(':id', id);
            $.ajax({
                url: url,
                beforeSend: function () {
                    $('#tablecontent').html('<div class="text-center" <h2 style="padding-top: 30px;"><i class="fa fa-spinner fa-spin" aria-hidden="true"></i> Loading</h2></div>');
                },
                success: function (data) {
                    $('#tablecontent').html(data);
                }
            });
        }

        async function downloadReport(id = null) {
            var url = '{{route('user_views.generate',['id'=>':id'])}}';
            url = url.replace(':id', id);
            alert('{{ trans('userviews.reportconfirmation') }}')
            var response = await $.ajax({
                method: "GET",
                url: url,
                cache: false,
                dataType: 'JSON',
            });
            return response;
        }

        function downloadFile(file) {
            var url = '{{route('user_views.download',':file')}}';
            url = url.replace(':file', file);
            window.location = url;
            $('#dt-processing').html('');
        }

        $(document).ready(function () {
            const urlParams = new URLSearchParams(window.location.search);
            const id = urlParams.get('id');
            if (id > 0) openView(id, '@if(isset($user_view)){{ $user_view->name }}@endif');
            else loadHelp();
        });
    </script>
    <script src="https://code.jquery.com/ui/1.12.1/jquery-ui.js"></script>

@endpush
@push('css')
    <style>
        #sortable {
            list-style-type: none;
            margin: 0;
            padding: 0;
            width: 90%;
        }

        #sortable li {
            margin-left: 10px;
            padding: 5px;

            cursor: pointer;
        }

        #sortable li span {
            padding-left: 5px;
            padding-right: 10px;
        }

        .custom-view-title {
            position: absolute;
        }

        .ui-autocomplete-loading {
            background: white url({{ URL::asset('img/loading_16x16.gif') }}) right center no-repeat;
        }

        .nav-tabs-custom .tab-content {
            padding: 0px;

        }

        .select2-results__option div .pull-left {
            display: none;
        }
    </style>
@endpush

@section('moar_scripts')
    @include ('partials.bootstrap-table')
    @include('partials.userviews-table')
@stop
