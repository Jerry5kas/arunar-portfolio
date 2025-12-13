<?php

use App\Http\Controllers\Admin\BlogController;
use App\Http\Controllers\Admin\GalleryImageController;
use App\Http\Controllers\Admin\ThemeSettingsController;
use App\Http\Controllers\Admin\VideoController;
use App\Http\Controllers\Settings\PasswordController;
use App\Http\Controllers\Settings\ProfileController;
use App\Http\Controllers\Settings\TwoFactorAuthenticationController;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::middleware('auth')->group(function () {
    Route::redirect('settings', '/settings/profile');

    Route::get('settings/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('settings/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('settings/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');

    Route::get('settings/password', [PasswordController::class, 'edit'])->name('user-password.edit');

    Route::put('settings/password', [PasswordController::class, 'update'])
        ->middleware('throttle:6,1')
        ->name('user-password.update');

    Route::get('settings/appearance', function () {
        return Inertia::render('settings/appearance');
    })->name('appearance.edit');

    Route::get('settings/two-factor', [TwoFactorAuthenticationController::class, 'show'])
        ->name('two-factor.show');

    // Admin theme settings
    Route::get('settings/theme', [ThemeSettingsController::class, 'index'])
        ->name('theme.index');
    Route::put('settings/theme', [ThemeSettingsController::class, 'update'])
        ->name('theme.update');
    // Allow POST for updates (for file uploads with method spoofing)
    Route::post('settings/theme', [ThemeSettingsController::class, 'update'])
        ->name('theme.update.post');

    // Admin blog management
    Route::resource('admin/blogs', BlogController::class)->names([
        'index' => 'admin.blogs.index',
        'create' => 'admin.blogs.create',
        'store' => 'admin.blogs.store',
        'show' => 'admin.blogs.show',
        'edit' => 'admin.blogs.edit',
        'update' => 'admin.blogs.update',
        'destroy' => 'admin.blogs.destroy',
    ]);
    
    // Allow POST for updates (for file uploads with method spoofing)
    Route::post('admin/blogs/{blog}', [BlogController::class, 'update'])
        ->name('admin.blogs.update.post');

    // Admin gallery management
    Route::resource('admin/gallery', GalleryImageController::class)->parameters([
        'gallery' => 'id',
    ])->names([
        'index' => 'admin.gallery.index',
        'create' => 'admin.gallery.create',
        'store' => 'admin.gallery.store',
        'show' => 'admin.gallery.show',
        'edit' => 'admin.gallery.edit',
        'update' => 'admin.gallery.update',
        'destroy' => 'admin.gallery.destroy',
    ]);
    
    // Allow POST for updates (for file uploads with method spoofing)
    Route::post('admin/gallery/{id}', [GalleryImageController::class, 'update'])
        ->name('admin.gallery.update.post');

    // Admin video management
    Route::resource('admin/videos', VideoController::class)->parameters([
        'videos' => 'id',
    ])->names([
        'index' => 'admin.videos.index',
        'create' => 'admin.videos.create',
        'store' => 'admin.videos.store',
        'show' => 'admin.videos.show',
        'edit' => 'admin.videos.edit',
        'update' => 'admin.videos.update',
        'destroy' => 'admin.videos.destroy',
    ]);
    
    // Allow POST for updates (for file uploads with method spoofing)
    Route::post('admin/videos/{id}', [VideoController::class, 'update'])
        ->name('admin.videos.update.post');
});
