import React, { useState, useEffect, useContext } from "react";
import { CartContext } from "../../Context/CartContext";

const Cart = () => {
    const [cartOpen, setCartOpen] = useState(false);
    const [productsLength, setProductsLength] = useState(0);

    const { cartItem } = useContext(CartContext);

    const sendToWhatsapp = () => {
        let baseUrl = "https://api.whatsapp.com/send?phone=573013636678&text="
        let text = "¡Hola! me gustaría pedir:%0A%0A"
        cartItem.forEach(item => {
            let itemToText = `${item.title} x${item.amount}%0A`
            text += itemToText
        })
        window.open(baseUrl + text + `%0ATotal: ${cartItem.reduce((previous, current) => previous + current.amount * current.price, 0)} 
        %0A%0AMuchas gracias! :)`)
    }

    const clearCart = () => {

        setProductsLength(0);
        localStorage.removeItem('cartItem');
        window.location.reload();
    }


    useEffect(() => {

        setProductsLength(
            cartItem.reduce((previous, current) => previous + current.amount, 0)
        );

    }, [cartItem]);

    const total = cartItem.reduce(
        (previous, current) => previous + current.amount * current.price,
        0
    );
    console.log(total);

    return (

        <div className=" bg-color4 font-[nunito]   p-4">
            <div className="flex justify-center items-center ">
                <a className="text-black normal-case text-[2.5rem]">
                Chocotela</a>
                <img src="/assests/icono.png" className="h-[3.5rem] hover:animate-spin"/>
            </div>
            <div className="flex-none absolute right-0 top-0 mt-5 mr-2 md:mt-4 md:mr-0
            md:right-4 md:top-[0.5rem]">
                <div className="dropdown dropdown-end">
                    <label tabIndex="0" className="btn btn-ghost btn-circle">
                        <div className="indicator">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" /></svg>
                            <span className="badge badge-sm indicator-item">{productsLength}</span>
                        </div>
                    </label>
                    <div tabIndex="0" className="mt-3 card card-compact dropdown-content w-52 bg-base-100 shadow">
                        <div className="card-body">
                            <span className="font-bold text-lg divide-y">
                                {cartItem.map((product, i) => (
                                    <div key={i} className="">
                                        <div className="">
                                            <span className="">{product.title}</span>
                                            <p>cantidad: <span className="text-green-500">{product.amount}</span></p>
                                        </div>
                                    </div>

                                ))}
                            </span>
                            <span className="font-bold text-lg">{productsLength} Items</span>
                            <span className="text-info">Subtotal: ${total}</span>
                            <div className="flex gap-2">
                                <div className="card-actions">
                                    <button className="btn bg-red-600 btn-block"
                                        onClick={clearCart}>
                                        Limpiar Carrito</button>
                                </div>
                                <div className="card-actions">
                                    <button className="btn bg-emerald-500 btn-block"
                                        onClick={sendToWhatsapp}>
                                        Ir a pagar</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Cart;
