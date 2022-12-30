import React from 'react';
import Blinker from '../assets/blinker.svg'

const Footer = () => {

    const footerYear = new Date().getFullYear()

    return (
        <div>
            <div className='mx-auto pt-16 grid lg:grid-cols-2 gap-8 justify-center text-gray-300 bg-[#131314] px-20'>
                <div>
                    <h1 id='' className="w-full font-ibmBold font-extrabold text-3xl text-white uppercase">JUAN<span className='text-[#A6FD5B]'>.</span>GINEZ <img className='w-[14px] blink pb-1 relative right-2 inline-block' src={Blinker} alt="" />
                    </h1>
                </div>

                <div className='lg:col-span-1 flex justify-center xl:justify-end'>
                    <ul className='hidden font-ibmBold font-bold md:flex uppercase'>
                            <a href='https://www.juanginez.com' smooth className='p-4 hover:text-[#A6FD5B]'>HOME</a>                       
                    </ul>
                </div>
            </div>
            <div className='mx-auto pb-16 gap-8 text-gray-300 bg-[#131314] px-20'>
                <hr></hr>
                <p className='font-ibmMono italic text-center pt-8 text-[#959595]'>Copyright &copy; {footerYear} Juanginez.com - All Rights Reserved.</p>
            </div>
        </div>
    );
};

export default Footer;