<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Casts\Attribute;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

class Task extends Model
{
    //
    protected $fillable = [
        'title',
        'description',
        'file',
        'assignedTo',
        'status',
    ];

    protected function file(): Attribute

    {

        return Attribute::make(

            get: fn ($value) => url('uploads/'.$value),

        );

    }

    public function user(): BelongsTo
    {
        return $this->belongsTo(User::class);
    }
}
