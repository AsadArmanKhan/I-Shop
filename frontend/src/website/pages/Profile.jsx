import React from 'react';
import { Link } from 'react-router-dom';
import { FaArrowRight } from 'react-icons/fa';

export default function Profile() {
  return (
    <div className="min-h-screen bg-gray-100 py-10 px-4 flex justify-center items-start">
      <div className="w-full max-w-6xl">
        {/* Breadcrumb */}
        <div className="bg-white shadow px-6 py-6 rounded-xl mb-6">
          <nav className="text-sm text-gray-500">
            <Link to={"/"}>
              <span className="font-semibold text-gray-700">Home</span>
            </Link>
            {' / '}
            <span>pages</span>
            <span className="font-bold text-black">Profile</span>
          </nav>
        </div>

        {/* Profile Content */}
        <div className="bg-white rounded shadow-md p-6 md:p-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {/* Sidebar */}
            <div className="col-span-1 bg-gray-50 rounded-md p-4">
              <div className="flex flex-col items-center">
                <img
                  src="https://cdn-icons-png.flaticon.com/512/147/147144.png"
                  alt="Profile"
                  className="w-24 h-24 rounded-full object-cover mb-2"
                />
                <h2 className="font-semibold text-lg">Mark Cole</h2>
                <p className="text-sm text-gray-500 mb-4">swoo@gmail.com</p>

                <div className="w-full space-y-2">
                  <button className="w-full flex justify-between items-center text-white bg-teal-500 hover:bg-teal-600 px-4 py-2 rounded">
                    Account info <FaArrowRight />
                  </button>
                  <button className="w-full flex justify-between items-center bg-white border px-4 py-2 rounded">
                    My order <FaArrowRight />
                  </button>
                  <button className="w-full flex justify-between items-center bg-white border px-4 py-2 rounded">
                    My address <FaArrowRight />
                  </button>
                  <button className="w-full flex justify-between items-center bg-white border px-4 py-2 rounded">
                    Change password <FaArrowRight />
                  </button>
                </div>
              </div>
            </div>

            {/* Form */}
            <div className="col-span-1 md:col-span-3">
              <h2 className="text-xl font-semibold text-gray-700 mb-1">Account Info</h2>
              <p className="text-sm text-gray-400 mb-6">Update your personal information</p>

              <form className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    First Name <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    defaultValue="Mark"
                    className="w-full border rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-teal-500"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Last Name <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    defaultValue="Cole"
                    className="w-full border rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-teal-500"
                  />
                </div>
                <div className="col-span-2">
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Email Address <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="email"
                    defaultValue="swoo@gmail.com"
                    className="w-full border rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-teal-500"
                  />
                </div>
                <div className="col-span-2">
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Phone Number (Optional)
                  </label>
                  <input
                    type="text"
                    defaultValue="+1 0231 4554 452"
                    className="w-full border rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-teal-500"
                  />
                </div>
                <div className="col-span-2">
                  <button
                    type="submit"
                    className="bg-teal-500 text-white px-6 py-2 rounded hover:bg-teal-600 mt-4"
                  >
                    SAVE
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
