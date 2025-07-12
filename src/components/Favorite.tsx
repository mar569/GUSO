import favorite from '../assets/favorite/faboritePlace.svg'

const Favorite: React.FC = () => {

    return (
        <div className="relative w-full max-w-[1920px] mx-auto min-h-[850px] ">
            <img src={favorite} alt="" className='opacity-90 -z-10 min-h-[850px] object-cover' />
            <div className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2'>
                <h2 className='text-[24px] sm:text-[30px] md:text-[108px] text-white '
                    style={{
                        lineHeight: '100%'
                    }}>Your favorite places</h2>
            </div>
        </div>
    );
};

export default Favorite;
