<?php
use Illuminate\Support\Facades\Route;

// Auth::routes();

if (App::environment('production')) {
    URL::forceScheme('https');
}

Route::get('/{any}', function () {
    return view('welcome');
})->where('any','.*');;