import React, { useEffect, useState } from 'react';
import { FaSearch, FaShoppingCart } from 'react-icons/fa';
import { IoMdArrowDropdown } from 'react-icons/io';
import { Link, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useDispatch, useSelector } from 'react-redux';
import { lsToCart } from '../../redux/slice/cartSlice';
import { userLogout } from '../../redux/slice/userSlice';
import { toast, ToastContainer } from 'react-toastify';
import Confetti from 'react-confetti';
import 'react-toastify/dist/ReactToastify.css';

const Header = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user.data);
  const cart = useSelector((state) => state.cart);

  const [showModal, setShowModal] = useState(false);
  const [showConfetti, setShowConfetti] = useState(false);

  useEffect(() => {
    dispatch(lsToCart());
  }, []);

  const handleLogoutClick = () => {
    setShowModal(true);
  };

  const handleConfirmLogout = () => {
    dispatch(userLogout());
    // localStorage.removeItem("user");
    localStorage.removeItem("cart");

    setShowModal(false);
    setShowConfetti(true);

    toast.success("Logged out successfully!", {
      position: "top-right",
      autoClose: 1000,
      onClose: () => navigate("/"),
    });

    setTimeout(() => setShowConfetti(false), 3000);
  };

  const handleCancelLogout = () => {
    setShowModal(false);
  };

  return (
    <motion.div
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.7, ease: 'easeOut' }}
      className="mx-auto font-sans text-sm border-b shadow-md"
    >
      {/* Confetti and Toast */}
      {showConfetti && <Confetti recycle={false} numberOfPieces={400} />}
      <ToastContainer />

      {/* Logout confirmation modal */}
      {showModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-xl shadow-lg p-6 max-w-sm w-full text-center">
            <h2 className="text-lg font-semibold mb-4 text-gray-800">Confirm Logout</h2>
            <p className="mb-6 text-gray-600">Are you sure you want to logout?</p>
            <div className="flex justify-center gap-4">
              <button
                onClick={handleConfirmLogout}
                className="px-4 py-2 bg-red-600 text-white rounded hover:bg-red-700 transition"
              >
                Yes
              </button>
              <button
                onClick={handleCancelLogout}
                className="px-4 py-2 bg-gray-300 text-gray-800 rounded hover:bg-gray-400 transition"
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Header */}
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
          <Link to={"/store"}>
            <motion.div whileHover={{ scale: 1.1 }} className="cursor-pointer">STORE</motion.div>
          </Link>
          <Link to={"/profile"}>
            <motion.div whileHover={{ scale: 1.1 }} className="cursor-pointer">PROFILE</motion.div>
          </Link>
        </nav>

        <div className="flex items-center space-x-4">
          <div className="flex text-right space-x-1">
            {user == null ? (
              <Link to={"/login?ref=Products"}>
                <div className="font-semibold cursor-pointer text-black hover:text-teal-600 transition">LOG IN |</div>
              </Link>
            ) : (
              <button onClick={handleLogoutClick}>
                <div className="cursor-pointer font-semibold text-black hover:text-teal-600 transition">
                  LOG OUT |
                </div>
              </button>
            )}
          </div>

          <Link to={"/cart"}>
            <motion.div whileHover={{ scale: 1.1 }} className="relative cursor-pointer">
              <FaShoppingCart className="text-xl" />
              <span className="absolute -top-2 -right-3 bg-green-500 text-white text-xs w-5 h-5 flex items-center justify-center rounded-full">
                {cart.item.length}
              </span>
            </motion.div>
          </Link>

          {/* <div className="font-bold text-gray-700">$1,689.00</div> */}
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
