import {nav} from '../data.jsx'
import logo from '../assets/logo.svg'
import { RiSearch2Line } from "react-icons/ri"
import { IoCloseOutline } from "react-icons/io5"
import { PiBag } from "react-icons/pi"
import { RxHamburgerMenu } from "react-icons/rx"
import { Link } from 'react-router-dom'
import { useState } from 'react'


const Nav = () => {

    const [mobileView,setMobileView] = useState(false)

  return (
    <section className='bg-gray-200 w-full p-4 m-auto'>
    
        <div id="desktopNav" className='hidden lg:flex justify-between items-end'>
            <div id="navlist" className='flex justify-around w-1/3'>
            {
                nav.map((item,idx)=>(
                    <ul>
                        <Link to={item.link}>{item.name}</Link>
                    </ul>
                ))
            }
            </div>

            <div id="logo" className=''>
                <img src={logo} alt="logo" />
            </div>
            
            
            <div id="search" className='m-2 w-1/3' >
                <form id='form' className='w-full flex gap-5'>
                    <input type="text" placeholder='SEARCH' className='p-2 rounded-lg w-[80%] lg:w-full'/>
                    <button type='submit' ><RiSearch2Line size={20}/></button>
                </form>
            </div>
        </div>

        <div id='mobileNav' className='lg:hidden'>
            <div className='w-full flex justify-between items-end mb-4'>
                <RxHamburgerMenu size={25} onClick={() =>setMobileView(!mobileView)}/>
                <img src={logo} alt="" className='' />
                <PiBag size={25} />
            </div>

            <div id="search" className='m-2' >
                <form id='form' className='w-full flex gap-5'>
                    <input type="text" placeholder='SEARCH' className='p-2 rounded-lg w-[80%] lg:w-full'/>
                    <button type='submit' ><RiSearch2Line size={20}/></button>
                </form>
            </div>
        </div>

        <div className='origin-top bg-white absolute top-0 right-0 left-0 w-full '>
        {
            mobileView && 
            <div id='hamburgerActive' 
            // onClick={() =>setMobileView(!mobileView)}
            className='flex flex-col items-center gap-5 p-10 '>
                <IoCloseOutline size={30} className='absolute right-10'onClick={() =>setMobileView(!mobileView)}/>
            {
                nav.map((item,idx)=>(
                    <ul>
                        <Link to={item.link}>
                        <li key={idx} className='uppercase p-3 hover:shadow-sm rounded-lg w-[200px]'>{item.name}</li>
                        </Link>
                    </ul>
                ))
            }
        </div>
        }
        </div>
    </section>
  )
}

export default Nav