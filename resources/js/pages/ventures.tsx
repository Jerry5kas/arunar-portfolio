import SiteLayout from '@/layouts/site-layout';
import { Head } from '@inertiajs/react';

const ventures = [
    {
        name: 'Area24 Developers Pvt. Ltd.',
        summary:
            'A leading real estate development firm specializing in premium residential and commercial projects. Focused on innovation, sustainability, and delivering world-class living spaces.',
    },
    {
        name: 'Atha Construction Pvt. Ltd.',
        summary:
            'A construction company committed to engineering excellence, structural innovation, and high-quality craftsmanship. Creating durable, sustainable, and aesthetically superior developments.',
    },
    {
        name: 'Nesthetix Designs LLP',
        summary:
            'A luxury interior design firm transforming spaces with bespoke designs, modern aesthetics, and functional elegance. Specializing in high-end residential and commercial interiors.',
    },
    {
        name: 'The Stage 365',
        summary:
            'A premier event production and brand activation company delivering immersive experiences. Recognized for its expertise in corporate gatherings, social celebrations, and digital marketing.',
    },
    {
        name: 'Area24 Realty',
        summary:
            'A trusted real estate consultancy offering end-to-end property solutions, including sales, investment advisory, and market insights. Streamlining transactions with expertise and transparency.',
    },
];

export default function Ventures() {
    return (
        <SiteLayout>
            <Head title="Ventures" />
            <div className="space-y-16 bg-gradient-to-b from-[#fdfaf5] via-[#fbf5ea] to-[#f3ebde] px-6 pb-24 pt-14 text-[#1b1a16] dark:from-[#0b0a0a] dark:via-[#0e0c0b] dark:to-[#100e0c] lg:px-12">
                {/* Hero */}
                <section className="relative overflow-hidden rounded-[32px] border border-black/5 bg-white/90 px-8 py-14 shadow-[0_26px_90px_rgba(0,0,0,0.08)] backdrop-blur dark:border-white/10 dark:bg-[#0f0d0b]/90 dark:shadow-[0_26px_90px_rgba(0,0,0,0.45)] lg:px-16">
                    <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(212,175,55,0.18),transparent_38%),radial-gradient(circle_at_70%_10%,rgba(255,255,255,0.12),transparent_32%),radial-gradient(circle_at_80%_80%,rgba(212,175,55,0.14),transparent_32%)]" />
                    <div className="pointer-events-none absolute inset-0 flex items-start justify-center pt-6 text-[15vw] font-extrabold uppercase leading-none text-[#ece5d5] opacity-60 mix-blend-multiply dark:text-white/5 lg:text-[9vw]">
                        <span>Ventures</span>
                    </div>
                    <div className="relative grid gap-10 lg:grid-cols-[1.05fr_0.95fr]">
                        <div className="space-y-5">
                            <p className="text-sm uppercase tracking-[0.28em] text-[#8a7b55] dark:text-[#cbb478]">Portfolio</p>
                            <h1 className="text-4xl font-semibold leading-[1.05] text-[#1b1a16] dark:text-white">
                                Building brands that redefine their categories.
                            </h1>
                            <p className="max-w-2xl text-lg text-[#3f3a31] dark:text-[#d6cdb6]">
                                From development and construction to interiors, events, and advisory—each venture is crafted to deliver quality,
                                sustainability, and immersive experiences.
                            </p>
                        </div>
                        <div className="relative rounded-3xl border border-black/10 bg-white/85 p-6 shadow-[0_18px_60px_rgba(0,0,0,0.08)] backdrop-blur dark:border-white/10 dark:bg-[#111010]/80">
                            <div className="grid gap-3 text-sm text-[#3f3a31] dark:text-[#d6cdb6]">
                                <p className="font-semibold text-[#9b8b4b] dark:text-[#e3c464]">Focus</p>
                                <p>
                                    Each brand operates with a common ethos—customer-centricity, sustainable execution, and design-first thinking—while
                                    pursuing leadership in its vertical.
                                </p>
                                <p className="font-semibold text-[#9b8b4b] dark:text-[#e3c464]">Outcome</p>
                                <p>
                                    Cohesive portfolio value that compounds across real estate, construction, interiors, events, and advisory services,
                                    delivering measurable impact.
                                </p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Ventures grid */}
                <section className="mx-auto grid max-w-6xl gap-8 lg:grid-cols-2">
                    {ventures.map((venture) => (
                        <div
                            key={venture.name}
                            className="group relative overflow-hidden rounded-[24px] border border-black/5 bg-white/90 p-6 shadow-[0_20px_70px_rgba(0,0,0,0.08)] transition hover:-translate-y-1 hover:shadow-[0_26px_90px_rgba(0,0,0,0.12)] dark:border-white/10 dark:bg-[#12100d]/90 dark:shadow-[0_24px_90px_rgba(0,0,0,0.4)]"
                        >
                            <div className="absolute inset-0 opacity-0 transition duration-300 group-hover:opacity-100">
                                <div className="absolute inset-0 bg-gradient-to-br from-[#d4af37]/10 via-transparent to-[#8d6a2a]/15" />
                            </div>
                            <div className="relative space-y-3">
                                <p className="text-xs uppercase tracking-[0.26em] text-[#9b8b4b] dark:text-[#e3c464]">Venture</p>
                                <h3 className="text-xl font-semibold text-[#1b1a16] dark:text-white">{venture.name}</h3>
                                <p className="text-sm leading-relaxed text-[#3f3a31] dark:text-[#d6cdb6]">{venture.summary}</p>
                            </div>
                        </div>
                    ))}
                </section>
            </div>
        </SiteLayout>
    );
}

