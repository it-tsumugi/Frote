<?php

use Illuminate\Support\Facades\Route;

use App\Http\Controllers\Api\Auth\LoginController;
use App\Http\Controllers\Api\Auth\CheckIsLoginController;
use App\Http\Controllers\Api\Auth\LogoutController;
use App\Http\Controllers\Api\GetUserController;
use App\Http\Controllers\Api\AddGroupController;
use App\Http\Controllers\Api\AddTasksController;
use App\Http\Controllers\Api\TestController;
use App\Http\Controllers\Api\DeleteTaskController;
use App\Http\Controllers\Api\DeleteTaskListController;

Route::get('/logout', LogoutController::class);
Route::post('/login', LoginController::class);
Route::get('/auth', CheckIsLoginController::class);

Route::middleware('auth:sanctum')->get('/user',GetUserController::class);
Route::middleware('auth:sanctum')->get('/test', TestController::class);

Route::middleware('auth:sanctum')->post('/add/group', AddGroupController::class);
Route::middleware('auth:sanctum')->post('/add/tasks', AddTasksController::class);

Route::middleware('auth:sanctum')->delete('/delete/task', DeleteTaskController::class);
Route::middleware('auth:sanctum')->delete('/delete/tasklist', DeleteTaskListController::class);