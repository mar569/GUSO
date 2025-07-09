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
        <div className="flex flex-col lg:flex-row gap-6 md:gap-8 w-full items-center">
            <div className="w-full lg:w-1/2 flex flex-col justify-center h-full">
                <div className="mt-8">
                    <h2 className={`${descClasses} uppercase leading-[100%] sm:leading-relaxed`}>
                        {slide.description}
                    </h2>

                </div>
            </div>
            <div className={`h-full ${slide.id === 1 ? 'flex justify-center' : 'grid grid-cols-2 gap-2 sm:gap-4'}`}>
                {slide.images.map((imgSrc, index) => (
                    <div
                        key={index}
                        className={`rounded-lg overflow-hidden transition-all duration-500 hover:shadow-lg hover:shadow-green-500 ${isTransitioning ? 'opacity-90' : 'opacity-100'}`}
                    >
                        <LazyImage
                            src={imgSrc}
                            alt={`Изображение ${index + 1}`}
                            className="w-full h-full object-cover"
                        />
                    </div>
                ))}
            </div>
        </div>
    );
})

export default PlaySlide;
