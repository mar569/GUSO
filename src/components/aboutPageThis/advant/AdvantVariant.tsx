import * as images from '../../../assets/advantzone';

const AdvantVariant: React.FC = () => {
    return (
        <div className='flex flex-col items-center p-2'>
            <div className='flex flex-col md:flex-row gap-4 md:gap-2 w-full justify-center'>
                <div className='flex flex-col relative mb-4 md:mb-0'>
                    <img
                        src={images.cartZone}
                        alt="Видеокарты"
                        className='w-full max-w-[690px] h-auto object-cover opacity-30'
                    />

                    <h4 className='text-left text-lg md:text-xl pt-2 pb-1 z-10'>Видеокарты</h4>
                    <p className='text-left text-sm md:text-base z-10'>RTX 3070, RX 6900 XT, RTX 4070, RTX 4080, RTX 4090TI</p>
                    <img
                        src={images.eclipse_9}
                        alt="Эффект"
                        className='absolute left-1/2 transform -translate-x-1/2 w-1/2 md:max-w-[366px] h-auto z-10'
                    />
                    <img
                        src={images.rx}
                        alt="Эффект"
                        className='absolute left-1/2 transform -translate-x-1/2 w-1/2 md:max-w-[366px] h-auto z-10'
                    />
                </div>

                <div className='flex flex-col relative mb-4 md:mb-0'>
                    <img
                        src={images.cartZone}
                        alt="Мониторы"
                        className='w-full max-w-[690px] h-auto object-cover opacity-30'
                    />

                    <h4 className='text-left text-lg md:text-xl pt-2 pb-1 z-10'>Мониторы</h4>
                    <p className='text-left text-sm md:text-base z-10'>240 HZ, 240 HZ FHD, 240 HZ 2K , 240 HZ 4K</p>
                    <img
                        src={images.eclipse_9}
                        alt="Эффект"
                        className='absolute left-1/2 transform -translate-x-1/2 w-1/2 md:max-w-[366px] h-auto z-10'
                    />
                    <img
                        src={images.eclipse_10}
                        alt="Эффект"
                        className='absolute left-1/3 transform -translate-x-1/2 w-1/2 md:max-w-[366px] h-auto z-10'
                    />
                    <img
                        src={images.samsung}
                        alt="Эффект"
                        className='absolute left-1/2 transform -translate-x-1/2 w-1/2 md:max-w-[366px] h-auto z-10'
                    />
                </div>
            </div>

            <div className='flex flex-col md:flex-row gap-4 md:gap-6 w-full justify-center mt-15'>

                <div className='flex flex-col relative mb-4 md:mb-0 w-full md:max-w-[332px]'>
                    <img src={images.deviceZone} alt="Устройства" className='w-full h-full min-h-[200px] md:max-h-[217px] opacity-30' />

                    <h4 className='text-left text-lg md:text-xl pt-2 pb-1 z-10'>Best Devices</h4>
                    <p className='text-left text-sm md:text-base z-10'>Исключительно лучший инвентарь для комфортной игры</p>
                    <img
                        src={images.devicee}
                        alt="Эффект"
                        className='absolute left-1/2 transform -translate-x-1/2 w-1/2 md:min-w-[187px] h-auto z-10'
                        style={{ bottom: '25%', zIndex: 20 }}
                    />
                    <img
                        src={images.eclipse_13}
                        alt="Эффект"
                        className='absolute left-1/2 transform -translate-x-1/2 w-1/2 md:max-w-[366px] h-auto z-10'
                        style={{ bottom: '5%' }}
                    />

                </div>


                <div className='flex flex-col relative mb-4 md:mb-0 w-full md:max-w-[332px]'>
                    <img src={images.foodZone} alt="Вкусная еда" className='w-full h-full min-h-[200px] md:max-h-[217px] opacity-30' />

                    <h4 className='text-left text-lg md:text-xl pt-2 pb-1 z-10'>Вкусная еда</h4>
                    <p className='text-left text-sm md:text-base z-10'>Широкий выбор позиций лучших кухонь мира</p>
                    <img
                        src={images.eclipse_15}
                        alt="Эффект"
                        className='absolute left-1/2 rotate-180 transform -translate-x-1/2 w-1/2 md:max-w-[366px] h-auto z-10'
                        style={{ bottom: '70%' }}
                    />
                    <img
                        src={images.fododpaste}
                        alt="Эффект"
                        className='absolute left-1/2 transform -translate-x-1/2 w-[70%] md:min-w-[238px] h-auto z-10 '
                        style={{ bottom: '35%', zIndex: 20 }}
                    />
                    <img
                        src={images.eclipse_14}
                        alt="Эффект"
                        className='absolute left-1/2 rotate-180 transform -translate-x-1/2 w-[90%] md:max-w-[366px] h-auto z-10'
                        style={{ bottom: '2%' }}
                    />
                </div>

                <div className='flex flex-col relative mb-4 md:mb-0 w-full md:max-w-[332px]'>
                    <img src={images.barZone} alt="Premium Бар" className='w-full h-full min-h-[200px] md:max-h-[217px] opacity-30' />

                    <h4 className='text-left text-lg md:text-xl pt-2 pb-1'>Premium Бар</h4>
                    <p className='text-left text-sm md:text-base'>Огромный перечень напитков для каждого из вас</p>
                    <img
                        src={images.cocktail}
                        alt="Эффект"
                        className='absolute left-1/2 transform -translate-x-1/2 w-1/2 md:min-w-[127px] h-auto z-10'
                        style={{ bottom: '30%', zIndex: 20 }}
                    />
                    <img
                        src={images.eclipse_13}
                        alt="Эффект"
                        className='absolute left-1/2 transform -translate-x-1/2 w-[90%] md:max-w-[366px] h-auto z-10'

                    />
                </div>

                <div className='flex flex-col relative mb-4 md:mb-0 w-full md:max-w-[332px]'>
                    <img src={images.hookZone} alt="Паровые коктейли" className='w-full h-full min-h-[200px] md:max-h-[217px] opacity-30' />

                    <h4 className='text-left text-lg md:text-xl pt-2 pb-1'>Паровые коктейли</h4>
                    <p className='text-left text-sm md:text-base'>Настоящий симбиоз вкуса, расслабления и наслаждения</p>
                    <img
                        src={images.eclipse_14}
                        alt="Эффект"
                        className='absolute left-1/2 transform -translate-x-1/2 w-1/2 md:max-w-[366px] h-auto z-10'
                        style={{ bottom: '50%' }}
                    />
                    <img
                        src={images.bazoka}
                        alt="Эффект"
                        className='absolute left-1/2 bottom-[19%] md:bottom-[30%] transform -translate-x-1/2 w-[60%] md:min-w-[237px] h-auto z-10'
                        style={{ zIndex: 20 }}
                    />

                    <img
                        src={images.eclipse_11}
                        alt="Эффект"
                        className='absolute left-1/2 transform -translate-x-1/2 w-1/2 md:max-w-[366px] h-auto z-10'
                        style={{ bottom: '20%' }}
                    />
                </div>
            </div>
        </div>
    );
}

export default AdvantVariant;
