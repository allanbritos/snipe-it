<?php

namespace App\Http\Controllers;

//use App\Exports\CustomViewExport;
use App\Helpers\Helper;
use App\Http\Transformers\AssetsTransformer;
use App\Models\Asset;
use App\Models\Company;
use App\Models\CustomField;
use App\Models\Setting;
use App\UserViews;
//use App\UserViewsDownloads;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\View;

class UserViewsController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index(Request $request)
    {
        if ($request->filled('id'))
            $user_view = UserViews::where('id', '=', $request->id)
                ->where(function ($query) {
                    $query->where('user_id', '=', Auth::user()->id)
                        ->orWhere('public', '=', 1);
                })->first();
        if ($request->filled('reload')) {

            $view = View::make('user_views.index')
                ->with('userviews_list', Helper::userViewsList())
                ->with('reload', 1);
        } else
            $view = View::make('user_views.index')
                ->with('userviews_list', Helper::userViewsList());

        if (isset($user_view))
            $view = $view->with('user_view', $user_view);

        return $view;
    }

    public function help()
    {
        return view('user_views.help');
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        return view('user_views.custom-view-edit', ['sf' => [], 'cf' => [], 'filters' => [], 'orders' => [], 'id' => null]);
    }

    public function validateForm(Request $request)
    {
        $name = trim($request->name);
        if($name!="") {
            $exists = UserViews::where('user_id', '=', Auth::user()->id)->where('name', '=', $name)->exists();
            $exists ?  $message=' The name is not unique!' : $message = '';
            return json_encode(['exists' => $exists,'message'=>$message]);
        }
        else return json_encode(['exists' => true,'message'=>' Name can not be empty!']);


    }

    /**
     * Store a newly created resource in storage.
     *
     * @param \Illuminate\Http\Request $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $name = trim($request->name);
        isset($request->public) ? $public = $request->public : $public = false;
        try {
            $standard_fields = explode(',', $request->standard_fields);
        } catch (\Exception $e) {
            $standard_fields = [];
        }
        try {
            $cfArray = explode(',', $request->custom_fields);
        } catch (\Exception $e) {
            $cfArray = [];
        }
        try {
            $order_fields = explode(',', $request->order_fields);
        } catch (\Exception $e) {
            $order_fields = [];
        }

        $custom_fields = $cfArray;

        unset($request['_field']);
        unset($request['_operator']);
        unset($request['_value']);
        unset($request['_token']);
        unset($request['custom_fields']);
        unset($request['standard_fields']);
        unset($request['name']);
        unset($request['public']);
        unset($request['order_fields']);
        unset($request['lstBox1']);
        unset($request['lstBox2']);
        unset($request['sFields1']);
        unset($request['sFields2']);

        $filters = $request->all();
        $filter_json = [];
        foreach ($filters as $key => $value) {
            $fid = str_after($key, '_');
            $operator = null;
            if (str_contains($value, '[Equal]')) {
                $operator = '=';
                $delimit = '[Equal]';
            } else if (str_contains($value, '[Greater]')) {
                $operator = '>';
                $delimit = '[Greater]';
            } else if (str_contains($value, '[Lesser]')) {
                $operator = '<';
                $delimit = '[Lesser]';
            } else if (str_contains($value, '[Equal-Greater]')) {
                $operator = '>=';
                $delimit = '[Equal-Greater]';
            } else if (str_contains($value, '[Equal-Lesser]')) {
                $operator = '<=';
                $delimit = '[Equal-Lesser]';
            } else if (str_contains($value, '[Not-Equal]')) {
                $operator = '!=';
                $delimit = '[Not-Equal]';
            } else if (str_contains($value, '[Like]')) {
                $operator = 'LIKE';
                $delimit = '[Like]';
            } else if (str_contains($value, '[In]')) {
                $operator = 'IN';
                $delimit = '[In]';
            } else if (str_contains($value, '[Not-In]')) {
                $operator = 'NOT IN';
                $delimit = '[Not-In]';
            }

            $field = strtolower($fid);
            $label = trim(str_before($value, $delimit));
            $value = trim(str_after($value, $delimit));

            //if(str_contains($operator,'like')) $value = '%'.$value.'%';
            //else if(str_contains($operator,'in')) $value = '('.$value.')';

            array_push($filter_json, [
                'label' => $label,
                'field' => $field,
                'operator' => $operator,
                'delimiter' => $delimit,
                'value' => $value
            ]);
        }

        $order_json = [];
        foreach ($order_fields as $key => $value) {
            array_push($order_json, [
                'label' => explode(':', $value)[1],
                'field' => explode(':', $value)[0],
            ]);
        }

        $saveInput = [
            'name' => $name,
            'public' => $public,
            'columns' => json_encode(['standard_fields' => $standard_fields, 'custom_fields' => $custom_fields]),
            'filters' => json_encode(['filters' => $filter_json]),
            'orders' => json_encode(['orders' => $order_json]),
            'user_id' => Auth::user()->id
        ];

        try {
            $view = UserViews::create($saveInput);
            if ($view) {
                if ($request->ajax == 'ajax')
                    return response()->json(['status' => 'success', 'id' => $view->id]);
                else return redirect()->route('user_views.index')->with('success', 'View created successfully');
            }
        } catch (\Exception $e) {
            if ($request->ajax == 'ajax')
                return response()->json(['status' => 'error', 'message' => $e->getMessage()]);
            else return redirect()->back()->withInput()->withErrors($e->getMessage());
        }

    }

    /**
     * Display the specified resource.
     *
     * @param int $id
     * @return \Illuminate\Http\Response
     */
    public function show($id, Request $request)
    {
        $view = UserViews::find($id);
        if ($view) {
            Auth::user()->id == $view->user_id ? $edit = true : $edit = false;
            return view('user_views.view', ['id' => $id, 'edit' => $edit, 'view' => $view, 'reload' => $request->reload]);
        } else return response('<h3>Forbidden!</h3><p>The requested view doesn\'t exist, or you don\'t have permission to see it.</p>', 200);
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param int $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        $view = UserViews::find($id);
        $standard_fields = json_decode($view->columns, false)->standard_fields;
        $custom_fields = json_decode($view->columns, false)->custom_fields;
        $filters = json_decode($view->filters, false);
        $orders = json_decode($view->orders, false);
        return view('user_views.custom-view-edit', [
            'id' => $id,
            'userView' => $view,
            'sf' => $standard_fields,
            'cf' => $custom_fields,
            'filters' => $filters->filters,
            'orders' => $orders->orders
        ]);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param \Illuminate\Http\Request $request
     * @param int $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        $name = $request->name;
        $public = $request->public;
        isset($request->ajax) ? $ajax = true : $ajax = false;
        try {
            $standard_fields = explode(',', $request->standard_fields);
        } catch (\Exception $e) {
            $standard_fields = [];
        }
        try {
            $cfArray = explode(',', $request->custom_fields);
        } catch (\Exception $e) {
            $cfArray = [];
        }
        try {
            $order_fields = explode(',', $request->order_fields);
        } catch (\Exception $e) {
            $order_fields = [];
        }

        $custom_fields = $cfArray;

        unset($request['_token']);
        unset($request['_method']);
        unset($request['ajax']);
        unset($request['name']);
        unset($request['public']);
        unset($request['custom_fields']);
        unset($request['standard_fields']);
        unset($request['order_fields']);
        unset($request['lstBox1']);
        unset($request['lstBox2']);
        unset($request['sFields1']);
        unset($request['sFields2']);

        $filters = $request->all();
        $filter_json = [];
        foreach ($filters as $key => $value) {
            $fid = str_after($key, '_');
            $operator = null;
            if (str_contains($value, '[Equal]')) {
                $operator = '=';
                $delimit = '[Equal]';
            } else if (str_contains($value, '[Greater]')) {
                $operator = '>';
                $delimit = '[Greater]';
            } else if (str_contains($value, '[Lesser]')) {
                $operator = '<';
                $delimit = '[Lesser]';
            } else if (str_contains($value, '[Equal-Greater]')) {
                $operator = '>=';
                $delimit = '[Equal-Greater]';
            } else if (str_contains($value, '[Equal-Lesser]')) {
                $operator = '<=';
                $delimit = '[Equal-Lesser]';
            } else if (str_contains($value, '[Not-Equal]')) {
                $operator = '!=';
                $delimit = '[Not-Equal]';
            } else if (str_contains($value, '[Like]')) {
                $operator = 'LIKE';
                $delimit = '[Like]';
            } else if (str_contains($value, '[In]')) {
                $operator = 'IN';
                $delimit = '[In]';
            } else if (str_contains($value, '[Not-In]')) {
                $operator = 'NOT IN';
                $delimit = '[Not-In]';
            }

            $field = strtolower($fid);
            $label = trim(str_before($value, $delimit));
            $value = trim(str_after($value, $delimit));

            //if(str_contains($operator,'like')) $value = '%'.$value.'%';
            //else if(str_contains($operator,'in')) $value = '('.$value.')';

            array_push($filter_json, [
                'label' => $label,
                'field' => $field,
                'operator' => $operator,
                'delimiter' => $delimit,
                'value' => $value
            ]);
        }
        $order_json = [];
        foreach ($order_fields as $key => $value) {
            array_push($order_json, [
                'label' => explode(':', $value)[1],
                'field' => explode(':', $value)[0],
            ]);
        }

        try {
            $view = UserViews::find($id);
            $view->name = $name;
            $view->public = $public;
            $view->columns = json_encode(['standard_fields' => $standard_fields, 'custom_fields' => $custom_fields]);
            $view->filters = json_encode(['filters' => $filter_json]);
            $view->orders = json_encode(['orders' => $order_json]);
            $view->save();
            if ($view) {
                if ($ajax)
                    return response('Changes saved successfully!', 200, []);
                else // Redirect to the asset listing page
                    return redirect()->route('user_views.index')->with('success', 'View updated successfully');
            }
        } catch (\Exception $e) {
            if ($ajax)
                return response('Changes could not be saved!', 200, []);
            else
                return redirect()->back()->withInput()->withErrors($e->getMessage());
        }
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param int $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        $view = UserViews::where('id', '=', $id)->where('user_id', '=', Auth::user()->id)->first();
        if ($view != null) {
            try {
                UserViews::destroy($id);
                return response()->json(['success' => true, 'message' => 'View deleted successfully!'], 200, []);
            } catch (\Exception $ex) {
                return response()->json(['success' => false, 'message' => 'There was an error while deleting the view!', 'error' => $ex->getMessage()], 200, []);
            }
        } else {
            return response()->json(['success' => false, 'message' => 'You don\'t have permissions to delete the requested view'], 200, []);
        }

    }



    private function getEloquentSqlWithBindings($query)
    {
        return vsprintf(str_replace('?', '%s', $query->toSql()), collect($query->getBindings())->map(function ($binding) {
            return is_numeric($binding) ? $binding : "'{$binding}'";
        })->toArray());
    }

    public function generate($id)
    {
        ini_set('max_execution_time', 3000);
        $view = UserViews::find($id);
        $name = str_slug($view->name . '_' . \Carbon::now()->toDateTimeString());
        $download = UserViewsDownloads::create([
            'user_id' => Auth::user()->id,
            'filename' => $name . '.xlsx',
            'ready' => 0
        ]);
        try {
            $file = $this->returnFile($id, $name);
            $download->ready = true;
            $download->save();
            return $file;
        } catch (\Exception $ex) {
            $download->destroy();
        }

    }

    private function returnFile($id, $filename)
    {
        Excel::store(new CustomViewExport($id), $filename . '.xlsx');
        return ['filename' => $filename . '.xlsx'];
    }

    public function downloadFile(Request $request)
    {
        //return response()->download(storage_path('app/'.$request->file),$request->file,[])->deleteFileAfterSend(true);
        return response()->download(storage_path('app/' . $request->file), $request->file, []);
    }
}
