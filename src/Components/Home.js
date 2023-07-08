import React from "react";
import { Link } from 'react-router-dom';
import Hero from "./Hero";
import Productcard from "./Productcard";


const Home = ({products}) => {


  return (
    <>
      <div className="flex justify-center">
        <Hero />
      </div>
      <div className="flex justify-center">
        <h2 className="text-center text-3xl font-semibold my-8">Latest Products</h2>
      </div>
      <div className="flex justify-center" >

        <div className="grid grid-cols-3 gap-4 mt-10">
          {products.map((product, index) => (

            <Link key={product.id} to={`/product/${product.id}`}>
              <Productcard
                key={index}
                details={product.details}
                image={product.image}
                price={product.price}
              />
            </Link>



          ))}
        </div>
      </div>
    </>
  );
};

export default Home;
