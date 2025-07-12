import React, { useCallback } from 'react';
import { MenuButton } from './MenuButton';
import { Menu, type ItemKey } from './Menu';
import { MobileMenu } from './MobileMenu';
import { PriceCarousel } from './PriceCarousel';
import { IoIosArrowRoundUp } from 'react-icons/io';
import logo from '../../assets/fon/logo.png';

const PriceZoon: React.FC = () => {
    const [isOpen, setIsOpen] = React.useState(false);
    const [activeItem, setActiveItem] = React.useState<ItemKey | null>(null);

    const toggleMenu = () => setIsOpen(!isOpen);

    const handleItemClick = useCallback((itemId: ItemKey) => {
        setActiveItem(itemId);
        setIsOpen(false);
    }, []);

    const handleMenuCLick = (() => {
        setActiveItem(null);
        setIsOpen(false);
    })

    return (
        <header className="price relative ">
            <div className="container mx-auto px-4 py-6">
                <div className="flex justify-between items-center">
                    <a href="/">
                        <img src={logo} alt="Логотип" className="w-36 md:w-44" />
                    </a>

                    <div className="z-50">
                        <MenuButton isOpen={isOpen} toggleMenu={toggleMenu} />
                    </div>
                </div>
            </div>

            <div className="container mx-auto">

                <div className="flex flex-col md:flex-row gap-6">

                    <div className="flex-1">
                        <PriceCarousel activeItem={activeItem} />
                    </div>
                    {activeItem === null && (
                        <h2 className="text-white text-center flex items-center text-2xl md:text-4xl font-bold mx-auto">
                            Нажми на меню
                            <IoIosArrowRoundUp className='text-[#cbe2bf] ml-2 rotate-55' />
                        </h2>
                    )}
                    <div className="hidden md:block relative w-64">
                        <Menu isOpen={isOpen} onItemClick={handleItemClick} onMenuClick={handleMenuCLick} />
                    </div>
                </div>
            </div>

            <MobileMenu isOpen={isOpen} onItemClick={handleItemClick} />
        </header>
    );
};

export default PriceZoon;
