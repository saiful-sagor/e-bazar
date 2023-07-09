import React from "react";
import Hero from "./Hero";
import Products from "./Products";


const Home = ({products}) => {


  return (
    <>
      <div className="flex justify-center">
        <Hero />
      </div>
      <div className="flex justify-center">
        <h2 className="text-center text-3xl font-semibold my-8">Latest Products</h2>
      </div>
      <Products products={products}/>
    </>
  );
};

export default Home;
