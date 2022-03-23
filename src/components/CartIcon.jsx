import React from 'react'



const CartIcon = ({OrderSum}) => {
return (
    <>
    <div className='d-flex flex-row'>
    <a className='my-1' href="./index.html"><i className=' bi bi-cart'></i></a>
    {/* <div id='CartCounter' className='mx-1 my-1'>{OrderSum}</div> */}
    </div>
    </>
    )
}

export default CartIcon