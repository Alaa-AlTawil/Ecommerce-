<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\User;
use App\Models\Favorite;

use Validator;
use Illuminate\Validation\Rule;

class FavoriteController extends Controller
{
    public function addfavorite(Request $request){
        

        $user_id = $request->uid;
        $item_id=$request->itemid;

        // $validator = Validator::make($request->all(), [
        //     'user_id' => [
        //         'required',
        //          Rule::unique('favorites')->where(function ($query) use($item_id, $user_id) {
        //            return $query->where('item_id', $item_id)->where('user_id', $user_id);
        //         }),
        //     ],
        // ]);

        // if($validator->fails()) {
        //     return response()->json($validator->errors(), 400);
        // }
        
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
