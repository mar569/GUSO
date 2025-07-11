
import React from "react";
import { APP_CONFIG } from "../../../constants/playstation.constants";
import type { PlayStationItem } from "../../../interfaces/slide.interface";
import LazyImage from "../../Fps/LazyImage";

interface PlaylideProps {
    slide: PlayStationItem;
    isTransitioning?: boolean;
}

const PlaySlide: React.FC<PlaylideProps> = React.memo(({ slide, isTransitioning = false }) => {
    const descClasses = `transition-all duration-300 ${isTransitioning ? 'opacity-0 -translate-y-4' : 'opacity-100 translate-y-0'} 
    text-[${APP_CONFIG.primaryColor}] text-[23px] sm:text-[24px] md:text-[55px]`;

    return (
        <div className="flex flex-col-reverse lg:flex-row gap-4 lg:gap-8 w-full items-center h-auto lg:h-full lg:justify-center">
            <div className="w-full lg:w-[780px] flex flex-col justify-center h-auto lg:h-full mb-6 lg:mb-0">
                <div className="lg:max-w-[90%]">
                    <h2 className={`${descClasses} uppercase leading-[1.3] lg:leading-relaxed`}>
                        {slide.description}
                    </h2>
                </div>
            </div>

            <div className={`w-full mt-4 lg:mt-0 ${slide.id === 1 ? 'flex justify-center' : 'grid grid-cols-2 gap-3 sm:gap-4'}`}>
                {slide.images.map((imgSrc, index) => (
                    <div
                        key={index}
                        className={`rounded-lg overflow-hidden transition-all duration-500 hover:shadow-lg hover:shadow-green-500 ${isTransitioning ? 'opacity-90' : 'opacity-100'}`}
                    >
                        <LazyImage
                            src={imgSrc}
                            alt={`Изображение ${index + 1}`}
                            className={`w-full ${slide.id === 1 ? 'h-[521px]' : 'h-[210px] sm:h-[350px] lg:h-[450px] xl:h-full'} object-cover transition-transform duration-300 hover:scale-110`}
                        />
                    </div>
                ))}
            </div>
        </div>
    );
});

export default PlaySlide;
