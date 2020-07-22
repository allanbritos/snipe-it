<?php

namespace App;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class UserViews extends Model
{
    use SoftDeletes;
    protected $table = 'views_user';
    protected $guarded = [];
}
