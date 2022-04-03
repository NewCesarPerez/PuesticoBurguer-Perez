import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getProducts } from "../mocks/fakeApi";
import ItemDescription from "./ItemDescription";

const ItemDescriptionContainer = () => {
  const [productDetail, setProductDetail] = useState({});
  const [loading, setLoading] = useState(false);
  const { itemId } = useParams();
  console.log("Item ID " + itemId);

  useEffect(() => {
    setLoading(true);
    getProducts
      .then((response) =>
        setProductDetail(response.find((item) => item.id === Number(itemId)))
      )
      .catch((error) => console.log(error))
      .finally(() => setLoading(false));
  }, [itemId]);
  console.log(productDetail);
  return (
    <div id="ItemDescriptionContainer" className="row">
      {loading ? (
        <div className="spinner-border text-warning m-3" role="status"></div>
      ) : (
        <ItemDescription productDetail={productDetail} />
      )}
    </div>
  );
};

export default ItemDescriptionContainer;
