import { HeaderNav } from "./HeaderNav";

interface HeaderProps {
    scrollToAbout: () => void;
    scrollToFavorite: () => void;
}

const Header = ({ scrollToAbout, scrollToFavorite }: HeaderProps) => {
    return (
        <>
            <HeaderNav scrollToAbout={scrollToAbout} scrollToFavorite={scrollToFavorite} />
        </>
    );
}

export default Header;