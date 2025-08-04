import React from "react";
import {
  FaTwitter,
  FaFacebook,
  FaInstagram,
  FaYoutube,
  FaPinterest,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-b from-black via-gray-900 to-black text-gray-300 pt-10">
      <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-5 gap-8 pb-10">
        {/* Company Info */}
        <div>
          <h2 className="text-lg font-bold mb-2 text-teal-400">
            SWOO - 1ST NYC TECH ONLINE MARKET
          </h2>
          <p className="text-sm mb-2">HOTLINE 24/7</p>
          <p className="text-xl font-bold text-yellow-400 mb-2">
            (025) 3686 25 16
          </p>
          <p className="text-sm mb-1">
            257 Thatcher Road St, Brooklyn, Manhattan, NY 10092
          </p>
          <p className="text-sm">contact@Swootechmart.com</p>
          <div className="flex space-x-4 mt-4">
            {[FaTwitter, FaFacebook, FaInstagram, FaYoutube, FaPinterest].map(
              (Icon, idx) => (
                <button
                  key={idx}
                  className="bg-gray-800 p-2 rounded-full hover:bg-teal-500 transition-colors duration-300"
                >
                  <Icon className="w-4 h-4 text-gray-300 hover:text-black transition-colors duration-300" />
                </button>
              )
            )}
          </div>
        </div>

        {/* Top Categories */}
        <div>
          <h3 className="text-sm font-bold mb-3 text-teal-400">
            TOP CATEGORIES
          </h3>
          <ul className="space-y-2 text-sm">
            {[
              "Laptops",
              "PC & Computers",
              "Cell Phones",
              "Tablets",
              "Gaming & VR",
              "Networks",
              "Cameras",
              "Sounds",
              "Office",
            ].map((item, idx) => (
              <li
                key={idx}
                className="hover:text-teal-400 transition-colors duration-300 cursor-pointer"
              >
                {item}
              </li>
            ))}
          </ul>
        </div>

        {/* Company Links */}
        <div>
          <h3 className="text-sm font-bold mb-3 text-teal-400">COMPANY</h3>
          <ul className="space-y-2 text-sm">
            {[
              "About Swoo",
              "Contact",
              "Career",
              "Blog",
              "Sitemap",
              "Store Locations",
            ].map((item, idx) => (
              <li
                key={idx}
                className="hover:text-teal-400 transition-colors duration-300 cursor-pointer"
              >
                {item}
              </li>
            ))}
          </ul>
        </div>

        {/* Help Center */}
        <div>
          <h3 className="text-sm font-bold mb-3 text-teal-400">HELP CENTER</h3>
          <ul className="space-y-2 text-sm">
            {[
              "Customer Service",
              "Policy",
              "Terms & Conditions",
              "Track Order",
              "FAQs",
              "My Account",
              "Product Support",
            ].map((item, idx) => (
              <li
                key={idx}
                className="hover:text-teal-400 transition-colors duration-300 cursor-pointer"
              >
                {item}
              </li>
            ))}
          </ul>
        </div>

        {/* Partner */}
        <div>
          <h3 className="text-sm font-bold mb-3 text-teal-400">PARTNER</h3>
          <ul className="space-y-2 text-sm">
            {["Become Seller", "Affiliate", "Advertise", "Partnership"].map(
              (item, idx) => (
                <li
                  key={idx}
                  className="hover:text-teal-400 transition-colors duration-300 cursor-pointer"
                >
                  {item}
                </li>
              )
            )}
          </ul>
        </div>
      </div>

      {/* Newsletter Section */}
      <div className="border-t border-gray-700 py-6 px-4">
        <div className="max-w-5xl mx-auto flex flex-col md:flex-row justify-between items-center">
          <div className="text-sm font-semibold text-center md:text-left mb-4 md:mb-0">
            SUBSCRIBE & GET <span className="text-yellow-400">10% OFF</span> FOR
            YOUR FIRST ORDER
          </div>
          <form className="flex w-full max-w-md border-b border-gray-600">
            <input
              type="email"
              placeholder="Enter your email address"
              className="flex-1 px-4 py-2 outline-none text-sm bg-transparent placeholder-gray-400 text-gray-200"
            />
            <button className="text-sm font-bold text-teal-400 px-4 py-2 hover:text-yellow-400 transition-colors duration-300">
              SUBSCRIBE
            </button>
          </form>
        </div>
        <p className="text-center text-xs text-gray-500 mt-2">
          By subscribing, you accept our{" "}
          <span className="underline hover:text-teal-400 transition-colors duration-300 cursor-pointer">
            Policy
          </span>
        </p>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-700 py-6 px-4 text-xs text-gray-500 text-center">
        <div className="flex flex-col md:flex-row justify-between items-center max-w-7xl mx-auto">
          <p>
            © 2024 <span className="font-bold text-teal-400">Swootechmart</span>
            . All Rights Reserved
          </p>
          <div className="flex items-center space-x-4 mt-2 md:mt-0">
            {["paypal", "mastercard", "visa", "stripe", "klarna"].map(
              (icon, idx) => (
                <img
                  key={idx}
                  src={`/icons/${icon}.svg`}
                  alt={icon}
                  className="h-4 hover:opacity-80 transition-opacity duration-300"
                />
              )
            )}
          </div>
          <a
            href="#"
            className="text-blue-400 underline mt-2 md:mt-0 hover:text-teal-400 transition-colors duration-300"
          >
            Mobile Site
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
