<?php

namespace Database\Seeders;

use App\Models\User;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\Hash;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     */
    public function run(): void
    {
        // Seed theme settings first
        $this->call([
            ThemeSettingsSeeder::class,
            BlogSeeder::class,
        ]);

        // Create admin user
        User::firstOrCreate(
            ['email' => 'admin@example.com'],
            [
                'name' => 'Admin User',
                'password' => Hash::make('password'),
                'email_verified_at' => now(),
            ]
        );

        $this->command->info('');
        $this->command->info('✅ Database seeding completed successfully!');
        $this->command->info('');
        $this->command->info('📧 Admin User Credentials:');
        $this->command->info('   Email: admin@example.com');
        $this->command->info('   Password: password');
        $this->command->info('');
        $this->command->info('🎨 Theme Settings:');
        $this->command->info('   Colors: Black, White, Royal Gold, Dark Gold');
        $this->command->info('   Fonts: Playfair Display, Neue Haas Grotesk, Cormorant Garamond');
        $this->command->info('');
    }
}
