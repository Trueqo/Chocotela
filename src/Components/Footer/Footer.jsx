import React from 'react'
import {AiFillHeart} from 'react-icons/ai';

const Footer = () => {
  return (
    <div className='w-full h-[4rem] bg-color4 text-[1.2rem] md:text-[2rem]  text-black font-[nunito] flex justify-center items-center'>
        Chocolates hechos con amorㅤ  
        <span className='text-red-600 animate-ping delay-75'> <AiFillHeart/></span>
    </div>
  )
}

export default Footer