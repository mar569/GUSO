
import { APP_CONFIG } from '../../constants/alco.constants';
import { Suspense } from 'react';
import LoadingSpinner from '../Fps/LoadingSpinner/LoadingSpinner';
import LazyImage from '../Fps/LazyImage';
import deliciousBg from '@assets/BarPage/Pizza_Food.svg';
import vok from '@assets/BarPage/vok.svg';

const Delicious: React.FC = () => {
    const titleClasses = `uppercase mb-2 sm:mb-4 text-[#6EFF24] transition-all duration-300 
                         text-[24px] sm:text-[30px] md:text-[48px] lg:text-[64px] 
                         text-center sm:text-left`;

    const descClasses = `transition-all duration-300 leading-tight sm:leading-relaxed
                        text-[14px] sm:text-[16px] md:text-[18px]
                        text-center sm:text-left px-2 sm:px-0`;

    return (
        <div className="relative w-full max-w-[1920px] mx-auto" id="delicious">
            {/* Основной контейнер с фоновым изображением */}
            <div className="relative overflow-hidden min-h-[600px] sm:min-h-[700px] lg:min-h-[1080px]">

                <div
                    className="absolute inset-0 blur-[2px] opacity-40 sm:opacity-50"
                    style={{
                        backgroundImage: `url(${deliciousBg})`,
                        backgroundSize: 'cover',
                        backgroundPosition: 'center center',
                        backgroundRepeat: 'no-repeat'
                    }}
                />
                <div className={`relative mx-auto max-w-[${APP_CONFIG.maxWidth}] px-2 sm:px-4 md:px-6 lg:px-8 h-full`}>
                    <div className="w-full h-full flex flex-col pt-8 sm:pt-10 pb-12 sm:pb-20">

                        <div className="mb-4 sm:mb-6">
                            <h2 className={`text-[#6EFF24] transition-all text-[16px] sm:text-[18px] md:text-[20px] text-center sm:text-left`}>
                                Delicious food
                            </h2>
                        </div>
                        <div className="flex-1 flex flex-col-reverse lg:flex-row gap-4 sm:gap-6 lg:gap-8">

                            <div className="w-full lg:w-[55%] xl:w-[780px] flex flex-col justify-center">
                                <h2 className={titleClasses}>
                                    пицца, сэндвичи, вок
                                </h2>
                                <p className={descClasses}>
                                    Вкусные, полюбившиеся многими, популярные позиции как для тебя, так и для всей компании
                                </p>
                            </div>

                            {/* Блок с изображением */}
                            <div className="w-full h-[240px] xs:h-[280px] sm:h-[350px] md:h-[450px] lg:h-[600px] xl:h-[920px] 
                                         mb-4 sm:mb-0 flex items-center justify-center relative">
                                <Suspense fallback={<LoadingSpinner />}>
                                    <div className="relative w-full h-full overflow-hidden rounded-lg sm:rounded-xl md:rounded-2xl 
                                                  shadow-md sm:shadow-lg transition-all duration-300 hover:shadow-xl
                                                  hover:shadow-green-500/20">
                                        <LazyImage
                                            src={vok}
                                            alt="Пицца, сэндвичи и вок - вкусные блюда"
                                            className="w-full h-full object-cover object-center transition-transform duration-500 hover:scale-105"
                                        />
                                    </div>
                                </Suspense>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Delicious;
