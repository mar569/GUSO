import { memo, Suspense, useCallback, useState } from "react";
import { APP_CONFIG, COCKTAIL_SLIDES } from "../../../constants/cocktails.constants";
import LoadingSpinner from "../../Fps/LoadingSpinner/LoadingSpinner";
import CocktailSlide from "../coffeSlide/Slide/CocktailSlide";
import bgCocktails from '../../../assets/BarPage/cocktails/cocktailBg.svg'

const CocktailsAbout: React.FC = () => {
    const [currentSlide, setCurrentSlide] = useState<number>(0);
    const [isTransitioning, setIsTransitioning] = useState<boolean>(false);

    const changeSlide = useCallback((direction: 'next' | 'prev' | number) => {
        setIsTransitioning(true);

        if (typeof direction === 'number') {
            setCurrentSlide(direction);
        } else if (direction === 'next') {
            setCurrentSlide(prev => (prev + 1) % COCKTAIL_SLIDES.length);
        } else {
            setCurrentSlide(prev => (prev - 1 + COCKTAIL_SLIDES.length) % COCKTAIL_SLIDES.length);
        }

        setIsTransitioning(false);
    }, [])

    return (
        <div className="relative w-full max-w-[1920px] mx-auto min-h-[850px] lg:min-h-[852px] ">

            <div className={`absolute  inset-0 transition-opacity duration-500 ${isTransitioning ? 'opacity-60' : 'opacity-40'}`}
                style={{
                    backgroundImage: `url(${bgCocktails})`,
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
                    <h2 className={`transform transition-all duration-500 ${isTransitioning ? 'translate-y-4 opacity-0' : 'translate-y-0 opacity-100'}
                    text-[18px] text-[${APP_CONFIG.primaryColor}] sm:text-[19px] md:text-[20px]  mb-8 lg:mb-0 text-center md:text-left`}>
                        Gosu cocktails
                    </h2>

                    <CocktailSlide
                        slide={COCKTAIL_SLIDES[currentSlide]}
                        isTransitioning={isTransitioning}
                        currentSlide={currentSlide}
                        totalSlides={COCKTAIL_SLIDES.length}
                        onNext={() => changeSlide('next')}
                        onPrev={() => changeSlide('prev')}
                        onSelect={(index: number) => changeSlide(index)}
                    />
                </div>
            </div>
        </div>
    )
}

export default memo(CocktailsAbout)