<script type="text/javascript" nonce="{{ csrf_token() }}">
    function initiateCustomTable() {
        var stickyHeaderOffsetY = 0;
        if ( $('.navbar-fixed-top').css('height') ) {
            stickyHeaderOffsetY = +$('.navbar-fixed-top').css('height').replace('px','');
        }
        if ( $('.navbar-fixed-top').css('margin-bottom') ) {
            stickyHeaderOffsetY += +$('.navbar-fixed-top').css('margin-bottom').replace('px','');
        }
        $('.snipe-table').bootstrapTable('destroy').bootstrapTable({
            classes: 'table table-responsive table-no-bordered',
            ajaxOptions: {
                headers: {
                    'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')
                }
            },
            stickyHeader: true,
            stickyHeaderOffsetY: stickyHeaderOffsetY + 'px',
            undefinedText: '',
            iconsPrefix: 'fa',
            cookie: false,
            filterControl: true,
            cookieExpire: '2y',
            cookieIdTable: '{{ Route::currentRouteName() }}',
            mobileResponsive: true,
            maintainSelected: true,
            trimOnSearch: false,
            pagination: true,
            paginationFirstText: "{{ trans('general.first') }}",
            paginationLastText: "{{ trans('general.last') }}",
            paginationPreText: "{{ trans('general.previous') }}",
            paginationNextText: "{{ trans('general.next') }}",
            pageList: ['10','20', '50','100','200','1000'],
            exportDataType: 'basic',
            pageSize: 10,
            paginationVAlign: 'both',
            formatLoadingMessage: function () {
                return '<h6 style="padding-top: 30px;"><i class="fa fa-spinner fa-spin" aria-hidden="true"></i> Loading... please wait.... </h6>';
            },
            icons: {
                advancedSearchIcon: 'fa fa-search-plus',
                paginationSwitchDown: 'fa-caret-square-o-down',
                paginationSwitchUp: 'fa-caret-square-o-up',
                columns: 'fa-columns',
                refresh: 'fa-refresh',
                export: 'fa-download',
                clear: 'fa-trash'
            },
            exportTypes: ['csv', 'excel'/*, 'doc', 'txt','json', 'xml', 'pdf'*/],
            onLoadSuccess: function () {
                $('[data-toggle="tooltip"]').tooltip(); // Need to attach tooltips after ajax call
            },

        });
        $(function () {
            $('#bt247SelectAll').click(function () {
                $('.bt247SelectItem').not(this).prop('checked', this.checked);
            });

            $('.bt247SelectItem').click(function (){
                $('.bt247SelectAll').not(this).prop('checked', false);
            })

        });

        // Handle whether or not the edit button should be disabled
        $('.snipe-table').on('check.bs.table', function () {
            $('#bulkEdit').removeAttr('disabled');
        });

        $('.snipe-table').on('check-all.bs.table', function () {
            $('#bulkEdit').removeAttr('disabled');
        });

        $('.snipe-table').on('uncheck.bs.table', function () {
            if ($('.snipe-table').bootstrapTable('getSelections').length == 0) {
                $('#bulkEdit').attr('disabled', 'disabled');
            }
        });

        $('.snipe-table').on('uncheck-all.bs.table', function (e, row) {
            $('#bulkEdit').attr('disabled', 'disabled');
        });

        // Handle whether or not the edit button should be disabled
        $('.snipe-table').on('check.bs.table', function () {
            $('#bulkEdit').removeAttr('disabled');
        });

        $('.snipe-table').on('check-all.bs.table', function () {
            $('#bulkEdit').removeAttr('disabled');
        });

        $('.snipe-table').on('uncheck.bs.table', function () {
            if ($('.snipe-table').bootstrapTable('getSelections').length == 0) {
                $('#bulkEdit').attr('disabled', 'disabled');
            }
        });

        $('.snipe-table').on('uncheck-all.bs.table', function (e, row) {
            $('#bulkEdit').attr('disabled', 'disabled');
        });

        $(function () {
            $('#bulkEdit').click(function () {
                var selectedIds = $('.snipe-table').bootstrapTable('getSelections');
                $.each(selectedIds, function(key,value) {
                    $( "#bulkForm" ).append($('<input type="hidden" name="ids[' + value.id + ']" value="' + value.id + '">' ));
                });

            });
        });
        // This is necessary to make the bootstrap tooltips work inside of the
        // wenzhixin/bootstrap-table formatters
        $(function() {
            $('#table').on('post-body.bs.table', function () {
                $('[data-toggle="tooltip"]').tooltip({
                    container: 'body'
                });
            });
        });

    }
</script>