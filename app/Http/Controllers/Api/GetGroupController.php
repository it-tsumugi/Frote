<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Log;

class GetGroupController extends Controller
{
    public function __invoke(Request $request)
    {
        $user_id = Auth::id();
        $key = $request->key;
        if($key === "group"){
            $group_id = $request->id;
            $data =  DB::table("groups")
                        ->select("group")
                        ->where("user_id",$user_id)
                        ->find($group_id);
            return  response()->json(["data"=>$data]);
        }
        else {
            $task_list_id = $request->id;
            $data =  DB::table("task_lists")
                        ->select("group")
                        ->join("groups","task_lists.group_id","=","groups.id")
                        ->where("task_lists.id",$task_list_id)
                        ->get();
            return  response()->json(["data"=>$data[0]]);
        }
    }
}
