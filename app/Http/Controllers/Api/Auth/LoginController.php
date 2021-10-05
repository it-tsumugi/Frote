<?php

namespace App\Http\Controllers\Api\Auth;

use App\Http\Controllers\Controller;
use Illuminate\Foundation\Auth\AuthenticatesUsers;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class LoginController extends Controller
{
    use AuthenticatesUsers;

    /**
     * ログイン
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response|\Illuminate\Http\JsonResponse
     *
     * @throws \Illuminate\Validation\ValidationException
     */
    public function __invoke(Request $request)
    {
        // バリデーション
        $this->validateLogin($request);

        $result = false;
        $status = 401;
        $message = 'ユーザが見つかりません';
        $credentials = $request->only('email', 'password');
        
        if (Auth::attempt($credentials)) {
            $result = true;
            $status = 200;
            $message = 'OK';
        }
        return response()->json(['result' => $result, 'status' => $status, 'message' => $message]);
    }
}