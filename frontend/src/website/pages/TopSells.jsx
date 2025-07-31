import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { MainContext } from "../../Context";

export default function TopSells() {
  const { Categories, API_BASE_URL } = useContext(MainContext);

  // Static category data matching your images & labels
  const categories = [
    { label: "iPhone (iOS)", img: "Link → prod20.png.png", slug: "iphone" },
    { label: "Android", img: "Link → prod21.png.png", slug: "android" },
    { label: "5G Support", img: "Link → prod22.png.png", slug: "5g-support" },
    {
      label: "Apple Tablets",
      img: "Link → prod62.png.png",
      slug: "ipad",
    },
    {
      label: "Smartphone Chargers",
      img: "Link → prod63.png.png",
      slug: "charger",
    },
    {
      label: "Gaming",
      img: "Link → prod23.png.png",
      slug: "gaming-smartphones",
    },
    { label: "Xiaomi", img: "Link → prod24.png.png", slug: "xiaomi" },
    { label: "Accessories", img: "Link → prod25.png.png", slug: "accessories" },
    {
      label: "Samsung Tablets",
      img: "Link → prod27.png.png",
      slug: "window-tablets",
    },
    { label: "eReader", img: "Link → prod64.png.png", slug: "eReader" },
  ];

  return (
    <div className="container max-w-7xl mx-auto my-10 px-4 sm:px-6 lg:px-8 py-8 space-y-8 rounded-xl shadow-xl">
      {/* Header */}
      <h2 className="text-2xl font-bold tracking-wide">
        TOP CELL PHONES & TABLETS
      </h2>

      {/* Banner Section (keep as you had) */}
      <div className="grid grid-cols-3 gap-6 rounded-lg overflow-hidden">
        <div className="col-span-2 relative flex items-center justify-center rounded-xl shadow-xl overflow-hidden">
          <img
            src="/public/ImagesForProducts/slider3.png"
            alt="Headphone"
            className="rounded-xl h-72 object-contain opacity-90"
          />
          <div className="absolute left-10 top-1/4 max-w-xs space-y-2">
            <h3 className="text-2xl font-bold text-white">Noise Cancelling</h3>
            <p className="text-xl text-white">Headphone</p>
            <p className="mt-2 text-sm text-white">
              Boso Over-Ear Headphone
              <br />
              Wifi, Voice Assistant,
              <br />
              Low Latency Game Mode
            </p>
            <button className="mt-4 bg-black text-white px-4 py-2 rounded-full text-sm font-medium shadow hover:bg-[#d97706] transition">
              BUY NOW
            </button>
          </div>
          <div className="absolute bottom-6 right-4 text-sm bg-white text-black px-7 py-1 rounded-full shadow">
            3 / 3
          </div>
        </div>
        <div className="rounded-xl relative shadow-lg flex">
          <img
            src="/public/ImagesForProducts/div.img.png"
            alt="Redmi phones"
            className="h-80 object-contain"
          />
          <div className="absolute bottom-4 left-4 space-y-1">
            <h3 className="text-lg text-black font-semibold">
              Redmi Note 12 Pro+ 5G
            </h3>
            <p className="text-xs text-gray-400">Rise to the challenge</p>
            <button className="mt-2 bg-black text-white px-3 py-1.5 text-xs rounded-3xl hover:bg-[#d97706] transition">
              SHOP NOW
            </button>
          </div>
        </div>
      </div>

      {/* Popular Categories */}
      <div>
        <h2 className="text-lg font-bold mb-4 tracking-wide text-[#facc15]">
          POPULAR CATEGORIES
        </h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 text-center">
          {categories.map((cat, idx) => (
            <Link key={idx} to={`/store/${cat.slug}`}>
              <div className="p-4 font-bold text-xs sm:text-sm gap-2 flex flex-col items-center justify-center rounded-lg hover:scale-105 transform transition shadow-md hover:shadow-black bg-white">
                {cat.label}
                <img
                  src={`/public/ImagesForProducts/${cat.img}`}
                  alt={cat.label}
                  className="h-10 sm:h-14 md:h-16 object-contain"
                />
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
