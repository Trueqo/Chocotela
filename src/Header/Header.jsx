import React from 'react'
import iconoHeader from '../../public/assets/icono.png'

const Header = () => {
  return (
    <div className='w-full h-[6rem] bg-yellow-100  flex justify-center items-center border-2 border-gray-500'>
        <div className='bg-green-300'>
          <span className='text-black font-bold text-3xl hover:text-blue-500 font-serif '>Chocotela</span>
        </div>
        <div className=''>
          <img src={iconoHeader} className="h-[4rem]"/>
        </div>
    </div>
  )
}

export default Header