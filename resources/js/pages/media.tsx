import SiteLayout from '@/layouts/site-layout';
import { Head } from '@inertiajs/react';
import { useState, useMemo, useEffect, useCallback } from 'react';
import { Image as ImageIcon, Video as VideoIcon, Filter, X, ChevronLeft, ChevronRight, Play } from 'lucide-react';
import { motion } from 'framer-motion';
import { fadeUp } from '@/Animations/motionPresets';
import useAOSRefresh from '@/hooks/useAOSRefresh';
import LazyImage from '@/components/LazyImage';
import LazyVideoThumbnail from '@/components/LazyVideoThumbnail';

interface GalleryImage {
    id: number;
    title: string;
    slug: string;
    alt: string | null;
    image: string | null;
    category: string | null;
    description: string | null;
    views: number;
}

interface Video {
    id: number;
    title: string;
    slug: string;
    description: string | null;
    video_url: string;
    embed_url: string;
    video_type: string;
    thumbnail: string | null;
    duration: number | null;
    category: string | null;
    author: string | null;
    views: number;
}

interface Props {
    galleryImages?: GalleryImage[];
    videos?: Video[];
}

export default function Media({ galleryImages = [], videos = [] }: Props) {
    useAOSRefresh();

    // Ensure arrays are always defined
    const safeGalleryImages = galleryImages || [];
    const safeVideos = videos || [];

    // State for filtering
    const [selectedImageCategory, setSelectedImageCategory] = useState<string>('all');
    const [selectedVideoCategory, setSelectedVideoCategory] = useState<string>('all');
    
    // State for lightbox
    const [lightboxOpen, setLightboxOpen] = useState(false);
    const [lightboxType, setLightboxType] = useState<'image' | 'video' | null>(null);
    const [lightboxIndex, setLightboxIndex] = useState(0);
    const [lightboxItems, setLightboxItems] = useState<(GalleryImage | Video)[]>([]);

    // Get unique categories
    const imageCategories = useMemo(() => {
        const cats = safeGalleryImages
            .map(img => img.category)
            .filter((cat): cat is string => cat !== null && cat !== '')
            .filter((cat, index, self) => self.indexOf(cat) === index)
            .sort();
        return cats;
    }, [safeGalleryImages]);

    const videoCategories = useMemo(() => {
        const cats = safeVideos
            .map(video => video.category)
            .filter((cat): cat is string => cat !== null && cat !== '')
            .filter((cat, index, self) => self.indexOf(cat) === index)
            .sort();
        return cats;
    }, [safeVideos]);

    // Filter images and videos by category
    const filteredImages = useMemo(() => {
        if (selectedImageCategory === 'all') {
            return safeGalleryImages;
        }
        return safeGalleryImages.filter(img => img.category === selectedImageCategory);
    }, [safeGalleryImages, selectedImageCategory]);

    const filteredVideos = useMemo(() => {
        if (selectedVideoCategory === 'all') {
            return safeVideos;
        }
        return safeVideos.filter(video => video.category === selectedVideoCategory);
    }, [safeVideos, selectedVideoCategory]);

    // Calculate statistics
    const stats = useMemo(() => {
        return {
            totalImages: safeGalleryImages.length,
            totalVideos: safeVideos.length,
            totalViews: safeGalleryImages.reduce((sum, img) => sum + img.views, 0) + 
                       safeVideos.reduce((sum, video) => sum + video.views, 0),
        };
    }, [safeGalleryImages, safeVideos]);

    // Get size class based on index
    const getSizeClass = (index: number) => {
        const sizes = ['large', 'medium', 'small', 'medium', 'small', 'large', 'medium', 'small'];
        return sizes[index % sizes.length];
    };

    // Open lightbox for images (memoized for performance)
    const openImageLightbox = useCallback((index: number) => {
        setLightboxItems(filteredImages);
        setLightboxIndex(index);
        setLightboxType('image');
        setLightboxOpen(true);
    }, [filteredImages]);

    // Open lightbox for videos (memoized for performance)
    const openVideoLightbox = useCallback((index: number) => {
        setLightboxItems(filteredVideos);
        setLightboxIndex(index);
        setLightboxType('video');
        setLightboxOpen(true);
    }, [filteredVideos]);

    // Navigate lightbox items (memoized)
    const nextItem = useCallback(() => {
        setLightboxIndex((prev) => (prev + 1) % lightboxItems.length);
    }, [lightboxItems.length]);

    const prevItem = useCallback(() => {
        setLightboxIndex((prev) => (prev - 1 + lightboxItems.length) % lightboxItems.length);
    }, [lightboxItems.length]);

    // Close lightbox (memoized)
    const closeLightbox = useCallback(() => {
        setLightboxOpen(false);
        setLightboxType(null);
        setLightboxIndex(0);
    }, []);

    // Handle keyboard navigation
    useEffect(() => {
        if (!lightboxOpen) return;

        const handleKeyDown = (e: KeyboardEvent) => {
            if (e.key === 'Escape') {
                closeLightbox();
            } else if (e.key === 'ArrowRight') {
                nextItem();
            } else if (e.key === 'ArrowLeft') {
                prevItem();
            }
        };

        window.addEventListener('keydown', handleKeyDown);
        return () => window.removeEventListener('keydown', handleKeyDown);
    }, [lightboxOpen, nextItem, prevItem, closeLightbox]);

    // Get current lightbox item
    const currentLightboxItem = lightboxItems[lightboxIndex];

    return (
        <SiteLayout>
            <Head title="Media" />
            <div className="bg-[#F9F9F7] text-[#0E0E0E]">
                {/* Header Section - Elite White */}
                <section className="relative overflow-hidden bg-[#F9F9F7] text-[#0E0E0E] py-16 sm:py-20 md:py-24 lg:py-32">
                    <div className="relative z-10 mx-auto max-w-6xl px-6 sm:px-10 lg:px-14">
                        <div className="max-w-4xl mx-auto text-center">
                            <motion.div 
                                className="overflow-hidden mb-5 sm:mb-6"
                                variants={fadeUp}
                                initial="hidden"
                                animate="visible"
                            >
                                <p className="text-xs sm:text-sm uppercase tracking-[0.28em] text-[#7A7A7A] font-medium">Media Gallery</p>
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
                                Stories, visuals, and moments
                            </h1>
                            <p 
                                className="max-w-3xl mx-auto text-base sm:text-lg md:text-xl text-[#555555] font-body leading-relaxed"
                                data-aos="fade-up"
                                data-aos-delay="150"
                            >
                                A curated collection of imagery, films, and activations spanning development, construction, interiors, and experiential media.
                            </p>
                            
                            {/* Statistics */}
                            {(stats.totalImages > 0 || stats.totalVideos > 0) && (
                                <div className="flex flex-wrap items-center justify-center gap-6 sm:gap-8 mt-8">
                                    {stats.totalImages > 0 && (
                                        <div className="flex items-center gap-2 text-[#555555]">
                                            <ImageIcon className="h-5 w-5 text-[#C9A24D]" />
                                            <span className="text-sm sm:text-base font-body">
                                                <span className="text-[#C9A24D] font-medium">{stats.totalImages}</span> Images
                                            </span>
                                        </div>
                                    )}
                                    {stats.totalVideos > 0 && (
                                        <div className="flex items-center gap-2 text-[#555555]">
                                            <VideoIcon className="h-5 w-5 text-[#C9A24D]" />
                                            <span className="text-sm sm:text-base font-body">
                                                <span className="text-[#C9A24D] font-medium">{stats.totalVideos}</span> Videos
                                            </span>
                                        </div>
                                    )}
                                    {stats.totalViews > 0 && (
                                        <div className="flex items-center gap-2 text-[#555555]">
                                            <span className="text-sm sm:text-base font-body">
                                                <span className="text-[#C9A24D] font-medium">{stats.totalViews.toLocaleString()}</span> Views
                                            </span>
                                        </div>
                                    )}
                                </div>
                            )}
                        </div>
                    </div>
                </section>

                {/* Image Gallery Section - Elite White */}
                {safeGalleryImages.length > 0 && (
                    <section className="relative overflow-hidden bg-[#F9F9F7] text-[#0E0E0E] py-16 sm:py-20 md:py-24 lg:py-32">
                        
                        <div className="relative z-10 mx-auto max-w-6xl px-6 sm:px-10 lg:px-14">
                            <div 
                                className="mb-10 sm:mb-12 md:mb-16"
                                data-aos="fade-up"
                            >
                                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-6">
                                    <div>
                                        <div className="overflow-hidden mb-4 sm:mb-5">
                                            <p className="text-xs sm:text-sm uppercase tracking-[0.28em] text-[#7A7A7A] font-medium">Image Gallery</p>
                                        </div>
                                        <h2 
                                            className="text-3xl sm:text-4xl md:text-5xl font-heading font-medium text-[#0E0E0E] tracking-[0.02em]"
                                            data-aos="fade-up"
                                            data-aos-delay="100"
                                        >
                                            Visual Highlights
                                            {selectedImageCategory !== 'all' && (
                                                <span className="text-lg text-white/60 ml-2">({filteredImages.length})</span>
                                            )}
                                        </h2>
                                    </div>
                                    
                                    {/* Category Filter */}
                                    {imageCategories.length > 0 && (
                                        <div className="flex flex-wrap items-center gap-2">
                                            <Filter className="h-4 w-4 text-[#d4af37]" />
                                            <button
                                                onClick={() => setSelectedImageCategory('all')}
                                                className={`px-3 py-1.5 rounded-md text-xs sm:text-sm transition-all ${
                                                    selectedImageCategory === 'all'
                                                        ? 'bg-[#d4af37] text-white font-semibold'
                                                        : 'bg-white/5 text-white/70 hover:bg-white/10 hover:text-white'
                                                }`}
                                            >
                                                All ({safeGalleryImages.length})
                                            </button>
                                            {imageCategories.map((category) => (
                                                <button
                                                    key={category}
                                                    onClick={() => setSelectedImageCategory(category)}
                                                    className={`px-3 py-1.5 rounded-md text-xs sm:text-sm transition-all ${
                                                        selectedImageCategory === category
                                                            ? 'bg-[#d4af37] text-white font-semibold'
                                                            : 'bg-white/5 text-white/70 hover:bg-white/10 hover:text-white'
                                                    }`}
                                                >
                                                    {category}
                                                </button>
                                            ))}
                                        </div>
                                    )}
                                </div>
                            </div>

                            {/* Masonry Grid */}
                            {filteredImages.length > 0 ? (
                                <div className="columns-1 sm:columns-2 lg:columns-3 gap-4 sm:gap-6 md:gap-8">
                                    {filteredImages.map((image, index) => {
                                    const sizeClass = getSizeClass(index);
                                    const heightClass = sizeClass === 'large' 
                                        ? 'h-80 sm:h-96 md:h-[500px]' 
                                        : sizeClass === 'medium' 
                                        ? 'h-64 sm:h-80 md:h-96' 
                                        : 'h-48 sm:h-64 md:h-80';
                                    
                                    return (
                                        <div 
                                            key={image.id}
                                            className={`group relative mb-4 sm:mb-6 md:mb-8 break-inside-avoid overflow-hidden rounded-lg border border-[#d4af37]/10 hover:border-[#d4af37]/30 transition-all duration-500 hover:scale-[1.02] hover:shadow-[0_0_30px_rgba(212,175,55,0.2)] cursor-pointer`}
                                            onClick={() => openImageLightbox(index)}
                                            data-aos="fade"
                                            data-aos-delay={index % 6 * 100}
                                        >
                                            <div className={`relative ${heightClass} overflow-hidden`}>
                                                <div className="absolute inset-0 bg-gradient-to-br from-[#d4af37]/10 via-transparent to-transparent z-10"></div>
                                                {image.image ? (
                                                    <LazyImage 
                                                        src={image.image} 
                                                        alt={image.alt || image.title}
                                                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                                                    />
                                                ) : (
                                                    <div className="w-full h-full bg-[#F6F5F2] flex items-center justify-center">
                                                        <span className="text-[#7A7A7A]">No Image</span>
                                                    </div>
                                                )}
                                                <div className="absolute inset-0 bg-gradient-to-t from-white/80 via-white/40 to-transparent z-10"></div>
                                                
                                                {/* Label Overlay */}
                                                <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-5 md:p-6 z-20 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                                    {/* <p className="text-sm sm:text-base font-semibold text-white drop-shadow-lg">
                                                        {image.title}
                                                    </p>
                                                    {image.category && (
                                                        <p className="text-xs text-[#d4af37] mt-1">
                                                            {image.category}
                                                        </p>
                                                    )} */}
                                                </div>

                                                {/* Hover Glow Effect */}
                                                <div className="absolute inset-0 bg-[#d4af37]/0 group-hover:bg-[#d4af37]/5 transition-colors duration-500 z-10"></div>
                                            </div>
                                        </div>
                                    );
                                })}
                                </div>
                            ) : (
                                <div className="text-center py-12">
                                    <p className="text-white/60">No images found in this category.</p>
                                    {selectedImageCategory !== 'all' && (
                                        <button
                                            onClick={() => setSelectedImageCategory('all')}
                                            className="mt-4 text-[#d4af37] hover:text-white transition-colors text-sm"
                                        >
                                            Show all images
                                        </button>
                                    )}
                                </div>
                            )}
                        </div>
                    </section>
                )}

                {/* Video Section - Elite White */}
                {safeVideos.length > 0 && (
                    <section className="relative overflow-hidden bg-[#F9F9F7] text-[#0E0E0E] py-16 sm:py-20 md:py-24 lg:py-32">
                        <div className="relative z-10 mx-auto max-w-6xl px-6 sm:px-10 lg:px-14">
                            <div 
                                className="mb-12 sm:mb-16 md:mb-20"
                                data-aos="fade-up"
                            >
                                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-8">
                                    <div className="text-center sm:text-left">
                                        <div className="overflow-hidden mb-4 sm:mb-5">
                                            <p className="text-xs sm:text-sm uppercase tracking-[0.28em] text-[#7A7A7A] font-medium">Video Content</p>
                                        </div>
                                        <h2 
                                            className="text-3xl sm:text-4xl md:text-5xl font-heading font-medium text-[#0E0E0E] tracking-[0.02em]"
                                            data-aos="fade-up"
                                            data-aos-delay="100"
                                        >
                                            Reels & Features
                                            {selectedVideoCategory !== 'all' && (
                                                <span className="text-lg text-[#7A7A7A] ml-2 font-body">({filteredVideos.length})</span>
                                            )}
                                        </h2>
                                    </div>
                                    
                                    {/* Category Filter */}
                                    {videoCategories.length > 0 && (
                                        <div className="flex flex-wrap items-center justify-center sm:justify-end gap-2">
                                            <Filter className="h-4 w-4 text-[#7A7A7A]" />
                                            <button
                                                onClick={() => setSelectedVideoCategory('all')}
                                                className={`px-3 py-1.5 rounded-md text-xs sm:text-sm transition-all duration-700 ease-out ${
                                                    selectedVideoCategory === 'all'
                                                        ? 'bg-[#C9A24D] text-[#0E0E0E] font-heading font-medium border border-[#C9A24D]'
                                                        : 'bg-white border border-[#E5E5E0] text-[#555555] hover:border-[#C9A24D] hover:text-[#C9A24D] font-body'
                                                }`}
                                            >
                                                All ({safeVideos.length})
                                            </button>
                                            {videoCategories.map((category) => (
                                                <button
                                                    key={category}
                                                    onClick={() => setSelectedVideoCategory(category)}
                                                    className={`px-3 py-1.5 rounded-md text-xs sm:text-sm transition-all duration-700 ease-out ${
                                                        selectedVideoCategory === category
                                                            ? 'bg-[#C9A24D] text-[#0E0E0E] font-heading font-medium border border-[#C9A24D]'
                                                            : 'bg-white border border-[#E5E5E0] text-[#555555] hover:border-[#C9A24D] hover:text-[#C9A24D] font-body'
                                                    }`}
                                                >
                                                    {category}
                                                </button>
                                            ))}
                                        </div>
                                    )}
                                </div>
                            </div>

                            {/* Video Grid - Elite White Style */}
                            {filteredVideos.length > 0 ? (
                                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 sm:gap-8">
                                    {filteredVideos.map((video, index) => (
                                        <div
                                            key={video.id}
                                            className="group cursor-pointer"
                                            onClick={() => openVideoLightbox(index)}
                                            data-aos="fade"
                                            data-aos-delay={index % 4 * 100}
                                        >
                                            {/* Thumbnail Container */}
                                            <div className="relative w-full aspect-video bg-[#F6F5F2] rounded-lg overflow-hidden mb-4 border border-[#E5E5E0]">
                                                {/* Thumbnail Image */}
                                                {video.thumbnail ? (
                                                    <LazyVideoThumbnail
                                                        src={video.thumbnail}
                                                        alt={video.title}
                                                        className="w-full h-full object-cover group-hover:opacity-90 transition-opacity duration-700 ease-out"
                                                        placeholder={
                                                            <div className="w-full h-full flex items-center justify-center bg-[#F6F5F2]">
                                                                <Play className="h-12 w-12 text-[#7A7A7A]" />
                                                            </div>
                                                        }
                                                    />
                                                ) : (
                                                    <div className="w-full h-full flex items-center justify-center bg-[#F6F5F2]">
                                                        <Play className="h-12 w-12 text-[#7A7A7A]" />
                                                    </div>
                                                )}
                                                
                                                {/* Play Button Overlay */}
                                                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-700 ease-out bg-black/10">
                                                    <div className="w-14 h-14 rounded-full bg-[#C9A24D] flex items-center justify-center transition-transform duration-700 ease-out group-hover:scale-110">
                                                        <Play className="h-6 w-6 text-[#0E0E0E] ml-1" fill="currentColor" />
                                                    </div>
                                                </div>
                                                
                                                {/* Duration Badge */}
                                                {video.duration && (
                                                    <div className="absolute bottom-2 right-2 px-2 py-1 bg-[#0E0E0E]/80 rounded text-xs font-medium text-white font-body">
                                                        {Math.floor(video.duration / 60)}:{(video.duration % 60).toString().padStart(2, '0')}
                                                    </div>
                                                )}
                                                
                                                {/* Video Type Badge */}
                                                <div className="absolute top-2 left-2 px-2 py-1 bg-white rounded text-xs font-medium text-[#0E0E0E] font-body border border-[#E5E5E0]">
                                                    {video.video_type === 'youtube' ? 'YouTube' : video.video_type === 'vimeo' ? 'Vimeo' : 'Video'}
                                                </div>
                                            </div>

                                            {/* Video Info */}
                                            <div className="space-y-2">
                                                {/* Title */}
                                                <h3 className="text-sm sm:text-base font-heading font-medium text-[#0E0E0E] line-clamp-2 group-hover:text-[#C9A24D] transition-colors duration-700 ease-out tracking-[0.02em]">
                                                    {video.title}
                                                </h3>
                                                
                                                {/* Channel/Author */}
                                                {video.author && (
                                                    <p className="text-xs sm:text-sm text-[#555555] font-body">
                                                        {video.author}
                                                    </p>
                                                )}
                                                
                                                {/* Metadata */}
                                                <div className="flex items-center gap-2 text-xs text-[#7A7A7A] font-body">
                                                    {video.views > 0 && (
                                                        <span>
                                                            {video.views >= 1000000 
                                                                ? `${(video.views / 1000000).toFixed(1)}M views`
                                                                : video.views >= 1000 
                                                                ? `${(video.views / 1000).toFixed(1)}K views`
                                                                : `${video.views} views`}
                                                        </span>
                                                    )}
                                                    {video.category && (
                                                        <>
                                                            <span className="text-[#E5E5E0]">•</span>
                                                            <span>{video.category}</span>
                                                        </>
                                                    )}
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            ) : (
                                <div className="text-center py-12">
                                    <p className="text-[#7A7A7A] font-body">No videos found in this category.</p>
                                    {selectedVideoCategory !== 'all' && (
                                        <button
                                            onClick={() => setSelectedVideoCategory('all')}
                                            className="mt-4 text-[#C9A24D] hover:text-[#A8842D] transition-colors duration-700 ease-out text-sm font-body"
                                        >
                                            Show all videos
                                        </button>
                                    )}
                                </div>
                            )}
                        </div>
                    </section>
                )}

                {/* Empty State */}
                {safeGalleryImages.length === 0 && safeVideos.length === 0 && (
                    <section className="relative overflow-hidden bg-white text-[#1b1a16] py-20">
                        <div className="mx-auto max-w-6xl px-6 sm:px-10 lg:px-14 text-center">
                            <p className="text-xl text-white/60">No media content available yet.</p>
                        </div>
                    </section>
                )}

                {/* Lightbox Modal */}
                {lightboxOpen && currentLightboxItem && (
                    <div 
                        className="fixed inset-0 z-[9999] bg-white/95 backdrop-blur-sm flex items-center justify-center p-4 sm:p-6 md:p-8"
                        onClick={closeLightbox}
                    >
                        {/* Close Button */}
                        <button
                            onClick={closeLightbox}
                            className="absolute top-4 right-4 sm:top-6 sm:right-6 z-50 w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-white/50 hover:bg-white/70 border border-[#d4af37]/30 hover:border-[#d4af37] flex items-center justify-center transition-all duration-300 group"
                            aria-label="Close lightbox"
                        >
                            <X className="h-5 w-5 sm:h-6 sm:w-6 text-white group-hover:text-[#d4af37] transition-colors" />
                        </button>

                        {/* Navigation Buttons */}
                        {lightboxItems.length > 1 && (
                            <>
                                <button
                                    onClick={(e) => {
                                        e.stopPropagation();
                                        prevItem();
                                    }}
                                    className="absolute left-4 sm:left-6 top-1/2 -translate-y-1/2 z-50 w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-white/50 hover:bg-white/70 border border-[#d4af37]/30 hover:border-[#d4af37] flex items-center justify-center transition-all duration-300 group"
                                    aria-label="Previous"
                                >
                                    <ChevronLeft className="h-5 w-5 sm:h-6 sm:w-6 text-white group-hover:text-[#d4af37] transition-colors" />
                                </button>
                                <button
                                    onClick={(e) => {
                                        e.stopPropagation();
                                        nextItem();
                                    }}
                                    className="absolute right-4 sm:right-6 top-1/2 -translate-y-1/2 z-50 w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-white/50 hover:bg-white/70 border border-[#d4af37]/30 hover:border-[#d4af37] flex items-center justify-center transition-all duration-300 group"
                                    aria-label="Next"
                                >
                                    <ChevronRight className="h-5 w-5 sm:h-6 sm:w-6 text-white group-hover:text-[#d4af37] transition-colors" />
                                </button>
                            </>
                        )}

                        {/* Lightbox Content */}
                        <div 
                            className="relative w-full h-full max-w-7xl max-h-[90vh] flex flex-col items-center justify-center"
                            onClick={(e) => e.stopPropagation()}
                        >
                            {lightboxType === 'image' && 'image' in currentLightboxItem && (
                                <div className="relative w-full h-full flex flex-col items-center justify-center">
                                    {currentLightboxItem.image ? (
                                        <img
                                            src={currentLightboxItem.image}
                                            alt={currentLightboxItem.alt || currentLightboxItem.title}
                                            className="max-w-full max-h-[85vh] object-contain rounded-lg shadow-2xl"
                                        />
                                    ) : (
                                        <div className="w-full h-96 bg-gray-800 flex items-center justify-center rounded-lg">
                                            <span className="text-gray-500 text-lg">No Image</span>
                                        </div>
                                    )}
                                    
                                    {/* Image Info */}
                                    <div className="mt-4 sm:mt-6 text-center max-w-2xl">
                                        <h3 className="text-xl sm:text-2xl md:text-3xl font-semibold text-white mb-2">
                                            {currentLightboxItem.title}
                                        </h3>
                                        {currentLightboxItem.category && (
                                            <p className="text-sm sm:text-base text-[#d4af37] mb-2">
                                                {currentLightboxItem.category}
                                            </p>
                                        )}
                                        {'description' in currentLightboxItem && currentLightboxItem.description && (
                                            <p className="text-sm sm:text-base text-white/70">
                                                {currentLightboxItem.description}
                                            </p>
                                        )}
                                    </div>
                                </div>
                            )}

                            {lightboxType === 'video' && 'video_url' in currentLightboxItem && (
                                <div className="relative w-full h-full flex flex-col items-center justify-center">
                                    <div className="relative w-full aspect-video max-w-6xl bg-white rounded-lg overflow-hidden shadow-2xl">
                                        {currentLightboxItem.video_type === 'youtube' || currentLightboxItem.video_type === 'vimeo' ? (
                                            <iframe
                                                src={currentLightboxItem.embed_url}
                                                className="w-full h-full"
                                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                                allowFullScreen
                                            ></iframe>
                                        ) : (
                                            <div className="w-full h-full flex items-center justify-center">
                                                {currentLightboxItem.thumbnail ? (
                                                    <img
                                                        src={currentLightboxItem.thumbnail}
                                                        alt={currentLightboxItem.title}
                                                        className="w-full h-full object-cover"
                                                    />
                                                ) : (
                                                    <div className="text-gray-500 text-lg">Video Preview</div>
                                                )}
                                            </div>
                                        )}
                                    </div>
                                    
                                    {/* Video Info */}
                                    <div className="mt-4 sm:mt-6 text-center max-w-2xl">
                                        <h3 className="text-xl sm:text-2xl md:text-3xl font-semibold text-white mb-2">
                                            {currentLightboxItem.title}
                                        </h3>
                                        <div className="flex items-center justify-center gap-3 mb-2">
                                            <span className="text-xs uppercase tracking-[0.24em] text-[#d4af37] font-medium">
                                                {currentLightboxItem.video_type === 'youtube' ? 'YouTube' : currentLightboxItem.video_type === 'vimeo' ? 'Vimeo' : 'Video'}
                                            </span>
                                            {currentLightboxItem.category && (
                                                <>
                                                    <span className="text-white/30">•</span>
                                                    <span className="text-sm text-white/60">{currentLightboxItem.category}</span>
                                                </>
                                            )}
                                        </div>
                                        {currentLightboxItem.description && (
                                            <p className="text-sm sm:text-base text-white/70 mb-2">
                                                {currentLightboxItem.description}
                                            </p>
                                        )}
                                        <div className="flex items-center justify-center gap-4 text-xs text-white/50">
                                            {'author' in currentLightboxItem && currentLightboxItem.author && (
                                                <span>By {currentLightboxItem.author}</span>
                                            )}
                                            {'duration' in currentLightboxItem && currentLightboxItem.duration && (
                                                <span>
                                                    {Math.floor(currentLightboxItem.duration / 60)}:{(currentLightboxItem.duration % 60).toString().padStart(2, '0')}
                                                </span>
                                            )}
                                            {currentLightboxItem.views > 0 && (
                                                <span>{currentLightboxItem.views} views</span>
                                            )}
                                        </div>
                                    </div>
                                </div>
                            )}

                            {/* Item Counter */}
                            {lightboxItems.length > 1 && (
                                <div className="absolute bottom-4 sm:bottom-6 left-1/2 -translate-x-1/2 px-4 py-2 rounded-full bg-white/50 border border-[#d4af37]/30 text-[#1b1a16] text-sm">
                                    {lightboxIndex + 1} / {lightboxItems.length}
                                </div>
                            )}
                        </div>
                    </div>
                )}
            </div>
        </SiteLayout>
    );
}
