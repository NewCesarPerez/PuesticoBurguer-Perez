import React from "react";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import ItemsList from "./ItemsList";
import ItemDescriptionContainer from "./ItemDescriptionContainer";
import {collection, getDocs, getFirestore, query, where, orderBy} from "firebase/firestore";
import {db} from "../firebase/config";

const ItemListContainer = () => {
  const [products, setProducts] = useState([]);
  const [Loading, setLoading] = useState(false);
  const { categoryId } = useParams();
  console.log(categoryId);
  useEffect(() => {
    setLoading(true);
//1.- Armar referencia sincronica
const productosRef=collection(db, "productos")
const q=categoryId ? query(productosRef, where('category','==',categoryId)):query(productosRef, orderBy('category'))

//2.- LLamar asincronicamente a esa referencia

getDocs(q)
.then (resp=>{
  const items=resp.docs.map((doc)=>({id:doc.id, ...doc.data()}))
  setProducts(items);
  console.log(items)
})
.catch((error) => console.log(error))
.finally(()=>setLoading(false))
  }, [categoryId]);

  return (
    <div>
      <div className="container">
        <div id="ItemContainer">
          {Loading ? (
            <div className="spinner-border text-danger m-3" role="status"></div>
          ) : (
            <div className="container">
              <div className="row">
                <div className="col-9">
                  <ItemsList products={products} />
                </div>
                <div className="col-3 bg-danger my-4">
                  {/* <ItemDescriptionContainer/> */}
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
