import React from 'react';
import { FaSearch, FaShoppingCart } from 'react-icons/fa';
import { IoMdArrowDropdown } from 'react-icons/io';

const Header = () => {
  return (
    <div className="font-sans text-sm border-b">
      {/* Top bar */}
      <div className="flex items-center justify-between px-6 py-2 text-gray-700 bg-white">
        <div className="flex items-center space-x-4">
          <span className="text-xs bg-gray-100 px-2 py-1 rounded">Hotline 24/7</span>
          <strong>(025) 3886 25 16</strong>
        </div>
        <div className="flex items-center space-x-4">
          <a href="#" className="hover:underline">Sell on Swoo</a>
          <a href="#" className="hover:underline">Order Tracki</a>
          <div className="flex items-center space-x-1">
            <span>USD</span>
            <IoMdArrowDropdown />
          </div>
          <div className="flex items-center space-x-1">
            <img src="https://flagcdn.com/us.svg" alt="English" className="w-5 h-4" />
            <IoMdArrowDropdown />
          </div>
        </div>
      </div>

      {/* Middle section */}
      <div className="flex items-center justify-between px-6 py-4 bg-white">
        <div className="flex items-center space-x-3">
          <div className="w-10 h-10 bg-teal-600 rounded-full"></div>
          <div className="font-bold leading-tight">
            <div>SWOO</div>
            <div>TECH MART</div>
          </div>
        </div>

        <nav className="flex space-x-6 font-semibold">
          <div className="flex items-center space-x-1 cursor-pointer">HOMES <IoMdArrowDropdown /></div>
          <div className="flex items-center space-x-1 cursor-pointer">PAGES <IoMdArrowDropdown /></div>
          <div className="flex items-center space-x-1 cursor-pointer">PRODUCTS <IoMdArrowDropdown /></div>
          <div className="cursor-pointer">CONTACT</div>
        </nav>

        <div className="flex items-center space-x-4">
          <div className="text-right">
            <div className="text-xs text-gray-500">WELCOME</div>
            <div className="font-semibold">LOG IN / REGISTER</div>
          </div>
          <div className="relative">
            <FaShoppingCart className="text-xl" />
            <span className="absolute -top-2 -right-3 bg-green-500 text-white text-xs w-5 h-5 flex items-center justify-center rounded-full">$</span>
          </div>
          <div className="font-bold">$1,689.00</div>
        </div>
      </div>

      {/* Search + Info Bar */}
      <div className="bg-teal-600 text-white px-6 py-3 flex items-center justify-between">
        <div className="flex bg-white rounded-full overflow-hidden">
          <button className="flex items-center px-4 text-black border-r">
            All Categories <IoMdArrowDropdown className="ml-1" />
          </button>
          <input
            type="text"
            placeholder="Search anything..."
            className="px-4 py-2 text-black outline-none"
          />
          <button className="px-4 bg-teal-600 text-white">
            <FaSearch />
          </button>
        </div>

        <div className="flex items-center space-x-10 text-sm font-medium">
          <span>FREE SHIPPING OVER $199</span>
          <span>30 DAYS MONEY BACK</span>
          <span>100% SECURE PAYMENT</span>
        </div>
      </div>
    </div>
  );
};

export default Header;
