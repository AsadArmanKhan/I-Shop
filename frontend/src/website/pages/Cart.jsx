import React, { useEffect } from "react";
import { useContext } from "react";
import { useDispatch, useSelector } from "react-redux";
import { MainContext } from "../../Context";
import { qtyHandler } from "../../redux/slice/cartSlice";

const Cart = () => {
  const dispatch = useDispatch()
  function handlerCart(payload) {
    dispatch(qtyHandler(payload))

  }
  const { getProduct, products, API_BASE_URL, } = useContext(MainContext)
  const cart = useSelector((state) => state.cart);
  // console.log(cart);

  useEffect(
    () => {
      getProduct()

    }, []
  )
  // useEffect(() => {
  //   const canvas = document.getElementById("cartCanvas");
  //   const ctx = canvas.getContext("2d");
  //   canvas.width = window.innerWidth;
  //   canvas.height = window.innerHeight;

  //   // const particles = Array.from({ length: 120 }, () => ({
  //   //   x: Math.random() * canvas.width,
  //   //   y: Math.random() * canvas.height,
  //   //   size: Math.random() * 2 + 1,
  //   //   speedY: Math.random() * 1 + 0.3,
  //   // }));

  //   // const animate = () => {
  //   //   ctx.clearRect(0, 0, canvas.width, canvas.height);
  //   //   particles.forEach((p) => {
  //   //     ctx.beginPath();
  //   //     ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
  //   //     ctx.fillStyle = "rgba(255, 215, 0, 0.25)";
  //   //     ctx.fill();
  //   //     p.y += p.speedY;
  //   //     if (p.y > canvas.height) p.y = 0;
  //   //   });
  //   //   requestAnimationFrame(animate);
  //   // };

  //   animate();
  // }, []);

  return (
    <div className="relative min-h-screen bg-gradient-to-br from-[#0f0f0f] to-[#1b1b1b] text-yellow-100 p-6">
      {/* Canvas Background */}
      {/* <canvas
        id="cartCanvas"
        className="absolute top-0 left-0 w-full h-full pointer-events-none z-0"
      /> */}

      {/* Title */}
      <h1 className="text-3xl font-bold mb-6 text-yellow-400 relative z-10">
        Your Cart
      </h1>

      {/* Cart Layout */}
      <div className="relative z-10 flex flex-col lg:flex-row gap-8">
        {/* Product Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6 flex-1">
          {
            // Array.isArray(cart)
            cart?.item?.map((item) => {
              const product = products.find((p) => p._id === item.productId)
              // console.log(product)
              if (!product) return null;
              return (
                <>
                  <div
                    className="bg-gradient-to-br from-gray-900 to-blue-700 border border-gray-600 rounded-2xl p-4 hover:scale-105 transform transition duration-300 shadow-xl hover:shadow-yellow-500/20"
                  >
                    {/* Product Image */}
                    <img
                      src={`${API_BASE_URL}/images/product/${product?.thumbnail}`}
                      alt="Product"
                      className="w-full rounded-lg mb-4"
                    />
                    {/* Product Info */}
                    <h1 className="  text-gray-200">{product.name}</h1>
                    <p className="font-bold text-lg mt-2">
                      <span className="text-yellow-400">{product.finalPrice}</span>
                      <span className="text-gray-500 line-through ml-2">{product.orignalPrice}</span>
                    </p>
                    <div className="flex gap-25">
                      <div className="">
                        <p className="text-xs text-green-400 font-semibold mt-1">FREE SHIPPING</p>
                        <p className="text-sm mt-1">
                          <span className="">In Stock</span>
                        </p>
                      </div>
                      <div className="">
                        <button onClick={() => handlerCart({ productId: item.productId, type: 'dec', finalPrice: product.finalPrice, orignalPrice: product.orignalPrice })} className="rounded px-2 bg-gray-400 text-black">
                          -
                        </button>
                        <span >
                          {item.qty}
                        </span>
                        <button onClick={() => handlerCart({ productId: item.productId, type: 'inc', finalPrice: product.finalPrice, orignalPrice: product.orignalPrice })} className="rounded px-2 bg-gray-400 text-black">
                          +
                        </button>
                      </div>
                    </div>

                    {/* Button */}
                    <button className="mt-4 w-full bg-yellow-600 hover:bg-yellow-500 text-black font-bold py-2 rounded-lg transition">
                      Remove from Cart
                    </button>
                    {/* <button>
                        asad
                      </button> */}
                  </div >
                </>
              )
            })
          }


        </div>

        {/* Order Summary */}
        <div className="w-full lg:w-[300px]">
          <div className="bg-white p-6 rounded-lg border border-yellow-500 shadow-xl">
            <h3 className="text-lg font-semibold mb-4 text-black">
              Order Summary
            </h3>
            <div className="space-y-2 text-sm text-black">
              <div className="flex justify-between">
                <span>Sub Total:</span>
                <span className="font-semibold">${cart.orignalTotal}</span>
              </div>
              <div className="flex justify-between">
                <span>Shipping estimate:</span>
                <span>$</span>
              </div>
              <div className="flex justify-between">
                <span>Savings</span>
                <span>${cart.finalTotal - cart.orignalTotal}</span>
              </div>
              <div className="flex justify-between font-bold border-t pt-2 mt-2">
                <span>ORDER TOTAL:</span>
                <span>${cart.finalTotal}</span>
              </div>
            </div>
            <button className="w-full mt-4 bg-yellow-500 hover:bg-yellow-400 text-black py-2 rounded font-semibold transition">
              CHECKOUT
            </button>
          </div>
        </div>
      </div>
    </div >
  );
};

export default Cart;
