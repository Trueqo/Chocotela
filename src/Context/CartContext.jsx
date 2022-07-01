import { createContext, useEffect, useState } from "react";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
    const [cartItem, setCartItem] = useState(() => {
        try {
            const cartItem = localStorage.getItem('cartItem');
            return cartItem ? JSON.parse(cartItem) : [];
        }
        catch (error) {
            return [];
        }
    });

    useEffect(() => {
        localStorage.setItem('cartItem', JSON.stringify(cartItem));
        console.log(cartItem);
    }, [cartItem]);

    const addItemToCart = (product) => {
        const inCart = cartItem.find(
            (productInCart) => productInCart.id === product.id
        );

        if (inCart) {
            setCartItem(
                cartItem.map((productInCart) => {
                    if (productInCart.id === product.id) {
                        return { ...inCart, amount: inCart.amount + 1 }
                    } else return productInCart;
                })
            )
        } else {
            setCartItem([...cartItem, { ...product, amount: 1 }]);
        }
    }

    const deleteItemFromCart = (product) => {
        const inCart = cartItem.find(
            (productInCart) => productInCart.id === product.id
        );

        if (inCart.amount === 1) {
            setCartItem(cartItem.filter((productInCart) => productInCart.id !== product.id)
            );
        } else {
            setCartItem((productInCart) => {
                if (productInCart.id === product.id) {
                    return { ...inCart, amount: inCart.amount - 1 }
                } else return productInCart
            })
        }
    }

    return(
        <CartContext.Provider value={{ cartItem, addItemToCart, deleteItemFromCart }}>
            {children}
        </CartContext.Provider>
    )
}