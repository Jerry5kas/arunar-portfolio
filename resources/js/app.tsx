import '../css/app.css';

import { createInertiaApp } from '@inertiajs/react';
import { resolvePageComponent } from 'laravel-vite-plugin/inertia-helpers';
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { initializeTheme } from './hooks/use-appearance';

const appName = import.meta.env.VITE_APP_NAME || 'Laravel';

createInertiaApp({
    title: (title) => (title ? `${title} - ${appName}` : appName),
    resolve: (name) =>
        resolvePageComponent(
            `./pages/${name}.tsx`,
            import.meta.glob('./pages/**/*.tsx'),
        ),
    setup({ el, App, props }) {
        const root = createRoot(el);

        root.render(
            <StrictMode>
                <App {...props} />
            </StrictMode>,
        );
    },
    progress: {
        color: '#4B5563',
    },
});

// This will set light / dark mode on load...
initializeTheme();

// Enhanced smooth scrolling with tender easing
(function() {
    // Custom easing function for tender smoothness
    function easeInOutCubic(t: number): number {
        return t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;
    }

    // Smooth scroll function
    function smoothScrollTo(target: number, duration: number = 1000) {
        const start = window.pageYOffset;
        const distance = target - start;
        let startTime: number | null = null;

        function animation(currentTime: number) {
            if (startTime === null) startTime = currentTime;
            const timeElapsed = currentTime - startTime;
            const progress = Math.min(timeElapsed / duration, 1);
            
            const ease = easeInOutCubic(progress);
            window.scrollTo(0, start + distance * ease);
            
            if (timeElapsed < duration) {
                requestAnimationFrame(animation);
            }
        }

        requestAnimationFrame(animation);
    }

    // Override anchor link scrolling
    document.addEventListener('click', (e) => {
        const target = e.target as HTMLElement;
        const anchor = target.closest('a[href^="#"]') as HTMLAnchorElement;
        
        if (anchor && anchor.hash) {
            const targetElement = document.querySelector(anchor.hash);
            if (targetElement) {
                e.preventDefault();
                const targetPosition = targetElement.getBoundingClientRect().top + window.pageYOffset - 80;
                smoothScrollTo(targetPosition, 1200);
            }
        }
    }, { passive: false });

    // Smooth scroll for programmatic scrolling
    (window as any).smoothScrollTo = smoothScrollTo;
})();

