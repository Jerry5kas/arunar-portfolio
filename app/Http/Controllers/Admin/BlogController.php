<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Services\FileUploadService;
use App\Models\Blog;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;
use Illuminate\Support\Str;
use Inertia\Inertia;

/**
 * Blog Controller
 * 
 * File Storage:
 * - Blog images are stored in: storage/app/public/blogs/
 * - OG images are stored in: storage/app/public/blogs/og/
 * - URLs are generated using: Storage::disk('public')->url($path)
 * - Ensure storage link exists: php artisan storage:link
 */
class BlogController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $blogs = Blog::latest()
            ->paginate(15)
            ->through(function ($blog) {
                return [
                    'id' => $blog->id,
                    'title' => $blog->title,
                    'slug' => $blog->slug,
                    'excerpt' => $blog->excerpt,
                    'featured_image' => $blog->featured_image ? FileUploadService::getUrl($blog->featured_image) : null,
                    'is_published' => $blog->is_published,
                    'published_at' => $blog->published_at?->format('Y-m-d H:i:s'),
                    'views' => $blog->views,
                    'created_at' => $blog->created_at->format('Y-m-d H:i:s'),
                ];
            });

        return Inertia::render('admin/blogs/index', [
            'blogs' => $blogs,
        ]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        return Inertia::render('admin/blogs/create');
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        // Get all form data except files (files handled separately)
        $data = $request->only([
            'title',
            'slug',
            'excerpt',
            'content',
            'is_published',
            'published_at',
            'meta_title',
            'meta_description',
            'meta_keywords',
            'og_title',
            'og_description',
            'author',
        ]);

        // Convert boolean
        if (isset($data['is_published'])) {
            $data['is_published'] = filter_var($data['is_published'], FILTER_VALIDATE_BOOLEAN, FILTER_NULL_ON_FAILURE) ?? false;
        }

        // Handle featured image upload
        if ($request->hasFile('featured_image')) {
            $uploadedPath = FileUploadService::upload(
                $request->file('featured_image'),
                'blogs'
            );
            if ($uploadedPath) {
                $data['featured_image'] = $uploadedPath;
            }
        }

        // Handle OG image upload
        if ($request->hasFile('og_image')) {
            $uploadedPath = FileUploadService::upload(
                $request->file('og_image'),
                'blogs',
                'og' // Subdirectory
            );
            if ($uploadedPath) {
                $data['og_image'] = $uploadedPath;
            }
        }

        // Generate slug if not provided
        if (empty($data['slug']) && !empty($data['title'])) {
            $data['slug'] = Str::slug($data['title']);
        }

        // Set published_at if publishing
        if (!empty($data['is_published']) && empty($data['published_at'])) {
            $data['published_at'] = now();
        }

        Blog::create($data);

        return redirect()->route('admin.blogs.index')
            ->with('success', 'Blog post created successfully.');
    }

    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
        $blog = Blog::findOrFail($id);

        return Inertia::render('admin/blogs/show', [
            'blog' => $blog,
        ]);
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(string $id)
    {
        $blog = Blog::findOrFail($id);

        // Convert image paths to URLs
        $blogData = $blog->toArray();
        $blogData['featured_image'] = FileUploadService::getUrl($blog->featured_image);
        $blogData['og_image'] = FileUploadService::getUrl($blog->og_image);

        return Inertia::render('admin/blogs/edit', [
            'blog' => $blogData,
        ]);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $id)
    {
        $blog = Blog::findOrFail($id);

        // Debug: Log all request data
        \Log::info('Blog Update Request', [
            'method' => $request->method(),
            'has_featured_image' => $request->hasFile('featured_image'),
            'has_og_image' => $request->hasFile('og_image'),
            'all_files' => array_keys($request->allFiles()),
            'content_type' => $request->header('Content-Type'),
            'all_input_keys' => array_keys($request->all()),
            'featured_image_size' => $request->hasFile('featured_image') ? $request->file('featured_image')->getSize() : null,
        ]);

        // Get all form data except files (files handled separately)
        $data = $request->only([
            'title',
            'slug',
            'excerpt',
            'content',
            'is_published',
            'published_at',
            'meta_title',
            'meta_description',
            'meta_keywords',
            'og_title',
            'og_description',
            'author',
        ]);

        // Convert boolean
        if (isset($data['is_published'])) {
            $data['is_published'] = filter_var($data['is_published'], FILTER_VALIDATE_BOOLEAN, FILTER_NULL_ON_FAILURE) ?? false;
        }

        // Handle featured image upload
        if ($request->hasFile('featured_image')) {
            \Log::info('Processing featured image upload');
            $uploadedPath = FileUploadService::upload(
                $request->file('featured_image'),
                'blogs',
                null, // No subdirectory for featured images
                $blog->featured_image
            );
            if ($uploadedPath) {
                $data['featured_image'] = $uploadedPath;
                \Log::info('Featured image uploaded successfully', ['path' => $uploadedPath]);
            } else {
                \Log::warning('Featured image upload failed');
            }
        } else {
            \Log::info('No featured image file in request');
        }

        // Handle OG image upload
        if ($request->hasFile('og_image')) {
            $uploadedPath = FileUploadService::upload(
                $request->file('og_image'),
                'blogs',
                'og', // Subdirectory for OG images
                $blog->og_image
            );
            if ($uploadedPath) {
                $data['og_image'] = $uploadedPath;
            }
        }

        // Generate slug if not provided
        if (empty($data['slug']) && !empty($data['title'])) {
            $data['slug'] = Str::slug($data['title']);
        }

        // Set published_at if publishing
        if (!empty($data['is_published']) && empty($data['published_at'])) {
            $data['published_at'] = now();
        }

        $blog->update($data);

        return redirect()->route('admin.blogs.index')
            ->with('success', 'Blog post updated successfully.');
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        $blog = Blog::findOrFail($id);

        // Delete images
        if ($blog->featured_image) {
            Storage::disk('public')->delete($blog->featured_image);
        }
        if ($blog->og_image) {
            Storage::disk('public')->delete($blog->og_image);
        }

        $blog->delete();

        return redirect()->route('admin.blogs.index')
            ->with('success', 'Blog post deleted successfully.');
    }
}
