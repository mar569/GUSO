import React from 'react';
import servicesBg from '../../assets/ServicesBg.svg';
import vk from '../../assets/vk.svg';
import whts from '../../assets/whts.svg';
import tg from '../../assets/tg.svg';
import contBg from '../../assets/hookah/DCH_5.svg';

const Services: React.FC = () => {
    return (
        <div className="relative w-full max-w-[1920px] mx-auto min-h-screen">

            <div className="absolute inset-0 -z-10 ">
                <img
                    src={servicesBg}
                    alt="Фон секции контактов"
                    className="w-full h-full object-cover"
                />
            </div>

            <div className="relative mx-auto max-w-[1700px] px-4 sm:px-8 w-full flex flex-col pt-10 pb-20">
                <h2 className="text-[18px] text-[#6EFF24] text-center sm:text-left mb-6 md:mb-10">
                    Services
                </h2>
                <div className="hidden md:flex flex-row items-center justify-between min-h-[600px] py-10 relative">

                    <div className="w-[550px] flex flex-col justify-center px-0 z-10">
                        <h2 className='text-[30px] md:text-[64px] text-[#6EFF24] mb-4'>
                            Наши контакты
                        </h2>
                        <p className='text-[22px] md:text-[28px] text-white mb-6'>
                            Наши сотрудники всегда готовы помочь вам с выбором, оформить бронь и предоставить лучший сервис
                        </p>
                        <div>
                            <div className="mb-6">
                                <a href="tel:+79994333333" className='text-[30px] md:text-[48px] text-white hover:text-[#6EFF24] transition-colors'>
                                    +7 (999) 433-33-33
                                </a>
                            </div>
                            <div className='flex gap-4'>
                                <a href="#">
                                    <img src={vk} alt="ВКонтакте" className='w-[40px] h-[40px] hover:scale-110 transition-transform' />
                                </a>
                                <a href="#">
                                    <img src={whts} alt="WhatsApp" className='w-[40px] h-[40px] hover:scale-110 transition-transform' />
                                </a>
                                <a href="#">
                                    <img src={tg} alt="Telegram" className='w-[40px] h-[40px] hover:scale-110 transition-transform' />
                                </a>
                            </div>
                        </div>
                    </div>

                    <div className="flex-1 flex justify-center relative">
                        <img
                            src={contBg}
                            alt="Интерьер заведения"
                            className="max-w-full h-auto max-h-[920px] object-contain"
                        />
                    </div>
                </div>

                <div className="md:hidden flex flex-col">
                    <img
                        src={contBg}
                        alt="Интерьер заведения"
                        className="w-full max-h-[400px] object-contain object-top mb-8"
                    />

                    <div className="px-0 md:px-4">
                        <h2 className='text-[28px] text-[#6EFF24] mb-4'>
                            Наши контакты
                        </h2>
                        <p className='text-[18px] text-white mb-6'>
                            Наши сотрудники всегда готовы помочь вам с выбором, оформить бронь и предоставить лучший сервис
                        </p>
                        <div className="mb-2 text-center md:text-left">
                            <a href="tel:+79994333333" className='text-[32px] text-white hover:text-[#6EFF24] transition-colors'>
                                +7 (999) 433-33-33
                            </a>
                        </div>
                        <div className='flex gap-4 justify-center'>
                            <a href="#">
                                <img src={vk} alt="ВКонтакте" className='w-[84px] h-[84px] md:w-[100px] md:h-[100px] hover:scale-110 transition-transform' />
                            </a>
                            <a href="#">
                                <img src={whts} alt="WhatsApp" className='w-[84px] h-[84px] md:w-[100px] md:h-[100px] hover:scale-110 transition-transform' />
                            </a>
                            <a href="#">
                                <img src={tg} alt="Telegram" className='w-[84px] h-[84px] md:w-[100px] md:h-[100px] hover:scale-110 transition-transform' />
                            </a>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default Services;
