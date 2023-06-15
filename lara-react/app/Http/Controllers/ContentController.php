<?php

namespace App\Http\Controllers;

use App\Models\Content;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use PhpParser\Node\Const_;

class ContentController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        //
    }

    public function getByPageId ($id) {
        $content = Content::where('page_id', $id)->get();
        return response()->json($content);
    }

    public function getAllCon () {
        $content = Content::all();
        return response()->json($content);
    }
    /**
     * Show the form for creating a new resource.
     */
    public function create(Request $request, $id)
    {
        $data = $request->all();
        $cont = new Content();

        $cont->title = $data['title'];
        $cont->page_id = $id;
        $cont->description = $data['description'];

        $cont->save();

        return response()->json([
            'message' => 'create success'
        ]);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        //
    }

    /**
     * Display the specified resource.
     */
    public function show(Content $content)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Content $content)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request)
    {
        DB::beginTransaction();
        try {
            foreach ($request->all() as $data) {
                $id = $data['id'];
                $title = $data['title'];
                $description = $data['description'];
    
                $content = Content::findOrFail($id);
                $content->title = $title;
                $content->description = $description;
                $content->save();
            }
    
            DB::commit();
    
            return response()->json(['message' => 'Modals updated successfully']);
        } catch (\Exception $e) {
            DB::rollback();
            return response()->json(['message' => 'Failed to update modals'], 500);
        }
        
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy($id)
    {
        try {
            $cont = Content::findOrFail($id);
            $cont->delete();
            return response()->json(['message' => 'Deleted']);
        } catch (\Exception $e) {
            DB::rollback();
            return response()->json(['message' => 'Failed to update modals'], 500);
        }
    }
}
