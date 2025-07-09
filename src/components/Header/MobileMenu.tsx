import { AnimatePresence, easeInOut, motion } from "framer-motion";
import { Link } from "react-router-dom";

const menuVariants = {
    open: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.5, ease: easeInOut, delay: 0.2 }
    },
    closed: {
        opacity: 0,
        y: -20,
        transition: { duration: 0.5, ease: easeInOut }
    }
}

interface IMobileMenuProps {
    isOpen: boolean;
    scrollToAbout: () => void;
    scrollToFavorite: () => void;
}

export const MobileMenu: React.FC<IMobileMenuProps> = ({ isOpen, scrollToAbout, scrollToFavorite }) => {
    return (
        <AnimatePresence>
            {isOpen && (
                <motion.div
                    initial="closed"
                    animate="open"
                    exit="closed"
                    variants={menuVariants}
                    className="md:hidden absolute top-10 left-0 w-full shadow-lg z-50"
                >
                    <ul className="flex flex-col text-center py-2">
                        <li className="py-3 hover:bg-green-500" onClick={scrollToAbout}>
                            <a href="#" className="block">О нас</a>
                        </li>
                        <li className="py-3 hover:bg-green-500" onClick={scrollToFavorite}>
                            <a href="#" className="block">Твои любимые места</a>
                        </li>
                        <li className="py-3 hover:bg-green-500">
                            <Link
                                to="/bar"

                            >
                                Bar&Hookah
                            </Link>
                        </li>
                        <li className="py-3 hover:bg-green-500">
                            <a href="#" className="block">Акции</a>
                        </li>
                        <li className="py-3 hover:bg-green-500">
                            <a href="#" className="block">Наши цены</a>
                        </li>
                        <li className="p-2">
                            <button className="bg-[#232323] text-white py-2 px-4 rounded-xl cursor-pointer hover:text-black hover:bg-[#505050] duration-500">
                                Связаться с нами
                            </button>
                        </li>
                    </ul>
                </motion.div>
            )}
        </AnimatePresence>
    );
}
