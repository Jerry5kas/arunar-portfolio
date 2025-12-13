<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Services\FileUploadService;
use App\Models\Video;
use Illuminate\Http\Request;
use Illuminate\Support\Str;
use Inertia\Inertia;

class VideoController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $videos = Video::latest()
            ->paginate(15)
            ->through(function ($video) {
                return [
                    'id' => $video->id,
                    'title' => $video->title,
                    'slug' => $video->slug,
                    'video_url' => $video->video_url,
                    'video_type' => $video->video_type,
                    'thumbnail' => $video->thumbnail ? FileUploadService::getUrl($video->thumbnail) : null,
                    'thumbnail_url' => $video->thumbnail_url,
                    'is_published' => $video->is_published,
                    'published_at' => $video->published_at?->format('Y-m-d H:i:s'),
                    'category' => $video->category,
                    'views' => $video->views,
                    'order' => $video->order,
                    'created_at' => $video->created_at->format('Y-m-d H:i:s'),
                ];
            });

        return Inertia::render('admin/videos/index', [
            'videos' => $videos,
        ]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        return Inertia::render('admin/videos/create');
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $data = $request->only([
            'title',
            'slug',
            'description',
            'video_url',
            'video_type',
            'duration',
            'is_published',
            'published_at',
            'meta_title',
            'meta_description',
            'meta_keywords',
            'og_title',
            'og_description',
            'category',
            'author',
            'order',
        ]);

        // Convert boolean
        if (isset($data['is_published'])) {
            $data['is_published'] = filter_var($data['is_published'], FILTER_VALIDATE_BOOLEAN, FILTER_NULL_ON_FAILURE) ?? false;
        }

        // Auto-detect video type if not provided
        if (empty($data['video_type']) && !empty($data['video_url'])) {
            if (str_contains($data['video_url'], 'youtube.com') || str_contains($data['video_url'], 'youtu.be')) {
                $data['video_type'] = 'youtube';
            } elseif (str_contains($data['video_url'], 'vimeo.com')) {
                $data['video_type'] = 'vimeo';
            } else {
                $data['video_type'] = 'other';
            }
        }

        // Handle thumbnail upload
        if ($request->hasFile('thumbnail')) {
            $uploadedPath = FileUploadService::upload(
                $request->file('thumbnail'),
                'videos',
                'thumbnails'
            );
            if ($uploadedPath) {
                $data['thumbnail'] = $uploadedPath;
            }
        }

        // Handle OG image upload
        if ($request->hasFile('og_image')) {
            $uploadedPath = FileUploadService::upload(
                $request->file('og_image'),
                'videos',
                'og'
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

        // Set default order if not provided
        if (empty($data['order'])) {
            $data['order'] = Video::max('order') + 1;
        }

        Video::create($data);

        return redirect()->route('admin.videos.index')
            ->with('success', 'Video created successfully.');
    }

    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
        $video = Video::findOrFail($id);

        return Inertia::render('admin/videos/show', [
            'video' => $video,
        ]);
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(string $id)
    {
        $video = Video::findOrFail($id);

        // Convert image paths to URLs
        $videoData = $video->toArray();
        $videoData['thumbnail'] = $video->thumbnail ? FileUploadService::getUrl($video->thumbnail) : null;
        $videoData['thumbnail_url'] = $video->thumbnail_url;
        $videoData['og_image'] = FileUploadService::getUrl($video->og_image);

        return Inertia::render('admin/videos/edit', [
            'video' => $videoData,
        ]);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $id)
    {
        $video = Video::findOrFail($id);

        $data = $request->only([
            'title',
            'slug',
            'description',
            'video_url',
            'video_type',
            'duration',
            'is_published',
            'published_at',
            'meta_title',
            'meta_description',
            'meta_keywords',
            'og_title',
            'og_description',
            'category',
            'author',
            'order',
        ]);

        // Convert boolean
        if (isset($data['is_published'])) {
            $data['is_published'] = filter_var($data['is_published'], FILTER_VALIDATE_BOOLEAN, FILTER_NULL_ON_FAILURE) ?? false;
        }

        // Auto-detect video type if URL changed
        if (!empty($data['video_url']) && $data['video_url'] !== $video->video_url) {
            if (str_contains($data['video_url'], 'youtube.com') || str_contains($data['video_url'], 'youtu.be')) {
                $data['video_type'] = 'youtube';
            } elseif (str_contains($data['video_url'], 'vimeo.com')) {
                $data['video_type'] = 'vimeo';
            } else {
                $data['video_type'] = 'other';
            }
        } else {
            $data['video_type'] = $video->video_type;
        }

        // Handle thumbnail upload
        if ($request->hasFile('thumbnail')) {
            $uploadedPath = FileUploadService::upload(
                $request->file('thumbnail'),
                'videos',
                'thumbnails',
                $video->thumbnail
            );
            if ($uploadedPath) {
                $data['thumbnail'] = $uploadedPath;
            }
        } else {
            $data['thumbnail'] = $video->thumbnail;
        }

        // Handle OG image upload
        if ($request->hasFile('og_image')) {
            $uploadedPath = FileUploadService::upload(
                $request->file('og_image'),
                'videos',
                'og',
                $video->og_image
            );
            if ($uploadedPath) {
                $data['og_image'] = $uploadedPath;
            }
        } else {
            $data['og_image'] = $video->og_image;
        }

        // Generate slug if not provided
        if (empty($data['slug']) && !empty($data['title'])) {
            $data['slug'] = Str::slug($data['title']);
        }

        // Set published_at if publishing
        if (!empty($data['is_published']) && empty($data['published_at'])) {
            $data['published_at'] = now();
        }

        $video->update($data);

        return redirect()->route('admin.videos.index')
            ->with('success', 'Video updated successfully.');
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        $video = Video::findOrFail($id);

        // Delete images using helper
        FileUploadService::delete($video->thumbnail);
        FileUploadService::delete($video->og_image);

        $video->delete();

        return redirect()->route('admin.videos.index')
            ->with('success', 'Video deleted successfully.');
    }
}
