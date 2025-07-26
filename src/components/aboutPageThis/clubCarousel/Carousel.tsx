
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import GameCard from './GameCard';
import type { Game } from './gamesData';

interface CarouselProps {
    games: Game[];
    currentIndex: number;
    onCardClick: (game: Game) => void;
    setCurrentIndex: (index: number) => void;
}

const Carousel: React.FC<CarouselProps> = React.memo(({
    games,
    currentIndex,
    onCardClick,
    setCurrentIndex
}) => {
    const [startTouch, setStartTouch] = useState<number>(0);
    const isMobile = window.innerWidth < 640;
    const cardWidth = isMobile ? 250 : 200;
    const offset = currentIndex * cardWidth;

    const handleTouchStart = (e: React.TouchEvent) => {
        setStartTouch(e.touches[0].clientX);
    };

    const handleTouchEnd = (e: React.TouchEvent) => {
        const endTouch = e.changedTouches[0].clientX;
        const diff = endTouch - startTouch;
        const swipeThreshold = 50;

        if (Math.abs(diff) > swipeThreshold) {
            if (diff > 0 && currentIndex > 0) {
                setCurrentIndex(currentIndex - 1);
            } else if (diff < 0 && currentIndex < games.length - 1) {
                setCurrentIndex(currentIndex + 1);
            }
        }
    };

    return (
        <div
            className="overflow-hidden carousel"
            onTouchStart={handleTouchStart}
            onTouchEnd={handleTouchEnd}
        >
            <motion.div
                className="flex transition-transform duration-500"
                style={{ transform: `translateX(-${offset}px)` }}
            >
                {games.map((game) => (
                    <GameCard
                        key={game.id}
                        game={game}
                        onClick={onCardClick}
                    />
                ))}
            </motion.div>
        </div>
    );
});

export default Carousel;
