<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Log;

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

        $id = Auth::id();
        $group_id = Group::where("group",$request->group)->value("id");
        TaskList::create(["importance" => $request->imp,"urgency"=> $request->urg,"group_id"=> $group_id,"user_id" => $id]);
        
        $task_list_id = DB::getPdo()->lastInsertId();
        $tasks = $request->tasks;
        for($i=0;$i<count($tasks);$i++){
            if($tasks[$i]["task"] !== null && mb_strlen($tasks[$i]["task"]) <= 30 ){
                $task = $tasks[$i]["task"];
                Task::create(["task"=>$task,"task_list_id"=>$task_list_id,"order"=>$i+1]);
                $result = true;
            }
            else{
                $result = false;
                TaskList::find($task_list_id)->delete();
                break;
            }
        }
        return response(["result"=>$result]);
    }
}
