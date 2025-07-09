import { motion, useAnimation } from 'framer-motion';
import { SLIDE_DATA } from './SlideData';

interface TextContentProps {
    currentSlide: number;
    animationControls: ReturnType<typeof useAnimation>; // Используем ReturnType для получения типа
}

const TextContent = ({ currentSlide, animationControls }: TextContentProps) => {
    const slide = SLIDE_DATA[currentSlide];

    return (
        <motion.div
            className="w-full lg:w-1/2 flex flex-col justify-center"
            custom={currentSlide}
            animate={animationControls}
        >
            <motion.h2 className={`mb-4 ${slide.titleClass}`}>
                {slide.title}
            </motion.h2>
            <motion.p className={`${slide.descClass} leading-tight sm:leading-relaxed`}>
                {slide.description}
            </motion.p>
        </motion.div>
    );
}

export default TextContent;
