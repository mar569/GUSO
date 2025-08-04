import React from 'react';
import ZoneHeader from './ZoneHeader';
import pc from '../../../assets/zoneabout/pc.png';
import samsung from '../../../assets/zoneabout/samsung.png';
import clava from '../../../assets/zoneabout/clava.png';
import ZonePlayer from './ZonePlayer';
import video_4 from '../../../assets/IMG_5684.mp4';

const Zone: React.FC = () => {
    return (
        <div className='container p-4 md:p-0 w-full max-w-[1920px] min-h-[852px] lg:h-[1074px] mx-auto bg-[#131313] mt-4'>
            <ZoneHeader />
            <div className="relative">
                <ZonePlayer src={video_4} />
                <div className="absolute inset-0 flex flex-col items-center justify-center z-10 p-4 md:p-0">
                    <h2 className="text-white text-3xl sm:text-4xl lg:text-5xl font-bold text-left mb-8">
                        ЗОНЫ
                    </h2>
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 w-full max-w-[1134px] h-auto opacity-80">
                        <div className="bg-[#131313] p-4 flex items-end justify-between h-[130px]">
                            <p className="text-white text-[14px] md:text-[16px]">24 ПК с мощным железом</p>
                            <div className='bg-[#a82121a0] shadow-md shadow-amber-50 rounded-t-2xl'>
                                <img
                                    src={pc}
                                    alt="Зона 1"
                                    className="w-full h-28 md:h-35 object-cover rounded"
                                />
                            </div>
                        </div>
                        <div className="bg-[#131313] p-4 flex items-end justify-between h-[130px]">
                            <p className="text-white text-[14px] md:text-[16px]">27” Мониторы с частотой 144 гц</p>
                            <div className='bg-[#eeff2f78] shadow-md shadow-amber-50 rounded-t-2xl'>
                                <img
                                    src={samsung}
                                    alt="Зона 2"
                                    className="w-full h-28 md:h-35 object-cover rounded"
                                />
                            </div>
                        </div>
                        <div className="bg-[#131313] p-4 flex items-end justify-between h-[130px]">
                            <p className="text-white text-[14px] md:text-[16px]">Механические клавиатуры на Blue свитчах</p>
                            <div className='bg-[#4f1871a0] shadow-md shadow-amber-50 rounded-t-2xl'>
                                <img
                                    src={clava}
                                    alt="Зона 3"
                                    className="w-full h-28 md:h-35 object-cover rounded"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Zone;