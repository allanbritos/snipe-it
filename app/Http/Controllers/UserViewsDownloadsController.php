<?php

namespace App\Http\Controllers;

use App\Models\UserViewsDownloads;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class UserViewsDownloadsController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Contracts\View\Factory|\Illuminate\Foundation\Application|\Illuminate\View\View
     */
    public function index()
    {
        $files = UserViewsDownloads::where('user_id',Auth::user()->id)->orderBy('id','desc')->get();
        return view('user_views.downloads',['files'=>$files]);
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        //
    }

    /**
     * Display the specified resource.
     *
     * @param UserViewsDownloads $usersViewsDownloads
     * @return void
     */
    public function show(UserViewsDownloads $usersViewsDownloads)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param UserViewsDownloads $usersViewsDownloads
     * @return void
     */
    public function edit(UserViewsDownloads $usersViewsDownloads)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param \Illuminate\Http\Request $request
     * @param UserViewsDownloads $usersViewsDownloads
     * @return void
     */
    public function update(Request $request, UserViewsDownloads $usersViewsDownloads)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\UserViewsDownloads  $usersViewsDownloads
     * @return \Illuminate\Http\Response
     */
    public function destroy(UserViewsDownloads $usersViewsDownloads)
    {
        //
    }
}


