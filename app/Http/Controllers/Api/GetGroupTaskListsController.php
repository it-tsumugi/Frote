<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Log;

use App\Models\Group;

use App\Http\Controllers\Api\FunctionController;

class GetGroupTaskListsController extends Controller
{
    public function __invoke(Request $request)
    {
        $id = Auth::id();
        
        $isGroup = DB::table("groups")
                ->select("groups.id")
                ->where("user_id",$id)
                ->exists();
        $result = false;
        $data = [];
        if($isGroup){
            $group_ids = DB::table("groups")
                    ->select("groups.id")
                    ->where("user_id",$id)
                    ->get();
            for($i=0;$i<count($group_ids);$i++){
                $data[$i]["taskLists"] = FunctionController::convert(false,"group_id",$group_ids[$i]->id);
                $data[$i]["group"] = Group::where("id",$group_ids[$i]->id)
                                            ->value("group");
                $data[$i]["group_id"] =$group_ids[$i]->id;
            }
            $result = true;
    }
        return  response()->json(["data"=>$data,"result"=>$result]);
    }
}
