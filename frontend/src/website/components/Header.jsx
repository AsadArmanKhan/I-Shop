import React from 'react'

export default function Header() {
    return (
        <>
            <header className="bg-white shadow-md sticky top-0 z-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex justify-between items-center h-16">
                        {/* Logo */}
                        <div className="flex-shrink-0 text-2xl font-bold text-indigo-600">
                            i<span className="text-gray-800">Shop</span>
                        </div>
                        {/* Navigation Links */}
                        <nav className="hidden md:flex space-x-6 text-gray-700 font-medium">
                            <a href="#" className="hover:text-indigo-600 transition">
                                Home
                            </a>
                            <a href="#" className="hover:text-indigo-600 transition">
                                Products
                            </a>
                            <a href="#" className="hover:text-indigo-600 transition">
                                About
                            </a>
                            <a href="#" className="hover:text-indigo-600 transition">
                                Contact
                            </a>
                        </nav>
                        {/* Icons (Search, Cart, Profile) */}
                        <div className="flex items-center space-x-4">
                            <button className="text-gray-600 hover:text-indigo-600 transition">
                                <svg
                                    className="w-5 h-5"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth={2}
                                    viewBox="0 0 24 24"
                                >
                                    <path d="M21 21l-4.35-4.35m0 0A7.5 7.5 0 104.5 4.5a7.5 7.5 0 0012.15 12.15z" />
                                </svg>
                            </button>
                            <button className="relative text-gray-600 hover:text-indigo-600 transition">
                                <svg
                                    className="w-6 h-6"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth={2}
                                    viewBox="0 0 24 24"
                                >
                                    <path d="M3 3h2l.4 2M7 13h14l-1.35 6.4a2 2 0 01-2 .6H7a2 2 0 01-2-1.6L3 6h18" />
                                </svg>
                                <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full px-1">
                                    3
                                </span>
                            </button>
                            <button className="text-gray-600 hover:text-indigo-600 transition">
                                <svg
                                    className="w-6 h-6"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth={2}
                                    viewBox="0 0 24 24"
                                >
                                    <path d="M5.121 17.804A9 9 0 1117.803 5.121M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                                </svg>
                            </button>
                        </div>
                        {/* Mobile Menu Button */}
                        <div className="md:hidden">
                            <button className="text-gray-600 hover:text-indigo-600">
                                <svg
                                    className="w-6 h-6"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth={2}
                                    viewBox="0 0 24 24"
                                >
                                    <path d="M4 6h16M4 12h16M4 18h16" />
                                </svg>
                            </button>
                        </div>
                    </div>
                </div>
            </header>
        </>
    )
}
