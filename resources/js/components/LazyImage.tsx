import { useState, useRef, useEffect } from 'react';
import type { ImgHTMLAttributes } from 'react';

interface LazyImageProps extends ImgHTMLAttributes<HTMLImageElement> {
    src: string;
    alt: string;
    placeholder?: string;
    className?: string;
}

export default function LazyImage({ src, alt, placeholder, className = '', ...props }: LazyImageProps) {
    const [isLoaded, setIsLoaded] = useState(false);
    const [isInView, setIsInView] = useState(false);
    const [hasError, setHasError] = useState(false);
    const imgRef = useRef<HTMLImageElement>(null);

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
                rootMargin: '50px', // Start loading 50px before element enters viewport
                threshold: 0.01,
            }
        );

        if (imgRef.current) {
            observer.observe(imgRef.current);
        }

        return () => {
            if (imgRef.current) {
                observer.unobserve(imgRef.current);
            }
            observer.disconnect();
        };
    }, []);

    const handleLoad = () => {
        setIsLoaded(true);
    };

    const handleError = () => {
        setHasError(true);
        setIsLoaded(true); // Show placeholder even on error
    };

    const defaultPlaceholder = `data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='400' height='300'%3E%3Crect fill='%23F6F5F2' width='400' height='300'/%3E%3C/svg%3E`;

    return (
        <div ref={imgRef as any} className={`relative ${className}`} style={{ minHeight: '100px' }}>
            {/* Placeholder/Skeleton */}
            {!isLoaded && (
                <div className="absolute inset-0 bg-[#F6F5F2] animate-pulse flex items-center justify-center">
                    <div className="w-12 h-12 border-2 border-[#E5E5E0] border-t-[#C9A24D] rounded-full animate-spin"></div>
                </div>
            )}

            {/* Actual Image */}
            {isInView && (
                <img
                    src={hasError ? placeholder || defaultPlaceholder : src}
                    alt={alt}
                    className={`w-full h-full object-cover transition-opacity duration-300 ${
                        isLoaded ? 'opacity-100' : 'opacity-0'
                    } ${className}`}
                    onLoad={handleLoad}
                    onError={handleError}
                    loading="lazy"
                    decoding="async"
                    {...props}
                />
            )}
        </div>
    );
}

