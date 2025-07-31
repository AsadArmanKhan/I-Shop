import React from "react";

export default function ContactUs() {
  return (
    <div className="bg-gray-100 p-4 md:p-8 space-y-8">
      {/* Contact Form and Info */}
      <div className="bg-white rounded-xl shadow-md p-6 grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Form */}
        <div className="md:col-span-2 space-y-4">
          <h2 className="font-semibold text-lg">READY TO WORK WITH US</h2>
          <p className="text-gray-600 text-sm">
            Contact us for all your questions and opinions
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <input
              type="text"
              placeholder="First Name *"
              className="border rounded px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-teal-500"
            />
            <input
              type="text"
              placeholder="Last Name *"
              className="border rounded px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-teal-500"
            />
          </div>
          <input
            type="email"
            placeholder="Email Address *"
            className="w-full border rounded px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-teal-500"
          />
          <input
            type="tel"
            placeholder="Phone Number (Optional)"
            className="w-full border rounded px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-teal-500"
          />
          <select className="w-full border rounded px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-teal-500">
            <option>United States (US)</option>
            <option>United Kingdom (UK)</option>
            <option>India</option>
            <option>Other</option>
          </select>
          <input
            type="text"
            placeholder="Subject (Optional)"
            className="w-full border rounded px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-teal-500"
          />
          <textarea
            placeholder="Note about your order, e.g. special note for delivery"
            className="w-full border rounded px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-teal-500"
            rows="4"
          ></textarea>
          <div className="flex items-start space-x-2">
            <input type="checkbox" className="mt-1" />
            <p className="text-xs text-gray-600">
              I want to receive news and updates once in a while. By submitting,
              I’m agreed to the{" "}
              <span className="text-green-500 underline cursor-pointer">
                Terms & Conditions
              </span>
            </p>
          </div>
          <button className="bg-teal-500 text-white px-4 py-2 rounded text-sm font-semibold">
            SEND MESSAGE
          </button>
        </div>

        {/* Info & Image */}
        <div className="space-y-4">
          {/* Info Boxes */}
          <div className="bg-gray-100 rounded-xl p-4 space-y-4">
            <div>
              <h4 className="font-semibold text-xs text-gray-700">
                UNITED STATES (HEAD QUARTER)
              </h4>
              <p className="text-xs text-gray-600">
                152 Thatcher Road St, Mahattan, 10463, US
              </p>
              <p className="text-xs text-gray-600">(+025) 3886 25 16</p>
              <p className="text-xs text-teal-600">hello@swattechmart.com</p>
            </div>
            <div>
              <h4 className="font-semibold text-xs text-gray-700">
                UNITED KINGDOM (BRANCH)
              </h4>
              <p className="text-xs text-gray-600">
                12 Buckingham Rd, Thornthwaite, HG3 4TY, UK
              </p>
              <p className="text-xs text-gray-600">(+718)-895-5350</p>
              <p className="text-xs text-teal-600">
                contact@swattechmart.co.uk
              </p>
            </div>
            {/* Social icons */}
            <div className="flex space-x-2 text-gray-500 text-xl">
              <i className="fab fa-twitter"></i>
              <i className="fab fa-facebook"></i>
              <i className="fab fa-instagram"></i>
              <i className="fab fa-youtube"></i>
            </div>
          </div>
          {/* Image */}
          <div className="rounded-xl overflow-hidden">
            <img
              src="/path/to/c7db0491-b324-4156-b2e2-5a280ca9f69d.png"
              alt="Laptop"
              className="object-cover w-full h-full"
            />
          </div>
        </div>
      </div>

      {/* Google Map */}
      <div className="bg-white rounded-xl shadow-md overflow-hidden">
        <h4 className="font-semibold p-4">FIND US ON GOOGLE MAP</h4>
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
