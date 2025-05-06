const Footer = () => {
    return (
        <footer className="bg-gray-900 text-gray-300 py-10">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-4 gap-8">
                {/* Logo & About */}
                <div>
                    <h2 className="text-2xl font-bold text-white mb-2">
                        i<span className="text-indigo-500">Shop</span>
                    </h2>
                    <p className="text-sm">
                        Your one-stop online shop for the latest gadgets, fashion, and more.
                        Shop smart with iShop.
                    </p>
                </div>
                {/* Quick Links */}
                <div>
                    <h3 className="text-white font-semibold mb-3">Quick Links</h3>
                    <ul className="space-y-2 text-sm">
                        <li>
                            <a href="#" className="hover:text-indigo-400 transition">
                                Home
                            </a>
                        </li>
                        <li>
                            <a href="#" className="hover:text-indigo-400 transition">
                                Shop
                            </a>
                        </li>
                        <li>
                            <a href="#" className="hover:text-indigo-400 transition">
                                About Us
                            </a>
                        </li>
                        <li>
                            <a href="#" className="hover:text-indigo-400 transition">
                                Contact
                            </a>
                        </li>
                    </ul>
                </div>
                {/* Customer Service */}
                <div>
                    <h3 className="text-white font-semibold mb-3">Customer Service</h3>
                    <ul className="space-y-2 text-sm">
                        <li>
                            <a href="#" className="hover:text-indigo-400 transition">
                                FAQ
                            </a>
                        </li>
                        <li>
                            <a href="#" className="hover:text-indigo-400 transition">
                                Shipping &amp; Returns
                            </a>
                        </li>
                        <li>
                            <a href="#" className="hover:text-indigo-400 transition">
                                Privacy Policy
                            </a>
                        </li>
                        <li>
                            <a href="#" className="hover:text-indigo-400 transition">
                                Terms &amp; Conditions
                            </a>
                        </li>
                    </ul>
                </div>
                {/* Newsletter */}
                <div>
                    <h3 className="text-white font-semibold mb-3">Subscribe</h3>
                    <p className="text-sm mb-4">
                        Get the latest deals and updates straight to your inbox.
                    </p>
                    <form className="flex space-x-2">
                        <input
                            type="email"
                            placeholder="Enter your email"
                            className="w-full px-3 py-2 rounded bg-gray-800 text-white text-sm focus:outline-none"
                        />
                        <button
                            type="submit"
                            className="bg-indigo-500 px-4 py-2 rounded text-white hover:bg-indigo-600 text-sm transition"
                        >
                            Join
                        </button>
                    </form>
                </div>
            </div>
            {/* Bottom Bar */}
            <div className="mt-10 border-t border-gray-700 pt-6 text-center text-sm text-gray-500">
                © 2025 iShop. All rights reserved.
            </div>
        </footer>
    );
};

export default Footer;
