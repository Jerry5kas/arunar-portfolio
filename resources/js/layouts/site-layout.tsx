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
        <div className="flex min-h-screen flex-col bg-[#FDFDFC] text-[#1b1b18] dark:bg-[#0a0a0a] dark:text-[#EDEDEC]">
            <SiteNavbar />
            <main className="flex-1">{children}</main>
            <SiteFooter />
        </div>
    );
}

