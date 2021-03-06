import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { db } from "../Firebase/config";
import {doc, getDoc} from "firebase/firestore";
import ItemDescription from "./ItemDescription";

const ItemDescriptionContainer = () => {
  const [productDetail, setProductDetail] = useState({});
  const [loading, setLoading] = useState(false);
  const { itemId } = useParams();
  useEffect(() => {
    setLoading(true);
    const docRef=doc(db, "productos",itemId)
    getDoc(docRef)
      .then(doc=>{
        const prod={id:doc.id, ...doc.data()}
        setProductDetail(prod);
      })
      .finally(() => setLoading(false));    
  }, [itemId]);
  
  return (
    <div id="ItemDescriptionContainer" className="row fontFamilyForm" >
      {loading ? (
        <div className="spinner-border text-warning m-3 m-auto" role="status"></div>
      ) : (
        <ItemDescription productDetail={productDetail} />
      )}
    </div>
  );
};

export default ItemDescriptionContainer;
