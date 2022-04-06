import { createContext } from "react";
import { useState } from "react";

export const CartContext= createContext();

export const CartProvider=({children})=>{

const [cart, setCart]=useState([])

const addItem = (item) => {
  
  setCart([...cart, item])
};

const isInCart=(id)=>{
  return cart.some(produ=>produ.id===id)
}

const cartQty=()=>{
  return cart.reduce((acc, prod)=>acc+=prod.qty,0)
}

const cartTotal=()=>{
  return cart.reduce((acc, prod)=>acc +=prod.price*prod.qty,0)
}

const emptyCart=()=>{
  setCart([])
}

const removeItem=(id)=>{
setCart(cart.filter((prod)=>prod.id!==id))
}
    return(
        <CartContext.Provider value={{cart, addItem, isInCart, cartQty, cartTotal, emptyCart, removeItem}}>
            {children}
        </CartContext.Provider>
    )
}