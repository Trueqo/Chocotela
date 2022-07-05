import React,{useContext} from 'react'
import { CartContext } from '../../Context/CartContext'
import products from '../../Data/Products'
const Products = () => {

  const{addItemToCart} = useContext(CartContext)

  return (
    <div className='bg-color5 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 pt-[4rem] pb-[4rem] gap-3 '>
    {products.map((product,i) => (
      <div key={i} className='w-[10rem] h-auto m-auto flex flex-col items-center rounded-2xl
      bg-color4'>
        <img src={product.Image} className='w-[10rem] h-[8rem] rounded-t-2xl'/>
        <h1>{product.name}</h1>
        <p className='w-[9rem] h-auto py-1 text-center '>{product.description}</p>
        <p>$ <span className='text-green-500'>{product.price}</span></p>
        <button onClick={()=> addItemToCart(product)}
        className='bg-green-500 rounded-xl px-2 py-1 mb-2'>
          add to cart
        </button>
      </div>
    ))}
    </div>
  )
}

export default Products