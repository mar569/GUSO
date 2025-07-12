import React from 'react';

interface PriceCardProps {
    item: {
        name: string;
        mainImage: string;
        prices: {
            time: string;
            price: string;
        }[];
    };
    selectedTime: string | null;
    onTimeSelect: (time: string) => void;
    onOpenModal: () => void;
}

const PriceCard: React.FC<PriceCardProps> = React.memo(({ item, selectedTime, onTimeSelect, onOpenModal }) => {
    return (
        <div className="flex items-center min-h-[800px] md:min-h-[80vh]">
            <div className="max-w-[1100px] w-full relative rounded-xl shadow-2xl h-full">

                <div className="relative h-[70vh] md:aspect-video w-full min-h-[600px]">
                    <img
                        src={item.mainImage}
                        alt={item.name}
                        className="absolute inset-0 w-full h-full object-cover"
                    />

                    <div className="absolute inset-0 bg-black/60"></div>
                    <div className="relative h-full flex flex-col justify-between p-6 sm:p-8 text-white">
                        <div>
                            <h2 className="text-3xl sm:text-[64px] text-[#6EFF24] font-bold mb-4 sm:mb-6">
                                {item.name}
                            </h2>

                            <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-5 sm:gap-2 mb-6 sm:mb-8">
                                {item.prices.map((priceInfo, index) => (
                                    <button
                                        key={index}
                                        onClick={() => onTimeSelect(priceInfo.time)}
                                        className={`px-3 py-3 sm:px-3 sm:py-2 rounded-lg cursor-pointer font-medium text-base sm:text-xl transition-all ${selectedTime === priceInfo.time
                                            ? 'bg-[#6A1ECA] text-white shadow-md opacity-90'
                                            : 'bg-[#14230C] text-white hover:bg-[#6A1ECA] hover:text-white hover:shadow-2xl duration-500 opacity-60'
                                            }`}
                                    >
                                        <div className="flex flex-col items-center">
                                            <span>{priceInfo.time}</span>
                                            <span className="text-[#6EFF24] text-base sm:text-xl">{priceInfo.price}</span>
                                        </div>
                                    </button>
                                ))}
                            </div>
                        </div>

                        {selectedTime && (
                            <div className="animate-fade-in">
                                <div className="bg-white/10 backdrop-blur-sm p-4 sm:p-4 rounded-lg border border-[#7b6f82] mb-4">
                                    <div className="flex justify-between text-base sm:text-base">
                                        <span className="text-white/80">Вы выбрали:</span>
                                        <span className="font-bold">
                                            {selectedTime} ({item.prices.find(p => p.time === selectedTime)?.price})
                                        </span>
                                    </div>
                                </div>

                                <button
                                    onClick={onOpenModal}
                                    className="w-full bg-purple-800 hover:bg-[#9A20E0] transition-colors text-white 
                                        text-xl md:text-[26px] px-8 py-3 rounded-full cursor-pointer
                                        focus:outline-none focus:ring-2 focus:ring-purple-800 duration-500"
                                    style={{ fontFamily: 'Poppins', boxShadow: '4px 10px 30px rgba(88, 32, 186, 0.6)' }}
                                >
                                    ЗАБРОНИРОВАТЬ
                                </button>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
});

export default PriceCard;
