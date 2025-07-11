import { useCallback, useEffect, useState, useRef } from "react";
import { IoIosArrowRoundUp } from "react-icons/io";

const ButtonScroll = () => {
    const [isVisible, setIsVisible] = useState(false);
    const [isScrolling, setIsScrolling] = useState(false);
    const scrollTimeout = useRef<number | null>(null);

    const toggleVisibility = useCallback(() => {
        setIsVisible(window.pageYOffset > window.innerHeight / 2);
    }, []);

    const handleScroll = useCallback(() => {
        setIsScrolling(true);
        toggleVisibility();

        if (scrollTimeout.current) {
            clearTimeout(scrollTimeout.current);
        }

        scrollTimeout.current = window.setTimeout(() => {
            setIsScrolling(false);
        }, 1000);
    }, [toggleVisibility]);

    const scrollToTop = useCallback(() => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    }, []);

    useEffect(() => {
        const debouncedHandleScroll = () => {
            handleScroll();
        };

        window.addEventListener('scroll', debouncedHandleScroll);
        return () => {
            window.removeEventListener('scroll', debouncedHandleScroll);
            if (scrollTimeout.current) {
                clearTimeout(scrollTimeout.current);
            }
        };
    }, [handleScroll]);

    return (
        <button
            onClick={scrollToTop}
            className={`scroll-to-top-button ${isVisible && !isScrolling ? 'showed' : ''}`}
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
