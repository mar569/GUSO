interface IMobileMenuButtonProps {
    isOpen: boolean;
    toggleMenu: () => void;
}

export const MobileMenuButton: React.FC<IMobileMenuButtonProps> = ({ isOpen, toggleMenu }) => {
    return (
        <button
            className="md:hidden flex items-center"
            onClick={toggleMenu}
            aria-label={isOpen ? 'Закрыть меню' : 'Открыть меню'}
            aria-expanded={isOpen}
        >
            <svg
                className="w-8 h-8 text-[#bababa]"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
            >
                {isOpen ? (
                    <path stroke="currentColor" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                ) : (
                    <path stroke="currentColor" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                )}
            </svg>
        </button>
    );
};
