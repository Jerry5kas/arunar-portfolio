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
            <div className="bg-gradient-to-b from-[#fdf8f1] via-[#fffaf5] to-[#f4eee3] text-[#1b1a16] dark:from-[#090807] dark:via-[#0c0b09] dark:to-[#0f0d0b]">
                <section className="relative min-h-screen overflow-hidden bg-black text-white">
                    <div className="absolute inset-0 bg-gradient-to-b from-black/85 via-black/80 to-black/90" />
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_55%_40%,rgba(212,175,55,0.14),transparent_60%)]" />

                    <div className="relative z-10 grid min-h-screen items-center gap-10 px-6 py-16 sm:px-10 lg:grid-cols-[1.1fr_0.9fr] lg:gap-16 lg:px-14">
                        <div className="space-y-6">
                            <p className="text-sm uppercase tracking-[0.24em] text-[#d4af37]">Recognitions</p>
                            <h1 className="text-4xl font-semibold leading-tight lg:text-5xl">Milestones that define the journey.</h1>
                            <p className="max-w-3xl text-lg text-white/85">
                                Every venture, award, and expansion reflects a commitment to quality, sustainability, and customer-first delivery across
                                real estate, construction, interiors, media, and advisory.
                            </p>
                            <div className="h-px w-24 bg-gradient-to-r from-transparent via-[#d4af37] to-transparent" />
                            <p className="text-sm uppercase tracking-[0.22em] text-[#d4af37]">2010 — Present</p>
                        </div>

                        <div className="relative flex w-full max-w-xl flex-col gap-4 text-white/80">
                            <div className="text-sm uppercase tracking-[0.24em] text-[#d4af37]">Highlight</div>
                            <p className="text-base leading-relaxed">
                                From landmark developments to luxury interiors and large-scale event productions, the portfolio consistently delivers
                                outcomes that set new standards and earn market trust.
                            </p>
                        </div>
                    </div>
                </section>

                <section className="relative overflow-hidden bg-black text-white">
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(212,175,55,0.08),transparent_32%),radial-gradient(circle_at_80%_0%,rgba(255,255,255,0.08),transparent_28%)]" />
                    <div className="relative mx-auto flex max-w-6xl flex-col gap-10 px-6 py-20 sm:px-10 lg:px-14">
                        <div className="space-y-3">
                            <p className="text-sm uppercase tracking-[0.24em] text-[#d4af37]">Achievements</p>
                            <h2 className="text-3xl font-semibold lg:text-4xl">Key wins across ventures</h2>
                            <p className="max-w-3xl text-base text-white/80">A portfolio of ventures driven by quality, sustainability, and immersive experiences.</p>
                        </div>
                        <div className="grid gap-8 lg:grid-cols-2">
                            {achievements.map((item) => (
                                <div key={item.title} className="space-y-3 rounded-3xl bg-white/5 p-6 shadow-[0_22px_80px_rgba(0,0,0,0.35)] backdrop-blur">
                                    <p className="text-xs uppercase tracking-[0.24em] text-[#d4af37]">Achievement</p>
                                    <h3 className="text-xl font-semibold text-white">{item.title}</h3>
                                    <p className="text-sm leading-relaxed text-white/80">{item.detail}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                <section className="relative overflow-hidden bg-black text-white">
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_10%,rgba(212,175,55,0.08),transparent_28%)]" />
                    <div className="relative mx-auto flex max-w-6xl flex-col gap-8 px-6 py-16 sm:px-10 lg:px-14">
                        <div className="space-y-3">
                            <p className="text-sm uppercase tracking-[0.24em] text-[#d4af37]">Gallery</p>
                            <h2 className="text-2xl font-semibold lg:text-3xl">Highlights</h2>
                        </div>
                        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                            {gallery.map((item) => (
                                <div
                                    key={item.label}
                                    className={`h-44 overflow-hidden rounded-[18px] bg-gradient-to-br ${item.color} shadow-[0_18px_70px_rgba(0,0,0,0.35)]`}
                                >
                                    <div className="flex h-full items-end bg-gradient-to-t from-black/40 via-black/10 to-transparent p-4">
                                        <p className="text-sm font-semibold text-white drop-shadow-sm">{item.label}</p>
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

