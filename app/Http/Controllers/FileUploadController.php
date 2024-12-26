<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

class FileUploadController extends Controller
{
    //
    public function upload(Request $request)
    {
        $request->validate([
            'file' => 'required|mimes:jpg,png,pdf|',
        ]);

        $file = $request->file('file');
        $path = $file->store('uploads', 'public');

        // Additional logic (e.g., storing file information in the database)

        return redirect()->back();
    }

    public function show($filename)
    {
        $url = Storage::url("uploads/{$filename}");

        return view('file.show', ['url' => $url]);
    }
}
