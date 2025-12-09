import SiteLayout from '@/layouts/site-layout';
import { Head } from '@inertiajs/react';

const imageHighlights = [
    { label: 'Flagship Development', color: 'from-[#d4af37]/35 via-[#8d6a2a]/30 to-[#0f0d0b]' },
    { label: 'Sustainable Construction', color: 'from-[#6d8f5c]/45 via-[#1b1f16] to-[#0b0b0a]' },
    { label: 'Luxury Interior Suite', color: 'from-[#f5e6c4]/40 via-[#c7b07a]/35 to-[#0f0d0b]' },
    { label: 'Immersive Event Build', color: 'from-[#9b8b4b]/40 via-[#1c1a15] to-[#0a0908]' },
    { label: 'Media Production', color: 'from-[#0f1115] via-[#1f2430] to-[#0b0a0a]' },
    { label: 'Advisory & Consulting', color: 'from-white/25 via-white/10 to-black/60' },
];

const videoReels = [
    {
        title: 'Cinematic Reel',
        description: 'A showcase of recent brand films and atmospheric hero sequences.',
        src: 'https://storage.googleapis.com/coverr-main/mp4/Mt_Baker.mp4',
        poster: 'https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1200&q=80',
    },
    {
        title: 'Event Highlights',
        description: 'Immersive event builds and brand activations across sectors.',
        src: 'https://storage.googleapis.com/coverr-main/mp4/Footboys.mp4',
        poster: 'https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1200&q=80',
    },
];

export default function Media() {
    return (
        <SiteLayout>
            <Head title="Media" />
            <div className="space-y-16 bg-gradient-to-b from-[#fdfaf5] via-[#fbf5ea] to-[#f3ebde] px-6 pb-24 pt-14 text-[#1b1a16] dark:from-[#0b0a0a] dark:via-[#0e0c0b] dark:to-[#100e0c] lg:px-12">
                {/* Hero */}
                <section className="relative overflow-hidden rounded-[32px] border border-black/5 bg-white/90 px-8 py-14 shadow-[0_26px_90px_rgba(0,0,0,0.08)] backdrop-blur dark:border-white/10 dark:bg-[#0f0d0b]/90 dark:shadow-[0_26px_90px_rgba(0,0,0,0.45)] lg:px-16">
                    <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(212,175,55,0.18),transparent_38%),radial-gradient(circle_at_70%_10%,rgba(255,255,255,0.12),transparent_32%),radial-gradient(circle_at_80%_80%,rgba(212,175,55,0.14),transparent_32%)]" />
                    <div className="pointer-events-none absolute inset-0 flex items-start justify-center pt-6 text-[14vw] font-extrabold uppercase leading-none text-[#ece5d5] opacity-60 mix-blend-multiply dark:text-white/5 lg:text-[9vw]">
                        <span>Media</span>
                    </div>
                    <div className="relative grid gap-10 lg:grid-cols-[1.05fr_0.95fr]">
                        <div className="space-y-5">
                            <p className="text-sm uppercase tracking-[0.28em] text-[#8a7b55] dark:text-[#cbb478]">Press & Highlights</p>
                            <h1 className="text-4xl font-semibold leading-[1.05] text-[#1b1a16] dark:text-white">
                                Stories, visuals, and moments that define the brands.
                            </h1>
                            <p className="max-w-2xl text-lg text-[#3f3a31] dark:text-[#d6cdb6]">
                                A curated mix of imagery, films, and activations spanning development, construction, interiors, and experiential media.
                            </p>
                        </div>
                        <div className="relative rounded-3xl border border-black/10 bg-white/85 p-6 shadow-[0_18px_60px_rgba(0,0,0,0.08)] backdrop-blur dark:border-white/10 dark:bg-[#111010]/80">
                            <p className="text-sm uppercase tracking-[0.24em] text-[#9b8b4b] dark:text-[#e3c464]">Coverage</p>
                            <p className="mt-3 text-base leading-relaxed text-[#3f3a31] dark:text-[#d6cdb6]">
                                Capturing milestones across launches, build-outs, and experiences with a consistent focus on quality and narrative.
                            </p>
                        </div>
                    </div>
                </section>

                {/* Image gallery */}
                <section className="mx-auto max-w-6xl space-y-6">
                    <div className="flex items-center justify-between gap-4">
                        <div>
                            <p className="text-sm uppercase tracking-[0.28em] text-[#8a7b55] dark:text-[#cbb478]">Images</p>
                            <h2 className="text-2xl font-semibold text-[#1b1a16] dark:text-white">Highlights</h2>
                        </div>
                    </div>
                    <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                        {imageHighlights.map((item) => (
                            <div
                                key={item.label}
                                className={`h-44 overflow-hidden rounded-[18px] border border-black/5 bg-gradient-to-br ${item.color} shadow-[0_16px_50px_rgba(0,0,0,0.08)] dark:border-white/10 dark:shadow-[0_18px_70px_rgba(0,0,0,0.38)]`}
                            >
                                <div className="flex h-full items-end bg-gradient-to-t from-black/40 via-black/10 to-transparent p-4">
                                    <p className="text-sm font-semibold text-white drop-shadow-sm">{item.label}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </section>

                {/* Video reels */}
                <section className="mx-auto max-w-6xl space-y-6">
                    <div className="flex items-center justify-between gap-4">
                        <div>
                            <p className="text-sm uppercase tracking-[0.28em] text-[#8a7b55] dark:text-[#cbb478]">Videos</p>
                            <h2 className="text-2xl font-semibold text-[#1b1a16] dark:text-white">Reels & Features</h2>
                        </div>
                    </div>
                    <div className="grid gap-6 lg:grid-cols-2">
                        {videoReels.map((video) => (
                            <div
                                key={video.title}
                                className="overflow-hidden rounded-[22px] border border-black/5 bg-white/90 shadow-[0_20px_70px_rgba(0,0,0,0.08)] dark:border-white/10 dark:bg-[#12100d]/90 dark:shadow-[0_24px_90px_rgba(0,0,0,0.4)]"
                            >
                                <div className="relative h-56 overflow-hidden">
                                    <video
                                        className="h-full w-full object-cover"
                                        src={video.src}
                                        poster={video.poster}
                                        controls
                                        muted
                                        playsInline
                                    />
                                </div>
                                <div className="space-y-2 p-5">
                                    <p className="text-xs uppercase tracking-[0.24em] text-[#9b8b4b] dark:text-[#e3c464]">Video</p>
                                    <h3 className="text-lg font-semibold text-[#1b1a16] dark:text-white">{video.title}</h3>
                                    <p className="text-sm leading-relaxed text-[#3f3a31] dark:text-[#d6cdb6]">{video.description}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </section>
            </div>
        </SiteLayout>
    );
}

