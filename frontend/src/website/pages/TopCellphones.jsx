import React, { useContext } from "react";
import { MainContext } from "../../Context";
import { Link } from "react-router-dom";

export default function TopCellphones() {
  const { products, Categories, API_BASE_URL, isDark } =
    useContext(MainContext);

  const wantedNamesInOrder = [
    "Android",
    "5G Support",
    "Iphone",
    "Gaming Smartphones",
    "Xiaomi",
    "Accessories",
  ];
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

  const filteredCategories = wantedNamesInOrder
    .map((name) => Categories.find((cat) => cat?.name === name))
    .filter(Boolean);

  return (
    <div
      className={`py-6 px-4 md:px-12 rounded-2xl shadow-xl border ${
        isDark
          ? "bg-gradient-to-br from-black via-gray-900 to-black text-gray-200 border-gray-800"
          : "bg-white text-gray-900 border-gray-300"
      }`}
    >
      {/* Header */}
      <div className="flex justify-between items-center mb-4">
        <h2
          className={`text-lg md:text-xl font-bold uppercase ${
            isDark ? "text-teal-500" : "text-teal-600"
          }`}
        >
          Top Cellphones & Tablets
        </h2>
        <Link to={"/store"}>
          <button
            className={`cursor-pointer text-sm hover:underline ${
              isDark
                ? "text-gray-400 hover:text-teal-400"
                : "text-gray-600 hover:text-teal-600"
            }`}
          >
            View All
          </button>
        </Link>
      </div>

      {/* Banner */}
      <div
        className={`rounded-lg p-4 flex items-center mb-6 shadow-inner ${
          isDark ? "bg-gray-800" : "bg-gray-100"
        }`}
      >
        <div
          className="flex-1 relative w-full h-40 sm:h-48 md:h-52 rounded overflow-hidden flex items-center"
          style={{
            backgroundImage: "url('/ImagesForProducts/Store/prod18.png.png')",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div
            className={`ml-4 text-left ${
              isDark ? "text-white" : "text-gray-900"
            }`}
          >
            <h3 className="text-xl font-semibold mb-1">
              REDMI NOTE 12 PRO+ 5G
            </h3>
            <p
              className={`text-sm mb-2 ${
                isDark ? "text-gray-300" : "text-gray-600"
              }`}
            >
              Rise to the challenge
            </p>
            <Link to={"/store"}>
              <button className="cursor-pointer bg-teal-500 text-white text-xs px-4 py-2 rounded hover:bg-teal-600">
                SHOP NOW
              </button>
            </Link>
          </div>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 text-xs ml-8 mb-7">
          {filteredCategories.map((category) => (
            <Link to={`/store/${category?.slug}`} key={category?._id}>
              <div
                className={`flex items-center justify-between p-2 rounded transition ${
                  isDark
                    ? "bg-gray-900 hover:bg-gray-800"
                    : "bg-gray-100 hover:bg-gray-200"
                }`}
              >
                <div>
                  <p
                    className={`font-semibold text-sm ${
                      isDark ? "text-gray-100" : "text-gray-900"
                    }`}
                  >
                    {category?.name}
                  </p>
                  <span
                    className={`text-[11px] ${
                      isDark ? "text-gray-400" : "text-gray-600"
                    }`}
                  >
                    {category?.productCount} Items
                  </span>
                </div>
                <img
                  src={`${API_BASE_URL}/images/categories/${category?.Image}`}
                  alt={category?.name}
                  className="w-16 h-16 object-cover rounded"
                />
              </div>
            </Link>
          ))}
        </div>
      </div>

      {/* Products List */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
        {filteredProducts.map((product) => (
          <div
            key={product?._id}
            className={`relative rounded-lg p-3 transition shadow ${
              isDark
                ? "bg-gray-800 hover:bg-gray-700 hover:shadow-teal-500/20"
                : "bg-gray-100 hover:bg-white hover:shadow-md"
            }`}
          >
            <span className="absolute top-2 left-2 bg-teal-500 text-white text-[11px] font-semibold px-2 py-1 rounded">
              ₹{product?.originalPrice - product?.finalPrice}
            </span>
            <Link to={`/productdetailpage/${product._id}`}>
              <img
                src={`${API_BASE_URL}/images/product/${product.thumbnail}`}
                alt={product?.name}
                className="object-contain mb-2 rounded"
              />
            </Link>
            <h4
              className={`text-sm font-semibold mt-1 ${
                isDark ? "text-gray-100" : "text-gray-900"
              }`}
            >
              {product?.name}
            </h4>
            <div className="text-sm flex flex-col gap-1 mt-1">
              <div>
                <span
                  className={`font-bold ${
                    isDark ? "text-teal-400" : "text-teal-600"
                  }`}
                >
                  ₹{product?.finalPrice}
                </span>
                <span
                  className={`line-through ml-2 ${
                    isDark ? "text-gray-500" : "text-gray-400"
                  }`}
                >
                  ₹{product?.originalPrice}
                </span>
              </div>
              <div
                className={`text-[11px] ${
                  isDark ? "text-gray-400" : "text-gray-600"
                }`}
              >
                FREE SHIPPING
              </div>
              <div
                className={`text-[11px] ${
                  isDark ? "text-gray-500" : "text-gray-500"
                }`}
              >
                In stock
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
