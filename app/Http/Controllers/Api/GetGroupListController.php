<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Log;

class GetGroupListController extends Controller
{
    /**
     * Handle the incoming request.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function __invoke(Request $request)
    {
        $user_id = Auth::id();
        $isexist = DB::table("groups")
                    ->select("id","group")
                    ->where("user_id",$user_id)
                    ->exists();
        $result =false;
        $data[0] =["id"=>0,"group"=>""];

        if($isexist){
        $data =  DB::table("groups")
                    ->select("id","group")
                    ->where("user_id",$user_id)
                    ->get();
        $result = true;
        }
        return  response()->json(["data"=>$data,"result"=>$result]);
    }
}
