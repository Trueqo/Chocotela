import React from 'react'
import products from '../Data/Data'

const ProductsView = () => {
  return (
    <div className='w-full h-auto bg-color4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 p-[4rem]'>
       
            {products.map(datos=>(
                <div className='bg-red-500  w-[15rem] h-[20rem] flex flex-col items-center '>
                    <div className=' w-[10rem] h-[10rem]'>
                        <img src={datos.Image}  className='w-[10rem] h-[10rem] object-fill'/>
                    </div>
                    <span>{datos.title}</span>
                    <div className='flex flex-row flex-wrap justify-center text-center'>
                        <span>{datos.price}</span>
                        <span className=''>{datos.description}</span>
                    </div>
                </div>
            ))}
        
    </div>
  )
}

export default ProductsView