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
            // Elite White-Based Theme Colors
            'primary_color' => '#0E0E0E', // Soft Black for primary text
            'secondary_color' => '#F9F9F7', // Ivory White base
            'accent_color' => '#C9A24D', // Soft Gold
            'accent_secondary_color' => '#A8842D', // Deep Gold (hover/active)
            
            // Elite Typography - Heading Font (Playfair Display: 500-700)
            'font_heading_family' => 'Playfair Display',
            'font_heading_url' => 'https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;500;600;700&display=swap',
            
            // Luxury Font System - Body Font
            'font_body_family' => 'Neue Haas Grotesk Display',
            'font_body_url' => 'https://fonts.googleapis.com/css2?family=Neue+Haas+Grotesk+Display:wght@300;400;500;700&display=swap',
            
            // Luxury Font System - Accent Font
            'font_accent_family' => 'Cormorant Garamond',
            'font_accent_url' => 'https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@300;400;500;600&display=swap',
            
            // Combined Font URL (all fonts in one) - Elite Typography
            'font_url' => 'https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;500;600;700&family=Neue+Haas+Grotesk+Display:wght@300;400;500;700&family=Cormorant+Garamond:wght@300;400;500;600&display=swap',
            
            // Legacy font support (using body font)
            'font_family' => 'Neue Haas Grotesk Display',
            
            // Logo (empty by default - user can upload)
            'logo_url' => '',
        ];

        foreach ($defaultSettings as $key => $value) {
            ThemeSetting::set($key, $value);
        }

        $this->command->info('Theme settings seeded successfully!');
        $this->command->info('Elite White-Based Theme: Ivory White (#F9F9F7), Soft Black (#0E0E0E), Soft Gold (#C9A24D)');
        $this->command->info('Fonts: Playfair Display (Headings), Neue Haas Grotesk (Body), Cormorant Garamond (Accent)');
    }
}
