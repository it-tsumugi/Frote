<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Group;
use App\Models\Task;
use App\Models\TaskList;
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
        // $id = Auth::id();
        // $test = Task::with("task_list.group")
        //             ->select("id","task","task_list_id","user_id")
        //             ->get();
        // Log::info("hoge",[$test]); 
        $id = Auth::id();
        $data = TaskList::select("id","group_id","importance","urgency")
                        ->with(["tasks:task_list_id,task,id,order","group:id,group"])
                        ->where("user_id",$id)
                        ->get();
        for ($i=0;$i<count($data);$i++){
            $tasks =[];
            for ($j=0;$j<count($data[$i]["tasks"]);$j++){
                $tasks[$j] = [
                    "task_id" => $data[$i]["tasks"][$j]["id"],
                    "text" => $data[$i]["tasks"][$j]["task"],
                    "order" => $data[$i]["tasks"][$j]["order"]
                ];
            }
            $priority =  2 * $data[$i]["urgency"] + $data[$i]["importance"];
            $edit_data[$i] = [
                "task_list_id" => $data[$i]["id"],
                "priority" => $priority,
                "group" => $data[$i]["group"]["group"],
                "task" => $tasks,
            ];
        }
        return  response()->json(["data"=>$edit_data]);
    }
}
