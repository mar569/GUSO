import cocktails from '../../assets/BarPage/Gosu_cocktail .svg'

const Cocktails: React.FC = () => {
    return (
        <div className="relative w-full max-w-[1920px] mx-auto min-h-[850px]">
            <img src={cocktails} alt="" className='opacity-90 -z-10 object-cover min-h-[850px]' />
            <div className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2'>
                <h2 className='text-[32px] sm:text-[44px] md:text-[108px] text-white'
                    style={{
                        lineHeight: '100%'
                    }}>Gosu cocktails</h2>
            </div>
        </div>
    );
};

export default Cocktails;
