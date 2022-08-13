<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class TaskList extends Model
{
    use HasFactory;
    protected $table = 'task_lists';
    protected $fillable = [
        'group_id','importance','urgency','user_id','is_wait'
    ];

    public function tasks(){
        return $this->hasMany("App\Models\Task");
    }

    public function group(){
        return $this->belongsTo("App\Models\Group");
    }
}
