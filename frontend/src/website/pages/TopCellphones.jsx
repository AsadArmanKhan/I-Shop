import React, { useContext } from "react";
import { MainContext } from "../../Context";
import { Link } from "react-router-dom";

export default function TopCellphones() {
  const { products, Categories, API_BASE_URL } = useContext(MainContext);

  const wantedNamesInOrder = [
    "Android",
    "5G Support",
    "Iphone",
    "Gaming Smartphones",
    "Xiaomi",
    "Accessories",
  ];
  const WantedProducts = [
    "687769c495621bf9481b64e7",
    "68776aba95621bf9481b64f7",
    "6879f244d6950506c96fdcb6",
    "6879f113d6950506c96fdc65",
    "6879f1b2d6950506c96fdc97",
  ];
  const filteredProducts = WantedProducts.map((id) =>
    products.find((p) => p._id === id)
  ).filter(Boolean);

  const filteredCategories = wantedNamesInOrder
    .map((name) => Categories.find((cat) => cat?.name === name))
    .filter(Boolean);

  return (
    <div className="bg-white py-6 px-4 md:px-12 text-[#1a1a1a]">
      {/* Header */}
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-lg md:text-xl font-bold uppercase">
          Top Cellphones & Tablets
        </h2>
        <Link to={"/store"}>
          <button className="cursor-pointer text-sm text-gray-600 hover:underline">
            View All
          </button>
        </Link>
      </div>

      {/* Banner */}
      <div className="bg-gradient-to-r from-[#f4f1ef] to-[#d9e1ec] rounded-lg p-4 flex items-center mb-6">
        <div
          className="flex-1 relative w-full h-40 sm:h-48 md:h-52 rounded overflow-hidden flex items-center"
          style={{
            backgroundImage: "url('/ImagesForProducts/Store/prod18.png.png')",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div className="ml-4 text-left text-black">
            <h3 className="text-xl font-semibold mb-1">
              REDMI NOTE 12 PRO+ 5G
            </h3>
            <p className="text-sm text-gray-700 mb-2">Rise to the challenge</p>
            <Link to={"/store"}>
              <button className="cursor-pointer bg-black text-white text-xs px-4 py-2 rounded">
                SHOP NOW
              </button>
            </Link>
          </div>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 text-xs ml-8 mb-7">
          {filteredCategories.map((category) => (
            <Link to={`/store/${category?.slug}`} key={category?._id}>
              <div className="flex items-center justify-between p-2 rounded">
                <div>
                  <p className="font-semibold text-sm">{category?.name}</p>
                  <span className="text-[11px] text-gray-500">
                    {category?.productCount} Items
                  </span>
                </div>
                <img
                  src={`${API_BASE_URL}/images/categories/${category?.Image}`}
                  alt={category?.name}
                  className="w-16 h-16 object-cover rounded"
                />
              </div>
            </Link>
          ))}
        </div>
      </div>

      {/* Products List – unchanged */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
        {/* card 1 */}
        {filteredProducts.map((product) => (
          <div className="relative rounded-lg p-3 shadow-sm hover:shadow-md transition">
            <span className="absolute top-2 left-2 bg-teal-500 text-white text-[11px] font-semibold px-2 py-1 rounded">
              ₹{product?.originalPrice-product?.finalPrice}
            </span>
            <Link to={`/productdetailpage/${product._id}`}>
              <img
                src={`${API_BASE_URL}/images/product/${product.thumbnail}`}
                alt=""
              />
            </Link>
            {/* <p className="text-center text-xs text-gray-500">(152)</p> */}
            <h4 className="text-sm font-semibold mt-1">{product?.name}</h4>
            <div className="text-sm flex flex-col gap-1 mt-1">
              <div>
                <span className="text-green-600 font-bold">₹{product?.finalPrice}</span>
                <span className="text-gray-400 line-through ml-2">₹{product?.originalPrice}</span>
              </div>
              <div className="text-[11px] text-gray-500">FREE SHIPPING</div>
              <div className="text-[11px] text-gray-600">In stock</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

//  import React, { useContext } from "react";
//  import { MainContext } from "../../Context";
// import { Link } from "react-router-dom";

// export default function TopCellphones() {
//   const { Categories, API_BASE_URL } = useContext(MainContext);
//   console.log(Categories);

//   const wantedNames = [
//     "Iphone",
//     "Android",
//     "5G Support Smartphones",
//     "Gaming Smartphones",
//     "Xiaomi",
//     "Accessories",
//   ];

//   const filteredCategories = Categories.filter((cat) =>
//     wantedNames.includes(cat?.name)
//   );

//   return (
//     <>
//       <div className="bg-white py-6 px-4 md:px-12 text-[#1a1a1a]">
//         {/* Header */}
//         <div className="flex justify-between items-center mb-4">
//           <h2 className="text-lg md:text-xl font-bold uppercase">
//             Top Cellphones & Tablets
//           </h2>
//           <Link to={"/store"}>
//             <button className="cursor-pointer text-sm text-gray-600 hover:underline">
//               View All
//             </button>
//           </Link>
//         </div>

//         {/* Banner */}
//         <div className="bg-gradient-to-r from-[#f4f1ef] to-[#d9e1ec] rounded-lg p-4 flex items-center mb-6">
//           <div
//             className="flex-1 relative w-full h-40 sm:h-48 md:h-52 rounded overflow-hidden flex items-center"
//             style={{
//               backgroundImage: "url('/ImagesForProducts/Store/prod18.png.png')",
//               backgroundSize: "cover",
//               backgroundPosition: "center",
//             }}
//           >
//             <div className="ml-4 text-left text-black">
//               <h3 className="text-xl font-semibold mb-1">
//                 REDMI NOTE 12 PRO+ 5G
//               </h3>
//               <p className="text-sm text-gray-700 mb-2">
//                 Rise to the challenge
//               </p>
//               <Link to={"/store"}>
//                 <button className="cursor-pointer bg-black text-white text-xs px-4 py-2 rounded">
//                   SHOP NOW
//                 </button>
//               </Link>
//             </div>
//           </div>

//           {/* Category Links */}
//           <div className="grid grid-cols-2 sm:grid-cols-3 gap-9 text-xs ml-8 mb-7">
//             {filteredCategories.map((category) => (
//               <Link to={`/store/${category?.slug}`} key={category?._id}>
//                 <div className="flex items-center justify-between  p-2 rounded">
//                   <div>
//                     <p className="font-semibold text-sm">{category?.name}</p>
//                     <span className="text-[11px] text-gray-500">
//                       {" "}
//                       {category?.productCount}
//                       </span>
//                   </div>
//                   <img
//                     src={`${API_BASE_URL}/images/categories/${category?.Image}`}
//                     alt={category?.name}
//                     className="w-6 h-6 object-cover rounded"
//                   />
//                 </div>
//               </Link>
//             ))}
//           </div>
//         </div>

//         {/* Products List */}

//         <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
//           {/* Card 1 */}
//           <div className="relative  rounded-lg p-3 shadow-sm hover:shadow-md transition">
//             <span className="absolute top-2 left-2 bg-teal-500 text-white text-[11px] font-semibold px-2 py-1 rounded">
//               SAVE $199.00
//             </span>
//             <img src="/ImagesForProducts/Store/product12.png" alt="" />
//             <p className="text-center text-xs text-gray-500">(152)</p>
//             <h4 className="text-sm font-semibold mt-1">
//               SROK Smart Phone 128GB, Oled Retina
//             </h4>
//             <div className="text-sm flex flex-col gap-1 mt-1">
//               <div>
//                 <span className="text-green-600 font-bold">$579.00</span>
//                 <span className="text-gray-400 line-through ml-2">$859.00</span>
//               </div>
//               <div className="text-[11px] text-gray-500">FREE SHIPPING</div>
//               <div className="text-[11px] text-gray-600">In stock</div>
//             </div>
//           </div>

//           {/* Card 2 */}
//           <div className="relative  rounded-lg p-3 shadow-sm hover:shadow-md transition">
//             <span className="absolute top-2 left-2 bg-teal-500 text-white text-[11px] font-semibold px-2 py-1 rounded">
//               NEW
//             </span>
//             <img src="/ImagesForProducts/Store/product12.png" alt="" />
//             <h4 className="text-sm font-semibold mt-1">
//               aPod Pro Tablet 2023 LTE + Wifi, GPS Cellular 12.9 Inch, 512GB
//             </h4>
//             <div className="text-sm flex flex-col gap-1 mt-1">
//               <div>
//                 <span className="text-green-600 font-bold">
//                   $979.00 - $1,259.00
//                 </span>
//               </div>
//               <div className="text-[11px] text-gray-500">$2.98 SHIPPING</div>
//               <div className="text-[11px] text-gray-600">In stock</div>
//             </div>
//           </div>

//           {/* Card 3 */}
//           <div className="relative  rounded-lg p-3 shadow-sm hover:shadow-md transition">
//             <img src="/ImagesForProducts/Store/product12.png" alt="" />
//             <p className="text-center text-xs text-gray-500">(5)</p>
//             <h4 className="text-sm font-semibold mt-1">
//               OPod Pro 12.9 Inch M1 2023, 64GB + Wifi, GPS
//             </h4>
//             <div className="text-sm flex flex-col gap-1 mt-1">
//               <div>
//                 <span className="text-green-600 font-bold">$659.00</span>
//               </div>
//               <div className="text-[11px] text-gray-500">FREE SHIPPING</div>
//               <div className="text-[11px] text-blue-500 font-semibold">
//                 FREE GIFT
//               </div>
//               <div className="text-[11px] text-gray-600">In stock</div>
//             </div>
//           </div>

//           {/* Card 4 */}
//           <div className="relative  rounded-lg p-3 shadow-sm hover:shadow-md transition">
//             <span className="absolute top-2 left-2 bg-teal-500 text-white text-[11px] font-semibold px-2 py-1 rounded">
//               SAVE $59.00
//             </span>
//             <img src="/ImagesForProducts/Store/product12.png" alt="" />
//             <p className="text-center text-xs text-gray-500">(9)</p>
//             <h4 className="text-sm font-semibold mt-1">
//               Xiaomi Redmi Note 5, 64GB
//             </h4>
//             <div className="text-sm flex flex-col gap-1 mt-1">
//               <div>
//                 <span className="text-green-600 font-bold">$1,239.00</span>
//                 <span className="text-gray-400 line-through ml-2">
//                   $1,619.00
//                 </span>
//               </div>
//               <div className="text-[11px] text-gray-500">FREE SHIPPING</div>
//               <div className="text-[11px] text-gray-600">Contact</div>
//             </div>
//           </div>

//           {/* Card 5 */}
<div className="relative  rounded-lg p-3 shadow-sm hover:shadow-md transition">
  <img src="/ImagesForProducts/Store/product12.png" alt="" />
  <p className="text-center text-xs text-gray-500">(8)</p>
  <h4 className="text-sm font-semibold mt-1">
    Microsute Alpha Ultra S5 Surface 128GB 2022, Sliver
  </h4>
  <div className="text-sm flex flex-col gap-1 mt-1">
    <div>
      <span className="text-green-600 font-bold">$1,729.00</span>
    </div>
    <div className="text-[11px] text-gray-500">FREE SHIPPING</div>
    <div className="text-[11px] text-gray-600">Contact</div>
  </div>
</div>;
//         </div>
//       </div>
//     </>
//   );
// }
