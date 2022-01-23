<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class GetImpController extends Controller
{
    public function __invoke(Request $request)
    {
        $imp = DB::table("task_lists")
                ->select("importance")
                ->find($request->task_list_id);
        return response()->json($imp);
    }
}
