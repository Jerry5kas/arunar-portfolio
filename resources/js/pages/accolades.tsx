import SiteLayout from '@/layouts/site-layout';
import { Head } from '@inertiajs/react';

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
    return (
        <SiteLayout>
            <Head title="Awards & Recognitions" />
            <section className="relative min-h-screen overflow-hidden bg-black text-white py-12 sm:py-16 md:py-20 lg:py-24">
                {/* Background overlay */}
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(212,175,55,0.08),transparent_70%)]" />
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/20 to-black/40" />
                
                <div className="relative z-10 container mx-auto px-4 sm:px-6 md:px-8 lg:px-20">
                    <div className="max-w-5xl mx-auto">
                        {/* Section Header */}
                        <div className="text-center mb-12 sm:mb-16 md:mb-20">
                            <div className="overflow-hidden mb-4 sm:mb-5">
                                <p className="text-xs sm:text-sm uppercase tracking-[0.28em] text-[#d4af37] font-medium">Awards & Recognitions</p>
                            </div>
                            <div className="flex items-center justify-center gap-2 sm:gap-3 md:gap-4 mb-6 sm:mb-8">
                                <div className="h-px w-8 sm:w-12 md:w-16 bg-gradient-to-r from-transparent via-[#d4af37]/30 to-[#d4af37]" />
                                <div className="h-1 w-1 sm:h-1.5 sm:w-1.5 rounded-full bg-[#d4af37]" />
                                <div className="h-px w-8 sm:w-12 md:w-16 bg-gradient-to-l from-transparent via-[#d4af37]/30 to-[#d4af37]" />
                            </div>
                            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold text-white mb-4 sm:mb-6">
                                Milestones that define the journey
                            </h1>
                            <p className="max-w-3xl mx-auto text-sm sm:text-base md:text-lg text-white/80 font-light leading-relaxed">
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
                                                        <div className="absolute inset-0 bg-gradient-to-br from-[#d4af37]/10 via-transparent to-transparent z-10"></div>
                                                        <img 
                                                            src={item.image} 
                                                            alt={item.title}
                                                            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                                                        />
                                                        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent z-10"></div>
                                                        
                                                        {/* Decorative Corner */}
                                                        <div className={`absolute top-0 ${isEven ? 'left-0' : 'right-0'} w-20 h-20 border-t-2 ${isEven ? 'border-l-2' : 'border-r-2'} border-[#d4af37]/30 z-20`}></div>
                                                    </div>
                                                    
                                                    {/* Floating Number Badge */}
                                                    <div className={`absolute ${isEven ? '-left-4' : '-right-4'} top-1/2 transform -translate-y-1/2 z-30 hidden md:block`}>
                                                        <div className="w-12 h-12 rounded-full bg-[#d4af37]/20 backdrop-blur-sm border border-[#d4af37]/30 flex items-center justify-center group-hover:bg-[#d4af37]/30 group-hover:scale-110 transition-all duration-500">
                                                            <span className="text-sm font-semibold text-[#d4af37]">{String(index + 1).padStart(2, '0')}</span>
                                                        </div>
                                                    </div>
                                                </div>

                                                {/* Content Section */}
                                                <div className={`flex-1 w-full md:w-3/5 space-y-4 md:space-y-5 ${
                                                    isEven ? 'md:text-left' : 'md:text-right'
                                                }`}>
                                                    <div className="space-y-2">
                                                        <div className="inline-block">
                                                            <span className="text-xs uppercase tracking-[0.3em] text-[#d4af37] font-medium">
                                                                Achievement {String(index + 1).padStart(2, '0')}
                                                            </span>
                                                        </div>
                                                        <h3 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-white leading-tight group-hover:text-[#d4af37] transition-colors duration-500">
                                                            {item.title}
                                                        </h3>
                                                    </div>
                                                    <p className="text-sm sm:text-base md:text-lg text-white/70 font-light leading-relaxed max-w-2xl">
                                                        {item.detail}
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
                </div>
            </section>

            {/* Voice of Trust Section */}
            <section className="relative overflow-hidden bg-black text-white py-12 sm:py-16 md:py-20 lg:py-24">
                {/* Background overlay */}
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(212,175,55,0.06),transparent_70%)]" />
                <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-black/40" />
                
                <div className="relative z-10 container mx-auto px-4 sm:px-6 md:px-8 lg:px-20">
                    <div className="max-w-6xl mx-auto">
                        {/* Section Header */}
                        <div className="text-center mb-12 sm:mb-16 md:mb-20">
                            <div className="overflow-hidden mb-4 sm:mb-5">
                                <p className="text-xs sm:text-sm uppercase tracking-[0.28em] text-[#d4af37] font-medium">Voice of Trust</p>
                            </div>
                            <div className="flex items-center justify-center gap-2 sm:gap-3 md:gap-4 mb-6 sm:mb-8">
                                <div className="h-px w-8 sm:w-12 md:w-16 bg-gradient-to-r from-transparent via-[#d4af37]/30 to-[#d4af37]" />
                                <div className="h-1 w-1 sm:h-1.5 sm:w-1.5 rounded-full bg-[#d4af37]" />
                                <div className="h-px w-8 sm:w-12 md:w-16 bg-gradient-to-l from-transparent via-[#d4af37]/30 to-[#d4af37]" />
                            </div>
                            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold text-white mb-4 sm:mb-6">
                                Trusted by Leaders
                            </h2>
                            <p className="max-w-3xl mx-auto text-sm sm:text-base md:text-lg text-white/80 font-light leading-relaxed">
                                What industry leaders and partners say about our commitment to excellence and innovation.
                            </p>
                        </div>

                        {/* Testimonials Grid */}
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 md:gap-10">
                            {/* Testimonial Card 1 */}
                            <div className="group relative p-6 sm:p-8 bg-black/30 backdrop-blur-sm rounded-xl border border-[#d4af37]/10 hover:border-[#d4af37]/30 transition-all duration-500 hover:scale-[1.02] hover:-translate-y-1 hover:shadow-[0_0_30px_rgba(212,175,55,0.15)]">
                                <div className="absolute top-4 left-4 text-4xl text-[#d4af37]/20 font-serif">"</div>
                                <div className="relative z-10 space-y-4">
                                    <p className="text-sm sm:text-base text-white/80 font-light leading-relaxed italic">
                                        Exceptional quality and attention to detail. Their projects consistently exceed expectations and set new industry standards.
                                    </p>
                                    <div className="pt-4 border-t border-[#d4af37]/10">
                                        <p className="text-sm font-semibold text-white">Industry Leader</p>
                                        <p className="text-xs text-white/60 font-light">Real Estate Sector</p>
                                    </div>
                                </div>
                            </div>

                            {/* Testimonial Card 2 */}
                            <div className="group relative p-6 sm:p-8 bg-black/30 backdrop-blur-sm rounded-xl border border-[#d4af37]/10 hover:border-[#d4af37]/30 transition-all duration-500 hover:scale-[1.02] hover:-translate-y-1 hover:shadow-[0_0_30px_rgba(212,175,55,0.15)]">
                                <div className="absolute top-4 left-4 text-4xl text-[#d4af37]/20 font-serif">"</div>
                                <div className="relative z-10 space-y-4">
                                    <p className="text-sm sm:text-base text-white/80 font-light leading-relaxed italic">
                                        A visionary approach to construction and design. Their sustainable practices and innovative solutions are truly commendable.
                                    </p>
                                    <div className="pt-4 border-t border-[#d4af37]/10">
                                        <p className="text-sm font-semibold text-white">Business Partner</p>
                                        <p className="text-xs text-white/60 font-light">Construction Industry</p>
                                    </div>
                                </div>
                            </div>

                            {/* Testimonial Card 3 */}
                            <div className="group relative p-6 sm:p-8 bg-black/30 backdrop-blur-sm rounded-xl border border-[#d4af37]/10 hover:border-[#d4af37]/30 transition-all duration-500 hover:scale-[1.02] hover:-translate-y-1 hover:shadow-[0_0_30px_rgba(212,175,55,0.15)]">
                                <div className="absolute top-4 left-4 text-4xl text-[#d4af37]/20 font-serif">"</div>
                                <div className="relative z-10 space-y-4">
                                    <p className="text-sm sm:text-base text-white/80 font-light leading-relaxed italic">
                                        Professional excellence and unwavering commitment to customer satisfaction. A trusted partner for premium projects.
                                    </p>
                                    <div className="pt-4 border-t border-[#d4af37]/10">
                                        <p className="text-sm font-semibold text-white">Client</p>
                                        <p className="text-xs text-white/60 font-light">Luxury Development</p>
                                    </div>
                                </div>
                            </div>

                            {/* Testimonial Card 4 */}
                            <div className="group relative p-6 sm:p-8 bg-black/30 backdrop-blur-sm rounded-xl border border-[#d4af37]/10 hover:border-[#d4af37]/30 transition-all duration-500 hover:scale-[1.02] hover:-translate-y-1 hover:shadow-[0_0_30px_rgba(212,175,55,0.15)]">
                                <div className="absolute top-4 left-4 text-4xl text-[#d4af37]/20 font-serif">"</div>
                                <div className="relative z-10 space-y-4">
                                    <p className="text-sm sm:text-base text-white/80 font-light leading-relaxed italic">
                                        Their interior design work transforms spaces into masterpieces. Every project reflects sophistication and elegance.
                                    </p>
                                    <div className="pt-4 border-t border-[#d4af37]/10">
                                        <p className="text-sm font-semibold text-white">Design Enthusiast</p>
                                        <p className="text-xs text-white/60 font-light">Residential Client</p>
                                    </div>
                                </div>
                            </div>

                            {/* Testimonial Card 5 */}
                            <div className="group relative p-6 sm:p-8 bg-black/30 backdrop-blur-sm rounded-xl border border-[#d4af37]/10 hover:border-[#d4af37]/30 transition-all duration-500 hover:scale-[1.02] hover:-translate-y-1 hover:shadow-[0_0_30px_rgba(212,175,55,0.15)]">
                                <div className="absolute top-4 left-4 text-4xl text-[#d4af37]/20 font-serif">"</div>
                                <div className="relative z-10 space-y-4">
                                    <p className="text-sm sm:text-base text-white/80 font-light leading-relaxed italic">
                                        Outstanding event production and media services. They bring creativity and professionalism to every engagement.
                                    </p>
                                    <div className="pt-4 border-t border-[#d4af37]/10">
                                        <p className="text-sm font-semibold text-white">Event Organizer</p>
                                        <p className="text-xs text-white/60 font-light">Corporate Events</p>
                                    </div>
                                </div>
                            </div>

                            {/* Testimonial Card 6 */}
                            <div className="group relative p-6 sm:p-8 bg-black/30 backdrop-blur-sm rounded-xl border border-[#d4af37]/10 hover:border-[#d4af37]/30 transition-all duration-500 hover:scale-[1.02] hover:-translate-y-1 hover:shadow-[0_0_30px_rgba(212,175,55,0.15)]">
                                <div className="absolute top-4 left-4 text-4xl text-[#d4af37]/20 font-serif">"</div>
                                <div className="relative z-10 space-y-4">
                                    <p className="text-sm sm:text-base text-white/80 font-light leading-relaxed italic">
                                        Reliable, innovative, and results-driven. Their consultancy has been instrumental in our strategic growth.
                                    </p>
                                    <div className="pt-4 border-t border-[#d4af37]/10">
                                        <p className="text-sm font-semibold text-white">Executive</p>
                                        <p className="text-xs text-white/60 font-light">Business Advisory</p>
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

