import { useContext, useEffect } from "react";
import { FaMinus, FaPlus } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { MainContext } from "../../Context";
// import { qtyHandle } from "../../redux/features/cartSlice";
import { useNavigate } from "react-router-dom"
import { qtyHandle } from "../../redux/slice/cartSlice";


const Cart = () => {
    const navigator = useNavigate()
    const dispatch = useDispatch();
    function handleCart(payload) {
        // Dispatch an action to add the product to the cart
        dispatch(qtyHandle(payload));
    }


    const { getProduct, products, API_BASE_URL } = useContext(MainContext)
    const cart = useSelector((state) => state.cart);
    const user = useSelector((state) => state.user);

    function checkoutHandler() {
        if (user.data && user.user_token) {
            navigator('/checkout')
        } else {
            navigator('/login?ref=checkout')

        }


    }


    useEffect(
        () => {
            getProduct();
        },
        []
    )

    return (
        <div className="min-h-screen bg-gray-100 p-6">
            <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-6">

                <div className="md:col-span-2 space-y-6">
                    {
                        cart?.items.map((item, index) => {
                            console.log(cart);
                            const product = products.find((p) => p._id === item.productId);
                            if (!product) return null; // Skip if product not found
                                // console.log(product);

                            return (
                                <div
                                    key={index}
                                    className="relative bg-white rounded-lg p-4 flex gap-4 items-start shadow-sm border"
                                >

                                    <img
                                        src={`${API_BASE_URL}/images/product/${product.thumbnail}`}
                                        alt={product.name}
                                        className="w-24 h-24 object-contain"
                                    />

                                    <div className="flex-1 space-y-1">
                                        <h3 className="font-semibold">{product.name}</h3>
                                        <p className="text-red-500 font-bold text-lg">
                                            {Number(product.finalPrice || 0).toFixed(2)}
                                            </p>
                                        {/* Quantity */}
                                        <div className="flex items-center gap-2 mt-1">
                                            <button onClick={() => {
                                                handleCart({ productId: item.productId, type: 'dec', finalPrice: product.finalPrice, orignalPrice: product.orignalPrice });
                                            }} className="border p-1 rounded hover:bg-gray-100">
                                                <FaMinus size={12} />
                                            </button>
                                            <span>{item.qty}</span>
                                            <button onClick={() => {
                                                handleCart({ productId: item.productId, type: 'inc', finalPrice: product.finalPrice, orignalPrice: product.orignalPrice });
                                            }} className="border p-1 rounded hover:bg-gray-100">
                                                <FaPlus size={12} />
                                            </button>
                                        </div>

                                        {/* Shipping Info */}
                                        <div className="flex items-center text-xs gap-2 mt-1">

                                            <span className="text-green-600 font-semibold">
                                                FREE SHIPPING
                                            </span>

                                        </div>


                                    </div>
                                </div>
                            )

                        })
                    }
                </div>


 <div className="w-full lg:w-80 bg-white p-6 rounded-lg border border-green-400 shadow-lg">
          <h3 className="text-lg font-bold mb-4">Order Summary</h3>
          <div className="space-y-2 text-sm">
            <div className="flex justify-between">
              <span>Sub Total:</span>
              <span className="font-semibold">₹{cart.original_total}</span>
            </div>
            <div className="flex justify-between">
              <span>Shipping estimate:</span>
              <span>₹600.00</span>
            </div>
            <div className="flex justify-between">
              <span>Tax estimate:</span>
              <span>₹137.00</span>
            </div>
            <div className="flex justify-between font-bold pt-2 border-t">
              <span>ORDER TOTAL:</span>
              <span>₹{cart.final_total}</span>
            </div>
          </div>
 
          <button
            onClick={checkoutHandler}
            className="mt-4 w-full bg-green-500 hover:bg-green-400 text-white py-2 rounded-md font-semibold"
          >
            CHECKOUT
          </button>

        </div>

                {/* <div className="bg-white rounded-lg p-6 border border-green-500">
                    <h2 className="text-lg font-semibold mb-4">Order Summary</h2>
                    <div className="space-y-2 text-sm text-gray-700">
                        <div className="flex justify-between">
                            <span>Original Total:</span>
                            <span>{Number(cart.original_total)}</span>
                        </div>
                        <div className="flex justify-between">
                            <span>Saving:</span>
                            <span>{Number(cart.original_total - cart.final_total)}</span>
                        </div>

                        <div className="flex justify-between font-bold text-black border-t pt-2">
                            <span>ORDER TOTAL:</span>
                            <span>{cart.final_total}</span>
                        </div>
                    </div>
                    <button onClick={checkoutHandler} className="mt-6 w-full bg-teal-600 hover:bg-teal-700 text-white py-2 rounded">
                        CHECKOUT
                    </button>
                </div> */}
            </div>
        </div>
    );
};

export default Cart;

