import SiteLayout from '@/layouts/site-layout';
import { Head } from '@inertiajs/react';
import { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';

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
    const [activeTimelineIndex, setActiveTimelineIndex] = useState(0);
    const [timelineTransitioning, setTimelineTransitioning] = useState(false);
    return (
        <SiteLayout>
            <Head title="Home" />
            <div className="space-y-0 bg-gradient-to-b from-[#fdf8f1] via-[#fffaf5] to-[#f4eee3] text-[#1b1a16] dark:from-[#090807] dark:via-[#0c0b09] dark:to-[#0f0d0b]">
                {/* Hero section */}
                <section className="relative flex min-h-screen items-center justify-center bg-black text-white">
                    <div className="absolute inset-0 bg-gradient-to-b from-black/85 via-black/80 to-black/90" />
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(212,175,55,0.12),transparent_70%)]" />

                    <div className="relative z-10 w-full px-0 py-8 sm:px-0">
                        <div className="w-full h-screen max-h-[900px] overflow-hidden shadow-2xl shadow-black/50 backdrop-blur-sm">
                            <video
                                src="/video/demo-hero.mp4"
                                poster=""
                                autoPlay
                                muted
                                loop
                                controls
                                playsInline
                                className="h-full w-full object-cover"
                            />
                        </div>
                    </div>
                </section>

                {/* About with quote, signature, left-side portrait */}
                <section className="relative min-h-screen overflow-hidden bg-black">
                    {/* Animated scrolling text - Left side (Desktop only) */}
                    <div className="pointer-events-none absolute left-0 top-0 z-0 hidden h-full w-[75%] overflow-hidden px-20 md:block">
                        <div
                            className="scrolling-text-left flex h-[200%] flex-col gap-10"
                            style={{
                                animation: 'scrollUp 120s linear infinite',
                                willChange: 'transform',
                                transform: 'translateY(0%)'
                            }}
                        >
                            <div className="flex flex-col gap-10">
                                <p className="text-[120px] font-bold leading-relaxed text-[#d4af37]/8">
                                    I am an entrepreneur driven by a relentless passion for innovation, growth, and excellence. My journey began in 2010 with the establishment of The Stage 365, setting the foundation for a multi-industry legacy. Over the years, I have expanded my footprint across real estate, construction, interior design, and event management, building brands that redefine industry standards.
                                </p>
                                <p className="text-[120px] font-bold leading-relaxed text-[#d4af37]/8">
                                    From founding Area24 as a premium real estate solutions provider to evolving it into a fully integrated development and consulting firm, my ventures have consistently focused on quality, sustainability, and customer-centric solutions. The launch of Atha Construction Pvt. Ltd. and Nesthetix Designs LLP further strengthened my commitment to engineering excellence and luxury interior design.
                                </p>
                                <p className="text-[120px] font-bold leading-relaxed text-[#d4af37]/8">
                                    Through strategic expansions and corporate structuring, my businesses continue to innovate, transform urban landscapes, and create lasting impact. My entrepreneurial journey is a testament to resilience, vision, and the pursuit of excellence.
                                </p>
                            </div>
                            {/* Duplicate for seamless loop */}
                            <div className="flex flex-col gap-10">
                                <p className="text-[120px] font-bold leading-relaxed text-[#d4af37]/8">
                                    I am an entrepreneur driven by a relentless passion for innovation, growth, and excellence. My journey began in 2010 with the establishment of The Stage 365, setting the foundation for a multi-industry legacy. Over the years, I have expanded my footprint across real estate, construction, interior design, and event management, building brands that redefine industry standards.
                                </p>
                                <p className="text-[120px] font-bold leading-relaxed text-[#d4af37]/8">
                                    From founding Area24 as a premium real estate solutions provider to evolving it into a fully integrated development and consulting firm, my ventures have consistently focused on quality, sustainability, and customer-centric solutions. The launch of Atha Construction Pvt. Ltd. and Nesthetix Designs LLP further strengthened my commitment to engineering excellence and luxury interior design.
                                </p>
                                <p className="text-[120px] font-bold leading-relaxed text-[#d4af37]/8">
                                    Through strategic expansions and corporate structuring, my businesses continue to innovate, transform urban landscapes, and create lasting impact. My entrepreneurial journey is a testament to resilience, vision, and the pursuit of excellence.
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Static background decorative text - Center */}
                    {/* <div className="pointer-events-none absolute inset-0 flex items-center justify-center px-10 text-center text-4xl font-extrabold uppercase leading-[1.05] tracking-tight text-[#d4af37]/30 lg:text-6xl">
                        <div className="space-y-3">
                            <p>Resilience • Vision • Excellence</p>
                            <p>Innovation • Growth • Impact</p>
                        </div>
                    </div> */}

                    <div className="relative z-10 grid min-h-screen items-center gap-10 px-6 sm:px-10 lg:grid-cols-[0.95fr_1.05fr] lg:gap-16 lg:px-14">
                        <div className="relative mx-auto -mb-24 flex w-full max-w-2xl items-end justify-center sm:-mb-28 lg:-mb-32">
                            <img
                                src="/images/avatar.png"
                                alt="Arunar portrait"
                                className="aspect-[3/4] w-full max-h-[95vh] object-contain"
                                style={{ clipPath: 'ellipse(78% 65% at 50% 42%)' }}
                            />
                        </div>
                        <div className="flex flex-col justify-center space-y-6">
                            <blockquote className="relative mx-auto w-full max-w-2xl overflow-hidden p-10 text-lg leading-relaxed text-white/90">
                                <span className="absolute left-6 top-6 text-5xl text-[#d4af37]">"</span>
                                <p className="pl-8 leading-relaxed tracking-wide uppercase" style={{ wordSpacing: '0.2em' }}>
                                    YOU DON'T JUST BUILD COMPANIES;
                                    <br />
                                    YOU BUILD LEGACIES THAT STAND
                                    <br />
                                    THE TEST OF TIME.
                                </p>
                                <div className="mt-8 flex items-center gap-6 pl-8">
                                    <div className="h-px flex-1 bg-gradient-to-r from-transparent via-[#d4af37] to-transparent" />
                                    <div className="text-right">
                                        <p className="text-base font-semibold uppercase tracking-[0.18em] text-[#d4af37]">ARUN KUMAR AR</p>
                                    </div>
                                </div>
                            </blockquote>
                        </div>
                    </div>
                </section>

                {/* Timeline */}
                <section className="relative h-[30rem] overflow-hidden bg-black text-white">
                    {/* Background */}
                    <Swiper
                        modules={[Navigation, Pagination]}
                        direction="vertical"
                        speed={1400}
                        navigation={{
                            nextEl: '.swiper-button-next-timeline',
                            prevEl: '.swiper-button-prev-timeline',
                        }}
                        pagination={{
                            clickable: true,
                            el: '.swiper-pagination-timeline',
                            renderBullet: (index, className) => `<span class="${className}">${milestones[index].year}</span>`,
                        }}
                        slidesPerView={1}
                        allowTouchMove
                        className="timeline-swiper timeline-swiper-vertical h-full"
                        onSlideChange={(swiper) => setActiveTimelineIndex(swiper.activeIndex)}
                        onSlideChangeTransitionStart={() => setTimelineTransitioning(true)}
                        onSlideChangeTransitionEnd={() => setTimelineTransitioning(false)}
                    >
                        {milestones.map((milestone, idx) => (
                            <SwiperSlide key={milestone.year}>
                                <div
                                    className="relative flex h-full w-full items-center justify-center"
                                    style={{
                                        backgroundImage: `linear-gradient(90deg, rgba(0,0,0,0.75) 0%, rgba(0,0,0,0.35) 40%, rgba(0,0,0,0.4) 60%, rgba(0,0,0,0.7) 100%), url('/images/banner.jpg')`,
                                        backgroundSize: 'cover',
                                        backgroundPosition: 'center',
                                    }}
                                >
                                    <div className="absolute inset-0 bg-black/35 backdrop-blur-[2px]" />
                                    <div
                                        className={`relative z-10 flex flex-row w-full max-w-6xl items-center justify-center gap-x-10 px-6 lg:px-10 transition-all duration-500 ease-out ${
                                            timelineTransitioning ? 'opacity-0 translate-y-2 pointer-events-none' : 'opacity-100 translate-y-0'
                                        }`}
                                    >
                                        <div className="flex flex-row items-center justify-center gap-6">
                                        <div className="flex flex-col items-center gap-3 text-right text-[#d4af37] lg:items-start lg:pr-8">
                                            <p className="text-5xl uppercase tracking-[0.22em]">{milestone.year}</p>
                                        </div>
                                        <div className="mx-auto max-w-2xl text-center lg:text-left lg:pl-10">
                                            <h2 className="text-4xl font-semibold leading-tight text-white lg:text-5xl">{milestone.title}</h2>
                                            <p className="mt-4 text-base leading-relaxed text-white/85 lg:text-lg">
                                                {milestone.detail}
                                            </p>
                                        </div>
                                        </div>
                                        <div className="h-48 w-px bg-white/25 rounded-full" />
                                        <div className="flex flex-col items-center justify-center gap-3">
                                            <button className="swiper-button-prev-timeline z-10 flex h-10 w-10 items-center justify-center rounded-full border border-white/25 bg-black/60 text-[#d4af37] backdrop-blur-sm transition hover:scale-105 hover:border-[#d4af37]/60 hover:bg-black/80">
                                                <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 15l7-7 7 7" />
                                                </svg>
                                            </button>


                                            {milestones.map((yearItem, yearIdx) => (
                                                <li
                                                    key={yearItem.year}
                                                    className={
                                                        yearIdx === activeTimelineIndex
                                                            ? 'text-[#d4af37] tracking-[0.22em] font-bold'
                                                            : ''
                                                    }
                                                >
                                                    {yearItem.year}
                                                </li>
                                            ))}

                                            <button className="swiper-button-next-timeline z-10 flex h-10 w-10 items-center justify-center rounded-full border border-white/25 bg-black/60 text-[#d4af37] backdrop-blur-sm transition hover:scale-105 hover:border-[#d4af37]/60 hover:bg-black/80">
                                                <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                                </svg>
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>

                </section>
            </div>
        </SiteLayout>
    );
}

