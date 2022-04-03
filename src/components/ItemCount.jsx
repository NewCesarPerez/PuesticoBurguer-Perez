import React from "react";
import { useState } from "react";
import { Link, Navigate, useNavigate } from "react-router-dom";

const ItemCount = ({ maxQty, onAdd, qty, setQty }) => {
const handleSum = () => qty < maxQty && setQty(qty + 1);
const handleSubstract = () => qty > 1 && setQty(qty - 1);

  return (
    <div className="d-flex flex-column">
      <div>
        <button
          onClick={handleSubstract}
          className="btn btn-outline-danger w-auto"
        >
          -
        </button>
        <span className="mx-2">{qty}</span>
        <button onClick={handleSum} className="btn btn-outline-success w-auto">
          +
        </button>
      </div>
      <div className="mt-2 mb-1">
        <button onClick={onAdd} className="btn btn-danger mx-1  m-auto">
          Agregar
        </button>
        <Link className="btn btn-primary  m-auto" to={"/cart"}>
          Carrito
        </Link>
      </div>
    </div>
  );
};

export default ItemCount;
