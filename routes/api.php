<?php

use Illuminate\Support\Facades\Route;

use App\Http\Controllers\Api\Auth\LoginController;
use App\Http\Controllers\Api\Auth\CheckIsLoginController;
use App\Http\Controllers\Api\Auth\LogoutController;
use App\Http\Controllers\Api\Auth\RegisterController;

use App\Http\Controllers\Api\GetUserController;
use App\Http\Controllers\Api\AddGroupController;
use App\Http\Controllers\Api\AddTaskListController;
use App\Http\Controllers\Api\DeleteTaskController;
use App\Http\Controllers\Api\DeleteTaskListController;
use App\Http\Controllers\Api\GetTaskListsController;
use App\Http\Controllers\Api\GetGroupListController;
use App\Http\Controllers\Api\DeleteGroupController;
use App\Http\Controllers\Api\UpdateGroupController;
use App\Http\Controllers\Api\GetGroupController;
use App\Http\Controllers\Api\GetTaskController;
use App\Http\Controllers\Api\UpdateTaskController;
use App\Http\Controllers\Api\AddTasksController;
use App\Http\Controllers\Api\InsertTaskController;
use App\Http\Controllers\Api\GetImpController;
use App\Http\Controllers\Api\GetUrgController;
use App\Http\Controllers\Api\UpdateSelectParamsController;
use App\Http\Controllers\Api\GetGroupTaskListsController;
use App\Http\Controllers\Api\GetImpTaskListsController;
use App\Http\Controllers\Api\GetUrgTaskListsController;
use App\Http\Controllers\Api\GetAllTaskListsController;
use App\Http\Controllers\Api\GetSelectParamsController;
use App\Http\Controllers\Api\ToggleIsWaitController;

Route::get('/logout', LogoutController::class);
Route::get('/auth', CheckIsLoginController::class);
Route::post('/login', LoginController::class);
Route::post('/register', RegisterController::class);

Route::middleware('auth:sanctum')->get('/read/tasklists',[GetTaskListsController::class,"getTaskLists"]);
Route::middleware('auth:sanctum')->get('/read/group-tasklists',[GetGroupTaskListsController::class,"getGroupTaskLists"]);
Route::middleware('auth:sanctum')->get('/user',GetUserController::class);
Route::middleware('auth:sanctum')->get('/read/grouplist',GetGroupListController::class);
Route::middleware('auth:sanctum')->get('/read/group',GetGroupController::class);
Route::middleware('auth:sanctum')->get('/read/task',GetTaskController::class);
Route::middleware('auth:sanctum')->get('/read/imp',GetImpController::class);
Route::middleware('auth:sanctum')->get('/read/urg',GetUrgController::class);

Route::middleware('auth:sanctum')->post('/read/imp-tasklists',[GetImpTaskListsController::class,"getImpTaskLists"]);
Route::middleware('auth:sanctum')->post('/read/urg-tasklists',[GetUrgTaskListsController::class,"getUrgTaskLists"]);
Route::middleware('auth:sanctum')->post('/read/all-tasklists',GetAllTaskListsController::class);
Route::middleware('auth:sanctum')->get('/read/select-params', GetSelectParamsController::class);
Route::middleware('auth:sanctum')->post('/add/group', AddGroupController::class);
Route::middleware('auth:sanctum')->post('/add/tasklist', AddTaskListController::class);
Route::middleware('auth:sanctum')->post('/add/tasks', AddTasksController::class);
Route::middleware('auth:sanctum')->post('/insert/task', InsertTaskController::class);

Route::middleware('auth:sanctum')->delete('/delete/task', DeleteTaskController::class);
Route::middleware('auth:sanctum')->delete('/delete/tasklist', DeleteTaskListController::class);
Route::middleware('auth:sanctum')->delete('/delete/group', DeleteGroupController::class);

Route::middleware('auth:sanctum')->put('/put/group', UpdateGroupController::class);
Route::middleware('auth:sanctum')->put('/put/task', UpdateTaskController::class);
Route::middleware('auth:sanctum')->put('/put/select-params', UpdateSelectParamsController::class);
Route::middleware('auth:sanctum')->put('/put/toggle-is-wait', ToggleIsWaitController::class);