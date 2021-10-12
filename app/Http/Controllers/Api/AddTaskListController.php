<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\DB;

use App\Models\Group;
use App\Models\Task;
use App\Models\TaskList;

class AddTaskListController extends Controller
{
    /**
     * Handle the incoming request.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function __invoke(Request $request)
    {
        // Log::debug($request);

        $group_id = Group::where("group",$request->group)->value("id");
        TaskList::create(["importance" => $request->imp,"urgency"=> $request->urg,"group_id"=> $group_id]);
        
        $task_list_id = DB::getPdo()->lastInsertId();
        $id = Auth::id();
        $tasks = $request->tasks;
        for($i=0;$i<count($tasks);$i++){
            $task = $tasks[$i]["task"];
            Task::create(["user_id" => $id,"task"=>$task,"task_list_id"=>$task_list_id]);
        }

        $result = true;
        return response(["result"=>$result]);
    }
}
