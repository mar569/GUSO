import React from 'react';

interface SlideNavigationProps {
    currentSlide: number;
    totalSlides: number;
    onNext: () => void;
    onPrev: () => void;
    onSelect: (index: number) => void;
    primaryColor: string;
}

const SlideNavigation: React.FC<SlideNavigationProps> = ({
    currentSlide,
    totalSlides,
    onNext,
    onPrev,
    onSelect,
}) => {
    return (
        <div className="flex items-center gap-4">
            <button
                onClick={onPrev}
                aria-label="Предыдущий слайд"
                className="w-11 h-11 sm:w-12 sm:h-12 cursor-pointer rounded-full bg-[#1d1d1d] hover:bg-green-700 transition-all flex items-center justify-center duration-500"
            >
                <svg className="w-8 h-8 sm:w-9 sm:h-9 text-[#6EFF24] hover:text-black duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
                </svg>
            </button>

            <div className="flex gap-3">
                {Array.from({ length: totalSlides }).map((_, index) => (
                    <button
                        key={index}
                        onClick={() => onSelect(index)}
                        aria-label={`Перейти к слайду ${index + 1}`}
                        className={`w-12 h-8 sm:w-7 sm:h-7 cursor-pointer rounded-full transition-all ${currentSlide === index ? 'bg-[#5fcf27]' : 'bg-[#1d1d1d]'}`}
                    />
                ))}
            </div>

            <button
                onClick={onNext}
                aria-label="Следующий слайд"
                className="w-11 h-11 sm:w-12 sm:h-12 cursor-pointer rounded-full bg-[#1d1d1d] hover:bg-green-600 transition-all flex items-center justify-center duration-500"
            >
                <svg className="w-8 h-8 sm:w-9 sm:h-9 text-[#6EFF24] hover:text-black duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                </svg>
            </button>
        </div>
    );
};

export default SlideNavigation;
