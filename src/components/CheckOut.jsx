import React, { useContext, useState } from "react";
import { CartContext } from "../context/CartContext";
import { db } from "../firebase/config";
import { query, where, documentId, writeBatch, collection, addDoc, Timestamp, doc, updateDoc, getDoc, getDocs } from "firebase/firestore";
import { Navigate } from "react-router-dom";
import { Modal, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

    const CheckOut = () => {
    const { cart, cartTotal, emptyCart } = useContext(CartContext);
    const [values, setValues] = useState({
        name: "",
        lastName: "",
        email: "",
        tel: "",
        address: "",
        document: "",
    });
    const [orderId, setOrderId] = useState(null);
    const handleValues = (e) => {
        setValues({
        ...values,
        [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log("Submit");
        const order = {
        items: cart,
        total: cartTotal(),
        buyer: {
            ...values,
        },
        timeStamp: Timestamp.fromDate(new Date()),
        };

        const orderRef = collection(db, "orders");
        const batch=writeBatch(db)
        const productsRef=collection(db, 'productos')
        const q=query(productsRef, where(documentId(),'in',cart.map((item)=>item.id)))
        const products=await getDocs(q)
        const outOfStock=[]
        products.docs.forEach((doc)=>{
            const itemInCart=cart.find((item)=>item.id===doc.id)

            if(doc.data().Stock >=itemInCart.qty){
                batch.update(doc.ref,{
                    Stock:doc.data().Stock-itemInCart.qty
                })
            }

            else{
                outOfStock.push(itemInCart)
            }
        })
        

        if(outOfStock.length===0){
            addDoc(orderRef, order).then((doc) => {
                console.log("doc.id "+doc.id)
                batch.commit()
                setOrderId(doc.id)
                emptyCart();
                console.log(order); 
            });
            
            
        }else{
            outOfStock.forEach((doc)=>{
                alert(doc.title+' no tiene stock')
            })
            
        }
        
        
    };

    if (orderId) {
        return (
            <div className="bg-danger w-50">

                <h1 className="container my-2 text-warning">Orden Procesada</h1>
                <p>N° de Orden: {orderId}</p>
                <Link to="/" className="btn btn-warning">Volver al Home</Link>

            </div>
        // <Modal.Dialog>
        //     <Modal.Header closeButton>
        //     <Modal.Title>Orden Procesada</Modal.Title>
        //     </Modal.Header>
        //     <Modal.Body>
        //     <p>N° de orden: {orderId}</p>
        //     </Modal.Body>

        //     <Modal.Footer>
        //     <Button variant="secondary">Close</Button>
        //     <Button variant="primary">Save changes</Button>
        //     </Modal.Footer>
        // </Modal.Dialog>
        );
    }
    if (cart.length === 0) {
        return <Navigate to="/" />;
    }
    return (
        <div className="container my-5">
        <h2>Checkout</h2>
        <hr />

        <form onSubmit={handleSubmit}>
            <input
            className="form-control my-2"
            type={"text"}
            placeholder="Nombre"
            onChange={handleValues}
            value={values.name}
            name="name"
            />

            <input
            className="form-control my-2"
            type={"text"}
            placeholder="Apellido"
            onChange={handleValues}
            value={values.lastName}
            name="lastName"
            />

            <input
            className="form-control my-2"
            type={"number"}
            placeholder="Documento"
            onChange={handleValues}
            value={values.document}
            name="document"
            />

            <input
            className="form-control my-2"
            type={"email"}
            placeholder="Correo Electrónico"
            onChange={handleValues}
            value={values.email}
            name="email"
            />

            <input
            className="form-control my-2"
            type={"tel"}
            placeholder="Teléfono de contacto"
            onChange={handleValues}
            value={values.tel}
            name="tel"
            />

            <input
            className="form-control my-2"
            type={"text"}
            placeholder="Dirección"
            onChange={handleValues}
            value={values.address}
            name="address"
            />

            <button className="btn btn-danger" type="submit">
            {" "}
            Enviar
            </button>
        </form>
        </div>
    );
    };

export default CheckOut;
