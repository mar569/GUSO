import PlayStationVideo from "./PlaystationVideo";

const PlayStation: React.FC = () => {
    return (
        <div className="flex flex-col md:flex-row relative w-full max-w-[1920px] min-h-[719px] mx-auto ">
            <div className="flex-grow flex justify-center md:justify-start h-full w-full max-w-[900px] max-h-[517px] order-1 md:order-1">
                <PlayStationVideo />
            </div>

            <div className="flex flex-col items-start max-w-[567px] max-h-[516px] justify-center order-2 md:order-2 md:mr-auto ml-4 md:ml-11  ">
                <h4 className="text-[#FFFFFF] text-[30px] sm:text-[40px] md:text-[64px] max-w-[471px] text-right"
                    style={{ lineHeight: '100%' }}>Играй на <span className="text-[#2293FC]">playstation 5</span>
                </h4>
                <p className="mt-4 text-[16px] md:text-[24px] text-white text-left md:text-center"
                    style={{ lineHeight: '100%' }}> Располагайся в комфортном диване и захватывай закуски, соревнуясь с друзьями или проходя тайтлы на новых Playstation 5</p>
            </div>
        </div>
    );
}

export default PlayStation;
