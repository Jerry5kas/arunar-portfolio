<?php

namespace Database\Seeders;

use App\Models\ThemeSetting;
use Illuminate\Database\Seeder;

class ThemeSettingsSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $defaultSettings = [
            // Color Settings
            'primary_color' => '#000000',
            'secondary_color' => '#FFFFFF',
            'accent_color' => '#D4AF37',
            'accent_secondary_color' => '#B8860B',
            
            // Luxury Font System - Heading Font
            'font_heading_family' => 'Playfair Display',
            'font_heading_url' => 'https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;700;900&display=swap',
            
            // Luxury Font System - Body Font
            'font_body_family' => 'Neue Haas Grotesk Display',
            'font_body_url' => 'https://fonts.googleapis.com/css2?family=Neue+Haas+Grotesk+Display:wght@300;400;500;700&display=swap',
            
            // Luxury Font System - Accent Font
            'font_accent_family' => 'Cormorant Garamond',
            'font_accent_url' => 'https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@300;400;500;600&display=swap',
            
            // Combined Font URL (all fonts in one)
            'font_url' => 'https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;700;900&family=Neue+Haas+Grotesk+Display:wght@300;400;500;700&family=Cormorant+Garamond:wght@300;400;500;600&display=swap',
            
            // Legacy font support (using body font)
            'font_family' => 'Neue Haas Grotesk Display',
            
            // Logo (empty by default - user can upload)
            'logo_url' => '',
        ];

        foreach ($defaultSettings as $key => $value) {
            ThemeSetting::set($key, $value);
        }

        $this->command->info('Theme settings seeded successfully!');
        $this->command->info('Colors: Black, White, Royal Gold, Dark Gold');
        $this->command->info('Fonts: Playfair Display (Headings), Neue Haas Grotesk (Body), Cormorant Garamond (Accent)');
    }
}
