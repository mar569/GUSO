import { useState, useCallback, Suspense, memo } from 'react';
import Slide from './Slide';
import { SLIDES, APP_CONFIG } from '../../constants';
import LoadingSpinner from './LoadingSpinner/LoadingSpinner';
import bgImage from '../../assets/fps/FpsFon.svg';

const PageAbout: React.FC = () => {
    const [currentSlide, setCurrentSlide] = useState<number>(0);
    const [isTransitioning, setIsTransitioning] = useState<boolean>(false);

    const changeSlide = useCallback((direction: 'next' | 'prev' | number) => {
        setIsTransitioning(true);


        if (typeof direction === 'number') {
            setCurrentSlide(direction);
        } else if (direction === 'next') {
            setCurrentSlide(prev => (prev + 1) % SLIDES.length);
        } else {
            setCurrentSlide(prev => (prev - 1 + SLIDES.length) % SLIDES.length);
        }


        setIsTransitioning(false);
    }, []);

    return (
        <div className="relative w-full max-w-[1920px] mx-auto min-h-[852px] lg:h-[1080px]" id='about'>
            <div
                className={`absolute blur-[2px] inset-0 transition-opacity duration-500 ${isTransitioning ? 'opacity-70' : 'opacity-90'}`}
                style={{
                    backgroundImage: `url(${bgImage})`,
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

            <div className={`relative mx-auto max-w-[${APP_CONFIG.maxWidth}] px-2 md:px-0 w-full h-full pt-10 pb-20`}>
                <div className={`transition-opacity duration-300 ${isTransitioning ? 'opacity-70' : 'opacity-100'}`}>
                    <h2 className={`transform transition-all duration-500 ${isTransitioning ? 'translate-x-10' : 'translate-x-0'} text-[16px] text-[${APP_CONFIG.primaryColor}] sm:text-[17px] md:text-[18px] font-bold mb-8 lg:mb-0 text-center md:text-left`}>
                        About us
                    </h2>

                    <Slide
                        slide={SLIDES[currentSlide]}
                        isTransitioning={isTransitioning}
                        currentSlide={currentSlide}
                        totalSlides={SLIDES.length}
                        onNext={() => changeSlide('next')}
                        onPrev={() => changeSlide('prev')}
                        onSelect={(index) => changeSlide(index)}
                    />
                </div>
            </div>
        </div>
    );
};

export default memo(PageAbout);
