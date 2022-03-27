import hamburguesaDePollo from "../imagenes/Haburguesa de pollo_HDR.jpg"
import ArepitasFritas from "../imagenes/Arepitas_tapitas mechada1HDR.jpg"
import Tequenios from "../imagenes/20211027_233845.jpg"
import PepsiComun from "../imagenes/pepsi.png"
import SevenUp from "../imagenes/7up.png"
import Patagonia from "../imagenes/patagonia.png"
import LemonPie from "../imagenes/lemonPie.jpg"
import CheeseCake from "../imagenes/cheeseCake.jpg"
import HambPolloDetail from "../imagenes/hambPolloForDetail.jpg"

const Items=[
    
    {
    "price": 590,
    "id": 1,
    "title": "Hamburguesa",
    "imagen": hamburguesaDePollo,
    "imagenDetail": HambPolloDetail,
    "descripcion":"Pan suave, pollo a la plancha, queso de mano y amarillo, panceta, lomo y salsa tartara y papas"
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
    "title": "Patagonia",
    "imagen": Patagonia
    },
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
        }
]

export const getProducts=new Promise((resolve, reject)=>{setTimeout(()=>{resolve(Items)}, 2000)}, []);