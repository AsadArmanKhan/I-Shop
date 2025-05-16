import React from 'react'
import { FaTachometerAlt } from "react-icons/fa";
import { FaUserSecret } from "react-icons/fa";
import { FaCog } from "react-icons/fa";
import { FaSignOutAlt } from "react-icons/fa";




export default function Header() {
  return (
    <>
      <header className="bg-gray-800 text-white px-6 py-4 flex justify-between items-center shadow-md">
        <div className="text-2xl font-bold">
          Admin Panel
        </div>

        <nav className="flex space-x-6">
          <a href="/dashboard" className="flex items-center hover:text-gray-300">
            <FaTachometerAlt className="mr-2" /> Dashboard
          </a>
          <a href="/users" className="flex items-center hover:text-gray-300">
            <FaUserSecret className="mr-2" /> Users
          </a>
          <a href="/settings" className="flex items-center hover:text-gray-300">
            <FaCog className="mr-2" /> Settings
          </a>
        </nav>

        <div className="flex items-center space-x-4">
          <span className="hidden sm:inline">Welcome, Admin</span>
          <a
            href="/logout"
            className="flex items-center bg-red-600 hover:bg-red-700 px-3 py-1 rounded text-white"
          >
            <FaSignOutAlt className="mr-2" /> Logout
          </a>
        </div>
      </header>

    </>
  )
}
