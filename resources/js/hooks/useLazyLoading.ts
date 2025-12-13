import { useEffect, useState, RefObject } from 'react';

interface UseLazyLoadingOptions {
    rootMargin?: string;
    threshold?: number;
    triggerOnce?: boolean;
}

export function useLazyLoading<T extends HTMLElement>(
    ref: RefObject<T>,
    options: UseLazyLoadingOptions = {}
): boolean {
    const { rootMargin = '50px', threshold = 0.01, triggerOnce = true } = options;
    const [isIntersecting, setIsIntersecting] = useState(false);

    useEffect(() => {
        const element = ref.current;
        if (!element || (triggerOnce && isIntersecting)) return;

        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        setIsIntersecting(true);
                        if (triggerOnce) {
                            observer.disconnect();
                        }
                    } else if (!triggerOnce) {
                        setIsIntersecting(false);
                    }
                });
            },
            {
                rootMargin,
                threshold,
            }
        );

        observer.observe(element);

        return () => {
            observer.disconnect();
        };
    }, [ref, rootMargin, threshold, triggerOnce, isIntersecting]);

    return isIntersecting;
}

