<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class UpdateGroupController extends Controller
{
    /**
     * Handle the incoming request.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function __invoke(Request $request)
    {
        DB::table("groups")
            ->where("id",$request->id)
            ->update(["group"=>$request->group]);
        $result = true;
        return response()->json(["result"=>$result]);
    }
}
