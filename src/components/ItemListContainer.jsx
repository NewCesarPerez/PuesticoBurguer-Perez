import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import Item from "./Item"
import { getProducts } from '../mocks/fakeApi'
import ItemsList from './ItemsList'

 


const ItemListContainer = () => {


const [products, setProducts]=useState([]);
const [Loading, setLoading]=useState(false)
useEffect(()=>{
    setLoading(true); 
    getProducts.then((response)=>setProducts(response))
    .catch((error)=>console.log(error)).finally(()=>setLoading(false))},[])

// const [desserts, setDesserts]=useState([]);
// useEffect(()=>{promiseDesserts= new Promise((resolve, reject) => {
//     setTimeout(() => {
//     resolve(postres);
//     }, 3000);
// })},[]) 

// useEffect(()=>{promiseDesserts.then((response)=>{
//     setDesserts(response);
// })},[]) 



return (
    
    <div>
        
        <div  className='container'>
            <div id='ItemContainer'>
            {Loading?<div className='spinner-border text-danger m-3' role="status">
</div>:<ItemsList products={products}/>}
                
                
            </div>
        </div>
    </div>
)
}

export default ItemListContainer
