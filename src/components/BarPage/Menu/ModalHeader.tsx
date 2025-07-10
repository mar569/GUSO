import { memo } from 'react';
import { IoIosStarHalf } from "react-icons/io";

const ModalHeader: React.FC = () => (
    <div className="bg-black text-white p-5 flex flex-col items-center">
        <h2 className="text-2xl md:text-3xl font-bold w-full flex justify-between">
            <span className="text-sm font-light text-blue-100 text-right">
                Больше чем просто компьютерный клуб
            </span>
        </h2>


        <div className="flex items-center">

            <span
                style={{
                    background: 'linear-gradient(28deg, rgba(252, 176, 69, 1) 5%, rgba(25, 33, 145, 1) 39%, rgba(94, 69, 27, 1) 67%, rgba(172, 42, 176, 1) 91%, rgba(126, 43, 181, 1) 100%)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    display: 'inline-block',
                    fontSize: '8rem',
                    lineHeight: '1.2',
                    fontFamily: "'Permanent Marker', cursive",
                    textTransform: 'uppercase',
                }}
            >
                gosu
            </span>

        </div>


        <div className="flex items-center gap-8">
            <IoIosStarHalf className="text-yellow-500 text-4xl rotate-12" />
            <p className="text-sm text-center" style={{ fontFamily: "'Savate', sans-serif" }}>
                Листай вниз
            </p>
            <IoIosStarHalf className="text-pink-200 text-4xl rotate-45" />
        </div>
    </div>
);

export default memo(ModalHeader);
