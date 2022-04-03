import React from "react";
import Item from "./Item";

const ItemsList = ({ products }) => {
  return (
    <div className="row">
      {products.map((elements) => (
        <Item
          price={elements.price}
          id={elements.id}
          title={elements.title}
          imagen={elements.imagen}
          key={elements.id}
        />
      ))}
    </div>
  );
};

export default ItemsList;
