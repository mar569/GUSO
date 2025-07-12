import React from 'react';
import { Link } from 'react-router-dom';

interface INavigation {
    className?: string;
    scrollToAbout: () => void;
    scrollToFavorite: () => void;
    scrollToDiscount: () => void;
}

export const DekstopNav: React.FC<INavigation> = ({ className, scrollToAbout, scrollToFavorite, scrollToDiscount }) => {
    return (
        <nav className={`hidden md:flex flex-grow justify-center ${className}`}>
            <ul className="flex text-center" style={{ fontFamily: 'Poppins' }}>
                <li className="cursor-pointer mx-4 text-[18px] hover:text-green-500 duration-500" onClick={scrollToAbout}>
                    О нас
                </li>
                <li className="cursor-pointer mx-4 text-[18px] hover:text-green-500 duration-500" onClick={scrollToFavorite}>
                    Твои любимые места
                </li>
                <li className="cursor-pointer mx-4 text-[18px] hover:text-green-500 duration-500">
                    <Link to="/bar">Bar&Hookah</Link>
                </li>
                <li className="cursor-pointer mx-4 text-[18px] hover:text-green-500 duration-500" onClick={scrollToDiscount}>
                    Акции
                </li>
                <li className="cursor-pointer mx-4 text-[18px] hover:text-green-500 duration-500">
                    <Link to="/prices">Наши цены</Link>
                </li>
            </ul>
        </nav>
    );
};
