import { useCallback, useEffect, useState } from "react";
import { IoIosArrowRoundUp } from "react-icons/io";

const ButtonScroll = () => {
    const [isVisible, setIsVisible] = useState(false);
    const [lastScrollY, setLastScrollY] = useState(0);
    const [isScrollingUp, setIsScrollingUp] = useState(false);

    const toggleVisibility = useCallback(() => {
        setIsVisible(window.pageYOffset > window.innerHeight / 2);
    }, []);

    const handleScroll = useCallback(() => {
        const currentScrollY = window.pageYOffset;

        // Определяем, прокручивается ли вверх или вниз
        if (currentScrollY < lastScrollY) {
            setIsScrollingUp(true);
        } else {
            setIsScrollingUp(false);
        }

        setLastScrollY(currentScrollY);
        toggleVisibility();
    }, [lastScrollY, toggleVisibility]);

    const scrollToTop = useCallback(() => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    }, []);

    useEffect(() => {
        let ticking = false;

        const onScroll = () => {
            if (!ticking) {
                window.requestAnimationFrame(() => {
                    handleScroll();
                    ticking = false;
                });
                ticking = true;
            }
        };

        window.addEventListener('scroll', onScroll);
        return () => {
            window.removeEventListener('scroll', onScroll);
        };
    }, [handleScroll]);

    return (
        <button
            onClick={scrollToTop}
            className={`scroll-to-top-button ${isVisible && !isScrollingUp ? 'showed' : ''}`}
            aria-label="Наверх"
            type="button"
        >
            <IoIosArrowRoundUp
                className="text-white text-3xl transition-transform duration-300"
                size={42}
            />
        </button>
    );
}

export default ButtonScroll;
