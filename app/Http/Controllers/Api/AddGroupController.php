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
        $isGroup = Group::where("group", $request->group)->exists();
        if(!$isGroup){
            Group::create(['group' => $request->group]);
            $result = true;
        }
        else {
            $result =false;
        }

        return response()->json(["result"=>$result]);
    }
}
