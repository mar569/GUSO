import React, { useEffect, useRef, useState } from 'react';
import logo from '../../assets/fon/logo.png';
import { Link } from 'react-router-dom';
import video_1 from '../../assets/IMG_5659.mp4';

const AnimatedVideo: React.FC = () => {
    const videoRef = useRef<HTMLVideoElement | null>(null);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const playVideo = async () => {
            if (videoRef.current) {
                try {
                    await videoRef.current.play();
                } catch {
                    setError("Не удалось воспроизвести видео. Пожалуйста, обновите страницу или проверьте настройки браузера.");
                }
            }
        };

        playVideo();
    }, []);

    return (
        <div className="h-screen w-screen overflow-hidden relative">
            <video
                ref={videoRef}
                src={video_1}
                autoPlay
                muted
                className="w-full h-full object-cover"
            />
            <header className="flex flex-col px-4 sm:px-0 py-4 h-full absolute top-0 left-0 w-full z-10">
                <div className="container h-full">
                    <div className="flex justify-between items-center w-full mb-8 relative h-16 bg-opacity-70">
                        <a href="/">
                            <img src={logo} alt="Логотип" className="w-[140px] md:w-[180px]" />
                        </a>
                        <nav>
                            <button className="items-center flex cursor-pointer bg-gradient-to-r from-[#31FF6B] to-[#84FF0A] text-[#000] py-2 px-6 rounded-4xl text-[18px] md:text-[20px] font-bold hover:bg-[#84FF0A] transition duration-500"
                                style={{ fontFamily: 'Poppins' }}>

                                <Link to="/prices">Забронировать</Link>
                            </button>
                        </nav>
                    </div>
                </div>
            </header>


            {error && (
                <div className="absolute bottom-10 left-0 w-full flex justify-center">
                    <p className="bg-red-500 text-white p-2 rounded-lg">
                        {error}
                    </p>
                </div>
            )}
        </div>
    );
};

export default AnimatedVideo;
