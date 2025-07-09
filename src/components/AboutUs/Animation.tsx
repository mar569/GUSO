import { useAnimation, type Variants } from 'framer-motion';

export const useSlideAnimation = () => {
    const controls = useAnimation();
    const variants: Record<string, Variants> = {
        container: {
            hidden: { opacity: 0 },
            visible: {
                opacity: 1,
                transition: {
                    staggerChildren: 0.1,
                },
            },
        },
    };

    return { controls, variants };
};
