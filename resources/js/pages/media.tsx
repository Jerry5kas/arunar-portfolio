import SiteLayout from '@/layouts/site-layout';
import { Head } from '@inertiajs/react';

const imageHighlights = [
    { 
        label: 'Flagship Development', 
        image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&h=600&fit=crop',
        size: 'large'
    },
    { 
        label: 'Sustainable Construction', 
        image: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=800&h=600&fit=crop',
        size: 'medium'
    },
    { 
        label: 'Luxury Interior Suite', 
        image: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=800&h=600&fit=crop',
        size: 'medium'
    },
    { 
        label: 'Immersive Event Build', 
        image: 'https://images.unsplash.com/photo-1478147427282-58a87a120781?w=800&h=600&fit=crop',
        size: 'small'
    },
    { 
        label: 'Media Production', 
        image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&h=600&fit=crop',
        size: 'small'
    },
    { 
        label: 'Advisory & Consulting', 
        image: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=800&h=600&fit=crop',
        size: 'large'
    },
    { 
        label: 'Project Launch', 
        image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&h=600&fit=crop',
        size: 'medium'
    },
    { 
        label: 'Design Excellence', 
        image: 'https://images.unsplash.com/photo-1497366754035-f200968a6e72?w=800&h=600&fit=crop',
        size: 'small'
    },
];

const videoReels = [
    {
        title: 'Cinematic Reel',
        description: 'A showcase of recent brand films and atmospheric hero sequences.',
        src: 'https://storage.googleapis.com/coverr-main/mp4/Mt_Baker.mp4',
        poster: 'https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1200&q=80',
    },
    {
        title: 'Event Highlights',
        description: 'Immersive event builds and brand activations across sectors.',
        src: 'https://storage.googleapis.com/coverr-main/mp4/Footboys.mp4',
        poster: 'https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1200&q=80',
    },
    {
        title: 'Behind the Scenes',
        description: 'Exclusive look into our creative process and team collaboration.',
        src: 'https://storage.googleapis.com/coverr-main/mp4/Mt_Baker.mp4',
        poster: 'https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1200&q=80',
    },
];

