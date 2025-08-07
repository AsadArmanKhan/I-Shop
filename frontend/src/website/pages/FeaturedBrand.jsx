import React, { useContext } from "react";
import { MainContext } from "../../Context";
import { Link } from "react-router-dom";

export default function FeaturedBrand() {
  const { Categories, isDark } = useContext(MainContext);

  const wantedNames = ["Monitors", "Headphone", "Gaming PC", "Laptop Office"];
  const filteredCategories = Categories.filter((cat) =>
    wantedNames.includes(cat?.name)
  );

  // Local images in same order as wantedNames
  const localImages = [
    "/img/4 → Link → prod3.png.png",
    "/img/4 → Link → prod2.png.png",
    "/img/4 → Link → prod4.png.png",
    "/img/4 → Link → prod1.png.png",
  ];

  const backgroundClass = isDark
    ? "bg-[#1F2A3C] text-white border border-[#2C3A52]"
    : "bg-white text-black border border-gray-200";

  const cardClass = isDark ? "bg-[#273245] text-white" : "bg-white text-black";

  const linkTextClass = isDark ? "text-gray-300" : "text-gray-600";

  return (
    <div
      className={`grid ${backgroundClass}  grid-cols-1 md:grid-cols-2 gap-4 mt-8 rounded-2xl`}
    >
      {/* Featured Brands */}
      <div className={`rounded-lg p-6 shadow-2xl  ${cardClass}`}>
        <div className="flex justify-between items-center mb-4">
          <h3 className="text-lg font-bold">FEATURED BRANDS</h3>
          <Link
            to={"/store"}
            href="#"
            className={`text-sm hover:underline ${linkTextClass}`}
          >
            View All
          </Link>
        </div>
        <div className="grid grid-cols-5 gap-4 items-center">
          {[
            "logo4",
            "logo5",
            "logo1",
            "logo2",
            "logo3",
            "logo8",
            "logo7",
            "logo8",
            "logo9",
            "logo10",
          ].map((logo, index) => (
            <img
              key={index}
              src={`/ImagesForProducts/Cart-images/Link → ${logo}.png.png`}
              alt={`Brand ${index}`}
              className="h-8 object-contain"
            />
          ))}
        </div>
      </div>

      {/* Top Categories */}
      <div className={`rounded-lg shadow-2xl  p-4 ${cardClass}`}>
        <div className="flex justify-between items-center mb-4">
          <h3 className="text-lg font-bold">TOP CATEGORIES</h3>
          <Link
            to={"/store"}
            href="#"
            className={`text-sm hover:underline ${linkTextClass}`}
          >
            View All
          </Link>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
          {filteredCategories.map((category, index) => (
            <Link to={`/store/${category?.slug}`} key={category?._id}>
              <div className="flex flex-col items-center">
                <img
                  src={localImages[index]}
                  alt={category?.name}
                  className="h-16 object-contain"
                />
                <span className="mt-2 font-medium">{category?.name}</span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
