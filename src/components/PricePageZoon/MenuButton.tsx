import React from 'react';

interface IMobileMenuButtonProps {
    isOpen: boolean;
    toggleMenu: () => void;
}

export const MenuButton: React.FC<IMobileMenuButtonProps> = React.memo(({ isOpen, toggleMenu }) => {
    return (
        <button
            className="flex items-center cursor-pointer"
            onClick={toggleMenu}
            aria-label={isOpen ? 'Закрыть меню' : 'Открыть меню'}
            aria-expanded={isOpen}
        >
            <svg
                className="w-10 h-10 text-white"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 27 27"
            >
                {isOpen ? (
                    <path stroke="currentColor" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                ) : (
                    <path stroke="currentColor" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                )}
            </svg>
        </button>
    );
});