export default function Media() {
    return (
        <SiteLayout>
            <Head title="Media" />
            <div className="bg-black text-white">
                {/* Header Section */}
                <section className="relative overflow-hidden bg-black text-white py-12 sm:py-16 md:py-20 lg:py-24">
                    {/* Background overlay */}
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(212,175,55,0.08),transparent_70%)]" />
                    <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/20 to-black/40" />
                    
                    <div className="relative z-10 container mx-auto px-4 sm:px-6 md:px-8 lg:px-20">
                        <div className="max-w-4xl mx-auto text-center">
                            <div className="overflow-hidden mb-4 sm:mb-5">
                                <p className="text-xs sm:text-sm uppercase tracking-[0.28em] text-[#d4af37] font-medium">Media Gallery</p>
                            </div>
                            <div className="flex items-center justify-center gap-2 sm:gap-3 md:gap-4 mb-6 sm:mb-8">
                                <div className="h-px w-8 sm:w-12 md:w-16 bg-gradient-to-r from-transparent via-[#d4af37]/30 to-[#d4af37]" />
                                <div className="h-1 w-1 sm:h-1.5 sm:w-1.5 rounded-full bg-[#d4af37]" />
                                <div className="h-px w-8 sm:w-12 md:w-16 bg-gradient-to-l from-transparent via-[#d4af37]/30 to-[#d4af37]" />
                            </div>
                            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold text-white mb-4 sm:mb-6">
                                Stories, visuals, and moments
                            </h1>
                            <p className="max-w-3xl mx-auto text-sm sm:text-base md:text-lg text-white/80 font-light leading-relaxed">
                                A curated collection of imagery, films, and activations spanning development, construction, interiors, and experiential media.
                            </p>
                        </div>
                    </div>
                </section>

                {/* Image Gallery Section - Masonry Layout */}
                <section className="relative overflow-hidden bg-black text-white py-12 sm:py-16 md:py-20 lg:py-24">
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(212,175,55,0.06),transparent_32%),radial-gradient(circle_at_80%_80%,rgba(212,175,55,0.06),transparent_32%)]" />
                    
                    <div className="relative z-10 container mx-auto px-4 sm:px-6 md:px-8 lg:px-20">
                        <div className="max-w-7xl mx-auto">
                            {/* Section Header */}
                            <div className="mb-10 sm:mb-12 md:mb-16">
                                <div className="overflow-hidden mb-3 sm:mb-4">
                                    <p className="text-xs sm:text-sm uppercase tracking-[0.28em] text-[#d4af37] font-medium">Image Gallery</p>
                                </div>
                                <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-white">Visual Highlights</h2>
                            </div>

                            {/* Masonry Grid */}
                            <div className="columns-1 sm:columns-2 lg:columns-3 gap-4 sm:gap-6 md:gap-8">
                                {imageHighlights.map((item, index) => {
                                    const heightClass = item.size === 'large' 
                                        ? 'h-80 sm:h-96 md:h-[500px]' 
                                        : item.size === 'medium' 
                                        ? 'h-64 sm:h-80 md:h-96' 
                                        : 'h-48 sm:h-64 md:h-80';
                                    
                                    return (
                                        <div 
                                            key={item.label}
                                            className={`group relative mb-4 sm:mb-6 md:mb-8 break-inside-avoid overflow-hidden rounded-lg border border-[#d4af37]/10 hover:border-[#d4af37]/30 transition-all duration-500 hover:scale-[1.02] hover:shadow-[0_0_30px_rgba(212,175,55,0.2)]`}
                                        >
                                            <div className={`relative ${heightClass} overflow-hidden`}>
                                                <div className="absolute inset-0 bg-gradient-to-br from-[#d4af37]/10 via-transparent to-transparent z-10"></div>
                                                <img 
                                                    src={item.image} 
                                                    alt={item.label}
                                                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                                                />
                                                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent z-10"></div>
                                                
                                                {/* Label Overlay */}
                                                <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-5 md:p-6 z-20">
                                                    <p className="text-sm sm:text-base font-semibold text-white drop-shadow-lg">
                                                        {item.label}
                                                    </p>
                                                </div>

                                                {/* Hover Glow Effect */}
                                                <div className="absolute inset-0 bg-[#d4af37]/0 group-hover:bg-[#d4af37]/5 transition-colors duration-500 z-10"></div>
                                            </div>
                                        </div>
                                    );
                                })}
                            </div>
                        </div>
                    </div>
                </section>

                {/* Video Section - Creative Layout */}
                <section className="relative overflow-hidden bg-black text-white py-12 sm:py-16 md:py-20 lg:py-24">
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(212,175,55,0.08),transparent_70%)]" />
                    <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-black/40" />
                    
                    <div className="relative z-10 container mx-auto px-4 sm:px-6 md:px-8 lg:px-20">
                        <div className="max-w-7xl mx-auto">
                            {/* Section Header */}
                            <div className="mb-10 sm:mb-12 md:mb-16 text-center">
                                <div className="overflow-hidden mb-3 sm:mb-4">
                                    <p className="text-xs sm:text-sm uppercase tracking-[0.28em] text-[#d4af37] font-medium">Video Content</p>
                                </div>
                                <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-white">Reels & Features</h2>
                            </div>

                            {/* Video Grid - Staggered Layout */}
                            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 md:gap-10">
                                {videoReels.map((video, index) => (
                                    <div
                                        key={video.title}
                                        className={`group relative overflow-hidden rounded-xl border border-[#d4af37]/10 hover:border-[#d4af37]/30 bg-black/20 backdrop-blur-sm transition-all duration-500 hover:scale-[1.02] hover:-translate-y-1 hover:shadow-[0_0_40px_rgba(212,175,55,0.2)] ${
                                            index === 0 ? 'lg:col-span-2' : ''
                                        }`}
                                    >
                                        {/* Video Container */}
                                        <div className={`relative overflow-hidden ${index === 0 ? 'aspect-video' : 'aspect-video'} bg-black/50`}>
                                            <div className="absolute inset-0 bg-gradient-to-br from-[#d4af37]/10 via-transparent to-transparent z-10"></div>
                                            <video
                                                className="w-full h-full object-cover"
                                                src={video.src}
                                                poster={video.poster}
                                                controls
                                                muted
                                                playsInline
                                            />
                                            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent z-10 pointer-events-none"></div>
                                            
                                            {/* Play Icon Overlay (hidden when playing) */}
                                            <div className="absolute inset-0 flex items-center justify-center z-20 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                                <div className="w-16 h-16 rounded-full bg-[#d4af37]/20 backdrop-blur-sm border border-[#d4af37]/30 flex items-center justify-center">
                                                    <svg className="w-8 h-8 text-[#d4af37] ml-1" fill="currentColor" viewBox="0 0 24 24">
                                                        <path d="M8 5v14l11-7z"/>
                                                    </svg>
                                                </div>
                                            </div>
                                        </div>

                                        {/* Video Info */}
                                        <div className="p-5 sm:p-6 md:p-8 space-y-3 sm:space-y-4">
                                            <div className="flex items-center gap-3">
                                                <span className="text-xs uppercase tracking-[0.24em] text-[#d4af37] font-medium">Video</span>
                                                <div className="h-px flex-1 bg-gradient-to-r from-[#d4af37]/30 to-transparent"></div>
                                            </div>
                                            <h3 className="text-xl sm:text-2xl md:text-3xl font-semibold text-white group-hover:text-[#d4af37] transition-colors duration-500">
                                                {video.title}
                                            </h3>
                                            <p className="text-sm sm:text-base text-white/70 font-light leading-relaxed">
                                                {video.description}
                                            </p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </SiteLayout>
    );
}

