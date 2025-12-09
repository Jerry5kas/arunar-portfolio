<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('theme_settings', function (Blueprint $table) {
            $table->id();
            $table->string('key')->unique();
            $table->string('value');
            $table->timestamps();
        });

        // Insert default theme values
        DB::table('theme_settings')->insert([
            ['key' => 'primary_color', 'value' => '#000000', 'created_at' => now(), 'updated_at' => now()],
            ['key' => 'secondary_color', 'value' => '#FFFFFF', 'created_at' => now(), 'updated_at' => now()],
            ['key' => 'accent_color', 'value' => '#D4AF37', 'created_at' => now(), 'updated_at' => now()],
            ['key' => 'accent_secondary_color', 'value' => '#B8860B', 'created_at' => now(), 'updated_at' => now()],
            ['key' => 'font_family', 'value' => 'Instrument Sans', 'created_at' => now(), 'updated_at' => now()],
            ['key' => 'font_url', 'value' => 'https://fonts.bunny.net/css?family=instrument-sans:400,500,600', 'created_at' => now(), 'updated_at' => now()],
        ]);
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('theme_settings');
    }
};
