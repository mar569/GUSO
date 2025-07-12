import { IoIosArrowRoundUp } from 'react-icons/io';
import vk from '@assets/BarPage/vk.svg';
import whts from '@assets/BarPage/whats.svg';
import insta from '@assets/BarPage/instagram.svg';

const ContactServices = () => {
    return (
        <div className='flex flex-col md:flex-row justify-between items-center w-full max-w-[1700px] mx-auto p-4'>
            <div className='flex flex-col items-center mb-6 md:mb-0'>
                <img src={vk} alt="VK" className='w-16 h-16 md:w-20 md:h-20' />
                <h2 className='uppercase text-18 md:text-[24px] text-[#12B1C7] font-semibold pt-2'>Группы Вконтакте</h2>
                <p className='uppercase text-24 md:text-[36px] text-[#FFFFFF] pb-2 '>gosu lounge bar</p>
                <div className='flex items-center bg-gradient-to-br from-[#1b1a28] via-[#23409d] to-[#0f354a] px-4 py-2 rounded-lg shadow-md  transition duration-300'>
                    <a href="#" target="_blank" rel="noopener noreferrer" className='text-white'>перейти по ссылке</a>
                    <IoIosArrowRoundUp className="ml-2 rotate-45 text-white" size={34} />
                </div>
            </div>
            <div className='flex flex-col items-center mb-6 md:mb-0'>
                <img src={whts} alt="WhatsApp" className='w-16 h-16 md:w-20 md:h-20' />
                <h2 className='uppercase text-18 md:text-[24px] text-[#49CE05] pt-2 '>What's App</h2>
                <p className='uppercase text-24 md:text-[36px] text-[#FFFFFF] pb-2'>+7 (915) 433-43-43</p>
                <div className='flex items-center bg-gradient-to-br from-[#1d281a] via-[#1e9826] to-[#023009] px-4 py-2 rounded-lg shadow-md  transition duration-300'>
                    <a href="#" target="_blank" rel="noopener noreferrer" className='text-white'>перейти по ссылке</a>
                    <IoIosArrowRoundUp className="ml-2 rotate-45 text-white" size={34} />
                </div>
            </div>
            <div className='flex flex-col items-center mb-6 md:mb-0'>
                <img src={insta} alt="Instagram" className='w-16 h-16 md:w-20 md:h-20' />
                <h2 className='uppercase text-18 md:text-[24px] text-[#FF24DC] pt-2'>Inst</h2>
                <p className='uppercase text-24 md:text-[36px] text-[#FFFFFF] pb-2'>Gosu.Bar</p>
                <div className='flex items-center  bg-gradient-to-br from-[#281a22] via-[#981e5b] to-[#bb13b9] px-4 py-2 rounded-lg shadow-md transition duration-300'>
                    <a href="#" target="_blank" rel="noopener noreferrer" className='text-white'>перейти по ссылке</a>
                    <IoIosArrowRoundUp className="ml-2 rotate-45 text-white" size={34} />
                </div>
            </div>
        </div>
    );
}

export default ContactServices;
