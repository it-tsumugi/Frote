<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\DB;

use App\Models\Task;

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
        // Log::debug($request);
        $task_list_id = $request->task_list_id;
        $tasks = $request->tasks;
        $num = Task::where("task_list_id",$task_list_id)
                    ->count();
        for($i=0;$i<count($tasks);$i++,$num++){
            $task = $tasks[$i]["task"];
            Task::create(["task"=>$task,"task_list_id"=>$task_list_id,"order"=>$num]);
        }
        $result = true;
        return response(["result"=>$result]);
    }
}
