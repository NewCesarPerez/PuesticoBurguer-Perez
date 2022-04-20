// import logo from './logo.svg';
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import NavBar from "./components/NavBar";
import ItemListContainer from "./components/ItemListContainer";
import ItemDescriptionContainer from "./components/ItemDescriptionContainer";
import Carrusel from "./components/Carrusel";
import Cart from "./components/Cart";
import Footer from "./components/Footer";
import {
  BrowserRouter,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import React from "react";
import Login from "./components/Login";
import Conocenos from "./components/Conocenos";
import Agradecimientos from "./components/Agradecimientos";
import { CartProvider } from "./context/CartContext";
import CheckOut from "./components/CheckOut";

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
              <Route path="/category/:categoryId" element={<ItemListContainer />}/>
              <Route path="/details/:itemId" element={<ItemDescriptionContainer />}/>
              <Route path="/Login" element={<Login />} />
              <Route path="/Conocenos" element={<Conocenos />} />
              <Route path="/Cart" element={<Cart />} />
              <Route path="/checkout" element={<CheckOut />} />
              <Route path="/Agradecimientos" element={<Agradecimientos />} />
              <Route path="*" element={<Navigate to="/" />} />
            </Routes>
          </main>
          <Footer/>
        </div>
      </BrowserRouter>
    </CartProvider>
    
  );
}

export default App;
