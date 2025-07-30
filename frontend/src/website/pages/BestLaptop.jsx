import React, { useContext } from "react";
import { MainContext } from "../../Context";
import { Link } from "react-router-dom";

export default function BestLaptop() {
  const { products, Categories, API_BASE_URL } = useContext(MainContext);
  console.log(Categories);

  const wantedNames = [
    "Macbook",
    "Gaming PC",
    "Laptop Office",
    "Laptop 15’’",
    "M1 2023",
    "Secondhand",
  ];
  const wantedProducts = [
    "68807378cbae78b86e2a72d7",
    "68807449cbae78b86e2a72db",
    "68808f5387a5526be8904072",
    "68808fab87a5526be89040b0",
    "688074cacbae78b86e2a72df",
  ];
  const filteredProducts = wantedProducts
    .map((id) => products.find((p) => p._id === id))
    .filter(Boolean);

  const filteredCategories = Categories.filter((cat) =>
    wantedNames.includes(cat?.name)
  );
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
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 text-xs ml-8 mb-7">
            {filteredCategories.map((category) => (
              <div className="flex items-center justify-between  p-2 rounded">
                <Link
                  className="gap-2 flex items-center justify-between  p-2 rounded"
                  to={`/store/${category?.slug}`}
                  key={category?._id}
                >
                  <div>
                    <p className="font-semibold text-sm">{category.name}</p>
                    <span className="text-[11px] text-gray-500">
                      {category.productCount} items
                    </span>
                  </div>
                  <img
                    src={`${API_BASE_URL}/images/Categories/${category?.Image}`}
                    alt=""
                    className="w-12 h-12 object-contain"
                  />
                </Link>
              </div>
            ))}
          </div>
        </div>

        {/* Products List */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {/* Card 1 */}
          {filteredProducts.map((product) => (
            <Link to={`/productdetailpage/${product._id}`}>
              <div className="relative  rounded-lg p-3 shadow-sm hover:shadow-md transition">
                <span className="absolute top-2 left-2 bg-black text-white text-[11px] font-semibold px-2 py-1 rounded">
                  Saving: ₹{product?.originalPrice - product?.finalPrice}
                </span>

                <img
                  src={`${API_BASE_URL}/images/product/${product.thumbnail}`}
                  alt=""
                  className="w-full h-50 rounded mb-2"
                />
                <p className="text-center text-xs text-gray-500">
                  {product.productcount}
                </p>
                <h4 className="text-sm font-semibold mt-1">{product.name}</h4>

                <div className="text-sm flex flex-col gap-1 mt-1">
                  <div>
                    <span className="text-green-600 font-bold">
                      {product?.originalPrice}
                    </span>
                  </div>
                  <div className="text-[11px] text-gray-500">FREE SHIPPING</div>
                  <div className="text-[11px] text-gray-600">In stock</div>
                </div>
              </div>
            </Link>
          ))}

          {/* Card 2 */}

          {/* Card 3 */}

          {/* Card 5 */}
        </div>
      </div>
    </>
  );
}
