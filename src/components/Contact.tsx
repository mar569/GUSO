
import React from 'react';
import contactBg from '@assets/Contact.bg.svg';

const Contact: React.FC = () => {

    return (
        <div className="relative w-full max-w-[1920px] mx-auto ">
            <img src={contactBg} alt="" className='opacity-90 -z-10 min-h-[852px] object-cover' />
            <div className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2'>
                <h2 className='text-[24px] sm:text-[30px] md:text-[108px] text-white '
                    style={{
                        lineHeight: '100%'
                    }}>Contact us</h2>
            </div>
        </div>
    );
};

export default Contact;
