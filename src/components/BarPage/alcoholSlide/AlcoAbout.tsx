import { useState, useCallback, Suspense, memo } from 'react';
import { APP_CONFIG, Bar_SLIDES } from '../../../constants/alco.constants';
import LoadingSpinner from '../../Fps/LoadingSpinner/LoadingSpinner';
import bgDrink from '../../../assets/BarPage/directionBg.svg';
import BarSlide from '../coffeSlide/Slide';

const AlcoAbout: React.FC = () => {
    const [currentSlide, setCurrentSlide] = useState<number>(0);
    const [isTransitioning, setIsTransitioning] = useState<boolean>(false);

    const changeSlide = useCallback((direction: 'next' | 'prev' | number) => {
        setIsTransitioning(true);

        let newSlide: number;

        if (typeof direction === 'number') {
            newSlide = direction;
        } else if (direction === 'next') {
            newSlide = (currentSlide + 1) % Bar_SLIDES.length;
        } else {
            newSlide = (currentSlide - 1 + Bar_SLIDES.length) % Bar_SLIDES.length;
        }

        // Update the current slide immediately
        if (newSlide !== currentSlide) {
            setCurrentSlide(newSlide);
        }

        // Reset the transition state immediately after changing the slide
        setIsTransitioning(false);
    }, [currentSlide]);

    return (
        <div className="relative w-full max-w-[1920px] mx-auto min-h-[852px] lg:h-[1080px]" id='about'>
            <div
                className={`absolute blur-[2px] inset-0 transition-opacity duration-500 ${isTransitioning ? 'opacity-60' : 'opacity-40'}`}
                style={{
                    backgroundImage: `url(${bgDrink})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    zIndex: -1
                }}
            >
                <Suspense fallback={
                    <div className="absolute inset-0 flex items-center justify-center">
                        <LoadingSpinner />
                    </div>
                }>
                </Suspense>
            </div>

            <div className={`relative mx-auto max-w-[${APP_CONFIG.maxWidth}] px-2 sm:px-8 w-full h-full pt-10 pb-20`}>
                <div className={`transition-opacity duration-300 ${isTransitioning ? 'opacity-70' : 'opacity-100'}`}>
                    <h2 className={`transform transition-all duration-500 ${isTransitioning ? 'translate-x-10' : 'translate-x-0'} text-[18px] text-[${APP_CONFIG.primaryColor}] sm:text-[19px] md:text-[20px] font-bold mb-8 lg:mb-0 text-center md:text-left`}>
                        Midnight
                    </h2>

                    <BarSlide
                        slide={Bar_SLIDES[currentSlide]}
                        isTransitioning={isTransitioning}
                        currentSlide={currentSlide}
                        totalSlides={Bar_SLIDES.length}
                        onNext={() => changeSlide('next')}
                        onPrev={() => changeSlide('prev')}
                        onSelect={(index) => changeSlide(index)}
                    />
                </div>
            </div>
        </div>
    );
};

export default memo(AlcoAbout);
