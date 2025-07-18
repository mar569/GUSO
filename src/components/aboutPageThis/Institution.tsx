import phone from '../../assets/playGame/phone.png'
import game from '../../assets/playGame/game.png'
import Device from './Device';


const Institution: React.FC = () => {
    return (
        <div className='flex flex-col items-left pt-10 relative w-full max-w-[1920px]  mx-auto '>
            <h4 className='text-[30px] sm:text-[40px] md:text-[64px] text-white uppercase pb-10 text-center ' style={{ lineHeight: '100%' }}>
                о заведении
            </h4>
            <div className='flex flex-col md:flex-row justify-center items-center gap-6 md:gap-0'>
                <div className='w-full max-w-[360px] md:max-w-[560px]'>
                    <img src={phone} alt="" className='pb-4 w-[70px] h-[78px] ' />
                    <h2 className='decsk'>Современное круглосуточное киберспортивное <br /> пространство с 57 пк, 4 зонами, 3 VIP-комнатами <br /> и собственным меню и авторскими коктейлями!</h2>
                </div>
                <div className='w-full max-w-[360px] md:max-w-[560px]'>
                    <img src={game} alt="" className='pb-4 w-[70px] h-[78px]' />
                    <h2 className='decsk'>Современное круглосуточное киберспортивное пространство <br /> с 57 пк, 4 зонами, 3 VIP-комнатами и собственным меню <br /> и авторскими коктейлями!</h2>
                </div>
            </div>
            <Device />
        </div>
    );
}
export default Institution