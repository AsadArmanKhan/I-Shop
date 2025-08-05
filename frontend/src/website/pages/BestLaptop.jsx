import React, { useContext } from "react";
import { MainContext } from "../../Context";
import { Link } from "react-router-dom";

export default function BestLaptop() {
  const { products, Categories, isDark, toggleTheme, API_BASE_URL } =
    useContext(MainContext);

  const wantedNames = [
    "Macbook",
    "Gaming PC",
    "Laptop Office",
    "Laptop 15’’",
    "M1 2023",
    "Secondhand",
  ];
  const wantedProducts = [
    "68807378cbae78b86e2a72d7",
    "68807449cbae78b86e2a72db",
    "68808f5387a5526be8904072",
    "68808fab87a5526be89040b0",
    "688074cacbae78b86e2a72df",
  ];

  const filteredProducts = wantedProducts
    .map((id) => products.find((p) => p._id === id))
    .filter(Boolean);

  const filteredCategories = Categories.filter((cat) =>
    wantedNames.includes(cat?.name)
  );

  return (
    <div
      className={`py-6 px-4 md:px-12 rounded-2xl shadow-xl border transition-colors duration-300
        ${
          isDark
            ? "bg-gradient-to-br from-black via-gray-900 to-black text-gray-200 border-gray-800"
            : "bg-white text-gray-800 border-gray-200"
        }`}
    >
      {/* Header */}
      <div className="flex justify-between items-center mb-4">
        <h2
          className={`text-lg md:text-xl font-bold uppercase ${
            isDark ? "text-teal-500" : "text-teal-600"
          }`}
        >
          Best Laptops & Computers
        </h2>

        {/* Toggle Theme Button */}
        {/* <button
          onClick={toggleTheme}
          className={`text-sm px-3 py-1 rounded font-medium transition
            ${
              isDark
                ? "bg-gray-700 text-white hover:bg-gray-600"
                : "bg-gray-200 text-gray-800 hover:bg-gray-300"
            }`}
        >
          Toggle Theme
        </button> */}

        <Link to={"/store"}>
          <button className="cursor-pointer text-sm text-gray-400 hover:text-teal-400">
            View All
          </button>
        </Link>
      </div>

      {/* Banner */}
      <div
        className={`rounded-lg p-4 flex items-center mb-6 shadow-inner
        ${isDark ? "bg-gray-800" : "bg-gray-100"}`}
      >
        <div
          className="flex-1 relative w-full h-40 sm:h-48 md:h-52 rounded overflow-hidden flex items-center"
          style={{
            backgroundImage: "url('/ImagesForProducts/Store/prod19.png.png')",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div className="ml-4 text-left">
            <h1 className="text-2xl font-bold mb-1">Mobok 2</h1>
            <h1 className="text-2xl font-bold mb-1">Supercharged</h1>
            <p className="text-xl font-light">By M2</p>
          </div>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 text-xs ml-8 mb-7">
          {filteredCategories.map((category) => (
            <Link
              to={`/store/${category?.slug}`}
              key={category?._id}
              className={`flex items-center justify-between p-2 rounded transition
                ${
                  isDark
                    ? "bg-gray-900 hover:bg-gray-800"
                    : "bg-gray-200 hover:bg-gray-300"
                }`}
            >
              <div>
                <p className="font-semibold text-sm">{category.name}</p>
                <span className="text-[11px] text-gray-500">
                  {category.productCount} items
                </span>
              </div>
              <img
                src={`${API_BASE_URL}/images/Categories/${category?.Image}`}
                alt={category?.name}
                className="w-12 h-12 object-contain rounded"
              />
            </Link>
          ))}
        </div>
      </div>

      {/* Products List */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
        {filteredProducts.map((product) => (
          <Link to={`/productdetailpage/${product._id}`} key={product?._id}>
            <div
              className={`relative rounded-lg p-3 transition shadow
              ${
                isDark
                  ? "bg-gray-800 hover:bg-gray-700 hover:shadow-teal-500/20"
                  : "bg-gray-100 hover:bg-white hover:shadow-teal-500/40"
              }`}
            >
              <span className="absolute top-2 left-2 bg-teal-500 text-white text-[11px] font-semibold px-2 py-1 rounded">
                SAVE ₹{product?.originalPrice - product?.finalPrice}
              </span>
              <img
                src={`${API_BASE_URL}/images/product/${product.thumbnail}`}
                alt={product?.name}
                className="w-full h-40 object-contain rounded mb-2"
              />
              <h4 className="text-sm font-semibold mt-1">{product?.name}</h4>
              <div className="text-sm flex flex-col gap-1 mt-1">
                <div>
                  <span className="text-teal-500 font-bold">
                    ₹{product?.finalPrice}
                  </span>
                  <span className="text-gray-400 line-through ml-2">
                    ₹{product?.originalPrice}
                  </span>
                </div>
                <div className="text-[11px] text-gray-400">FREE SHIPPING</div>
                <div className="text-[11px] text-gray-500">In stock</div>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
