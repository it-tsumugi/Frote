<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Group;
use Illuminate\Support\Facades\Log;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\DB;

class AddGroupController extends Controller
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
        $isGroup = Group::where("group", $request->group)
        ->where("user_id",$user_id)
        ->exists();
        if(!$isGroup){
            Group::create(['group' => $request->group,"user_id"=>$user_id]);
            $result = true;
        }
        else {
            $result =false;
        }

        return response()->json(["result"=>$result]);
    }
}
