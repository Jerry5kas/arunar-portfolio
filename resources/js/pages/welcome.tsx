import SiteLayout from '@/layouts/site-layout';
import { Head } from '@inertiajs/react';

const milestones = [
    {
        year: '2025',
        title: 'The Rise of Nesthetix Designs LLP',
        detail:
            'Rebranded the interior design division into a bespoke luxury studio blending modern aesthetics with functional elegance.',
    },
    {
        year: '2024',
        title: 'The Birth of Atha Construction Pvt. Ltd.',
        detail: 'Spun off construction into a sustainability-first company delivering eco-conscious, structurally sound builds.',
    },
    {
        year: '2023',
        title: 'Corporate Evolution & Growth',
        detail: 'Formed Area24 Developers and Stagecstatic365 Media House to scale real estate and experiential media.',
    },
    {
        year: '2020',
        title: 'Structuring Real Estate',
        detail: 'Formalized Area24 Realty as a proprietorship to streamline operations and deepen client trust across services.',
    },
    {
        year: '2018',
        title: 'Venturing into Luxury Interior Design',
        detail: 'Expanded into personalized high-end interiors with timeless elegance and premium craftsmanship.',
    },
    {
        year: '2016',
        title: 'Property Development & Management',
        detail: 'Grew Area24 into full-service development, construction, sales, and property management for holistic delivery.',
    },
    {
        year: '2010',
        title: 'The Foundation of a Vision',
        detail: 'Launched The Stage 365 and Area24 Realty, setting roots in event mastery and premium real estate consulting.',
    },
];

