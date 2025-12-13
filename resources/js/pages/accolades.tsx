import SiteLayout from '@/layouts/site-layout';
import { Head } from '@inertiajs/react';
import { motion } from 'framer-motion';
import { fadeUp } from '@/Animations/motionPresets';
import useAOSRefresh from '@/hooks/useAOSRefresh';
import LazyImage from '@/components/LazyImage';

const achievements = [
    {
        title: 'Multi-vertical Expansion',
        detail:
            'Evolved from The Stage 365 (2010) into a portfolio spanning real estate, construction, interiors, media, and consultancy, each with independent leadership.',
        image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&h=600&fit=crop',
    },
    {
        title: 'Area24 Developers Pvt. Ltd.',
        detail:
            'Scaled premium residential and commercial developments with a sustainability-first approach and customer-centric delivery.',
        image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&h=600&fit=crop',
    },
    {
        title: 'Atha Construction Pvt. Ltd.',
        detail:
            'Spun off as a dedicated construction arm focused on eco-friendly materials, structural innovation, and high quality execution.',
        image: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=800&h=600&fit=crop',
    },
    {
        title: 'Nesthetix Designs LLP',
        detail:
            'Rebranded interior design division into a bespoke luxury studio delivering high-end residential and commercial interiors.',
        image: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=800&h=600&fit=crop',
    },
    {
        title: 'Stagecstatic365 Media House LLP',
        detail:
            'Built an experiential media and events engine for live productions, brand activations, and immersive storytelling.',
        image: 'https://images.unsplash.com/photo-1478147427282-58a87a120781?w=800&h=600&fit=crop',
    },
    {
        title: 'Area24 Realty',
        detail:
            'Established end-to-end real estate consultancy with investment advisory, market insights, and transparent transaction support.',
        image: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=800&h=600&fit=crop',
    },
];

