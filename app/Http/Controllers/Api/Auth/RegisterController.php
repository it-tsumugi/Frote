<?php

namespace App\Http\Controllers\Api\Auth;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

use App\Models\User;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Validator;
use Illuminate\Support\Facades\Log;

class RegisterController extends Controller
{
    /**
     * Handle the incoming request.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function __invoke(Request $request)
    {
        $name = $request->name;
        $isEmail = User::where("email",$request->email)
        ->exists();
        // Log::info($validator->fails());
        if(!$isEmail){
            User::create([
                'name' => $name,
                'email' => $request->email,
                'password' => Hash::make($request->password),
            ]);
            $message="登録に成功しました";
            $result = true;
        }else{
            $message = "既にそのメールアドレスは登録されています";
            $result = false;
        }
        return response()->json(["result"=>$result,"message"=>$message]);
    }
}
