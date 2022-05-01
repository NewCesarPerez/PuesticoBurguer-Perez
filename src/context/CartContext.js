import { createContext } from "react";
import { useState } from "react";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState(getProductsLocalStorage);

  const addItem = (item) => {
    saveProductLocalStorage(item);
    setCart([...cart, item]);
  };

  const isInCart = (id) => {
    return cart.some((produ) => produ.id === id);
  };

  const cartQty = () => {
    return cart.reduce((acc, prod) => (acc += prod.qty), 0);
  };

  const cartTotal = () => {
    return cart.reduce((acc, prod) => (acc += prod.price * prod.qty), 0);
  };

  const emptyCart = () => {
    setCart([]);
    removeAllProductsLocalStorage();
  };

  const removeItem = (id) => {
    setCart(cart.filter((prod) => prod.id !== id));
    eraseProductLocalStorage(cart.filter((prod) => prod.id === id)[0].id);
  };
  return (
    <CartContext.Provider
      value={{
        setCart,
        cart,
        addItem,
        isInCart,
        cartQty,
        cartTotal,
        emptyCart,
        removeItem,
        saveProductLocalStorage,
        getProductsLocalStorage,
        eraseProductLocalStorage,
        removeAllProductsLocalStorage,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

const saveProductLocalStorage = (product) => {
  let products;
  products = getProductsLocalStorage();
  products.push(product);
  localStorage.setItem("products", JSON.stringify(products));
};
const eraseProductLocalStorage = (prodId) => {
  let productLS;
  productLS = getProductsLocalStorage();

  productLS.forEach((prodLS, index) => {
    if (prodLS.id === prodId) {
      productLS.splice(index, 1);
    }
  });
  localStorage.setItem("products", JSON.stringify(productLS));
};

const removeAllProductsLocalStorage = () => {
  let productLS = [];
  localStorage.setItem("products", JSON.stringify(productLS));
};

const getProductsLocalStorage = () => {
  let productLS;
  if (localStorage.getItem("products") === null) {
    productLS = [];
  } else {
    productLS = JSON.parse(localStorage.getItem("products"));
  }

  return productLS;
};
