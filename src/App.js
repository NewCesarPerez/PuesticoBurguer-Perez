// import logo from './logo.svg';
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import NavBar from "./components/NavBar";
import ItemsList from "./components/ItemsList";
import ItemCount from "./components/ItemCount";
import ItemListContainer from "./components/ItemListContainer";
import ItemDescriptionContainer from "./components/ItemDescriptionContainer";
import Carrusel from "./components/Carrusel";
import Cart from "./components/Cart";
import {
  BrowserRouter,
  Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import React from "react";
import Login from "./components/Login";
import Conocenos from "./components/Conocenos";
import Agradecimientos from "./components/Agradecimientos";
import { CartContext } from "./context/CartContext";
import { useState } from "react";
import { CartProvider } from "./context/CartContext";

function App() {



  return (
    <CartProvider>
      <BrowserRouter>
        <div className="App">
          <NavBar />
          <main className="w-100 ">
            <Carrusel />
            <Routes>
              <Route path="/" element={<ItemListContainer />} />
              <Route
                path="/category/:categoryId"
                element={<ItemListContainer />}
              />
              <Route
                path="/details/:itemId"
                element={<ItemDescriptionContainer />}
              />
              <Route path="/Cart" element={<Cart />} />
              <Route path="/Login" element={<Login />} />
              <Route path="/Conocenos" element={<Conocenos />} />
              <Route path="/Agradecimientos" element={<Agradecimientos />} />
              <Route path="*" element={<Navigate to="/" />} />
            </Routes>
          </main>
        </div>
      </BrowserRouter>
    </CartProvider>
    
  );
}

export default App;
