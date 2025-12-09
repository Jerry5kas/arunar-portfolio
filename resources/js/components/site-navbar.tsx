import { Link, usePage } from '@inertiajs/react';
import { home } from '@/routes';
import { type SharedData } from '@/types';

interface NavLink {
    href: string;
    label: string;
}

const navLinks: NavLink[] = [
    { href: '/about', label: 'About' },
    { href: '/accolades', label: 'Accolades' },
    { href: '/media', label: 'Media' },
    { href: '/ventures', label: 'Ventures' },
    { href: '/blog', label: 'Blog' },
];

export function SiteNavbar() {
    const { theme } = usePage<SharedData>().props;
    const logoUrl = theme?.logoUrl;

    return (
        <nav className="w-full border-b border-[#19140035] bg-white dark:border-[#3E3E3A] dark:bg-[#0a0a0a]">
            <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 lg:px-6">
                {/* Logo */}
                <Link
                    href={home()}
                    className="flex items-center space-x-2 text-lg font-semibold text-[#1b1b18] dark:text-[#EDEDEC]"
                >
                    {logoUrl ? (
                        <img
                            src={logoUrl}
                            alt="Logo"
                            className="h-8 w-auto object-contain"
                        />
                    ) : (
                        <span>Arunar</span>
                    )}
                </Link>

                {/* Navigation Links */}
                <div className="flex items-center gap-6">
                    {navLinks.map((link) => (
                        <Link
                            key={link.href}
                            href={link.href}
                            className="text-sm font-medium text-[#1b1b18] transition-colors hover:text-[#706f6c] dark:text-[#EDEDEC] dark:hover:text-[#A1A09A]"
                        >
                            {link.label}
                        </Link>
                    ))}
                </div>
            </div>
        </nav>
    );
}

