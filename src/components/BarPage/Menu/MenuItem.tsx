import { memo } from 'react';

const MenuItem = memo(({ name, price, details, volume }: {
    name: string;
    price: string;
    details?: string;
    volume?: string;
}) => (
    <div className="group">
        <div className="flex flex-col">
            <div className="flex items-baseline gap-2">
                <span className="text-lg font-medium text-white group-hover:text-[#AF31F3] transition-colors whitespace-nowrap"
                    style={{ fontFamily: 'Permanent Marker, cursive' }}>
                    {name}
                </span>

                <span className="flex-1 border-t border-dashed border-gray-300 mx-2"></span>

                <div className="flex items-baseline">
                    {volume && (
                        <span className="text-sm text-gray-100 mr-6 whitespace-nowrap">
                            {volume}
                        </span>
                    )}
                    <span className="text-lg  text-white whitespace-nowrap"
                        style={{ fontFamily: 'Permanent Marker, cursive' }}>
                        {price}
                    </span>


                </div>
            </div>


            {details && (
                <div className="text-sm text-gray-500 mt-1">{details}</div>
            )}
        </div>
    </div>
));

export default MenuItem;
