import React, { useContext, useState, useEffect } from "react";
import { MainContext } from "../../Context";
import { Link } from "react-router-dom";

export default function DealsOfDay() {
  const { products, API_BASE_URL } = useContext(MainContext);
  const singleProductIds = ["6879f3c4d6950506c96fdde8"];

  const filteredProducts = singleProductIds
    .map((id) => products.find((p) => p?._id === id))
    .filter(Boolean);

  return (
    <div className="mt-10 bg-gradient-to-br from-black via-gray-900 to-black text-gray-200 shadow-xl border border-gray-800 rounded-2xl overflow-hidden">
      <div className="flex flex-col md:flex-row">
        <div className="flex-1 p-6">
          <h2 className="p-4 rounded-xl bg-teal-600 font-semibold text-white mb-4">
            DEALS OF THE DAY
          </h2>

          {filteredProducts.map((product) => (
            <ProductBlock
              key={product._id}
              product={product}
              API_BASE_URL={API_BASE_URL}
            />
          ))}
        </div>

        {/* Right Sidebar Ads */}
        <div className="w-full md:w-64 bg-gray-800 p-4 flex flex-col gap-4">
          {["ban1.png.png", "ban2.png (1).png", "ban2.png.png"].map((img, idx) => (
            <img
              key={idx}
              src={`/img/Main → Section → Link → ${img}`}
              alt={`Ad ${idx + 1}`}
              className="rounded-lg object-cover h-32 w-full hover:opacity-90 transition"
            />
          ))}
        </div>
      </div>

      {/* Pre Order Banner */}
      <div className="bg-teal-600 text-white p-6 flex flex-col md:flex-row items-center justify-between mt-4">
        <div>
          <h3 className="text-xl font-semibold">PRE ORDER</h3>
          <p className="text-sm">BE THE FIRST TO OWN</p>
          <p className="mt-1 text-sm font-bold">From $399</p>
        </div>
        <div className="flex items-center gap-2">
          <img
            src="/img/banner.png.png"
            alt="Smartwatch"
            className="h-20 object-contain"
          />
          <div>
            <p className="text-[10px] md:text-xs leading-tight">
              Opplo Watch Sport <br /> Series 8
            </p>
            <p className="text-sm md:text-base font-medium">
              A healthy leap ahead
            </p>
          </div>
        </div>
        <Link to={"/store"}>
          <button className="bg-white text-teal-600 px-4 py-2 rounded-full text-sm font-semibold hover:bg-gray-100 transition">
            Discover Now
          </button>
        </Link>
      </div>
    </div>
  );
}

function ProductBlock({ product, API_BASE_URL }) {
  const [selectedImage, setSelectedImage] = useState(
    `${API_BASE_URL}/images/product/${product.thumbnail}`
  );
  const allImages = [product.thumbnail, ...(product.images || [])];

  const initialTime = 2 * 24 * 3600 + 4 * 3600 + 30 * 60 + 15;
  const [timeLeft, setTimeLeft] = useState(initialTime);

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => (prev > 0 ? prev - 1 : 0));
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const days = Math.floor(timeLeft / (24 * 3600));
  const hours = Math.floor((timeLeft % (24 * 3600)) / 3600);
  const minutes = Math.floor((timeLeft % 3600) / 60);
  const seconds = timeLeft % 60;

  return (
    <div className="flex flex-col md:flex-row items-center gap-6">
      {/* Thumbnails */}
      <div className="flex md:flex-col gap-2">
        {allImages.map((img, idx) => (
          <img
            key={idx}
            src={`${API_BASE_URL}/images/product/${img}`}
            alt={`Thumb ${idx + 1}`}
            className={`w-15 h-16 object-contain cursor-pointer border rounded 
              ${selectedImage.includes(img) ? "border-teal-500" : "border-gray-700"}`}
            onClick={() => setSelectedImage(`${API_BASE_URL}/images/product/${img}`)}
          />
        ))}
      </div>

      {/* Main Image */}
      <div className="flex-shrink-0">
        <img
          src={selectedImage}
          alt={product.name}
          className="h-auto rounded-lg max-w-[150px] border border-gray-700"
        />
      </div>

      {/* Product Details */}
      <div className="flex-1">
        <h3 className="text-xl font-bold text-gray-100">{product.name}</h3>
        <p className="text-teal-400 text-2xl font-bold mt-2">
          ₹{product.finalPrice}
          <span className="line-through text-gray-500 text-base ml-2">
            ₹{product.originalPrice}
          </span>
        </p>
        <span className="inline-block bg-teal-100 text-teal-700 font-bold px-3 py-1 text-sm rounded mt-1">
          SAVE ₹ {product.originalPrice - product.finalPrice}
        </span>

        <ul className="mt-4 space-y-1 text-sm text-gray-400 list-disc list-inside">
          <li>Intel LGA 1700 Socket: Supports 13th & 12th Gen Intel Core</li>
          <li>DDR5 Compatible: 4*SMD DIMMs with XMP 3.0 Memory</li>
          <li>Commanding Power Design: Twin 16+1+2 Phases Digital VRM</li>
        </ul>

        <div className="flex gap-2 mt-3">
          <span className="bg-gray-800 px-3 py-1 rounded text-xs font-medium">FREE SHIPPING</span>
          <span className="bg-gray-800 px-3 py-1 rounded text-xs font-medium">FREE GIFT</span>
        </div>

        <div className="mt-4 text-sm font-semibold text-gray-300">
          HURRY UP! PROMOTION WILL EXPIRE IN
        </div>

        {/* Countdown Timer */}
        <div className="flex gap-2 mt-1 text-center text-xs">
          {[days, hours, minutes, seconds].map((num, idx) => (
            <div key={idx} className="bg-gray-700 rounded p-2">
              {num} <div className="text-[10px]">{["d", "h", "m", "s"][idx]}</div>
            </div>
          ))}
        </div>

        <div className="mt-4">
          <div className="h-2 bg-gray-700 rounded-full">
            <div className="h-2 bg-teal-500 rounded-full w-[35%]"></div>
          </div>
          <div className="text-sm text-gray-500 mt-1">
            Sold: <strong>26/75</strong>
          </div>
        </div>
      </div>
    </div>
  );
}
