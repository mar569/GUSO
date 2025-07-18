import { AnimatePresence, motion } from "framer-motion";
import { Link } from "react-router-dom";

const menuVariants = {
    open: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.5 }
    },
    closed: {
        opacity: 0,
        y: -20,
        transition: { duration: 0.5 }
    }
}

interface IMobileMenuProps {
    isOpen: boolean;
    scrollToFavorite: () => void;
    scrollToDiscount: () => void;
    onOpenPhoneModal: () => void;
}

export const MobileMenu: React.FC<IMobileMenuProps> = ({ isOpen, scrollToFavorite, scrollToDiscount, onOpenPhoneModal }) => {
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
                    <ul className="flex flex-col text-center py-2" style={{ fontFamily: 'Poppins' }}>
                        <li className="py-3 hover:bg-green-500" >
                            <Link to="/aboutus">
                                О нас
                            </Link>
                        </li>
                        <li className="py-3 hover:bg-green-500" onClick={scrollToFavorite}>
                            Твои любимые места
                        </li>
                        <li className="py-3 hover:bg-green-500">
                            <Link to="/bar">Bar&Hookah</Link>
                        </li>
                        <li className="py-3 hover:bg-green-500" onClick={scrollToDiscount}>
                            Акции
                        </li>
                        <li className="py-3 hover:bg-green-500">
                            <Link to="/prices">
                                Наши цены
                            </Link>
                        </li>
                        <button className="py-3 rounded-2xl bg-[#6A1ECA] opacity-90 w-full max-w-[200px] mx-auto "
                            style={{ fontFamily: 'Poppins', boxShadow: '10px 50px 30px rgba(109, 6, 153, 0.5)' }}
                            onClick={onOpenPhoneModal}
                        >
                            Связаться с нами
                        </button>

                    </ul>
                </motion.div>
            )}
        </AnimatePresence>
    );
}
