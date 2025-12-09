import { usePage } from '@inertiajs/react';
import { useEffect } from 'react';
import { type SharedData, type Theme } from '@/types';

export function useTheme() {
    const { theme } = usePage<SharedData>().props;

    useEffect(() => {
        if (!theme) return;

        const root = document.documentElement;

        // Apply CSS custom properties for theme colors
        root.style.setProperty('--theme-primary', theme.primaryColor);
        root.style.setProperty('--theme-secondary', theme.secondaryColor);
        root.style.setProperty('--theme-accent', theme.accentColor);
        root.style.setProperty('--theme-accent-secondary', theme.accentSecondaryColor);

        // Apply luxury font system
        if (theme.fontHeadingFamily) {
            root.style.setProperty('--font-heading', theme.fontHeadingFamily);
        }
        if (theme.fontBodyFamily) {
            root.style.setProperty('--font-body', theme.fontBodyFamily);
            root.style.setProperty('--font-sans', theme.fontBodyFamily); // Legacy support
        }
        if (theme.fontAccentFamily) {
            root.style.setProperty('--font-accent', theme.fontAccentFamily);
        }

        // Load fonts dynamically
        // Use combined font URL if available, otherwise load individually
        if (theme.fontUrl) {
            const linkId = 'dynamic-theme-fonts';
            let link = document.getElementById(linkId) as HTMLLinkElement;

            if (!link) {
                link = document.createElement('link');
                link.id = linkId;
                link.rel = 'stylesheet';
                link.setAttribute('preconnect', 'https://fonts.googleapis.com');
                document.head.appendChild(link);
            }

            link.href = theme.fontUrl;
        }
    }, [theme]);

    return theme as Theme;
}

