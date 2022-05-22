import React from 'react'
import iconoHeader from '../../public/assets/icono.png'

const Header = () => {
  return (
    <div className='w-full  md:h-[6rem] bg-color5  flex justify-center items-center'>
        <div className=''>
          <span className='text-color6 font-[nunito] text-5xl hover:text-black '>Chocotela</span>
        </div>
        <div className=''>
          <img src={iconoHeader} className="h-[5rem] hover:rotate-45 delay-100"/>
        </div>
    </div>
  )
}

export default Header