// import { useContext, useEffect } from "react";
// import { FaMinus, FaPlus } from "react-icons/fa";
// import { useDispatch, useSelector } from "react-redux";
// import { MainContext } from "../../Context";
// import { useNavigate } from "react-router-dom"
// import {  qtyHandler } from "../../redux/slice/cartSlice";
// const Cart = () => {
//     const navigator = useNavigate()
//     const dispatch = useDispatch();

//     function handlerCart(payload) {
//         // Dispatch an action to add the product to the cart
//         dispatch(qtyHandler(payload));
//     }


//     const { getProduct, products, API_BASE_URL } = useContext(MainContext)
//     const cart = useSelector((state) => state.cart);
//     const user = useSelector((state) => state.user);

//     function checkOutHandler() {
//         if (user.data && user.user_token) {
//             navigator('/checkout')
//         } else {
//             navigator('/login?ref=checkout')

//         }
//     }


//     useEffect(
//         () => {
//             getProduct();
//         },
//         []
//     )

//     return (
//     <div className="min-h-screen p-6 bg-white text-black">
//       <h1 className="text-3xl font-bold mb-6">Your Cart</h1>
//       <div className="flex flex-col lg:flex-row gap-6">
//         {/* Products */}
//         <div className="flex-1 space-y-6">
//           {cart?.item?.map((item, index) => {
//             const product = products.find((p) => p._id === item.productId);
//             if (!product) return null;

//             return (
//               <div key={index} className="border rounded-xl p-4 flex gap-4 bg-white shadow-md">
//                 <img
//                   src={`${API_BASE_URL}/images/product/${product.thumbnail}`}
//                   alt={product.name}
//                   className="w-32 h-32 object-cover rounded-md"
//                 />

//                 <div className="flex-1">
//                   <div className="flex justify-between items-start">
//                     <h2 className="text-lg font-semibold">{product.name}</h2>
//                     {index === 0 && (
//                       <div className="bg-green-100 text-green-700 px-2 py-1 text-xs rounded">
//                         SAVE ${product.orignalPrice - product.finalPrice}
//                       </div>
//                     )}
//                     {index !== 0 && (
//                       <div className="bg-black text-white px-2 py-1 text-xs rounded">
//                         NEW
//                       </div>
//                     )}
//                   </div>

//                   <p className="text-xl font-bold text-red-500 mt-2">
//                     ${product.finalPrice}
//                   </p>
//                   {product.finalPrice < product.orignalPrice && (
//                     <p className="text-sm text-gray-400 line-through">${product.orignalPrice}</p>
//                   )}

//                   <div className="flex items-center mt-2 space-x-2">
//                     <button
//                       onClick={() => handlerCart({ productId: item.productId, type: 'dec', finalPrice: product.finalPrice, orignalPrice: product.orignalPrice })}
//                       className="px-2 py-1 bg-gray-300 rounded"
//                     >
//                       -
//                     </button>
//                     <span>{item.qty}</span>
//                     <button
//                       onClick={() => handlerCart({ productId: item.productId, type: 'inc', finalPrice: product.finalPrice, orignalPrice: product.orignalPrice })}
//                       className="px-2 py-1 bg-gray-300 rounded"
//                     >
//                       +
//                     </button>
//                   </div>

//                   <div className="mt-2 flex flex-wrap gap-2 text-sm">
//                     <span className="bg-green-100 text-green-700 px-2 py-0.5 rounded">{index === 1 ? "$2.00 SHIPPING" : "FREE SHIPPING"}</span>
//                     <span className="text-green-600">In stock</span>
//                   </div>

//                   <button className="mt-3 text-sm text-red-600 hover:underline">
//                     Remove from Cart
//                   </button>
//                 </div>
//               </div>
//             );
//           })}
//         </div>

//         {/* Order Summary */}
//         <div className="w-full lg:w-80 bg-white p-6 rounded-lg border border-green-400 shadow-lg">
//           <h3 className="text-lg font-bold mb-4">Order Summary</h3>
//           <div className="space-y-2 text-sm">
//             <div className="flex justify-between">
//               <span>Sub Total:</span>
//               <span className="font-semibold">${cart.orignalTotal}</span>
//             </div>
//             <div className="flex justify-between">
//               <span>Shipping estimate:</span>
//               <span>$600.00</span>
//             </div>
//             <div className="flex justify-between">
//               <span>Tax estimate:</span>
//               <span>$137.00</span>
//             </div>
//             <div className="flex justify-between font-bold pt-2 border-t">
//               <span>ORDER TOTAL:</span>
//               <span>${cart.finalTotal}</span>
//             </div>
//           </div>
 
//           <button
//             onClick={checkOutHandler}
//             className="mt-4 w-full bg-green-500 hover:bg-green-400 text-white py-2 rounded-md font-semibold"
//           >
//             CHECKOUT
//           </button>

//         </div>
//       </div>
//     </div>
//   );
// };

// export default Cart;

