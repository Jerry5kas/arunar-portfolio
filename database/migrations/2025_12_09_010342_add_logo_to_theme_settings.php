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
        // Add logo URL setting (stores the path/URL to the logo file)
        DB::table('theme_settings')->updateOrInsert(
            ['key' => 'logo_url'],
            ['value' => '', 'created_at' => now(), 'updated_at' => now()]
        );
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        DB::table('theme_settings')->where('key', 'logo_url')->delete();
    }
};
