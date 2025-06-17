import React, { useEffect, useState } from 'react';
import { FaSearch, FaShoppingCart, FaBars, FaTimes } from 'react-icons/fa';
import { IoMdArrowDropdown } from 'react-icons/io';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { emtyCart, lsToCart } from '../../redux/slice/cartSlice';
import { userLogout } from '../../redux/slice/userSlice';

const Header = () => {
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart);
  const user = useSelector((state) => state.user.data);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    dispatch(lsToCart());
  }, []);

  const logoutHandler = () => {
    dispatch(userLogout());
    dispatch(emtyCart());
  };

  return (
    <header className="w-full shadow-md">
      {/* Top Bar */}
      <div className="bg-gray-100 text-sm px-4 md:px-6 py-2 flex justify-between items-center">
        <div className="text-gray-700 flex items-center space-x-2 text-xs md:text-sm">
          <span>Hotline 24/7:</span>
          <span className="font-semibold text-black">(025) 3886 25 16</span>
        </div>
        <div className="hidden sm:flex items-center space-x-4 text-gray-700">
          <span className="hover:underline cursor-pointer">Sell on Swoo</span>
          <span className="hover:underline cursor-pointer">Order Tracking</span>
          <div className="flex items-center cursor-pointer">
            USD <IoMdArrowDropdown />
          </div>
          <div className="flex items-center cursor-pointer">
            <img src="https://flagcdn.com/us.svg" alt="US" className="w-4 h-4 mr-1" />
            Eng <IoMdArrowDropdown />
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <div className="bg-white px-4 md:px-6 py-4 flex justify-between items-center">
        {/* Logo */}
        <div className="flex items-center space-x-3">
          <div className="w-10 h-10 bg-teal-600 rounded-full"></div>
          <div className="font-bold leading-tight">
            <div>SWOO</div>
            <div>TECH MART</div>
          </div>
        </div>

        {/* Desktop Nav */}
        <nav className="hidden md:flex space-x-6 font-semibold text-gray-800">
          <Link to="/ghar" className="hover:text-teal-600">HOME</Link>
          <Link to="/" className="hover:text-teal-600">PRODUCTS</Link>
          <Link to="/contact" className="hover:text-teal-600">CONTACT</Link>
          <Link to="/store" className="hover:text-teal-600">STORE</Link>
          <Link to="/profile" className="hover:text-teal-600">PROFILE</Link>
        </nav>



        {/* User & Cart */}
        <div className="flex items-center space-x-4">
          {/* Login/Register */}
          <div className="text-right text-xs md:text-sm">
            <div className="text-gray-500">WELCOME</div>
            {user ? (
              <button onClick={logoutHandler} className="font-semibold text-black hover:text-teal-600">
                LOG OUT
              </button>
            ) : (
              <Link to="/login" className="font-semibold text-black hover:text-teal-600">
                LOG IN / REGISTER
              </Link>
            )}
          </div>

          {/* Cart */}
          <Link to="/cart" className="relative flex items-center space-x-1">
            <FaShoppingCart className="text-xl" />
            <span className="absolute -top-2 -right-3 bg-green-500 text-white text-xs w-5 h-5 flex items-center justify-center rounded-full">
              {cart.items.length}
            </span>
          </Link>


          {/* Hamburger Icon */}
          <button
            className="md:hidden text-xl text-gray-700"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white px-4 py-4 border-t">
          <nav className="flex flex-col space-y-3 font-semibold text-gray-800">
            <Link to="/ghar" className="hover:text-teal-600">HOME</Link>
            <Link to="/" className="hover:text-teal-600">PRODUCTS</Link>
            <Link to="/contact" className="hover:text-teal-600">CONTACT</Link>
            <Link to="/store" className="hover:text-teal-600">STORE</Link>
            <Link to="/profile" className="hover:text-teal-600">PROFILE</Link>
          </nav>
        </div>
      )}

      {/* Search + Info Bar */}
      <div className="bg-teal-600 text-white px-4 md:px-6 py-4 flex flex-col lg:flex-row gap-4 justify-between items-center">
        {/* Search */}
        <div className="flex bg-white rounded-full overflow-hidden shadow-md w-full max-w-xl">
          <button className="flex items-center px-4 text-black border-r">
            All Categories <IoMdArrowDropdown className="ml-1" />
          </button>
          <input
            type="text"
            placeholder="Search anything..."
            className="px-4 py-2 text-black outline-none w-full"
          />
          <button className="px-4 bg-teal-600 text-white hover:bg-teal-700 transition">
            <FaSearch />
          </button>
        </div>

        {/* Info Items */}
        <div className="flex flex-col sm:flex-row gap-2 sm:gap-6 text-xs sm:text-sm font-medium text-center">
          <span className="hover:text-yellow-300 transition">FREE SHIPPING OVER $199</span>
          <span className="hover:text-yellow-300 transition">30 DAYS MONEY BACK</span>
          <span className="hover:text-yellow-300 transition">100% SECURE PAYMENT</span>
        </div>
      </div>
    </header>
  );
};

export default Header;
