import { InertiaLinkProps } from '@inertiajs/react';
import { LucideIcon } from 'lucide-react';

export interface Auth {
    user: User;
}

export interface BreadcrumbItem {
    title: string;
    href: string;
}

export interface NavGroup {
    title: string;
    items: NavItem[];
}

export interface NavItem {
    title: string;
    href: NonNullable<InertiaLinkProps['href']>;
    icon?: LucideIcon | null;
    isActive?: boolean;
}

export interface Theme {
    primaryColor: string;
    secondaryColor: string;
    accentColor: string;
    accentSecondaryColor: string;
    fontFamily: string;
    fontUrl: string;
    fontHeadingFamily: string;
    fontBodyFamily: string;
    fontAccentFamily: string;
    fontHeadingUrl: string;
    fontBodyUrl: string;
    fontAccentUrl: string;
    logoUrl: string;
}

export interface SharedData {
    name: string;
    quote: { message: string; author: string };
    auth: Auth;
    sidebarOpen: boolean;
    theme: Theme;
    [key: string]: unknown;
}

export interface User {
    id: number;
    name: string;
    email: string;
    avatar?: string;
    email_verified_at: string | null;
    two_factor_enabled?: boolean;
    created_at: string;
    updated_at: string;
    [key: string]: unknown; // This allows for additional properties...
}
