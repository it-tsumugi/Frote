<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

use App\Http\Controllers\Api\FunctionController;

class GetTaskListsController extends Controller
{
    /**
     * Handle the incoming request.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public static function getTaskLists(Request $request)
    {
        $data = FunctionController::convert(true,"","");
        return  response()->json(["data"=>$data]);
    }
}
