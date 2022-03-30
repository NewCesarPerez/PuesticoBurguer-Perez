import hamburguesaDePollo from "../imagenes/Haburguesa de pollo_HDR.jpg"
import ArepitasFritas from "../imagenes/Arepitas_tapitas mechada1HDR.jpg"
import Tequenios from "../imagenes/20211027_233845.jpg"
import PepsiComun from "../imagenes/pepsi.png"
import SevenUp from "../imagenes/7up.png"
import Patagonia from "../imagenes/patagonia.png"
import LemonPie from "../imagenes/lemonPie.jpg"
import ChocoTorta from"../imagenes/chocoTorta.jpg"
import CheeseCake from "../imagenes/cheeseCake.jpg"
import HambPolloDetail from "../imagenes/hambPolloForDetail.jpg"
import ArepaDetail from "../imagenes/ArepaDetail.jpg"
import tequeniosDetail from "../imagenes/ArepaDetail.jpg"

const Items=[
    
    {
    "price": 590,
    "id": 1,
    "title": "Hamburguesa",
    "imagen": hamburguesaDePollo,
    "imagenDetail": HambPolloDetail,
    "descripcion":"Pan suave, pollo a la plancha, queso de mano y amarillo, panceta, lomo y salsa tartara y papas",
    "category": "Platos"
},
    {
    "price": 530,
    "id": 2,
    "title": "Arepitas fritas",
    "imagen": ArepitasFritas,
    "imagenDetail": ArepaDetail,
    "descripcion":"Pollo o lomito a la plancha, queso de mano, lechuga y salsa tartara.",
    "category": "Platos"
    },
    {
    "price": 440,
    "id": 3,
    "title": "Tequeños",
    "imagen": Tequenios,
    "imagenDetail": tequeniosDetail,
    "descripcion":"Deliciosa masa rellena de queso venezolano.",
    "category": "Platos"
    },
    {
    "price": 130,
    "id": 4,
    "title": "Pepsi Común",
    "imagen": PepsiComun,
    "imagenDetail": PepsiComun,
    "descripcion":"Sabor original, bien fría!",
    "category": "Bebidas"
    },
    {
    "price": 130,
    "id": 5,
    "title": "7up",
    "imagen": SevenUp,
    "imagenDetail": SevenUp,
    "descripcion":"Sabor original, bien fría!",
    "category": "Bebidas"
    },
    {
    "price": 240,
    "id": 6,
    "title": "Patagonia",
    "imagen": Patagonia,
    "imagenDetail": Patagonia,
    "descripcion":"Cerveza suave, inigualable!.",
    "category": "Bebidas"
    },
    {    
        "price": 590,
        "id": 10,
        "title": "Lemon Pie",
        "imagen": LemonPie,
        "imagenDetail": LemonPie,
        "descripcion":"El delicioso postre que conoces al estilo venezolano.",
        "category": "Postres"
        }, 
        {
            "price": 550,
            "id": 11,
            "title": "Choco Torta",
            "imagen": ChocoTorta,
            "imagenDetail": ChocoTorta,
            "descripcion":"Tradición Argentina.",
            "category": "Postres"
        },{
            "price": 650,
            "id": 12,
            "title": "Cheese cake",
            "imagen": CheeseCake,
            "imagenDetail": CheeseCake,
            "descripcion":"Si, verdadero Cheesecake!.",
            "category": "Postres"
        }
]

export const getProducts=new Promise((resolve, reject)=>{setTimeout(()=>{resolve(Items)}, 2000)}, []);