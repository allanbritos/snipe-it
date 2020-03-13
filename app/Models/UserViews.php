<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class UserViews extends Model
{
    use SoftDeletes;
    protected $table = 'views_user';
    protected $guarded = [];
}
