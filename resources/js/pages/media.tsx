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
            <div className="bg-gradient-to-b from-[#fdf8f1] via-[#fffaf5] to-[#f4eee3] text-[#1b1a16] dark:from-[#090807] dark:via-[#0c0b09] dark:to-[#0f0d0b]">
                <section className="relative min-h-screen overflow-hidden bg-black text-white">
                    <div className="absolute inset-0 bg-gradient-to-b from-black/85 via-black/80 to-black/90" />
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_55%_40%,rgba(212,175,55,0.14),transparent_60%)]" />

                    <div className="relative z-10 grid min-h-screen items-center gap-10 px-6 py-16 sm:px-10 lg:grid-cols-[1.05fr_0.95fr] lg:gap-16 lg:px-14">
                        <div className="space-y-6">
                            <p className="text-sm uppercase tracking-[0.24em] text-[#d4af37]">Press & Highlights</p>
                            <h1 className="text-4xl font-semibold leading-tight lg:text-5xl">Stories, visuals, and moments that define the brands.</h1>
                            <p className="max-w-3xl text-lg text-white/85">
                                A curated mix of imagery, films, and activations spanning development, construction, interiors, and experiential media.
                            </p>
                            <div className="h-px w-24 bg-gradient-to-r from-transparent via-[#d4af37] to-transparent" />
                        </div>

                        <div className="relative flex w-full max-w-xl flex-col gap-4 text-white/80">
                            <div className="text-sm uppercase tracking-[0.24em] text-[#d4af37]">Coverage</div>
                            <p>
                                Capturing milestones across launches, build-outs, and experiences with a consistent focus on quality and narrative.
                            </p>
                        </div>
                    </div>
                </section>

                <section className="relative overflow-hidden bg-black text-white">
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(212,175,55,0.08),transparent_32%),radial-gradient(circle_at_80%_0%,rgba(255,255,255,0.08),transparent_28%)]" />
                    <div className="relative mx-auto flex max-w-6xl flex-col gap-6 px-6 py-16 sm:px-10 lg:px-14">
                        <div className="space-y-3">
                            <p className="text-sm uppercase tracking-[0.24em] text-[#d4af37]">Images</p>
                            <h2 className="text-2xl font-semibold lg:text-3xl">Highlights</h2>
                        </div>
                        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                            {imageHighlights.map((item) => (
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

                <section className="relative overflow-hidden bg-black text-white">
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_10%,rgba(212,175,55,0.08),transparent_28%)]" />
                    <div className="relative mx-auto flex max-w-6xl flex-col gap-6 px-6 py-16 sm:px-10 lg:px-14">
                        <div className="space-y-3">
                            <p className="text-sm uppercase tracking-[0.24em] text-[#d4af37]">Videos</p>
                            <h2 className="text-2xl font-semibold lg:text-3xl">Reels & Features</h2>
                        </div>
                        <div className="grid gap-6 lg:grid-cols-2">
                            {videoReels.map((video) => (
                                <div
                                    key={video.title}
                                    className="overflow-hidden rounded-[22px] bg-white/5 shadow-[0_22px_80px_rgba(0,0,0,0.35)] backdrop-blur"
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
                                    <div className="space-y-2 p-5 text-white/85">
                                        <p className="text-xs uppercase tracking-[0.24em] text-[#d4af37]">Video</p>
                                        <h3 className="text-lg font-semibold text-white">{video.title}</h3>
                                        <p className="text-sm leading-relaxed text-white/80">{video.description}</p>
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

