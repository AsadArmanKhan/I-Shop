import { motion } from "framer-motion";
import { Link } from "react-router-dom";

function Homeeee() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-black to-gray-900 text-white">
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
                className="bg-yellow-500 hover:bg-yellow-600
                text-black font-semibold py-2 px-6 rounded-full transition"
              >
                Shop Now
              </Link>
              <Link to={'/store'}
                href="#categories"
                className="border border-yellow-500 hover:bg-yellow-500 hover:text-black font-semibold py-2 px-6 rounded-full transition"
              >
                Explore Categories
              </Link>
            </div>
          </motion.div>
        </section>

        {/* Featured Products Section */}
      </main>

      <footer className="p-4 text-center border-t border-gray-700">
        <p>&copy; 2025 SWOO TECH MART. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default Homeeee;
