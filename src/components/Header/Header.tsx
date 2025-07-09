import { HeaderNav } from "./HeaderNav";

interface HeaderProps {
    scrollToAbout: () => void;
    scrollToFavorite: () => void;
}

export function Header({ scrollToAbout, scrollToFavorite }: HeaderProps) {
    return (
        <>
            <HeaderNav scrollToAbout={scrollToAbout} scrollToFavorite={scrollToFavorite} />
        </>
    );
}
