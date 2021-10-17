<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Log;

use App\Models\TaskList;

class GetUrgTaskListsController extends Controller
{
    /**
     * Handle the incoming request.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public static function convert($urg_num){
        $id = Auth::id();
        $data = TaskList::select("id","group_id","importance","urgency")
                        ->with(["tasks:task_list_id,task,id,order","group:id,group"])
                        ->where("user_id",$id)
                        ->where("urgency",$urg_num)
                        ->get();
        $edit_data=[];
        for ($i=0;$i<count($data);$i++){
            $tasks =[];
            for ($j=0;$j<count($data[$i]["tasks"]);$j++){
                $tasks[$j] = [
                    "task_id" => $data[$i]["tasks"][$j]["id"],
                    "text" => $data[$i]["tasks"][$j]["task"],
                    "order" => $data[$i]["tasks"][$j]["order"]
                ];
            }
            //リスト内のタスク配列をorderでソート
            $orders = array_column($tasks, "order");
            array_multisort($orders, SORT_ASC, $tasks);
            $priority =  2 * $data[$i]["urgency"] + $data[$i]["importance"];
            $edit_data[$i] = [
                "task_list_id" => $data[$i]["id"],
                "priority" => $priority,
                "group" => $data[$i]["group"]["group"],
                "task" => $tasks,
            ];
        }
        $priorities =  array_column($edit_data, "priority");
        array_multisort($priorities, SORT_DESC, $edit_data);
        return $edit_data;
    }

    public function __invoke(Request $request)
    {
        $urgData = $request->urgData;
        Log::info("",[$request->urgData[0]["num"]]);
        for($i=0;$i<count($urgData);$i++){
            $data[$i]["taskLists"]  = GeturgTaskListsController::convert($urgData[$i]["num"]);
            $data[$i]["text"] = $urgData[$i]["text"];
            $data[$i]["id"] =$urgData[$i]["num"] +2 ;
        }
        return  response()->json($data);
    }
}
