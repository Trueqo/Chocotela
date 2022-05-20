import React from 'react'
import iconoHeader from '../../public/assets/icono.png'

const Header = () => {
  return (
    <div className='w-full  md:h-[6rem] bg-[#894e3f]  flex justify-center items-center'>
        <div className=''>
          <span className='text-[#f0d7a7] font-[nunito] text-5xl hover:text-black '>Chocotela</span>
        </div>
        <div className=''>
          <img src={iconoHeader} className="h-[5rem]"/>
        </div>
    </div>
  )
}

export default Header