import React, { useContext } from "react";
import { MainContext } from "../../Context";

export default function ContactUs() {
  const { isDark } = useContext(MainContext);

  const bgMain = isDark ? "bg-[#1A2233]" : "bg-white";
  const cardBg = isDark ? "bg-[#1F2A3C]" : "bg-gray-100";
  const textMuted = isDark ? "text-[#9CA3AF]" : "text-gray-600";
  const textPrimary = isDark ? "text-[#17C3B2]" : "text-teal-600";
  const inputBg = isDark ? "bg-[#1A2233]" : "bg-white";
  const inputBorder = isDark ? "border-[#17C3B2]" : "border-gray-300";
  const inputText = isDark ? "text-white" : "text-gray-800";
  const mapBg = isDark ? "bg-[#1F2A3C]" : "bg-gray-100";

  return (
    <div className={`${bgMain} p-4 md:p-8 space-y-8 ${textMuted}`}>
      {/* Contact Form and Info */}
      <div
        className={`${cardBg} rounded-xl shadow-md p-6 grid grid-cols-1 md:grid-cols-3 gap-6`}
      >
        {/* Form */}
        <div className="md:col-span-2 space-y-4">
          <h2 className={`font-semibold text-lg ${textPrimary}`}>
            READY TO WORK WITH US
          </h2>
          <p className="text-sm">
            Contact us for all your questions and opinions
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <input
              type="text"
              placeholder="First Name *"
              className={`${inputBg} ${inputBorder} ${inputText} border rounded px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[#17C3B2]`}
            />
            <input
              type="text"
              placeholder="Last Name *"
              className={`${inputBg} ${inputBorder} ${inputText} border rounded px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[#17C3B2]`}
            />
          </div>
          <input
            type="email"
            placeholder="Email Address *"
            className={`${inputBg} ${inputBorder} ${inputText} w-full border rounded px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[#17C3B2]`}
          />
          <input
            type="tel"
            placeholder="Phone Number (Optional)"
            className={`${inputBg} ${inputBorder} ${inputText} w-full border rounded px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[#17C3B2]`}
          />
          <select
            className={`${inputBg} ${inputBorder} ${inputText} w-full border rounded px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[#17C3B2]`}
          >
            <option>United States (US)</option>
            <option>United Kingdom (UK)</option>
            <option>India</option>
            <option>Other</option>
          </select>
          <input
            type="text"
            placeholder="Subject (Optional)"
            className={`${inputBg} ${inputBorder} ${inputText} w-full border rounded px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[#17C3B2]`}
          />
          <textarea
            placeholder="Note about your order, e.g. special note for delivery"
            className={`${inputBg} ${inputBorder} ${inputText} w-full border rounded px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[#17C3B2]`}
            rows="4"
          ></textarea>
          <div className="flex items-start space-x-2">
            <input type="checkbox" className="mt-1" />
            <p className="text-xs">
              I want to receive news and updates once in a while. By submitting,
              I’m agreed to the{" "}
              <span className="text-[#2AE89E] underline cursor-pointer">
                Terms & Conditions
              </span>
            </p>
          </div>
          <button className="bg-[#17C3B2] text-[#1A2233] px-4 py-2 rounded text-sm font-semibold hover:bg-[#13a99d]">
            SEND MESSAGE
          </button>
        </div>

        {/* Info & Image */}
        <div className="space-y-4">
          <div className={`${inputBg} rounded-xl p-4 space-y-4 ${textMuted}`}>
            <div>
              <h4 className={`font-semibold text-xs ${textPrimary}`}>
                UNITED STATES (HEAD QUARTER)
              </h4>
              <p className="text-xs">
                152 Thatcher Road St, Mahattan, 10463, US
              </p>
              <p className="text-xs">(+025) 3886 25 16</p>
              <p className="text-xs text-[#2AE89E]">hello@swattechmart.com</p>
            </div>
            <div>
              <h4 className={`font-semibold text-xs ${textPrimary}`}>
                UNITED KINGDOM (BRANCH)
              </h4>
              <p className="text-xs">
                12 Buckingham Rd, Thornthwaite, HG3 4TY, UK
              </p>
              <p className="text-xs">(+718)-895-5350</p>
              <p className="text-xs text-[#2AE89E]">
                contact@swattechmart.co.uk
              </p>
            </div>
            <div className="flex space-x-2 text-[#2AE89E] text-xl">
              <i className="fab fa-twitter"></i>
              <i className="fab fa-facebook"></i>
              <i className="fab fa-instagram"></i>
              <i className="fab fa-youtube"></i>
            </div>
          </div>

          <div className="rounded-xl overflow-hidden">
            <img
              src="/About-Contact/contact.png"
              alt="Laptop"
              className="object-cover w-full h-full"
            />
          </div>
        </div>
      </div>

      {/* Google Map */}
      <div className={`${mapBg} rounded-xl shadow-md overflow-hidden`}>
        <h4 className={`font-semibold p-4 ${textPrimary}`}>
          FIND US ON GOOGLE MAP
        </h4>
        <iframe
          src="https://maps.google.com/maps?q=Chiesa%20di%20San%20Francesco&t=&z=13&ie=UTF8&iwloc=&output=embed"
          className="w-full h-64 md:h-96"
          allowFullScreen=""
          loading="lazy"
          title="Google Map"
        ></iframe>
      </div>
    </div>
  );
}
