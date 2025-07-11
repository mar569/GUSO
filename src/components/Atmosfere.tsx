import { GoArrowUpRight } from "react-icons/go";
import atmosfereBg from '@assets/atmosfere/atmsfereBg.svg';
import bg1 from '@assets/atmosfere/D1.svg';
import bg2 from '@assets/atmosfere/D2.svg';
import bg3 from '@assets/atmosfere/D3.svg';
import bg4 from '@assets/atmosfere/D4.svg';
import bg5 from '@assets/atmosfere/D5.svg';
import bg6 from '@assets/atmosfere/D6.svg';
import bg7 from '@assets/atmosfere/D7.svg';


const Atmosfere: React.FC = () => {
    return (
        <div className="relative w-full max-w-[1920px] mx-auto overflow-hidden -z-10 min-h-screen">
            <img
                src={atmosfereBg}
                alt="Фон атмосферы бара"
                className="absolute inset-0 object-cover w-full h-full"
                loading="lazy"
            />

            <div className="relative mx-auto max-w-[1700px] px-2 sm:px-8 w-full h-full pt-10 pb-20">
                <div className="mb-8">
                    <h2 className="text-[14px] text-center md:text-left font-medium text-[#6EFF24] md:text-[18px]">
                        BAR & HOOKAH
                    </h2>
                    <h1 className="mt-1 text-[24px] md:text-[48px] uppercase text-[#6EFF24] text-left hidden md:block">
                        ламповая атмосфера нашего бара
                    </h1>
                </div>

                <div className="relative w-full gap-2 h-auto flex flex-col lg:flex-row justify-center flex-grow">
                    <div className="w-full lg:w-[66.66%] flex flex-col">
                        <div className="flex gap-2 mb-2 flex-col lg:flex-row">
                            <div className="h-[431px] relative overflow-hidden">
                                <img
                                    src={bg1}
                                    alt="Главный зал бара"
                                    className="h-full object-cover transition-transform duration-500 hover:scale-105"
                                    loading="lazy"
                                />
                            </div>
                            <div className="h-[431px] relative overflow-hidden flex-1">
                                <img
                                    src={bg2}
                                    alt="Барная стойка"
                                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                                    loading="lazy"
                                />
                            </div>
                        </div>

                        <div className="grid grid-cols-2 sm:grid-cols-4 w-full h-[364px] gap-2">
                            <div className="h-full relative overflow-hidden">
                                <img src={bg4} alt="Интерьер 1" className="w-full h-full object-cover transition-transform duration-500 hover:scale-110" loading="lazy" />
                            </div>
                            <div className="h-full relative overflow-hidden">
                                <img src={bg5} alt="Интерьер 2" className="w-full h-full object-cover transition-transform duration-500 hover:scale-110" loading="lazy" />
                            </div>
                            <div className="h-full relative overflow-hidden hidden sm:block">
                                <img src={bg6} alt="Интерьер 3" className="w-full h-full object-cover transition-transform duration-500 hover:scale-110" loading="lazy" />
                            </div>
                            <div className="h-full relative overflow-hidden hidden sm:block">
                                <img src={bg7} alt="Интерьер 4" className="w-full h-full object-cover transition-transform duration-500 hover:scale-110" loading="lazy" />
                            </div>
                        </div>
                    </div>

                    <div className="h-[815px] relative overflow-hidden lg:w-[33.33%]">
                        <img
                            src={bg3}
                            alt="Коктейль и барная зона"
                            className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                            loading="lazy"
                        />
                    </div>
                </div>
            </div>

            <div className="absolute bottom-4 right-6">
                <div className="relative flex items-center justify-end rounded-full bg-[#6A1ECA] w-22 h-22 md:w-28 md:h-28">
                    <span className="text-[12px] md:text-[20px] text-[#6EFF24] font-medium tracking-widest">Подробно </span>
                    <GoArrowUpRight />
                </div>
            </div>
        </div>
    );
};

export default Atmosfere;
