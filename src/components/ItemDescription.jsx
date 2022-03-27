import React from 'react'

const ItemDescription = ({productDetail}) => {
  return (
    <div className='col col-12' >
                <div className='card my-4'>
                    <img className='imgCarrito' src={productDetail.imagenDetail} alt={productDetail.title}></img>
                    <div key={productDetail.id} className='card-body bg-warning '>
                        <h5 className='card-title'>{productDetail.title}</h5>
                        <p className='card-text '>{productDetail.descripcion}.</p>
                        <p className='card-text '>{productDetail.price}.</p>
                        <a href="https://github.com/jsx-eslint/eslint-plugin-jsx-a11y/blob/HEAD/docs/rules/anchor-is-valid.md" className='btn btn-danger mx-1'>Comprar</a>
                    </div>
                </div>
            
        </div>
  )
}

export default ItemDescription