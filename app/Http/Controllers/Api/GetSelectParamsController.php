<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class GetSelectParamsController extends Controller
{
    public function __invoke(Request $request)
    {
        $task_list_id = $request->id;
        $imp = DB::table("task_lists")
                ->select("importance")
                ->find($task_list_id);
        $urg = DB::table("task_lists")
                ->select("urgency")
                ->find($task_list_id);
        $group =  DB::table("task_lists")
                    ->select("group")
                    ->join("groups","task_lists.group_id","=","groups.id")
                    ->where("task_lists.id",$task_list_id)
                    ->get();
        return  response()->json(["imp"=>$imp->importance,"urg"=>$urg->urgency,"group"=>$group[0]->group]);
    }
}
