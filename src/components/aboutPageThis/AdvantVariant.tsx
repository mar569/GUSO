import * as images from '../../assets/advantzone';

const AdvantVariant: React.FC = () => {
    return (
        <div className='flex flex-col items-center p-2'>
            <div className='flex flex-col md:flex-row gap-4 md:gap-2 w-full justify-center'>
                <div className='flex flex-col relative mb-4 md:mb-0'>
                    <img src={images.cartZone} alt="Видеокарты" className='w-full max-w-[690px] relative z-0' />

                    <div className='absolute left-1/2 transform -translate-x-1/2 flex justify-center w-full'>
                        <img src={images.eclipse_9} alt="" className='absolute w-1/2 md:max-w-[266px] h-auto z-0' />
                        <img src={images.rx} alt="RX" className='relative w-1/2 md:max-w-[266px] h-auto z-10' />
                    </div>

                    <h4 className='text-left text-lg md:text-xl pt-2 pb-1'>Видеокарты</h4>
                    <p className='text-left text-sm md:text-base'>RTX 3070, RX 6900 XT, RTX 4070, RTX 4080, RTX 4090TI</p>
                </div>

                <div className='flex flex-col relative mb-4 md:mb-0'>
                    <img src={images.cartZone} alt="Видеокарты" className='w-full max-w-[690px] relative z-0' />
                    <div className='absolute top-12  left-1/2 transform -translate-x-1/2 flex justify-center w-full'>
                        <img src={images.eclipse_10} alt="" className='absolute w-1/2 md:max-w-[366px] h-auto z-0' />
                        <img src={images.samsung} alt="RX" className='absolute  left-1/2 transform -translate-x-1/2 w-1/2 md:max-w-[284px] h-auto z-10' />
                        <img src={images.eclipse_11} alt="" className='absolute w-1/2 md:max-w-[366px] h-auto z-0' />
                    </div>

                    <h4 className='text-left text-lg md:text-xl pt-2 pb-1'>Мониторы</h4>
                    <p className='text-left text-sm md:text-base'>240 HZ, 240 HZ FHD, 240 HZ 2K , 240 HZ 4K</p>
                </div>
            </div>

            <div className='flex flex-col md:flex-row gap-4 md:gap-2 w-full justify-center mt-15'>
                <div className='flex flex-col mb-4 md:mb-0 w-full max-w-[330px]'>
                    <img src={images.deviceZone} alt="Устройства" className='w-full h-full min-h-[200px] md:min-h-[271px]' />
                    <h4 className='text-left text-lg md:text-xl pt-2 pb-1'>Best Devices</h4>
                    <p className='text-left text-sm md:text-base'>Исключительно лучший инвентарь для комфортной игры</p>
                </div>

                <div className='flex flex-col mb-4 md:mb-0 w-full max-w-[330px]'>
                    <img src={images.foodZone} alt="Вкусная еда" className='w-full h-full min-h-[200px] md:min-h-[271px]' />
                    <h4 className='text-left text-lg md:text-xl pt-2 pb-1'>Вкусная еда</h4>
                    <p className='text-left text-sm md:text-base'>Широкий выбор позиций лучших кухонь мира</p>
                </div>

                <div className='flex flex-col mb-4 md:mb-0 w-full max-w-[330px]'>
                    <img src={images.barZone} alt="Premium Бар" className='w-full h-full min-h-[200px] md:min-h-[271px]' />
                    <h4 className='text-left text-lg md:text-xl pt-2 pb-1'>Premium Бар</h4>
                    <p className='text-left text-sm md:text-base'>Огромный перечень напитков для каждого из вас</p>
                </div>

                <div className='flex flex-col mb-4 md:mb-0 w-full max-w-[330px]'>
                    <img src={images.hookZone} alt="Паровые коктейли" className='w-full h-full min-h-[200px] md:min-h-[271px]' />
                    <h4 className='text-left text-lg md:text-xl pt-2 pb-1'>Паровые коктейли</h4>
                    <p className='text-left text-sm md:text-base'>Настоящий симбиоз вкуса, расслабления и наслаждения</p>
                </div>
            </div>
        </div>
    );
}

export default AdvantVariant;
