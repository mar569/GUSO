import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import vk from '../../assets/BarPage/vk.svg';
import whts from '../../assets/BarPage/whats.svg';
import insta from '../../assets/BarPage/instagram.svg';

interface PhoneModalProps {
    isOpen: boolean;
    onClose: () => void;
    selectedTime: string | null;
}

const Phone: React.FC<PhoneModalProps> = React.memo(({ isOpen, onClose }) => {

    return (
        <AnimatePresence>
            {isOpen && (
                <div className="fixed inset-0 z-50" role="dialog" aria-modal="true">
                    <motion.div
                        className="absolute inset-0 bg-black/70 backdrop-blur-sm"
                        onClick={onClose}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                    />
                    <div className="relative mx-4 my-20 md:mx-auto max-w-md lg:max-w-3xl flex flex-col">
                        <motion.div
                            className="relative bg-black rounded-xl shadow-2xl overflow-hidden flex flex-col p-0.5"
                            style={{
                                background: 'linear-gradient(28deg, rgba(252, 176, 69, 1) 5%, rgba(25, 33, 145, 1) 39%, rgba(36, 27, 48, 1) 67%, rgba(172, 42, 176, 1) 91%, rgba(126, 43, 181, 1) 100%)'
                            }}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: 20 }}
                        >
                            <div className="bg-black border-b rounded-t-lg text-white p-5 flex flex-col items-center w-full">
                                <h2 className="text-2xl md:text-3xl font-bold">Связаться</h2>

                            </div>
                            <div className='flex flex-col md:flex-row justify-between items-center w-full max-w-[1700px] mx-auto p-4'>
                                <div className='flex flex-col items-center mb-6 md:mb-0'>
                                    <img src={vk} alt="VK" className='w-16 h-16 md:w-20 md:h-20' />
                                    <h2 className='uppercase text-18 md:text-[24px] text-[#12B1C7] font-semibold pt-2'>Группы Вконтакте</h2>
                                    <p className='uppercase text-24 md:text-[36px] text-[#FFFFFF] pb-2 '>gosu lounge bar</p>

                                </div>
                                <div className='flex flex-col items-center mb-6 md:mb-0'>
                                    <img src={whts} alt="WhatsApp" className='w-16 h-16 md:w-20 md:h-20' />
                                    <h2 className='uppercase text-18 md:text-[24px] text-[#49CE05] pt-2 '>What's App</h2>
                                    <p className='uppercase text-24 md:text-[36px] text-[#FFFFFF] pb-2'>+7 (915) 433-43-43</p>

                                </div>
                                <div className='flex flex-col items-center mb-6 md:mb-0'>
                                    <img src={insta} alt="Instagram" className='w-16 h-16 md:w-20 md:h-20' />
                                    <h2 className='uppercase text-18 md:text-[24px] text-[#FF24DC] pt-2'>Inst</h2>
                                    <p className='uppercase text-24 md:text-[36px] text-[#FFFFFF] pb-2'>Gosu.Bar</p>

                                </div>
                            </div>
                            <div className="bg-black rounded-b-lg p-4 border-t flex justify-end">
                                <button
                                    onClick={onClose}
                                    className="bg-black/10 hover:bg-[#694e78] duration-500 cursor-pointer border border-[#7D34EB] text-white px-4 py-2 rounded-lg text-sm font-light"
                                    aria-label="Закрыть модальное окно"
                                >
                                    Закрыть
                                </button>
                            </div>
                        </motion.div>
                    </div>
                </div>
            )}
        </AnimatePresence>
    );
});

export default Phone;
