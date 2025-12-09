import SiteLayout from '@/layouts/site-layout';
import { Head } from '@inertiajs/react';

const achievements = [
    {
        title: 'Multi-vertical Expansion',
        detail:
            'Evolved from The Stage 365 (2010) into a portfolio spanning real estate, construction, interiors, media, and consultancy, each with independent leadership.',
    },
    {
        title: 'Area24 Developers Pvt. Ltd.',
        detail:
            'Scaled premium residential and commercial developments with a sustainability-first approach and customer-centric delivery.',
    },
    {
        title: 'Atha Construction Pvt. Ltd.',
        detail:
            'Spun off as a dedicated construction arm focused on eco-friendly materials, structural innovation, and high quality execution.',
    },
    {
        title: 'Nesthetix Designs LLP',
        detail:
            'Rebranded interior design division into a bespoke luxury studio delivering high-end residential and commercial interiors.',
    },
    {
        title: 'Stagecstatic365 Media House LLP',
        detail:
            'Built an experiential media and events engine for live productions, brand activations, and immersive storytelling.',
    },
    {
        title: 'Area24 Realty',
        detail:
            'Established end-to-end real estate consultancy with investment advisory, market insights, and transparent transaction support.',
    },
];

const gallery = [
    { label: 'Real Estate Excellence', color: 'from-[#d4af37]/40 via-[#8d6a2a]/35 to-[#0f0d0b]' },
    { label: 'Construction Leadership', color: 'from-[#0f1115] via-[#1f2430] to-[#0b0a0a]' },
    { label: 'Luxury Interiors', color: 'from-[#f5e6c4]/40 via-[#c7b07a]/35 to-[#0f0d0b]' },
    { label: 'Experiential Media', color: 'from-[#9b8b4b]/40 via-[#1c1a15] to-[#0a0908]' },
    { label: 'Advisory & Consulting', color: 'from-white/25 via-white/10 to-black/60' },
    { label: 'Sustainable Builds', color: 'from-[#6d8f5c]/45 via-[#1b1f16] to-[#0b0b0a]' },
];

