export function SiteFooter() {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="w-full border-t border-[#19140035] bg-white dark:border-[#3E3E3A] dark:bg-[#0a0a0a]">
            <div className="mx-auto max-w-7xl px-4 py-8 lg:px-6">
                <div className="flex flex-col items-center justify-between gap-4 text-sm text-[#706f6c] dark:text-[#A1A09A] md:flex-row">
                    <div>
                        <p>&copy; {currentYear} Arunar. All rights reserved.</p>
                    </div>
                    <div className="flex items-center gap-6">
                        <a
                            href="#"
                            className="transition-colors hover:text-[#1b1b18] dark:hover:text-[#EDEDEC]"
                        >
                            Privacy Policy
                        </a>
                        <a
                            href="#"
                            className="transition-colors hover:text-[#1b1b18] dark:hover:text-[#EDEDEC]"
                        >
                            Terms of Service
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    );
}