// Ultra-smooth momentum scrolling - no jitter, no shaking
(function() {
    let velocityHistory: Array<{ velocity: number; time: number }> = [];
    let momentumAnimationId: number | null = null;
    let isUserScrolling = false;
    let lastWheelTime = 0;
    let smoothedVelocity = 0;
    let lastScrollPosition = 0;
    let lastScrollTime = performance.now();
    let frameSkip = 0; // Frame skipping for stability
    let isFastScrolling = false;

    // Ultra-smooth velocity calculation with heavy damping
    function smoothVelocity(newVelocity: number) {
        // Very heavy smoothing to prevent jitter (0.1 = 90% of old, 10% of new)
        smoothedVelocity = smoothedVelocity * 0.9 + newVelocity * 0.1;
        return smoothedVelocity;
    }

    // Continuous smooth momentum animation with frame limiting
    function continuousMomentum() {
        const now = performance.now();
        const timeSinceLastWheel = now - lastWheelTime;
        
        // Skip frames during fast scrolling to reduce jitter
        frameSkip++;
        if (isFastScrolling && frameSkip % 2 !== 0) {
            momentumAnimationId = requestAnimationFrame(continuousMomentum);
            return;
        }
        frameSkip = 0;
        
        // Only apply momentum when user has clearly stopped scrolling AND velocity is moderate
        // Higher threshold to prevent jitter during fast scrolling
        if (timeSinceLastWheel > 120 && !isUserScrolling && Math.abs(smoothedVelocity) > 20 && Math.abs(smoothedVelocity) < 800) {
            // Very gentle deceleration (slower = smoother)
            smoothedVelocity *= 0.98;
            
            // Calculate distance per frame with frame time correction
            const actualFrameTime = 16.67; // Target 60fps
            const distance = (smoothedVelocity * actualFrameTime) / 1000;
            
            // Much higher threshold to prevent micro-movements and jitter
            if (Math.abs(distance) > 1.0) {
                const currentPosition = window.pageYOffset || document.documentElement.scrollTop;
                const maxScroll = document.documentElement.scrollHeight - window.innerHeight;
                
                // Round to nearest pixel to prevent sub-pixel rendering issues with text
                let newPosition = Math.round(currentPosition + distance);
                
                // Clamp to bounds
                if (newPosition <= 0) {
                    newPosition = 0;
                    smoothedVelocity = 0;
                } else if (newPosition >= maxScroll) {
                    newPosition = maxScroll;
                    smoothedVelocity = 0;
                }
                
                // Only scroll if position actually changed (prevents unnecessary repaints)
                if (Math.abs(newPosition - currentPosition) > 0.5) {
                    // Use requestAnimationFrame for smoother updates
                    requestAnimationFrame(() => {
                        window.scrollTo(0, newPosition);
                    });
                }
            } else {
                smoothedVelocity = 0;
            }
        } else if (Math.abs(smoothedVelocity) >= 800) {
            // If velocity is too high, don't apply momentum (prevents jitter)
            smoothedVelocity = 0;
        }
        
        momentumAnimationId = requestAnimationFrame(continuousMomentum);
    }

    // Track wheel events with ultra-smooth handling
    window.addEventListener('wheel', (e) => {
        const now = performance.now();
        const timeDelta = Math.max(now - lastWheelTime, 10); // Minimum 10ms
        
        // Calculate velocity
        const wheelVelocity = (e.deltaY / timeDelta) * 1000;
        
        // Detect fast scrolling
        isFastScrolling = Math.abs(wheelVelocity) > 1500;
        
        // Very aggressive velocity capping for stability
        const maxVelocity = 3000; // Lower max to prevent jitter
        const cappedVelocity = Math.max(-maxVelocity, Math.min(maxVelocity, wheelVelocity));
        
        // Ultra-heavy smoothing (only 5% of new velocity)
        smoothVelocity(cappedVelocity);
        
        lastWheelTime = now;
        isUserScrolling = true;

        // Store in history with time
        velocityHistory.push({ velocity: smoothedVelocity, time: now });
        
        // Keep only very recent history (last 150ms)
        velocityHistory = velocityHistory.filter(item => now - item.time < 150);
        
        // Keep max 4 samples for stability
        if (velocityHistory.length > 4) {
            velocityHistory.shift();
        }

        // Cancel any ongoing momentum immediately
        if (momentumAnimationId !== null) {
            // Don't cancel, just let it know user is scrolling
        }

        // Reset user scrolling flag with longer delay for stability
        clearTimeout((window as any).scrollTimeout);
        (window as any).scrollTimeout = setTimeout(() => {
            isUserScrolling = false;
            isFastScrolling = false;
            
            // Calculate final velocity with very conservative approach
            if (velocityHistory.length >= 2) {
                const recentVelocities = velocityHistory.slice(-3);
                const avgVelocity = recentVelocities.reduce((sum, item) => sum + item.velocity, 0) / recentVelocities.length;
                // Very conservative momentum (25% of average - much less aggressive)
                smoothedVelocity = avgVelocity * 0.25;
                
                // Don't apply momentum if velocity is too high (prevents jitter)
                if (Math.abs(smoothedVelocity) > 600) {
                    smoothedVelocity = 0;
                }
            } else {
                smoothedVelocity = 0;
            }
        }, 100); // Even longer delay for stability
    }, { passive: true });

    // Initialize
    lastScrollPosition = window.pageYOffset || document.documentElement.scrollTop;
    
    // Start animation loop
    momentumAnimationId = requestAnimationFrame(continuousMomentum);
})();
