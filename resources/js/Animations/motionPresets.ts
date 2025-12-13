export const fadeUp = {
    hidden: { opacity: 0, y: 16 },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.9,
            ease: [0.22, 1, 0.36, 1] as [number, number, number, number],
        },
    },
};

export const fade = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: { duration: 0.8 },
    },
};

export const fadeInUpDelayed = {
    hidden: { opacity: 0, y: 16 },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.9,
            delay: 0.1,
            ease: [0.22, 1, 0.36, 1] as [number, number, number, number],
        },
    },
};

