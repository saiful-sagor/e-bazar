import React ,{ useState,useEffect }from 'react'
import { useNavigate } from "react-router-dom";
import p1 from '../images/apple-watch.png'
import p2 from "../images/imac.png";
import p3 from '../images/headphone1.jpeg'

const Cart = () => {

    const [cartItems, setCartItems] = useState([{
        id: 11,
        name: 'imac',
        details: "Apple iMac 27 with Retina 5K Display, 3.3Ghz 6-Core Intel i5, 8GB RAM, 512GB SSD, AMD Radeon Pro 5300 4GB, Mid 2020",
        image: p2,
        price: 19.99,
        quantity:0
      },
      {
        id: 7,
        name: 'Headphone',
        details: "Razer Kraken X Ultralight Gaming Headset: 7.1 Surround Sound - Lightweight Aluminum Frame - Bendable Cardioid Microphone - for PC, PS4, PS5, Switch, Xbox One, Xbox Series X|S, Mobile - Green",
        image: p3,
        price: 99.9,
        quantity:0,
      },
      {
        id: 8,
        name: 'Watch',
        details: "Apple Watch Series 8 [GPS 41mm] Smart Watch w/Starlight Aluminum Case with Starlight Sport Band - S/M. Fitness Tracker, Blood Oxygen & ECG Apps, Always-On Retina Display, Water Resistant",
        image: p1,
        price: 99.9,
        quantity:0,
      }]);
      const [subtotal, setSubtotal] = useState(0);
      const [total, setTotal] = useState(0);
      const navigate = useNavigate();

    // Function to add an item to the cart
  // const addToCart = (product) => {
  //   const existingItem = cartItems.find((item) => item.id === product.id);

  //   if (existingItem) {
  //     // If the item already exists in the cart, increase the quantity
  //     const updatedItems = cartItems.map((item) => {
  //       if (item.id === product.id) {
  //         return { ...item, quantity: item.quantity + 1 };
  //       }
  //       return item;
  //     });

  //     setCartItems(updatedItems);
  //   } else {
  //     // If the item is not in the cart, add it with a quantity of 1
  //     const newItem = { ...product, quantity: 1 };
  //     setCartItems([...cartItems, newItem]);
  //   }
  // };

  const HandleClick = ()=>{
    navigate('/successfull');
  }
  // Function to increase the quantity of an item in the cart
  const increaseQuantity = (itemId) => {
    const updatedItems = cartItems.map((item) => {
      if (item.id === itemId) {
        return { ...item, quantity: item.quantity + 1 };
      }
      return item;
    });

    setCartItems(updatedItems);
  };

  // Function to decrease the quantity of an item in the cart
  const decreaseQuantity = (itemId) => {
    const updatedItems = cartItems.map((item) => {
      if (item.id === itemId && item.quantity > 1) {
        return { ...item, quantity: item.quantity - 1 };
      }
      return item;
    });

    setCartItems(updatedItems);
  };

  // Function to remove an item from the cart
  const removeFromCart = (itemId) => {
    const updatedItems = cartItems.filter((item) => item.id !== itemId);
    setCartItems(updatedItems);
  };

  useEffect(() => {
    // Calculate subtotal
    const newSubtotal = cartItems.reduce((total, item) => total + item.price * item.quantity, 0);
    setSubtotal(newSubtotal);

    // Calculate total (including any additional fees, taxes, or shipping costs)
    const newTotal = newSubtotal + 4.99; // Add shipping cost or any other additional costs
    setTotal(newTotal);
  }, [cartItems]);

 

  return (

//     <div class="h-screen bg-gray-100 pt-20">
//     <h1 class="mb-10 text-center text-2xl font-bold">Cart Items</h1>
//     <div class="mx-auto max-w-5xl justify-center px-6 md:flex md:space-x-6 xl:px-0">
//       <div class="rounded-lg md:w-2/3">
//         <div class="justify-between mb-6 rounded-lg bg-white p-6 shadow-md sm:flex sm:justify-start">
//           <img src="https://images.unsplash.com/photo-1515955656352-a1fa3ffcd111?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" alt="product" class="w-full rounded-lg sm:w-40" />
//           <div class="sm:ml-4 sm:flex sm:w-full sm:justify-between">
//             <div class="mt-5 sm:mt-0">
//               <h2 class="text-lg font-bold text-gray-900">Nike Air Max 2019</h2>
//               <p class="mt-1 text-xs text-gray-700">36EU - 4US</p>
//             </div>
//             <div class="mt-4 flex justify-between sm:space-y-6 sm:mt-0 sm:block sm:space-x-6">
//               <div class="flex items-center border-gray-100">
//                 <span class="cursor-pointer rounded-l bg-gray-100 py-1 px-3.5 duration-100 hover:bg-blue-500 hover:text-blue-50"> - </span>
//                 <input class="h-8 w-8 border bg-white text-center text-xs outline-none" type="number" value="2" min="1" />
//                 <span class="cursor-pointer rounded-r bg-gray-100 py-1 px-3 duration-100 hover:bg-blue-500 hover:text-blue-50"> + </span>
//               </div>
//               <div class="flex items-center space-x-4">
//                 <p class="text-sm">259.000 ₭</p>
//                 <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="h-5 w-5 cursor-pointer duration-150 hover:text-red-500">
//                   <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
//                 </svg>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>

//       <div class="mt-6 h-full rounded-lg border bg-white p-6 shadow-md md:mt-0 md:w-1/3">
//         <div class="mb-2 flex justify-between">
//           <p class="text-gray-700">Subtotal</p>
//           <p class="text-gray-700">$129.99</p>
//         </div>
//         <div class="flex justify-between">
//           <p class="text-gray-700">Shipping</p>
//           <p class="text-gray-700">$4.99</p>
//         </div>
//         <hr class="my-4" />
//         <div class="flex justify-between">
//           <p class="text-lg font-bold">Total</p>
//           <div class="">
//             <p class="mb-1 text-lg font-bold">$134.98 USD</p>
//             <p class="text-sm text-gray-700">including VAT</p>
//           </div>
//         </div>
//         <button class="mt-6 w-full rounded-md bg-blue-500 py-1.5 font-medium text-blue-50 hover:bg-blue-600">Check out</button>
//       </div>
//     </div>
//   </div>
<div className="h-screen bg-gray-100 pt-20">
      <h1 className="mb-10 text-center text-2xl font-bold">Cart Items</h1>
      <div className="mx-auto max-w-5xl justify-center px-6 md:flex md:space-x-6 xl:px-0">
        <div className="rounded-lg md:w-2/3">
          {cartItems.map((item) => (
            <div
              key={item.id}
              className="justify-between mb-6 rounded-lg bg-white p-6 shadow-md sm:flex sm:justify-start"
            >
              <img src={item.image} alt="product" className="w-full rounded-lg sm:w-40" />
              <div className="sm:ml-4 sm:flex sm:w-full sm:justify-between">
                <div className="mt-5 sm:mt-0">
                  <h2 className="text-lg font-bold text-gray-900">{item.name}</h2>
                  <p className="mt-1 text-xs text-gray-700">{item.details}</p>
                </div>
                <div className="mt-4 flex justify-between sm:space-y-6 sm:mt-0 sm:block sm:space-x-6">
                  <div className="flex items-center border-gray-100">
                    <span
                      className="cursor-pointer rounded-l bg-gray-100 py-1 px-3.5 duration-100 hover:bg-blue-500 hover:text-blue-50"
                      onClick={() => decreaseQuantity(item.id)}
                    >
                      -
                    </span>
                    <input
                      className="h-8 w-8 border bg-white text-center text-xs outline-none"
                      type="number"
                      value={item.quantity}
                      min="1"
                      readOnly
                    />
                    <span
                      className="cursor-pointer rounded-r bg-gray-100 py-1 px-3 duration-100 hover:bg-blue-500 hover:text-blue-50"
                      onClick={() => increaseQuantity(item.id)}
                    >
                      +
                    </span>
                  </div>
                  <div className="flex items-center space-x-4">
                    <p className="text-sm">${item.price.toLocaleString()} </p>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="currentColor"
                      className="h-5 w-5 cursor-pointer duration-150 hover:text-red-500"
                      onClick={() => removeFromCart(item.id)}
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-6 h-full rounded-lg border bg-white p-6 shadow-md md:mt-0 md:w-1/3">
          <div className="mb-2 flex justify-between">
            <p className="text-gray-700">Subtotal</p>
            <p className="text-gray-700">${subtotal.toLocaleString()}</p>
          </div>
          <div className="flex justify-between">
            <p className="text-gray-700">Shipping</p>
            <p className="text-gray-700">$4.99</p>
          </div>
          <hr className="my-4" />
          <div className="flex justify-between">
            <p className="text-lg font-bold">Total</p>
            <div>
              <p className="mb-1 text-lg font-bold">${total.toLocaleString()} USD</p>
              <p className="text-sm text-gray-700">including VAT</p>
            </div>
          </div>
          <button className="mt-6 w-full rounded-md bg-blue-500 py-1.5 font-medium text-blue-50 hover:bg-blue-600" onClick={HandleClick}>
            Check out
          </button>
        </div>
      </div>
    </div>
  )
}

export default Cart
