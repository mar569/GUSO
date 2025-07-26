import React from 'react';

interface ZoneCardProps {
    description: string;
    imageSrc: string;
    altText: string;
}

const ZoneCard: React.FC<ZoneCardProps> = ({ description, imageSrc, altText }) => {
    return (
        <div className="bg-[#131313] p-4 flex items-end justify-between h-[130px]">
            <p className="text-white text-[14px] md:text-[16px]">{description}</p>
            <div className='bg-[#a82121a0] shadow-md shadow-amber-50 rounded-t-2xl'>
                <img
                    src={imageSrc}
                    alt={altText}
                    className="w-full h-28 md:h-35 object-cover rounded"
                />
            </div>
        </div>
    );
};

export default ZoneCard;
