<?php

namespace App\Http\Controllers;

use App\Services\FileUploadService;
use App\Models\Blog;
use Illuminate\Support\Facades\Storage;
use Inertia\Inertia;

class BlogController extends Controller
{
    /**
     * Display a listing of published blog posts.
     */
    public function index()
    {
        $blogs = Blog::published()
            ->latest('published_at')
            ->paginate(12)
            ->through(function ($blog) {
                return [
                    'id' => $blog->id,
                    'title' => $blog->title,
                    'slug' => $blog->slug,
                    'excerpt' => $blog->excerpt,
                    'featured_image' => $blog->featured_image ? FileUploadService::getUrl($blog->featured_image) : null,
                    'published_at' => $blog->published_at?->format('F d, Y'),
                    'author' => $blog->author,
                    'reading_time' => $blog->reading_time,
                    'views' => $blog->views,
                ];
            });

        return Inertia::render('blog', [
            'blogs' => $blogs,
        ]);
    }

    /**
     * Display the specified blog post.
     */
    public function show(Blog $blog)
    {
        // Only show published posts
        if (!$blog->is_published || $blog->published_at > now()) {
            abort(404);
        }

        // Increment views
        $blog->incrementViews();

        // Get related posts
        $relatedPosts = Blog::published()
            ->where('id', '!=', $blog->id)
            ->latest('published_at')
            ->limit(3)
            ->get()
            ->map(function ($post) {
                return [
                    'id' => $post->id,
                    'title' => $post->title,
                    'slug' => $post->slug,
                    'excerpt' => $post->excerpt,
                    'featured_image' => $post->featured_image ? FileUploadService::getUrl($post->featured_image) : null,
                    'published_at' => $post->published_at?->format('F d, Y'),
                    'reading_time' => $post->reading_time,
                ];
            });

        return Inertia::render('blog/show', [
            'blog' => [
                'id' => $blog->id,
                'title' => $blog->title,
                'slug' => $blog->slug,
                'content' => $blog->content,
                'excerpt' => $blog->excerpt,
                'featured_image' => $blog->featured_image ? FileUploadService::getUrl($blog->featured_image) : null,
                'published_at' => $blog->published_at?->format('F d, Y'),
                'author' => $blog->author,
                'reading_time' => $blog->reading_time,
                'views' => $blog->views,
                'meta_title' => $blog->meta_title,
                'meta_description' => $blog->meta_description,
                'meta_keywords' => $blog->meta_keywords,
                'og_image' => $blog->og_image ? FileUploadService::getUrl($blog->og_image) : null,
                'og_title' => $blog->og_title,
                'og_description' => $blog->og_description,
            ],
            'relatedPosts' => $relatedPosts,
        ]);
    }
}
