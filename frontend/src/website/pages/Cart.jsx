import React, { useEffect, useContext } from "react";
import { useDispatch, useSelector } from "react-redux";
import { MainContext } from "../../Context";
import { qtyHandler, removeItem } from "../../redux/slice/cartSlice";
import { useNavigate, Link } from "react-router-dom";
import axios from "axios";

const Cart = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { getProduct, products, API_BASE_URL, isDark } =
    useContext(MainContext);
  const cart = useSelector((state) => state.cart);
  const user = useSelector((state) => state.user);

  const handlerCart = (payload) => {
    dispatch(qtyHandler(payload));
  };

  const checkOutHandler = () => {
    if (user.data && user.userToken) {
      navigate("/checkout");
    } else {
      navigate("/login?ref=checkout");
    }
  };

  useEffect(() => {
    getProduct();
  }, []);

  const formatCurrencyINR = (amount) => {
    return new Intl.NumberFormat("en-IN", {
      style: "currency",
      currency: "INR",
      maximumFractionDigits: 2,
    }).format(amount);
  };

  return (
    <div
      className={`mt-27 min-h-screen p-6 transition-all duration-300 ${
        isDark ? "bg-[#1A2233] text-white" : "bg-white text-black"
      }`}
    >
      <h1 className="text-3xl font-bold mb-6">Your Cart</h1>

      {cart?.item?.length === 0 ? (
        <div
          className={`p-10 rounded-2xl shadow-xl text-center mx-auto max-w-xl animate-fade-in-up transition-all duration-300 ${
            isDark ? "bg-[#1F2A3C] text-white" : "bg-white text-black"
          }`}
        >
          <div
            className={`w-32 h-32 mx-auto mb-6 flex items-center justify-center rounded-full ${
              isDark ? "bg-[#2B3A4B]" : "bg-gray-100"
            } animate-bounce`}
          >
            <img
              src="https://cdn-icons-png.flaticon.com/512/2038/2038854.png"
              alt="Empty Cart"
              className="w-30 h-30 opacity-80"
            />
          </div>

          <h2 className="text-3xl font-bold mb-4">Your Cart is Empty</h2>
          <p className="text-black text-lg mb-6 dark:text-gray-300">
            Looks like you haven’t added anything to your cart yet.
          </p>
          <Link to="/">
            <button className="bg-gradient-to-r from-indigo-600 via-slate-700 to-indigo-700 hover:scale-105 transition-all duration-300 text-white px-6 py-3 rounded-xl font-semibold shadow-lg">
              Continue Shopping
            </button>
          </Link>
        </div>
      ) : (
        <div className="flex flex-col lg:flex-row gap-6">
          {/* Products */}
          <div className="flex-1 space-y-6">
            {cart?.item?.map((item, index) => {
              const product = products.find((p) => p._id === item.productId);
              if (!product) return null;

              return (
                <div
                  key={index}
                  className={`border rounded-xl p-4 flex gap-4 shadow-md transition-all duration-300 ${
                    isDark
                      ? "bg-[#1F2A3C] border-gray-700 text-white"
                      : "bg-white border-gray-200 text-black"
                  }`}
                >
                  <img
                    src={`${API_BASE_URL}/images/product/${product.thumbnail}`}
                    alt={product.name}
                    className="w-32 h-32 object-cover rounded-md"
                  />

                  <div className="flex-1">
                    <div className="flex justify-between items-start">
                      <h2 className="text-lg font-semibold">{product.name}</h2>

                      <div className="bg-green-100 text-green-700 px-2 py-1 text-xs rounded">
                        {formatCurrencyINR(
                          product.originalPrice - product.finalPrice
                        )}
                      </div>
                    </div>

                    <p className="text-xl font-bold text-red-500 mt-2">
                      {formatCurrencyINR(product.finalPrice)}
                    </p>
                    {product.finalPrice < product.originalPrice && (
                      <p className="text-sm text-gray-400 line-through">
                        {formatCurrencyINR(product.originalPrice)}
                      </p>
                    )}

                    <div className="flex items-center mt-2 space-x-2">
                      <button
                        onClick={() =>
                          handlerCart({
                            productId: item.productId,
                            type: "dec",
                            finalPrice: product.finalPrice,
                            originalPrice: product.originalPrice,
                          })
                        }
                        className="px-2 py-1 bg-gray-300 rounded"
                      >
                        -
                      </button>
                      <span>{item.qty}</span>
                      <button
                        onClick={() =>
                          handlerCart({
                            productId: item.productId,
                            type: "inc",
                            finalPrice: product.finalPrice,
                            originalPrice: product.originalPrice,
                          })
                        }
                        className="px-2 py-1 bg-gray-300 rounded"
                      >
                        +
                      </button>
                    </div>

                    <div className="mt-2 flex flex-wrap gap-2 text-sm">
                      <span className="bg-green-100 text-green-700 px-2 py-0.5 rounded">
                        FREE SHIPPING
                      </span>
                      <span className="text-green-600">In stock</span>
                    </div>

                    <button
                      onClick={() => dispatch(removeItem(item.productId))}
                      className="text-red-500 hover:text-red-700 font-semibold"
                    >
                      Remove
                    </button>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Order Summary */}
          <div
            className={`w-full lg:w-80 p-6 rounded-lg shadow-lg border transition-all duration-300 ${
              isDark
                ? "bg-[#1F2A3C] border-[#2AE89E] text-white"
                : "bg-white border-green-400 text-black"
            }`}
          >
            <h3 className="text-lg font-bold mb-4">Order Summary</h3>
            <div className="space-y-2 text-sm">
              <div className="flex justify-between">
                <span>Sub Total:</span>
                <span className="font-semibold">
                  {formatCurrencyINR(cart.originalTotal)}
                </span>
              </div>

              <div className="flex justify-between">
                <span>Tax estimate:</span>
                <span>
                  {formatCurrencyINR(cart.originalTotal - cart.finalTotal)}
                </span>
              </div>

              <div className="flex justify-between font-bold pt-2 border-t">
                <span>ORDER TOTAL:</span>
                <span>{formatCurrencyINR(cart.finalTotal)}</span>
              </div>
            </div>

            <button
              onClick={checkOutHandler}
              className="mt-4 w-full bg-green-500 hover:bg-green-400 text-white py-2 rounded-md font-semibold"
            >
              CHECKOUT
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;
