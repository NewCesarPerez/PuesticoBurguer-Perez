import React, { useContext } from 'react'
import { CartContext } from '../context/CartContext'
import {BsFillTrashFill} from "react-icons/bs";
const Cart = () => {


  const {cart, cartTotal, emptyCart, removeItem}=useContext(CartContext)
  
  console.log(cart)
  return (

    <div className='container my-5'>
      <h1 className='text-danger my-5 '>TU COMPRA</h1>

      {
        cart.map((prod)=>(
        <div key={prod.id}> 
          <h3>{prod.title}</h3>
          <p> Cantidad: {prod.qty}</p>
          <h5>Precio: ${prod.price *prod.qty}</h5>
          <button onClick={()=>removeItem(prod.id)} className='btn btn-warning'><BsFillTrashFill/></button>
          <hr/>
        </div>))
      }

      <h4 className='text-danger'>TOTAL: ${cartTotal()}</h4>
      <hr/>
      <button className='btn btn-warning text-danger' onClick={emptyCart}>Vaciar carrito</button>
    </div>
    )
}

export default Cart