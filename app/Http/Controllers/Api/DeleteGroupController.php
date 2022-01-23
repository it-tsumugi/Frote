<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

use App\Models\Group;
use App\Models\TaskList;

class DeleteGroupController extends Controller
{
    public function __invoke(Request $request)
    {
        $id = $request->id;
        //削除しようとしているグループを使用しているタスクがあるか確認
        $isTaskExist = TaskList::where("group_id",$id)->exists();
        if($isTaskExist){
            $result =false;
        }
        else {
            Group::find($id)
                ->delete();
            $result = true;
        }
        return  response()->json(["result"=>$result]);
    }
}
