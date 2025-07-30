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
  console.log("products:", products);

  return (
    <div className="mt-12 mb-12 bg-white p-6 rounded-2xl shadow-md">
      {/* Header */}
      <div className="flex justify-between items-center mb-6">
        <div className="flex gap-6">
          <h2 className="text-lg font-bold">BEST SELLER</h2>
          <span className="text-gray-500 cursor-pointer hover:text-black">
            NEW IN
          </span>
          <span className="text-gray-500 cursor-pointer hover:text-black">
            POPULAR
          </span>
        </div>
        <a href="#" className="text-sm text-gray-600 hover:underline">
          View All
        </a>
      </div>

      {/* Products Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
        {filteredProducts.map((product) => (
          <div
            key={product._id}
            className="relative flex flex-col items-center text-center p-4 rounded-lg shadow-sm hover:shadow-lg transition-transform duration-300 hover:-translate-y-1"
          >
            <Link to={`/productdetailpage/${product._id}`}>
              <img
                src={`${API_BASE_URL}/images/product/${product.thumbnail}`}
                alt={product.name}
                className="h-35 object-contain mb-2 transform transition-transform duration-300 hover:scale-105"
              />
            </Link>
            <p className="text-xs text-gray-400">(152)</p>
            <h3 className="font-semibold mt-1">{product.name}</h3>
            <div className="mt-1">
              <span className="text-teal-500 font-bold text-lg">
                ₹{product.finalPrice}
              </span>
              <span className="line-through text-gray-400 ml-2">
                ₹{product.originalPrice}
              </span>
            </div>
            <div className="flex gap-2 justify-center mt-2">
              <span className="bg-teal-50 text-teal-500 text-xs font-semibold px-2 py-1 rounded-full">
                FREE SHIPPING
              </span>
            </div>
            {/* <button className="mt-3 bg-teal-500 text-white text-xs font-semibold px-4 py-2 rounded-full hover:bg-teal-600 transition">
              Add to Cart
            </button> */}
          </div>
        ))}
      </div>
    </div>
  );
}
