<?php

use Illuminate\Support\Facades\Route;

use App\Http\Controllers\Api\Auth\LoginController;
use App\Http\Controllers\Api\Auth\CheckIsLoginController;
use App\Http\Controllers\Api\Auth\LogoutController;
use App\Http\Controllers\Api\GetUserController;
use App\Http\Controllers\Api\AddGroupController;
use App\Http\Controllers\Api\AddTaskListController;
use App\Http\Controllers\Api\TestController;
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

Route::get('/logout', LogoutController::class);
Route::post('/login', LoginController::class);
Route::get('/auth', CheckIsLoginController::class);

Route::middleware('auth:sanctum')->get('/test', TestController::class);

Route::middleware('auth:sanctum')->get('/user',GetUserController::class);
Route::middleware('auth:sanctum')->get('/read/tasklists',GetTaskListsController::class);
Route::middleware('auth:sanctum')->get('/read/grouplist',GetGroupListController::class);
Route::middleware('auth:sanctum')->get('/read/group',GetGroupController::class);
Route::middleware('auth:sanctum')->get('/read/task',GetTaskController::class);

Route::middleware('auth:sanctum')->post('/add/group', AddGroupController::class);
Route::middleware('auth:sanctum')->post('/add/tasklist', AddTaskListController::class);
Route::middleware('auth:sanctum')->post('/add/tasks', AddTasksController::class);
Route::middleware('auth:sanctum')->post('/insert/task', InsertTaskController::class);

Route::middleware('auth:sanctum')->delete('/delete/task', DeleteTaskController::class);
Route::middleware('auth:sanctum')->delete('/delete/tasklist', DeleteTaskListController::class);
Route::middleware('auth:sanctum')->delete('/delete/group', DeleteGroupController::class);

Route::middleware('auth:sanctum')->put('/put/group', UpdateGroupController::class);
Route::middleware('auth:sanctum')->put('/put/task', UpdateTaskController::class);