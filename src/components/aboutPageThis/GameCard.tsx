import React, { useState } from 'react';
import { motion } from 'framer-motion';
import type { Game } from './gamesData';

interface GameCardProps {
    game: Game;
    onClick: (game: Game) => void;
}

const GameCard: React.FC<GameCardProps> = React.memo(({ game, onClick }) => {
    const [isOpen, setIsOpen] = useState(false);

    const handleCardClick = () => {
        setIsOpen((prev) => !prev);
        onClick(game);
    };

    return (
        <div
            className="relative cursor-pointer w-full min-w-[250px]  h-[320px] mx-2 my-4 md:mx-4 md:my-6"
            style={{ perspective: '1000px' }}
            onClick={handleCardClick}
        >
            <motion.div
                className="relative w-full h-full rounded-xl overflow-hidden shadow-lg"
                initial={false}
                animate={{
                    transform: isOpen ? 'translateY(-30%)' : 'translateY(0)',
                    opacity: isOpen ? 0.2 : 1,
                    rotateX: isOpen ? 10 : 0
                }}
                transition={{ duration: 0.6 }}
            >
                <img
                    src={game.image}
                    alt={game.title}
                    className="absolute inset-0 w-full h-full object-cover"
                />
                <div className="absolute inset-0 top-60 flex items-center justify-center">
                    <h4 className="text-white text-xl font-bold px-4 text-center drop-shadow-md">
                        {game.title}
                    </h4>
                </div>
            </motion.div>

            <motion.div
                className="card-game absolute w-[calc(100%-1rem)] left-2 bottom-2 bg-gradient-to-b from-[#3a1585cc] to-[#2d0457cc] p-4 rounded-lg shadow-xl"
                initial={{ y: 100, opacity: 0 }}
                animate={{
                    y: isOpen ? 0 : 100,
                    opacity: isOpen ? 1 : 0
                }}
                transition={{ duration: 0.5, delay: isOpen ? 0.2 : 0 }}
                style={{ height: '260px' }}
            >
                <div className="flex flex-col h-full space-y-2">
                    <div className="flex items-center text-white">
                        <span className="text-yellow-400 mr-2 text-lg">⭐</span>
                        <span><strong>Рейтинг:</strong> {game.rating}</span>
                    </div>
                    <div className="flex-1 overflow-y-auto text-white text-sm">
                        <p><strong>Описание:</strong> {game.description}</p>
                    </div>
                    <div className="flex items-center text-white">
                        <span className="text-blue-300 mr-2 text-lg">📅</span>
                        <span><strong>Дата:</strong> {game.releaseDate}</span>
                    </div>
                </div>
            </motion.div>
        </div>
    );
});

export default GameCard;
