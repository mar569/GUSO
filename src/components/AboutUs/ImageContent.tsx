import { Suspense } from 'react';
import { AnimatePresence } from 'framer-motion';
import { SLIDE_DATA } from './SlideData';
import LoadingPlaceholder from './LoadingPlaceholder';
import SingleImage from './SingleImage';
import ImageGrid from './ImageGrid';

interface ImageContentProps {
    currentSlide: number;
    isLoaded: boolean;
}


const ImageContent: React.FC<ImageContentProps> = ({ currentSlide }) => {
    const slide = SLIDE_DATA[currentSlide];

    return (
        <div className="w-full lg:w-1/2 h-[200px] xs:h-[250px] sm:h-[350px] md:h-[450px] lg:h-[576px] mt-4 sm:mt-0">
            <Suspense fallback={<LoadingPlaceholder />}>
                <AnimatePresence mode="wait">
                    {slide.singleImage ? (
                        <SingleImage slide={slide} />
                    ) : (
                        <ImageGrid slide={slide} />
                    )}
                </AnimatePresence>
            </Suspense>
        </div>
    );
};

export default ImageContent;
