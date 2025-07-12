import React, { useCallback, useState } from 'react';
import type { ItemKey } from './Menu';
import zona_main from '../../assets/pricezoon/DSC_1470.svg';
import zona_map from '../../assets/pricezoon/DSC_1550.svg';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import PriceCard from './PriceCard';
import BookingModal from './BookingModal';

interface PriceCarouselProps {
    activeItem: ItemKey | null;
}

interface PriceItem {
    name: string;
    mainImage: string;
    mapImage: string;
    prices: {
        time: string;
        price: string;
    }[];
}

export const PriceCarousel: React.FC<PriceCarouselProps> = React.memo(({ activeItem }) => {
    const [selectedTime, setSelectedTime] = useState<string | null>(null);
    const [isOpen, setIsOpen] = useState(false);

    const items: Record<ItemKey, PriceItem> = {
        standard: {
            name: "Standard Zone",
            mainImage: zona_main,
            mapImage: zona_map,
            prices: [
                { time: '1 час', price: '200₽' },
                { time: '3 часа', price: '500₽' },
                { time: '6 часов', price: '900₽' },
                { time: '12 часов', price: '1550₽' },
                { time: 'Пакет ночь', price: '800₽' },
            ]
        },
        comfort: {
            name: "Comfort Zone",
            mainImage: zona_main,
            mapImage: zona_map,
            prices: [
                { time: '1 час', price: '250₽' },
                { time: '3 часа', price: '650₽' },
                { time: '6 часов', price: '1150₽' },
                { time: '12 часов', price: '2100₽' },
                { time: 'Пакет ночь', price: '1000₽' },
            ]
        },
        vip: {
            name: "VIP Zone",
            mainImage: zona_main,
            mapImage: zona_map,
            prices: [
                { time: '1 час', price: '300₽' },
                { time: '3 часа', price: '850₽' },
                { time: '6 часов', price: '1500₽' },
                { time: '12 часов', price: '2800₽' },
                { time: 'Пакет ночь', price: '1300₽' },
            ]
        },
        bootcamp: {
            name: "Bootcamp Zone",
            mainImage: zona_main,
            mapImage: zona_map,
            prices: [
                { time: '1 час', price: '400₽' },
                { time: '3 часа', price: '1100₽' },
                { time: '6 часов', price: '2000₽' },
                { time: '12 часов', price: '3600₽' },
                { time: 'Пакет ночь', price: '1750₽' },
            ]
        },
        'vip-pc': {
            name: "VIP PC Zone",
            mainImage: zona_main,
            mapImage: zona_map,
            prices: [
                { time: '1 час', price: '700₽' },
                { time: '3 часа', price: '1700₽' },
            ]
        }
    };

    const handleTimeSelect = useCallback((time: string) => {
        setSelectedTime(prevTime => (prevTime === time ? null : time));
    }, []);

    const handleOpenModal = useCallback(() => {
        setIsOpen(true);
    }, []);

    const handleCloseModal = useCallback(() => {
        setIsOpen(false);
    }, []);

    return (
        <div className="mx-auto px-4 md:px-0">
            {activeItem && (
                <div>
                    <PriceCard
                        item={items[activeItem]}
                        selectedTime={selectedTime}
                        onTimeSelect={handleTimeSelect}
                        onOpenModal={handleOpenModal}
                    />
                </div>
            )}

            <BookingModal
                isOpen={isOpen}
                onClose={handleCloseModal}
                selectedTime={selectedTime}
            />

            <ToastContainer />
        </div>
    );
});
