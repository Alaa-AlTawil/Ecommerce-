<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\User;
use App\Models\Favorite;

class FavoriteController extends Controller
{
    public function getAllUserItemFav(Request $request)
    {
        // return Favorite::find(1)->users;

        $items = array();

        $userFavoriteItems = User::find($request->id)->favorites;

        return $userFavoriteItems;
        
        // foreach($userFavoriteItems as $userFavoriteItem){
        //     $items[] = $userFavoriteItem->item_id;

        // }


    }
}
