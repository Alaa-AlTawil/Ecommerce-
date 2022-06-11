<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\User;
use App\Models\Favorite;

class FavoriteController extends Controller
{
    public function addfavorite(Request $request){
        $item=new Favorite;
        $item->user_id=$request->uid;
        $item->item_id=$request->itemid;
        $item->save();
        
        return response()->json([
            "status" => "success"],200);
    }


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
