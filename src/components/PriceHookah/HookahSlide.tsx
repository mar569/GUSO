import React, { Suspense } from "react";
import type { HookahItem } from "../../interfaces/slide.interface";
import { APP_CONFIG } from "../../constants/hookah.constants";
import LazyImage from "../Fps/LazyImage";
import LoadingSpinner from "../Fps/LoadingSpinner/LoadingSpinner";

interface PlaylideProps {
    slide: HookahItem;
    isTransitioning?: boolean;
}

const HookahSlide: React.FC<PlaylideProps> = React.memo(({ slide, isTransitioning = false }) => {
    const descClasses = `transition-all duration-300 ${isTransitioning ? 'opacity-0 -translate-y-4' : 'opacity-100 translate-y-0'} 
    text-[${APP_CONFIG.primaryColor}] text-[23px] sm:text-[24px] md:text-[50px]`;

    return (
        <div className="flex flex-col lg:flex-row gap-6 md:gap-8 w-full items-center pt-5">
            <div className="hidden lg:flex w-full lg:w-[780px] flex-col justify-center h-full gap-4">
                <div>
                    <h2 className={`${descClasses} uppercase leading-[100%] sm:leading-relaxed text-left`}>
                        {slide.description}
                    </h2>
                </div>
            </div>

            <div className={`w-full h-[280px] xs:h-[300px] sm:h-[350px] md:h-[450px] lg:h-[920px] flex items-center justify-center ${isTransitioning ? 'opacity-90' : 'opacity-100'}`}>
                <Suspense fallback={<LoadingSpinner />}>
                    <div className="flex w-full h-full gap-4">
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


            <div className="lg:hidden w-full flex flex-col justify-center  mb-10 gap-4 pt-5">
                <h2 className={`${descClasses} uppercase leading-[100%] text-center`}>
                    {slide.description}
                </h2>
            </div>
        </div>
    );
});

export default HookahSlide;
