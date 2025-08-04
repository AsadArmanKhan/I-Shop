import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { MainContext } from "../../Context";

export default function CategorySidebar() {
  const { Categories } = useContext(MainContext);
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="w-full sm:w-64 md:w-72 lg:w-60 bg-[#121c2b] p-4 rounded-xl shadow-lg mb-4 sm:mb-0 flex-shrink-0">
      {/* Header + Toggle button */}
      <div className="flex items-center justify-between mb-4">
        <h3 className="font-semibold text-yellow-400 tracking-wide text-base sm:text-lg md:text-xl">
          CATEGORIES
        </h3>
        {/* Hamburger shown only on mobile */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="sm:hidden text-yellow-400 focus:outline-none text-xl"
        >
          ☰
        </button>
      </div>

      {/* "All Categories" button: always visible on desktop, toggle on mobile */}
      <div className={`${isOpen ? "block" : "hidden"} sm:block`}>
        <button
          className="w-full text-xs sm:text-sm font-semibold text-left mb-4 px-3 py-2 bg-blue-50 rounded shadow-md text-black 
                     hover:bg-gradient-to-r from-white to-yellow-700 hover:text-black transition transform hover:scale-105"
        >
          <Link to={`/store`}>All Categories</Link>
        </button>

        {/* Categories list */}
        <ul className="space-y-2 text-xs sm:text-sm">
          {Categories.map((category) => (
            <li
              key={category._id}
              className="flex justify-between items-center cursor-pointer py-2 px-3 bg-blue-50 text-black rounded shadow-md 
                         transition transform hover:scale-105 hover:bg-gradient-to-r from-white to-yellow-700 hover:text-black"
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
    </div>
  );
}
