
import ButtonScroll from './ButtonScroll';
import FooterHead from './FooterHead';
import FooterNav from './FooterNav';

const Footer: React.FC = () => {
    return (
        <div className="relative w-full max-w-[1920px] mx-auto bg-[#282828] flex flex-col">
            <FooterHead />
            <FooterNav />
            <ButtonScroll />
        </div>
    )
}
export default Footer