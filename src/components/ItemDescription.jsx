import React, { useContext } from "react";
import { useState } from "react";
import { Link, Navigate, useNavigate } from "react-router-dom";
import ItemCount from "./ItemCount";
import { CartContext } from "../context/CartContext";

const ItemDescription = ({ productDetail }) => {
  const navigate = useNavigate();
  const handleNavigate = () => {
    navigate(-1);
  };
  const [qty, setQty] = useState(1);

  const onAdd = () => {
    const itemToAdd = {
      id: productDetail.id,
      title: productDetail.title,
      price: productDetail.price,
      imagen: productDetail.imagen,
      qty: qty,
    };
    //productDetail.Stock = productDetail.Stock - qty;
    
    console.log(itemToAdd);
    addItem(itemToAdd);
  };
 
  
  const { cart, setCart, addItem, isInCart } = useContext(CartContext);
  console.log(cart);
  
  
  return (
    
    <div className="col col-12 m-auto w-75">
      <div className="card my-4">
        <img
          className="imgCarrito w-50 h-50"
          src={productDetail.imagenDetail}
          alt={productDetail.title}
        ></img>
        <div key={productDetail.id} className="card-body bg-warning ">
          <h5 className="card-title">{productDetail.title}</h5>
          <p className="card-text ">{productDetail.descripcion}.</p>
          <p className="card-text my-0 ">${productDetail.price}</p>

          <div>
            <p className="card-text my-1 text-danger font-weight-bold">
              Stock: {productDetail.Stock}
            </p>

            {productDetail.stock === 0 && (
              <p className="card-text my-1 text-danger font-weight-bold">
                Item sin stock
              </p>
            )}
          </div>

          {productDetail.Stock > 0 && (
            <>
              {!isInCart(productDetail.id) ? (
                <ItemCount
                  maxQty={productDetail.Stock}
                  onAdd={onAdd}
                  qty={qty}
                  setQty={setQty}
                />
              ) : (
                <Link to="/cart" className="btn btn-danger mx-1 m-auto">
                  Terminar mi compra
                </Link>
              )}
            </>
          )}

          <button
            className="btn btn-outline-success w-25 m-auto my-1"
            onClick={() => {
              handleNavigate();
            }}
          >
            {" "}
            Volver{" "}
          </button>
        </div>
      </div>
    </div>
  );
};

export default ItemDescription;
