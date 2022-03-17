import React, { useState } from 'react';
import CartIcon from './CartIcon';


let orderSum = 0;
const StockProducto = 10;
let currentStock = StockProducto;

export default function Button({ MaxStock }) {
const [count, setCount] = useState(0);
const [OrderSum, setOrderSum]=useState(0);
const [initialColor, setColor] = useState();


  //Funciones de contador: Inicio
let sumar = () => {
    if (count === MaxStock) {
    console.log('Limite de stock');
    return;
    } else {
    setCount(count + 1); 
    setColor('fontColorSumar');
    }
};
let restar = () => {
    if (count === 0) return;
    else {
    setCount(count - 1);
    setColor('fontColorRestar');
    }
};
  //Funciones de contador: function

  //Agregar Carrito: Inicio
let OnAdd = () => {
    if (
    (orderSum <= currentStock && orderSum > 0 &&count!==0) ||
    (count <= currentStock && count > 0)
    ) {
        setOrderSum(OrderSum+count)
    //orderSum = orderSum + count;
    console.log('Stock actualizado, Agregado al carrito');
    alert('Stock actualizado, Agregado al carrito');
    console.log('Count: ' + count);
    console.log('Order Sum: ' + orderSum);
    currentStock = currentStock - count;
    
    
    } else if (count === 0) 
        {console.log('Contador en 0');
        alert('Contador en 0')}
    else {
        console.log('No es posible procesar la orden. Stock superado.');
        alert('No es posible procesar la orden. Stock superado.');
        
    }
};

  //Agregar Carrito: Fin

return (
    <div
    className={initialColor}   style={{
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems:'center',
    
    }}
    >
    <button className={initialColor} onClick={() => sumar()}>
        +
    </button>
    <button className={initialColor} onClick={() => restar()}>
        -
    </button>

    <div className="Border">{count}</div>
    <button onClick={() => OnAdd()}>Agregar al Carrito</button>
    <button
        onClick={() => {
        console.log('Stock: ' + currentStock);
        alert('Stock: ' + currentStock)
        }}
    >
        Consultar Stock
    </button>
    <CartIcon OrderSum={OrderSum}/>
    </div>
);
}
