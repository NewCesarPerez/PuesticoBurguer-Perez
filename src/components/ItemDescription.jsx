import React from 'react'
import { Link, Navigate, useNavigate } from 'react-router-dom';

const ItemDescription = ({productDetail}) => {
  const navigate=useNavigate();
  const handleNavigate=()=>navigate(-1);

  return (
    <div className='col col-12 m-auto w-75' >
                <div className='card my-4'>
                    <img className='imgCarrito w-50 h-50' src={productDetail.imagenDetail} alt={productDetail.title}></img>
                    <div key={productDetail.id} className='card-body bg-warning '>
                        <h5 className='card-title'>{productDetail.title}</h5>
                        <p className='card-text '>{productDetail.descripcion}.</p>
                        <p className='card-text '>{productDetail.price}.</p>
                        <button className='btn btn-outline-primary' onClick={handleNavigate}> Volver </button>
                        <a href="https://github.com/jsx-eslint/eslint-plugin-jsx-a11y/blob/HEAD/docs/rules/anchor-is-valid.md" className='btn btn-danger mx-1'>Comprar</a>
                    </div>
                </div>
            
        </div>
  )
}

export default ItemDescription