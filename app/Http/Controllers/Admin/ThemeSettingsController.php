<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Services\FileUploadService;
use App\Models\ThemeSetting;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;
use Inertia\Inertia;

class ThemeSettingsController extends Controller
{
    /**
     * Display the theme settings page.
     */
    public function index()
    {
        $settings = ThemeSetting::allAsArray();

        return Inertia::render('settings/theme', [
            'theme' => [
                'primaryColor' => $settings['primary_color'] ?? '#000000',
                'secondaryColor' => $settings['secondary_color'] ?? '#FFFFFF',
                'accentColor' => $settings['accent_color'] ?? '#D4AF37',
                'accentSecondaryColor' => $settings['accent_secondary_color'] ?? '#B8860B',
                'fontFamily' => $settings['font_body_family'] ?? 'Neue Haas Grotesk Display',
                'fontUrl' => $settings['font_url'] ?? 'https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;700;900&family=Neue+Haas+Grotesk+Display:wght@300;400;500;700&family=Cormorant+Garamond:wght@300;400;500;600&display=swap',
                'fontHeadingFamily' => $settings['font_heading_family'] ?? 'Playfair Display',
                'fontBodyFamily' => $settings['font_body_family'] ?? 'Neue Haas Grotesk Display',
                'fontAccentFamily' => $settings['font_accent_family'] ?? 'Cormorant Garamond',
                'fontHeadingUrl' => $settings['font_heading_url'] ?? 'https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;700;900&display=swap',
                'fontBodyUrl' => $settings['font_body_url'] ?? 'https://fonts.googleapis.com/css2?family=Neue+Haas+Grotesk+Display:wght@300;400;500;700&display=swap',
                'fontAccentUrl' => $settings['font_accent_url'] ?? 'https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@300;400;500;600&display=swap',
                'logoUrl' => FileUploadService::getUrl($settings['logo_url'] ?? '') ?? '',
            ],
        ]);
    }

    /**
     * Update theme settings.
     */
    public function update(Request $request)
    {
        // Get current settings as defaults
        $currentSettings = ThemeSetting::allAsArray();
        
        // Validate only if values are provided, otherwise use current/default values
        $validated = $request->validate([
            'primaryColor' => 'nullable|string|regex:/^#[0-9A-Fa-f]{6}$/',
            'secondaryColor' => 'nullable|string|regex:/^#[0-9A-Fa-f]{6}$/',
            'accentColor' => 'nullable|string|regex:/^#[0-9A-Fa-f]{6}$/',
            'accentSecondaryColor' => 'nullable|string|regex:/^#[0-9A-Fa-f]{6}$/',
            'fontHeadingFamily' => 'nullable|string|max:255',
            'fontBodyFamily' => 'nullable|string|max:255',
            'fontAccentFamily' => 'nullable|string|max:255',
            'fontHeadingUrl' => 'nullable|url|max:1000',
            'fontBodyUrl' => 'nullable|url|max:1000',
            'fontAccentUrl' => 'nullable|url|max:1000',
            'logo' => 'nullable|image|mimes:jpeg,jpg,png,svg,webp|max:2048',
            'logoUrl' => 'nullable|string|max:500',
        ]);
        
        // Use provided values or fall back to current settings
        $validated['primaryColor'] = $validated['primaryColor'] ?? $currentSettings['primary_color'] ?? '#000000';
        $validated['secondaryColor'] = $validated['secondaryColor'] ?? $currentSettings['secondary_color'] ?? '#FFFFFF';
        $validated['accentColor'] = $validated['accentColor'] ?? $currentSettings['accent_color'] ?? '#D4AF37';
        $validated['accentSecondaryColor'] = $validated['accentSecondaryColor'] ?? $currentSettings['accent_secondary_color'] ?? '#B8860B';

        // Update color settings
        ThemeSetting::set('primary_color', trim($validated['primaryColor']));
        ThemeSetting::set('secondary_color', trim($validated['secondaryColor']));
        ThemeSetting::set('accent_color', trim($validated['accentColor']));
        ThemeSetting::set('accent_secondary_color', trim($validated['accentSecondaryColor']));
        
        // Update font settings
        if (isset($validated['fontHeadingFamily'])) {
            ThemeSetting::set('font_heading_family', trim($validated['fontHeadingFamily']));
        }
        if (isset($validated['fontBodyFamily'])) {
            ThemeSetting::set('font_body_family', trim($validated['fontBodyFamily']));
            ThemeSetting::set('font_family', trim($validated['fontBodyFamily'])); // Legacy support
        }
        if (isset($validated['fontAccentFamily'])) {
            ThemeSetting::set('font_accent_family', trim($validated['fontAccentFamily']));
        }
        
        // Update font URLs
        if (isset($validated['fontHeadingUrl'])) {
            ThemeSetting::set('font_heading_url', trim($validated['fontHeadingUrl']));
        }
        if (isset($validated['fontBodyUrl'])) {
            ThemeSetting::set('font_body_url', trim($validated['fontBodyUrl']));
        }
        if (isset($validated['fontAccentUrl'])) {
            ThemeSetting::set('font_accent_url', trim($validated['fontAccentUrl']));
        }
        
        // Generate combined font URL if individual URLs are provided
        if (isset($validated['fontHeadingUrl']) && isset($validated['fontBodyUrl']) && isset($validated['fontAccentUrl'])) {
            $combinedUrl = $validated['fontHeadingUrl'] . '&' . ltrim($validated['fontBodyUrl'], 'https://fonts.googleapis.com/css2?') . '&' . ltrim($validated['fontAccentUrl'], 'https://fonts.googleapis.com/css2?');
            ThemeSetting::set('font_url', $combinedUrl);
        }

        // Handle logo upload
        if ($request->hasFile('logo')) {
            \Log::info('Processing logo upload');
            
            $oldLogo = ThemeSetting::get('logo_url');
            // Only delete if it's a stored file (not external URL)
            $oldPath = ($oldLogo && !filter_var($oldLogo, FILTER_VALIDATE_URL)) ? $oldLogo : null;
            
            $logoPath = \App\Services\FileUploadService::upload(
                $request->file('logo'),
                'logos',
                null, // No subdirectory
                $oldPath
            );
            
            if ($logoPath) {
            ThemeSetting::set('logo_url', $logoPath);
                \Log::info('Logo uploaded successfully', ['path' => $logoPath]);
            } else {
                \Log::warning('Logo upload failed');
            }
        } elseif (isset($validated['logoUrl'])) {
            $logoUrlValue = trim($validated['logoUrl']);
            if (empty($logoUrlValue) || filter_var($logoUrlValue, FILTER_VALIDATE_URL)) {
                ThemeSetting::set('logo_url', $logoUrlValue);
            }
        }

        return redirect()->back()->with('success', 'Theme settings updated successfully.');
    }
}
