import { SiteFooter } from '@/components/site-footer';
import { SiteNavbar } from '@/components/site-navbar';
import { useTheme } from '@/hooks/use-theme';
import { type ReactNode } from 'react';

interface SiteLayoutProps {
    children: ReactNode;
}

export default function SiteLayout({ children }: SiteLayoutProps) {
    useTheme(); // Apply theme colors and fonts globally

    return (
        <div className="flex min-h-screen flex-col bg-[#F9F9F7] text-[#0E0E0E]">
            <SiteNavbar />
            <main className="flex-1 pt-0">{children}</main>
            <SiteFooter />
        </div>
    );
}

