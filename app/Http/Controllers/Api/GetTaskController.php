<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class GetTaskController extends Controller
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
        $data =  DB::table("tasks")
                    ->select("task")
                    ->where("id",$task_id)
                    ->get();
        return  response()->json(["data"=>$data]);
    }
}
