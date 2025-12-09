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
            <div className="space-y-20 bg-gradient-to-b from-white via-[#fbf7ef] to-[#f5efe3] px-6 pb-24 pt-14 text-[#1b1a16] dark:from-[#0b0a0a] dark:via-[#0d0c0b] dark:to-[#0f0d0b] lg:px-12">
                {/* Hero */}
                <section className="relative overflow-hidden rounded-[32px] border border-black/5 bg-white/90 shadow-[0_26px_90px_rgba(0,0,0,0.08)] backdrop-blur dark:border-white/10 dark:bg-[#0f0d0b]/90 dark:shadow-[0_26px_90px_rgba(0,0,0,0.45)]">
                    <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(212,175,55,0.18),transparent_38%),radial-gradient(circle_at_70%_10%,rgba(255,255,255,0.12),transparent_32%),radial-gradient(circle_at_80%_80%,rgba(212,175,55,0.14),transparent_32%)]" />
                    <div className="pointer-events-none absolute inset-0 flex items-start justify-center pt-10 text-[16vw] font-extrabold uppercase leading-none text-[#ece5d5] opacity-70 mix-blend-multiply dark:text-white/5 lg:text-[9vw]">
                        <span>About</span>
                    </div>
                    <div className="relative grid items-center gap-10 px-8 py-14 lg:grid-cols-[1.05fr_0.95fr] lg:px-16">
                        <div className="space-y-6">
                            <p className="text-sm uppercase tracking-[0.28em] text-[#8a7b55] dark:text-[#cbb478]">Perfection</p>
                            <h1 className="text-3xl font-semibold leading-tight text-[#1b1a16] dark:text-white lg:text-4xl">
                                “Let the drive for perfection start from within.”
                            </h1>
                            <div className="pt-4">
                                <p className="text-base font-semibold uppercase tracking-[0.18em] text-[#9b8b4b] dark:text-[#e3c464]">Arunar</p>
                                <p className="text-xs uppercase tracking-[0.22em] text-[#7a725f] dark:text-[#cbb478]">Founder & CEO</p>
                            </div>
                        </div>
                        <div className="relative">
                            <div className="absolute -inset-6 -z-10 rounded-[36px] bg-[radial-gradient(circle_at_30%_20%,rgba(212,175,55,0.18),transparent_35%),radial-gradient(circle_at_80%_10%,rgba(255,255,255,0.15),transparent_32%),radial-gradient(circle_at_50%_90%,rgba(112,82,40,0.12),transparent_40%)] blur-3xl" />
                            <div className="overflow-hidden rounded-[42px] border border-black/10 bg-white shadow-[0_28px_90px_rgba(0,0,0,0.12)] dark:border-white/10 dark:bg-[#111010]">
                                <img
                                    src="/images/about.jpg"
                                    alt="Arunar seated portrait"
                                    className="w-full object-cover"
                                />
                            </div>
                        </div>
                    </div>
                </section>

                {/* Story */}
                <section className="mx-auto max-w-5xl space-y-8 rounded-[28px] border border-black/5 bg-white/95 p-10 shadow-[0_22px_70px_rgba(0,0,0,0.08)] backdrop-blur dark:border-white/10 dark:bg-[#11100d]/90 dark:text-[#f0eadc]">
                    <p className="text-sm uppercase tracking-[0.28em] text-[#8a7b55] dark:text-[#cbb478]">Story</p>
                    <h2 className="text-3xl font-semibold text-[#1b1a16] dark:text-white">Founder & Chairman</h2>
                    <div className="space-y-5 text-base leading-relaxed text-[#3f3a31] dark:text-[#d6cdb6]">
                        {aboutIntro.map((para) => (
                            <p key={para}>{para}</p>
                        ))}
                    </div>
                </section>
            </div>
        </SiteLayout>
    );
}

