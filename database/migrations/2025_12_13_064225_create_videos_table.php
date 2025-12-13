<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('videos', function (Blueprint $table) {
            $table->id();
            $table->string('title');
            $table->string('slug')->unique();
            $table->text('description')->nullable();
            $table->string('video_url'); // YouTube, Vimeo, or other video links
            $table->string('video_type')->default('youtube'); // youtube, vimeo, other
            $table->string('thumbnail')->nullable(); // Optional thumbnail image
            $table->integer('duration')->nullable(); // Duration in seconds
            $table->boolean('is_published')->default(false);
            $table->timestamp('published_at')->nullable();
            
            // SEO Fields
            $table->string('meta_title')->nullable();
            $table->text('meta_description')->nullable();
            $table->string('meta_keywords')->nullable();
            $table->string('og_image')->nullable();
            $table->string('og_title')->nullable();
            $table->text('og_description')->nullable();
            
            // Additional fields
            $table->string('category')->nullable();
            $table->string('author')->nullable();
            $table->integer('views')->default(0);
            $table->integer('order')->default(0);
            
            $table->timestamps();
            $table->softDeletes();
            
            // Indexes
            $table->index('slug');
            $table->index('is_published');
            $table->index('published_at');
            $table->index('video_type');
            $table->index('category');
            $table->index('order');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('videos');
    }
};
