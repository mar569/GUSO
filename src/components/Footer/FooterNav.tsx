import { Link } from 'react-router-dom';
import logo from '@assets/fon/logo.png';

const FooterNav = () => {
    return (
        <div className="w-full justify-center py-6 px-4 md:py-8">
            <img src={logo} className="mx-auto text-2xl md:text-3xl font-medium" />

            <div className='flex flex-col md:flex-row w-full text-center'>
                <nav className='mx-auto flex flex-col md:flex-row text-white'>
                    {['About us', 'Services', 'Contact', 'Support'].map((item, index) => (
                        <Link to={`/${item.replace(' ', '').toLowerCase()}`} key={index}
                            className="md:mx-4 my-2 md:my-0 hover:text-green-500 transition duration-300">
                            <span>{item}</span>
                        </Link>
                    ))}
                </nav>
            </div>
            <div className='w-full text-center mx-auto mt-2'>
                <p className='text-[#6B6B6B] text-[15px] md:text-[18px]'
                    style={{ lineHeight: '100%', letterSpacing: '0.02em' }}>
                    © 2022 - 2023 Gosu Cybersoft - Больше, <br />
                    чем просто компьютерный клуб
                </p>
            </div>
        </div>
    )
}

export default FooterNav    