import { Link } from 'react-router-dom';
import logo from '@assets/BarPage/logo.svg';
import barInfo from '@assets/BarPage/BG.svg';


const BarPage: React.FC = () => {
    return (
        <header className="bar flex flex-col px-4 sm:px-0 py-4 relative min-h-[850px]">
            <div className='w-full flex justify-center'>
                <Link to="/">
                    <img src={logo} alt="Логотип" />
                </Link>
            </div>
            <div className="flex flex-col items-center justify-center pt-[100px] w-full relative">
                <div className="flex flex-col md:flex-row-reverse gap-8 w-full max-w-[1700px] justify-center">
                    <div className="flex justify-center md:justify-start md:w-1/2 relative">
                        <img
                            src={barInfo}
                            alt="headImage"
                            className="max-w-full h-auto md:h-[544px] object-contain"
                        />
                    </div>
                    <div className="flex flex-col justify-center md:w-1/2 relative">
                        <h2
                            className="text-[#6EFF24] text-[32px] md:text-[90px] mb-2 text-left"
                            style={{ lineHeight: '130%' }}
                        >
                            Gosu lounge bar
                        </h2>
                        <p className="text-[14px] md:text-[28px] mt-4 md:mt-2 text-left">
                            Атмосферное место на Ломоносовском проспекте, чтобы провести вечер в компании друзей со вкусным кальяном, авторскими коктейлями, вином и настольными играми.
                        </p>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default BarPage;
