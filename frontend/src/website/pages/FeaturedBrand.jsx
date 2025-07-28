import React, { useContext } from "react";
import { MainContext } from "../../Context";
import { Link } from "react-router-dom";

export default function FeaturedBrand() {
  const { Categories } = useContext(MainContext);
  const wantedNames = ["Monitors", "Headphone", "Gaming PC", "Laptop Office"];

  const filteredCategories = Categories.filter((cat) =>
    wantedNames.includes(cat?.name)
  );

  // local images in same order as wantedNames
  const localImages = [
      "/img/4 → Link → prod3.png.png",
      "/img/4 → Link → prod2.png.png",
      "/img/4 → Link → prod4.png.png",
      "/img/4 → Link → prod1.png.png",
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-8">
      {/* Featured Brands */}
      <div className="rounded-lg p-6 bg-white">
        <div className="flex justify-between items-center mb-4">
          <h3 className="text-lg font-bold">FEATURED BRANDS</h3>
          <a href="#" className="text-sm text-gray-600 hover:underline">
            View All
          </a>
        </div>
        <div className="grid grid-cols-5 gap-4 items-center">
          <img
            src="/ImagesForProducts/Cart-images/Link → logo4.png.png"
            alt="Jamk"
            className="h-8 object-contain"
          />
          <img
            src="/ImagesForProducts/Cart-images/Link → logo5.png.png"
            alt="Digitek"
            className="h-8 object-contain"
          />
          <img
            src="/ImagesForProducts/Cart-images/Link → logo1.png.png"
            alt="Tek React"
            className="h-8 object-contain"
          />
          <img
            src="/ImagesForProducts/Cart-images/Link → logo2.png.png"
            alt="Grafbase"
            className="h-8 object-contain"
          />
          <img
            src="/ImagesForProducts/Cart-images/Link → logo3.png.png"
            alt="Ohbear"
            className="h-8 object-contain"
          />
          <img
            src="/ImagesForProducts/Cart-images/Link → logo8.png.png"
            alt="Oak"
            className="h-8 object-contain"
          />
          <img
            src="/ImagesForProducts/Cart-images/Link → logo7.png.png"
            alt="Snyk"
            className="h-8 object-contain"
          />
          <img
            src="/ImagesForProducts/Cart-images/Link → logo8.png.png"
            alt="Sonex"
            className="h-8 object-contain"
          />
          <img
            src="/ImagesForProducts/Cart-images/Link → logo9.png.png"
            alt="Stropi"
            className="h-8 object-contain"
          />
          <img
            src="/ImagesForProducts/Cart-images/Link → logo10.png.png"
            alt="MSI"
            className="h-8 object-contain"
          />
        </div>
      </div>

      {/* Top Categories */}
      <div className="rounded-lg p-4 bg-white">
        <div className="flex justify-between items-center mb-4">
          <h3 className="text-lg font-bold">TOP CATEGORIES</h3>
          <a href="#" className="text-sm text-gray-600 hover:underline">
            View All
          </a>
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
