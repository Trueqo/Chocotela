import React from 'react'

const NavbarRespon = () => {
    return (

        <div classNameName='flex flex-row'>
            <div className="navbar bg-color3 flex  relative">
                
                <div className='mx-auto'>
                    <ul className='flex gap-5 flex-wrap'>
                        <li className='font-[nunito] text-color6 hover:text-black text-xl'>Home</li>
                        <li className='font-[nunito] text-color6 hover:text-black text-xl'>Productos</li>
                        <li className='font-[nunito] text-color6 hover:text-black text-xl'>Contactame</li>
                    </ul>
                </div>

                <div className="flex-none absolute sm:right-4 sm:mb-0 className='font-[nunito]' right-3 -mb-[8rem] text-black ">
                    <div className="dropdown dropdown-end">
                        <label tabindex="0" className="btn btn-ghost btn-circle">
                            <div className="indicator">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" /></svg>
                                <span className="badge badge-sm indicator-item">8</span>
                            </div>
                        </label>
                        <div tabindex="0" className="mt-3 card card-compact dropdown-content w-52 bg-base-100 shadow">
                            <div className="card-body">
                                <span className="font-bold text-lg">8 Items</span>
                                <span className="text-info">Subtotal: $999</span>
                                <div className="card-actions">
                                    <button className="btn btn-primary btn-block">View cart</button>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>

        </div>

    )
}

export default NavbarRespon