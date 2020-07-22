@if(!$reload ?? false)
    <div class="row">
        <div class="col-lg-12">
            <div class="nav-tabs-custom">
                <ul class="nav nav-tabs">
                    @if ($edit)
                        <li class="pull-left hidden">
                            <a href="#viewTab" id="viewTab" data-toggle="tab"><span class=""><i class="fa"></i></span> <span
                                        class=""></span></a>
                        </li>
                        <li class="pull-right" id="editTab">
                            <a href="#editV" data-toggle="tab"><span class=""><i class="fa fa-pencil"></i></span> <span
                                        class="">Edit View</span></a>
                        </li>
                        <li class="pull-right" onclick="deleteCustomView()" id="delTab">
                            <a href="#"><span class=""><i class="fa fa-trash"></i></span> <span
                                        class="">Delete</span></a>
                        </li>
                    @endif
                    <li class="pull-right">
                        <a href="#" class="btn btn-sm btn-primary" onclick="downloadReport({{$id}})">
                            <span><i class="fa fa-download"></i></span>
                            <span> Generate Report Offline</span>
                        </a>
                    </li>
                    <li class="pull-right" id="dt-processing"></li>
                </ul>
                @if ($edit)
                    <div class="tab-content">
                        <div class="tab-pane fade in active" id="editV">
                        </div>
                    </div>
                @endif
            </div>
        </div>
    </div>
    <div id="tablecontent">
        @include('user_views.table')
    </div>

    <script type="text/javascript" nonce="{{ csrf_token() }}">
        var updated = false;
        var vID = '{{ $id }}';

        @if ($edit)
        @php($urlE = route('user_views.edit',['id'=>$id]))
        @php($urlD = route('user_views.destroy',['id'=>$id]))

        function editCustomView() {
            $.ajax({
                url: '{{$urlE}}',
                beforeSend: function () {
                    $('#editV').html('<div class="text-center" <h2 style="padding-top: 30px;"><i class="fa fa-spinner fa-spin" aria-hidden="true"></i> Loading view definition</h2></div><br/>');
                },
                success: function (data) {
                    $('#editV').html(data);
                }
            });
        }

        function deleteCustomView() {
            if (confirm('Are you sure you want to delete the view permanently?')) {
                $.ajax({
                    url: '{{$urlD}}',
                    dataType: 'JSON',
                    beforeSend: function () {
                        $('#delTab').html('<a href="#" ><span class=""><i class="fa fa-spinner fa-spin"></i></span> <spanclass="" >Deleting</span></a>');
                    },
                    success: function (data) {
                        if (data.success) {
                            alert("Success!\n\n" + data.message);
                            $(`a[data-value="${vID}"]`).remove();
                            loadHelp();
                        } else {
                            alert("Error!\n\n" + data.message);
                        }
                    },
                    error: function (xhr, status, error) {
                        alert(error + ' ' + xhr.status + '\n\n' + xhr.responseJSON.message);
                    }
                });
            }
        }
        @endif
        $(document).ready(function () {
            $('a[data-toggle="tab"]').on('shown.bs.tab', function (e) {
                var target = $(e.target).attr("href") // activated tab
                switch (target) {
                    case '#editV':{editCustomView();break;}
                    case '#viewV':{
                        if(updated) {
                            initiateCustomTable();
                            updated = false;
                            break;
                        }
                    }
                }
            });
        });
    </script>

@else
    @include('user_views.table')
@endif