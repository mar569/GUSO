import bgMenu from '@assets/BarPage/bgBarMenu.svg';
import MenuModal from './Menu/MenuModal';

const MenuBar: React.FC = () => {
    return (
        <div className="relative w-full max-w-[1920px] mx-auto min-h-[850px] flex">

            <img
                src={bgMenu}
                alt="Фон меню бара"
                className='opacity-90 -z-10 object-cover w-full h-full absolute'
            />


            <div className='mx-auto w-full max-w-[1700px] px-2 sm:px-8 flex items-center'>
                <div className='flex flex-col w-full py-20'>

                    <h2 className='text-[#6EFF24] text-[36px] sm:text-[44px] md:text-[128px] font-bold text-center md:text-left'
                        style={{ lineHeight: '130%' }}>
                        Наше меню
                    </h2>
                    <div className='flex flex-col mt-2 md:mt-0 sm:flex-row items-center gap-4 w-full max-w-[750px]'>
                        <MenuModal />
                        <p className='text-white text-sm md:text-[20px]'
                            style={{ fontFamily: "'Savate', sans-serif" }}>
                            ← нажмите, если хотите увидеть больше
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MenuBar;
