import React, { useEffect,useState } from 'react'
import { getProducts } from '../mocks/fakeApi'
import ItemDescription from './ItemDescription'




const ItemDescriptionContainer = () => {
const [productDetail, setProductDetail]=useState({})
const [loading, setLoading]=useState(false)
useEffect(()=>{
    setLoading(true)
getProducts.then((response)=> setProductDetail(response.find((item)=> item.id===1)))
.catch((error)=>console.log(error))
.finally(()=>setLoading(false))

},[]) 
console.log(productDetail)       
return (
    <div id='ItemDescriptionContainer' className='row'>
        {loading?<div className='spinner-border text-warning m-3' role="status">
</div>:<ItemDescription productDetail={productDetail}/>}
    </div>
)
}

export default ItemDescriptionContainer