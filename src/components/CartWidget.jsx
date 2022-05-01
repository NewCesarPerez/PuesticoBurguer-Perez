import React, { useContext } from "react";

import { BsFillBagCheckFill } from "react-icons/bs";
import { Link } from "react-router-dom";
import { CartContext } from "../context/CartContext";

const CartWidget = () => {

    const {cartQty}=useContext(CartContext)
  return (
    <div className="my-1">
      <Link to={"/cart"} className="mx-2 text-decoration-none">
        <BsFillBagCheckFill className="text-danger" />
        <span className="mx-1 text-danger">{cartQty()}</span>
      </Link>
    </div>
  );
};

export default CartWidget;
