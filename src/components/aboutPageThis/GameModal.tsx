
import React from 'react';
import { motion } from 'framer-motion';

interface Game {
    title: string;
    image: string;
    rating: string;
    description: string;
    releaseDate: string;
}

interface GameModalProps {
    game: Game;
    onClose: () => void;
}

const GameModal: React.FC<GameModalProps> = ({ game, onClose }) => {
    return (
        <motion.div
            className="p-4 md:p-0 fixed inset-0 flex items-center justify-center bg-black/90"
            onClick={onClose}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
        >
            <motion.div
                className="bg-gradient-to-r from-[#6dff245a] to-[#cc24ff88] border-1 border-[#5a4960] rounded-b-2xl p-6 max-w-md w-full shadow-2xl transform transition-transform duration-300"
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                exit={{ scale: 0 }}
            >
                <h5 className="text-4xl font-bold mb-2 text-white text-center transition-transform duration-500 transform hover:scale-105">
                    {game.title}
                </h5>
                <img
                    src={game.image}
                    alt={game.title}
                    className="w-full h-48 object-cover rounded-b-2xl mb-4 blur-[2px] shadow-lg transition-transform duration-300 transform hover:scale-105"
                />
                <div className="bg-[#45276473] bg-opacity-90 p-4 rounded-lg shadow-lg">
                    <p className="text-white flex items-center mb-2 transition-opacity duration-500">
                        <span className="text-[#FF6B6B] mr-1">⭐</span>
                        <span className="font-bold mr-1">Рейтинг:</span> {game.rating}
                    </p>
                    <p className="text-white flex items-center mb-2 transition-opacity duration-500">
                        <span className="text-[#84FF0A] mr-1">📝</span>
                        <span className="font-bold mr-1">Описание:</span> {game.description}
                    </p>
                    <p className="text-white flex items-center transition-opacity duration-500">
                        <span className="text-[#00BFFF] mr-1">📅</span>
                        <span className="font-bold mr-1">Дата выпуска:</span> {game.releaseDate}
                    </p>
                </div>
            </motion.div>
        </motion.div>
    );
};

export default GameModal;
