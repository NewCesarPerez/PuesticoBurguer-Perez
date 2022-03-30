// import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import NavBar from './components/NavBar';
import ItemsList from './components/ItemsList';
import ItemCount from './components/ItemCount';
import ItemListContainer from './components/ItemListContainer';
import ItemDescriptionContainer from './components/ItemDescriptionContainer';
import Carrusel from './components/Carrusel';
import { BrowserRouter, Router, Routes, Route, Navigate } from 'react-router-dom';
import React from 'react';




function App() 
{
  

  return (
    <BrowserRouter>
    <div className="App">
        <NavBar/>
      <main className='w-100 '>
        <Carrusel />
      <Routes>
        <Route path="/" element={<ItemListContainer/>}/>
        <Route path="/category/:categoryId" element={<ItemListContainer />} />
        <Route path="/details/:itemId" element={<ItemDescriptionContainer />} />
        <Route path="*" element={<Navigate to="/"/>}/>
      </Routes> 
      </main>
    </div>
    </BrowserRouter>
  );
}

export default App;
