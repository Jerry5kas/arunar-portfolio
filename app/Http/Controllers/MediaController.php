<?php

namespace App\Http\Controllers;

use App\Models\GalleryImage;
use App\Models\Video;
use App\Services\FileUploadService;
use Inertia\Inertia;

class MediaController extends Controller
{
    /**
     * Display the media page with gallery images and videos.
     */
    public function index()
    {
        // Get published gallery images (only show published items on public page)
        // For now, showing all items for testing - change back to published() when ready
        $galleryImages = GalleryImage::orderBy('order', 'asc')
            ->get()
            ->map(function ($image) {
                // Get image URL - prefer external URL, fallback to uploaded file
                $imageUrl = null;
                $rawImageUrl = $image->getAttribute('image_url');
                $rawImage = $image->getAttribute('image');
                
                if ($rawImageUrl) {
                    $imageUrl = $rawImageUrl;
                } elseif ($rawImage) {
                    $imageUrl = FileUploadService::getUrl($rawImage);
                }
                
                return [
                    'id' => $image->id,
                    'title' => $image->title,
                    'slug' => $image->slug,
                    'alt' => $image->alt,
                    'image' => $imageUrl,
                    'category' => $image->category,
                    'description' => $image->description,
                    'views' => $image->views,
                ];
            })
            ->values() // Reset array keys
            ->toArray(); // Convert to array

        // Get published videos (only show published items on public page)
        // For now, showing all items for testing - change back to published() when ready
        $videos = Video::orderBy('order', 'asc')
            ->get()
            ->map(function ($video) {
                // Get thumbnail URL
                $thumbnailUrl = null;
                $rawThumbnail = $video->getAttribute('thumbnail');
                
                if ($rawThumbnail) {
                    $thumbnailUrl = FileUploadService::getUrl($rawThumbnail);
                } elseif ($video->video_type === 'youtube' && $video->youtube_id) {
                    // Generate YouTube thumbnail
                    $thumbnailUrl = "https://img.youtube.com/vi/{$video->youtube_id}/maxresdefault.jpg";
                }
                
                // Get embed URL - check if it's an accessor or attribute
                $embedUrl = null;
                try {
                    $embedUrl = $video->embed_url; // This uses the accessor
                } catch (\Exception $e) {
                    // If accessor fails, try to generate it manually
                    if ($video->video_type === 'youtube' && $video->video_url) {
                        // Extract YouTube ID from URL
                        preg_match('/(?:youtube\.com\/watch\?v=|youtu\.be\/|youtube\.com\/embed\/)([^&\n?#]+)/', $video->video_url, $matches);
                        if (isset($matches[1])) {
                            $embedUrl = "https://www.youtube.com/embed/{$matches[1]}";
                        }
                    } elseif ($video->video_type === 'vimeo' && $video->video_url) {
                        // Extract Vimeo ID from URL
                        preg_match('/vimeo\.com\/(\d+)/', $video->video_url, $matches);
                        if (isset($matches[1])) {
                            $embedUrl = "https://player.vimeo.com/video/{$matches[1]}";
                        }
                    } else {
                        $embedUrl = $video->video_url;
                    }
                }
                
                return [
                    'id' => $video->id,
                    'title' => $video->title,
                    'slug' => $video->slug,
                    'description' => $video->description,
                    'video_url' => $video->video_url,
                    'embed_url' => $embedUrl,
                    'video_type' => $video->video_type,
                    'thumbnail' => $thumbnailUrl,
                    'duration' => $video->duration,
                    'category' => $video->category,
                    'author' => $video->author,
                    'views' => $video->views,
                ];
            })
            ->values() // Reset array keys
            ->toArray(); // Convert to array

        return Inertia::render('media', [
            'galleryImages' => $galleryImages,
            'videos' => $videos,
        ]);
    }
}