export default function Welcome() {
    return (
        <SiteLayout>
            <Head title="Home" />
            <div className="space-y-0 bg-gradient-to-b from-[#fdf8f1] via-[#fffaf5] to-[#f4eee3] text-[#1b1a16] dark:from-[#090807] dark:via-[#0c0b09] dark:to-[#0f0d0b]">
                {/* Hero section */}
                <section className="relative flex min-h-screen items-center justify-center overflow-hidden bg-black text-white">
                    {/* Background image - Construction, Real Estate, Event Management, Interior Design */}
                    <div className="absolute inset-0">
                        <img
                            src="/images/banner.jpg"
                            alt="Luxury professional construction, real estate, interior design and event management"
                            className="h-full w-full object-cover"
                        />
                    </div>
                    
                    {/* Premium backdrop overlay - Enhanced for professional look */}
                    <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/70 to-black/85" />
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(212,175,55,0.12),transparent_70%)]" />
                    
                    {/* Content - Centered */}
                    <div className="relative z-10 mx-auto max-w-5xl px-8 text-center lg:px-12">
                        <div className="space-y-8">
                            {/* Subtle badge */}
                            <div className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/5 px-6 py-2.5 text-xs font-semibold uppercase tracking-[0.24em] text-[#d4af37] backdrop-blur-md">
                                Arunar — CEO & Founder
                            </div>
                            
                            {/* Main title */}
                            <h1 className="mx-auto max-w-4xl text-5xl leading-[1.1] tracking-tight sm:text-6xl lg:text-7xl xl:text-8xl">
                                Building Visions That Last
                            </h1>
                            
                            {/* Description */}
                            <p className="mx-auto max-w-2xl text-lg leading-relaxed text-white/90 sm:text-xl lg:text-2xl">
                                Innovation-led ventures in real estate, construction, interiors, and live experiences. 
                                Each brand engineered to redefine its category with quality, sustainability, and storytelling.
                            </p>
                        </div>
                    </div>
                    
                    {/* Decorative elements for luxury feel */}
                    <div className="absolute bottom-20 left-1/2 -translate-x-1/2">
                        <div className="h-px w-24 bg-gradient-to-r from-transparent via-[#d4af37]/60 to-transparent" />
                    </div>
                </section>

                {/* About with quote, signature, left-side portrait */}
                <section className="relative overflow-hidden bg-black py-16">
                    {/* Animated scrolling core values - Left side */}
                    <div className="pointer-events-none absolute left-0 top-0 h-full w-1/4 overflow-hidden px-4 lg:w-1/5 lg:px-6">
                        <div 
                            className="scrolling-text-left flex h-[200%] flex-col gap-12 whitespace-nowrap pt-8" 
                            style={{ 
                                animation: 'scrollUp 25s linear infinite'
                            }}
                        >
                            <div className="flex flex-col gap-12">
                                <p className="text-base font-medium uppercase tracking-[0.3em] text-white/8 lg:text-lg">Quality</p>
                                <p className="text-base font-medium uppercase tracking-[0.3em] text-[#d4af37]/10 lg:text-lg">Sustainability</p>
                                <p className="text-base font-medium uppercase tracking-[0.3em] text-white/8 lg:text-lg">Excellence</p>
                                <p className="text-base font-medium uppercase tracking-[0.3em] text-[#d4af37]/10 lg:text-lg">Innovation</p>
                                <p className="text-base font-medium uppercase tracking-[0.3em] text-white/8 lg:text-lg">Vision</p>
                                <p className="text-base font-medium uppercase tracking-[0.3em] text-[#d4af37]/10 lg:text-lg">The Stage 365</p>
                                <p className="text-base font-medium uppercase tracking-[0.3em] text-white/8 lg:text-lg">Area24</p>
                                <p className="text-base font-medium uppercase tracking-[0.3em] text-[#d4af37]/10 lg:text-lg">Atha Construction</p>
                                <p className="text-base font-medium uppercase tracking-[0.3em] text-white/8 lg:text-lg">Nesthetix Designs</p>
                                <p className="text-base font-medium uppercase tracking-[0.3em] text-[#d4af37]/10 lg:text-lg">Resilience</p>
                            </div>
                            {/* Duplicate for seamless loop */}
                            <div className="flex flex-col gap-12">
                                <p className="text-base font-medium uppercase tracking-[0.3em] text-white/8 lg:text-lg">Quality</p>
                                <p className="text-base font-medium uppercase tracking-[0.3em] text-[#d4af37]/10 lg:text-lg">Sustainability</p>
                                <p className="text-base font-medium uppercase tracking-[0.3em] text-white/8 lg:text-lg">Excellence</p>
                                <p className="text-base font-medium uppercase tracking-[0.3em] text-[#d4af37]/10 lg:text-lg">Innovation</p>
                                <p className="text-base font-medium uppercase tracking-[0.3em] text-white/8 lg:text-lg">Vision</p>
                                <p className="text-base font-medium uppercase tracking-[0.3em] text-[#d4af37]/10 lg:text-lg">The Stage 365</p>
                                <p className="text-base font-medium uppercase tracking-[0.3em] text-white/8 lg:text-lg">Area24</p>
                                <p className="text-base font-medium uppercase tracking-[0.3em] text-[#d4af37]/10 lg:text-lg">Atha Construction</p>
                                <p className="text-base font-medium uppercase tracking-[0.3em] text-white/8 lg:text-lg">Nesthetix Designs</p>
                                <p className="text-base font-medium uppercase tracking-[0.3em] text-[#d4af37]/10 lg:text-lg">Resilience</p>
                            </div>
                        </div>
                    </div>

                    {/* Animated scrolling core values - Right side */}
                    <div className="pointer-events-none absolute right-0 top-0 h-full w-1/4 overflow-hidden px-4 lg:w-1/5 lg:px-6">
                        <div 
                            className="scrolling-text-right flex h-[200%] flex-col gap-12 whitespace-nowrap pt-8" 
                            style={{ 
                                animation: 'scrollUp 28s linear infinite'
                            }}
                        >
                            <div className="flex flex-col gap-12">
                                <p className="text-right text-base font-medium uppercase tracking-[0.3em] text-[#d4af37]/10 lg:text-lg">Growth</p>
                                <p className="text-right text-base font-medium uppercase tracking-[0.3em] text-white/8 lg:text-lg">Impact</p>
                                <p className="text-right text-base font-medium uppercase tracking-[0.3em] text-[#d4af37]/10 lg:text-lg">Customer Centricity</p>
                                <p className="text-right text-base font-medium uppercase tracking-[0.3em] text-white/8 lg:text-lg">Premium</p>
                                <p className="text-right text-base font-medium uppercase tracking-[0.3em] text-[#d4af37]/10 lg:text-lg">Legacy</p>
                                <p className="text-right text-base font-medium uppercase tracking-[0.3em] text-white/8 lg:text-lg">Real Estate</p>
                                <p className="text-right text-base font-medium uppercase tracking-[0.3em] text-[#d4af37]/10 lg:text-lg">Construction</p>
                                <p className="text-right text-base font-medium uppercase tracking-[0.3em] text-white/8 lg:text-lg">Interior Design</p>
                                <p className="text-right text-base font-medium uppercase tracking-[0.3em] text-[#d4af37]/10 lg:text-lg">Event Management</p>
                                <p className="text-right text-base font-medium uppercase tracking-[0.3em] text-white/8 lg:text-lg">Storytelling</p>
                            </div>
                            {/* Duplicate for seamless loop */}
                            <div className="flex flex-col gap-12">
                                <p className="text-right text-base font-medium uppercase tracking-[0.3em] text-[#d4af37]/10 lg:text-lg">Growth</p>
                                <p className="text-right text-base font-medium uppercase tracking-[0.3em] text-white/8 lg:text-lg">Impact</p>
                                <p className="text-right text-base font-medium uppercase tracking-[0.3em] text-[#d4af37]/10 lg:text-lg">Customer Centricity</p>
                                <p className="text-right text-base font-medium uppercase tracking-[0.3em] text-white/8 lg:text-lg">Premium</p>
                                <p className="text-right text-base font-medium uppercase tracking-[0.3em] text-[#d4af37]/10 lg:text-lg">Legacy</p>
                                <p className="text-right text-base font-medium uppercase tracking-[0.3em] text-white/8 lg:text-lg">Real Estate</p>
                                <p className="text-right text-base font-medium uppercase tracking-[0.3em] text-[#d4af37]/10 lg:text-lg">Construction</p>
                                <p className="text-right text-base font-medium uppercase tracking-[0.3em] text-white/8 lg:text-lg">Interior Design</p>
                                <p className="text-right text-base font-medium uppercase tracking-[0.3em] text-[#d4af37]/10 lg:text-lg">Event Management</p>
                                <p className="text-right text-base font-medium uppercase tracking-[0.3em] text-white/8 lg:text-lg">Storytelling</p>
                            </div>
                        </div>
                    </div>

                    {/* Static background decorative text - Center */}
                    <div className="pointer-events-none absolute inset-0 flex items-center justify-center px-10 text-center text-4xl font-extrabold uppercase leading-[1.05] tracking-tight text-white/5 lg:text-6xl">
                        <div className="space-y-3">
                            <p>Resilience • Vision • Excellence</p>
                            <p>Innovation • Growth • Impact</p>
                        </div>
                    </div>

                    <div className="relative z-10 grid items-center gap-12 px-8 lg:grid-cols-[0.95fr_1.05fr] lg:px-12">
                        <div className="relative mx-auto w-full max-w-lg">
                            <img
                                src="/images/avatar.png"
                                alt="Arunar portrait"
                                className="aspect-[3/4] w-full object-contain"
                                style={{ clipPath: 'ellipse(78% 65% at 50% 42%)' }}
                            />
                        </div>
                        <div className="space-y-6">
                            <p className="text-sm uppercase tracking-[0.28em] text-[#d4af37]">About</p>
                            <blockquote className="relative overflow-hidden p-10 text-lg leading-relaxed text-white/90">
                                <span className="absolute left-6 top-6 text-5xl text-[#d4af37]">"</span>
                                <p className="pl-8">
                                    I am never completely satisfied. I feel that there is so much more to progress towards quality. From founding The
                                    Stage 365 in 2010 to scaling Area24, Atha Construction, and Nesthetix Designs, my focus is on building brands that
                                    redefine industry standards with quality, sustainability, and customer centricity.
                                </p>
                                <div className="mt-8 flex items-center gap-6 pl-8">
                                    <div className="h-px flex-1 bg-gradient-to-r from-transparent via-[#d4af37] to-transparent" />
                                    <div className="text-right">
                                        <p className="text-base font-semibold uppercase tracking-[0.18em] text-[#d4af37]">Arunar</p>
                                        <p className="text-xs uppercase tracking-[0.24em] text-white/70">Founder & CEO</p>
                                        <p className="mt-1 text-[11px] uppercase tracking-[0.32em] text-white/50">Signature</p>
                                    </div>
                                </div>
                            </blockquote>
                        </div>
                    </div>
                </section>

                {/* Timeline */}
                <section className="relative overflow-hidden bg-[#0d0c0b] py-16 text-white">
                    <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(255,255,255,0.04),transparent_28%),radial-gradient(circle_at_80%_10%,rgba(212,175,55,0.06),transparent_32%),radial-gradient(circle_at_50%_80%,rgba(255,255,255,0.03),transparent_30%)]" />
                    <div className="pointer-events-none absolute inset-0 opacity-15" style={{ backgroundImage: 'radial-gradient(circle, rgba(255,255,255,0.16) 1px, transparent 1px)', backgroundSize: '40px 40px' }} />

                    <div className="relative flex items-center justify-between gap-4 px-8 lg:px-12">
                        <div>
                            <p className="text-sm uppercase tracking-[0.28em] text-[#d4af37]">Timeline</p>
                            <h2 className="text-3xl font-semibold text-white">Great things start small</h2>
                        </div>
                        <div className="rounded-full border border-white/15 px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-white/80 shadow-sm">
                            2010 — 2025
                        </div>
                    </div>

                    <div className="relative mt-12 grid gap-10 px-8 lg:grid-cols-[0.35fr_0.65fr] lg:px-12">
                        {/* Left rail years */}
                        <div className="relative rounded-2xl border border-white/10 bg-white/5 p-6 shadow-[0_18px_50px_rgba(0,0,0,0.25)]">
                            <div className="absolute left-6 top-6 bottom-6 w-px bg-gradient-to-b from-transparent via-[#d4af37] to-transparent" />
                            <ul className="space-y-5 pl-10 text-sm font-semibold uppercase tracking-[0.18em] text-white/70">
                                {milestones.map((milestone) => (
                                    <li key={milestone.year} className="relative flex items-center gap-3">
                                        <span className="absolute -left-10 h-3 w-3 rounded-full bg-[#d4af37] shadow-[0_0_0_6px_rgba(212,175,55,0.2)]" />
                                        <span className="text-[#d4af37]">{milestone.year}</span>
                                        <span className="hidden text-white/60 lg:inline">{milestone.title}</span>
                                </li>
                                ))}
                            </ul>
                        </div>

                        {/* Feature card + gallery */}
                        <div className="space-y-8">
                            {milestones.map((milestone, idx) => (
                                <div
                                    key={milestone.year}
                                    className="grid gap-6 rounded-3xl border border-white/10 bg-white/5 p-6 shadow-[0_18px_60px_rgba(0,0,0,0.3)] lg:grid-cols-[0.55fr_0.45fr]"
                                >
                                    <div className="space-y-4">
                                        <p className="text-sm uppercase tracking-[0.26em] text-[#d4af37]">{milestone.year}</p>
                                        <h3 className="text-2xl font-semibold leading-tight text-white">{milestone.title}</h3>
                                        <p className="text-sm leading-relaxed text-white/80">{milestone.detail}</p>
                                    </div>
                                    <div className="grid grid-cols-2 gap-3">
                                        <div className="h-32 rounded-xl bg-gradient-to-br from-[#d4af37]/40 via-[#8d6a2a]/30 to-[#0d0c0b] shadow-inner" />
                                        <div className="h-32 rounded-xl bg-gradient-to-br from-white/20 via-white/10 to-black/60 shadow-inner" />
                                        <div className="h-32 rounded-xl bg-gradient-to-br from-[#0f1115] via-[#1f2430] to-[#0d0c0b] shadow-inner" />
                                        <div className="h-32 rounded-xl bg-gradient-to-br from-[#c7b07a]/30 via-[#f5e6c4]/20 to-[#0d0c0b] shadow-inner" />
                                    </div>
                                </div>
                            ))}
                        </div>
                </div>
                </section>
            </div>
        </SiteLayout>
    );
}

