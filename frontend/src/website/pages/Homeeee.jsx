import React, { useContext } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { MainContext } from "../../Context";

function Homeeee() {
  const { isDark, toggleTheme } = useContext(MainContext);

  return (
    <div
      className={`min-h-screen ${
        isDark
          ? "bg-gradient-to-br from-black to-gray-900 text-white"
          : "bg-gradient-to-br from-white to-gray-100 text-black"
      }`}
    >
      {/* Toggle Button */}
      <div className="absolute top-5 right-5">
        <button
          onClick={toggleTheme}
          className={`px-4 py-2 rounded-md font-medium transition ${
            isDark
              ? "bg-white text-black hover:bg-gray-200"
              : "bg-black text-white hover:bg-gray-800"
          }`}
        >
          {isDark ? "Light Mode" : "Dark Mode"}
        </button>
      </div>

      <main className="pt-20">
        {/* Hero Section */}
        <section className="flex flex-col items-center justify-center h-screen text-center px-4">
          <motion.div
            initial={{ opacity: 0, y: -40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            <h2 className="text-5xl sm:text-6xl font-extrabold mb-6">
              Discover Luxury & Style
            </h2>
            <p className="text-lg sm:text-xl mb-8 max-w-2xl">
              Explore our exclusive collection of premium products designed to
              inspire your lifestyle.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Link
                to={"/"}
                className="bg-yellow-500 hover:bg-yellow-600 text-black font-semibold py-2 px-6 rounded-full transition"
              >
                Shop Now
              </Link>
              <Link
                to={"/store"}
                className="border border-yellow-500 hover:bg-yellow-500 hover:text-black font-semibold py-2 px-6 rounded-full transition"
              >
                Explore Categories
              </Link>
            </div>
          </motion.div>
        </section>
      </main>

      <footer
        className={`p-4 text-center border-t ${
          isDark ? "border-gray-700" : "border-gray-300"
        }`}
      >
        <p>&copy; 2025 SWOO TECH MART. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default Homeeee;
