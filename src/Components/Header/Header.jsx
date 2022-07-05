import React from 'react'
import { Link, NavLink } from "react-router-dom";

const Header = (props) => {
  return (
    <div className='w-full  md:h-[3rem] bg-color6  text-black font-[nunito] flex  justify-center items-center p-4'>
            <ul className='flex flex-row justify-center gap-6 md:gap-4 flex-wrap text-[1.2rem]'>
            <Link to='/'>
              <li className='cursor-pointer hover:bg-color4 hover:text-black px-2 rounded-lg'>Inicio</li>
            </Link>
            
            {/* <Link to='/about'>
              <li className='cursor-pointer hover:bg-color4 hover:text-black px-2 rounded-lg'>Sobre Chocotela</li>
            </Link> */}
              
            
            <Link to='/product'>
              <li className='cursor-pointer hover:bg-color4 hover:text-black px-2 rounded-lg'>productos</li>
            </Link>

            <Link to='/contact'>
              <li className='cursor-pointer hover:bg-color4 hover:text-black px-2 rounded-lg'>Contacto</li>
            </Link>

            </ul>
    </div>
  )
}

export default Header