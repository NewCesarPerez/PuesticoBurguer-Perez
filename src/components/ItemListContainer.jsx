import React from 'react'
import Item from "./Item"
import hamburguesaDePollo from "../imagenes/Haburguesa de pollo_HDR.jpg"
import ArepitasFritas from "../imagenes/Arepitas_tapitas mechada1HDR.jpg"
import Tequenios from "../imagenes/20211027_233845.jpg"
import PepsiComun from "../imagenes/pepsi.png"
import SevenUp from "../imagenes/7up.png"
import Heineken from "../imagenes/patagonia.png"


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


const ItemListContainer = () => {
    
    
    
return (
    <div>
        
        <div  className='container'>
            <div id='ItemContainer' className='row'>
                {Items.map(elements=><Item price={elements.price} id={elements.id} title={elements.title} imagen={elements.imagen} />)}
            </div>
        </div>
    </div>
)
}

export default ItemListContainer
