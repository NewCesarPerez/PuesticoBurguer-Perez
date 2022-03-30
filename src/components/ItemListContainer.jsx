import React from 'react'
import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { getProducts } from '../mocks/fakeApi'
import ItemsList from './ItemsList'
import ItemDescriptionContainer from './ItemDescriptionContainer'




const ItemListContainer = () => {
const [products, setProducts]=useState([]);
const [Loading, setLoading]=useState(false)
const {categoryId}= useParams();
console.log(categoryId)
useEffect(()=>{
    setLoading(true); 
    getProducts.then((response)=>{

        if(categoryId) setProducts(response.filter((prod)=>prod.category===categoryId));
        
        else setProducts(response); 
            
            
    
    })
    .catch((error)=>console.log(error))
    .finally(()=>setLoading(false))},[categoryId])

return (
    
    <div>
        
        <div  className='container'>
            <div id='ItemContainer'>
            {Loading?<div className='spinner-border text-danger m-3' role="status">
                    </div>
                    :<div className='container'>
                        <div className='row'>
                            <div className='col-9'>
                                <ItemsList products={products}/>
                            </div>
                            <div className='col-3 bg-danger my-4'>
                                {/* <ItemDescriptionContainer/> */}
                            </div>
                        </div>
                    </div>
                    }
            </div>
        </div>
    </div>
)
}

export default ItemListContainer
