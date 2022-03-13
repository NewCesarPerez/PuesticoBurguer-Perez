import React from 'react'
const products=["Hamburguesa","Arepa", "Patacon"]
const ItemsList = () => {
  return (
      <ul className='list'>
          <li>{products[0]}</li>
          <li>{products[1]}</li>
          <li>{products[2]}</li>
          
      </ul>
    
  )
}

export default ItemsList