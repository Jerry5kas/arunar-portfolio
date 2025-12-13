interface ImageSkeletonProps {
    className?: string;
    variant?: 'rect' | 'square' | 'circle';
}

export default function ImageSkeleton({ className = '', variant = 'rect' }: ImageSkeletonProps) {
    const variantClasses = {
        rect: 'rounded-lg',
        square: 'rounded-lg aspect-square',
        circle: 'rounded-full aspect-square',
    };

    return (
        <div
            className={`bg-[#F6F5F2] animate-pulse ${variantClasses[variant]} ${className}`}
            role="status"
            aria-label="Loading image"
        >
            <div className="flex items-center justify-center w-full h-full">
                <div className="w-12 h-12 border-2 border-[#E5E5E0] border-t-[#C9A24D] rounded-full animate-spin"></div>
            </div>
        </div>
    );
}

