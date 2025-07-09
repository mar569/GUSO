import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import BackgroundImage from './BackgroundImage';
import Title from './Title';

import Navigation from './Navigation';
import SlideController from './SlideController';
import { useSlideAnimation } from './Animation';
import { SLIDE_DATA } from './SlideData';
import SlideContent from './SlideContent';
import ImageContent from './ImageContent';


const AboutSection = () => {
    const [currentSlide, setCurrentSlide] = useState(0);
    const [imagesLoaded, setImagesLoaded] = useState(false);
    const { controls, variants } = useSlideAnimation();

    // Загрузка изображений
    useEffect(() => {
        const loadImages = async () => {
            const promises = SLIDE_DATA.flatMap(slide => slide.images.map(image => {
                return new Promise((resolve) => {
                    const img = new Image();
                    img.src = image;
                    img.onload = resolve;
                });
            }));
            await Promise.all(promises);
            setImagesLoaded(true);
        };

        loadImages();
    }, []);

    return (
        <div className="relative w-full min-h-screen overflow-hidden">
            <BackgroundImage />

            <motion.div
                className="relative mx-auto max-w-[1700px] px-4 sm:px-8 min-h-screen flex flex-col pt-10 pb-20"
                initial="hidden"
                animate="visible"
                variants={variants.container}
            >
                <Title />

                <div className="flex flex-col lg:flex-row gap-6 md:gap-8 w-full flex-1">
                    <SlideContent
                        currentSlide={currentSlide}
                        animationControls={controls}
                    />

                    <ImageContent
                        currentSlide={currentSlide}
                        isLoaded={imagesLoaded}
                    />
                </div>

                <Navigation
                    currentSlide={currentSlide}
                    totalSlides={SLIDE_DATA.length} // Используем длину массива слайдов
                    onPrev={() => SlideController.prev(currentSlide, setCurrentSlide)}
                    onNext={() => SlideController.next(currentSlide, setCurrentSlide)}
                    onChange={setCurrentSlide}
                />
            </motion.div>
        </div>
    );
}

export default AboutSection;
