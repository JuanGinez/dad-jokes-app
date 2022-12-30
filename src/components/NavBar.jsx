import React, { useState } from 'react'
import { AiOutlineClose, AiOutlineMenu} from 'react-icons/ai'
import MoblieLogo from '../assets/JuanAnimation-blue.gif'
import Blinker from '../assets/blinker.svg'

const NavBar = () => {

    const [nav, setNav] = useState(false)

    const handleNav = () => {
        setNav(!nav)
    }

    return (
        <div>
            <div id='Nav' className="flex fixed mx-auto top-0 left-0 right-0 z-50 border-b border-[#262626] bg-neutral-0/80 py-3 bg-[#171717] justify-between items-center h-24 px-3 lg:px-10 text-white">
                {/* <img src={Logo} alt="/"/> */}
                <h1 id='' className="w-full font-ibmBold font-extrabold text-3xl text-white uppercase">JUAN<span className='text-[#A6FD5B]'>.</span>GINEZ <img className='w-[14px] blink pb-1 relative right-2 inline-block' src={Blinker} alt="" />
                </h1>
                    <ul className='hidden font-ibmBold font-bold md:flex uppercase pr-4'>
                        <a href='https://www.juanginez.com' className='bg-[#221EEC] font-ibmBold font-bold text-center pt-4 py-3 w-[200px] text-white hover:bg-[#A6FD5B] hover:text-[#000000] transition ease-in duration-300'>Home</a>
                    </ul>
                
                <div onClick={handleNav} className='block md:hidden z-50'>
                    {nav ? <AiOutlineClose size={20}/> : <AiOutlineMenu size={20}/> }
                </div>

                <div className={nav ? 'fixed left-0 top-0 w-full h-full border-r bg-[#221EEC] border-r-gray-900 ease-in-out duration-500' : 'fixed left-[-100%] uppercase bg-[#221EEC]'}>
                {/* <img className='m-[1.85rem] ml-10' src={MoblieLogo} alt="/"/> */}
                <h1 id='' className="w-full font-ibmBold  m-[1.85rem] ml-10 font-extrabold text-3xl text-white uppercase">JUAN<span className='text-[#A6FD5B]'>.</span>GINEZ <img className='w-[14px] blink pb-1 relative right-2 inline-block' src={Blinker} alt="" />
                </h1>
                    {/* <h1 className="w-full text-3xl font-ibmBold font-extrabold text-white m-[1.85rem] ml-10  uppercase">JUAN.GINEZ</h1> */}
                        <ul className='sm:pt-28 pt-28 ml-10 font-ibmBold font-extrabold sm:text-6xl text-5xl uppercase p-4 h-screen bg-[#221EEC]'>
                        <a href='https://www.juanginez.com' className='bg-[#221EEC] font-ibmBold font-bold text-center pt-4 py-3 w-[200px] text-white hover:bg-[#A6FD5B] hover:text-[#000000] transition ease-in duration-300'>Home</a>
                        </ul>
                </div>
            </div>
        </div>
    )
}

export default NavBar
