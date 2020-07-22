<div class="row">
    <div class="col-lg-4">
        <label class="control-label" for="_field">Field</label>
        <select class="js-data-ajax form-control col-lg-12" data-endpoint="fields" data-placeholder="Select a Field" name="_field" id="_field" style="width: 100%;" >
            <option>Select a Field</option>
            @foreach($fields as $field)
                <option value="{{$field->id}}">{{ $field->name }}</option>
            @endforeach
        </select>
    </div>
    <div class="col-lg-4">
        <label class="control-label" for="_condition"> Operator</label>
        <select class="form-control col-lg-12 col-sm-6" id="_operator" name="_operator" size="10">
            <option value="=">=</option>
            <option value=">">></option>
            <option value="<"><</option>
            <option value=">=">>=</option>
            <option value="<="><=</option>
            <option value="!=">!=</option>
            <option value="in">IN</option>
            <option value="notin">NOT IN</option>
            <option value="like">LIKE</option>
        </select>
    </div>
    <div class="col-lg-4">
        <label class="control-label" for="_value"> Value</label>
        <input type="text" id="_value" name="_value" class="form-control col-lg-12 col-sm-6"><hr/>

    </div>
</div>