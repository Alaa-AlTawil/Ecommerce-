<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\JWTController;
use App\Http\Controllers\ItemController;
use App\Http\Controllers\CategoryController;
use App\Http\Controllers\FavoriteController;


Route::group(['middleware' => 'api'], function($router) {
    Route::post('/register', [JWTController::class, 'register']);
    Route::post('/login', [JWTController::class, 'login']);
    Route::post('/logout', [JWTController::class, 'logout']);
    Route::post('/refresh', [JWTController::class, 'refresh']);
    Route::post('/profile', [JWTController::class, 'profile']);
});

Route::get('/getitems', [ItemController::class, 'GetItems']);
Route::post('/additem', [ItemController::class, 'addItem']);
Route::post('/getitembyid', [ItemController::class, 'getItemById']);
Route::post('/addcategory', [ItemController::class, 'addCategory']);
Route::post('/getcategorybyid', [ItemController::class, 'getCategoryById']);
Route::get('/getallcategory', [ItemController::class, 'getAllCategory']);
Route::post('/addfavorite', [FavoriteController::class, 'addfavorite']);

Route::post('/addcategory', [CategoryController::class, 'addcategory']);
Route::post('/getCategoryItems', [ItemController::class, 'getCategoryItems']);

Route::post('/getalluseritemfav', [FavoriteController::class,'getAllUserItemFav']);
Route::get('/getuser', [ItemController::class,'userId']);


/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {

    return $request->user();
});