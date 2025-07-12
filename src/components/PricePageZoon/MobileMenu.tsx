import { AnimatePresence, motion } from "framer-motion";
import React from 'react';

export type ItemKey = 'standard' | 'comfort' | 'vip' | 'bootcamp' | 'vip-pc';

const mobileVariants = {
    open: {
        opacity: 1,
        scale: 1,
        transition: {
            type: 'spring' as const,
            stiffness: 300,
            damping: 30
        }
    },
    closed: {
        opacity: 0,
        scale: 0.95,
        transition: {
            duration: 0.2
        }
    }
};

interface IMobileMenuProps {
    isOpen: boolean;
    onItemClick: (item: ItemKey) => void;
}

export const MobileMenu: React.FC<IMobileMenuProps> = React.memo(({ isOpen, onItemClick }) => {
    const menuItems = [
        { id: "standard", label: "Standard Zone" },
        { id: "comfort", label: "Comfort Zone" },
        { id: "vip", label: "VIP Zone" },
        { id: "bootcamp", label: "Bootcamp Zone" },
        { id: "vip-pc", label: "VIP PC" },
    ];

    return (
        <AnimatePresence>
            {isOpen && (
                <motion.div
                    initial="closed"
                    animate="open"
                    exit="closed"
                    variants={mobileVariants}
                    className=" fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-sm"
                >
                    <motion.ul
                        className="w-full max-w-md px-4 space-y-6"
                        initial={{ y: 20 }}
                        animate={{ y: 0 }}
                        transition={{ delay: 0.2 }}
                    >
                        {menuItems.map((item, index) => (
                            <motion.li
                                key={item.id}
                                initial={{ opacity: 0, x: -20 }}
                                animate={{
                                    opacity: 1,
                                    x: 0,
                                    transition: { delay: 0.3 + index * 0.1 }
                                }}
                                whileHover={{ scale: 1.03 }}
                                whileTap={{ scale: 0.98 }}
                                className="overflow-hidden"
                            >
                                <button
                                    onClick={() => onItemClick(item.id as ItemKey)}
                                    className="w-full p-4 text-2xl font-semibold text-center text-white transition-all bg-[#1e1e36] hover:bg-[#30305a] hover:text-white rounded-xl backdrop-blur cursor-pointer duration-500"
                                    style={{ fontFamily: 'Poppins', }}
                                >
                                    {item.label}
                                </button>
                            </motion.li>
                        ))}
                    </motion.ul>
                </motion.div>
            )}
        </AnimatePresence>
    );
});
