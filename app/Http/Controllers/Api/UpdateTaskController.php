<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Log;

class UpdateTaskController extends Controller
{
    /**
     * Handle the incoming request.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function __invoke(Request $request)
    {
        DB::table("tasks")
            ->where("id",$request->task_id)
            ->update(["task"=>$request->task]);
        $result = true;
        Log::info("",[$request->task]);
        return response()->json(["result"=>$result]);
    }
}
