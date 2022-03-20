import React from 'react'
import ItemDescription from './ItemDescription'

const Item = ({price, id, title, imagen, }) => {
return (
    
        <div className='col-xs-12 col-sm-6 col-md-4 col-lg-4 col-xl-4' >
                <div className='card my-4'>
                    <img className='imgCarrito' src={imagen} alt="Card  cap"></img>
                    <div key={id} className='card-body '>
                        <h5 className='card-title'>{title}</h5>
                        <p className='card-text'>{price}.</p>
                        <ItemDescription/>
                        <a href="https://github.com/jsx-eslint/eslint-plugin-jsx-a11y/blob/HEAD/docs/rules/anchor-is-valid.md" className='btn btn-primary mx-1'>Comprar</a>
                    </div>
                </div>
            
        </div>
    
)
}

export default Item