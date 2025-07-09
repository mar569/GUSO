import type { Dispatch, SetStateAction } from 'react';

const SlideController = {
    next: (current: number, setSlide: Dispatch<SetStateAction<number>>) => {
        setSlide(prev => (prev + 1) % 5);
    },
    prev: (current: number, setSlide: Dispatch<SetStateAction<number>>) => {
        setSlide(prev => (prev - 1 + 5) % 5);
    }
}

export default SlideController;
