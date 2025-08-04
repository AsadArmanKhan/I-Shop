import React, { useContext } from "react";
import { Link } from "react-router-dom";
import Slider from "react-slick";
import { MainContext } from "../../Context";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function TopSells() {
  const { Categories, API_BASE_URL } = useContext(MainContext);

  const categories = [
    { label: "iPhone (iOS)", img: "Link → prod20.png.png", slug: "iphone" },
    { label: "Android", img: "Link → prod21.png.png", slug: "android" },
    { label: "5G Support", img: "Link → prod22.png.png", slug: "5g-support" },
    { label: "Apple Tablets", img: "Link → prod62.png.png", slug: "ipad" },
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

  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    arrows: false,
  };

  return (
    <div className="container mx-auto my-10 px-4 sm:px-6 lg:px-8 py-8 space-y-8 rounded-xl shadow-xl bg-gray-900 text-white">
      {/* Header */}
      <h2 className="text-2xl font-bold tracking-wide text-yellow-400">
        TOP CELL PHONES & TABLETS
      </h2>

      {/* Banner Section */}
      <div className="grid grid-cols-3 gap-6 rounded-lg overflow-hidden">
        <div className="col-span-2">
          <Slider {...sliderSettings}>
            {/* Slide 1 */}
            <div className="relative flex items-center justify-center rounded-xl shadow-xl overflow-hidden">
              <img
                src="/public/ImagesForProducts/slider3.png"
                alt="Headphone"
                className="rounded-xl h-90 w-full  opacity-90"
              />
              <div className="absolute left-30 top-1/4 max-w-lg space-y-2">
                <h3 className="text-2xl font-bold text-yellow-400">
                  Noise Cancelling
                </h3>
                <p className="text-xl text-white">Headphone</p>
                <p className="mt-2 text-sm text-gray-200">
                  Boso Over-Ear Headphone
                  <br />
                  Wifi, Voice Assistant,
                  <br />
                  Low Latency Game Mode
                </p>
                <button className="mt-4 bg-yellow-500 text-black px-4 py-2 rounded-full text-sm font-medium shadow hover:bg-yellow-600 transition">
                  BUY NOW
                </button>
              </div>
            </div>

            {/* Slide 2 */}
            <div className="relative flex items-center justify-center rounded-xl shadow-xl overflow-hidden">
              <img
                src="/About-Contact/i-phone-image.png"
                alt="Headphone"
                className="rounded-xl h-90 w-full  opacity-90"
              />
              <div className="absolute left-30 top-1/4 max-w-lg space-y-2">
                <h3 className="text-2xl font-bold text-yellow-400">
                  New Arrival
                </h3>
                <p className="text-xl text-white">Best Sound Quality</p>
                <p className="mt-2 text-sm text-gray-200">
                  Crystal Clear Bass
                  <br />
                  Immersive Audio
                </p>
                <button className="mt-4 bg-yellow-500 text-black px-4 py-2 rounded-full text-sm font-medium shadow hover:bg-yellow-600 transition">
                  SHOP NOW
                </button>
              </div>
              {/* <div className="absolute bottom-6 right-4 text-sm bg-yellow-500 text-black px-7 py-1 rounded-full shadow">
                2 / 3
              </div> */}
            </div>
          </Slider>
        </div>

        {/* Right side promo */}
        <div className="rounded-xl relative shadow-lg flex bg-gray-800">
          <img
            src="/public/ImagesForProducts/div.img.png"
            alt="Redmi phones"
            className="h-90 w-full "
          />
          <div className="absolute bottom-50 left-4 space-y-1">
            <h3 className="text-lg text-yellow-400 font-semibold">
              Redmi Note 12 Pro+ 5G
            </h3>
            <p className="text-l text-black">Rise to the challenge</p>
            <button className="mt-2 bg-yellow-500 text-black px-3 py-1.5 text-xs rounded-3xl hover:bg-yellow-600 transition">
              SHOP NOW
            </button>
          </div>
        </div>
      </div>

      {/* Popular Categories */}
      <div>
        <h2 className="text-lg font-bold mb-4 tracking-wide text-yellow-400">
          POPULAR CATEGORIES
        </h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 text-center">
          {categories.map((cat, idx) => (
            <Link key={idx} to={`/store/${cat.slug}`}>
              <div className="p-4 font-bold text-xs sm:text-sm gap-2 flex flex-col items-center justify-center rounded-lg hover:scale-105 transform transition shadow-md bg-gray-800 text-white hover:bg-yellow-500 hover:text-black">
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
