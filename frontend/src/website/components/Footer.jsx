import React from 'react'
import { FaTwitter, FaFacebook, FaInstagram, FaYoutube, FaPinterest } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-gray-300 text-black pt-10">

      <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-5 gap-8 pb-10">

        {/* Company Info */}
        <div>
          <h2 className="text-lg font-bold mb-2">SWOO - 1ST NYC TECH ONLINE MARKET</h2>
          <p className="text-sm text-black mb-2">HOTLINE 24/7</p>
          <p className="text-xl font-bold text-red-500 mb-2">(025) 3686 25 16</p>
          <p className="text-sm text-black mb-1">257 Thatcher Road St, Brooklyn, Manhattan, NY 10092</p>
          <p className="text-sm text-black">contact@Swootechmart.com</p>
          <div className="flex space-x-4 mt-4">
            {[FaTwitter, FaFacebook, FaInstagram, FaYoutube, FaPinterest].map((Icon, idx) => (
              <button
                key={idx}
                className="bg-gray-300 p-2 rounded-full hover:bg-teal-600 transition-colors duration-300"
              >
                <Icon className="w-4 h-4 text-black hover:text-white transition-colors duration-300" />
              </button>
            ))}
          </div>
        </div>

        {/* Top Categories */}
        <div>
          <h3 className="text-sm font-bold mb-3">TOP CATEGORIES</h3>
          <ul className="space-y-2 text-sm text-black">
            {['Laptops', 'PC & Computers', 'Cell Phones', 'Tablets', 'Gaming & VR', 'Networks', 'Cameras', 'Sounds', 'Office'].map((item, idx) => (
              <li
                key={idx}
                className="hover:text-white transition-colors duration-300 cursor-pointer"
              >
                {item}
              </li>
            ))}
          </ul>
        </div>

        {/* Company Links */}
        <div>
          <h3 className="text-sm font-bold mb-3">COMPANY</h3>
          <ul className="space-y-2 text-sm text-black">
            {['About Swoo', 'Contact', 'Career', 'Blog', 'Sitemap', 'Store Locations'].map((item, idx) => (
              <li
                key={idx}
                className="hover:text-white transition-colors duration-300 cursor-pointer"
              >
                {item}
              </li>
            ))}
          </ul>
        </div>

        {/* Help Center */}
        <div>
          <h3 className="text-sm font-bold mb-3">HELP CENTER</h3>
          <ul className="space-y-2 text-sm text-black">
            {['Customer Service', 'Policy', 'Terms & Conditions', 'Track Order', 'FAQs', 'My Account', 'Product Support'].map((item, idx) => (
              <li
                key={idx}
                className="hover:text-white transition-colors duration-300 cursor-pointer"
              >
                {item}
              </li>
            ))}
          </ul>
        </div>

        {/* Partner */}
        <div>
          <h3 className="text-sm font-bold mb-3">PARTNER</h3>
          <ul className="space-y-2 text-sm text-black">
            {['Become Seller', 'Affiliate', 'Advertise', 'Partnership'].map((item, idx) => (
              <li
                key={idx}
                className="hover:text-white transition-colors duration-300 cursor-pointer"
              >
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Newsletter Section */}
      <div className="border-t border-gray-200 py-6 px-4">
        <div className="max-w-5xl mx-auto flex flex-col md:flex-row justify-between items-center">
          <div className="text-sm font-semibold text-center md:text-left mb-4 md:mb-0">
            SUBSCRIBE & GET <span className="text-red-500">10% OFF</span> FOR YOUR FIRST ORDER
          </div>
          <form className="flex w-full max-w-md border-b border-gray-300">
            <input
              type="email"
              placeholder="Enter your email address"
              className="flex-1 px-4 py-2 outline-none text-sm"
            />
            <button
              className="text-sm font-bold text-red-500 px-4 py-2 hover:text-white transition-colors duration-300"
            >
              SUBSCRIBE
            </button>
          </form>
        </div>
        <p className="text-center text-xs text-gray-500 mt-2">
          By subscribing, you're accepted the our <span className="underline hover:text-teal-600 transition-colors duration-300 cursor-pointer">Policy</span>
        </p>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-200 py-6 px-4 text-xs text-gray-500 text-center">
        <div className="flex flex-col md:flex-row justify-between items-center max-w-7xl mx-auto">
          <p>© 2024 <span className="font-bold">Shawonetc3</span>. All Rights Reserved</p>
          <div className="flex items-center space-x-4 mt-2 md:mt-0">
            {['paypal', 'mastercard', 'visa', 'stripe', 'klarna'].map((icon, idx) => (
              <img key={idx} src={`/icons/${icon}.svg`} alt={icon} className="h-4 hover:opacity-80 transition-opacity duration-300" />
            ))}
          </div>
          <a href="#" className="text-blue-500 underline mt-2 md:mt-0 hover:text-teal-600 transition-colors duration-300">Mobile Site</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
