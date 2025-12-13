<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Services\FileUploadService;
use App\Models\GalleryImage;
use Illuminate\Http\Request;
use Illuminate\Support\Str;
use Inertia\Inertia;

class GalleryImageController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $galleryImages = GalleryImage::latest()
            ->paginate(20)
            ->through(function ($image) {
                // Get image URL - prefer accessor result, but handle safely
                $finalImageUrl = null;
                $rawImageUrl = $image->getAttribute('image_url');
                $rawImage = $image->getAttribute('image');
                
                if ($rawImageUrl) {
                    $finalImageUrl = $rawImageUrl;
                } elseif ($rawImage) {
                    $finalImageUrl = FileUploadService::getUrl($rawImage);
                }
                
                return [
                    'id' => $image->id,
                    'title' => $image->title,
                    'slug' => $image->slug,
                    'alt' => $image->alt,
                    'image' => $finalImageUrl,
                    'image_url' => $rawImageUrl, // Raw database value
                    'order' => $image->order,
                    'is_published' => $image->is_published,
                    'published_at' => $image->published_at?->format('Y-m-d H:i:s'),
                    'category' => $image->category,
                    'views' => $image->views,
                    'created_at' => $image->created_at->format('Y-m-d H:i:s'),
                ];
            });

        return Inertia::render('admin/gallery/index', [
            'galleryImages' => $galleryImages,
        ]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        return Inertia::render('admin/gallery/create');
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $data = $request->only([
            'title',
            'slug',
            'alt',
            'image_url',
            'order',
            'is_published',
            'published_at',
            'meta_title',
            'meta_description',
            'meta_keywords',
            'og_title',
            'og_description',
            'category',
            'description',
        ]);

        // Convert boolean
        if (isset($data['is_published'])) {
            $data['is_published'] = filter_var($data['is_published'], FILTER_VALIDATE_BOOLEAN, FILTER_NULL_ON_FAILURE) ?? false;
        }

        // Handle image upload (file takes priority over URL)
        if ($request->hasFile('image')) {
            $uploadedPath = FileUploadService::upload(
                $request->file('image'),
                'gallery'
            );
            if ($uploadedPath) {
                $data['image'] = $uploadedPath;
                $data['image_url'] = null; // Clear URL if file uploaded
            }
        } elseif (!empty($data['image_url'])) {
            // Validate URL if provided
            if (filter_var($data['image_url'], FILTER_VALIDATE_URL)) {
                $data['image'] = null; // Clear file path if URL provided
            } else {
                $data['image_url'] = null; // Invalid URL, clear it
            }
        }

        // Handle OG image upload
        if ($request->hasFile('og_image')) {
            $uploadedPath = FileUploadService::upload(
                $request->file('og_image'),
                'gallery',
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
            $data['order'] = GalleryImage::max('order') + 1;
        }

        GalleryImage::create($data);

        return redirect()->route('admin.gallery.index')
            ->with('success', 'Gallery image created successfully.');
    }

    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
        $galleryImage = GalleryImage::findOrFail($id);

        return Inertia::render('admin/gallery/show', [
            'galleryImage' => $galleryImage,
        ]);
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(string $id)
    {
        $galleryImage = GalleryImage::findOrFail($id);

        // Convert image paths to URLs
        $imageData = $galleryImage->toArray();
        $imageData['image'] = $galleryImage->image ? FileUploadService::getUrl($galleryImage->image) : null;
        $imageData['og_image'] = FileUploadService::getUrl($galleryImage->og_image);

        return Inertia::render('admin/gallery/edit', [
            'galleryImage' => $imageData,
        ]);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $id)
    {
        $galleryImage = GalleryImage::findOrFail($id);

        $data = $request->only([
            'title',
            'slug',
            'alt',
            'image_url',
            'order',
            'is_published',
            'published_at',
            'meta_title',
            'meta_description',
            'meta_keywords',
            'og_title',
            'og_description',
            'category',
            'description',
        ]);

        // Convert boolean
        if (isset($data['is_published'])) {
            $data['is_published'] = filter_var($data['is_published'], FILTER_VALIDATE_BOOLEAN, FILTER_NULL_ON_FAILURE) ?? false;
        }

        // Handle image upload (file takes priority over URL)
        if ($request->hasFile('image')) {
            $uploadedPath = FileUploadService::upload(
                $request->file('image'),
                'gallery',
                null,
                $galleryImage->image
            );
            if ($uploadedPath) {
                $data['image'] = $uploadedPath;
                $data['image_url'] = null; // Clear URL if file uploaded
            }
        } elseif (!empty($data['image_url'])) {
            // Validate URL if provided
            if (filter_var($data['image_url'], FILTER_VALIDATE_URL)) {
                $data['image'] = null; // Clear file path if URL provided
                // Delete old file if exists
                if ($galleryImage->image) {
                    FileUploadService::delete($galleryImage->image);
                }
            } else {
                $data['image_url'] = $galleryImage->image_url; // Keep old URL if invalid
            }
        } else {
            // Keep existing image
            $data['image'] = $galleryImage->image;
            $data['image_url'] = $galleryImage->image_url;
        }

        // Handle OG image upload
        if ($request->hasFile('og_image')) {
            $uploadedPath = FileUploadService::upload(
                $request->file('og_image'),
                'gallery',
                'og',
                $galleryImage->og_image
            );
            if ($uploadedPath) {
                $data['og_image'] = $uploadedPath;
            }
        } else {
            $data['og_image'] = $galleryImage->og_image;
        }

        // Generate slug if not provided
        if (empty($data['slug']) && !empty($data['title'])) {
            $data['slug'] = Str::slug($data['title']);
        }

        // Set published_at if publishing
        if (!empty($data['is_published']) && empty($data['published_at'])) {
            $data['published_at'] = now();
        }

        $galleryImage->update($data);

        return redirect()->route('admin.gallery.index')
            ->with('success', 'Gallery image updated successfully.');
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        $galleryImage = GalleryImage::findOrFail($id);

        // Delete images using helper
        FileUploadService::delete($galleryImage->image);
        FileUploadService::delete($galleryImage->og_image);

        $galleryImage->delete();

        return redirect()->route('admin.gallery.index')
            ->with('success', 'Gallery image deleted successfully.');
    }
}
