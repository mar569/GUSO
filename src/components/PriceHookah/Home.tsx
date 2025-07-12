import { lazy, Suspense, useCallback, useState } from 'react';
import { APP_CONFIG, HookahSLIDES } from '../../constants/hookah.constants';
import LoadingSpinner from '../Fps/LoadingSpinner/LoadingSpinner';
import bgImage from '@assets/hookah/BG.svg';

const HookahSlide = lazy(() => import('./HookahSlide'));
const HookahNavigate = lazy(() => import('./HookahNavigate'));

const PriceHookah: React.FC = () => {
    const [currentSlide, setCurrentSlide] = useState<number>(0);
    const [isTransitioning, setIsTransitioning] = useState<boolean>(false);

    const changeSlide = useCallback((direction: 'next' | 'prev' | number) => {
        setIsTransitioning(true);

        let newSlide: number;

        if (typeof direction === 'number') {
            newSlide = direction;
        } else if (direction === 'next') {
            newSlide = (currentSlide + 1) % HookahSLIDES.length;
        } else {
            newSlide = (currentSlide - 1 + HookahSLIDES.length) % HookahSLIDES.length;
        }

        if (newSlide !== currentSlide) {
            setCurrentSlide(newSlide);
        }

        setIsTransitioning(false);
    }, [currentSlide]);

    return (
        <div className="relative w-full max-w-[1920px] mx-auto min-h-[852px] ">
            <div
                className={`absolute inset-0 transition-opacity duration-500 ${isTransitioning ? 'opacity-90' : 'opacity-100'}`}
                style={{
                    backgroundImage: `url(${bgImage})`,
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

            <div id='discount' className={`relative mx-auto max-w-[${APP_CONFIG.maxWidth}] px-2 sm:px-8 w-full flex flex-col pt-10 pb-20 transition-opacity duration-300 ${isTransitioning ? 'opacity-90' : 'opacity-100'}`}>
                <h2 className={`transform transition-all duration-500 ${isTransitioning ? 'translate-x-10' : 'translate-x-0'} text-[18px] text-[#6EFF24] text-center md:text-left`}>
                    Акции
                </h2>
                <Suspense fallback={<LoadingSpinner />}>
                    <HookahSlide
                        slide={HookahSLIDES[currentSlide]}
                        isTransitioning={isTransitioning} />
                </Suspense>

                <Suspense fallback={<LoadingSpinner />}>
                    <HookahNavigate
                        currentSlide={currentSlide}
                        totalSlides={HookahSLIDES.length}
                        onNext={() => changeSlide('next')}
                        onPrev={() => changeSlide('prev')}
                        onSelect={changeSlide}
                        primaryColor="#6EFF24" />
                </Suspense>
            </div>
        </div>
    );
}

export default PriceHookah;

