import { Facebook, Linkedin, Instagram, MessageCircle } from 'lucide-react';
import { Link, usePage } from '@inertiajs/react';
import { home } from '@/routes';
import { type SharedData } from '@/types';
import { useState } from 'react';

export function SiteFooter() {
    const currentYear = new Date().getFullYear();
    const page = usePage<SharedData>();
    const { theme } = page.props;
    const logoUrl = theme?.logoUrl;
    const [isLogoHovered, setIsLogoHovered] = useState(false);
    
    const goldLogoUrl = '/images/logo/logo gold.png';

    const socialLinks = [
        {
            name: 'Facebook',
            icon: Facebook,
            href: '#',
            hoverColor: '#1877F2',
        },
        {
            name: 'LinkedIn',
            icon: Linkedin,
            href: '#',
            hoverColor: '#0077B5',
        },
        {
            name: 'Instagram',
            icon: Instagram,
            href: '#',
            hoverColor: '#E4405F',
        },
        {
            name: 'WhatsApp',
            icon: MessageCircle,
            href: '#',
            hoverColor: '#25D366',
        },
    ];

    const themeAccentColor = theme?.accentColor || '#D4AF37';

    return (
        <footer className="w-full border-t border-[#19140035] bg-white dark:border-[#3E3E3A] dark:bg-[#0a0a0a]">
            <div className="px-4 py-8 lg:px-6">
                <div className="flex flex-col items-center justify-between gap-6 text-sm text-[#706f6c] dark:text-[#A1A09A] md:flex-row">
                    <div className="flex flex-col items-center gap-4 md:flex-row md:items-center md:gap-6">
                        {/* Logo with Hover Transition */}
                        <Link
                            href={home()}
                            className="group relative flex items-center transition-transform duration-300 hover:scale-105"
                            onMouseEnter={() => setIsLogoHovered(true)}
                            onMouseLeave={() => setIsLogoHovered(false)}
                        >
                            {logoUrl ? (
                                <div className="relative h-8 sm:h-9 w-auto">
                                    {/* Default Logo */}
                                    <img
                                        src={logoUrl}
                                        alt="Logo"
                                        className={`h-full w-auto object-contain transition-opacity duration-500 ${
                                            isLogoHovered ? 'opacity-0' : 'opacity-100'
                                        }`}
                                    />
                                    {/* Gold Logo on Hover */}
                                    <img
                                        src={goldLogoUrl}
                                        alt="Logo"
                                        className={`absolute inset-0 h-full w-auto object-contain transition-opacity duration-500 ${
                                            isLogoHovered ? 'opacity-100' : 'opacity-0'
                                        }`}
                                    />
                                </div>
                            ) : (
                                <span
                                    className="text-lg sm:text-xl font-medium text-[#1b1b18] transition-colors duration-300 group-hover:text-[#d4af37] dark:text-[#EDEDEC] dark:group-hover:text-[#d4af37]"
                                    style={{
                                        fontFamily: '"Dancing Script", "Great Vibes", "Allura", cursive',
                                        letterSpacing: '0.05em',
                                    }}
                                >
                                    Arunar
                                </span>
                            )}
                        </Link>
                        <p>&copy; {currentYear} Arunar. All rights reserved.</p>
                    </div>
                    <div className="flex items-center gap-4">
                        {socialLinks.map((social) => {
                            const Icon = social.icon;
                            return (
                                <a
                                    key={social.name}
                                    href={social.href}
                                    aria-label={social.name}
                                    className="group flex items-center justify-center rounded-full p-2 transition-all duration-300"
                                    style={{
                                        color: themeAccentColor,
                                    }}
                                    onMouseEnter={(e) => {
                                        e.currentTarget.style.color = social.hoverColor;
                                    }}
                                    onMouseLeave={(e) => {
                                        e.currentTarget.style.color = themeAccentColor;
                                    }}
                                >
                                    <Icon 
                                        className="h-5 w-5 transition-colors duration-300" 
                                        strokeWidth={1.5}
                                    />
                                </a>
                            );
                        })}
                    </div>
                </div>
            </div>
        </footer>
    );
}

