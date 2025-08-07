import React, { useContext } from "react";
import { MainContext } from "../../Context";
import Slider from "react-slick";
import { Link } from "react-router-dom";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import FrontCategorySidebar from "./FrontCategorySidebar";
// import HomeCategory from "./HomeCategory";

export default function TopCategories() {
  const { Categories, API_BASE_URL, darkMode } = useContext(MainContext);

  const wantedNames = [
    "Macbook",
    "Gaming PC",
    "Laptop Office",
    "Laptop 15’’",
    "M1 2023",
    "Secondhand",
  ];

  const filteredCategories = Categories.filter((cat) =>
    wantedNames.includes(cat?.name)
  );

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
    <div className="flex">
      {/* Left Sidebar */}
      <FrontCategorySidebar />
      {/* <div
        className={`w-80 shadow-xl rounded-2xl p-6 flex flex-col border transition-all duration-500 ${
          darkMode
            ? "bg-gradient-to-br from-black via-gray-900 to-black text-gray-200 border-gray-800"
            : "bg-white text-gray-900 border-gray-200"
        }`}
      >
        <h2
          className={`text-2xl font-semibold mb-4 ${
            darkMode ? "text-white" : "text-gray-800"
          }`}
        >
          Category
        </h2>
        <div className="h-1 w-16 bg-teal-400 mb-6 rounded-full"></div>

        {filteredCategories.map((category) => (
          <Link
            to={`/store/${category?.slug}`}
            key={category?._id}
            className={`flex items-center justify-between rounded-xl p-4 mb-4 shadow hover:shadow-lg transition-shadow ${
              darkMode ? "bg-[#2D3A4E]" : "bg-white"
            }`}
          >
            <div className="flex items-center gap-3">
              <img
                src={`${API_BASE_URL}/images/categories/${category?.Image}`}
                alt={category?.name}
                className="w-6 h-6 object-cover rounded"
              />
              <span
                className={`font-medium ${
                  darkMode ? "text-gray-200" : "text-gray-800"
                }`}
              >
                {category?.name}
              </span>
            </div>
            <div className="w-6 h-6 bg-teal-400 text-white rounded-full flex items-center justify-center text-sm font-bold">
              {category?.productCount}
            </div>
          </Link>
        ))}
      </div> */}

      {/* Right Section - Slider */}
      <div className="flex-1 ml-6 rounded-2xl overflow-hidden">
        <Slider {...sliderSettings}>
          {/* Slide 1 */}
          <div>
            <div
              className="w-full min-h-[600px] bg-cover bg-center rounded-2xl flex flex-col justify-center items-start p-10"
              style={{
                backgroundImage: "url('/About-Contact/i-phone-image.png')",
              }}
            >
              <Link to={"/store"}>
                <button className="cursor-pointer font-semibold border-white bg-white p-2 rounded-2xl text-black text-xl">
                  Shop Now
                </button>
              </Link>
            </div>
          </div>

          {/* Slide 2 */}
          <div>
            <div
              className="w-full min-h-[600px] bg-cover bg-center rounded-2xl flex flex-col justify-center items-start p-10"
              style={{
                backgroundImage: "url('/About-Contact/Multi-product.png')",
              }}
            >
              <Link to={"/store"}>
                <button className="cursor-pointer font-semibold border-white bg-black p-2 rounded-2xl text-white text-xl">
                  Shop Now
                </button>
              </Link>
            </div>
          </div>

          {/* Slide 3 */}
          <div>
            <div
              className="w-full min-h-[600px] bg-cover bg-center rounded-2xl flex flex-col justify-center items-start p-10"
              style={{ backgroundImage: "url('/img/Tabpanel.png')" }}
            ></div>
          </div>
        </Slider>
      </div>
    </div>
  );
}
