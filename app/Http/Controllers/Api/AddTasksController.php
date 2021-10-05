<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\DB;

class AddTasksController extends Controller
{
    /**
     * Handle the incoming request.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function __invoke(Request $request)
    {
        $id = Auth::id();

        DB::table('groups')->insert(["group"=>$request->group]);
        $group_id = DB::getPdo()->lastInsertId();
        DB::table('task_lists')->insert(["importance" => $request->imp,"urgency"=>$request->urg,"group_id"=>$group_id]);
        $task_list_id = DB::getPdo()->lastInsertId();
        foreach($request->tasks as $task){
            DB::table('tasks')->insert(["user_id" => $id,"task"=>$task,"task_list_id"=>$task_list_id]);
        }
        return response();
    }
}
