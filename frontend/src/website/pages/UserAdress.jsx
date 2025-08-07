// import React, { useState } from "react";
// import {
//   FaMapMarkerAlt,
//   FaPhoneAlt,
//   FaGlobe,
//   FaCity,
//   FaArrowLeft,
// } from "react-icons/fa";
// import { useDispatch, useSelector } from "react-redux";
// import { useNavigate } from "react-router-dom";
// import { setUser } from "../../redux/slice/userSlice";
// import axios from "axios";

// export default function UserAddress() {
//   const navigate = useNavigate();
//   const user = useSelector((state) => state.user?.data);
//   const dispatch = useDispatch();

//   const [address, setAddress] = useState({
//     addressLine1: "",
//     addressLine2: "",
//     city: "",
//     state: "",
//     postalCode: "",
//     country: "",
//     contact: "",
//   });

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setAddress((prev) => ({ ...prev, [name]: value }));
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     if (!user?._id) {
//       alert("Please log in first");
//       return;
//     }

//     try {
//       const res = await axios.post("http://localhost:5000/user/add-address", {
//         user_id: user._id,
//         shipping_address: address,
//       });

//       if (res.data.flag === 1) {
//         alert("Address added successfully!");
//         dispatch(setUser(res.data.user));
//         navigate("/profile");
//       } else {
//         alert(res.data.msg || "Error adding address");
//       }
//     } catch (error) {
//       console.error(error);
//       alert("Failed to add address");
//     }
//   };

//   return (
//     <div className="w-full max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
//       <button
//         onClick={() => navigate(-1)}
//         className="mb-6 flex items-center text-sm text-gray-500 hover:text-yellow-500 transition font-medium"
//       >
//         <FaArrowLeft className="mr-2" />
//         Back
//       </button>

//       <div className="bg-white rounded-2xl shadow-2xl px-8 py-10 sm:px-10 sm:py-12">
//         <h2 className="text-3xl font-semibold text-gray-800 flex items-center gap-2 mb-10">
//           <FaMapMarkerAlt className="text-yellow-500" />
//           Shipping Address
//         </h2>

//         <form onSubmit={handleSubmit} className="space-y-6">
//           {/* Address Line 1 */}
//           <div>
//             <label className="block text-sm font-medium text-gray-700 mb-1">
//               Address Line 1 <span className="text-red-500">*</span>
//             </label>
//             <input
//               name="addressLine1"
//               required
//               placeholder="123 Main Street"
//               value={address.addressLine1}
//               onChange={handleChange}
//               className="w-full px-4 py-3 border border-gray-300 rounded-md shadow-sm focus:ring-yellow-500 focus:border-yellow-500"
//             />
//           </div>

//           {/* Address Line 2 */}
//           <div>
//             <label className="block text-sm font-medium text-gray-700 mb-1">
//               Address Line 2
//             </label>
//             <input
//               name="addressLine2"
//               placeholder="Apartment, Suite, etc. (optional)"
//               value={address.addressLine2}
//               onChange={handleChange}
//               className="w-full px-4 py-3 border border-gray-300 rounded-md shadow-sm focus:ring-yellow-500 focus:border-yellow-500"
//             />
//           </div>

//           {/* City and State */}
//           <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
//             <div>
//               <label className="block text-sm font-medium text-gray-700 mb-1">
//                 City <span className="text-red-500">*</span>
//               </label>
//               <div className="flex items-center px-3 border rounded-md">
//                 <FaCity className="text-gray-400 mr-2" />
//                 <input
//                   name="city"
//                   required
//                   placeholder="City"
//                   value={address.city}
//                   onChange={handleChange}
//                   className="w-full py-2 focus:outline-none"
//                 />
//               </div>
//             </div>

//             <div>
//               <label className="block text-sm font-medium text-gray-700 mb-1">
//                 State <span className="text-red-500">*</span>
//               </label>
//               <input
//                 name="state"
//                 required
//                 placeholder="State"
//                 value={address.state}
//                 onChange={handleChange}
//                 className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-yellow-500 focus:border-yellow-500"
//               />
//             </div>
//           </div>

//           {/* Postal Code and Country */}
//           <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
//             <div>
//               <label className="block text-sm font-medium text-gray-700 mb-1">
//                 Postal Code <span className="text-red-500">*</span>
//               </label>
//               <input
//                 name="postalCode"
//                 required
//                 placeholder="Postal Code"
//                 value={address.postalCode}
//                 onChange={handleChange}
//                 className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-yellow-500 focus:border-yellow-500"
//               />
//             </div>

//             <div>
//               <label className="block text-sm font-medium text-gray-700 mb-1">
//                 Country <span className="text-red-500">*</span>
//               </label>
//               <div className="flex items-center px-3 border rounded-md">
//                 <FaGlobe className="text-gray-400 mr-2" />
//                 <input
//                   name="country"
//                   required
//                   placeholder="Country"
//                   value={address.country}
//                   onChange={handleChange}
//                   className="w-full py-2 focus:outline-none"
//                 />
//               </div>
//             </div>
//           </div>

//           {/* Contact */}
//           <div>
//             <label className="block text-sm font-medium text-gray-700 mb-1">
//               Contact Number
//             </label>
//             <div className="flex items-center px-3 border rounded-md">
//               <FaPhoneAlt className="text-gray-400 mr-2" />
//               <input
//                 name="contact"
//                 placeholder="+91 12345 67890"
//                 value={address.contact}
//                 onChange={handleChange}
//                 className="w-full py-2 focus:outline-none"
//               />
//             </div>
//           </div>

//           {/* Submit Button */}
//           <div>
//             <button
//               type="submit"
//               className="w-full mt-4 bg-yellow-500 hover:bg-yellow-600 text-white font-semibold py-3 rounded-md shadow-md transition"
//             >
//               Save Address
//             </button>
//           </div>
//         </form>
//       </div>
//     </div>
//   );
// }

import React, { useState, useContext } from "react";
import {
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaGlobe,
  FaCity,
  FaArrowLeft,
} from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { setUser } from "../../redux/slice/userSlice";
import axios from "axios";
import { MainContext } from "../../Context";

export default function UserAddress() {
  const navigate = useNavigate();
  const user = useSelector((state) => state.user?.data);
  const dispatch = useDispatch();
  const { isDark } = useContext(MainContext);

  const [address, setAddress] = useState({
    addressLine1: "",
    addressLine2: "",
    city: "",
    state: "",
    postalCode: "",
    country: "",
    contact: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setAddress((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!user?._id) {
      alert("Please log in first");
      return;
    }

    try {
      const res = await axios.post("http://localhost:5000/user/add-address", {
        user_id: user._id,
        shipping_address: address,
      });

      if (res.data.flag === 1) {
        alert("Address added successfully!");
        dispatch(setUser(res.data.user));
        navigate("/profile");
      } else {
        alert(res.data.msg || "Error adding address");
      }
    } catch (error) {
      console.error(error);
      alert("Failed to add address");
    }
  };

  return (
    <div
      className={`w-full max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 ${
        isDark ? "bg-[#1A2233] text-white" : "bg-white text-gray-800"
      }`}
    >
      <button
        onClick={() => navigate(-1)}
        className={`mb-6 flex items-center text-sm font-medium transition ${
          isDark
            ? "text-gray-300 hover:text-teal-300"
            : "text-gray-500 hover:text-yellow-500"
        }`}
      >
        <FaArrowLeft className="mr-2" />
        Back
      </button>

      <div
        className={`rounded-2xl shadow-2xl px-8 py-10 sm:px-10 sm:py-12 transition-all duration-300 ${
          isDark ? "bg-[#1F2A3C] text-white" : "bg-white text-gray-800"
        }`}
      >
        <h2 className="text-3xl font-semibold flex items-center gap-2 mb-10">
          <FaMapMarkerAlt className="text-yellow-500" />
          Shipping Address
        </h2>

        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Address Line 1 */}
          <div>
            <label className="block text-sm font-medium mb-1">
              Address Line 1 <span className="text-red-500">*</span>
            </label>
            <input
              name="addressLine1"
              required
              placeholder="123 Main Street"
              value={address.addressLine1}
              onChange={handleChange}
              className={`w-full px-4 py-3 border rounded-md shadow-sm focus:ring-yellow-500 focus:border-yellow-500 ${
                isDark
                  ? "bg-[#1A2233] border-gray-600 text-white"
                  : "border-gray-300"
              }`}
            />
          </div>

          {/* Address Line 2 */}
          <div>
            <label className="block text-sm font-medium mb-1">
              Address Line 2
            </label>
            <input
              name="addressLine2"
              placeholder="Apartment, Suite, etc. (optional)"
              value={address.addressLine2}
              onChange={handleChange}
              className={`w-full px-4 py-3 border rounded-md shadow-sm focus:ring-yellow-500 focus:border-yellow-500 ${
                isDark
                  ? "bg-[#1A2233] border-gray-600 text-white"
                  : "border-gray-300"
              }`}
            />
          </div>

          {/* City and State */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium mb-1">
                City <span className="text-red-500">*</span>
              </label>
              <div
                className={`flex items-center px-3 border rounded-md ${
                  isDark ? "bg-[#1A2233] border-gray-600" : "border-gray-300"
                }`}
              >
                <FaCity className="text-gray-400 mr-2" />
                <input
                  name="city"
                  required
                  placeholder="City"
                  value={address.city}
                  onChange={handleChange}
                  className={`w-full py-2 focus:outline-none ${
                    isDark ? "bg-[#1A2233] text-white" : ""
                  }`}
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium mb-1">
                State <span className="text-red-500">*</span>
              </label>
              <input
                name="state"
                required
                placeholder="State"
                value={address.state}
                onChange={handleChange}
                className={`w-full px-4 py-2 border rounded-md focus:ring-yellow-500 focus:border-yellow-500 ${
                  isDark
                    ? "bg-[#1A2233] border-gray-600 text-white"
                    : "border-gray-300"
                }`}
              />
            </div>
          </div>

          {/* Postal Code and Country */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium mb-1">
                Postal Code <span className="text-red-500">*</span>
              </label>
              <input
                name="postalCode"
                required
                placeholder="Postal Code"
                value={address.postalCode}
                onChange={handleChange}
                className={`w-full px-4 py-2 border rounded-md focus:ring-yellow-500 focus:border-yellow-500 ${
                  isDark
                    ? "bg-[#1A2233] border-gray-600 text-white"
                    : "border-gray-300"
                }`}
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-1">
                Country <span className="text-red-500">*</span>
              </label>
              <div
                className={`flex items-center px-3 border rounded-md ${
                  isDark ? "bg-[#1A2233] border-gray-600" : "border-gray-300"
                }`}
              >
                <FaGlobe className="text-gray-400 mr-2" />
                <input
                  name="country"
                  required
                  placeholder="Country"
                  value={address.country}
                  onChange={handleChange}
                  className={`w-full py-2 focus:outline-none ${
                    isDark ? "bg-[#1A2233] text-white" : ""
                  }`}
                />
              </div>
            </div>
          </div>

          {/* Contact */}
          <div>
            <label className="block text-sm font-medium mb-1">
              Contact Number
            </label>
            <div
              className={`flex items-center px-3 border rounded-md ${
                isDark ? "bg-[#1A2233] border-gray-600" : "border-gray-300"
              }`}
            >
              <FaPhoneAlt className="text-gray-400 mr-2" />
              <input
                name="contact"
                placeholder="+91 12345 67890"
                value={address.contact}
                onChange={handleChange}
                className={`w-full py-2 focus:outline-none ${
                  isDark ? "bg-[#1A2233] text-white" : ""
                }`}
              />
            </div>
          </div>

          {/* Submit */}
          <div>
            <button
              type="submit"
              className="w-full mt-4 bg-yellow-500 hover:bg-yellow-600 text-white font-semibold py-3 rounded-md shadow-md transition"
            >
              Save Address
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
