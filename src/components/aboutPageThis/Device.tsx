import DeviceVideo from "./DeviceVideo";

const Device: React.FC = () => {
    return (
        <div className="flex flex-col md:flex-row pt-22 relative w-full max-w-[1920px] h-[719px] mx-auto pb-4">
            <div className="flex-grow flex justify-center md:justify-end h-full w-full max-w-[900px] max-h-[517px] order-1 md:order-2">
                <DeviceVideo />
            </div>

            <div className="flex flex-col items-start max-w-[567px] max-h-[516px] justify-center order-2 md:order-1 md:ml-auto mr-11 ">
                <h4 className="text-[#AC24FF] text-[30px] sm:text-[40px] md:text-[64px] max-w-[332px]"
                    style={{ lineHeight: '100%' }}>Крутые <span className="text-[#FFFFFF]">девайсы</span>
                </h4>
                <p className="mt-4 text-[16px] md:text-[24px] text-white"
                    style={{ lineHeight: '100%' }}>Играй на современном железе, слушай в топовых наушниках, кликай на механической клавиатуре. Будь уверен, наши девайсы дают раскрыть весь твой игровой скилл на максимум.</p>
            </div>

        </div>
    );
}

export default Device;
