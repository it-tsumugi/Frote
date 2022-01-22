<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Http\Controllers\Api\GetTaskListsController;
use App\Http\Controllers\Api\GetImpTaskListsController;
use App\Http\Controllers\Api\GetUrgTaskListsController;
use App\Http\Controllers\Api\GetGroupTaskListsController;

class GetAllTaskListsController extends Controller
{
    public function __invoke(Request $request)
    {
        $tasklists_array = json_decode(GetTaskListsController::getTaskLists($request)->content(),true)["data"];
        $imp_tasklists_array = json_decode(GetImpTaskListsController::getImpTaskLists($request)->content(),true);
        $urg_tasklists_array = json_decode(GetUrgTaskListsController::getUrgTaskLists($request)->content(),true);
        $group_tasklists_array = json_decode(GetGroupTaskListsController::getGroupTaskLists($request)->content(),true)["data"];
        return ["taskLists"=>$tasklists_array,"impTaskLists"=>$imp_tasklists_array,"urgTaskLists"=>$urg_tasklists_array,"groupTaskLists"=>$group_tasklists_array];
    }
}
