<?php

namespace App\Http\Controllers;
use App\Models\Category;
use Illuminate\Http\Request;

class CategoryController extends Controller
{
    public function addCategory(Request $request){
        $category=new Category;
        $category->categoryname =$request->catname;
        $category->save();
        
        return response()->json([
            "status" => "success"],200);
    }
   
}
