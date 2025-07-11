import { useState } from 'react';
import { MobileMenuButton } from './MobileMenuButton';
import { MobileMenu } from './MobileMenu';
import { HeaderInfo } from './HeaderInfo';
import { DekstopNav } from './DekstopNav';
import logo from '@assets/fon/logo.png';

interface HeaderNavProps {
    scrollToAbout: () => void;
    scrollToFavorite: () => void;
}

export const HeaderNav: React.FC<HeaderNavProps> = ({ scrollToAbout, scrollToFavorite }) => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => setIsMenuOpen((prev) => !prev);

    return (
        <header className="header flex flex-col px-4 sm:px-0 py-4 min-h-[850px]">
            <div className="container">
                <div className="flex justify-between items-center w-full mb-8 relative">
                    <a href="/">
                        <img src={logo} alt="Логотип" className="w-[140px] md:w-[180px]" />
                    </a>

                    <MobileMenuButton isOpen={isMenuOpen} toggleMenu={toggleMenu} />
                    <DekstopNav scrollToAbout={scrollToAbout} scrollToFavorite={scrollToFavorite} />
                    <div className="hidden md:flex items-center">
                        <button className="bg-gradient-to-b from-[#8a7c92] to-[#436237] flex flex-1 text-white py-2 px-6 rounded-xl cursor-pointer hover:text-black hover:bg-[#505050] duration-500"
                            style={{ fontFamily: 'Poppins' }}>
                            Связаться с нами
                        </button>
                    </div>
                </div>

                <MobileMenu isOpen={isMenuOpen} scrollToAbout={scrollToAbout} scrollToFavorite={scrollToFavorite} />
                <HeaderInfo />
            </div>
        </header>
    );
};
