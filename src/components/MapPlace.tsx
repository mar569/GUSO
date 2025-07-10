import React, { useEffect, useState, useCallback } from 'react';
import { Link } from 'react-router-dom';
import mapPlace from '../assets/mapBg.svg';
import logo from '../assets/fon/logo.png';
import { IoIosArrowRoundUp } from "react-icons/io";


const MapPlace: React.FC = React.memo(() => {
    const [isVisible, setIsVisible] = useState(false);

    const toggleVisibility = useCallback(() => {
        setIsVisible(window.pageYOffset > window.innerHeight / 2);
    }, []);

    const scrollToTop = useCallback(() => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    }, []);

    useEffect(() => {
        window.addEventListener('scroll', toggleVisibility);
        return () => window.removeEventListener('scroll', toggleVisibility);
    }, [toggleVisibility]);

    return (
        <div className="relative w-full max-w-[1920px] mx-auto bg-[#282828] flex flex-col">
            <div className="w-full text-center py-6 px-4 md:py-8">
                <h2 className="text-[#6EFF24] text-2xl md:text-3xl font-medium">
                    Where are we located
                </h2>
                <p className="text-white text-lg md:text-xl mt-2">
                    Москва, Ломоносовский проспект, 29к3
                </p>
            </div>

            <div className="w-full overflow-hidden" style={{ height: 'min(100vw, 1512px)' }}>
                <img
                    src={mapPlace}
                    alt="Карта расположения"
                    className="w-full h-full object-cover"
                />
            </div>

            <div className="w-full justify-center py-6 px-4 md:py-8">
                <img src={logo} className="mx-auto text-2xl md:text-3xl font-medium" />

                <div className='flex flex-col md:flex-row w-full text-center'>
                    <nav className='mx-auto flex flex-col md:flex-row text-white'>
                        {['About us', 'Services', 'Contact', 'Support'].map((item, index) => (
                            <Link to={`/${item.replace(' ', '').toLowerCase()}`} key={index}
                                className="md:mx-4 my-2 md:my-0 hover:text-green-500 transition duration-300">
                                <span>{item}</span>
                            </Link>
                        ))}
                    </nav>
                </div>

                <div className='w-full text-center mx-auto mt-2'>
                    <p className='text-[#6B6B6B] text-[15px] md:text-[18px]'
                        style={{ lineHeight: '100%', letterSpacing: '0.02em' }}>
                        © 2022 - 2023 Gosu Cybersoft - Больше, <br />
                        чем просто компьютерный клуб
                    </p>
                </div>
            </div>

            <button
                onClick={scrollToTop}
                className={`sctoll-to-top-btn ${isVisible ? 'showed' : ''}`}
                aria-label="Наверх"
                type="button"
            >
                <IoIosArrowRoundUp
                    className="text-white text-3xl transition-transform duration-300"
                    size={37}
                />
            </button>
        </div>
    );
});

export default MapPlace;
