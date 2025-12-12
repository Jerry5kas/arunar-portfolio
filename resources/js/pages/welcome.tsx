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
            'Rebranded and expanded the interior design division into Nesthetix Designs LLP, focusing exclusively on bespoke luxury interiors and architectural enhancements. This transformation allowed Nesthetix Designs to establish itself as a premier provider of customized, high-end interior solutions. The company introduced cutting-edge design techniques, blending modern aesthetics with functionality to cater to elite clientele. By emphasizing meticulous craftsmanship, Nesthetix quickly gained recognition for its innovative approach to interiors. With a dedicated team of architects and designers, the firm expanded its portfolio to include luxury residences, commercial spaces, and hospitality projects. The launch of this division marked a significant milestone, setting the foundation for long-term growth and excellence in the field.',
        image: '/images/2025.png',
    },
    {
        year: '2024',
        title: 'The Birth of Atha Construction Pvt. Ltd.',
        detail: 'Spun off the construction division into Atha Construction Pvt. Ltd., dedicated to high-quality and sustainable building solutions. This move was driven by the increasing demand for eco-friendly and structurally sound buildings. Atha Construction incorporated state-of-the-art technologies and sustainable materials to meet modern-day infrastructure requirements. With a focus on green building practices, the company delivered projects that adhered to global environmental standards. Through strategic collaborations with architects, engineers, and material suppliers, Atha Construction quickly positioned itself as an industry leader. The formation of this entity provided the company with greater flexibility in handling large-scale residential and commercial developments, ensuring quality control, efficiency, and cost-effectiveness.',
        image: '/images/2024.png',
    },
    {
        year: '2023',
        title: 'Corporate Evolution & Growth',
        detail: 'Established Area24 Developers Pvt. Ltd. and Stagecstatic365 Media House LLP, transforming real estate and event media sectors. This milestone represented a shift towards corporate expansion and diversification. Area24 Developers ventured into large-scale residential and commercial projects, providing premium living and business spaces. Meanwhile, Stagecstatic365 Media House focused on media production, live events, and brand activations. By leveraging technology and market insights, both companies expanded their reach, collaborating with renowned industry experts. The evolution into a structured corporate entity enabled the brands to gain investor confidence, secure larger contracts, and establish a long-term roadmap for continued success.',
        image: '/images/2023.png',
    },
    {
        year: '2020',
        title: 'Structuring Real Estate into a Proprietorship',
        detail: 'Formalized Area24 Realty as a Proprietorship to enhance operational efficiency, market reach, and customer trust. This strategic move enabled the business to streamline its management and establish stronger client relationships. The decision to operate as a proprietorship provided greater control over financial and operational aspects, ensuring higher transparency. Area24 Realty expanded its services, offering end-to-end real estate solutions, from property consultation to asset management. The restructuring also allowed the company to cater to a broader customer base, including high-net-worth individuals and institutional investors. The rebranding efforts helped solidify its position as a trustworthy and innovative real estate partner.',
        image: '/images/2020.png',
    },
    {
        year: '2018',
        title: 'Venturing into Luxury Interior Design',
        detail: 'Expanded into high-end interior design to create personalized, sophisticated spaces, laying the foundation for Nesthetix Designs LLP. The initiative stemmed from the growing demand for aesthetically refined interiors that reflect individual lifestyles. By integrating contemporary trends with timeless elegance, the company developed a signature design philosophy. From residential homes to luxury hotels, Nesthetix Designs curated bespoke interiors tailored to client needs. Attention to detail, premium material selection, and cutting-edge automation further elevated the brand\'s reputation. This strategic move positioned the company as a leader in the luxury interior design sector, paving the way for future growth and innovation.',
        image: '/images/2018.png',
    },
    {
        year: '2016',
        title: 'Expansion into Property Development & Management',
        detail: 'Area24 Realty evolved into a full-fledged real estate solutions provider, diversifying into property management, sales, construction, and development. Recognizing a market gap, the company introduced a 360-degree approach to real estate services. The expansion into property management included asset maintenance, rental solutions, and resale consulting. Area24 Realty also ventured into residential and commercial property development, focusing on premium and affordable housing. The integration of construction services allowed seamless project execution, ensuring quality and timely delivery. By broadening its service portfolio, the company strengthened its market presence and created long-term value for its customers and stakeholders.',
        image: '/images/2016.png',
    },
    {
        year: '2010',
        title: 'The Foundation of a Vision',
        detail: 'Launched The Stage 365 and established Area24 Realty, marking the beginning of real estate consulting and premium property solutions. The inception of The Stage 365 aimed to revolutionize event management with high-quality corporate and social event planning. Simultaneously, Area24 Realty entered the real estate sector, offering expert consultation services. Over the years, the company built a reputation for excellence, focusing on customer-centric solutions. From the outset, innovation and integrity were the guiding principles, helping both brands achieve remarkable milestones. This visionary approach laid a strong foundation for future growth, diversification, and leadership in their respective industries.',
        image: '/images/2010.png',
    },
];

