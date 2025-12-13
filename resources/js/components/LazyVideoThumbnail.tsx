import { useState, useRef, useEffect } from 'react';

interface LazyVideoThumbnailProps {
    src: string | null;
    alt: string;
    className?: string;
    placeholder?: React.ReactNode;
}

export default function LazyVideoThumbnail({ 
    src, 
    alt, 
    className = '', 
    placeholder 
}: LazyVideoThumbnailProps) {
    const [isLoaded, setIsLoaded] = useState(false);
    const [isInView, setIsInView] = useState(false);
    const [hasError, setHasError] = useState(false);
    const containerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        setIsInView(true);
                        observer.disconnect();
                    }
                });
            },
            {
                rootMargin: '50px',
                threshold: 0.01,
            }
        );

        if (containerRef.current) {
            observer.observe(containerRef.current);
        }

        return () => {
            if (containerRef.current) {
                observer.unobserve(containerRef.current);
            }
            observer.disconnect();
        };
    }, []);

    const handleLoad = () => {
        setIsLoaded(true);
    };

    const handleError = () => {
        setHasError(true);
        setIsLoaded(true);
    };

    return (
        <div ref={containerRef} className={`relative ${className}`}>
            {/* Placeholder/Skeleton */}
            {!isLoaded && (
                <div className="absolute inset-0 bg-[#F6F5F2] animate-pulse flex items-center justify-center">
                    {placeholder || (
                        <div className="w-12 h-12 border-2 border-[#E5E5E0] border-t-[#C9A24D] rounded-full animate-spin"></div>
                    )}
                </div>
            )}

            {/* Actual Image */}
            {isInView && src && !hasError && (
                <img
                    src={src}
                    alt={alt}
                    className={`w-full h-full object-cover transition-opacity duration-300 ${
                        isLoaded ? 'opacity-100' : 'opacity-0'
                    }`}
                    onLoad={handleLoad}
                    onError={handleError}
                    loading="lazy"
                    decoding="async"
                />
            )}

            {(!src || hasError) && (
                <div className="absolute inset-0 bg-[#F6F5F2] flex items-center justify-center">
                    {placeholder}
                </div>
            )}
        </div>
    );
}

