import React from 'react'
import Productcard from "./Productcard";
import { Link } from 'react-router-dom';

const Products = ({products}) => {
  return (
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
  )
}

export default Products
