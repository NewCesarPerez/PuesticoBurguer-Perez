import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import Item from "./Item"
import hamburguesaDePollo from "../imagenes/Haburguesa de pollo_HDR.jpg"
import ArepitasFritas from "../imagenes/Arepitas_tapitas mechada1HDR.jpg"
import Tequenios from "../imagenes/20211027_233845.jpg"
import PepsiComun from "../imagenes/pepsi.png"
import SevenUp from "../imagenes/7up.png"
import Heineken from "../imagenes/patagonia.png"
import LemonPie from "../imagenes/lemonPie.jpg"
import CheeseCake from "../imagenes/cheeseCake.jpg"

const Items=[
    
    {
    "price": 590,
    "id": 1,
    "title": "Hamburguesa",
    "imagen": hamburguesaDePollo
    },
    {
    "price": 530,
    "id": 2,
    "title": "Arepitas fritas",
    "imagen": ArepitasFritas
    },
    {
    "price": 440,
    "id": 3,
    "title": "Tequeños",
    "imagen": Tequenios
    },
    {
    "price": 130,
    "id": 4,
    "title": "Pepsi Común",
    "imagen": PepsiComun
    },
    {
    "price": 130,
    "id": 5,
    "title": "7up",
    "imagen": SevenUp
    },
    {
    "price": 240,
    "id": 6,
    "title": "Heineken",
    "imagen": Heineken
    }
]

const postres=[
    {    
    "price": 590,
    "id": 10,
    "title": "Lemon Pie",
    "imagen": LemonPie
    }, 
    {
        "price": 550,
        "id": 11,
        "title": "Choco Torta",
        "imagen": "https://cdn.shopify.com/s/files/1/0366/4442/1770/products/chocotortaentera_590x.jpg?v=1619473217"
    },{
        "price": 650,
        "id": 12,
        "title": "Cheese cake",
        "imagen": CheeseCake
    }]

    let promiseDesserts;  
const ItemListContainer = () => {

const [desserts, setDesserts]=useState([]);
useEffect(()=>{promiseDesserts= new Promise((resolve, reject) => {
    setTimeout(() => {
    resolve(postres);
    }, 3000);
})},[]) 

useEffect(()=>{promiseDesserts.then((response)=>{
    setDesserts(response);
})},[]) 




return (
    
    <div>
        
        <div  className='container'>
            <div id='ItemContainer' className='row'>
                {Items.map(elements=><Item price={elements.price} id={elements.id} title={elements.title} imagen={elements.imagen} />)}
            </div>
        </div>

        <div  className='container'>
            <div id='MockItemContainer' className='row'>
                {desserts.map(elements=><div className='col-xs-12 col-sm-6 col-md-4 col-lg-4 col-xl-4' >
                <div className='card my-4'>
                    <img className='imgCarrito' src={elements.imagen} alt="Card  cap"></img>
                    <div key={elements.id} className='card-body '>
                        <h5 className='card-title'>{elements.title}</h5>
                        <p className='card-text'>{elements.price}.</p>
                        <p>{console.log(elements.price)}</p>
                        <a href="https://github.com/jsx-eslint/eslint-plugin-jsx-a11y/blob/HEAD/docs/rules/anchor-is-valid.md" className='btn btn-primary mx-1'>Comprar</a>
                    </div>
                </div>

</div>)}
            
            </div>
        </div>
    </div>
)
}

export default ItemListContainer
