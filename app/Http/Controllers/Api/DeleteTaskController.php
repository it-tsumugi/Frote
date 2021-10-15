<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Log;

use App\Models\Task;

class DeleteTaskController extends Controller
{
    /**
     * Handle the incoming request.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function __invoke(Request $request)
    {
        $task_id = $request->task_id;
        $task_list_id = $request->task_list_id;
        $order = $request->order;
        Task::where("task_list_id",$task_list_id)
            ->where("order",">",$order)
            ->decrement("order");
        Task::find($task_id)
            ->delete();
        $result = true;
        return  response()->json(["result"=>$result]);
    }
}
