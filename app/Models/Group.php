<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Group extends Model
{
    use HasFactory;
    protected $table = 'groups';
    protected $fillable = [
        'group',"user_id"
    ];

    // public function tasks(){
    //     return $this->hasManyThrough(Task::class,TaskList::class,"group_id","task_list_id","id","id");
    // }

    public function task_lists(){
        return $this->hasMany("App\Models\TaskList");
    }
}
