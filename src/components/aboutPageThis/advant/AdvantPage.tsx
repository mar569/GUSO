import advant from '../../../assets/playGame/advant.png';
import AdvantVariant from './AdvantVariant';

const AdvantPage: React.FC = () => {
    return (
        <div className='container w-full min-h-[852px] lg:h-[1000px] max-w-[1920px] mx-auto mt-38 p-2 md:p-0'>
            <div className='flex flex-col items-center'>
                <img
                    src={advant}
                    alt="Наши преимущества"
                />
                <h2 className='text-[24px] sm:text-[40px] md:text-[64px] text-white uppercase pb-10 text-center'>
                    наши преимущества
                </h2>
            </div>
            <AdvantVariant />
        </div>
    );
}

export default AdvantPage;
