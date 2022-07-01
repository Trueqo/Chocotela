import React from 'react'
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';


const Slider = () => {
  return (
    <Carousel className="w-[12rem] md:w-[20rem] ">
      <div className="">
        <img src="/assests/img1.jpg" className="object-cover" />
        <p className="legend">Conoce nuestro deliciosos productos</p>
      </div>
      <div className=''>
        <img src="/assests/img3.jpg" className="object-cover" />
        
      </div>
      <div className=''>
        <img src="/assests/img3.jpg" className="object-cover" />
        
      </div>
    </Carousel>
  )
}

export default Slider