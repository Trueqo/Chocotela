import React from 'react'
import Slider from '../Slider/Slider'


const Home = () => {
  return (
    <div className='flex md:flex-row flex-col h-screen '>
    <div className='w-full h-1/2 md:h-full flex pt-[5rem] flex-col'>
        <h1 className='mx-auto font-bold font-[roboto] text-4xl text-color6 text-center pb-4'>
          Algunos de nuestros productos
        </h1>
        <div className=' w-full md:w-[35rem] mx-auto'>
          <Slider/>
        </div>
    </div>
    <div className='w-full h-1/2 md:h-full flex  '>
      <span className='text-center text-6xl text-black'>Foto de estella</span>
    </div>
    
    </div>
  )
}

export default Home