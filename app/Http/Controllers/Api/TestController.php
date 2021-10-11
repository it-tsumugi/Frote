<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Group;
use App\Models\Task;
use Illuminate\Support\Facades\Log;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\DB;

class TestController extends Controller
{
    /**
     * Handle the incoming request.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function __invoke(Request $request)
    {
        //
        $id = Auth::id();
        // $user = DB::table('users')->where("users.id",$id)->get();
        // Log::debug($user);

        // $test = Task::with("task_list.group")
        //             ->select("id","task","task_list_id","user_id")
        //             ->get();
        // Log::info("hoge",[$test]); 

        // select("id","task","task_list_id")
        $test =  DB::table("tasks")
                    ->select("tasks.id as task_id","task_list_id","task","importance","urgency","group")
                    ->join("task_lists","tasks.task_list_id","=","task_lists.id")
                    ->join("groups","task_lists.group_id","=","groups.id")
                    ->where("user_id",$id)
                    ->get();

        return  response()->json(["data"=>$test]);
    }
}
