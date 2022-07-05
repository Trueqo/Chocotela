import React from 'react'
import { FaWhatsappSquare } from 'react-icons/fa';

const Contact = () => {
  return (
    <div className=' bg-color5 flex flex-col min-h-screen
     items-center relative justify-center'>
        
            
            <span className='font-[nunito] bg-white m-4 p-4 rounded-lg'>
                <p>
                    ¿Tienes alguna idea en específico?
                </p>
                <p>
                    solo debes tocar el botón de wsp para que podamos hacer realidad esa idea.
                </p>
            </span>
        
        
            <div className='relative flex  w-auto md:w-1/2 '>

                <img src='/assests/contactImg.png' className='bottom-0'/> 
            
                <span className='bg-white text-green-400 absolute text-[5rem]
                 rounded-xl top-16 right-10'>
                    <FaWhatsappSquare/>
                </span> 
            </div>
            
            
        
    </div>
  )
}

export default Contact