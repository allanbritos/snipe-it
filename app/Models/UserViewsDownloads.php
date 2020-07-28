<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class UserViewsDownloads extends Model
{
    use SoftDeletes;

    protected $table = 'users_views_downloads';
    protected $guarded = [];

}
