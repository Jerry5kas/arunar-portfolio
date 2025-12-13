<?php

namespace App\Http\Middleware;

use App\Models\ThemeSetting;
use App\Services\FileUploadService;
use Illuminate\Foundation\Inspiring;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;
use Inertia\Middleware;

class HandleInertiaRequests extends Middleware
{
    /**
     * The root template that's loaded on the first page visit.
     *
     * @see https://inertiajs.com/server-side-setup#root-template
     *
     * @var string
     */
    protected $rootView = 'app';

    /**
     * Determines the current asset version.
     *
     * @see https://inertiajs.com/asset-versioning
     */
    public function version(Request $request): ?string
    {
        return parent::version($request);
    }

    /**
     * Define the props that are shared by default.
     *
     * @see https://inertiajs.com/shared-data
     *
     * @return array<string, mixed>
     */
    public function share(Request $request): array
    {
        [$message, $author] = str(Inspiring::quotes()->random())->explode('-');

        $themeSettings = ThemeSetting::allAsArray();

        return [
            ...parent::share($request),
            'name' => config('app.name'),
            'quote' => ['message' => trim($message), 'author' => trim($author)],
            'auth' => [
                'user' => $request->user(),
            ],
            'sidebarOpen' => ! $request->hasCookie('sidebar_state') || $request->cookie('sidebar_state') === 'true',
            'theme' => [
                'primaryColor' => $themeSettings['primary_color'] ?? '#000000',
                'secondaryColor' => $themeSettings['secondary_color'] ?? '#FFFFFF',
                'accentColor' => $themeSettings['accent_color'] ?? '#D4AF37',
                'accentSecondaryColor' => $themeSettings['accent_secondary_color'] ?? '#B8860B',
                'fontFamily' => $themeSettings['font_body_family'] ?? 'Neue Haas Grotesk Display',
                'fontUrl' => $themeSettings['font_url'] ?? 'https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;700;900&family=Neue+Haas+Grotesk+Display:wght@300;400;500;700&family=Cormorant+Garamond:wght@300;400;500;600&display=swap',
                'fontHeadingFamily' => $themeSettings['font_heading_family'] ?? 'Playfair Display',
                'fontBodyFamily' => $themeSettings['font_body_family'] ?? 'Neue Haas Grotesk Display',
                'fontAccentFamily' => $themeSettings['font_accent_family'] ?? 'Cormorant Garamond',
                'fontHeadingUrl' => $themeSettings['font_heading_url'] ?? 'https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;700;900&display=swap',
                'fontBodyUrl' => $themeSettings['font_body_url'] ?? 'https://fonts.googleapis.com/css2?family=Neue+Haas+Grotesk+Display:wght@300;400;500;700&display=swap',
                'fontAccentUrl' => $themeSettings['font_accent_url'] ?? 'https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@300;400;500;600&display=swap',
                'logoUrl' => \App\Services\FileUploadService::getUrl($themeSettings['logo_url'] ?? '') ?? '',
            ],
        ];
    }
}
