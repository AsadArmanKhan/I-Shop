import React, { useContext } from "react";
import { MainContext } from "../../Context";
import { Link } from "react-router-dom";

export default function Related() {
  const { products, Categories, API_BASE_URL } = useContext(MainContext);

  const WantedProducts = [
    "687769c495621bf9481b64e7",
    "68776aba95621bf9481b64f7",
    "6879f244d6950506c96fdcb6",
    "6879f113d6950506c96fdc65",
    "6879f1b2d6950506c96fdc97",
  ];

  const filteredProducts = WantedProducts.map((id) =>
    products.find((p) => p._id === id)
  ).filter(Boolean);
  return (
    <>
      <div className="grid grid-cols-1 sm:grid-cols-2 rounded-2xl bg-white md:grid-cols-3 lg:grid-cols-5 gap-6">
        {/* card 1 */}
        {filteredProducts.map((product) => (
          <div className="relative rounded-lg p-3 shadow-sm hover:shadow-md transition">
            <span className="absolute top-2 left-2 bg-teal-500 text-white text-[11px] font-semibold px-2 py-1 rounded">
              ₹{product?.originalPrice - product?.finalPrice}
            </span>
            <Link to={`/productdetailpage/${product._id}`}>
              <img
                src={`${API_BASE_URL}/images/product/${product.thumbnail}`}
                alt=""
              />
            </Link>
            {/* <p className="text-center text-xs text-gray-500">(152)</p> */}
            <h4 className="text-sm font-semibold mt-1">{product?.name}</h4>
            <div className="text-sm flex flex-col gap-1 mt-1">
              <div>
                <span className="text-green-600 font-bold">
                  ₹{product?.finalPrice}
                </span>
                <span className="text-gray-400 line-through ml-2">
                  ₹{product?.originalPrice}
                </span>
              </div>
              <div className="text-[11px] text-gray-500">FREE SHIPPING</div>
              <div className="text-[11px] text-gray-600">In stock</div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
