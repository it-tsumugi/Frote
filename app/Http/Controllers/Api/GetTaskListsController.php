<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\DB;

class GetTaskListsController extends Controller
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
        $data =  DB::table("tasks")
                    ->select("tasks.id as task_id","task_list_id","task","importance","urgency","group")
                    ->join("task_lists","tasks.task_list_id","=","task_lists.id")
                    ->join("groups","task_lists.group_id","=","groups.id")
                    ->where("user_id",$id)
                    ->get();
        return  response()->json(["data"=>$data]);
    }
}