export default function Welcome() {
    const [activeTimelineIndex, setActiveTimelineIndex] = useState(0);
    const [timelineTransitioning, setTimelineTransitioning] = useState(false);
    const [timelineSwiper, setTimelineSwiper] = useState<any>(null);
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
                                src="/video/hero.mp4"
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
                <section className="group relative min-h-screen overflow-hidden bg-black transition-all duration-700">
                    {/* Subtle background glow on hover */}
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(212,175,55,0.12),transparent_70%)] transition-all duration-700 ease-out group-hover:bg-[radial-gradient(circle_at_50%_50%,rgba(212,175,55,0.18),transparent_70%)]" />
                    {/* Animated scrolling text - Left side (Desktop only) */}
                    <div className="pointer-events-none absolute left-0 top-0 z-0 hidden h-full w-[75%] overflow-hidden px-20 md:block">
                        <div
                            className="scrolling-text-left flex h-[200%] flex-col gap-10"
                            style={{
                                animation: 'scrollUp 60s linear infinite',
                                willChange: 'transform',
                                transform: 'translateY(0%)'
                            }}
                        >
                            <div className="flex flex-col gap-10">
                                <p className="text-[120px] font-bold leading-relaxed text-[#d4af37]/15">
                                    I am an entrepreneur driven by a relentless passion for innovation, growth, and excellence. My journey began in 2010 with the establishment of The Stage 365, setting the foundation for a multi-industry legacy. Over the years, I have expanded my footprint across real estate, construction, interior design, and event management, building brands that redefine industry standards.
                                </p>
                                <p className="text-[120px] font-bold leading-relaxed text-[#d4af37]/15">
                                    From founding Area24 as a premium real estate solutions provider to evolving it into a fully integrated development and consulting firm, my ventures have consistently focused on quality, sustainability, and customer-centric solutions. The launch of Atha Construction Pvt. Ltd. and Nesthetix Designs LLP further strengthened my commitment to engineering excellence and luxury interior design.
                                </p>
                                <p className="text-[120px] font-bold leading-relaxed text-[#d4af37]/15">
                                    Through strategic expansions and corporate structuring, my businesses continue to innovate, transform urban landscapes, and create lasting impact. My entrepreneurial journey is a testament to resilience, vision, and the pursuit of excellence.
                                </p>
                            </div>
                            {/* Duplicate for seamless loop */}
                            <div className="flex flex-col gap-10">
                                <p className="text-[120px] font-bold leading-relaxed text-[#d4af37]/15">
                                    I am an entrepreneur driven by a relentless passion for innovation, growth, and excellence. My journey began in 2010 with the establishment of The Stage 365, setting the foundation for a multi-industry legacy. Over the years, I have expanded my footprint across real estate, construction, interior design, and event management, building brands that redefine industry standards.
                                </p>
                                <p className="text-[120px] font-bold leading-relaxed text-[#d4af37]/15">
                                    From founding Area24 as a premium real estate solutions provider to evolving it into a fully integrated development and consulting firm, my ventures have consistently focused on quality, sustainability, and customer-centric solutions. The launch of Atha Construction Pvt. Ltd. and Nesthetix Designs LLP further strengthened my commitment to engineering excellence and luxury interior design.
                                </p>
                                <p className="text-[120px] font-bold leading-relaxed text-[#d4af37]/15">
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
                            <div className="relative transition-all duration-700 ease-out group-hover:scale-105">
                                {/* Glow effect on hover */}
                                <div className="absolute inset-0 -z-10 rounded-full bg-[#d4af37]/0 blur-3xl transition-all duration-700 ease-out group-hover:bg-[#d4af37]/20 group-hover:blur-[60px]" />
                                <img
                                    src="/images/avatar.png"
                                    alt="Arunar portrait"
                                    className="aspect-[3/4] w-full max-h-[95vh] object-contain transition-all duration-700 ease-out"
                                    style={{ clipPath: 'ellipse(78% 65% at 50% 42%)' }}
                                />
                            </div>
                        </div>
                        <div className="flex flex-col justify-center space-y-6">
                            <blockquote className="relative mx-auto w-full max-w-2xl overflow-hidden p-10 text-lg leading-relaxed text-white/90 transition-all duration-700 ease-out group-hover:text-white group-hover:drop-shadow-[0_0_20px_rgba(212,175,55,0.3)]">
                                <span className="absolute left-6 top-6 text-5xl text-[#d4af37] transition-all duration-700 ease-out group-hover:text-[#d4af37] group-hover:drop-shadow-[0_0_15px_rgba(212,175,55,0.5)]">"</span>
                                <p className="pl-8 leading-relaxed tracking-wide uppercase transition-all duration-700 ease-out" style={{ wordSpacing: '0.2em' }}>
                                    YOU DON'T JUST BUILD COMPANIES;
                                    <br />
                                    YOU BUILD LEGACIES THAT STAND
                                    <br />
                                    THE TEST OF TIME.
                                </p>
                                <div className="mt-8 flex items-center gap-6 pl-8">
                                    <div className="h-px flex-1 bg-gradient-to-r from-transparent via-[#d4af37] to-transparent transition-all duration-700 ease-out group-hover:via-[#d4af37] group-hover:shadow-[0_0_10px_rgba(212,175,55,0.4)]" />
                                    <div className="text-right">
                                        <p className="text-base font-semibold uppercase tracking-[0.18em] text-[#d4af37] transition-all duration-700 ease-out group-hover:text-[#d4af37] group-hover:drop-shadow-[0_0_10px_rgba(212,175,55,0.4)]">ARUN KUMAR AR</p>
                                    </div>
                                </div>
                            </blockquote>
                        </div>
                    </div>
                </section>

                {/* Timeline */}
                <div className="w-full py-16 sm:py-24 bg-black space-y-8">
                    <div className="mx-auto max-w-6xl px-6 text-center space-y-4">
                        <h2 className="text-4xl font-bold uppercase tracking-[0.22em] text-[#d4af37]">Our Journey</h2>
                        <p className="text-lg text-white/80 max-w-2xl mx-auto">
                            A timeline of milestones that shaped our vision, from foundation to innovation across real estate, construction, interiors, and media.
                        </p>
                    </div>
                    <section className="relative h-[45rem] overflow-hidden bg-black text-white sm:h-[40rem]">
                        {/* Background */}
                        <Swiper
                            modules={[Navigation, Pagination]}
                            direction="vertical"
                            speed={800}
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
                            className="timeline-swiper timeline-swiper-vertical h-full w-full"
                            onSwiper={(swiper) => setTimelineSwiper(swiper)}
                            onSlideChange={(swiper) => setActiveTimelineIndex(swiper.activeIndex)}
                            onSlideChangeTransitionStart={() => setTimelineTransitioning(true)}
                            onSlideChangeTransitionEnd={() => setTimelineTransitioning(false)}
                        >
                            {milestones.map((milestone, idx) => (
                                <SwiperSlide key={milestone.year}>
                                    <div
                                        className="relative flex h-full w-full items-center justify-center py-12"
                                        style={{
                                            backgroundImage: `linear-gradient(90deg, rgba(0,0,0,0.85) 0%, rgba(0,0,0,0.5) 30%, rgba(0,0,0,0.5) 70%, rgba(0,0,0,0.85) 100%), url('${milestone.image}')`,
                                            backgroundSize: 'cover',
                                            backgroundPosition: 'center',
                                        }}
                                    >
                                        <div className="absolute inset-0 bg-black/40 backdrop-blur-[1px]" />
                                        
                                        {/* Mobile: Simple Stacked Layout */}
                                        <div
                                            className={`relative z-10 flex w-full flex-col items-start justify-center gap-4 px-6 py-8 transition-all duration-500 ease-out sm:hidden ${
                                                timelineTransitioning ? 'opacity-0 translate-y-2 pointer-events-none' : 'opacity-100 translate-y-0'
                                            }`}
                                        >
                                            <p className="text-3xl font-bold uppercase tracking-[0.22em] text-[#d4af37]">{milestone.year}</p>
                                            <h2 className="text-xl font-semibold leading-tight text-white">{milestone.title}</h2>
                                            <p className="text-sm leading-relaxed text-white/90">
                                                {milestone.detail}
                                            </p>
                                            <div className="mt-4 flex items-center gap-4">
                                                <button className="swiper-button-prev-timeline flex h-10 w-10 items-center justify-center rounded-full border border-white/30 bg-black/50 text-[#d4af37] backdrop-blur-sm transition hover:bg-black/70">
                                                    <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 15l7-7 7 7" />
                                                    </svg>
                                                </button>
                                                <span className="text-xs text-white/60">
                                                    {activeTimelineIndex + 1} / {milestones.length}
                                                </span>
                                                <button className="swiper-button-next-timeline flex h-10 w-10 items-center justify-center rounded-full border border-white/30 bg-black/50 text-[#d4af37] backdrop-blur-sm transition hover:bg-black/70">
                                                    <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                                    </svg>
                                                </button>
                                            </div>
                                        </div>

                                        {/* Desktop: Left Year/Title, Center Description, Right Vertical Nav Layout */}
                                        <div
                                            className={`relative z-10 hidden w-full max-w-7xl mx-auto px-6 transition-all duration-500 ease-out sm:flex sm:items-center sm:justify-center gap-x-10 lg:px-10 ${
                                                timelineTransitioning ? 'opacity-0 translate-y-2 pointer-events-none' : 'opacity-100 translate-y-0'
                                            }`}
                                        >
                                            <div className="flex-shrink-0 w-72 flex flex-col gap-4">
                                                <p className="text-5xl font-bold uppercase tracking-[0.22em] text-[#d4af37]">{milestone.year}</p>
                                                <h2 className="text-3xl font-semibold leading-tight text-white lg:text-4xl">{milestone.title}</h2>
                                            </div>
                                            <div className="flex-1 flex flex-col gap-6 max-w-2xl">
                                                <p className="text-base leading-relaxed text-white/90 lg:text-lg">
                                                    {milestone.detail}
                                                </p>
                                            </div>
                                            <div className="h-48 w-px bg-white/25 rounded-full self-center" />
                                            <div className="flex-shrink-0 flex flex-col items-center justify-center gap-3">
                                                <button className="swiper-button-prev-timeline z-10 flex h-10 w-10 items-center justify-center rounded-full border border-white/25 bg-black/60 text-[#d4af37] backdrop-blur-sm transition hover:scale-105 hover:border-[#d4af37]/60 hover:bg-black/80">
                                                    <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 15l7-7 7 7" />
                                                    </svg>
                                                </button>
                                                {milestones.map((yearItem, yearIdx) => (
                                                    <button
                                                        key={yearItem.year}
                                                        onClick={(e) => {
                                                            e.preventDefault();
                                                            e.stopPropagation();
                                                            if (timelineSwiper && timelineSwiper.slideTo) {
                                                                timelineSwiper.slideTo(yearIdx, 800);
                                                            }
                                                        }}
                                                        className={`text-xs transition-opacity hover:opacity-80 ${
                                                            yearIdx === activeTimelineIndex
                                                                ? 'text-[#d4af37] tracking-[0.22em] font-bold'
                                                                : 'text-white/70'
                                                        }`}
                                                    >
                                                        {yearItem.year}
                                                    </button>
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
            </div>
        </SiteLayout>
    );
}

