import headImage from '../../assets/fon/head_2.svg';

export function HeaderInfo() {
    return (
        <div className="flex flex-col items-start justify-start pt-[262px] w-full">

            <div className="flex flex-col md:flex-row-reverse gap-8 w-full">
                <div className="flex justify-center md:justify-start md:w-1/2">
                    <img
                        src={headImage}
                        alt="headImage"
                        className="max-w-full h-auto md:h-[500px] object-contain"
                    />
                </div>

                <div className="flex flex-col justify-center md:w-1/2">
                    <h2
                        className="text-[#6EFF24] text-[40px] md:text-[90px] mb-4"
                        style={{ lineHeight: '130%' }}
                    >
                        Больше, чем просто компьютерный клуб
                    </h2>
                    <button className="bg-[#232323] text-white py-2 px-6 rounded-xl cursor-pointer hover:text-black hover:bg-[#505050] duration-500 w-fit">
                        Войти в аккаунт
                    </button>
                </div>
            </div>
        </div>
    );
}
