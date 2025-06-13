import React from "react";
import { FaLaptop, FaCameraRetro } from "react-icons/fa";
import { RiComputerFill } from "react-icons/ri";
import { GiVibratingSmartphone } from "react-icons/gi";
import { TbDeviceTabletShare } from "react-icons/tb";

const Card = () => {
  const categories = [
    { label: "Laptops", icon: <FaLaptop />, count: 1 },
    { label: "PC & Computers", icon: <RiComputerFill />, count: 2 },
    { label: "Cell Phones", icon: <GiVibratingSmartphone />, count: 3 },
    { label: "Tablets", icon: <TbDeviceTabletShare />, count: 4 },
    { label: "Cameras", icon: <FaCameraRetro />, count: 5 },
  ];
  return (
    <>
      <div className="flex flex-col  p-4 rounded-2xl overflow-hidden">
        <div className="flex">
          {/* Left Sidebar */}
          <div className="w-80 bg-white rounded-2xl shadow-md p-6 flex flex-col">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">Category</h2>
            <div className="h-1 w-16 bg-teal-400 mb-6 rounded-full"></div>

            {categories.map((item, index) => (
              <div
                key={index}
                className="flex items-center justify-between bg-white rounded-xl border p-4 mb-4 shadow hover:shadow-lg transition-shadow"
              >
                <div className="flex items-center gap-3">
                  <span className="text-2xl text-teal-600">{item.icon}</span>
                  <span className="text-gray-800 font-medium">{item.label}</span>
                </div>
                <div className="w-6 h-6 bg-teal-400 text-white rounded-full flex items-center justify-center text-sm font-bold">
                  {item.count}
                </div>
              </div>
            ))}
          </div>

          {/* Right Section */}
          <div className="flex-1 ml-6 rounded-2xl overflow-hidden relative">
            <div
              className="w-full h-full min-h-[500px] bg-cover bg-center rounded-2xl flex flex-col justify-center items-start p-10"
              style={{
                backgroundImage: "url('./img/Tabpanel.png')", // Update with actual path if needed
              }}
            >
            </div>
          </div>
        </div>

        {/* Featured Brands & Top Categories */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-8">
          {/* Featured Brands */}
          <div className="border rounded-lg p-6 bg-white">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-lg font-bold">FEATURED BRANDS</h3>
              <a href="#" className="text-sm text-gray-600 hover:underline">View All</a>
            </div>
            <div className="grid grid-cols-5 gap-4 items-center">
              <img src="/ImagesForProducts/Cart-images/Link → logo4.png.png" alt="Jamk" className="h-8 object-contain" />
              <img src="/ImagesForProducts/Cart-images/Link → logo5.png.png" alt="Digitek" className="h-8 object-contain" />
              <img src="/ImagesForProducts/Cart-images/Link → logo1.png.png" alt="Tek React" className="h-8 object-contain" />
              <img src="/ImagesForProducts/Cart-images/Link → logo2.png.png" alt="Grafbase" className="h-8 object-contain" />
              <img src="/ImagesForProducts/Cart-images/Link → logo3.png.png" alt="Ohbear" className="h-8 object-contain" />
              <img src="/ImagesForProducts/Cart-images/Link → logo8.png.png" alt="Oak" className="h-8 object-contain" />
              <img src="/ImagesForProducts/Cart-images/Link → logo7.png.png" alt="Snyk" className="h-8 object-contain" />
              <img src="/ImagesForProducts/Cart-images/Link → logo8.png.png" alt="Sonex" className="h-8 object-contain" />
              <img src="/ImagesForProducts/Cart-images/Link → logo9.png.png" alt="Stropi" className="h-8 object-contain" />
              <img src="/ImagesForProducts/Cart-images/Link → logo10.png.png" alt="MSI" className="h-8 object-contain" />
            </div>
          </div>

          {/* Top Categories */}
          <div className="border rounded-lg p-4 bg-white">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-lg font-bold">TOP CATEGORIES</h3>
              <a href="#" className="text-sm text-gray-600 hover:underline">View All</a>
            </div>
            <div className="flex justify-between items-center gap-4">
              <div className="flex flex-col items-center">
                <img src="/img/4 → Link → prod1.png.png" alt="Laptops" className="h-16 object-contain" />
                <span className="mt-2 font-medium">Laptops</span>
              </div>
              <div className="flex flex-col items-center">
                <img src="/img/4 → Link → prod2.png.png" alt="PC Gaming" className="h-16 object-contain" />
                <span className="mt-2 font-medium">PC Gaming</span>
              </div>
              <div className="flex flex-col items-center">
                <img src="/img/4 → Link → prod3.png.png" alt="Headphones" className="h-16 object-contain" />
                <span className="mt-2 font-medium">Headphones</span>
              </div>
              <div className="flex flex-col items-center">
                <img src="/img/4 → Link → prod4.png.png" alt="Monitors" className="h-16 object-contain" />
                <span className="mt-2 font-medium">Monitors</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* // Continue from the bottom of your original Card component... */}

      {/* Deals of the Day Section */}
      <div className="mt-10 bg-white rounded-2xl shadow-lg overflow-hidden">
        <div className="flex flex-col md:flex-row">
          {/* Product Info */}
          <div className="flex-1 p-6">
            <div className="">
              <h2 className=" p-5 rounded-xl text-white bg-teal-600 font-semibold mb-2">DEALS OF THE DAY</h2>

              <div className="flex flex-col md:flex-row items-center">
                {/* Product Images */}
                <div className="flex md:flex-col items-center gap-2 mr-6">
                  <div className="flex md:flex-col gap-2">
                    <img src="/img/prod5.png.png" alt="Thumb 1" className="w-10 h-16 object-contain" />
                    <img src="/img/4 → prod6.png.png" alt="Thumb 1" className="w-10 h-16 object-contain" />
                    <img src="/img/4 → prod7.png.png" alt="Thumb 2" className="w-10 h-16 object-contain" />
                    <img src="/img/4 → prod8.png.png" alt="Thumb 3" className="w-10 h-16 object-contain" />
                  </div>
                </div>
                <div className="flex-1 md:flex-col items-center gap-2 mr-6">
                  <img src="/img/prod5.png.png" alt="Main Phone" className="h-auto rounded-lg" />
                </div>
                {/* Product Details */}
                <div className="flex-">
                  <h3 className="text-xl font-bold text-gray-800">
                    Xioma Redmi Note 11 Pro 256GB 2023, Black Smartphone
                  </h3>
                  <p className="text-teal-600 text-2xl font-bold mt-2">
                    $569.00 <span className="line-through text-gray-400 text-base ml-2">$750.00</span>
                  </p>
                  <span className="inline-block bg-teal-100 text-teal-600 font-bold px-3 py-1 text-sm rounded mt-1">
                    SAVE $199.00
                  </span>

                  <ul className="mt-4 space-y-1 text-sm text-gray-700 list-disc list-inside">
                    <li>Intel LGA 1700 Socket: Supports 13th & 12th Gen Intel Core</li>
                    <li>DDR5 Compatible: 4*SMD DIMMs with XMP 3.0 Memory</li>
                    <li>Commanding Power Design: Twin 16+1+2 Phases Digital VRM</li>
                  </ul>

                  <div className="flex gap-2 mt-3">
                    <span className="bg-gray-100 px-3 py-1 rounded text-xs font-medium">FREE SHIPPING</span>
                    <span className="bg-gray-100 px-3 py-1 rounded text-xs font-medium">FREE GIFT</span>
                  </div>

                  <div className="mt-4 text-sm font-semibold">
                    HURRY UP! PROMOTION WILL EXPIRE IN
                  </div>

                  {/* Countdown Timer (Static mock) */}
                  <div className="flex gap-2 mt-1 text-center text-xs">
                    <div className="bg-gray-200 rounded p-2">-162 <div className="text-[10px]">d</div></div>
                    <div className="bg-gray-200 rounded p-2">-9 <div className="text-[10px]">h</div></div>
                    <div className="bg-gray-200 rounded p-2">-3 <div className="text-[10px]">m</div></div>
                    <div className="bg-gray-200 rounded p-2">-4 <div className="text-[10px]">s</div></div>
                  </div>

                  {/* Progress bar */}
                  <div className="mt-4">
                    <div className="h-2 bg-gray-200 rounded-full">
                      <div className="h-2 bg-teal-500 rounded-full w-[35%]"></div>
                    </div>
                    <div className="text-sm text-gray-600 mt-1">Sold: <strong>26/75</strong></div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Sidebar with Ads */}
          <div className="w-full md:w-64 bg-gray-100 p-4 flex flex-col gap-4">
            <img src="/img/Main → Section → Link → ban1.png.png" alt="Gamepad Sale" className="rounded-lg object-cover h-32 w-full" />
            <img src="/img/Main → Section → Link → ban2.png (1).png" alt="Magazine" className="rounded-lg object-cover h-32 w-full" />
            <img src="/img/Main → Section → Link → ban2.png.png" alt="Phone Angle" className="rounded-lg object-cover h-32 w-full" />
          </div>
        </div>

        {/* Pre Order Banner */}
        <div className="bg-teal-500 text-white p-6 flex items-center justify-between mt-4">
          <div>
            <h3 className="text-xl font-semibold">PRE ORDER</h3>
            <p className="text-sm">BE THE FIRST TO OWN</p>
            <p className="mt-1 text-sm font-bold">From $399</p>
          </div>
          <img src="/img/products/watch.png" alt="Smartwatch" className="h-20 object-contain" />
          <button className="bg-white text-teal-600 px-4 py-2 rounded-full text-sm font-semibold">Discover Now</button>
        </div>
      </div>



      {/* // Add this inside your Card component return() just after the last </div> of your existing code */}
      <div className="mt-12 bg-white p-6 rounded-2xl shadow-md">
        {/* Header */}
        <div className="flex justify-between items-center mb-6">
          <div className="flex gap-6">
            <h2 className="text-lg font-bold">BEST SELLER</h2>
            <span className="text-gray-500 cursor-pointer hover:text-black">NEW IN</span>
            <span className="text-gray-500 cursor-pointer hover:text-black">POPULAR</span>
          </div>
          <a href="#" className="text-sm text-gray-600 hover:underline">View All</a>
        </div>

        {/* Product Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {/* Card 1 */}
          <div className="relative flex flex-col items-center text-center p-4 border rounded-lg">
            <img src="/img/products/headphone.png" alt="Headphone" className="h-24 object-contain mb-2" />
            <p className="text-xs text-gray-400">(152)</p>
            <h3 className="font-semibold mt-1">BOSO 2 Wireless On Ear Headphone</h3>
            <p className="text-lg font-bold mt-1">$359.00</p>
            <div className="flex gap-2 justify-center mt-2">
              <span className="bg-teal-50 text-teal-500 text-xs font-semibold px-2 py-1 rounded-full">FREE SHIPPING</span>
              <span className="bg-teal-50 text-teal-500 text-xs font-semibold px-2 py-1 rounded-full">FREE GIFT</span>
            </div>
            <div className="flex items-center justify-center gap-1 text-sm text-green-600 mt-2">
              <span className="w-2 h-2 bg-teal-500 rounded-full"></span> In stock
            </div>
            <div className="flex gap-2 mt-2">
              <img src="/img/products/variant1.png" alt="variant" className="h-6 rounded-full" />
              <img src="/img/products/variant2.png" alt="variant" className="h-6 rounded-full" />
            </div>
          </div>

          {/* Card 2 */}
          <div className="relative flex flex-col items-center text-center p-4 border rounded-lg">
            <div className="absolute top-2 left-2 bg-teal-500 text-white text-xs font-bold px-2 py-1 rounded">SAVE $199.00</div>
            <img src="/img/products/ipad.png" alt="iPad" className="h-24 object-contain mb-2" />
            <p className="text-xs text-gray-400">(152)</p>
            <h3 className="font-semibold mt-1">OPod Pro 12.9 Inch M1 2023, 64GB + Wifi, GPS</h3>
            <div className="mt-1">
              <span className="text-teal-500 font-bold text-lg">$569.00</span>
              <span className="line-through text-gray-400 ml-2">$759.00</span>
            </div>
            <div className="flex gap-2 justify-center mt-2">
              <span className="bg-teal-50 text-teal-500 text-xs font-semibold px-2 py-1 rounded-full">FREE SHIPPING</span>
            </div>
            <div className="flex items-center justify-center gap-1 text-sm text-green-600 mt-2">
              <span className="w-2 h-2 bg-teal-500 rounded-full"></span> In stock
            </div>
          </div>

          {/* Card 3 */}
          <div className="relative flex flex-col items-center text-center p-4 border rounded-lg">
            <div className="absolute top-2 left-2 bg-teal-500 text-white text-xs font-bold px-2 py-1 rounded">SAVE $59.00</div>
            <img src="/img/products/macmini.png" alt="Mac Mini" className="h-24 object-contain mb-2" />
            <p className="text-xs text-gray-400">(8)</p>
            <h3 className="font-semibold mt-1">uLosk Mini case 2.0, Xenon i10 / 32GB / SSD 512GB / VGA 8GB</h3>
            <div className="mt-1">
              <span className="text-teal-500 font-bold text-lg">$1,729.00</span>
              <span className="line-through text-gray-400 ml-2">$2,110.00</span>
            </div>
            <div className="flex gap-2 justify-center mt-2">
              <span className="bg-teal-50 text-teal-500 text-xs font-semibold px-2 py-1 rounded-full">FREE SHIPPING</span>
            </div>
            <div className="flex items-center justify-center gap-1 text-sm text-red-500 mt-2">
              <span className="w-2 h-2 bg-red-500 rounded-full"></span> Out of stock
            </div>
          </div>

          {/* Card 4 */}
          <div className="relative flex flex-col items-center text-center p-4 border rounded-lg">
            <img src="/img/products/watch.png" alt="Smartwatch" className="h-24 object-contain mb-2" />
            <p className="text-xs text-gray-400">(—)</p>
            <h3 className="font-semibold mt-1">Opplo Watch Series 8 GPS + Cellular Stainless Steel Case with Milanese Loop</h3>
            <div className="mt-1 text-lg font-bold">$979.00 - $1,259.00</div>
            <div className="flex gap-2 justify-center mt-2">
              <span className="bg-gray-100 text-gray-700 text-xs font-semibold px-2 py-1 rounded-full">$2.98 SHIPPING</span>
            </div>
            <div className="text-sm text-gray-500 mt-1">PRE - ORDER</div>
          </div>

          {/* Card 5 */}
          <div className="relative flex flex-col items-center text-center p-4 border rounded-lg">
            <div className="absolute top-2 left-2 bg-teal-500 text-white text-xs font-bold px-2 py-1 rounded">SAVE $3.00</div>
            <img src="/img/products/charger.png" alt="Charger" className="h-24 object-contain mb-2" />
            <p className="text-xs text-gray-400">(9)</p>
            <h3 className="font-semibold mt-1">iSmart 24V Charger</h3>
            <div className="mt-1">
              <span className="text-teal-500 font-bold text-lg">$9.00</span>
              <span className="line-through text-gray-400 ml-2">$12.00</span>
            </div>
            <div className="flex gap-2 justify-center mt-2">
              <span className="bg-gray-100 text-gray-700 text-xs font-semibold px-2 py-1 rounded-full">$3.98 SHIPPING</span>
            </div>
            <div className="text-sm text-gray-500 mt-1">Contact</div>
          </div>
        </div>
      </div>


      <div className="bg-white py-6 px-4 md:px-12 text-[#1a1a1a]">
        {/* Header */}
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-lg md:text-xl font-bold uppercase">Top Cellphones & Tablets</h2>
          <button className="text-sm text-gray-600 hover:underline">View All</button>
        </div>

        {/* Banner */}
        <div className="bg-gradient-to-r from-[#f4f1ef] to-[#d9e1ec] rounded-lg p-4 flex items-center mb-6">
          <div className="flex-1">
            <h3 className="text-xl font-semibold mb-1">Redmi Note 12 Pro+ 5G</h3>
            <p className="text-sm text-gray-600 mb-2">Rise to the challenge</p>
            <button className="bg-black text-white text-xs px-4 py-2 rounded">Shop Now</button>
          </div>
          <img src="/mnt/data/d243cd44-a398-4f96-a74e-e5d86462336e.png" alt="Phones" className="w-52 object-contain hidden sm:block" />
        </div>

        {/* Category Links */}
        <div className="grid grid-cols-4 sm:grid-cols-6 gap-4 text-center text-xs mb-8">
          {[
            { label: "iPhone (iOS)", count: 74 },
            { label: "Android", count: 35 },
            { label: "5G Support", count: 12 },
            { label: "Gaming", count: 9 },
            { label: "Xiaomi", count: 52 },
            { label: "Accessories", count: 29 },
          ].map((cat, idx) => (
            <div key={idx} className="flex flex-col items-center gap-1">
              <div className="w-10 h-14 bg-gray-200 rounded-md" />
              <div>
                <p className="font-semibold text-sm">{cat.label}</p>
                <span className="text-[11px] text-gray-500">{cat.count} Items</span>
              </div>
            </div>
          ))}
        </div>

        {/* Products List */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {/* Product Cards */}
          {[
            {
              tag: "SAVE $199.00",
              title: "SROK Smart Phone 128GB, Oled Retina",
              price: "$579.00",
              oldPrice: "$859.00",
              shipping: "FREE SHIPPING",
              availability: "In stock",
              rating: 152,
            },
            {
              tag: "NEW",
              title: "aPod Pro Tablet 2023 LTE + Wifi, GPS Cellular 12.9 Inch, 512GB",
              price: "$979.00 - $1,259.00",
              shipping: "$2.98 SHIPPING",
              availability: "In stock",
              rating: null,
            },
            {
              title: "OPod Pro 12.9 Inch M1 2023, 64GB + Wifi, GPS",
              price: "$659.00",
              shipping: "FREE SHIPPING",
              gift: true,
              availability: "In stock",
              rating: 5,
            },
            {
              tag: "SAVE $59.00",
              title: "Xiaomi Redmi Note 5, 64GB",
              price: "$1,239.00",
              oldPrice: "$1,619.00",
              shipping: "FREE SHIPPING",
              availability: "Contact",
              rating: 9,
            },
            {
              title: "Microsute Alpha Ultra S5 Surface 128GB 2022, Sliver",
              price: "$1,729.00",
              shipping: "FREE SHIPPING",
              availability: "Contact",
              rating: 8,
            },
          ].map((item, idx) => (
            <div
              key={idx}
              className="relative border rounded-lg p-3 shadow-sm hover:shadow-md transition"
            >
              {item.tag && (
                <span className="absolute top-2 left-2 bg-teal-500 text-white text-[11px] font-semibold px-2 py-1 rounded">
                  {item.tag}
                </span>
              )}
              <div className="w-full h-40 bg-gray-200 rounded mb-2" />
              {item.rating !== null && (
                <p className="text-center text-xs text-gray-500">({item.rating})</p>
              )}
              <h4 className="text-sm font-semibold mt-1">{item.title}</h4>
              <div className="text-sm flex flex-col gap-1 mt-1">
                <div>
                  <span className="text-green-600 font-bold">{item.price}</span>
                  {item.oldPrice && (
                    <span className="text-gray-400 line-through ml-2">{item.oldPrice}</span>
                  )}
                </div>
                <div className="text-[11px] text-gray-500">{item.shipping}</div>
                {item.gift && (
                  <div className="text-[11px] text-blue-500 font-semibold">FREE GIFT</div>
                )}
                <div className="text-[11px] text-gray-600">{item.availability}</div>
              </div>
            </div>
          ))}
        </div>
      </div>


      <div className="bg-white py-6 px-4 md:px-12 text-[#1a1a1a]">
        {/* Header */}
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-lg md:text-xl font-bold uppercase">Best Laptops & Computers</h2>
          <button className="text-sm text-gray-600 hover:underline">View All</button>
        </div>

        {/* Banner */}
        <div className="bg-[#1a1a1a] text-white rounded-lg p-4 flex items-center mb-6">
          <div className="flex-1">
            <h3 className="text-xl font-semibold mb-1">Mobok 2 Superchard</h3>
            <p className="text-sm text-gray-300 mb-2">By M2</p>
            <p className="text-sm">Start from <span className="text-teal-400">$1,199</span></p>
          </div>
          <img src="/mnt/data/30b6a60f-e26f-4f60-87da-6ee7a7a49070.png" alt="Laptop" className="w-52 object-contain hidden sm:block" />
        </div>

        {/* Category Links */}
        <div className="grid grid-cols-4 sm:grid-cols-6 gap-4 text-center text-xs mb-8">
          {[
            { label: "Macbook", count: 74 },
            { label: "Gaming PC", count: 5 },
            { label: "Laptop Office", count: 22 },
            { label: "Laptop 15\"", count: 55 },
            { label: "M1 2023", count: 32 },
            { label: "Secondhand", count: 16 },
          ].map((cat, idx) => (
            <div key={idx} className="flex flex-col items-center gap-1">
              <div className="w-10 h-14 bg-gray-200 rounded-md" />
              <div>
                <p className="font-semibold text-sm">{cat.label}</p>
                <span className="text-[11px] text-gray-500">{cat.count} Items</span>
              </div>
            </div>
          ))}
        </div>

        {/* Products List */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {/* Product Cards */}
          {[
            {
              tag: "NEW",
              title: "Pineapple Macbook Pro 2022 M1 / 512 GB",
              price: "$579.00",
              oldPrice: null,
              shipping: "FREE SHIPPING",
              availability: "In stock",
              rating: 152,
            },
            {
              tag: "NEW",
              title: "C&O Bluetooth Speaker",
              price: "$979.00",
              shipping: "FREE SHIPPING",
              availability: "In stock",
              rating: null,
            },
            {
              title: "Gigaby Custome Case, i7/16GB / SSD 256GB",
              price: "$1,259.00",
              shipping: "FREE SHIPPING",
              gift: true,
              availability: "In stock",
              rating: 5,
            },
            {
              tag: "SAVE $59.00",
              title: "BEOS PC Gaming Case",
              price: "$1,239.00",
              oldPrice: "$1,619.00",
              shipping: "$2.98 SHIPPING",
              availability: "Contact",
              rating: 9,
            },
            {
              title: "aMoc All-in-one Computer M1",
              price: "$1,729.00",
              shipping: "FREE SHIPPING",
              availability: "Contact",
              rating: 8,
            },
          ].map((item, idx) => (
            <div
              key={idx}
              className="relative border rounded-lg p-3 shadow-sm hover:shadow-md transition"
            >
              {item.tag && (
                <span className="absolute top-2 left-2 bg-black text-white text-[11px] font-semibold px-2 py-1 rounded">
                  {item.tag}
                </span>
              )}
              <div className="w-full h-40 bg-gray-200 rounded mb-2" />
              {item.rating !== null && (
                <p className="text-center text-xs text-gray-500">({item.rating})</p>
              )}
              <h4 className="text-sm font-semibold mt-1">{item.title}</h4>
              <div className="text-sm flex flex-col gap-1 mt-1">
                <div>
                  <span className="text-green-600 font-bold">{item.price}</span>
                  {item.oldPrice && (
                    <span className="text-gray-400 line-through ml-2">{item.oldPrice}</span>
                  )}
                </div>
                <div className="text-[11px] text-gray-500">{item.shipping}</div>
                {item.gift && (
                  <div className="text-[11px] text-blue-500 font-semibold">FREE GIFT</div>
                )}
                <div className="text-[11px] text-gray-600">{item.availability}</div>
              </div>
            </div>
          ))}
        </div>
      </div>



    </>


  );
};

export default Card;
