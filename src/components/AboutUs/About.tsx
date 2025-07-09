import about from '../../assets/fon/aboutBg.svg'

export const About: React.FC = function () {
    return (
        <div className="relative w-full max-w-[1920px] mx-auto min-h-[852px]">
            <img src={about} alt="" className='min-h-[852px] object-cover' />
            <div className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2'>
                <h2 className='text-[30px] sm:text-[40px] md:text-[108px] text-white'
                    style={{
                        lineHeight: '100%'
                    }}>About us</h2>
            </div>
        </div>
    )
}
