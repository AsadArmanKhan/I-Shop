import React, { useContext } from "react";
import { MainContext } from "../../Context";
import { Link } from "react-router-dom";

export default function RecentlyViewed() {
  const { products, API_BASE_URL } = useContext(MainContext);

  const wantedFilteredProducts = [
    "6889c5bf16826e643249270d",
    "6889c63d16826e6432492882",
    "6879f8cad6950506c96fdf3f",
    "6879f808d6950506c96fdf1a",
  ];

  const filterRecentlyProducts = wantedFilteredProducts
    .map((id) => products.find((p) => p._id === id))
    .filter(Boolean);

  return (
    <>
      <div className="bg-white rounded-lg p-4 space-y-4">
        <div className="flex justify-between items-center">
          <h2 className="font-semibold">YOUR RECENTLY VIEWED</h2>
          <Link to={"/store"} className="text-xs font-bold text-black">
            View All
          </Link>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {filterRecentlyProducts.map((p) => (
            <Link to={`/productdetailpage/${p._id}`} key={p._id}>
              <div className="relative bg-white rounded-md overflow-hidden shadow p-2 space-y-1 transform transition duration-300 hover:scale-105 hover:shadow-lg">
                <img
                  src={`${API_BASE_URL}/images/product/${p.thumbnail}`}
                  alt={p.name}
                  className="rounded-md w-full transform transition duration-300 hover:scale-105"
                />
                <span className="absolute top-1 left-1 bg-green-500 text-white text-[10px] px-1 rounded">
                  SAVE ₹{p?.originalPrice - p?.finalPrice}
                </span>
                {/* Top Right count badge (optional) */}
                <span className="absolute top-1 right-1 bg-gray-200 text-[10px] px-2 rounded-full">
                  {/* 152 */}
                </span>
                {/* Product name */}
                <p className="text-xs mt-1 font-medium">{p.name}</p>
                {/* Price */}
                <p className="font-semibold text-sm">
                  ₹{p.finalPrice}{" "}
                  <span className="line-through text-gray-400 text-xs">
                    ₹{p.originalPrice}
                  </span>
                </p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </>
  );
}
