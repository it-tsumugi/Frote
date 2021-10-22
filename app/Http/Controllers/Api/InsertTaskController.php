<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Log;

use App\Models\Task;

class InsertTaskController extends Controller
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
        $data = Task::select("order","task_list_id")
                    ->find($task_id);
        $task_list_id = $data["task_list_id"];
        $order = $data["order"];
        Task::where("order",">=",$order)
            ->where("task_list_id",$task_list_id)
            ->increment("order");
        Log::info("",[$data]);
        Task::create(['task' => $request->task,"order"=>$order ,"task_list_id"=>$task_list_id]);
        $result = true;
        return response()->json(["result"=>$result]);
    }
}
