import { Suspense, useCallback, useState } from 'react';
import { APP_CONFIG, SLIDES } from '../../constants/playstation.constants';
import PlaySlide from './PsSlide/PlaySlide';
import PlayStationNavigate from './PlayStationSlide/PlayStationNavigate';
import LoadingSpinner from '../Fps/LoadingSpinner/LoadingSpinner';
import backgroundImages from './BackgroundImage';

const PrivateHome: React.FC = () => {
    const [currentSlide, setCurrentSlide] = useState<number>(0);
    const [isTransitioning, setIsTransitioning] = useState<boolean>(false);

    const changeSlide = useCallback((direction: 'next' | 'prev' | number) => {
        setIsTransitioning(true);
        let newSlide: number;

        if (typeof direction === 'number') {
            newSlide = direction;
        } else if (direction === 'next') {
            newSlide = (currentSlide + 1) % SLIDES.length;
        } else {
            newSlide = (currentSlide - 1 + SLIDES.length) % SLIDES.length;
        }

        if (newSlide !== currentSlide) {
            setCurrentSlide(newSlide);
        }
        setIsTransitioning(false);
    }, [currentSlide]);

    return (
        <div className="relative w-full max-w-[1920px] mx-auto ">
            <div
                className={`absolute inset-0 transition-opacity duration-500 ${isTransitioning ? 'opacity-70' : 'opacity-90'}`}
                style={{
                    backgroundImage: `url(${backgroundImages[currentSlide]})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                }}
            >
                <Suspense fallback={
                    <div className="absolute inset-0 flex items-center justify-center">
                        <LoadingSpinner />
                    </div>
                }>
                </Suspense>
            </div>

            <div className={`relative mx-auto max-w-[${APP_CONFIG.maxWidth}] px-2 sm:px-8 flex flex-col pt-10 pb-20 transition-opacity duration-300 ${isTransitioning ? 'opacity-90' : 'opacity-100'}`}>
                <h2 className={`transform transition-all duration-500 ${isTransitioning ? 'translate-x-10' : 'translate-x-0'} text-[18px] text-[#6EFF24]`}>
                    Your favorite places
                </h2>

                <PlaySlide
                    slide={SLIDES[currentSlide]}
                    isTransitioning={isTransitioning} />

                <PlayStationNavigate
                    currentSlide={currentSlide}
                    totalSlides={SLIDES.length}
                    onNext={() => changeSlide('next')}
                    onPrev={() => changeSlide('prev')}
                    onSelect={changeSlide}
                    primaryColor={APP_CONFIG.primaryColor}
                />
            </div>
        </div>
    );
}

export default PrivateHome;
