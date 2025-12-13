import SiteLayout from '@/layouts/site-layout';
import { Head } from '@inertiajs/react';
import { useState, useRef, useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import { motion } from 'framer-motion';
import { fadeUp } from '@/Animations/motionPresets';
import useAOSRefresh from '@/hooks/useAOSRefresh';
import LazyImage from '@/components/LazyImage';

const milestones = [
    {
        year: '2025',
        title: 'The Rise of Nesthetix Designs LLP',
        detail:
            'Rebranded and expanded the interior design division into Nesthetix Designs LLP, focusing exclusively on bespoke luxury interiors and architectural enhancements. This transformation allowed Nesthetix Designs to establish itself as a premier provider of customized, high-end interior solutions. The company introduced cutting-edge design techniques, blending modern aesthetics with functionality to cater to elite clientele. By emphasizing meticulous craftsmanship, Nesthetix quickly gained recognition for its innovative approach to interiors. With a dedicated team of architects and designers, the firm expanded its portfolio to include luxury residences, commercial spaces, and hospitality projects. The launch of this division marked a significant milestone, setting the foundation for long-term growth and excellence in the field.',
        image: '/images/7.png',
    },
    {
        year: '2024',
        title: 'The Birth of Atha Construction Pvt. Ltd.',
        detail: 'Spun off the construction division into Atha Construction Pvt. Ltd., dedicated to high-quality and sustainable building solutions. This move was driven by the increasing demand for eco-friendly and structurally sound buildings. Atha Construction incorporated state-of-the-art technologies and sustainable materials to meet modern-day infrastructure requirements. With a focus on green building practices, the company delivered projects that adhered to global environmental standards. Through strategic collaborations with architects, engineers, and material suppliers, Atha Construction quickly positioned itself as an industry leader. The formation of this entity provided the company with greater flexibility in handling large-scale residential and commercial developments, ensuring quality control, efficiency, and cost-effectiveness.',
        image: '/images/6.png',
    },
    {
        year: '2023',
        title: 'Corporate Evolution & Growth',
        detail: 'Established Area24 Developers Pvt. Ltd. and Stagecstatic365 Media House LLP, transforming real estate and event media sectors. This milestone represented a shift towards corporate expansion and diversification. Area24 Developers ventured into large-scale residential and commercial projects, providing premium living and business spaces. Meanwhile, Stagecstatic365 Media House focused on media production, live events, and brand activations. By leveraging technology and market insights, both companies expanded their reach, collaborating with renowned industry experts. The evolution into a structured corporate entity enabled the brands to gain investor confidence, secure larger contracts, and establish a long-term roadmap for continued success.',
        image: '/images/5.png',
    },
    {
        year: '2020',
        title: 'Structuring Real Estate into a Proprietorship',
        detail: 'Formalized Area24 Realty as a Proprietorship to enhance operational efficiency, market reach, and customer trust. This strategic move enabled the business to streamline its management and establish stronger client relationships. The decision to operate as a proprietorship provided greater control over financial and operational aspects, ensuring higher transparency. Area24 Realty expanded its services, offering end-to-end real estate solutions, from property consultation to asset management. The restructuring also allowed the company to cater to a broader customer base, including high-net-worth individuals and institutional investors. The rebranding efforts helped solidify its position as a trustworthy and innovative real estate partner.',
        image: '/images/4.png',
    },
    {
        year: '2018',
        title: 'Venturing into Luxury Interior Design',
        detail: 'Expanded into high-end interior design to create personalized, sophisticated spaces, laying the foundation for Nesthetix Designs LLP. The initiative stemmed from the growing demand for aesthetically refined interiors that reflect individual lifestyles. By integrating contemporary trends with timeless elegance, the company developed a signature design philosophy. From residential homes to luxury hotels, Nesthetix Designs curated bespoke interiors tailored to client needs. Attention to detail, premium material selection, and cutting-edge automation further elevated the brand\'s reputation. This strategic move positioned the company as a leader in the luxury interior design sector, paving the way for future growth and innovation.',
        image: '/images/3.png',
    },
    {
        year: '2016',
        title: 'Expansion into Property Development & Management',
        detail: 'Area24 Realty evolved into a full-fledged real estate solutions provider, diversifying into property management, sales, construction, and development. Recognizing a market gap, the company introduced a 360-degree approach to real estate services. The expansion into property management included asset maintenance, rental solutions, and resale consulting. Area24 Realty also ventured into residential and commercial property development, focusing on premium and affordable housing. The integration of construction services allowed seamless project execution, ensuring quality and timely delivery. By broadening its service portfolio, the company strengthened its market presence and created long-term value for its customers and stakeholders.',
        image: '/images/2.png',
    },
    {
        year: '2010',
        title: 'The Foundation of a Vision',
        detail: 'Launched The Stage 365 and established Area24 Realty, marking the beginning of real estate consulting and premium property solutions. The inception of The Stage 365 aimed to revolutionize event management with high-quality corporate and social event planning. Simultaneously, Area24 Realty entered the real estate sector, offering expert consultation services. Over the years, the company built a reputation for excellence, focusing on customer-centric solutions. From the outset, innovation and integrity were the guiding principles, helping both brands achieve remarkable milestones. This visionary approach laid a strong foundation for future growth, diversification, and leadership in their respective industries.',
        image: '/images/1.png',
    },
];

export default function Welcome() {
    useAOSRefresh();
    
    const [activeTimelineIndex, setActiveTimelineIndex] = useState(0);
    const [timelineTransitioning, setTimelineTransitioning] = useState(false);
    const [timelineSwiper, setTimelineSwiper] = useState<any>(null);
    const videoRef = useRef<HTMLVideoElement>(null);

    // Ensure video controls are properly accessible
    useEffect(() => {
        const video = videoRef.current;
        if (video) {
            // Ensure video is ready for seeking
            const handleLoadedMetadata = () => {
                // Video metadata loaded, seeking should work now
                if (video.readyState >= 2) {
                    // Video has enough data to seek
                }
            };

            // Ensure seeking works when video can play
            const handleCanPlay = () => {
                // Video can play, seeking should work
            };

            video.addEventListener('loadedmetadata', handleLoadedMetadata);
            video.addEventListener('canplay', handleCanPlay);

            // Cleanup
            return () => {
                video.removeEventListener('loadedmetadata', handleLoadedMetadata);
                video.removeEventListener('canplay', handleCanPlay);
            };
        }
    }, []);

    return (
        <SiteLayout>
            <Head title="Home" />
            <div className="space-y-0 bg-[#F9F9F7] text-[#0E0E0E]">
                {/* Hero section - Elite White */}
                <section className="relative flex min-h-screen items-center justify-center bg-[#F9F9F7] text-[#0E0E0E]">

                    <div className="relative z-10 w-full px-0 py-8 sm:px-0" style={{ pointerEvents: 'auto' }}>
                        <div className="w-full h-screen max-h-[900px] overflow-hidden" style={{ pointerEvents: 'auto' }}>
                            <video
                                ref={videoRef}
                                src="/video/hero.mp4"
                                poster=""
                                autoPlay
                                muted
                                loop
                                controls
                                controlsList="nodownload"
                                playsInline
                                preload="auto"
                                className="h-full w-full object-cover"
                                style={{ pointerEvents: 'auto' }}
                            />
                        </div>
                    </div>
                </section>

                {/* About with quote, signature, left-side portrait - Elite White */}
                <section className="group relative min-h-screen overflow-hidden bg-[#F9F9F7] transition-all duration-1000 ease-out">
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
                                <p className="text-[120px] font-bold leading-relaxed text-[#C9A24D]/8">
                                    I am an entrepreneur driven by a relentless passion for innovation, growth, and excellence. My journey began in 2010 with the establishment of The Stage 365, setting the foundation for a multi-industry legacy. Over the years, I have expanded my footprint across real estate, construction, interior design, and event management, building brands that redefine industry standards.
                                </p>
                                <p className="text-[120px] font-bold leading-relaxed text-[#C9A24D]/8">
                                    From founding Area24 as a premium real estate solutions provider to evolving it into a fully integrated development and consulting firm, my ventures have consistently focused on quality, sustainability, and customer-centric solutions. The launch of Atha Construction Pvt. Ltd. and Nesthetix Designs LLP further strengthened my commitment to engineering excellence and luxury interior design.
                                </p>
                                <p className="text-[120px] font-bold leading-relaxed text-[#C9A24D]/8">
                                    Through strategic expansions and corporate structuring, my businesses continue to innovate, transform urban landscapes, and create lasting impact. My entrepreneurial journey is a testament to resilience, vision, and the pursuit of excellence.
                                </p>
                            </div>
                            {/* Duplicate for seamless loop */}
                            <div className="flex flex-col gap-10">
                                <p className="text-[120px] font-bold leading-relaxed text-[#C9A24D]/8">
                                    I am an entrepreneur driven by a relentless passion for innovation, growth, and excellence. My journey began in 2010 with the establishment of The Stage 365, setting the foundation for a multi-industry legacy. Over the years, I have expanded my footprint across real estate, construction, interior design, and event management, building brands that redefine industry standards.
                                </p>
                                <p className="text-[120px] font-bold leading-relaxed text-[#C9A24D]/8">
                                    From founding Area24 as a premium real estate solutions provider to evolving it into a fully integrated development and consulting firm, my ventures have consistently focused on quality, sustainability, and customer-centric solutions. The launch of Atha Construction Pvt. Ltd. and Nesthetix Designs LLP further strengthened my commitment to engineering excellence and luxury interior design.
                                </p>
                                <p className="text-[120px] font-bold leading-relaxed text-[#C9A24D]/8">
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

                    <div className="relative z-10 grid min-h-screen gap-10 px-6 sm:px-10 lg:grid-cols-[0.95fr_1.05fr] lg:gap-16 lg:px-14">
                        <div 
                            className="relative mx-auto flex w-full max-w-xl items-end justify-end self-end group"
                            data-aos="fade"
                            data-aos-duration="1200"
                        >
                            <div className="relative transition-transform duration-700 ease-out w-full group-hover:scale-105">
                                <LazyImage
                                    src="/images/avatar.png"
                                    alt="Arunar portrait"
                                    className="w-full max-h-[60vh] sm:max-h-[65vh] lg:max-h-[95vh] object-contain transition-opacity duration-1000 ease-out"
                                />
                                <div className="absolute bottom-0 left-0 right-0 h-1/5 bg-gradient-to-t from-[#F9F9F7]/85 to-transparent pointer-events-none" />
                            </div>
                        </div>
                        <div className="flex flex-col justify-center items-center space-y-8 self-center">
                            <motion.blockquote 
                                className="relative mx-auto w-full max-w-2xl overflow-hidden p-12 text-xl leading-relaxed text-[#0E0E0E] font-accent font-light"
                                variants={fadeUp}
                                initial="hidden"
                                animate="visible"
                            >
                                <span className="absolute left-6 top-6 text-5xl text-[#C9A24D]">"</span>
                                <p className="pl-8 leading-relaxed tracking-[0.02em] uppercase" style={{ wordSpacing: '0.2em' }}>
                                    YOU DON'T JUST BUILD COMPANIES;
                                    <br />
                                    YOU BUILD LEGACIES THAT STAND
                                    <br />
                                    THE TEST OF TIME.
                                </p>
                                <div className="mt-10 flex flex-col items-center gap-4 pl-8">
                                    {/* Decorative divider with ornament */}
                                    <div className="flex items-center gap-4 w-full">
                                        <div className="h-px flex-1 bg-[#C9A24D]"></div>
                                        <div className="flex items-center gap-2">
                                            <div className="h-1.5 w-1.5 rounded-full bg-[#C9A24D]"></div>
                                            <div className="h-px w-8 bg-[#C9A24D]"></div>
                                            <div className="h-1.5 w-1.5 rounded-full bg-[#C9A24D]"></div>
                                        </div>
                                        <div className="h-px flex-1 bg-[#C9A24D]"></div>
                                    </div>
                                    
                                    {/* Name with decorative elements */}
                                    <div className="text-center space-y-2">
                                        <div className="flex items-center justify-center gap-3">
                                            <div className="h-px w-12 bg-[#E5E5E0]"></div>
                                        <p className="text-base font-heading font-medium uppercase tracking-[0.18em] text-[#C9A24D]">ARUN KUMAR AR</p>
                                            <div className="h-px w-12 bg-[#E5E5E0]"></div>
                                        </div>
                                        {/* Subtle decorative accent */}
                                        <div className="flex items-center justify-center gap-2 pt-1">
                                            <div className="h-0.5 w-6 bg-[#C9A24D]/30"></div>
                                            <div className="h-0.5 w-1 bg-[#C9A24D]"></div>
                                            <div className="h-0.5 w-6 bg-[#C9A24D]/30"></div>
                                        </div>
                                    </div>
                                </div>
                            </motion.blockquote>
                        </div>
                    </div>
                </section>

                {/* Timeline - Elite White */}
                <div className="w-full pt-12 pb-24 sm:pt-24 sm:pb-32 bg-[#FFFFFF] space-y-12">
                    <div 
                        className="mx-auto max-w-7xl px-6 text-center space-y-6"
                        data-aos="fade-up"
                    >
                        <h2 className="text-5xl font-heading font-medium uppercase tracking-[0.02em] text-[#0E0E0E]">
                            Our Journey
                        </h2>
                        <p 
                            className="text-lg text-[#555555] max-w-2xl mx-auto font-body"
                            data-aos="fade-up"
                            data-aos-delay="100"
                        >
                            A timeline of milestones that shaped our vision, from foundation to innovation across real estate, construction, interiors, and media.
                        </p>
                    </div>
                    <section 
                        className="relative h-[45rem] overflow-hidden bg-[#F9F9F7] text-[#0E0E0E] sm:h-[40rem]"
                        data-aos="fade"
                        data-aos-duration="1200"
                    >
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
                                        className="relative mx-auto flex h-full w-full max-w-8xl items-center justify-center py-12"
                                        style={{
                                            backgroundImage: `url('${milestone.image}')`,
                                            backgroundSize: 'cover',
                                            backgroundPosition: 'center',
                                        }}
                                    >
                                        {/* Subtle overlay */}
                                        <div className="absolute inset-0 bg-[#F9F9F7]/85" />
                                        
                                        {/* Mobile: Simple Stacked Layout */}
                                        <div
                                            className={`relative z-10 flex w-full flex-col items-start justify-center gap-4 px-6 py-8 transition-all duration-500 ease-out sm:hidden ${
                                                timelineTransitioning ? 'opacity-0 translate-y-2 pointer-events-none' : 'opacity-100 translate-y-0'
                                            }`}
                                        >
                                            <p className="text-3xl font-heading font-medium uppercase tracking-[0.02em] text-[#C9A24D]">{milestone.year}</p>
                                            <h2 className="text-xl font-heading font-medium leading-tight text-[#0E0E0E]">{milestone.title}</h2>
                                            <p className="text-sm leading-relaxed text-[#555555] font-body">
                                                {milestone.detail}
                                            </p>
                                            <div className="mt-4 flex items-center gap-4">
                                                <button className="swiper-button-prev-timeline flex h-10 w-10 items-center justify-center rounded-full border border-[#E5E5E0] bg-white text-[#C9A24D] transition-all duration-700 ease-out hover:border-[#C9A24D]">
                                                    <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 15l7-7 7 7" />
                                                    </svg>
                                                </button>
                                                <span className="text-xs text-white/60">
                                                    {activeTimelineIndex + 1} / {milestones.length}
                                                </span>
                                                <button className="swiper-button-next-timeline flex h-10 w-10 items-center justify-center rounded-full border border-[#E5E5E0] bg-white text-[#C9A24D] transition-all duration-700 ease-out hover:border-[#C9A24D]">
                                                    <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                                    </svg>
                                                </button>
                                            </div>
                                        </div>

                                        {/* Desktop: Left Year/Title, Center Description, Right Vertical Nav Layout */}
                                        <div
                                            className={`relative z-10 hidden w-full max-w-7xl mx-auto transition-all duration-500 ease-out sm:flex sm:items-center sm:justify-center gap-x-10  ${
                                                timelineTransitioning ? 'opacity-0 translate-y-2 pointer-events-none' : 'opacity-100 translate-y-0'
                                            }`}
                                        >
                                            <div className="flex-shrink-0 flex flex-col items-center justify-center gap-3">
                                                <button className="swiper-button-prev-timeline z-10 flex h-10 w-10 items-center justify-center rounded-full border border-[#E5E5E0] bg-white text-[#C9A24D] transition-all duration-700 ease-out hover:border-[#C9A24D]">
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
                                                        className={`relative transition-opacity duration-700 hover:opacity-80 ${
                                                            yearIdx === activeTimelineIndex
                                                                ? 'text-[#C9A24D] text-base sm:text-lg font-heading font-medium tracking-[0.15em] pb-2'
                                                                : 'text-xs text-[#7A7A7A]'
                                                        }`}
                                                    >
                                                        {yearItem.year}
                                                        {yearIdx === activeTimelineIndex && (
                                                            <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#C9A24D] rounded-full" />
                                                        )}
                                                    </button>
                                                ))}
                                                <button className="swiper-button-next-timeline z-10 flex h-10 w-10 items-center justify-center rounded-full border border-[#E5E5E0] bg-white text-[#C9A24D] transition-all duration-700 ease-out hover:border-[#C9A24D]">
                                                    <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                                    </svg>
                                                </button>
                                            </div>

                                            <div className="h-64 w-[2px] bg-[#C9A24D] rounded-full self-center" />

                                            
                                            <div className="flex-1 flex flex-col items-start justify-center gap-6 max-w-xl">
                                                {/* <p className="text-base leading-relaxed text-gray-300 lg:text-lg tracking-wide">
                                                    {milestone.detail}
                                                </p> */}
                                                <p className="text-5xl font-heading font-medium uppercase tracking-[0.02em] text-[#C9A24D]">
                                                    {milestone.year}
                                                </p>
                                                <h2 className="text-3xl font-heading font-medium leading-tight text-[#0E0E0E] lg:text-4xl">{milestone.title}</h2>
                                            </div>

                                            <div className="flex-shrink-0 w-96 flex flex-col gap-4">
                                                <p className="text-base leading-relaxed text-[#555555] lg:text-md tracking-wide text-justify font-body">
                                                    {milestone.detail}
                                                </p>
                                                
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

