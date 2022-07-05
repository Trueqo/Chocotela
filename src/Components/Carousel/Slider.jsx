import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import { Autoplay } from 'swiper';



const Slider = () => {
  return (

    <Swiper
      spaceBetween={50}
      // modules={[Autoplay]}
      // autoplay={{ delay:2000 }}
      slidesPerView={1}
      onSlideChange={() => console.log('slide change')}
      onSwiper={(swiper) => console.log(swiper)}


    >
      <SwiperSlide>
        <div className='flex items-center justify-center w-full h-full'>
          <img src='/assests/img1.jpg' className=' object-cover' />
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className='flex items-center justify-center w-full h-full'>
          <img src='/assests/img2.jpg' className=' object-fill w-auto h-auto' />
        </div>

      </SwiperSlide>


    </Swiper>

  )
}

export default Slider