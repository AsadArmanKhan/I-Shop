import React, { useContext } from "react";
import { MainContext } from "../../Context";
import { Link } from "react-router-dom";

export default function BestSeller() {
  const { products, API_BASE_URL } = useContext(MainContext);

  const bestSellerIds = [
    "687a29ec77a99f5026e1dd56",
    "6879f244d6950506c96fdcb6",
    "687a2a8077a99f5026e1dd81",
    "687a2ab077a99f5026e1dd83",
    "687a2ad977a99f5026e1dd85",
  ];

  const filteredProducts = bestSellerIds
    .map((id) => products.find((p) => p._id === id))
    .filter(Boolean);

  return (
    <div className="mt-12 mb-12 bg-gradient-to-br from-black via-gray-900 to-black p-6 rounded-2xl shadow-xl border border-gray-800 text-gray-200">
      {/* Header */}
      <div className="flex justify-between items-center mb-6">
        <div className="flex gap-6">
          <h2 className="text-lg font-bold text-teal-500">BEST SELLER</h2>
          <span className="text-gray-400 cursor-pointer hover:text-teal-400">
            NEW IN
          </span>
          <span className="text-gray-400 cursor-pointer hover:text-teal-400">
            POPULAR
          </span>
        </div>
        <a href="#" className="text-sm text-gray-400 hover:text-teal-400">
          View All
        </a>
      </div>

      {/* Products Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
        {filteredProducts.map((product) => (
          <div
            key={product._id}
            className="relative flex flex-col items-center text-center p-4 rounded-lg bg-gray-800 hover:bg-gray-700 transition hover:-translate-y-1 shadow hover:shadow-teal-500/20"
          >
            <Link to={`/productdetailpage/${product._id}`}>
              <img
                src={`${API_BASE_URL}/images/product/${product.thumbnail}`}
                alt={product.name}
                className="h-35 object-contain mb-2 transform transition-transform duration-300 hover:scale-105"
              />
            </Link>
            <p className="text-xs text-gray-500">(152)</p>
            <h3 className="font-semibold mt-1 text-gray-100">{product.name}</h3>
            <div className="mt-1">
              <span className="text-teal-400 font-bold text-lg">
                ₹{product.finalPrice}
              </span>
              <span className="line-through text-gray-500 ml-2">
                ₹{product.originalPrice}
              </span>
            </div>
            <div className="flex gap-2 justify-center mt-2">
              <span className="bg-teal-100 text-teal-700 text-xs font-semibold px-2 py-1 rounded-full">
                FREE SHIPPING
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
