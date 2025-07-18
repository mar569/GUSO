import React from 'react';
import { Link } from 'react-router-dom';

interface INavigation {
    className?: string;
    scrollToFavorite: () => void;
    scrollToDiscount: () => void;
}

export const DekstopNav: React.FC<INavigation> = ({ className, scrollToFavorite, scrollToDiscount }) => {
    return (
        <nav className={`hidden md:flex flex-grow justify-center head_nav ${className}`}>
            <ul className="flex text-center" style={{ fontFamily: 'Poppins' }}>
                <li className="cursor-pointer mx-4 text-[18px] duration-500">
                    <Link to="/aboutus">О нас</Link>
                </li>
                <li className="cursor-pointer mx-4 text-[18px] duration-500" onClick={scrollToFavorite}>
                    Твои любимые места
                </li>
                <li className="cursor-pointer mx-4 text-[18px] duration-500">
                    <Link to="/bar">Bar&Hookah</Link>
                </li>
                <li className="cursor-pointer mx-4 text-[18px] duration-500" onClick={scrollToDiscount}>
                    Акции
                </li>
                <li className="cursor-pointer mx-4 text-[18px] duration-500">
                    <Link to="/prices">Наши цены</Link>
                </li>
            </ul>
        </nav>
    );
};
