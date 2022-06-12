<?php

namespace App\Http\Controllers;
use App\Models\Item;
use App\Models\Category;
use Illuminate\Http\Request;

class ItemController extends Controller
{
    public function getItems(){
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
            "item" => $item,
        ]);
    }
    public function getCategoryItems(Request $request){
        $items=Item::where("Categoryid",$request->id)->get();
        return response()->json([
            "status" => "Success",
            "category" => $items,
        ],200);
    }
    
    

    public function getCategoryById(Request $request){
        $cat = Category::find($request->id);
        return response()->json([
            "status" => "Success",
            "category" => $cat,
        ],200);
    }

    public function getAllCategory(){
        return response()->json(["category"=> Category::all()]);
    }
}
