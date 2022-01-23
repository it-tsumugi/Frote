<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Log;

class UpdateSelectParamsController extends Controller
{
    public function __invoke(Request $request)
    {
        $group_id = DB::table("groups")
        ->where("group",$request->group)
        ->value("id");
        Log::info("",[$group_id]);
        DB::table("task_lists")
        ->where("task_lists.id",$request->task_list_id)
        ->update([
            "importance"=>$request->imp,
            "urgency"=>$request->urg,
            "group_id"=>$group_id
        ]);
        return response()->json();
    }
}
