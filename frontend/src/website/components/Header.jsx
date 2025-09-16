import React, { useEffect, useState, useContext } from "react";
import { FaSearch, FaShoppingCart, FaBars, FaTimes } from "react-icons/fa";
import { IoMdArrowDropdown } from "react-icons/io";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { useDispatch, useSelector } from "react-redux";
import { emptycart, lsToCart } from "../../redux/slice/cartSlice";
import { userLogout } from "../../redux/slice/userSlice";
import { MainContext } from "../../Context";

const Header = () => {
  const user = useSelector((state) => state.user.data);
  const cart = useSelector((state) => state.cart);
  const dispatch = useDispatch();
  const [menuOpen, setMenuOpen] = useState(false);
  const { darkMode, toggleTheme } = useContext(MainContext);

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
        className=" mx-auto font-sans text-sm  border-gray-700 shadow-lg bg-gradient-to-r from-black via-gray-900 to-black fixed top-0  w-full z-50"
      >
        {/* Top section */}
        <div className=" flex justify-between items-center px-4 md:px-8 py-3  text-white">
          {/* Logo */}
          <Link to={"/"} className="flex items-center space-x-2">
            <div className="w-10 h-10 bg-teal-500 rounded-full flex items-center justify-center shadow-md">
              <img
                src="/img/mike2.png"
                alt="Logo"
                className="w-8 h-8 object-cover"
              />
            </div>
            <div className="font-bold leading-tight text-xs sm:text-sm md:text-base tracking-wide">
              <div>SWOO</div>
              <div>TECH MART</div>
            </div>
          </Link>
          {/* Desktop nav */}
          <nav className="hidden md:flex space-x-4 lg:space-x-6 font-semibold text-gray-200 text-xs sm:text-sm">
            <Link to={"/ghar"} className="hover:text-teal-400 transition">
              HOME
            </Link>
            <Link to={"/"} className="hover:text-teal-400 transition">
              PRODUCTS
            </Link>
            <Link to={"/store"} className="hover:text-teal-400 transition">
              STORE
            </Link>
            <Link to={"/contact"} className="hover:text-teal-400 transition">
              CONTACT
            </Link>
            <Link to={"/about"} className="hover:text-teal-400 transition">
              ABOUT
            </Link>
            <Link to={"/profile"} className="hover:text-teal-400 transition">
              PROFILE
            </Link>
          </nav>
          {/* User, cart, theme toggle & hamburger */}
          <div className="flex items-center space-x-3 text-teal-400">
            {user == null ? (
              <Link to={"/login?ref=Products"}>
                <div className="font-semibold cursor-pointer hover:text-teal-300 transition text-xs sm:text-sm">
                  LOG IN |
                </div>
              </Link>
            ) : (
              <div
                onClick={logouthandler}
                className="cursor-pointer font-semibold hover:text-teal-300 transition text-xs sm:text-sm"
              >
                LOG OUT |
              </div>
            )}

            {/* Theme Toggle Button */}
            <button
              onClick={toggleTheme}
              className="bg-teal-500 hover:bg-teal-400 text-black px-2 py-1 rounded text-xs sm:text-sm transition"
              title="Toggle Theme"
            >
              Toggle Theme
            </button>

            <Link to={"/cart"}>
              <motion.div
                whileHover={{ scale: 1.1 }}
                className="relative cursor-pointer"
              >
                <FaShoppingCart className="text-lg sm:text-xl" />
                <span className="absolute -top-2 -right-3 bg-yellow-400 text-black text-xs w-5 h-5 flex items-center justify-center rounded-full">
                  {cart.item.length}
                </span>
              </motion.div>
            </Link>

            <button
              className="md:hidden text-xl text-teal-400"
              onClick={() => setMenuOpen(!menuOpen)}
            >
              {menuOpen ? <FaTimes /> : <FaBars />}
            </button>
          </div>
        </div>

        {/* Search + Info */}
        <div className="bg-teal-500 text-black px-4 md:px-8 py-2 flex flex-col md:flex-row items-center justify-between space-y-2 md:space-y-0">
          <div className="flex w-full md:w-auto bg-black rounded-full overflow-hidden shadow-inner">
            <button className="flex items-center px-3 text-teal-400 border-r border-teal-400 text-xs sm:text-sm">
              All Categories <IoMdArrowDropdown className="ml-1" />
            </button>
            <input
              type="text"
              placeholder="Search anything..."
              className="px-3 py-1.5 flex-1 text-white bg-black placeholder-gray-400 outline-none text-xs sm:text-sm"
            />
            <button className="px-3 bg-teal-500 text-black hover:bg-teal-600 transition">
              <FaSearch />
            </button>
          </div>

          <div className="hidden md:flex items-center space-x-6 text-xs sm:text-sm font-medium">
            <span className="hover:text-black transition">
              {/* FREE SHIPPING OVER $199 */}
            </span>
            <span className="hover:text-black transition">
              {/* 30 DAYS MONEY BACK */}
            </span>
            <span className="hover:text-black transition">
              {/* 100% SECURE PAYMENT */}
            </span>
          </div>
        </div>
      </motion.div>

      {/* AnimatePresence for overlay & sliding menu */}
      <AnimatePresence>
        {menuOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.6 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black z-10"
              onClick={() => setMenuOpen(false)}
            />
            <motion.nav
              initial={{ x: "-100%" }}
              animate={{ x: 0 }}
              exit={{ x: "-100%" }}
              transition={{ type: "tween" }}
              className="fixed top-0 left-0 bottom-0 w-64 bg-gradient-to-b from-black via-gray-900 to-black text-teal-400 z-20 shadow-xl p-6 flex flex-col space-y-4 font-semibold text-sm"
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
