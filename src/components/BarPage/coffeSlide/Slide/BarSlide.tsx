import React, { Suspense } from 'react';
import { APP_CONFIG } from '../../../../constants/alco.constants';
import type { SlideProps } from '../../../types/slideTypes';
import LoadingSpinner from '../../../Fps/LoadingSpinner/LoadingSpinner';
import LazyImage from '../../../Fps/LazyImage/LazyImage';
import SlideNavigation from '../../../Fps/SlideNavigation/SlideNavigation';

const BarSlide: React.FC<SlideProps> = ({
    slide,
    isTransitioning = false,
    currentSlide,
    totalSlides,
    onNext,
    onPrev,
    onSelect
}) => {
    const titleClasses = `uppercase mb-4 transition-all duration-300 ${isTransitioning ? 'opacity-0 translate-y-4' : 'opacity-100 translate-y-0'} ${slide.isSpecialStyle
        ? `text-[${APP_CONFIG.primaryColor}] w-full max-w-[690px] h-full max-h-[249px] text-[24px] sm:text-[30px] md:text-[64px]`
        : 'text-white text-[20px] sm:text-[64px]'
        }`;

    const descClasses = `uppercase transition-all duration-300 ${isTransitioning ? 'opacity-0 -translate-y-4' : 'opacity-100 translate-y-0'} ${slide.isSpecialStyle
        ? 'text-white text-[16px] sm:text-[18px] md:text-[20px]'
        : `text-[${APP_CONFIG.primaryColor}] w-full max-w-[440px] md:max-w-[550px] h-full max-h-[249px] text-[14px] sm:text-[16px] md:text-[18px]`
        }`;

    return (
        <div className="flex flex-col gap-8 md:gap-0 w-full">
            <div className="flex flex-col-reverse lg:flex-row gap-6 md:gap-8 w-full items-center">
                <div className="w-full lg:w-[780px] flex flex-col justify-center h-full lg:order-first">
                    <div>
                        <h2 className={titleClasses}>{slide.title}</h2>
                        <p className={`${descClasses} leading-tight sm:leading-relaxed`}>
                            {slide.description}
                        </p>
                    </div>
                </div>

                <div className={`w-full h-[280px] xs:h-[300px] sm:h-[350px] md:h-[450px] lg:h-[920px] flex items-center justify-center ${isTransitioning ? 'opacity-90' : 'opacity-100'}`}>
                    <Suspense fallback={<LoadingSpinner />}>
                        <div className="flex w-full h-full">
                            {slide.images.map((imgSrc, index) => (
                                <div
                                    key={index}
                                    className={`relative w-full h-full overflow-hidden transition-all duration-300 hover:shadow-lg hover:shadow-green-500/30 ${isTransitioning ? 'opacity-70 scale-95' : 'opacity-100 scale-100'}`}
                                >
                                    <LazyImage
                                        src={imgSrc}
                                        alt={`Слайд ${slide.id} - Изображение ${index + 1}`}
                                        className="absolute w-full h-full object-cover lg:max-h-[920px] max-h-[300px] sm:max-h-[350px] md:max-h-[450px] transition-transform duration-300 hover:scale-110"
                                    />
                                </div>
                            ))}
                        </div>
                    </Suspense>
                </div>
            </div>

            <div className="w-full flex justify-center md:justify-start">
                <SlideNavigation
                    currentSlide={currentSlide}
                    totalSlides={totalSlides}
                    onNext={onNext}
                    onPrev={onPrev}
                    onSelect={onSelect}
                    primaryColor={APP_CONFIG.primaryColor}
                />
            </div>
        </div>
    );
};

export default BarSlide;
