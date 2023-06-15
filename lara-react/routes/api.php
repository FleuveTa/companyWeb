<?php

use App\Http\Controllers\AuthController;
use App\Http\Controllers\ContentController;
use App\Http\Controllers\MailController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "api" middleware group. Make something great!
|
*/

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});

Route::post('/register', [AuthController::class, 'register']);
Route::post('/login', [AuthController::class, 'login']);
Route::get('/content/{id}', [ContentController::class, 'getByPageId']);
Route::get('/allcontent', [ContentController::class, 'getAllCon']);

Route::put('updatecontent', [ContentController::class, 'update']);
Route::post('newcont/{id}', [ContentController::class, 'create']);
Route::delete('delcont/{id}', [ContentController::class, 'destroy']);
Route::post('/contact', [MailController::class, 'submitContactForm']);
