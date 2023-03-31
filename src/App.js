import './App.css';

import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import { Routes , Route } from 'react-router-dom';
import Home from './Pages/Home'
import About from './Pages/About';
import Products from './Pages/Products';
import Media from './Pages/Media';
import Contact from './Pages/Contact';
import Login from './Pages/Login';
import Error from './Pages/Error';
import Head from './Component/Head';
import Footer from './Component/Footer';
import ProductRouter from './ProductRouter/ProductRouter';
function App() {
  return (
    <div>
      <Head/>
      <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="About" element={<About/>}></Route>
        <Route path="Products" element={<Products/>}></Route>
        <Route path="Media" element={<Media/>}></Route>
        <Route path="Contact" element={<Contact/>}></Route>
        <Route path="Login" element={<Login/>}></Route>
        <Route element={<Error/>}></Route> 
      </Routes>
      <ProductRouter/>
      <Footer/>
    </div>
  );
}

export default App;
