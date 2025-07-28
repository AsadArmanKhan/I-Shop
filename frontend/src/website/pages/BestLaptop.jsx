import React from "react";

export default function BestLaptop() {
  return (
    <>
      <div className="bg-white py-6 px-4 md:px-12 text-[#1a1a1a]">
        {/* Header */}
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-lg md:text-xl font-bold uppercase">
            Best Laptops & Computers
          </h2>
          <button className="text-sm text-gray-600 hover:underline">
            View All
          </button>
        </div>

        {/* Banner */}
        <div className="bg-gradient-to-r from-[#f4f1ef] to-[#d9e1ec] rounded-lg p-4 flex items-center mb-6">
          <div
            className="flex-1 relative w-full h-40 sm:h-48 md:h-52 rounded overflow-hidden flex items-center"
            style={{
              backgroundImage: "url('/ImagesForProducts/Store/prod19.png.png')",
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            <div className="ml-4 text-left text-white">
              <h1 className="text-2xl font-bold mb-1">Mobok 2</h1>
              <h1 className="text-2xl font-bold mb-1">Superchard</h1>
              <p className=" text-white text-3xl font-light px-32py-2 rounded">
                By M2
              </p>
            </div>
          </div>

          {/* Category Links */}
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-9 text-xs ml-8 mb-7">
            <div className="flex items-center justify-between  p-2 rounded">
              <div>
                <p className="font-semibold text-sm">iPhone (iOS)</p>
                <span className="text-[11px] text-gray-500">74 Items</span>
              </div>
              <img
                src="/ImagesForProducts/Link → prod20.png.png"
                alt=""
                className="w-12 h-12 object-contain"
              />
            </div>

            <div className="flex items-center justify-between  p-2 rounded">
              <div>
                <p className="font-semibold text-sm">Android</p>
                <span className="text-[11px] text-gray-500">35 Items</span>
              </div>
              <img
                src="/ImagesForProducts/Link → prod21.png.png"
                alt=""
                className="w-12 h-12 object-contain"
              />
            </div>

            <div className="flex items-center justify-between  p-2 rounded">
              <div>
                <p className="font-semibold text-sm">5G Support</p>
                <span className="text-[11px] text-gray-500">12 Items</span>
              </div>
              <img
                src="/ImagesForProducts/Link → prod22.png.png"
                alt=""
                className="w-12 h-12 object-contain"
              />
            </div>

            <div className="flex items-center justify-between  p-2 rounded">
              <div>
                <p className="font-semibold text-sm">Gaming</p>
                <span className="text-[11px] text-gray-500">9 Items</span>
              </div>
              <img
                src="/ImagesForProducts/Link → prod23.png.png"
                alt=""
                className="w-12 h-12 object-contain"
              />
            </div>

            <div className="flex items-center justify-between  p-2 rounded">
              <div>
                <p className="font-semibold text-sm">Xiaomi</p>
                <span className="text-[11px] text-gray-500">52 Items</span>
              </div>
              <img
                src="/ImagesForProducts/Link → prod24.png.png"
                alt=""
                className="w-12 h-12 object-contain"
              />
            </div>

            <div className="flex items-center justify-between  p-2 rounded">
              <div>
                <p className="font-semibold text-sm">Accessories</p>
                <span className="text-[11px] text-gray-500">29 Items</span>
              </div>
              <img
                src="/ImagesForProducts/Link → prod25.png.png"
                alt=""
                className="w-12 h-12 object-contain"
              />
            </div>
          </div>
        </div>

        {/* Products List */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {/* Card 1 */}
          <div className="relative  rounded-lg p-3 shadow-sm hover:shadow-md transition">
            <span className="absolute top-2 left-2 bg-black text-white text-[11px] font-semibold px-2 py-1 rounded">
              NEW
            </span>
            <div className="w-full h-40 bg-gray-200 rounded mb-2" />
            <p className="text-center text-xs text-gray-500">(152)</p>
            <h4 className="text-sm font-semibold mt-1">
              Pineapple Macbook Pro 2022 M1 / 512 GB
            </h4>
            <div className="text-sm flex flex-col gap-1 mt-1">
              <div>
                <span className="text-green-600 font-bold">$579.00</span>
              </div>
              <div className="text-[11px] text-gray-500">FREE SHIPPING</div>
              <div className="text-[11px] text-gray-600">In stock</div>
            </div>
          </div>

          {/* Card 2 */}
          <div className="relative  rounded-lg p-3 shadow-sm hover:shadow-md transition">
            <span className="absolute top-2 left-2 bg-black text-white text-[11px] font-semibold px-2 py-1 rounded">
              NEW
            </span>
            <div className="w-full h-40 bg-gray-200 rounded mb-2" />
            <h4 className="text-sm font-semibold mt-1">
              C&O Bluetooth Speaker
            </h4>
            <div className="text-sm flex flex-col gap-1 mt-1">
              <div>
                <span className="text-green-600 font-bold">$979.00</span>
              </div>
              <div className="text-[11px] text-gray-500">FREE SHIPPING</div>
              <div className="text-[11px] text-gray-600">In stock</div>
            </div>
          </div>

          {/* Card 3 */}
          <div className="relative  rounded-lg p-3 shadow-sm hover:shadow-md transition">
            <div className="w-full h-40 bg-gray-200 rounded mb-2" />
            <p className="text-center text-xs text-gray-500">(5)</p>
            <h4 className="text-sm font-semibold mt-1">
              Gigaby Custome Case, i7/16GB / SSD 256GB
            </h4>
            <div className="text-sm flex flex-col gap-1 mt-1">
              <div>
                <span className="text-green-600 font-bold">$1,259.00</span>
              </div>
              <div className="text-[11px] text-gray-500">FREE SHIPPING</div>
              <div className="text-[11px] text-blue-500 font-semibold">
                FREE GIFT
              </div>
              <div className="text-[11px] text-gray-600">In stock</div>
            </div>
          </div>

          {/* Card 4 */}
          <div className="relative  rounded-lg p-3 shadow-sm hover:shadow-md transition">
            <span className="absolute top-2 left-2 bg-black text-white text-[11px] font-semibold px-2 py-1 rounded">
              SAVE $59.00
            </span>
            <div className="w-full h-40 bg-gray-200 rounded mb-2" />
            <p className="text-center text-xs text-gray-500">(9)</p>
            <h4 className="text-sm font-semibold mt-1">BEOS PC Gaming Case</h4>
            <div className="text-sm flex flex-col gap-1 mt-1">
              <div>
                <span className="text-green-600 font-bold">$1,239.00</span>
                <span className="text-gray-400 line-through ml-2">
                  $1,619.00
                </span>
              </div>
              <div className="text-[11px] text-gray-500">$2.98 SHIPPING</div>
              <div className="text-[11px] text-gray-600">Contact</div>
            </div>
          </div>

          {/* Card 5 */}
          <div className="relative  rounded-lg p-3 shadow-sm hover:shadow-md transition">
            <div className="w-full h-40 bg-gray-200 rounded mb-2" />
            <p className="text-center text-xs text-gray-500">(8)</p>
            <h4 className="text-sm font-semibold mt-1">
              aMoc All-in-one Computer M1
            </h4>
            <div className="text-sm flex flex-col gap-1 mt-1">
              <div>
                <span className="text-green-600 font-bold">$1,729.00</span>
              </div>
              <div className="text-[11px] text-gray-500">FREE SHIPPING</div>
              <div className="text-[11px] text-gray-600">Contact</div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
