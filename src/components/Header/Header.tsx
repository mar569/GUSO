import { HeaderNav } from "./HeaderNav";

interface HeaderProps {
    scrollToAbout: () => void;
    scrollToFavorite: () => void;
    scrollToDiscount: () => void;
}

const Header = ({ scrollToAbout, scrollToFavorite, scrollToDiscount }: HeaderProps) => {
    return (
        <>
            <HeaderNav scrollToAbout={scrollToAbout} scrollToFavorite={scrollToFavorite} scrollToDiscount={scrollToDiscount} />
        </>
    );
}

export default Header;