// import React, { useEffect } from "react";
// import { useContext } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import { MainContext } from "../../Context";
// // import { qtyHandler } from "../../redux/slice/cartSlice";
// import { Link, useNavigate } from 'react-router-dom';
// import Checkout from "./Checkout";

// const Cart = () => {
//   const navigate = useNavigate();
//   const dispatch = useDispatch();

//   const handlerCart = (payload) => {
//     dispatch(qtyHandler(payload));
//   };

//   const { getProduct, products, API_BASE_URL } = useContext(MainContext);
//   const cart = useSelector((state) => state.cart);
//   const user = useSelector((state) => state.user);
//   console.log(user);


//   const checkOutHandler = () => {
//     if (user.data && user.userToken) {
//       navigate("/checkout?ref=checkout");
//     } else {
//       navigate("/login");
//     }
//   };

//   useEffect(() => {
//     getProduct();
//   }, []);

//   return (
//     <div className="min-h-screen p-6 bg-white text-black">
//       <h1 className="text-3xl font-bold mb-6">Your Cart</h1>
//       <div className="flex flex-col lg:flex-row gap-6">
//         {/* Products */}
//         <div className="flex-1 space-y-6">
//           {cart?.item?.map((item, index) => {
//             const product = products.find((p) => p._id === item.productId);
//             if (!product) return null;

//             return (
//               <div key={index} className="border rounded-xl p-4 flex gap-4 bg-white shadow-md">
//                 <img
//                   src={`${API_BASE_URL}/images/product/${product.thumbnail}`}
//                   alt={product.name}
//                   className="w-32 h-32 object-cover rounded-md"
//                 />

//                 <div className="flex-1">
//                   <div className="flex justify-between items-start">
//                     <h2 className="text-lg font-semibold">{product.name}</h2>
//                     {index === 0 && (
//                       <div className="bg-green-100 text-green-700 px-2 py-1 text-xs rounded">
//                         SAVE ${product.orignalPrice - product.finalPrice}
//                       </div>
//                     )}
//                     {index !== 0 && (
//                       <div className="bg-black text-white px-2 py-1 text-xs rounded">
//                         NEW
//                       </div>
//                     )}
//                   </div>

//                   <p className="text-xl font-bold text-red-500 mt-2">
//                     ${product.finalPrice}
//                   </p>
//                   {product.finalPrice < product.orignalPrice && (
//                     <p className="text-sm text-gray-400 line-through">${product.orignalPrice}</p>
//                   )}

//                   <div className="flex items-center mt-2 space-x-2">
//                     <button
//                       onClick={() => handlerCart({ productId: item.productId, type: 'dec', finalPrice: product.finalPrice, orignalPrice: product.orignalPrice })}
//                       className="px-2 py-1 bg-gray-300 rounded"
//                     >
//                       -
//                     </button>
//                     <span>{item.qty}</span>
//                     <button
//                       onClick={() => handlerCart({ productId: item.productId, type: 'inc', finalPrice: product.finalPrice, orignalPrice: product.orignalPrice })}
//                       className="px-2 py-1 bg-gray-300 rounded"
//                     >
//                       +
//                     </button>
//                   </div>

//                   <div className="mt-2 flex flex-wrap gap-2 text-sm">
//                     <span className="bg-green-100 text-green-700 px-2 py-0.5 rounded">{index === 1 ? "$2.00 SHIPPING" : "FREE SHIPPING"}</span>
//                     <span className="text-green-600">In stock</span>
//                   </div>

//                   <button className="mt-3 text-sm text-red-600 hover:underline">
//                     Remove from Cart
//                   </button>
//                 </div>
//               </div>
//             );
//           })}
//         </div>

//         {/* Order Summary */}
        // <div className="w-full lg:w-80 bg-white p-6 rounded-lg border border-green-400 shadow-lg">
        //   <h3 className="text-lg font-bold mb-4">Order Summary</h3>
        //   <div className="space-y-2 text-sm">
        //     <div className="flex justify-between">
        //       <span>Sub Total:</span>
        //       <span className="font-semibold">${cart.orignalTotal}</span>
        //     </div>
        //     <div className="flex justify-between">
        //       <span>Shipping estimate:</span>
        //       <span>$600.00</span>
        //     </div>
        //     <div className="flex justify-between">
        //       <span>Tax estimate:</span>
        //       <span>$137.00</span>
        //     </div>
        //     <div className="flex justify-between font-bold pt-2 border-t">
        //       <span>ORDER TOTAL:</span>
        //       <span>${cart.finalTotal}</span>
        //     </div>
        //   </div>
 
        //   <button
        //     onClick={checkOutHandler}
        //     className="mt-4 w-full bg-green-500 hover:bg-green-400 text-white py-2 rounded-md font-semibold"
        //   >
        //     CHECKOUT
        //   </button>

        // </div>
//       </div>
//     </div>
//   );
// };

// export default Cart;