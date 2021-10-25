<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Log;

use App\Models\TaskList;

use App\Http\Controllers\Api\FunctionController;

class GetUrgTaskListsController extends Controller
{
    /**
     * Handle the incoming request.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */

    public function __invoke(Request $request)
    {
        $urgData = $request->urgData;
        for($i=0;$i<count($urgData);$i++){
            $data[$i]["taskLists"]  = FunctionController::convert(false,"urgency",$urgData[$i]["num"]);
            $data[$i]["text"] = $urgData[$i]["text"];
            $data[$i]["id"] =$urgData[$i]["num"] +2 ;
        }
        return  response()->json($data);
    }
}
