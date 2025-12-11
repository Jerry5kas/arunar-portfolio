import SiteLayout from '@/layouts/site-layout';
import { Head } from '@inertiajs/react';

const aboutIntro = [
    'I am an entrepreneur driven by a relentless passion for innovation, growth, and excellence. My journey began in 2010 with the establishment of The Stage 365, setting the foundation for a multi-industry legacy.',
    'Over the years, I have expanded my footprint across real estate, construction, interior design, and event management, building brands that redefine industry standards. From founding Area24 as a premium real estate solutions provider to evolving it into a fully integrated development and consulting firm, my ventures have consistently focused on quality, sustainability, and customer-centric solutions.',
    'The launch of Atha Construction Pvt. Ltd. and Nesthetix Designs LLP further strengthened my commitment to engineering excellence and luxury interior design. Through strategic expansions and corporate structuring, my businesses continue to innovate, transform urban landscapes, and create lasting impact.',
];

export default function About() {
    return (
        <SiteLayout>
            <Head title="About" />
            <div className="bg-gradient-to-b from-[#fdf8f1] via-[#fffaf5] to-[#f4eee3] text-[#1b1a16] dark:from-[#090807] dark:via-[#0c0b09] dark:to-[#0f0d0b]">
                {/* Hero - mirrors welcome page mood, no framed container */}
                <section className="relative min-h-screen overflow-hidden bg-black text-white">
                    <div className="absolute inset-0 bg-gradient-to-b from-black/85 via-black/80 to-black/90" />
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_55%_40%,rgba(212,175,55,0.14),transparent_60%)]" />

                    <div className="relative z-10 grid min-h-screen items-center gap-10 px-6 py-16 sm:px-10 lg:grid-cols-[1.05fr_0.95fr] lg:gap-16 lg:px-14">
                        <div className="relative order-2 mx-auto flex w-full max-w-2xl justify-center lg:order-1">
                            <img
                                src="/images/about.png"
                                alt="Arunar seated portrait"
                                className="aspect-[3/4] w-full max-h-[90vh] object-cover shadow-[0_30px_120px_rgba(0,0,0,0.55)]"
                                style={{ clipPath: 'ellipse(78% 65% at 50% 42%)' }}
                            />
                        </div>

                        <div className="order-1 flex flex-col gap-6 lg:order-2">
                            <p className="text-sm uppercase tracking-[0.24em] text-[#d4af37]">Excellency</p>
                            <h1 className="text-3xl font-semibold leading-tight text-white lg:text-4xl">
                                “Creating standards. Elevating experiences. Redefining progress.”
                            </h1>
                            <div className="h-px w-24 bg-gradient-to-r from-transparent via-[#d4af37] to-transparent" />
                            <div className="space-y-3 text-white/80">
                                <p className="text-lg leading-relaxed">
                                    Founder & CEO
                                </p>
                                <p className="text-sm uppercase tracking-[0.18em] text-[#d4af37]">Arunar</p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Story - clean flowing layout, no borders */}
                <section className="relative overflow-hidden bg-black text-white">
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(212,175,55,0.08),transparent_32%),radial-gradient(circle_at_80%_0%,rgba(255,255,255,0.08),transparent_28%)]" />
                    <div className="relative mx-auto flex max-w-6xl flex-col gap-12 px-6 py-20 sm:px-10 lg:px-14">
                        <div className="space-y-4">
                            <p className="text-sm uppercase tracking-[0.24em] text-[#d4af37]">Story</p>
                            <h2 className="text-3xl font-semibold lg:text-4xl">Founder & Chairman</h2>
                            <p className="max-w-3xl text-base leading-relaxed text-white/85">
                                A journey shaped by resilience, vision, and the pursuit of excellence across industries.
                            </p>
                        </div>

                        <div className="grid gap-10 lg:grid-cols-[1.2fr_0.8fr] lg:items-start">
                            <div className="space-y-5 text-base leading-relaxed text-white/85">
                                {aboutIntro.map((para) => (
                                    <p key={para}>{para}</p>
                                ))}
                            </div>

                            <div className="space-y-4 text-white/80">
                                <div className="flex flex-wrap items-baseline gap-3">
                                    <span className="text-5xl font-semibold text-[#d4af37]">2010</span>
                                    <span className="text-sm uppercase tracking-[0.24em] text-white/60">Founded The Stage 365</span>
                                </div>
                                <p>Multi-industry expansion spanning real estate, construction, interiors, and events.</p>
                                <p>Integrated brands built around sustainability, luxury design, and customer-first delivery.</p>
                                <p>Continual innovation and corporate structuring to create lasting urban impact.</p>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </SiteLayout>
    );
}

