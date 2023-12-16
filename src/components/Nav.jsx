import {nav} from '../data.jsx'
import Search from './Search.jsx'
import logo from '../assets/logo.svg'
// import { RiSearch2Line } from "react-icons/ri"
import { IoCloseOutline } from "react-icons/io5"
import { PiBag } from "react-icons/pi"
import { RxHamburgerMenu } from "react-icons/rx"
import { Link } from 'react-router-dom'
import { useRef, useState } from 'react'


const Nav = () => {

    const [mobileView,setMobileView] = useState(false)


  return (
    <section className='bg-gray-200 w-full p-10 mb-10'>
    
        <div id="desktopNav" className='hidden lg:flex justify-evenly items-end'>
            <div id="navlist" className='w-1/3'>
                <ul className='flex justify-evenly'>
                {
                    nav.map((item,idx)=>(
                        <li key={idx} className='uppercase'> 
                            <Link to={item.link}>{item.name}</Link>
                        </li>
                        
                    ))
                }
                </ul>
            </div>

            <div id="logo" className=''>
                <img src={logo} alt="logo" />
            </div>
            
            <div><Search /></div>
           
        </div>

        <div id='mobileNav' className='lg:hidden '>
            <div className='w-full flex justify-between items-end mb-4'>
                <RxHamburgerMenu size={25} onClick={() =>setMobileView(!mobileView)}/>
                <img src={logo} alt="" className='' />
                <PiBag size={25} />
            </div>

            <div><Search /></div>
            
        </div>

        <div className='origin-top bg-white absolute top-0 right-0 left-0 w-full '>
        {
            mobileView && 
            <div id='hamburgerActive' 
            // onClick={() =>setMobileView(!mobileView)}
            className='flex flex-col items-center gap-5 p-10 '>
                <IoCloseOutline size={30} className='absolute right-10'onClick={() =>setMobileView(!mobileView)}/>
            
                <ul>
                    {nav.map((item,idx)=>(
                        <Link to={item.link}>
                            <li className='uppercase p-3 hover:shadow-sm rounded-lg w-[200px]' key={idx}>{item.name}</li>
                         </Link>
                    ))}
                </ul>
            
        </div>
        }
        </div>
    </section>
  )
}

export default Nav