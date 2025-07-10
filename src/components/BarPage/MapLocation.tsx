import React, { useEffect, useState, useCallback } from 'react';
import mabBg from '../../assets/BarPage/mapBg.svg';
import { IoIosArrowRoundUp } from 'react-icons/io';

const MapLocation: React.FC<{ address: string }> = ({ address }) => {
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

    const openInYandexMaps = () => {
        // Указываем координаты для открытия конкретной точки
        const coordinates = '37.514359,55.704263';
        const yandexMapsUrl = `https://yandex.ru/maps/?ll=${coordinates}&z=19.24`;
        window.open(yandexMapsUrl, '_blank');
    };

    useEffect(() => {
        window.addEventListener('scroll', toggleVisibility);
        return () => window.removeEventListener('scroll', toggleVisibility);
    }, [toggleVisibility]);

    return (
        <div className="relative w-full max-w-[1920px] mx-auto bg-[#3D3D3D] flex flex-col">
            {/* Заголовок и адрес */}
            <div className="w-full text-center py-6 px-4 md:py-8 ">
                <h2 className="text-[#6EFF24] text-2xl md:text-3xl font-medium text-left">
                    Как до нас добраться?
                </h2>
                <p className="text-white text-lg md:text-xl mt-2">
                    {address}
                </p>
                <button
                    onClick={openInYandexMaps}
                    className="mt-4 flex items-center cursor-pointer bg-gradient-to-r from-[#652689] to-[#30105c] hover:from-[#7a30b3] hover:to-[#45187d] text-white py-3 px-6 rounded-lg transition-all duration-300"
                >
                    <span>Открыть в Яндекс.Картах</span>
                    <IoIosArrowRoundUp className="ml-2 rotate-45" size={24} />
                </button>
            </div>

            <div className="w-full overflow-hidden p-4" style={{ height: 'min(100vw, 600px)' }}>
                <img
                    src={mabBg}
                    alt={`Изображение адреса: ${address}`}
                    className="w-full h-full object-cover"
                />
            </div>

            <button
                onClick={scrollToTop}
                className={`scroll-to-top-btn ${isVisible ? 'showed' : ''}`}
                aria-label="Наверх"
                type="button"
            >
                <IoIosArrowRoundUp
                    className="text-white text-3xl transition-transform duration-300"
                    size={38}
                />
            </button>
        </div>
    );
};

export default MapLocation;
