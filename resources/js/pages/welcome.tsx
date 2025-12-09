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
            <div className="space-y-24 bg-gradient-to-b from-[#fdf8f1] via-[#fffaf5] to-[#f4eee3] px-6 pb-28 pt-16 text-[#1b1a16] dark:from-[#090807] dark:via-[#0c0b09] dark:to-[#0f0d0b] lg:px-12">
                {/* Hero video section */}
                <section className="relative overflow-hidden rounded-[28px] border border-black/5 bg-black text-white shadow-[0_28px_90px_rgba(0,0,0,0.35)] dark:border-white/10">
                    <video
                        className="absolute inset-0 h-full w-full object-cover"
                        src="https://storage.googleapis.com/coverr-main/mp4/Footboys.mp4"
                        autoPlay
                        loop
                        muted
                        playsInline
                        poster="https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1600&q=80"
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/55 to-black/20" />
                    <div className="relative grid gap-10 px-8 py-16 lg:grid-cols-[1.1fr_0.9fr] lg:px-14">
                        <div className="space-y-6">
                            <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.24em] text-[#e3c463] backdrop-blur-md">
                                Arunar - CEO
                            </span>
                            <div className="space-y-4">
                                <p className="text-sm uppercase tracking-[0.3em] text-[#d9c592]">Building multi-industry legacies</p>
                                <h1 className="max-w-3xl text-4xl leading-[1.05] sm:text-5xl lg:text-6xl">
                                    Innovation-led ventures in real estate, construction, interiors, and live experiences.
                                </h1>
                                <p className="max-w-2xl text-lg text-white/80">
                                    From The Stage 365 to Area24, Atha Construction, and Nesthetix Designs each brand is engineered to redefine its
                                    category with quality, sustainability, and storytelling.
                                </p>
                            </div>
                            <div className="flex flex-wrap gap-3">
                                <button className="rounded-full bg-white px-6 py-3 text-sm font-semibold text-black shadow-[0_16px_40px_rgba(0,0,0,0.25)] transition hover:-translate-y-0.5 hover:shadow-[0_22px_60px_rgba(0,0,0,0.35)] focus:outline-none focus:ring-2 focus:ring-[#e3c463]">
                                    Watch the reel
                                </button>
                                <button className="rounded-full border border-white/20 px-6 py-3 text-sm font-semibold text-white backdrop-blur transition hover:border-white/45 hover:bg-white/5">
                                    Explore the brands
                                </button>
                            </div>
                        </div>
                        <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur">
                            <div className="space-y-3">
                                <p className="text-xs uppercase tracking-[0.22em] text-[#e3c463]">Vision</p>
                                <h3 className="text-2xl font-semibold leading-tight">
                                    "Resilience, vision, and the pursuit of excellence - every venture is a proof point."
                                </h3>
                                <p className="text-sm text-white/80">
                                    Grounded in innovation and customer-centric delivery, Arunar's portfolio stretches across development, interiors,
                                    construction, and immersive events with a singular focus: lasting impact.
                                </p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* About with quote, signature, left-side portrait */}
                <section className="relative overflow-hidden rounded-[32px] border border-black/5 bg-white/85 px-6 py-16 shadow-[0_24px_80px_rgba(0,0,0,0.08)] backdrop-blur dark:border-white/10 dark:bg-[#0f0d0b]/85 dark:shadow-[0_24px_90px_rgba(0,0,0,0.45)] lg:px-12">
                    <div className="pointer-events-none absolute inset-0 flex items-center justify-center px-10 text-center text-4xl font-extrabold uppercase leading-[1.05] tracking-tight text-[#e7dfcf] opacity-60 mix-blend-multiply dark:text-white/5 lg:text-6xl">
                        <div className="space-y-3">
                            <p>Resilience • Vision • Excellence</p>
                            <p>Innovation • Growth • Impact</p>
                        </div>
                    </div>
                    <div className="relative grid items-center gap-12 lg:grid-cols-[0.95fr_1.05fr]">
                        <div className="relative mx-auto w-full max-w-lg">
                            <div className="absolute -inset-8 -z-10 rounded-[36px] bg-[radial-gradient(circle_at_30%_20%,rgba(212,175,55,0.18),transparent_35%),radial-gradient(circle_at_80%_10%,rgba(255,255,255,0.18),transparent_32%),radial-gradient(circle_at_50%_90%,rgba(112,82,40,0.12),transparent_40%)] blur-3xl" />
                            <div className="relative overflow-hidden rounded-[42px] border border-black/10 bg-gradient-to-b from-[#fffaf3] to-[#f4ebdd] shadow-[0_24px_70px_rgba(0,0,0,0.1)] dark:border-white/10 dark:from-[#14120f] dark:to-[#0e0c0a]">
                                <img
                                    src="/images/avatar.jpg"
                                    alt="Arunar portrait"
                                    className="aspect-[3/4] w-full object-contain"
                                    style={{ clipPath: 'ellipse(78% 65% at 50% 42%)' }}
                                />
                            </div>
                        </div>
                        <div className="space-y-6">
                            <p className="text-sm uppercase tracking-[0.28em] text-[#8a7b55] dark:text-[#cbb478]">About</p>
                            <blockquote className="relative overflow-hidden rounded-3xl border border-black/10 bg-white/85 p-10 text-lg leading-relaxed text-[#1e1c17] shadow-[0_20px_60px_rgba(0,0,0,0.08)] backdrop-blur dark:border-white/10 dark:bg-[#14120f]/85 dark:text-[#efe9da]">
                                <span className="absolute left-6 top-6 text-5xl text-[#d4af37]">"</span>
                                <p className="pl-8">
                                    I am never completely satisfied. I feel that there is so much more to progress towards quality. From founding The
                                    Stage 365 in 2010 to scaling Area24, Atha Construction, and Nesthetix Designs, my focus is on building brands that
                                    redefine industry standards with quality, sustainability, and customer centricity.
                                </p>
                                <div className="mt-8 flex items-center gap-6 pl-8">
                                    <div className="h-px flex-1 bg-gradient-to-r from-transparent via-[#d4af37] to-transparent" />
                                    <div className="text-right">
                                        <p className="text-base font-semibold uppercase tracking-[0.18em] text-[#9b8b4b] dark:text-[#e3c464]">Arunar</p>
                                        <p className="text-xs uppercase tracking-[0.24em] text-[#7a725f] dark:text-[#cbb478]">Founder & CEO</p>
                                        <p className="mt-1 text-[11px] uppercase tracking-[0.32em] text-[#b9a579] dark:text-[#d4c18c]">Signature</p>
                                    </div>
                                </div>
                            </blockquote>
                        </div>
                    </div>
                </section>

                {/* Timeline */}
                <section className="relative overflow-hidden rounded-[32px] border border-black/5 bg-[#0d0c0b] px-6 py-16 text-white shadow-[0_28px_90px_rgba(0,0,0,0.3)] dark:border-white/10 lg:px-12">
                    <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(255,255,255,0.04),transparent_28%),radial-gradient(circle_at_80%_10%,rgba(212,175,55,0.06),transparent_32%),radial-gradient(circle_at_50%_80%,rgba(255,255,255,0.03),transparent_30%)]" />
                    <div className="pointer-events-none absolute inset-0 opacity-15" style={{ backgroundImage: 'radial-gradient(circle, rgba(255,255,255,0.16) 1px, transparent 1px)', backgroundSize: '40px 40px' }} />

                    <div className="relative flex items-center justify-between gap-4">
                        <div>
                            <p className="text-sm uppercase tracking-[0.28em] text-[#d4af37]">Timeline</p>
                            <h2 className="text-3xl font-semibold text-white">Great things start small</h2>
                        </div>
                        <div className="rounded-full border border-white/15 px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-white/80 shadow-sm">
                            2010 — 2025
                        </div>
                    </div>

                    <div className="relative mt-12 grid gap-10 lg:grid-cols-[0.35fr_0.65fr]">
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

