// import { useContext, useEffect, useState } from "react";
// import { FaAngleLeft, FaAngleRight } from "react-icons/fa";
// import { MainContext } from "../../Context";
// import { Link, useSearchParams } from "react-router-dom";
// import { BadgeCheck, Truck } from "lucide-react";

// export default function AllCategories() {
    // const [limit, setLimit] = useState(0)
    // const [searchParams, setSearchParams] = useSearchParams()
    // const { getProduct, products, getCategory, Categories,
    //     COLOR_URL, getColors, colors, API_BASE_URL } = useContext(MainContext)
    // useEffect(
    //     () => {
    //         getCategory()
    //         getColors()
    //         // getProduct()
    //     },
    //     []
    // )

    // useEffect(
    //     () => {
    //         const query = {};
    //         if (limit) {
    //             query.limit = limit;
    //         }
    //         setSearchParams(query)
    //         getProduct(null, limit)
    //     },
    //     [limit]
    // )
//     return (
//         <div className="bg-white p-6">
//             <h2 className="text-lg font-semibold mb-6">BEST SELLER IN THIS CATEGORY</h2>
//             <div className="grid grid-cols-6 gap-4">
//                 {/* Sidebar */}
//                 <div className="col-span-1 bg-gray-100 p-4 rounded-xl">
//                     {/* <div className="">All</div> */}
//                     <h3 className="font-semibold mb-2">CATEGORIES</h3>
//                     <button className="text-sm font-semibold text-left text-gray-800 mb-4 transition duration-300 ease-in-out transform hover:scale-105 hover:bg-gradient-to-r from-purple-500 to-indigo-500 hover:text-white px-3  rounded shadow-md">
//                         All Categories

//                     </button>
//                     <ul className="space-y-1 text-sm text-gray-700">
//                         {Categories.map((category) => (
//                             <li
//                                 key={category._id}
//                                 className="cursor-pointer text-sm font-semibold text-left text-gray-800 mb-2 py-2 transition duration-300 ease-in-out transform hover:scale-105 hover:bg-gradient-to-r from-purple-500 to-indigo-500 hover:text-white px-3  rounded shadow-md"
//                             >
//                                 <Link to={`/store/${category.slug}`}>{category.name}</Link>
//                             </li>
//                         ))}
//                     </ul>
//                     <div className="mb-4 my-10">
//                         <h4 className="font-semibold mb-2">By Color</h4>
//                         <div className="flex flex-wrap gap-2">
//                             {
//                                 colors.map((color, i) => (
//                                     <li
//                                         key={i}
//                                         className="w-5 h-5 rounded-full border list-none"
//                                         style={{ backgroundColor: color.hexcode }}
//                                     >
//                                     </li>
//                                 ))
//                             }
//                         </div>
//                     </div>
//                 </div>

//                 {/* Products Section */}
//                 <div className="col-span-5 " >
//                     <select onChange={(e) => setLimit(e.target.value)} className="hover:bg-gradient-to-r from-purple-500 to-indigo-500 border border-gray-300 rounded px-6 py-1 text-sm" >
//                         <option value="0">All</option>
//                         <option value="2">2</option>
//                         <option value="20">20</option>
//                         <option value="24">24</option>
//                     </select>
//                     <div className="flex justify-between items-center mb-4">
//                         <button className="p-2 bg-gray-100 rounded-full">
//                             <FaAngleLeft className="text-gray-600" />
//                         </button>
//                         <button className="p-2 bg-gray-100 rounded-full">
//                             <FaAngleRight className="text-gray-600" />
//                         </button>
//                     </div>
//                     <div className="grid grid-cols-4 gap-6">
//                         {/* Product Card */}
//                         {
//                             products.map(
//                                 (product, index) => {
//                                     // console.log(product);

//                                     return (
//                                         <div className="bg-gradient-to-r from-lime-50 border-white to-purple-200 relative border rounded-xl p-4 transition-transform duration-300 ease-in-out transform hover:scale-105 hover:shadow-lg hover:border-purple-500">
//                                             <div className="text-black text-xs px-2 py-1 rounded">
//                                                 {product._id}
//                                             </div>

//                                             {/* Looping Video */}
//                                             {/* <video
//                                                 src={product.videoUrl}
//                                                 autoPlay
//                                                 loop
//                                                 // muted
//                                                 playsInline
//                                                 // controls
//                                                 className="loop mx-auto mb-4 rounded-lg w-full h-40 object-cover"
//                                             /> */}

//                                             {/* Image (still shown below video) */}
//                                             <img
//                                                 src={`${API_BASE_URL}/images/product/${product.thumbnail}`}
//                                                 alt="Product"
//                                                 className="mx-auto h-50 mb-4"
//                                             />

//                                             <p className="text-sm text-gray-600">{product.name}</p>
//                                             <p className="font-bold text-lg mt-2">
//                                                 <span className="text-red-600">{product.finalPrice}</span>{" "}
//                                                 <span className="text-gray-400 line-through ml-1">{product.orignalPrice}</span>
//                                             </p>
//                                             <p className="text-sm font-semibold">
//                                                 <span className="text-green-500">FREE SHIPPING</span>
//                                             </p>
//                                             <p className="text-sm">
//                                                 <span className="text-red-500">{product.stock}</span>
//                                             </p>
//                                         </div>


//                                     )
//                                 }
//                             )
//                         }

//                     </div>
//                 </div>
//             </div>
//         </div>
//     );
// }