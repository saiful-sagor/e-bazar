import React  from "react";
import Navbar from "./Components/Navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Components/Home";
import Login from "./Components/Login";
import Signup from "./Components/Signup";
import Productdetails from "./Components/Productdetails";
import p1 from "./images/apple-watch.png";
import p2 from "./images/imac.png";
import p3 from './images/headphone1.jpeg'
import Cart from "./Components/Cart";
import Products from "./Components/Products";

const App = () => {

    const users =[
      {
        number:'01875925975',
        password:'1234'
      },
      {
        number:'01875925976',
        password:'12345'
      },
      {
        number:'01875925978',
        password:'123456'
      }
    ]

    const products = [
      {
        id: 1,
        name: 'Watch',
        details: "Apple Watch Series 7 GPS",
        image: p1,
        price: 9.99,
      },
      {
        id: 2,
        name: "imac",
        details: "imac",
        image: p2,
        price: 19.99,
      },
      {
        id: 3,
        name: "Headphone",
        details: "Headphone",
        image: p3,
        price: 99.9,
      },
      {
        id: 4,
        name: 'imac',
        details: "imac",
        image: p2,
        price: 19.99,
      },
      {
        id: 5,
        name: 'Watch',
        details: "Apple Watch Series 7 GPS, Aluminium Case, Starlight Sport",
        image: p1,
        price: 9.99,
      },
      {
        id: 11,
        name: 'imac',
        details: "imac",
        image: p2,
        price: 19.99,
      },
      {
        id: 7,
        name: 'Headphone',
        details: "Headphone",
        image: p3,
        price: 99.9,
      },
      {
        id: 8,
        name: 'Watch',
        details: "Apple Watch Series 7 GPS, Aluminium Case, Starlight Sport",
        image: p1,
        price: 9.99,
      },
      {
        id: 9,
        name: 'imac',
        details: "imac",
        image: p2,
        price: 19.99,
      },
      {
        id: 10,
        name: 'Headphone',
        details: "Headphone",
        image: p3,
        price: 99.9,
      },
    ];


  return (
    <Router>
      <Navbar />
      <Routes>
        <Route index element={<Home products={products} />} />
        <Route path="login" element={<Login users={users}/>} />
        <Route path="register" element={<Signup users ={users}/>} />
        <Route path="products" element={<Products products ={products}/>} />
        <Route path="/product/:id" element={<Productdetails products={products}/>} />
        <Route path="cart" element={<Cart />} />
      </Routes>
    </Router>
  );
};

export default App;
