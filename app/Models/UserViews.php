<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class UserViews extends Model
{
    use SoftDeletes;

    protected $table = 'users_views';
    protected $guarded = ['id'];

}
