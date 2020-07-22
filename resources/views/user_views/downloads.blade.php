@extends('layouts/default')

@section('title0')
    Exported Views
@stop

{{-- Page title --}}
@section('title')
    @yield('title0')  @parent
@stop

@section('header_right')
    @can('create', \App\Models\Asset::class)
        <div class="pull-right">
        <a href="{{route('userdownloads.index')}}" class="btn btn-md btn-default " data-toggle="tooltip" data-original-title="Exported Views Downloads">
            Downloads</a>
        <a href="{{route('user_views.index')}}" class="btn btn-md btn-primary " data-toggle="tooltip" data-original-title="Create a new Custom View">
            Custom Views</a>
        </div>
    @endcan
@stop

{{-- Page content --}}
@section('content')
    <div class="row">
        <div class="col-lg-12">
            <div class="box box-default">
                <div class="box-header">
                    <h3 class="box-title">Downloads</h3>
                </div>
                <div class="box-body">
                    <table
                           data-sortable="true"
                           data-icons-prefix="fa"
                           id="downloadsTable"
                           data-search="true"
                           data-show-refresh="true"
                           data-pagination="true"
                           data-pagination-v-align="top"
                           class="table table-striped table-hover">
                        <thead>
                            <tr>
                                <th data-sortable="true">Name</th>
                                <th data-sortable="true">Created At</th>
                                <th data-sortable="true">Status</th>
                                <th data-width="60"></th>
                            </tr>
                        </thead>
                        <tbody>
                            @foreach($files as $file)
                                <tr>
                                    <td>{{ $file->filename }}</td>
                                    <td>{{ $file->created_at }}</td>
                                    <td>@if($file->ready) Completed @else Pending @endif</td>
                                    <td style="">
                                        @if($file->ready)
                                        <a href="#" onclick="downloadFile('{{$file->filename}}')" class="btn btn-sm btn-success" data-toggle="tooltip" title="" data-original-title="Download">
                                            <i class="fa fa-download"></i>
                                        </a>&nbsp;
                                        {{--
                                        <a href="#" class="btn btn-danger btn-sm delete-asset" data-toggle="tooltip" data-content="Are you sure you wish to delete ?" data-title="Delete" onclick="return false;" data-original-title="" title="">
                                            <i class="fa fa-trash"></i>
                                        </a>&nbsp;--}}
                                        @endif
                                    </td>
                                </tr>
                            @endforeach
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    </div>
@stop

@push('js')
    <script nonce="{{ csrf_token() }}">
        function downloadFile(file) {
            var url = '{{route('user_views.download',':file')}}';
            url = url.replace(':file', file);
            window.location = url;
            $('#dt-processing').html('');
        }
        $(document).ready(function(){
            $('#downloadsTable').bootstrapTable({
                icons: {
                    advancedSearchIcon: 'fa fa-search-plus',
                    paginationSwitchDown: 'fa-caret-square-o-down',
                    paginationSwitchUp: 'fa-caret-square-o-up',
                    columns: 'fa-columns',
                    refresh: 'fa-refresh',
                    export: 'fa-download',
                    clear: 'fa-trash'
                },
            });
        });
    </script>

@endpush
@push('css')
    <style>
        #sortable {
            list-style-type: none;
            margin: 0;
            padding: 0;
            width: 60%;
        }

        #sortable li {
            margin-left: 10px;
            padding: 5px;
            height: 30px;
            cursor: pointer;
        }

        #sortable li span {
            padding-left: 5px;
            padding-right: 10px;
        }
        .custom-view-title{
            position: absolute;
        }
        .ui-autocomplete-loading {
            background: white url({{ URL::asset('img/loading_16x16.gif') }}) right center no-repeat;
        }
        .nav-tabs-custom .tab-content{
            padding:0px;
        }
        .select2-results__option div .pull-left{
            display:none;
        }
    </style>
@endpush

@section('moar_scripts')
    @include ('partials.bootstrap-table247')
@stop
