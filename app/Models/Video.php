<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;
use Illuminate\Support\Str;

class Video extends Model
{
    use SoftDeletes;

    protected $fillable = [
        'title',
        'slug',
        'description',
        'video_url',
        'video_type',
        'thumbnail',
        'duration',
        'is_published',
        'published_at',
        'meta_title',
        'meta_description',
        'meta_keywords',
        'og_image',
        'og_title',
        'og_description',
        'category',
        'author',
        'views',
        'order',
    ];

    protected $casts = [
        'is_published' => 'boolean',
        'published_at' => 'datetime',
        'duration' => 'integer',
        'views' => 'integer',
        'order' => 'integer',
    ];

    /**
     * Boot the model.
     */
    protected static function boot()
    {
        parent::boot();

        static::creating(function ($video) {
            if (empty($video->slug)) {
                $video->slug = Str::slug($video->title);
            }
            
            // Auto-detect video type from URL
            if (empty($video->video_type) && !empty($video->video_url)) {
                $video->video_type = $video->detectVideoType($video->video_url);
            }
        });

        static::updating(function ($video) {
            if ($video->isDirty('title') && empty($video->slug)) {
                $video->slug = Str::slug($video->title);
            }
            
            // Auto-detect video type if URL changed
            if ($video->isDirty('video_url')) {
                $video->video_type = $video->detectVideoType($video->video_url);
            }
        });
    }

    /**
     * Detect video type from URL.
     */
    protected function detectVideoType($url)
    {
        if (str_contains($url, 'youtube.com') || str_contains($url, 'youtu.be')) {
            return 'youtube';
        }
        
        if (str_contains($url, 'vimeo.com')) {
            return 'vimeo';
        }
        
        return 'other';
    }

    /**
     * Extract YouTube video ID from URL.
     */
    public function getYoutubeIdAttribute()
    {
        if ($this->video_type !== 'youtube') {
            return null;
        }
        
        $url = $this->video_url;
        
        // Handle youtu.be short URLs
        if (preg_match('/youtu\.be\/([a-zA-Z0-9_-]+)/', $url, $matches)) {
            return $matches[1];
        }
        
        // Handle youtube.com URLs
        if (preg_match('/(?:youtube\.com\/watch\?v=|youtube\.com\/embed\/)([a-zA-Z0-9_-]+)/', $url, $matches)) {
            return $matches[1];
        }
        
        return null;
    }

    /**
     * Get embed URL for YouTube videos.
     */
    public function getEmbedUrlAttribute()
    {
        if ($this->video_type === 'youtube' && $this->youtube_id) {
            return "https://www.youtube.com/embed/{$this->youtube_id}";
        }
        
        if ($this->video_type === 'vimeo') {
            // Extract Vimeo ID
            if (preg_match('/vimeo\.com\/(\d+)/', $this->video_url, $matches)) {
                return "https://player.vimeo.com/video/{$matches[1]}";
            }
        }
        
        return $this->video_url;
    }

    /**
     * Get the route key for the model.
     */
    public function getRouteKeyName()
    {
        return 'slug';
    }

    /**
     * Scope a query to only include published videos.
     */
    public function scopePublished($query)
    {
        return $query->where('is_published', true)
            ->where('published_at', '<=', now())
            ->orderBy('order', 'asc');
    }

    /**
     * Get thumbnail URL.
     */
    public function getThumbnailUrlAttribute()
    {
        if ($this->thumbnail) {
            return \App\Services\FileUploadService::getUrl($this->thumbnail);
        }
        
        // Generate YouTube thumbnail if not provided
        if ($this->video_type === 'youtube' && $this->youtube_id) {
            return "https://img.youtube.com/vi/{$this->youtube_id}/maxresdefault.jpg";
        }
        
        return null;
    }

    /**
     * Increment views count.
     */
    public function incrementViews()
    {
        $this->increment('views');
    }
}
