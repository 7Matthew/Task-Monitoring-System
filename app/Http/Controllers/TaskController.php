<?php

namespace App\Http\Controllers;

use App\Models\Task;
use App\Models\User;
use Inertia\Inertia;
use Inertia\Response;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use Illuminate\Http\RedirectResponse;
use Illuminate\Support\Facades\Storage;


class TaskController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index(): Response
    {
        return Inertia::render('Dashboard', [
            'tasks' => Task::with('user:id,name')->latest()->get(),
            'users' => User::all(),
        ]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        //
        return Inertia::render('Tasks/Index', [
            'tasks' => Task::with('user:id,name')->latest()->get(),
            'users' => User::all(),
        ]);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        //
         $validated = $request->validate([
            'title' => 'string|required|max:255',
            'description' => '',
            'file'=>'',
            'assignedTo' => '',
            'status' => '',
        ]);
        // $fileName = time().'.'.$request->file;  
        // Storage::putFile($validated->file, $request->file(public_path('uploads')));
        // $validated->file = $fileName;
 
        $request->user()->tasks()->create($validated);
 
        return redirect()->back();
    }

    /**
     * Display the specified resource.
     */
    public function show(Task $task)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Task $task)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, Task $task)
    {
        //

        $validated = $request->validate([
            'title' => 'string|required|max:255',
            'description' => '',
            'file'=>'',
            'assignedTo' => '',
            'status' => '',
        ]);
 
        $task->update($validated);
 
        return redirect()->back();
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Task $task)
    {
        //
    }
}
