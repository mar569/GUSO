import React from 'react';
import { motion } from 'framer-motion';
import GameCard from './GameCard';
import type { Game } from './gamesData';

interface CarouselProps {
    games: Game[];
    currentIndex: number;
    onCardClick: (game: Game) => void;
}

const Carousel: React.FC<CarouselProps> = React.memo(({ games, currentIndex, onCardClick }) => {
    const isMobile = window.innerWidth < 640;
    const cardWidth = isMobile ? 250 : 200;
    const offset = currentIndex * cardWidth;

    return (
        <div className="overflow-hidden carousel">
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
