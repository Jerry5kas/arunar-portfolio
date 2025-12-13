<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;
use Illuminate\Support\Str;

class GalleryImage extends Model
{
    use SoftDeletes;

    protected $fillable = [
        'title',
        'slug',
        'alt',
        'image',
        'image_url',
        'order',
        'is_published',
        'published_at',
        'meta_title',
        'meta_description',
        'meta_keywords',
        'og_image',
        'og_title',
        'og_description',
        'category',
        'description',
        'views',
    ];

    protected $casts = [
        'is_published' => 'boolean',
        'published_at' => 'datetime',
        'order' => 'integer',
        'views' => 'integer',
    ];

    /**
     * Boot the model.
     */
    protected static function boot()
    {
        parent::boot();

        static::creating(function ($galleryImage) {
            if (empty($galleryImage->slug)) {
                $galleryImage->slug = Str::slug($galleryImage->title);
            }
        });

        static::updating(function ($galleryImage) {
            if ($galleryImage->isDirty('title') && empty($galleryImage->slug)) {
                $galleryImage->slug = Str::slug($galleryImage->title);
            }
        });
    }

    /**
     * Get the route key for the model.
     */
    public function getRouteKeyName()
    {
        return 'slug';
    }

    /**
     * Scope a query to only include published images.
     */
    public function scopePublished($query)
    {
        return $query->where('is_published', true)
            ->where('published_at', '<=', now())
            ->orderBy('order', 'asc');
    }

    /**
     * Get the final image URL (either from storage or external URL).
     * This is a helper method, not an accessor, to avoid recursion.
     */
    public function getFinalImageUrl(): ?string
    {
        // Access raw attributes to avoid infinite recursion
        $attributes = $this->getAttributes();
        
        // Check if image_url exists in database
        if (isset($attributes['image_url']) && !empty($attributes['image_url'])) {
            return $attributes['image_url'];
        }
        
        // If no image_url, check if image file exists and generate URL
        if (isset($attributes['image']) && !empty($attributes['image'])) {
            return \App\Services\FileUploadService::getUrl($attributes['image']);
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
