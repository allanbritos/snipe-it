<h3>About Custom Views</h3>
<hr/>
<p>Allows you to create your own customized views to display only the columns you need </p>
<ul>
    <li><strong>Standard Fields:</strong> Select from all the out of the box fields</li>
    <li><strong>Custom Fields:</strong> Select from all the custom fields available</li>
    <li><strong>Pre-Filter:</strong> Apply a pre-filter to narrow down the scope of your results</li>
    <li><strong>Column Order:</strong> Define the order in which the columns should appear</li>
</ul>
<h5>Hints </h5>
<style>
    li{
        line-height: 30px;
    }
</style>
<ul>
    <li>When exporting the data using the Table Export control
        <button class="btn btn-default btn-sm btn-undefined dropdown-toggle" aria-label="export type" type="button">
            <i class="fa fa-download"></i>
            <span class="caret"></span>
        </button>
        , you'll be expoting only the records you see in the table.
    </li>
    <li>
        If you need to export the complete dataset, use the
        <a href="#" class="btn btn-sm btn-default" onclick="">
            <span><i class="fa fa-download"></i></span>
            <span> Generate Report Offline</span>
        </a> function instead, this will process generate the report in the backend and provide you a link to download it.
    </li>
    <li>
        Global search invalidates all pre-filters defined for the custom view, to add more filters, simply use the individual column filters or the advanced filter feature.
    </li>
</ul>
<br clear="all">