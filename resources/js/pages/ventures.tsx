import SiteLayout from '@/layouts/site-layout';
import { Head } from '@inertiajs/react';

const ventures = [
    {
        name: 'Area24 Developers Pvt. Ltd.',
        summary:
            'A leading real estate development firm specializing in premium residential and commercial projects. Focused on innovation, sustainability, and delivering world-class living spaces.',
        logo: '/images/logo/area24one.jpeg',
    },
    {
        name: 'Atha Construction Pvt. Ltd.',
        summary:
            'A construction company committed to engineering excellence, structural innovation, and high-quality craftsmanship. Creating durable, sustainable, and aesthetically superior developments.',
        logo: '/images/logo/athaconstructions.jpeg',
    },
    {
        name: 'Nesthetix Designs LLP',
        summary:
            'A luxury interior design firm transforming spaces with bespoke designs, modern aesthetics, and functional elegance. Specializing in high-end residential and commercial interiors.',
        logo: '/images/logo/nesthetix.jpeg',
    },
    {
        name: 'The Stage 365',
        summary:
            'A premier event production and brand activation company delivering immersive experiences. Recognized for its expertise in corporate gatherings, social celebrations, and digital marketing.',
        logo: '/images/logo/stage365.jpeg',
    },
    {
        name: 'Area24 Realty',
        summary:
            'A trusted real estate consultancy offering end-to-end property solutions, including sales, investment advisory, and market insights. Streamlining transactions with expertise and transparency.',
        logo: '/images/logo/area24Realty.jpeg',
    },
];

export default function Ventures() {
    return (
        <SiteLayout>
            <Head title="Ventures" />
            <section className="relative min-h-screen overflow-hidden bg-black text-white py-12 sm:py-16 md:py-20 lg:py-24">
                {/* Background overlay */}
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(212,175,55,0.08),transparent_70%)]" />
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/20 to-black/40" />
                
                <div className="relative z-10 container mx-auto px-4 sm:px-6 md:px-8 lg:px-20">
                    <div className="max-w-6xl mx-auto">
                        {/* Section Header */}
                        <div className="text-center mb-12 sm:mb-16 md:mb-20">
                            <div className="overflow-hidden mb-4 sm:mb-5">
                                <p className="text-xs sm:text-sm uppercase tracking-[0.28em] text-[#d4af37] font-medium">Portfolio Ventures</p>
                            </div>
                            <div className="flex items-center justify-center gap-2 sm:gap-3 md:gap-4 mb-6 sm:mb-8">
                                <div className="h-px w-8 sm:w-12 md:w-16 bg-gradient-to-r from-transparent via-[#d4af37]/30 to-[#d4af37]" />
                                <div className="h-1 w-1 sm:h-1.5 sm:w-1.5 rounded-full bg-[#d4af37]" />
                                <div className="h-px w-8 sm:w-12 md:w-16 bg-gradient-to-l from-transparent via-[#d4af37]/30 to-[#d4af37]" />
                            </div>
                            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold text-white mb-4 sm:mb-6">
                                Building brands that redefine their categories
                            </h1>
                            <p className="max-w-3xl mx-auto text-sm sm:text-base md:text-lg text-white/80 font-light leading-relaxed">
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
                                    >
                                        <div 
                                            className={`flex flex-col md:flex-row items-center gap-8 md:gap-12 transition-all duration-700 ease-out hover:scale-[1.01] ${
                                                isEven ? 'md:flex-row' : 'md:flex-row-reverse'
                                            }`}
                                        >
                                            {/* Logo Section */}
                                            <div className={`relative w-full md:w-2/5 flex-shrink-0 ${
                                                isEven ? 'md:pr-8' : 'md:pl-8'
                                            }`}>
                                                <div className="relative aspect-square max-w-xs mx-auto md:max-w-none">
                                                    <div className="absolute inset-0 bg-gradient-to-br from-[#d4af37]/10 via-transparent to-transparent rounded-2xl"></div>
                                                    <div className="relative w-full h-full bg-black/30 backdrop-blur-sm border border-[#d4af37]/10 rounded-2xl p-6 sm:p-8 md:p-10 flex items-center justify-center group-hover:border-[#d4af37]/30 transition-all duration-500 group-hover:shadow-[0_0_30px_rgba(212,175,55,0.15)]">
                                                        <img 
                                                            src={venture.logo} 
                                                            alt={venture.name}
                                                            className="w-full h-full object-contain opacity-90 group-hover:opacity-100 transition-opacity duration-500"
                                                        />
                                                    </div>
                                                </div>
                                            </div>

                                            {/* Content Section */}
                                            <div className={`flex-1 w-full md:w-3/5 space-y-4 md:space-y-6 ${
                                                isEven ? 'md:text-left' : 'md:text-right'
                                            }`}>
                                                <div className="space-y-3">
                                                    <div className="inline-block">
                                                        <span className="text-xs uppercase tracking-[0.3em] text-[#d4af37] font-medium">
                                                            Venture {String(index + 1).padStart(2, '0')}
                                                        </span>
                                                    </div>
                                                    <h3 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-white leading-tight group-hover:text-[#d4af37] transition-colors duration-500">
                                                        {venture.name}
                                                    </h3>
                                                </div>
                                                <p className="text-sm sm:text-base md:text-lg text-white/70 font-light leading-relaxed max-w-2xl">
                                                    {venture.summary}
                                                </p>
                                                
                                                {/* Decorative Line */}
                                                <div className={`h-px w-16 bg-gradient-to-r ${isEven ? 'from-[#d4af37] to-transparent' : 'from-transparent to-[#d4af37]'} group-hover:w-24 transition-all duration-500`}></div>
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

