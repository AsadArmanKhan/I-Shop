import { FaMinus, FaPlus } from 'react-icons/fa';
import { BsDot } from 'react-icons/bs';
import { Link } from 'react-router-dom';

export default function Cart() {
  return (
    <div className="bg-[#f6f9fc] min-h-screen py-10">
      {/* Breadcrumb */}
      <div className="max-w-6xl mx-auto px-4">
      <div className="w-full max-w-6xl  my-5 bg-white shadow px-6 py-6 rounded-xl">
        <nav className="text-sm text-gray-500">
          <Link to={""}>
            <span className="font-semibold text-gray-700">Home</span>
          </Link>
          / <span>pages</span> / <span className="font-bold text-black">Register</span>
        </nav>
      </div>

        {/* Main Section */}
        <div className="flex flex-col lg:flex-row gap-6">
          {/* Left - Cart Items */}
          <div className="flex-1 space-y-4">
            {[1, 2, 3].map((_, i) => (
              <div key={i} className="bg-white rounded-lg p-4 flex flex-col md:flex-row items-center md:items-start shadow-sm">
                {/* Image */}
                <div className="w-32 h-32 mb-4 md:mb-0 md:mr-6 flex-shrink-0">
                  <img
                    src={`https://via.placeholder.com/150?text=Product+${i + 1}`}
                    alt="Product"
                    className="w-full h-full object-cover rounded"
                  />
                </div>

                {/* Info */}
                <div className="flex-1 w-full">
                  {/* Top Row */}
                  <div className="flex items-center justify-between mb-2">
                    <div className="text-xs font-semibold text-white bg-black px-2 py-0.5 rounded">{i === 0 ? 'SAVE $199.00' : 'NEW'}</div>
                    <div className="flex gap-2">
                      <div className="w-5 h-5 rounded-full bg-gray-200"></div>
                      <div className="w-5 h-5 rounded-full bg-red-100"></div>
                    </div>
                  </div>
                  <h2 className="font-semibold text-sm md:text-base leading-snug">Product Name Goes Here {i + 1}</h2>
                  <p className="text-[#f44336] font-semibold text-lg mt-1">${(i + 5) * 100}.00</p>

                  {/* Quantity + Info */}
                  <div className="mt-2 flex items-center flex-wrap gap-2 text-xs text-gray-600">
                    {i === 0 && (
                      <span className="bg-green-100 text-green-700 px-2 py-0.5 rounded">FREE SHIPPING</span>
                    )}
                    {i === 2 && (
                      <>
                        <span className="bg-green-100 text-green-700 px-2 py-0.5 rounded">FREE SHIPPING</span>
                        <span className="bg-pink-100 text-pink-600 px-2 py-0.5 rounded">FREE GIFT</span>
                      </>
                    )}
                    {i === 1 && (
                      <span className="bg-gray-100 text-gray-700 px-2 py-0.5 rounded">$2.86 SHIPPING</span>
                    )}
                    <span className="flex items-center text-green-600">
                      <BsDot className="text-xl" /> In stock
                    </span>
                  </div>

                  {/* Quantity Controls */}
                  <div className="mt-3 flex items-center gap-3">
                    <button className="bg-gray-100 p-2 rounded">
                      <FaMinus size={12} />
                    </button>
                    <span className="w-8 text-center">1</span>
                    <button className="bg-gray-100 p-2 rounded">
                      <FaPlus size={12} />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Right - Summary */}
          <div className="w-full lg:w-[300px]">
            <div className="bg-white p-6 rounded-lg border border-green-500">
              <h3 className="text-lg font-semibold mb-4">Order Summary</h3>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span>Sub Total:</span>
                  <span className="font-semibold">$1,000.00</span>
                </div>
                <div className="flex justify-between">
                  <span>Shipping estimate:</span>
                  <span>$600.00</span>
                </div>
                <div className="flex justify-between">
                  <span>Tax estimate:</span>
                  <span>$137.00</span>
                </div>
                <div className="flex justify-between font-bold text-black border-t pt-2 mt-2">
                  <span>ORDER TOTAL:</span>
                  <span>$1,737.00</span>
                </div>
              </div>
              <button className="w-full mt-4 bg-teal-500 text-white py-2 rounded hover:bg-teal-600 transition">CHECKOUT</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
