import { Link, usePage } from '@inertiajs/react';
import { home } from '@/routes';
import { type SharedData } from '@/types';
import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { resolveUrl } from '@/lib/utils';

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
    const page = usePage<SharedData>();
    const { theme } = page.props;
    const logoUrl = theme?.logoUrl;
    const currentUrl = page.url;
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);
    const [isLogoHovered, setIsLogoHovered] = useState(false);
    
    const goldLogoUrl = '/images/logo/logo gold.png';

    // Handle scroll effect
    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 10);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // Close mobile menu when clicking outside
    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            const target = event.target as HTMLElement;
            if (isMobileMenuOpen && !target.closest('nav')) {
                setIsMobileMenuOpen(false);
            }
        };
        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, [isMobileMenuOpen]);

    return (
        <nav
            className={`fixed top-0 z-50 w-full border-b transition-all duration-300 ${
                isScrolled
                    ? 'border-[#19140035] bg-white/95 backdrop-blur-md shadow-sm dark:border-[#3E3E3A] dark:bg-[#0a0a0a]/95'
                    : 'border-[#19140035]/50 bg-white/90 backdrop-blur-sm dark:border-[#3E3E3A]/50 dark:bg-[#0a0a0a]/90'
            }`}
        >
            <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 sm:py-4 lg:px-8">
                {/* Logo with Hover Transition */}
                <Link
                    href={home()}
                    className="group relative flex items-center space-x-2 transition-transform duration-300 hover:scale-105"
                    onClick={() => setIsMobileMenuOpen(false)}
                    onMouseEnter={() => setIsLogoHovered(true)}
                    onMouseLeave={() => setIsLogoHovered(false)}
                >
                    {logoUrl ? (
                        <div className="relative h-9 sm:h-10 w-auto">
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
                            className="text-xl sm:text-2xl font-medium text-[#1b1b18] transition-colors duration-300 group-hover:text-[#d4af37] dark:text-[#EDEDEC] dark:group-hover:text-[#d4af37]"
                            style={{
                                fontFamily: '"Dancing Script", "Great Vibes", "Allura", cursive',
                                letterSpacing: '0.05em',
                            }}
                        >
                            Arunar
                        </span>
                    )}
                </Link>

                {/* Desktop Navigation Links */}
                <div className="hidden items-center gap-6 lg:gap-8 xl:gap-10 lg:flex">
                    {navLinks.map((link) => {
                        const isActive = currentUrl === resolveUrl(link.href) || 
                                        (link.href !== '/' && currentUrl.startsWith(resolveUrl(link.href)));
                        return (
                            <Link
                                key={link.href}
                                href={link.href}
                                className={`group relative text-xs sm:text-sm font-medium uppercase tracking-[0.12em] sm:tracking-[0.15em] text-[#1b1b18] transition-all duration-300 hover:text-[#d4af37] dark:text-[#EDEDEC] dark:hover:text-[#d4af37] ${
                                    isActive ? 'text-[#d4af37] dark:text-[#d4af37]' : ''
                                }`}
                            >
                                <span className="relative z-10">{link.label}</span>
                                {/* Active Underline */}
                                <span 
                                    className={`absolute -bottom-1 left-0 h-0.5 bg-[#d4af37] transition-all duration-300 ${
                                        isActive ? 'w-full' : 'w-0 group-hover:w-full'
                                    }`} 
                                />
                            </Link>
                        );
                    })}
                </div>

                {/* Mobile Menu Button */}
                <button
                    onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                    className="flex items-center justify-center rounded-lg p-2 text-[#1b1b18] transition-all duration-300 hover:bg-[#d4af37]/10 hover:text-[#d4af37] focus:outline-none focus:ring-2 focus:ring-[#d4af37]/20 dark:text-[#EDEDEC] lg:hidden"
                    aria-label="Toggle menu"
                >
                    {isMobileMenuOpen ? (
                        <X className="h-6 w-6 transition-transform duration-300" />
                    ) : (
                        <Menu className="h-6 w-6 transition-transform duration-300" />
                    )}
                </button>
            </div>

            {/* Mobile Menu */}
            <div
                className={`overflow-hidden transition-all duration-300 ease-in-out lg:hidden ${
                    isMobileMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                }`}
            >
                <div className="border-t border-[#19140035]/50 bg-white/95 px-4 py-4 backdrop-blur-md dark:border-[#3E3E3A]/50 dark:bg-[#0a0a0a]/95">
                    <div className="flex flex-col space-y-3 sm:space-y-4">
                        {navLinks.map((link, index) => {
                            const isActive = currentUrl === resolveUrl(link.href) || 
                                            (link.href !== '/' && currentUrl.startsWith(resolveUrl(link.href)));
                            return (
                                <Link
                                    key={link.href}
                                    href={link.href}
                                    onClick={() => setIsMobileMenuOpen(false)}
                                    className={`group relative text-xs sm:text-sm font-medium uppercase tracking-[0.12em] sm:tracking-[0.15em] text-[#1b1b18] transition-all duration-300 hover:text-[#d4af37] dark:text-[#EDEDEC] dark:hover:text-[#d4af37] ${
                                        isActive ? 'text-[#d4af37] dark:text-[#d4af37]' : ''
                                    } ${
                                        isMobileMenuOpen ? 'animate-[fadeInUp_0.3s_ease-out_both]' : ''
                                    }`}
                                    style={{
                                        animationDelay: isMobileMenuOpen ? `${index * 0.05}s` : '0s',
                                    }}
                                >
                                    <span className="relative z-10 flex items-center">
                                        <span 
                                            className={`h-px bg-[#d4af37] transition-all duration-300 ${
                                                isActive 
                                                    ? 'w-8 mr-3' 
                                                    : 'w-0 group-hover:w-8 group-hover:mr-3'
                                            }`} 
                                        />
                                        {link.label}
                                    </span>
                                    {/* Active Indicator for Mobile */}
                                    {isActive && (
                                        <span className="absolute left-0 bottom-0 h-0.5 w-full bg-[#d4af37]" />
                                    )}
                                </Link>
                            );
                        })}
                    </div>
                </div>
            </div>
        </nav>
    );
}

