import React from 'react'
import products from '../Data/Data'

const ProductsView = () => {
  return (
    <div className='w-full h-auto bg-color4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 md:gap-[1rem]'>
       
            {products.map(datos=>(
                <div className='bg-color5 rounded-2xl w-[15rem] h-[20rem] flex flex-col items-center flex-wrap mx-auto my-6'>
                    <div className=' w-full h-[10rem] '>
                        <img src={datos.Image}  className='w-full h-[10rem] object-cover rounded-t-2xl'/>
                    </div>
                    <span className='text-xl font-[nunito]'>{datos.title}</span>
                    <div className='flex flex-row flex-wrap justify-center text-center'>
                        <span className='font-[roboto]'> Valor: {datos.price}</span>
                        <span className='bg-color6 mx-4 text-black font-[roboto] rounded-xl'>{datos.description}</span>
                    </div>
                </div>
            ))}
        
    </div>
  )
}

export default ProductsView