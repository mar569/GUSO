import * as images from '../../assets/clubImage';
import camera from '../../assets/clubImage/camera.png'
const ClubImage: React.FC = () => {
    return (
        <div className="w-full max-w-[1920px] mx-auto overflow-hidden -z-10 min-h-[697px] ">
            <div className="flex justify-center items-center mb-8 gap-2">
                <img src={camera} alt="" className='w-[64px] h-[48px] md:w-[104px] md:h-[80px]' />
                <h4 className="text-[26px] text-center font-medium text-[#FFFFFF] md:text-[64px]">
                    Фотки с нашего клуба
                </h4>
            </div>

            <div className="flex flex-col lg:flex-row justify-center gap-2 p-4 md:p-0 ">
                <div className="flex-1 relative overflow-hidden">
                    <img
                        src={images.club1}
                        alt="Интерьер 1"
                        className="w-full min-w-[480px] h-[275px] object-cover"
                        loading="lazy"
                    />
                    <div className="h-[275px] relative overflow-hidden">
                        <img src={images.club4} alt="Интерьер 3" className="w-full h-full object-cover" loading="lazy" />
                    </div>
                </div>

                <div className="flex-2 h-[550px] relative overflow-hidden">
                    <img
                        src={images.club2}
                        alt="Главный зал бара"
                        className="w-full h-full object-cover"
                        loading="lazy"
                    />
                </div>

                <div className="flex-1 relative overflow-hidden">
                    <img
                        src={images.club3}
                        alt="Интерьер 2"
                        className="w-full h-[275px] min-w-[480px] object-cover"
                        loading="lazy"
                    />
                    <div className="h-[275px] relative overflow-hidden">
                        <img src={images.club5} alt="Интерьер 4" className="w-full h-full object-cover" loading="lazy" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ClubImage;
