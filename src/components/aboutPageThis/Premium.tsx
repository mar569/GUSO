import { Link } from 'react-router-dom';
import premium from '../../assets/premiumBar/PremiumBar.png';
import cockt from '../../assets/premiumBar/cockt.png';
import summer from '../../assets/premiumBar/Summer-Cocktail.png';

const Premium = () => {
    return (
        <div className='relative flex flex-col md:flex-row items-center w-full md:max-w-[1400px] h-auto mx-auto mt-[150px]'>
            <img
                src={premium}
                alt="Premium Bar"
                className="absolute inset-0 w-full h-full object-cover opacity-30"
            />

            <div className='flex flex-col md:flex-row gap-8 w-full max-w-[1134px] mx-auto z-10'>
                <div className="flex flex-col items-start flex-1 ml-4 md:ml-30 pt-4 md:pt-0">
                    <div className="flex items-center mb-4">
                        <img src={cockt} alt="Cocktail Icon" className="w-12 h-auto mr-2" />
                        <h2 className="text-white text-3xl md:text-4xl lg:text-[64px] font-bold">Premium бар</h2>
                    </div>
                    <p className="text-white text-[14px] md:text-[18px] w-full md:max-w-[651px] mb-6"
                        style={{ lineHeight: '150%' }}>
                        Наше заведение подарит каждому гостю приятную атмосферу и
                        гастрономическое удовольствие. Здесь вы найдёте все для отдыха: аппетитный выбор пиццы, салатов,
                        пасты, десертов и других блюд никого не оставит равнодушным.
                        Широкий ассортимент напитков не только утолит жажду,
                        но и оставит свежее послевкусие, за которым захочется вернуться ещё раз.
                    </p>
                    <Link to="/prices">
                        <button className="bg-gradient-to-r from-[#31FF6B] to-[#84FF0A] text-black py-3 px-8 rounded-full text-[14px] md:text-[16px] font-bold hover:opacity-90 transition duration-300">
                            Забронировать время
                        </button>
                    </Link>
                </div>
            </div>

            <div className='flex justify-center w-full z-10'>
                <img
                    src={summer}
                    alt="Летние коктейли в Premium баре"
                    className="w-full h-auto md:min-h-[590px] object-cover rounded-lg"
                />
            </div>
        </div>
    );
}

export default Premium;
