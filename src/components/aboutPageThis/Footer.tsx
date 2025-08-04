import cart from '../../assets/evens/cart.png';

export function Footer() {
    return (
        <div className="w-full max-w-[1400px] mx-auto px-4 md:px-8 mt-[50px] md:mt-[150px] pb-10">
            <div className="flex flex-col items-center md:flex-row md:items-center justify-between gap-8">
                <div className='flex flex-col w-full md:w-auto items-center md:items-start text-center md:text-left'>
                    <h3 className="text-[36px] sm:text-[44px] md:text-[64px] text-white font-bold uppercase leading-tight">
                        Контактная информация
                    </h3>
                    <div className="mt-4 text-white text-[14px] md:text-[16px] space-y-2">
                        <p>Ломонсовский проспект, 29к3, Москва</p>
                        <p>+7 (999) 099-43-33</p>
                        <p>Мы с тобой круглые сутки!</p>
                    </div>
                </div>
                <img
                    src={cart}
                    alt="Схема проезда и расположения на карте"
                    className="md:w-auto md:max-w-none rounded-xl self-center md:self-auto"
                />
            </div>
        </div>
    );
}
