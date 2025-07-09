import { useState, useCallback, Suspense, memo } from 'react';
import { APP_CONFIG, COFFEE_SLIDES } from '../../../constants/coffee.constants';
import LoadingSpinner from '../../Fps/LoadingSpinner/LoadingSpinner';
import CoffeeSlide from './Slide/CoffeeSlide';
import bgCoffee from '../../../assets/BarPage/coffee/bgCoffee.svg';

const CoffeeAbout: React.FC = () => {
    const [currentSlide, setCurrentSlide] = useState<number>(0);
    const [isTransitioning, setIsTransitioning] = useState<boolean>(false);

    const changeSlide = useCallback((direction: 'next' | 'prev' | number) => {
        setIsTransitioning(true);

        // Проверяем, является ли направление числом (выбор конкретного слайда)
        if (typeof direction === 'number') {
            setCurrentSlide(direction);
        } else if (direction === 'next') {
            setCurrentSlide(prev => (prev + 1) % COFFEE_SLIDES.length);
        } else {
            setCurrentSlide(prev => (prev - 1 + COFFEE_SLIDES.length) % COFFEE_SLIDES.length);
        }
        setIsTransitioning(false);
    }, []);

    return (
        <div className="relative w-full max-w-[1920px] mx-auto min-h-[850px] lg:min-h-[852px] lg:h-[1080px]" id='about'>

            <div
                className={`absolute blur-[2px] inset-0 transition-opacity duration-500 ${isTransitioning ? 'opacity-70' : 'opacity-90'}`}
                style={{
                    backgroundImage: `url(${bgCoffee})`,
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
                        Midday
                    </h2>


                    <CoffeeSlide
                        slide={COFFEE_SLIDES[currentSlide]} // Передаем текущий слайд
                        isTransitioning={isTransitioning} // Передаем состояние перехода
                        currentSlide={currentSlide} // Передаем индекс текущего слайда
                        totalSlides={COFFEE_SLIDES.length} // Передаем общее количество слайдов
                        onNext={() => changeSlide('next')} // Обработчик для перехода к следующему слайду
                        onPrev={() => changeSlide('prev')} // Обработчик для перехода к предыдущему слайду
                        onSelect={(index) => changeSlide(index)} // Обработчик для выбора конкретного слайда
                    />
                </div>
            </div>
        </div>
    );
};


export default memo(CoffeeAbout);
