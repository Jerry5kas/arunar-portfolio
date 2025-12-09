<?php

namespace App\Http\Middleware;

use App\Models\ThemeSetting;
use Closure;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;
use Illuminate\Support\Facades\View;
use Symfony\Component\HttpFoundation\Response;

class HandleAppearance
{
    /**
     * Handle an incoming request.
     *
     * @param  \Closure(\Illuminate\Http\Request): (\Symfony\Component\HttpFoundation\Response)  $next
     */
    public function handle(Request $request, Closure $next): Response
    {
        View::share('appearance', $request->cookie('appearance') ?? 'system');

        // Share theme settings with blade views
        $themeSettings = ThemeSetting::allAsArray();
        View::share('theme', [
            'primary_color' => $themeSettings['primary_color'] ?? '#000000',
            'secondary_color' => $themeSettings['secondary_color'] ?? '#FFFFFF',
            'accent_color' => $themeSettings['accent_color'] ?? '#D4AF37',
            'accent_secondary_color' => $themeSettings['accent_secondary_color'] ?? '#B8860B',
            'font_family' => $themeSettings['font_body_family'] ?? 'Neue Haas Grotesk Display',
            'font_url' => $themeSettings['font_url'] ?? 'https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;700;900&family=Neue+Haas+Grotesk+Display:wght@300;400;500;700&family=Cormorant+Garamond:wght@300;400;500;600&display=swap',
            'font_heading_family' => $themeSettings['font_heading_family'] ?? 'Playfair Display',
            'font_body_family' => $themeSettings['font_body_family'] ?? 'Neue Haas Grotesk Display',
            'font_accent_family' => $themeSettings['font_accent_family'] ?? 'Cormorant Garamond',
            'logo_url' => !empty($themeSettings['logo_url']) 
                ? (filter_var($themeSettings['logo_url'], FILTER_VALIDATE_URL) 
                    ? $themeSettings['logo_url'] 
                    : Storage::url($themeSettings['logo_url']))
                : '',
        ]);

        return $next($request);
    }
}
