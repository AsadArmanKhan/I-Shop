import { motion } from 'framer-motion';

function Homeeee() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-black to-gray-800 text-white">
      {/* <header className="fixed top-0 w-full flex justify-between items-center p-4 bg-opacity-50 backdrop-blur">
        <h1 className="text-2xl font-bold">BrandName</h1>
        <nav>
          <ul className="flex space-x-4">
            <li><a href="#about" className="hover:text-gray-400">About</a></li>
            <li><a href="#services" className="hover:text-gray-400">Services</a></li>
            <li><a href="#contact" className="hover:text-gray-400">Contact</a></li>
          </ul>
        </nav>
      </header> */}

      <main className="pt-20">
        <section className="flex items-center justify-center h-screen">
          <motion.div
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="text-center"
          >
            <h2 className="text-4xl font-bold mb-4">Welcome to Our Website</h2>
            <p className="text-lg">We provide exceptional services to help you grow.</p>
          </motion.div>
        </section>

        {/* Additional sections like About, Services, Portfolio, etc. */}
      </main>

      <footer className="p-4 text-center">
        <p>&copy; 2025 BrandName. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default Homeeee;
