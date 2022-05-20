import React from 'react'
import {AiFillHeart} from 'react-icons/ai';


const Footer = () => {
  return (
    <div className='h-[5rem] w-full bg-[#894e3f] absolute bottom-0'>
        <div className='w-full h-full flex justify-center items-center gap-2'>
            <p className='font-[nunito] text-2xl md:text-3xl text-[#f0d7a7]'>Chocolates hechos con amor</p>
            <span className='text-red-900 text-4xl'>
                <AiFillHeart/>
            </span>
        </div>
    </div>
  )
}

export default Footer