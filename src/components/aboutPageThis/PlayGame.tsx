import React, { useState, useCallback } from 'react';
import { Link } from 'react-router-dom';
import Carousel from './Carousel';
import { games } from './gamesData';
import { FaArrowLeftLong, FaArrowRight } from 'react-icons/fa6';
import Institution from './Institution';

const PlayGame: React.FC = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const totalCards = games.length;

    const handleNext = useCallback(() => {
        setCurrentIndex((prev) => {
            if (prev + 1 >= totalCards) {
                return 0;
            }
            return prev + 1;
        });
    }, [totalCards]);

    const handlePrev = useCallback(() => {
        setCurrentIndex((prev) => (prev - 1 + totalCards) % totalCards);
    }, [totalCards]);

    return (
        <div className="relative w-full max-w-[1920px] mx-auto min-h-[720px] px-4 pt-10">
            <div className="text-center max-w-3xl mx-auto mb-10">
                <h4 className="text-[#fff] text-[42px] sm:text-[64px] font-bold" style={{ lineHeight: '100%' }}>
                    Сыграй в <span className="text-[#6EFF24]">любую</span> из этих игр в нашем
                    <span className="text-[#9124FF]"> клубе</span>
                </h4>
            </div>

            <Carousel
                games={games}
                currentIndex={currentIndex}
                onCardClick={() => { }}
            />

            <div className="flex justify-between mt-4">
                <button onClick={handlePrev} className="card card-button text-white px-4 py-2 rounded">
                    <FaArrowLeftLong />
                </button>
                <button onClick={handleNext} className="card card-button text-white bg-gray-700 hover:bg-gray-600 px-4 py-2 rounded">
                    <FaArrowRight />
                </button>
            </div>

            <div className="w-full flex justify-center mt-[24px] ">
                <button
                    className='button-click flex w-full max-w-[300px] justify-center text-center items-center cursor-pointer bg-gradient-to-r from-[#0d0d0d] to-[#081001] py-2 px-6 rounded-4xl text-[18px] md:text-[20px] font-bold'
                    style={{ fontFamily: "'Poppins', sans-serif" }}
                >
                    <Link to="/prices" className="text-inherit">Забронировать</Link>
                </button>
            </div>
            <Institution />
        </div>
    );
};

export default PlayGame;
