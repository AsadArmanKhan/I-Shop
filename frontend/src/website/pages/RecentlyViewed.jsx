import React, { useContext } from "react";
import { MainContext } from "../../Context";
import { Link } from "react-router-dom";

export default function RecentlyViewed() {
  const { products, API_BASE_URL, isDark } = useContext(MainContext);

  const wantedFilteredProducts = [
    "6889c5bf16826e643249270d",
    "6889c63d16826e6432492882",
    "6879f8cad6950506c96fdf3f",
    "6879f808d6950506c96fdf1a",
  ];

  const filterRecentlyProducts = wantedFilteredProducts
    .map((id) => products.find((p) => p._id === id))
    .filter(Boolean);

  // Dynamic theme classes
  const containerBg = isDark
    ? "bg-[#0e1623] text-gray-100"
    : "bg-[#f3f4f6] text-gray-900";
  const cardBg = isDark ? "bg-[#121c2b]" : "bg-white";
  const textMuted = isDark ? "text-gray-100" : "text-gray-800";
  const strikeText = isDark ? "text-gray-400" : "text-gray-500";

  return (
    <div className={`${containerBg} rounded-lg p-4 space-y-4`}>
      <div className="flex justify-between items-center">
        <h2 className="font-semibold text-teal-400">YOUR RECENTLY VIEWED</h2>
        <Link
          to={"/store"}
          className="text-xs font-bold text-teal-400 hover:underline"
        >
          View All
        </Link>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {filterRecentlyProducts.map((p) => (
          <Link to={`/productdetailpage/${p._id}`} key={p._id}>
            <div
              className={`${cardBg} relative rounded-md overflow-hidden shadow p-2 space-y-1 transform transition duration-300 hover:scale-105 hover:shadow-lg`}
            >
              <img
                src={`${API_BASE_URL}/images/product/${p.thumbnail}`}
                alt={p.name}
                className="rounded-md w-full transform transition duration-300 hover:scale-105"
              />
              <span className="absolute top-1 left-1 bg-green-500 text-white text-[10px] px-1 rounded">
                SAVE ₹{p?.originalPrice - p?.finalPrice}
              </span>
              <p className={`text-xs mt-1 font-medium ${textMuted}`}>
                {p.name}
              </p>
              <p className={`font-semibold text-sm ${textMuted}`}>
                ₹{p.finalPrice}{" "}
                <span className={`line-through text-xs ${strikeText}`}>
                  ₹{p.originalPrice}
                </span>
              </p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
