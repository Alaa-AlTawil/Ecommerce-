<?php

namespace App\Http\Controllers;
use App\Models\Category;
use Illuminate\Http\Request;

class CategoryController extends Controller
{
    public function addCategory(Request $request){
        
        $cat=new Category;
        $cat->categoryname=$request->catname; 
        $cat->save();

        return response()->json(["status" => "success"],200);
    } 
}