export default function Accolades() {
    useAOSRefresh();

    return (
        <SiteLayout>
            <Head title="Awards & Recognitions" />
            <section className="relative min-h-screen overflow-hidden bg-[#F9F9F7] text-[#0E0E0E] py-16 sm:py-20 md:py-24 lg:py-32">
                <div className="relative z-10 container mx-auto px-4 sm:px-6 md:px-8 lg:px-20">
                    <div className="max-w-5xl mx-auto">
                        {/* Section Header */}
                        <div 
                            className="text-center mb-16 sm:mb-20 md:mb-24"
                            data-aos="fade-up"
                        >
                            <motion.div 
                                className="overflow-hidden mb-5 sm:mb-6"
                                variants={fadeUp}
                                initial="hidden"
                                animate="visible"
                            >
                                <p className="text-xs sm:text-sm uppercase tracking-[0.28em] text-[#7A7A7A] font-medium">Awards & Recognitions</p>
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
                                Milestones that define the journey
                            </h1>
                            <p 
                                className="max-w-3xl mx-auto text-base sm:text-lg md:text-xl text-[#555555] font-body leading-relaxed"
                                data-aos="fade-up"
                                data-aos-delay="150"
                            >
                                Every venture, award, and expansion reflects a commitment to quality, sustainability, and customer-first delivery.
                            </p>
                        </div>

                        {/* Achievements - Stepped Layout */}
                        <div className="relative">
                            <div className="space-y-16 sm:space-y-20 md:space-y-24">
                                {achievements.map((item, index) => {
                                    const isEven = index % 2 === 0;
                                    return (
                                        <div 
                                            key={item.title}
                                            className="relative"
                                            data-aos={isEven ? "fade-left" : "fade-right"}
                                            data-aos-delay={index * 150}
                                        >
                                            <div 
                                                className={`group relative flex flex-col md:flex-row items-center gap-6 md:gap-8 transition-all duration-700 ease-out hover:scale-[1.02] hover:-translate-y-2 ${
                                                    isEven ? 'md:flex-row' : 'md:flex-row-reverse'
                                                }`}
                                            >
                                                {/* Image Section */}
                                                <div className={`relative w-full md:w-2/5 lg:w-2/5 flex-shrink-0 ${
                                                    isEven ? 'md:pr-8' : 'md:pl-8'
                                                }`}>
                                                    <div className="relative aspect-[4/3] overflow-hidden rounded-lg">
                                                        <LazyImage 
                                                            src={item.image} 
                                                            alt={item.title}
                                                            className="w-full h-full object-cover group-hover:opacity-90 transition-opacity duration-700"
                                                        />
                                                        {/* Decorative Corner - Elite Gold */}
                                                        <div className={`absolute top-0 ${isEven ? 'left-0' : 'right-0'} w-20 h-20 border-t-2 ${isEven ? 'border-l-2' : 'border-r-2'} border-[#C9A24D] z-20`}></div>
                                                    </div>
                                                    
                                                    {/* Floating Number Badge */}
                                                    <div className={`absolute ${isEven ? '-left-4' : '-right-4'} top-1/2 transform -translate-y-1/2 z-30 hidden md:block`}>
                                                        <div className="w-12 h-12 rounded-full bg-white border border-[#C9A24D] flex items-center justify-center transition-all duration-700 ease-out">
                                                            <span className="text-sm font-heading font-medium text-[#C9A24D]">{String(index + 1).padStart(2, '0')}</span>
                                                        </div>
                                                    </div>
                                                </div>

                                                {/* Content Section */}
                                                <div className={`flex-1 w-full md:w-3/5 space-y-4 md:space-y-5 ${
                                                    isEven ? 'md:text-left' : 'md:text-right'
                                                }`}>
                                                    <div className="space-y-2">
                                                        <div className="inline-block">
                                                        <span className="text-xs uppercase tracking-[0.3em] text-[#7A7A7A] font-medium">
                                                            Achievement {String(index + 1).padStart(2, '0')}
                                                        </span>
                                                    </div>
                                                    <h3 className="text-2xl sm:text-3xl md:text-4xl font-heading font-medium text-[#0E0E0E] leading-tight group-hover:text-[#C9A24D] transition-colors duration-700 ease-out tracking-[0.02em]">
                                                        {item.title}
                                                    </h3>
                                                </div>
                                                <p className="text-sm sm:text-base md:text-lg text-[#555555] font-body leading-relaxed max-w-2xl">
                                                    {item.detail}
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
                </div>
            </section>

            {/* Voice of Trust Section - Elite White */}
            <section className="relative overflow-hidden bg-[#F9F9F7] text-[#0E0E0E] py-16 sm:py-20 md:py-24 lg:py-32">
                <div className="relative z-10 container mx-auto px-4 sm:px-6 md:px-8 lg:px-20">
                    <div className="max-w-6xl mx-auto">
                        {/* Section Header */}
                        <div 
                            className="text-center mb-16 sm:mb-20 md:mb-24"
                            data-aos="fade-up"
                        >
                            <div className="overflow-hidden mb-5 sm:mb-6">
                                <p className="text-xs sm:text-sm uppercase tracking-[0.28em] text-[#7A7A7A] font-medium">Voice of Trust</p>
                            </div>
                            <div className="flex items-center justify-center gap-3 sm:gap-4 md:gap-5 mb-8 sm:mb-10">
                                <div className="h-px w-12 sm:w-16 md:w-20 bg-[#E5E5E0]" />
                                <div className="h-1 w-1 sm:h-1.5 sm:w-1.5 rounded-full bg-[#C9A24D]" />
                                <div className="h-px w-12 sm:w-16 md:w-20 bg-[#E5E5E0]" />
                            </div>
                            <h2 
                                className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-heading font-medium text-[#0E0E0E] mb-6 sm:mb-8 tracking-[0.02em]"
                                data-aos="fade-up"
                                data-aos-delay="100"
                            >
                                Trusted by Leaders
                            </h2>
                            <p 
                                className="max-w-3xl mx-auto text-base sm:text-lg md:text-xl text-[#555555] font-body leading-relaxed"
                                data-aos="fade-up"
                                data-aos-delay="150"
                            >
                                What industry leaders and partners say about our commitment to excellence and innovation.
                            </p>
                        </div>

                        {/* Testimonials Grid */}
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 md:gap-10">
                            {/* Testimonial Card 1 */}
                            <div 
                                className="group relative p-6 sm:p-8 bg-white rounded-lg border border-[#E5E5E0] hover:border-[#C9A24D] transition-all duration-700 ease-out"
                                data-aos="fade"
                                data-aos-delay="100"
                            >
                                <div className="absolute top-4 left-4 text-4xl text-[#C9A24D]/20 font-accent">"</div>
                                <div className="relative z-10 space-y-4">
                                    <p className="text-sm sm:text-base text-[#555555] font-body leading-relaxed italic">
                                        Exceptional quality and attention to detail. Their projects consistently exceed expectations and set new industry standards.
                                    </p>
                                    <div className="pt-4 border-t border-[#E5E5E0]">
                                        <p className="text-sm font-heading font-medium text-[#0E0E0E]">Industry Leader</p>
                                        <p className="text-xs text-[#7A7A7A] font-body">Real Estate Sector</p>
                                    </div>
                                </div>
                            </div>

                            {/* Testimonial Card 2 */}
                            <div 
                                className="group relative p-6 sm:p-8 bg-white rounded-lg border border-[#E5E5E0] hover:border-[#C9A24D] transition-all duration-700 ease-out"
                                data-aos="fade"
                                data-aos-delay="150"
                            >
                                <div className="absolute top-4 left-4 text-4xl text-[#C9A24D]/20 font-accent">"</div>
                                <div className="relative z-10 space-y-4">
                                    <p className="text-sm sm:text-base text-[#555555] font-body leading-relaxed italic">
                                        A visionary approach to construction and design. Their sustainable practices and innovative solutions are truly commendable.
                                    </p>
                                    <div className="pt-4 border-t border-[#E5E5E0]">
                                        <p className="text-sm font-heading font-medium text-[#0E0E0E]">Business Partner</p>
                                        <p className="text-xs text-[#7A7A7A] font-body">Construction Industry</p>
                                    </div>
                                </div>
                            </div>

                            {/* Testimonial Card 3 */}
                            <div 
                                className="group relative p-6 sm:p-8 bg-white rounded-lg border border-[#E5E5E0] hover:border-[#C9A24D] transition-all duration-700 ease-out"
                                data-aos="fade"
                                data-aos-delay="200"
                            >
                                <div className="absolute top-4 left-4 text-4xl text-[#C9A24D]/20 font-accent">"</div>
                                <div className="relative z-10 space-y-4">
                                    <p className="text-sm sm:text-base text-[#555555] font-body leading-relaxed italic">
                                        Professional excellence and unwavering commitment to customer satisfaction. A trusted partner for premium projects.
                                    </p>
                                    <div className="pt-4 border-t border-[#E5E5E0]">
                                        <p className="text-sm font-heading font-medium text-[#0E0E0E]">Client</p>
                                        <p className="text-xs text-[#7A7A7A] font-body">Luxury Development</p>
                                    </div>
                                </div>
                            </div>

                            {/* Testimonial Card 4 */}
                            <div 
                                className="group relative p-6 sm:p-8 bg-white rounded-lg border border-[#E5E5E0] hover:border-[#C9A24D] transition-all duration-700 ease-out"
                                data-aos="fade"
                                data-aos-delay="100"
                            >
                                <div className="absolute top-4 left-4 text-4xl text-[#C9A24D]/20 font-accent">"</div>
                                <div className="relative z-10 space-y-4">
                                    <p className="text-sm sm:text-base text-[#555555] font-body leading-relaxed italic">
                                        Their interior design work transforms spaces into masterpieces. Every project reflects sophistication and elegance.
                                    </p>
                                    <div className="pt-4 border-t border-[#E5E5E0]">
                                        <p className="text-sm font-heading font-medium text-[#0E0E0E]">Design Enthusiast</p>
                                        <p className="text-xs text-[#7A7A7A] font-body">Residential Client</p>
                                    </div>
                                </div>
                            </div>

                            {/* Testimonial Card 5 */}
                            <div 
                                className="group relative p-6 sm:p-8 bg-white rounded-lg border border-[#E5E5E0] hover:border-[#C9A24D] transition-all duration-700 ease-out"
                                data-aos="fade"
                                data-aos-delay="150"
                            >
                                <div className="absolute top-4 left-4 text-4xl text-[#C9A24D]/20 font-accent">"</div>
                                <div className="relative z-10 space-y-4">
                                    <p className="text-sm sm:text-base text-[#555555] font-body leading-relaxed italic">
                                        Outstanding event production and media services. They bring creativity and professionalism to every engagement.
                                    </p>
                                    <div className="pt-4 border-t border-[#E5E5E0]">
                                        <p className="text-sm font-heading font-medium text-[#0E0E0E]">Event Organizer</p>
                                        <p className="text-xs text-[#7A7A7A] font-body">Corporate Events</p>
                                    </div>
                                </div>
                            </div>

                            {/* Testimonial Card 6 */}
                            <div 
                                className="group relative p-6 sm:p-8 bg-white rounded-lg border border-[#E5E5E0] hover:border-[#C9A24D] transition-all duration-700 ease-out"
                                data-aos="fade"
                                data-aos-delay="200"
                            >
                                <div className="absolute top-4 left-4 text-4xl text-[#C9A24D]/20 font-accent">"</div>
                                <div className="relative z-10 space-y-4">
                                    <p className="text-sm sm:text-base text-[#555555] font-body leading-relaxed italic">
                                        Reliable, innovative, and results-driven. Their consultancy has been instrumental in our strategic growth.
                                    </p>
                                    <div className="pt-4 border-t border-[#E5E5E0]">
                                        <p className="text-sm font-heading font-medium text-[#0E0E0E]">Executive</p>
                                        <p className="text-xs text-[#7A7A7A] font-body">Business Advisory</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </SiteLayout>
    );
}

