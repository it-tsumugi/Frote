<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\DB;

class GetUserController extends Controller
{
    /**
     * Handle the incoming request.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function __invoke()
    {
        // if(Auth::check()){
            $id = Auth::id();
            //こいつ自体が配列
            $user = DB::table('users')->where("users.id",$id)->get();
            return response()->json(['user' => $user]);
        // }
    }
    
}
