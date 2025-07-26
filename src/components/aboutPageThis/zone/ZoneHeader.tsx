import React from 'react';
import { Link } from 'react-router-dom';

const ZoneHeader: React.FC = () => {
    return (
        <div className="w-full max-w-[1400px] md:max-w-[1408px] mx-auto flex justify-between items-center py-12">
            <h4 className='uppercase text-[#fff] text-[22px] sm:text-[44px] md:text-[64px] font-bold'>
                Игровые зоны
            </h4>
            <button className="flex cursor-pointer bg-[#101E09] text-[#6EFF24] py-3 px-6 text-[14px] md:text-[20px] font-bold hover:bg-[#1f2816] transition duration-500">
                <Link to="/prices">5 Игровых зон с 57 ПК и 3 VIP - комнаты</Link>
            </button>
        </div>
    );
};

export default ZoneHeader;
