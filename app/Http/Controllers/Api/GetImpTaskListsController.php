<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Log;

use App\Models\TaskList;

use App\Http\Controllers\Api\FunctionController;

class GetImpTaskListsController extends Controller
{
    /**
     * Handle the incoming request.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */

    public function __invoke(Request $request)
    {
        $impData = $request->impData;
        Log::info("",[$request->impData[0]["num"]]);
        for($i=0;$i<count($impData);$i++){
            $data[$i]["taskLists"]  = FunctionController::convert(false,"importance",$impData[$i]["num"]);
            $data[$i]["text"] = $impData[$i]["text"];
            $data[$i]["id"] =$impData[$i]["num"] +2 ;
        }
        return  response()->json($data);
    }
}
