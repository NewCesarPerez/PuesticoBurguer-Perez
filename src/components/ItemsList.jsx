import React from 'react'
const products=["Hamburguesa","Arepa", "Patacon"]
const ItemsList = () => {
  return (
      <ul className='list d-flex flex-row mx-1 justify-content-center align-item-center'>
        
          <li className='mx-5'>{products[0]}</li>
          <li className='mx-5'>{products[1]}</li>
          <li className='mx-5'>{products[2]}</li>
          
      </ul>
    
  )
}

export default ItemsList