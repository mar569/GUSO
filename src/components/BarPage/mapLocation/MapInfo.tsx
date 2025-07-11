import React from 'react';
import { IoIosArrowRoundUp } from 'react-icons/io';
import mabBg from '@assets/BarPage/mapBg.svg';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const MapInfo: React.FC<{ address: string }> = ({ address }) => {
    const openInYandexMaps = () => {
        const coordinates = '37.514359,55.704263';
        const yandexMapsUrl = `https://yandex.ru/maps/?ll=${coordinates}&z=19.24`;

        try {
            window.open(yandexMapsUrl, '_blank');
        } catch (error) {
            console.error('Ошибка при открытии Яндекс.Карт:', error);
            toast.error('Не удалось открыть Яндекс.Карты. Попробуйте еще раз.', {
                icon: <span>⚠️</span>
            });
        }
    };

    return (
        <div className="w-full max-w-[1600px] mx-auto relative overflow-hidden p-4" style={{ height: 'min(100vw, 600px)' }}>
            <img
                src={mabBg}
                alt={`Изображение адреса: ${address}`}
                className="w-full h-full object-cover"
            />
            <div className="bg-black rounded-bl-4xl absolute top-1/2 left-[40%] transform -translate-x-1/2 -translate-y-1/2 w-full max-w-[280px] md:max-w-[380px] text-center py-6 px-6 md:py-8 md:px-12 ">
                <h2 className="text-[#6EFF24] text-2xl md:text-3xl font-medium text-left">
                    Как до нас добраться?
                </h2>
                <p className="text-white text-lg md:text-xl mt-2">
                    {address}
                </p>

                <button
                    onClick={openInYandexMaps}
                    className="flex items-center cursor-pointer bg-purple-800 hover:bg-purple-600 duration-700 text-white py-3 px-6 rounded-lg transition-all z-10"
                >
                    <span>Открыть в Яндекс.Картах</span>
                    <IoIosArrowRoundUp className="ml-2 rotate-45" size={34} />
                </button>
            </div>
            <ToastContainer /> {/* Добавьте контейнер для уведомлений */}
        </div>
    );
}

export default MapInfo;
