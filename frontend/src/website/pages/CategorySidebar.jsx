import React, { useContext, useState, useEffect } from "react";
import { Link, useParams, useSearchParams } from "react-router-dom";
import { MainContext } from "../../Context";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
//  import { addItem } from "../../redux/cartSlice";

export default function CategorySidebar() {
  const user = useSelector((state) => state.user?.data);
  const dispacher = useDispatch();
  const { categorySlug } = useParams();
  const [limit, setLimit] = useState(0);
  const [colorSlug, setColorSlug] = useState("");
  const [minPrice, setMinPrice] = useState("");
  const [maxPrice, setMaxPrice] = useState("");
  const [searchParams, setSearchParams] = useSearchParams();
  const {
    getProduct,
    products,
    getCategory,
    Categories,
    getColors,
    colors,
    API_BASE_URL,
    notify,
    isDark,
  } = useContext(MainContext);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    getCategory();
    getColors();
    if (searchParams.get("limit")) setLimit(searchParams.get("limit"));
    if (searchParams.get("colorSlug"))
      setColorSlug(searchParams.get("colorSlug"));
  }, []);

  useEffect(() => {
    const query = {};
    if (limit) query.limit = limit;
    if (colorSlug) query.colorSlug = colorSlug;
    if (minPrice) query.minPrice = minPrice;
    if (maxPrice) query.maxPrice = maxPrice;

    setSearchParams(query);
    getProduct(null, limit, categorySlug, colorSlug, minPrice, maxPrice);
  }, [limit, categorySlug, colorSlug, minPrice, maxPrice]);

  const handleFilterByPrice = () => {
    const min = parseFloat(minPrice) || 0;
    const max = parseFloat(maxPrice) || 0;

    if (min > max && max !== 0) {
      notify("Min price should be less than max price", false);
      return;
    }

    getProduct(null, limit, categorySlug, colorSlug, minPrice, maxPrice);
  };

  return (
    <div
      className={`w-full sm:w-64 md:w-72 lg:w-60 p-4 rounded-xl shadow-lg mb-4 sm:mb-0 flex-shrink-0 transition-all duration-300 ${
        isDark ? "bg-[#121c2b] text-white" : "bg-white text-gray-900"
      }`}
    >
      {/* Header + Toggle */}
      <div className="flex items-center justify-between mb-4">
        <h3
          className={`font-semibold tracking-wide text-base sm:text-lg md:text-xl ${
            isDark ? "text-yellow-400" : "text-teal-600"
          }`}
        >
          CATEGORIES
        </h3>
        <button
          onClick={() => setIsOpen(!isOpen)}
          className={`sm:hidden text-xl ${
            isDark ? "text-yellow-400" : "text-teal-600"
          }`}
        >
          ☰
        </button>
      </div>

      {/* Sidebar Body */}
      <div className={`${isOpen ? "block" : "hidden"} sm:block space-y-6`}>
        {/* Categories */}
        <div>
          <button
            className={`w-full text-xs sm:text-sm font-semibold text-left mb-4 px-3 py-2 rounded shadow-md transition transform hover:scale-105 ${
              isDark
                ? "bg-[#1f2a3c] text-white hover:bg-yellow-700"
                : "bg-blue-50 text-black hover:bg-gradient-to-r from-white to-yellow-700"
            }`}
          >
            <Link to={`/store`}>All Categories</Link>
          </button>

          <ul className="space-y-2 text-xs sm:text-sm">
            {Categories.map((category) => (
              <li
                key={category._id}
                className={`flex justify-between items-center cursor-pointer py-2 px-3 rounded shadow-md transition transform hover:scale-105 ${
                  isDark
                    ? "bg-[#1f2a3c] text-white hover:bg-yellow-700"
                    : "bg-blue-50 text-black hover:bg-gradient-to-r from-white to-yellow-700"
                }`}
              >
                <Link to={`/store/${category.slug}`} className="truncate">
                  {category.name}
                </Link>
                <span className="ml-2 text-xs font-medium">
                  ({category.productCount})
                </span>
              </li>
            ))}
          </ul>
        </div>

        {/* Color Filter */}
        <div className="my-10 border-t border-gray-300 pt-4">
          <h4
            className={`font-semibold mb-2 tracking-wide ${
              isDark ? "text-yellow-400" : "text-teal-600"
            }`}
          >
            BY COLOR
          </h4>
          <div className="flex flex-wrap gap-2">
            {colors.map((color, index) => (
              <li
                onClick={() => setColorSlug(color.slug)}
                key={index}
                className="w-6 h-6 rounded-full border-2 border-gray-600 list-none hover:scale-110 transition"
                style={{ backgroundColor: color.hexcode }}
              ></li>
            ))}
          </div>
        </div>

        {/* Price Filter */}
        <div className="my-6 border-t border-gray-300 pt-4">
          <h4
            className={`font-semibold mb-2 tracking-wide ${
              isDark ? "text-yellow-400" : "text-teal-600"
            }`}
          >
            BY PRICE
          </h4>

          {/* Range */}
          <div className="mb-4">
            <input
              type="range"
              min="0"
              max="100000"
              step="1000"
              value={minPrice}
              onChange={(e) => setMinPrice(Number(e.target.value))}
              className="w-full accent-yellow-400"
            />
          </div>

          {/* Min/Max Inputs */}
          <div className="flex items-center gap-2 text-sm">
            <input
              type="number"
              value={minPrice}
              onChange={(e) => setMinPrice(Number(e.target.value))}
              className={`w-1/2 px-2 py-1 rounded border text-sm ${
                isDark
                  ? "border-gray-600 bg-[#1f2a3c] text-white"
                  : "border-gray-300 bg-white text-black"
              }`}
              placeholder="Min"
            />
            <span className={`${isDark ? "text-white" : "text-gray-700"}`}>
              —
            </span>
            <input
              type="number"
              value={maxPrice}
              onChange={(e) => setMaxPrice(Number(e.target.value))}
              className={`w-1/2 px-2 py-1 rounded border text-sm ${
                isDark
                  ? "border-gray-600 bg-[#1f2a3c] text-white"
                  : "border-gray-300 bg-white text-black"
              }`}
              placeholder="Max"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
