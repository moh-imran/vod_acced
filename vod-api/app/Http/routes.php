<?php

/*
|--------------------------------------------------------------------------
| Application Routes
|--------------------------------------------------------------------------
|
| Here is where you can register all of the routes for an application.
| It's a breeze. Simply tell Laravel the URIs it should respond to
| and give it the controller to call when that URI is requested.
|
*/
Route::post('login', 'UserController@login');

Route::post('register', 'UserController@register');

Route::post('save_videos', 'UserController@save_videos');

Route::post('get_videos', 'UserController@get_videos');

Route::get('/', function () {
    return view('welcome');
});
