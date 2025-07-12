import { AnimatePresence, motion } from "framer-motion";

export type ItemKey = 'standard' | 'comfort' | 'vip' | 'bootcamp' | 'vip-pc';

const menuVariants = {
    open: {
        opacity: 1,
        y: 0,
        transition: {
            type: "spring" as const,
            stiffness: 300,
            damping: 30
        }
    },
    closed: {
        opacity: 0,
        y: 20,
        transition: {
            duration: 0.2
        }
    }
};

interface IMenuProps {
    isOpen: boolean;
    onItemClick: (item: ItemKey) => void;
    onMenuClick: () => void;
}

export const Menu: React.FC<IMenuProps> = ({ isOpen, onItemClick, onMenuClick }) => {
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
                    variants={menuVariants}
                    className="cursor-pointer w-full bg-black rounded-lg shadow-lg "
                    onClick={onMenuClick}
                >
                    <ul className="py-2">
                        {menuItems.map((item) => (
                            <li
                                key={item.id}
                                className="px-4 py-3 hover:bg-purple-50 cursor-pointer transition-colors"
                                onClick={() => {
                                    onItemClick(item.id as ItemKey);
                                    onMenuClick();
                                }}
                            >
                                <span className="text-gray-800">{item.label}</span>
                            </li>
                        ))}
                    </ul>
                </motion.div>
            )}
        </AnimatePresence>
    );
};
