import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa";
import { MainContext } from "../../Context";

export default function Profile() {
  const { isDark } = useContext(MainContext);

  const bgBase = isDark ? "bg-[#1A2233]" : "bg-gray-100";
  const cardBase = isDark ? "bg-[#1F2A3C]" : "bg-white";
  const textBase = isDark ? "text-white" : "text-gray-700";
  const textMuted = isDark ? "text-gray-400" : "text-gray-500";
  const borderBase = isDark ? "border-gray-600" : "border";
  const inputFocus = isDark ? "focus:ring-[#17C3B2]" : "focus:ring-teal-500";
  const btnPrimary = isDark
    ? "bg-[#17C3B2] hover:bg-[#149c90]"
    : "bg-teal-500 hover:bg-teal-600";

  return (
    <div
      className={`min-h-screen ${bgBase} py-10 px-4 flex justify-center items-start`}
    >
      <div className="w-full max-w-6xl">
        {/* Breadcrumb */}
        <div className={`${cardBase} shadow px-6 py-6 rounded-xl mb-6`}>
          <nav className={`text-sm ${textMuted}`}>
            <Link to="/">
              <span className={`font-semibold ${textBase}`}>Home</span>
            </Link>{" "}
            / <span>pages</span>{" "}
            <span
              className={`font-bold ${isDark ? "text-white" : "text-black"}`}
            >
              Profile
            </span>
          </nav>
        </div>

        {/* Profile Content */}
        <div className={`${cardBase} rounded shadow-md p-6 md:p-8`}>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {/* Sidebar */}
            <div
              className={`col-span-1 ${
                isDark ? "bg-[#273142]" : "bg-gray-50"
              } rounded-md p-4`}
            >
              <div className="flex flex-col items-center">
                <img
                  src="https://cdn-icons-png.flaticon.com/512/147/147144.png"
                  alt="Profile"
                  className="w-24 h-24 rounded-full object-cover mb-2"
                />
                <h2 className={`font-semibold text-lg ${textBase}`}>
                  Mark Cole
                </h2>
                <p className={`text-sm ${textMuted} mb-4`}>swoo@gmail.com</p>

                <div className="w-full space-y-2">
                  <button
                    className={`w-full flex justify-between items-center text-white ${btnPrimary} px-4 py-2 rounded`}
                  >
                    Account info <FaArrowRight />
                  </button>
                  <button
                    className={`w-full flex justify-between items-center ${cardBase} ${borderBase} px-4 py-2 rounded ${textBase}`}
                  >
                    My order <FaArrowRight />
                  </button>
                  <Link to="/profile/useraddress">
                    <button
                      className={`w-full flex justify-between items-center ${cardBase} ${borderBase} px-4 py-2 rounded ${textBase}`}
                    >
                      My address <FaArrowRight />
                    </button>
                  </Link>
                  <button
                    className={`w-full flex justify-between items-center ${cardBase} ${borderBase} px-4 py-2 rounded ${textBase}`}
                  >
                    Change password <FaArrowRight />
                  </button>
                </div>
              </div>
            </div>

            {/* Form */}
            <div className="col-span-1 md:col-span-3">
              <h2 className={`text-xl font-semibold mb-1 ${textBase}`}>
                Account Info
              </h2>
              <p className={`text-sm mb-6 ${textMuted}`}>
                Update your personal information
              </p>

              <form className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label
                    className={`block text-sm font-medium mb-1 ${textBase}`}
                  >
                    First Name <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    placeholder="Mark"
                    className={`w-full ${borderBase} rounded px-4 py-2 bg-transparent ${textBase}  ${inputFocus}`}
                  />
                </div>
                <div>
                  <label
                    className={`block text-sm font-medium mb-1 ${textBase}`}
                  >
                    Last Name <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    placeholder="Cole"
                    className={`w-full ${borderBase} rounded px-4 py-2 bg-transparent ${textBase}  ${inputFocus}`}
                  />
                </div>
                <div className="col-span-2">
                  <label
                    className={`block text-sm font-medium mb-1 ${textBase}`}
                  >
                    Email Address <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="email"
                    placeholder="swoo@gmail.com"
                    className={`w-full ${borderBase} rounded px-4 py-2 bg-transparent ${textBase}  ${inputFocus}`}
                  />
                </div>
                <div className="col-span-2">
                  <label
                    className={`block text-sm font-medium mb-1 ${textBase}`}
                  >
                    Phone Number (Optional)
                  </label>
                  <input
                    type="text"
                    placeholder="+1 0231 4554 452"
                    className={`w-full ${borderBase} rounded px-4 py-2 bg-transparent ${textBase}  ${inputFocus}`}
                  />
                </div>
                <div className="col-span-2">
                  <button
                    type="submit"
                    className={`${btnPrimary} text-white px-6 py-2 rounded mt-4`}
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
