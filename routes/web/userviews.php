<?php

Route::group(
    ['prefix' => 'views',
        'middleware' => ['auth']],
    function () {
        Route::get(
            '/',
            'UserViewsController@index')
            ->name('user_views.index');

        Route::get(
            'help',
            'UserViewsController@help')
            ->name('user_views.help');

        Route::get(
            'create',
            'UserViewsController@create')
            ->name('user_views.create');

        Route::post(
            'validate',
            'UserViewsController@validateForm')
            ->name('user_views.validate');

        Route::post(
            'store',
            'UserViewsController@store')
            ->name('user_views.store');

        Route::get(
            '{id}/edit',
            'UserViewsController@edit')
            ->name('user_views.edit');

        Route::post(
            '{id}/update',
            'UserViewsController@update')
            ->name('user_views.update');

        Route::get(
            '{id}/destroy',
            'UserViewsController@destroy')
            ->name('user_views.destroy');

        Route::get(
            '{id}/show',
            'UserViewsController@show')
            ->name('user_views.show');



        Route::get(
            '{id}/generate',
            'UserViewsController@generate')
            ->name('user_views.generate');

        Route::get(
            '{file}/download',
            'UserViewsController@downloadFile')
            ->name('user_views.download');

        Route::resource(
            'userdownloads',
            'UserViewsDownloadsController');

    });