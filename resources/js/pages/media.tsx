import SiteLayout from '@/layouts/site-layout';
import { Head } from '@inertiajs/react';
import { useState, useMemo, useEffect } from 'react';
import { Image as ImageIcon, Video as VideoIcon, Filter, X, ChevronLeft, ChevronRight, Play } from 'lucide-react';

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

    // Open lightbox for images
    const openImageLightbox = (index: number) => {
        setLightboxItems(filteredImages);
        setLightboxIndex(index);
        setLightboxType('image');
        setLightboxOpen(true);
    };

    // Open lightbox for videos
    const openVideoLightbox = (index: number) => {
        setLightboxItems(filteredVideos);
        setLightboxIndex(index);
        setLightboxType('video');
        setLightboxOpen(true);
    };

    // Close lightbox
    const closeLightbox = () => {
        setLightboxOpen(false);
        setLightboxType(null);
        setLightboxIndex(0);
    };

    // Navigate to next item
    const nextItem = () => {
        if (lightboxItems.length > 0) {
            setLightboxIndex((prev) => (prev + 1) % lightboxItems.length);
        }
    };

    // Navigate to previous item
    const prevItem = () => {
        if (lightboxItems.length > 0) {
            setLightboxIndex((prev) => (prev - 1 + lightboxItems.length) % lightboxItems.length);
        }
    };

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
    }, [lightboxOpen, lightboxItems.length]);

    // Get current lightbox item
    const currentLightboxItem = lightboxItems[lightboxIndex];

    return (
        <SiteLayout>
            <Head title="Media" />
            <div className="bg-black text-white">
                {/* Header Section */}
                <section className="relative overflow-hidden bg-black text-white py-12 sm:py-16 md:py-20 lg:py-24">
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(212,175,55,0.08),transparent_70%)]" />
                    <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/20 to-black/40" />
                    
                    <div className="relative z-10 mx-auto max-w-6xl px-6 sm:px-10 lg:px-14">
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
                            
                            {/* Statistics */}
                            {(stats.totalImages > 0 || stats.totalVideos > 0) && (
                                <div className="flex flex-wrap items-center justify-center gap-6 sm:gap-8 mt-8">
                                    {stats.totalImages > 0 && (
                                        <div className="flex items-center gap-2 text-white/70">
                                            <ImageIcon className="h-5 w-5 text-[#d4af37]" />
                                            <span className="text-sm sm:text-base">
                                                <span className="text-[#d4af37] font-semibold">{stats.totalImages}</span> Images
                                            </span>
                                        </div>
                                    )}
                                    {stats.totalVideos > 0 && (
                                        <div className="flex items-center gap-2 text-white/70">
                                            <VideoIcon className="h-5 w-5 text-[#d4af37]" />
                                            <span className="text-sm sm:text-base">
                                                <span className="text-[#d4af37] font-semibold">{stats.totalVideos}</span> Videos
                                            </span>
                                        </div>
                                    )}
                                    {stats.totalViews > 0 && (
                                        <div className="flex items-center gap-2 text-white/70">
                                            <span className="text-sm sm:text-base">
                                                <span className="text-[#d4af37] font-semibold">{stats.totalViews.toLocaleString()}</span> Views
                                            </span>
                                        </div>
                                    )}
                                </div>
                            )}
                        </div>
                    </div>
                </section>

                {/* Image Gallery Section */}
                {safeGalleryImages.length > 0 && (
                    <section className="relative overflow-hidden bg-black text-white py-12 sm:py-16 md:py-20 lg:py-24">
                        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(212,175,55,0.06),transparent_32%),radial-gradient(circle_at_80%_80%,rgba(212,175,55,0.06),transparent_32%)]" />
                        
                        <div className="relative z-10 mx-auto max-w-6xl px-6 sm:px-10 lg:px-14">
                            <div className="mb-10 sm:mb-12 md:mb-16">
                                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-6">
                                    <div>
                                        <div className="overflow-hidden mb-3 sm:mb-4">
                                            <p className="text-xs sm:text-sm uppercase tracking-[0.28em] text-[#d4af37] font-medium">Image Gallery</p>
                                        </div>
                                        <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-white">
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
                                                        ? 'bg-[#d4af37] text-black font-semibold'
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
                                                            ? 'bg-[#d4af37] text-black font-semibold'
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
                                        >
                                            <div className={`relative ${heightClass} overflow-hidden`}>
                                                <div className="absolute inset-0 bg-gradient-to-br from-[#d4af37]/10 via-transparent to-transparent z-10"></div>
                                                {image.image ? (
                                                    <img 
                                                        src={image.image} 
                                                        alt={image.alt || image.title}
                                                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                                                    />
                                                ) : (
                                                    <div className="w-full h-full bg-gray-800 flex items-center justify-center">
                                                        <span className="text-gray-500">No Image</span>
                                                    </div>
                                                )}
                                                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent z-10"></div>
                                                
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

                {/* Video Section */}
                {safeVideos.length > 0 && (
                    <section className="relative overflow-hidden bg-black text-white py-12 sm:py-16 md:py-20 lg:py-24">
                        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(212,175,55,0.08),transparent_70%)]" />
                        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-black/40" />
                        
                        <div className="relative z-10 mx-auto max-w-6xl px-6 sm:px-10 lg:px-14">
                            <div className="mb-10 sm:mb-12 md:mb-16">
                                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-6">
                                    <div className="text-center sm:text-left">
                                        <div className="overflow-hidden mb-3 sm:mb-4">
                                            <p className="text-xs sm:text-sm uppercase tracking-[0.28em] text-[#d4af37] font-medium">Video Content</p>
                                        </div>
                                        <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-white">
                                            Reels & Features
                                            {selectedVideoCategory !== 'all' && (
                                                <span className="text-lg text-white/60 ml-2">({filteredVideos.length})</span>
                                            )}
                                        </h2>
                                    </div>
                                    
                                    {/* Category Filter */}
                                    {videoCategories.length > 0 && (
                                        <div className="flex flex-wrap items-center justify-center sm:justify-end gap-2">
                                            <Filter className="h-4 w-4 text-[#d4af37]" />
                                            <button
                                                onClick={() => setSelectedVideoCategory('all')}
                                                className={`px-3 py-1.5 rounded-md text-xs sm:text-sm transition-all ${
                                                    selectedVideoCategory === 'all'
                                                        ? 'bg-[#d4af37] text-black font-semibold'
                                                        : 'bg-white/5 text-white/70 hover:bg-white/10 hover:text-white'
                                                }`}
                                            >
                                                All ({safeVideos.length})
                                            </button>
                                            {videoCategories.map((category) => (
                                                <button
                                                    key={category}
                                                    onClick={() => setSelectedVideoCategory(category)}
                                                    className={`px-3 py-1.5 rounded-md text-xs sm:text-sm transition-all ${
                                                        selectedVideoCategory === category
                                                            ? 'bg-[#d4af37] text-black font-semibold'
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

                            {/* Video Grid - YouTube Style */}
                            {filteredVideos.length > 0 ? (
                                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6">
                                    {filteredVideos.map((video, index) => (
                                        <div
                                            key={video.id}
                                            className="group cursor-pointer"
                                            onClick={() => openVideoLightbox(index)}
                                        >
                                            {/* Thumbnail Container */}
                                            <div className="relative w-full aspect-video bg-black/50 rounded-lg overflow-hidden mb-3">
                                                {/* Thumbnail Image */}
                                                {video.thumbnail ? (
                                                    <img
                                                        src={video.thumbnail}
                                                        alt={video.title}
                                                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                                                    />
                                                ) : (
                                                    <div className="w-full h-full flex items-center justify-center bg-gray-800">
                                                        <Play className="h-12 w-12 text-gray-500" />
                                                    </div>
                                                )}
                                                
                                                {/* Play Button Overlay */}
                                                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-black/20">
                                                    <div className="w-14 h-14 rounded-full bg-[#d4af37] flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                                                        <Play className="h-6 w-6 text-black ml-1" fill="currentColor" />
                                                    </div>
                                                </div>
                                                
                                                {/* Duration Badge */}
                                                {video.duration && (
                                                    <div className="absolute bottom-2 right-2 px-1.5 py-0.5 bg-black/80 rounded text-xs font-medium text-white">
                                                        {Math.floor(video.duration / 60)}:{(video.duration % 60).toString().padStart(2, '0')}
                                                    </div>
                                                )}
                                                
                                                {/* Video Type Badge */}
                                                <div className="absolute top-2 left-2 px-2 py-1 bg-black/70 rounded text-xs font-medium text-white">
                                                    {video.video_type === 'youtube' ? 'YouTube' : video.video_type === 'vimeo' ? 'Vimeo' : 'Video'}
                                                </div>
                                            </div>

                                            {/* Video Info */}
                                            <div className="space-y-1">
                                                {/* Title */}
                                                <h3 className="text-sm sm:text-base font-medium text-white line-clamp-2 group-hover:text-[#d4af37] transition-colors duration-200">
                                                    {video.title}
                                                </h3>
                                                
                                                {/* Channel/Author */}
                                                {video.author && (
                                                    <p className="text-xs sm:text-sm text-white/70">
                                                        {video.author}
                                                    </p>
                                                )}
                                                
                                                {/* Metadata */}
                                                <div className="flex items-center gap-2 text-xs text-white/60">
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
                                                            <span className="text-white/30">•</span>
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
                                    <p className="text-white/60">No videos found in this category.</p>
                                    {selectedVideoCategory !== 'all' && (
                                        <button
                                            onClick={() => setSelectedVideoCategory('all')}
                                            className="mt-4 text-[#d4af37] hover:text-white transition-colors text-sm"
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
                    <section className="relative overflow-hidden bg-black text-white py-20">
                        <div className="mx-auto max-w-6xl px-6 sm:px-10 lg:px-14 text-center">
                            <p className="text-xl text-white/60">No media content available yet.</p>
                        </div>
                    </section>
                )}

                {/* Lightbox Modal */}
                {lightboxOpen && currentLightboxItem && (
                    <div 
                        className="fixed inset-0 z-[9999] bg-black/95 backdrop-blur-sm flex items-center justify-center p-4 sm:p-6 md:p-8"
                        onClick={closeLightbox}
                    >
                        {/* Close Button */}
                        <button
                            onClick={closeLightbox}
                            className="absolute top-4 right-4 sm:top-6 sm:right-6 z-50 w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-black/50 hover:bg-black/70 border border-[#d4af37]/30 hover:border-[#d4af37] flex items-center justify-center transition-all duration-300 group"
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
                                    className="absolute left-4 sm:left-6 top-1/2 -translate-y-1/2 z-50 w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-black/50 hover:bg-black/70 border border-[#d4af37]/30 hover:border-[#d4af37] flex items-center justify-center transition-all duration-300 group"
                                    aria-label="Previous"
                                >
                                    <ChevronLeft className="h-5 w-5 sm:h-6 sm:w-6 text-white group-hover:text-[#d4af37] transition-colors" />
                                </button>
                                <button
                                    onClick={(e) => {
                                        e.stopPropagation();
                                        nextItem();
                                    }}
                                    className="absolute right-4 sm:right-6 top-1/2 -translate-y-1/2 z-50 w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-black/50 hover:bg-black/70 border border-[#d4af37]/30 hover:border-[#d4af37] flex items-center justify-center transition-all duration-300 group"
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
                                    <div className="relative w-full aspect-video max-w-6xl bg-black rounded-lg overflow-hidden shadow-2xl">
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
                                <div className="absolute bottom-4 sm:bottom-6 left-1/2 -translate-x-1/2 px-4 py-2 rounded-full bg-black/50 border border-[#d4af37]/30 text-white text-sm">
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
