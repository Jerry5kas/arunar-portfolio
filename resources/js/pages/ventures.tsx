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
            <div className="bg-gradient-to-b from-[#fdf8f1] via-[#fffaf5] to-[#f4eee3] text-[#1b1a16] dark:from-[#090807] dark:via-[#0c0b09] dark:to-[#0f0d0b]">
                <section className="relative min-h-screen overflow-hidden bg-black text-white">
                    <div className="absolute inset-0 bg-gradient-to-b from-black/85 via-black/80 to-black/90" />
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_55%_40%,rgba(212,175,55,0.14),transparent_60%)]" />

                    <div className="relative z-10 grid min-h-screen items-center gap-10 px-6 py-16 sm:px-10 lg:grid-cols-[1.05fr_0.95fr] lg:gap-16 lg:px-14">
                        <div className="space-y-6">
                            <p className="text-sm uppercase tracking-[0.24em] text-[#d4af37]">Portfolio</p>
                            <h1 className="text-4xl font-semibold leading-tight lg:text-5xl">Building brands that redefine their categories.</h1>
                            <p className="max-w-3xl text-lg text-white/85">
                                From development and construction to interiors, events, and advisory—each venture is crafted to deliver quality, sustainability, and immersive experiences.
                            </p>
                            <div className="h-px w-24 bg-gradient-to-r from-transparent via-[#d4af37] to-transparent" />
                        </div>

                        <div className="relative flex w-full max-w-xl flex-col gap-4 text-white/80">
                            <div className="text-sm uppercase tracking-[0.24em] text-[#d4af37]">Focus</div>
                            <p>
                                Each brand operates with a common ethos—customer-centricity, sustainable execution, and design-first thinking—while pursuing leadership in its vertical.
                            </p>
                            <div className="text-sm uppercase tracking-[0.24em] text-[#d4af37]">Outcome</div>
                            <p>
                                Cohesive portfolio value that compounds across real estate, construction, interiors, events, and advisory services, delivering measurable impact.
                            </p>
                        </div>
                    </div>
                </section>

                <section className="relative overflow-hidden bg-black text-white">
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(212,175,55,0.08),transparent_32%),radial-gradient(circle_at_80%_0%,rgba(255,255,255,0.08),transparent_28%)]" />
                    <div className="relative mx-auto grid max-w-6xl gap-8 px-6 py-20 sm:px-10 lg:grid-cols-2 lg:px-14">
                        {ventures.map((venture) => (
                            <div key={venture.name} className="space-y-3 rounded-3xl bg-white/5 p-6 shadow-[0_22px_80px_rgba(0,0,0,0.35)] backdrop-blur">
                                <p className="text-xs uppercase tracking-[0.24em] text-[#d4af37]">Venture</p>
                                <h3 className="text-xl font-semibold text-white">{venture.name}</h3>
                                <p className="text-sm leading-relaxed text-white/80">{venture.summary}</p>
                            </div>
                        ))}
                    </div>
                </section>
            </div>
        </SiteLayout>
    );
}

