import React from "react";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
//import { getProducts } from "../mocks/fakeApi";
import ItemsList from "./ItemsList";
import { collection, getDocs, query, where, orderBy } from "firebase/firestore";
import { db } from "../firebase/config";


const ItemListContainer = () => {
  const [products, setProducts] = useState([]);
  const [Loading, setLoading] = useState(false);
  const { categoryId } = useParams();

  useEffect(() => {
    setLoading(true);
    //1.- Armar referencia sincronica
    const productosRef = collection(db, "productos");
    const q = categoryId
      ? query(productosRef, where("category", "==", categoryId))
      : query(productosRef, orderBy("category"));

    //2.- LLamar asincronicamente a esa referencia

    getDocs(q)
      .then((resp) => {
        const items = resp.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
        setProducts(items);
      })
      .catch((error) => console.log(error))
      .finally(() => setLoading(false));
  }, [categoryId]);

  return (
    <div className="fontFamilyForm">
      <h1 className="text-white p-5 bg-warning">
        {categoryId !== "Platos" &&
        categoryId !== "Bebidas" &&
        categoryId !== "Postres"
          ? "MENU"
          : categoryId.toUpperCase()}
      </h1>
      <div className="container fontFamilyForm">
        <div id="ItemContainer">
          {Loading ? (
            <div className="spinner-border text-danger m-3" role="status"></div>
          ) : (
            <div className="container">
              <div className="row">
                <div className="col-9">
                  <ItemsList products={products} />
                </div>
                <div className="col-3 py-2 gradiente my-4">
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ItemListContainer;
