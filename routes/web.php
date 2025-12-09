<?php

use Illuminate\Support\Facades\Route;
use Inertia\Inertia;
use Laravel\Fortify\Features;

Route::get('/', function () {
    return Inertia::render('welcome', [
        'canRegister' => Features::enabled(Features::registration()),
    ]);
})->name('home');

Route::get('/about', function () {
    return Inertia::render('about');
})->name('about');

Route::get('/ventures', function () {
    return Inertia::render('ventures');
})->name('ventures');

Route::get('/accolades', function () {
    return Inertia::render('accolades');
})->name('accolades');

Route::get('/media', function () {
    return Inertia::render('media');
})->name('media');

Route::get('/blog', function () {
    return Inertia::render('blog');
})->name('blog');

Route::middleware(['auth', 'verified'])->group(function () {
    Route::get('dashboard', function () {
        return Inertia::render('dashboard');
    })->name('dashboard');
});

require __DIR__.'/settings.php';
