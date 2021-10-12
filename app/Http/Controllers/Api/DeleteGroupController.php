<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

use App\Models\Group;
use App\Models\TaskList;

class DeleteGroupController extends Controller
{
    /**
     * Handle the incoming request.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function __invoke(Request $request)
    {
        $id = $request->id;
        $isExist = TaskList::where("group_id",$id)->exists();
        if($isExist){
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
