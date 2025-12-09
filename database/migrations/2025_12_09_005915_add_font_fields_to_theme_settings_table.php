<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Support\Facades\DB;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        // Update existing font_family and font_url to use heading font as default
        // Add new font settings for the luxury font system
        DB::table('theme_settings')->updateOrInsert(
            ['key' => 'font_heading_family'],
            ['value' => 'Playfair Display', 'created_at' => now(), 'updated_at' => now()]
        );

        DB::table('theme_settings')->updateOrInsert(
            ['key' => 'font_body_family'],
            ['value' => 'Neue Haas Grotesk Display', 'created_at' => now(), 'updated_at' => now()]
        );

        DB::table('theme_settings')->updateOrInsert(
            ['key' => 'font_accent_family'],
            ['value' => 'Cormorant Garamond', 'created_at' => now(), 'updated_at' => now()]
        );

        // Font URLs - using Google Fonts for these premium fonts
        DB::table('theme_settings')->updateOrInsert(
            ['key' => 'font_heading_url'],
            ['value' => 'https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;700;900&display=swap', 'created_at' => now(), 'updated_at' => now()]
        );

        DB::table('theme_settings')->updateOrInsert(
            ['key' => 'font_body_url'],
            ['value' => 'https://fonts.googleapis.com/css2?family=Neue+Haas+Grotesk+Display:wght@300;400;500;700&display=swap', 'created_at' => now(), 'updated_at' => now()]
        );

        DB::table('theme_settings')->updateOrInsert(
            ['key' => 'font_accent_url'],
            ['value' => 'https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@300;400;500;600&display=swap', 'created_at' => now(), 'updated_at' => now()]
        );

        // Keep legacy font_family and font_url for backward compatibility
        // Update them to use body font as default
        DB::table('theme_settings')->updateOrInsert(
            ['key' => 'font_family'],
            ['value' => 'Neue Haas Grotesk Display', 'created_at' => now(), 'updated_at' => now()]
        );

        DB::table('theme_settings')->updateOrInsert(
            ['key' => 'font_url'],
            ['value' => 'https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;700;900&family=Neue+Haas+Grotesk+Display:wght@300;400;500;700&family=Cormorant+Garamond:wght@300;400;500;600&display=swap', 'created_at' => now(), 'updated_at' => now()]
        );
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        DB::table('theme_settings')->whereIn('key', [
            'font_heading_family',
            'font_body_family',
            'font_accent_family',
            'font_heading_url',
            'font_body_url',
            'font_accent_url',
        ])->delete();
    }
};
