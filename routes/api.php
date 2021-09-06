<?php

use Illuminate\Support\Facades\Route;

use App\Http\Controllers\Api\Auth\LoginController;
use App\Http\Controllers\Api\Auth\CheckIsLoginController;
use App\Http\Controllers\Api\Auth\LogoutController;
use App\Http\Controllers\Api\GetUserController;

Route::middleware('auth:sanctum')->get('/user',GetUserController::class);
Route::post('/login', LoginController::class);
Route::get('/logout', LogoutController::class);
Route::get('/auth', CheckIsLoginController::class);