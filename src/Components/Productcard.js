import React from "react";

const Productcard = (props) => {
    return (
        <div className="mx-auto mt-11 w-80 transform overflow-hidden rounded-lg bg-white dark:bg-slate-800 shadow-md duration-300 hover:scale-105 hover:shadow-lg">
          <img className="h-48 w-full object-cover object-center" src={props.image} alt="Product" />
          <div className="p-4">
            <h2 className="mb-2 text-lg font-medium dark:text-white text-gray-900">{props.name}</h2>
            <p className="mb-2 text-base dark:text-gray-300 text-gray-700">{props.details}</p>
            <div className="flex items-center">
              <p className="mr-2 text-lg font-semibold text-gray-900 dark:text-white">${props.price}</p>
              <p className="text-base  font-medium text-gray-500 line-through dark:text-gray-300">${(props.price+0.2*props.price).toFixed(2)}</p>
              <button
                  className="ml-10 px-6 py-2 transition ease-in duration-200  rounded-full hover:bg-gray-800 hover:text-white border-2 border-gray-900 focus:outline-none">Add
            to cart</button>
            </div>
          </div>
        </div>

    );
};

export default Productcard;
