import React from 'react'

import { FaTwitter, FaFacebook, FaInstagram, FaYoutube, FaPinterest } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-white text-gray-800 pt-10 border-t">
      <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-5 gap-8 pb-10">
        
        {/* Company Info */}
        <div>
          <h2 className="text-lg font-bold mb-2">SWOO - 1ST NYC TECH ONLINE MARKET</h2>
          <p className="text-sm text-gray-500 mb-2">HOTLINE 24/7</p>
          <p className="text-xl font-bold text-red-500 mb-2">(025) 3686 25 16</p>
          <p className="text-sm text-gray-500 mb-1">257 Thatcher Road St, Brooklyn, Manhattan, NY 10092</p>
          <p className="text-sm text-gray-500">contact@Swootechmart.com</p>
          <div className="flex space-x-4 mt-4">
<button className="bg-gray-100 p-2 rounded-full hover:bg-gray-200">
  <FaTwitter className="w-4 h-4" />
</button>
<button className="bg-gray-100 p-2 rounded-full hover:bg-gray-200">
  <FaFacebook className="w-4 h-4" />
</button>
<button className="bg-gray-100 p-2 rounded-full hover:bg-gray-200">
  <FaInstagram className="w-4 h-4" />
</button>
<button className="bg-gray-100 p-2 rounded-full hover:bg-gray-200">
  <FaYoutube className="w-4 h-4" />
</button>
<button className="bg-gray-100 p-2 rounded-full hover:bg-gray-200">
  <FaPinterest className="w-4 h-4" />
</button>
</div>
        </div>

        {/* Top Categories */}
        <div>
          <h3 className="text-sm font-bold mb-3">TOP CATEGORIES</h3>
          <ul className="space-y-2 text-sm text-gray-600">
            <li>Laptops</li>
            <li>PC & Computers</li>
            <li>Cell Phones</li>
            <li>Tablets</li>
            <li>Gaming & VR</li>
            <li>Networks</li>
            <li>Cameras</li>
            <li>Sounds</li>
            <li>Office</li>
          </ul>
        </div>

        {/* Company Links */}
        <div>
          <h3 className="text-sm font-bold mb-3">COMPANY</h3>
          <ul className="space-y-2 text-sm text-gray-600">
            <li>About Swoo</li>
            <li>Contact</li>
            <li>Career</li>
            <li>Blog</li>
            <li>Sitemap</li>
            <li>Store Locations</li>
          </ul>
        </div>

        {/* Help Center */}
        <div>
          <h3 className="text-sm font-bold mb-3">HELP CENTER</h3>
          <ul className="space-y-2 text-sm text-gray-600">
            <li>Customer Service</li>
            <li>Policy</li>
            <li>Terms & Conditions</li>
            <li>Track Order</li>
            <li>FAQs</li>
            <li>My Account</li>
            <li>Product Support</li>
          </ul>
        </div>

        {/* Partner */}
        <div>
          <h3 className="text-sm font-bold mb-3">PARTNER</h3>
          <ul className="space-y-2 text-sm text-gray-600">
            <li>Become Seller</li>
            <li>Affiliate</li>
            <li>Advertise</li>
            <li>Partnership</li>
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
            <button className="text-sm font-bold text-red-500 px-4 py-2">SUBSCRIBE</button>
          </form>
        </div>
        <p className="text-center text-xs text-gray-500 mt-2">
          By subscribing, you're accepted the our <span className="underline">Policy</span>
        </p>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-200 py-6 px-4 text-xs text-gray-500 text-center">
        <div className="flex flex-col md:flex-row justify-between items-center max-w-7xl mx-auto">
          <p>© 2024 <span className="font-bold">Shawonetc3</span>. All Rights Reserved</p>
          <div className="flex items-center space-x-4 mt-2 md:mt-0">
            <img src="/icons/paypal.svg" alt="PayPal" className="h-4" />
            <img src="/icons/mastercard.svg" alt="MasterCard" className="h-4" />
            <img src="/icons/visa.svg" alt="Visa" className="h-4" />
            <img src="/icons/stripe.svg" alt="Stripe" className="h-4" />
            <img src="/icons/klarna.svg" alt="Klarna" className="h-4" />
          </div>
          <a href="#" className="text-blue-500 underline mt-2 md:mt-0">Mobile Site</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;