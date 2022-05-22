import React,{useState} from 'react'



const Navbar = () => {
    
    
    function btnActive(){
        const botones = document.getElementsByClassName("boton")
        
        setfirst = botones.classList.toggle('bg-red-500')
        console.log('función corriendo')
      }

  return (
    <div className='bg-color6 w-full h-[3rem] flex items-center justify-center'>
        <ul className='flex flex-row gap-6 font-[Roboto] text-2xl'>
            <li className=' hover:border-b-2 hover:border-color5'>Home</li>
            <li className='hover:border-b-2 hover:border-color5'>Productos</li>
            <li className='' onClick={btnActive}>
                <button id='boton' className='boton bg-gray-400' onClick={()=>{btnActive}}>
                    Contactame
                </button>
            </li>
        </ul>
    </div>
  )
}

export default Navbar