export default function Accolades() {
    return (
        <SiteLayout>
            <Head title="Accolades" />
            <div className="space-y-16 bg-gradient-to-b from-[#fdfaf5] via-[#fbf5ea] to-[#f3ebde] px-6 pb-24 pt-14 text-[#1b1a16] dark:from-[#0b0a0a] dark:via-[#0e0c0b] dark:to-[#100e0c] lg:px-12">
                {/* Hero */}
                <section className="relative overflow-hidden rounded-[32px] border border-black/5 bg-white/90 px-8 py-14 shadow-[0_26px_90px_rgba(0,0,0,0.08)] backdrop-blur dark:border-white/10 dark:bg-[#0f0d0b]/90 dark:shadow-[0_26px_90px_rgba(0,0,0,0.45)] lg:px-16">
                    <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(212,175,55,0.18),transparent_38%),radial-gradient(circle_at_70%_10%,rgba(255,255,255,0.12),transparent_32%),radial-gradient(circle_at_80%_80%,rgba(212,175,55,0.14),transparent_32%)]" />
                    <div className="pointer-events-none absolute inset-0 flex items-start justify-center pt-6 text-[14vw] font-extrabold uppercase leading-none text-[#ece5d5] opacity-60 mix-blend-multiply dark:text-white/5 lg:text-[9vw]">
                        <span>Accolades</span>
                    </div>
                    <div className="relative grid gap-10 lg:grid-cols-[1.05fr_0.95fr]">
                        <div className="space-y-5">
                            <p className="text-sm uppercase tracking-[0.28em] text-[#8a7b55] dark:text-[#cbb478]">Recognitions</p>
                            <h1 className="text-4xl font-semibold leading-[1.05] text-[#1b1a16] dark:text-white">
                                Milestones that define the journey.
                            </h1>
                            <p className="max-w-2xl text-lg text-[#3f3a31] dark:text-[#d6cdb6]">
                                Every venture, award, and expansion reflects a commitment to quality, sustainability, and customer-first delivery across
                                real estate, construction, interiors, media, and advisory.
                            </p>
                        </div>
                        <div className="relative rounded-3xl border border-black/10 bg-white/85 p-6 shadow-[0_18px_60px_rgba(0,0,0,0.08)] backdrop-blur dark:border-white/10 dark:bg-[#111010]/80">
                            <p className="text-sm uppercase tracking-[0.24em] text-[#9b8b4b] dark:text-[#e3c464]">Highlight</p>
                            <p className="mt-3 text-base leading-relaxed text-[#3f3a31] dark:text-[#d6cdb6]">
                                From landmark developments to luxury interiors and large-scale event productions, the portfolio consistently delivers
                                outcomes that set new standards and earn market trust.
                            </p>
                        </div>
                    </div>
                </section>

                {/* Achievements */}
                <section className="mx-auto max-w-6xl space-y-8">
                    <div className="flex items-center justify-between gap-4">
                        <div>
                            <p className="text-sm uppercase tracking-[0.28em] text-[#8a7b55] dark:text-[#cbb478]">Achievements</p>
                            <h2 className="text-3xl font-semibold text-[#1b1a16] dark:text-white">Key wins across ventures</h2>
                        </div>
                        <div className="rounded-full border border-black/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-[#7a725f] shadow-sm dark:border-white/15 dark:text-[#cbb478]">
                            2010 — Present
                        </div>
                    </div>
                    <div className="grid gap-6 lg:grid-cols-2">
                        {achievements.map((item) => (
                            <div
                                key={item.title}
                                className="relative overflow-hidden rounded-[22px] border border-black/5 bg-white/90 p-6 shadow-[0_18px_60px_rgba(0,0,0,0.08)] transition hover:-translate-y-1 hover:shadow-[0_26px_90px_rgba(0,0,0,0.12)] dark:border-white/10 dark:bg-[#12100d]/90 dark:shadow-[0_24px_90px_rgba(0,0,0,0.4)]"
                            >
                                <div className="absolute inset-0 opacity-0 transition duration-300 hover:opacity-100">
                                    <div className="absolute inset-0 bg-gradient-to-br from-[#d4af37]/10 via-transparent to-[#8d6a2a]/15" />
                                </div>
                                <div className="relative space-y-2">
                                    <p className="text-xs uppercase tracking-[0.24em] text-[#9b8b4b] dark:text-[#e3c464]">Achievement</p>
                                    <h3 className="text-xl font-semibold text-[#1b1a16] dark:text-white">{item.title}</h3>
                                    <p className="text-sm leading-relaxed text-[#3f3a31] dark:text-[#d6cdb6]">{item.detail}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </section>

                {/* Gallery */}
                <section className="mx-auto max-w-6xl space-y-6">
                    <div className="flex items-center justify-between gap-4">
                        <div>
                            <p className="text-sm uppercase tracking-[0.28em] text-[#8a7b55] dark:text-[#cbb478]">Gallery</p>
                            <h2 className="text-2xl font-semibold text-[#1b1a16] dark:text-white">Highlights</h2>
                        </div>
                    </div>
                    <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                        {gallery.map((item) => (
                            <div
                                key={item.label}
                                className={`h-40 overflow-hidden rounded-[18px] border border-black/5 bg-gradient-to-br ${item.color} shadow-[0_16px_50px_rgba(0,0,0,0.08)] dark:border-white/10 dark:shadow-[0_18px_70px_rgba(0,0,0,0.38)]`}
                            >
                                <div className="flex h-full items-end bg-gradient-to-t from-black/40 via-black/10 to-transparent p-4">
                                    <p className="text-sm font-semibold text-white drop-shadow-sm">{item.label}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </section>
            </div>
        </SiteLayout>
    );
}

