import React, { useEffect, useState } from "react";
import { FaSearch, FaShoppingCart, FaBars, FaTimes } from "react-icons/fa";
import { IoMdArrowDropdown } from "react-icons/io";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { useDispatch, useSelector } from "react-redux";
import { emptycart, lsToCart } from "../../redux/slice/cartSlice";
import { userLogout } from "../../redux/slice/userSlice";

const Header = () => {
  const user = useSelector((state) => state.user.data);
  const cart = useSelector((state) => state.cart);
  const dispatch = useDispatch();
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    dispatch(lsToCart());
  }, [dispatch]);

  function logouthandler() {
    dispatch(userLogout());
    dispatch(emptycart());
  }

  return (
    <>
      <motion.div
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        className="mx-auto font-sans text-sm border-b shadow-md bg-white relative z-20"
      >
        {/* Top section */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="flex justify-between items-center px-4 md:px-6 py-3"
        >
          {/* Logo */}
          <Link to={"/"} className="flex items-center space-x-2">
            <div className="w-10 h-10 bg-teal-600 rounded-full shadow-md flex items-center justify-center">
              <img
                src="/img/mike2.png"
                alt="Logo"
                className="w-8 h-8 object-cover"
              />
            </div>
            <div className="font-bold leading-tight text-xs sm:text-sm md:text-base">
              <div>SWOO</div>
              <div>TECH MART</div>
            </div>
          </Link>

          {/* Desktop nav */}
          <nav className="hidden md:flex space-x-4 lg:space-x-6 font-semibold text-gray-700 text-xs sm:text-sm">
            <Link to={"/ghar"}>HOME</Link>
            <Link to={"/"}>PRODUCTS</Link>
            <Link to={"/store"}>STORE</Link>
            <Link to={"/contact"}>CONTACT</Link>
            <Link to={"/about"}>ABOUT</Link>
            <Link to={"/profile"}>PROFILE</Link>
          </nav>

          {/* User, cart & hamburger */}
          <div className="flex items-center space-x-3">
            {user == null ? (
              <Link to={"/login?ref=Products"}>
                <div className="font-semibold cursor-pointer text-black hover:text-teal-600 transition text-xs sm:text-sm">
                  LOG IN |
                </div>
              </Link>
            ) : (
              <div
                onClick={logouthandler}
                className="cursor-pointer font-semibold text-black hover:text-teal-600 transition text-xs sm:text-sm"
              >
                LOG OUT |
              </div>
            )}

            <Link to={"/cart"}>
              <motion.div
                whileHover={{ scale: 1.1 }}
                className="relative cursor-pointer"
              >
                <FaShoppingCart className="text-lg sm:text-xl" />
                <span className="absolute -top-2 -right-3 bg-green-500 text-white text-xs w-5 h-5 flex items-center justify-center rounded-full">
                  {cart.item.length}
                </span>
              </motion.div>
            </Link>

            {/* Hamburger */}
            <button
              className="md:hidden text-xl"
              onClick={() => setMenuOpen(!menuOpen)}
            >
              {menuOpen ? <FaTimes /> : <FaBars />}
            </button>
          </div>
        </motion.div>

        {/* Search + Info */}
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="bg-teal-600 text-white px-4 md:px-6 py-2 flex flex-col md:flex-row items-center justify-between space-y-2 md:space-y-0"
        >
          <div className="flex w-full md:w-auto bg-white rounded-full overflow-hidden shadow-md">
            <button className="flex items-center px-3 text-black border-r text-xs sm:text-sm">
              All Categories <IoMdArrowDropdown className="ml-1" />
            </button>
            <input
              type="text"
              placeholder="Search anything..."
              className="px-3 py-1.5 flex-1 text-black outline-none text-xs sm:text-sm"
            />
            <button className="px-3 bg-teal-600 text-white hover:bg-teal-700 transition">
              <FaSearch />
            </button>
          </div>

          <div className="hidden md:flex items-center space-x-6 text-xs sm:text-sm font-medium">
            <span className="hover:text-yellow-300 transition">
              FREE SHIPPING OVER $199
            </span>
            <span className="hover:text-yellow-300 transition">
              30 DAYS MONEY BACK
            </span>
            <span className="hover:text-yellow-300 transition">
              100% SECURE PAYMENT
            </span>
          </div>
        </motion.div>
      </motion.div>

      {/* AnimatePresence for overlay & sliding menu */}
      <AnimatePresence>
        {menuOpen && (
          <>
            {/* Dark overlay */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.5 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black z-10"
              onClick={() => setMenuOpen(false)}
            />

            {/* Slide-in menu */}
            <motion.nav
              initial={{ x: "-100%" }}
              animate={{ x: 0 }}
              exit={{ x: "-100%" }}
              transition={{ type: "tween" }}
              className="fixed top-0 left-0 bottom-0 w-64 bg-white z-20 shadow-lg p-6 flex flex-col space-y-4 font-semibold text-gray-700 text-sm"
            >
              <Link to={"/ghar"} onClick={() => setMenuOpen(false)}>
                HOME
              </Link>
              <Link to={"/"} onClick={() => setMenuOpen(false)}>
                PRODUCTS
              </Link>
              <Link to={"/store"} onClick={() => setMenuOpen(false)}>
                STORE
              </Link>
              <Link to={"/contact"} onClick={() => setMenuOpen(false)}>
                CONTACT
              </Link>
              <Link to={"/about"} onClick={() => setMenuOpen(false)}>
                ABOUT
              </Link>
              <Link to={"/profile"} onClick={() => setMenuOpen(false)}>
                PROFILE
              </Link>
              {user == null ? (
                <Link
                  to={"/login?ref=Products"}
                  onClick={() => setMenuOpen(false)}
                >
                  LOG IN
                </Link>
              ) : (
                <div
                  onClick={() => {
                    logouthandler();
                    setMenuOpen(false);
                  }}
                >
                  LOG OUT
                </div>
              )}
              <Link to={"/cart"} onClick={() => setMenuOpen(false)}>
                CART ({cart.item.length})
              </Link>
            </motion.nav>
          </>
        )}
      </AnimatePresence>
    </>
  );
};

export default Header;
