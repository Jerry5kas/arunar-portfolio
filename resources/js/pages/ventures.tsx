import SiteLayout from '@/layouts/site-layout';
import { Head } from '@inertiajs/react';
import { motion } from 'framer-motion';
import { fadeUp } from '@/Animations/motionPresets';
import useAOSRefresh from '@/hooks/useAOSRefresh';

const ventures = [
    {
        name: 'Area24 Developers Pvt. Ltd.',
        summary:
            'A leading real estate development firm specializing in premium residential and commercial projects. Focused on innovation, sustainability, and delivering world-class living spaces.',
        logo: '/images/logo/Area 24 one logo-White.png',
    },
    {
        name: 'Atha Construction Pvt. Ltd.',
        summary:
            'A construction company committed to engineering excellence, structural innovation, and high-quality craftsmanship. Creating durable, sustainable, and aesthetically superior developments.',
        logo: '/images/logo/Atha Logo - High Quality-White (1).png',
    },
    {
        name: 'Nesthetix Designs LLP',
        summary:
            'A luxury interior design firm transforming spaces with bespoke designs, modern aesthetics, and functional elegance. Specializing in high-end residential and commercial interiors.',
        logo: '/images/logo/Nesthetix Logo-White.png',
    },
    {
        name: 'The Stage 365',
        summary:
            'A premier event production and brand activation company delivering immersive experiences. Recognized for its expertise in corporate gatherings, social celebrations, and digital marketing.',
        logo: '/images/logo/STAGE 365.png',
    },
    {
        name: 'Area24 Realty',
        summary:
            'A trusted real estate consultancy offering end-to-end property solutions, including sales, investment advisory, and market insights. Streamlining transactions with expertise and transparency.',
        logo: '/images/logo/Area 24 Realty (1).png',
    },
];

export default function Ventures() {
    useAOSRefresh();

    return (
        <SiteLayout>
            <Head title="Ventures" />
            <section className="relative min-h-screen overflow-hidden bg-[#F9F9F7] text-[#0E0E0E] py-16 sm:py-20 md:py-24 lg:py-32">
                
                <div className="relative z-10 container mx-auto px-4 sm:px-6 md:px-8 lg:px-20">
                    <div className="max-w-6xl mx-auto">
                        {/* Section Header */}
                        <div 
                            className="text-center mb-12 sm:mb-16 md:mb-20"
                            data-aos="fade-up"
                        >
                            <motion.div 
                                className="overflow-hidden mb-4 sm:mb-5"
                                variants={fadeUp}
                                initial="hidden"
                                animate="visible"
                            >
                                <p className="text-xs sm:text-sm uppercase tracking-[0.28em] text-[#7A7A7A] font-medium">Portfolio Ventures</p>
                            </motion.div>
                            <div className="flex items-center justify-center gap-3 sm:gap-4 md:gap-5 mb-8 sm:mb-10">
                                <div className="h-px w-12 sm:w-16 md:w-20 bg-[#E5E5E0]" />
                                <div className="h-1 w-1 sm:h-1.5 sm:w-1.5 rounded-full bg-[#C9A24D]" />
                                <div className="h-px w-12 sm:w-16 md:w-20 bg-[#E5E5E0]" />
                            </div>
                            <h1 
                                className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-heading font-medium text-[#0E0E0E] mb-6 sm:mb-8 tracking-[0.02em]"
                                data-aos="fade-up"
                                data-aos-delay="100"
                            >
                                Building brands that redefine their categories
                            </h1>
                            <p 
                                className="max-w-3xl mx-auto text-base sm:text-lg md:text-xl text-[#555555] font-body leading-relaxed"
                                data-aos="fade-up"
                                data-aos-delay="150"
                            >
                                From development and construction to interiors, events, and advisory—each venture is crafted to deliver quality, sustainability, and immersive experiences.
                            </p>
                        </div>

                        {/* Ventures Grid */}
                        <div className="space-y-12 sm:space-y-16 md:space-y-20">
                            {ventures.map((venture, index) => {
                                const isEven = index % 2 === 0;
                                return (
                                    <div 
                                        key={venture.name}
                                        className="group relative"
                                        data-aos={isEven ? "fade-left" : "fade-right"}
                                        data-aos-delay={index * 150}
                                    >
                                        <div 
                                            className={`flex flex-col md:flex-row items-center gap-10 md:gap-14 transition-all duration-1000 ease-out ${
                                                isEven ? 'md:flex-row' : 'md:flex-row-reverse'
                                            }`}
                                        >
                                            {/* Logo Section */}
                                            <div className={`relative w-full md:w-2/5 flex-shrink-0 ${
                                                isEven ? 'md:pr-8' : 'md:pl-8'
                                            }`}>
                                                <div className="relative aspect-square max-w-xs mx-auto md:max-w-none">
                                                    <div className="relative w-full h-full bg-white border border-[#E5E5E0] rounded-lg p-6 sm:p-8 md:p-10 flex items-center justify-center group-hover:border-[#C9A24D] transition-all duration-700 ease-out">
                                                        <img 
                                                            src={venture.logo} 
                                                            alt={venture.name}
                                                            className="w-full h-full object-contain opacity-90 group-hover:opacity-100 transition-opacity duration-700"
                                                        />
                                                    </div>
                                                </div>
                                            </div>

                                            {/* Content Section */}
                                            <div className={`flex-1 w-full md:w-3/5 space-y-5 md:space-y-7 ${
                                                isEven ? 'md:text-left' : 'md:text-right'
                                            }`}>
                                                <div className="space-y-4">
                                                    <div className="inline-block">
                                                        <span className="text-xs uppercase tracking-[0.3em] text-[#7A7A7A] font-medium">
                                                            Venture {String(index + 1).padStart(2, '0')}
                                                        </span>
                                                    </div>
                                                    <h3 className="text-2xl sm:text-3xl md:text-4xl font-heading font-medium text-[#0E0E0E] leading-tight group-hover:text-[#C9A24D] transition-colors duration-700 ease-out tracking-[0.02em]">
                                                        {venture.name}
                                                    </h3>
                                                </div>
                                                <p className="text-sm sm:text-base md:text-lg text-[#555555] font-body leading-relaxed max-w-2xl">
                                                    {venture.summary}
                                                </p>
                                                
                                                {/* Decorative Line */}
                                                <div className={`h-px w-16 bg-[#C9A24D] ${isEven ? '' : 'ml-auto'} group-hover:w-24 transition-all duration-700 ease-out`}></div>
                                            </div>
                                        </div>
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                </div>
            </section>
        </SiteLayout>
    );
}

