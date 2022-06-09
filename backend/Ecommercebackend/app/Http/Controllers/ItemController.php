<?php

namespace App\Http\Controllers;
use App\Models\Item;
use Illuminate\Http\Request;

class ItemController extends Controller
{
    public function getitems(){
        $items=Item::all();
        return response()->json([
            "status" => "success",
            "items" => $items
        ],200);

    }
    public function addItem(Request $request){
        $item=new Item;
        $item->Name=$request->itemname;
        $item->Price=$request->itemprice;
        $item->Categoryid=$request->cat_id;
        $item->Img=$request->img;
        $item->save();
        return response()->json([
            "status" => "success"],200);
    }
    public function getItemById(Request $request){
        $item = Item::find($request->id);
        return response()->json([
            "status" => "Success",
            "user" => $item,
        ]);
    }
}
