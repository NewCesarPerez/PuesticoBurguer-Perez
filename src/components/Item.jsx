import React from 'react'
import { Link } from 'react-router-dom';

const Item = ({price, id, title, imagen, }) => {
return (
    
        <div className='col-xs-12 col-sm-6 col-md-4 col-lg-4 col-xl-4' >
                <div className='card my-4'>
                    <img className='imgCarrito' src={imagen} alt={title}></img>
                    <div key={id} className='card-body '>
                        <h5 className='card-title'>{title}</h5>
                        <p className='card-text'>{price}.</p>
                        <Link className='btn btn-warning mx-1' to={`/details/${id}`}>Detalles</Link>
                        <Link className='btn btn-danger mx-1' to="/">Comprar</Link>
                    </div>
                </div>
            
        </div>
    
    
)
}

export default Item