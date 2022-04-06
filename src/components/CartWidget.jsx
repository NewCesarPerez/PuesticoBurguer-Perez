import React, { useContext } from "react";

import { BsFillBagCheckFill } from "react-icons/bs";
import { Link } from "react-router-dom";
import { CartContext } from "../context/CartContext";

const CartWidget = () => {

    const {cartQty}=useContext(CartContext)
  return (
    <div className="my-1">
      <Link to={"/cart"} className="text-dark mx-4">
        <BsFillBagCheckFill />
        <span className="mx-1">{cartQty()}</span>
      </Link>
    </div>
  );
};

export default CartWidget;
