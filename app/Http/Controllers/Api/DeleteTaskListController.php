<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

use App\Models\Task;
use App\Models\TaskList;

class DeleteTaskListController extends Controller
{
    /**
     * Handle the incoming request.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function __invoke(Request $request)
    {
        $task_list_id = $request->task_list_id;
        Task::where("task_list_id",$task_list_id)
            ->delete();
        TaskList::find($task_list_id)
            ->delete();
        $result = true;
        return  response()->json(["result"=>$result]);
    }
}
