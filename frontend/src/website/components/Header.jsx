// import { defineConfig } from "vite";
// import tailwindcss from "@tailwindcss/vite";
// import react from "@vitejs/plugin-react";
import React from 'react';
import { FaSearch, FaShoppingCart } from 'react-icons/fa';
import { IoMdArrowDropdown } from 'react-icons/io';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';



const Header = () => {
  return (
    <motion.div
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.7, ease: 'easeOut' }}
      className="mx-auto font-sans text-sm border-b shadow-md"
    >
      {/* Top bar */}
      <div className="flex items-center justify-between px-6 py-2 text-gray-700 bg-white">
        <div className="flex items-center space-x-4">
          <span className="text-xs bg-gray-100 px-2 py-1 rounded">Hotline 24/7</span>
          <strong>(025) 3886 25 16</strong>
        </div>
        <div className="flex items-center space-x-4">
          <a href="#" className="hover:underline transition duration-200">Sell on Swoo</a>
          <a href="#" className="hover:underline transition duration-200">Order Track</a>
          <div className="flex items-center space-x-1 cursor-pointer hover:text-teal-600">
            <span>USD</span>
            <IoMdArrowDropdown />
          </div>
          <div className="flex items-center space-x-1 cursor-pointer hover:text-teal-600">
            <img src="https://flagcdn.com/us.svg" alt="English" className="w-5 h-4" />
            <IoMdArrowDropdown />
          </div>
        </div>
      </div>

      {/* Middle section */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.6 }}
        className="flex items-center justify-between px-6 py-4 bg-white"
      >
        <div className="flex items-center space-x-3">
          <div className="w-10 h-10 bg-teal-600 rounded-full shadow-md"></div>
          <div className="font-bold leading-tight">
            <div>SWOO</div>
            <div>TECH MART</div>
          </div>
        </div>

        <nav className="flex space-x-6 font-semibold text-gray-700">
          <Link to={"/ghar"}>
            <motion.div whileHover={{ scale: 1.1 }} className="cursor-pointer">HOME</motion.div>
          </Link>
          <Link to={"/"}>
            <motion.div whileHover={{ scale: 1.1 }} className="cursor-pointer">PRODUCTS</motion.div>
          </Link>
          <motion.div whileHover={{ scale: 1.1 }} className="cursor-pointer">CONTACT</motion.div>
          <Link to={"/profile"}>
            <motion.div whileHover={{ scale: 1.1 }} className="cursor-pointer">PROFILE</motion.div>
          </Link>
        </nav>

        <div className="flex items-center space-x-4">
          <div className="flex text-right space-x-1">
            <Link to={"/login"}>
              <div className="font-semibold text-black hover:text-teal-600 transition">LOG IN |</div>
            </Link>
            <Link to={"/register"}>
              <div className="font-semibold text-black hover:text-teal-600 transition">| REGISTER |</div>
            </Link>
          </div>

          <motion.div
            whileHover={{ scale: 1.1 }}
            className="relative cursor-pointer"
          >
            <FaShoppingCart className="text-xl" />
            <span className="absolute -top-2 -right-3 bg-green-500 text-white text-xs w-5 h-5 flex items-center justify-center rounded-full">$</span>
          </motion.div>

          <div className="font-bold text-gray-700">$1,689.00</div>
        </div>
      </motion.div>

      {/* Search + Info Bar */}
      <motion.div
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.4, duration: 0.6 }}
        className="bg-teal-600 text-white px-6 py-3 flex items-center justify-between"
      >
        <div className="flex bg-white rounded-full overflow-hidden shadow-md">
          <button className="flex items-center px-4 text-black border-r">
            All Categories <IoMdArrowDropdown className="ml-1" />
          </button>
          <input
            type="text"
            placeholder="Search anything..."
            className="px-4 py-2 text-black outline-none w-64"
          />
          <button className="px-4 bg-teal-600 text-white hover:bg-teal-700 transition">
            <FaSearch />
          </button>
        </div>

        <div className="hidden md:flex items-center space-x-10 text-sm font-medium">
          <span className="hover:text-yellow-300 transition">FREE SHIPPING OVER $199</span>
          <span className="hover:text-yellow-300 transition">30 DAYS MONEY BACK</span>
          <span className="hover:text-yellow-300 transition">100% SECURE PAYMENT</span>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default Header;
