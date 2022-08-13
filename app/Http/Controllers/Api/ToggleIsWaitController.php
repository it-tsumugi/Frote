<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class ToggleIsWaitController extends Controller
{
    public function __invoke(Request $request)
    {
        $is_wait = DB::table("task_lists")
                        ->select("is_wait")
                        ->where("id",$request->task_list_id)
                        ->get();
        $edit_is_wait = ((boolean) $is_wait[0]->is_wait);
        if($edit_is_wait)$edit_is_wait = 0;
        else $edit_is_wait = 1;
        
        DB::table("task_lists")
            ->where("id",$request->task_list_id)
            ->update(["is_wait"=>$edit_is_wait]);
        return response()->json($is_wait);
    }
}
