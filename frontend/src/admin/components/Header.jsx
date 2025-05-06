import React from "react";
import { FiBell, FiSearch, FiUser } from "react-icons/fi";

const Header = () => {
  return (
    <header className="bg-white px-6 py-4 shadow flex items-center justify-between">
      {/* Left: Page Title */}
      <div>
        <h1 className="text-2xl font-bold text-gray-800">Admin Dashboard</h1>
        <p className="text-sm text-gray-500">Welcome back, Admin</p>
      </div>

      {/* Right: Search + Icons */}
      <div className="flex items-center gap-4">
        {/* Search Input */}
        <div className="relative">
          <input
            type="text"
            placeholder="Search..."
            className="pl-10 pr-4 py-2 border border-gray-300 rounded-full text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <FiSearch className="absolute left-3 top-2.5 text-gray-500" />
        </div>

        {/* Notification Icon */}
        <div className="relative">
          <FiBell className="text-xl text-gray-600 hover:text-blue-500 cursor-pointer" />
          <span className="absolute -top-1 -right-1 bg-red-500 text-white text-[10px] rounded-full px-[6px] py-[1px] font-semibold">
            3
          </span>
        </div>

        {/* User Avatar */}
        <div className="w-9 h-9 bg-gray-300 rounded-full flex items-center justify-center cursor-pointer hover:ring-2 hover:ring-blue-500">
          <FiUser className="text-gray-700" />
        </div>
      </div>
    </header>
  );
};

export default Header;

