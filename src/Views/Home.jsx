import React from 'react'
import Slider from '../Slider/Slider'


const Home = () => {
  return (
    <div className='flex md:flex-row flex-col h-screen'>
    <div className='w-full h-1/2 md:h-full flex pt-[6rem] flex-col'>
        <h1 className='mx-auto font-bold font-[roboto] text-4xl text-black'>Algunos de nuestros productos</h1>
        <div className=' w-[35rem] mx-auto '>
          <Slider/>
        </div>
    </div>
    <div className='bg-blue-300 w-full h-1/2 md:h-full'>a</div>
    
    </div>
  )
}

export default Home