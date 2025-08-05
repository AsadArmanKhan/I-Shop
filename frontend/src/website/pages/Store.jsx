// import BestSeller from "./BestSeller";
// import TopSells from "./TopSells";
// import { useContext, useEffect, useState } from "react";
// import { MainContext } from "../../Context";
// import { Link, useSearchParams, useParams } from "react-router-dom";
// import { useDispatch, useSelector } from "react-redux";
// import { addItem } from "../../redux/slice/cartSlice";
// import axios from "axios";
// import AllStoreProducts from "./AllStoreProducts";
// import CategorySidebar from "./CategorySidebar";
// export default function Store() {
//   const user = useSelector((state) => state.user?.data);
//   const dispacher = useDispatch();
//   const { categorySlug } = useParams();
//   // console.log(categorySlug);
//   const [limit, setLimit] = useState(12);
//   const [colorSlug, setColorSlug] = useState();
//   const [searchParams, setSearchParams] = useSearchParams();
//   const [minPrice, setMinPrice] = useState(0);
//   const [maxPrice, setMaxPrice] = useState(100000);
//   const [showMobileFilter, setShowMobileFilter] = useState(false);
//   const {
//     getProduct,
//     products,
//     getCategory,
//     Categories,
//     COLOR_URL,
//     getColors,
//     colors,
//     API_BASE_URL,
//   } = useContext(MainContext);

//   // console.log(products)

//   useEffect(() => {
//     getCategory();
//     getColors();
//     // getProduct()
//     if (searchParams.get("limit")) {
//       setLimit(searchParams.get("limit"));
//     }
//     if (searchParams.get("colorSlug")) {
//       setColorSlug(searchParams.get("colorSlug"));
//     }
//   }, []);

//   useEffect(() => {
//     const query = {};

//     console.log("minPrice:", minPrice, "maxPrice:", maxPrice); // Should be numbers

//     if (limit) query.limit = limit;
//     if (colorSlug) query.colorSlug = colorSlug;
//     if (minPrice) query.minPrice = minPrice;
//     if (maxPrice) query.maxPrice = maxPrice;

//     setSearchParams(query);
//     getProduct(null, limit, categorySlug, colorSlug, minPrice, maxPrice);
//   }, [limit, categorySlug, colorSlug, minPrice, maxPrice]);

//   async function carthandler(data) {
//     if (user !== null) {
//       const response = await axios.post(`${API_BASE_URL}/cart/add-to-cart`, {
//         userId: user?._id,
//         productId: data.productId,
//         qty: 1,
//       });
//       console.log(response);
//     }

//     dispacher(addItem(data));
//   }

//   const formatCurrencyINR = (amount) => {
//     return new Intl.NumberFormat("en-IN", {
//       style: "currency",
//       currency: "INR",
//       maximumFractionDigits: 2,
//     }).format(amount);
//   };

//   return (
//     <>
//       {/* <TopCellPhones /> */}
//       {/* <PopularCategories /> */}

//       <BestSeller
//         products={products}
//         API_BASE_URL={API_BASE_URL}
//         formatCurrencyINR={formatCurrencyINR}
//         onAddToCart={carthandler}
//       />
//       {/* <AllCategories /> */}

//       <div className="bg-gray-100 p-6 rounded-xl shadow-xl text-white">
//         <h2 className="text-lg font-bold mb-6 text-yellow-400 tracking-wide">
//           BEST SELLER IN THIS CATEGORY
//         </h2>
//         <div className="grid grid-cols-6 gap-4">
//           {/* Sidebar */}
//           <div className="hidden md:block col-span-1 bg-gray-200 text-white p-4 rounded-xl shadow-lg">
//             <h3 className="font-semibold text-yellow-400 mb-4 tracking-wide">
//               CATEGORIES
//             </h3>

//             {/* All Categories Button */}
//             <button className="w-full text-sm font-semibold text-left mb-4 px-3 py-2 bg-blue-50 rounded shadow-md  text-black hover:bg-gradient-to-r from-white to-yellow-700 hover:text-black transition transform hover:scale-105">
//               <Link to={`/store`}>All Categories</Link>
//             </button>

//             {/* Category List */}
//             <ul className="space-y-2 text-sm">
//               {Categories.map((category) => (
//                 <li
//                   key={category._id}
//                   className="flex justify-between cursor-pointer text-sm font-semibold text-left py-2 px-3 bg-blue-50 text-black   rounded shadow-md transition transform hover:scale-105 hover:bg-gradient-to-r from-white to-yellow-700 hover:text-black"
//                 >
//                   <Link to={`/store/${category.slug}`}>{category.name}</Link>
//                   <span className="flex justify-end ">
//                     ({category.productCount})
//                   </span>
//                 </li>
//               ))}
//             </ul>

//             {/* Color Filter */}
//             <div className="my-10 border-t border-gray-300 pt-4">
//               <h4 className="font-semibold text-yellow-400 mb-2 tracking-wide">
//                 BY COLOR
//               </h4>
//               <div className="flex flex-wrap  gap-2">
//                 {colors.map((color, index) => (
//                   <li
//                     onClick={() => setColorSlug(color.slug)}
//                     key={index}
//                     className="w-6 h-6 rounded-full border-2 border-gray-600 list-none hover:scale-110 transition"
//                     style={{ backgroundColor: color.hexcode }}
//                   ></li>
//                 ))}
//               </div>
//             </div>

//             {/* Price Filter */}
//             {/* <div className="my-6 border-t border-gray-300 pt-4">
//                             <h4 className="font-semibold text-yellow-400 mb-2 tracking-wide">BY PRICE</h4>
//                             <div className="flex items-center gap-2 text-sm mb-2">
//                                 <input
//                                     type="number"
//                                     value={minPrice}
//                                     onChange={(e) => setMinPrice(Number(e.target.value))}
//                                     className="w-1/2 px-2 py-1 rounded border border-gray-300 text-black"
//                                     placeholder="Min"
//                                 />
//                                 <span className="text-gray-600">—</span>
//                                 <input
//                                     type="number"
//                                     value={maxPrice}
//                                     onChange={(e) => setMaxPrice(Number(e.target.value))}
//                                     className="w-1/2 px-2 py-1 rounded border border-gray-300 text-black"
//                                     placeholder="Max"
//                                 />
//                             </div>
//                         </div> */}

//             {/* Price Filter */}
//             <div className="my-6 border-t border-gray-300 pt-4">
//               <h4 className="font-semibold text-yellow-400 mb-2 tracking-wide">
//                 BY PRICE
//               </h4>

//               {/* Range Line */}
//               <div className="mb-4">
//                 <input
//                   type="range"
//                   min="0"
//                   max="100000"
//                   step="1000"
//                   value={minPrice}
//                   onChange={(e) => setMinPrice(Number(e.target.value))}
//                   className="w-full accent-yellow-400"
//                 />
//               </div>

//               {/* Price Fields */}
//               <div className="flex items-center gap-2 text-sm">
//                 <input
//                   type="number"
//                   value={minPrice}
//                   onChange={(e) => setMinPrice(Number(e.target.value))}
//                   className="w-1/2 px-2 py-1 rounded border border-gray-300 text-black"
//                   placeholder="Min"
//                 />
//                 <span className="text-gray-600">—</span>
//                 <input
//                   type="number"
//                   value={maxPrice}
//                   onChange={(e) => setMaxPrice(Number(e.target.value))}
//                   className="w-1/2 px-2 py-1 rounded border border-gray-300 text-black"
//                   placeholder="Max"
//                 />
//               </div>
//             </div>

//             {/* Promo Image Section */}
//             <div
//               className="relative mt-50 rounded-xl overflow-hidden h-40 shadow-lg "
//               style={{
//                 backgroundImage: "url('/ImagesForProducts/addimg.png.png')", // replace with your image path
//                 backgroundSize: "cover",
//                 backgroundPosition: "center",
//               }}
//             >
//               <div className="absolute inset-0 bg-black/50 flex items-center justify-center text-center px-4">
//                 <h4 className="text-white font-semibold text-sm leading-tight">
//                   Capture Your Adventures
//                   <br />
//                   with GoPro Hero 11
//                 </h4>
//               </div>
//             </div>
//           </div>

//           {/* Products Section */}
//           <AllStoreProducts />
//         </div>
//       </div>

//       {/* <ByColor /> */}
//     </>
//   );
// }

import BestSeller from "./BestSeller";
import TopSells from "./TopSells";
import { useContext, useEffect, useState } from "react";
import { MainContext } from "../../Context";
import { Link, useSearchParams, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addItem } from "../../redux/slice/cartSlice";
import axios from "axios";
import AllStoreProducts from "./AllStoreProducts";
import CategorySidebar from "./CategorySidebar";

export default function Store() {
  const user = useSelector((state) => state.user?.data);
  const dispacher = useDispatch();
  const { categorySlug } = useParams();
  const [limit, setLimit] = useState(0);
  const [colorSlug, setColorSlug] = useState();
  const [minPrice, setMinPrice] = useState("");
  const [maxPrice, setMaxPrice] = useState("");
  const [searchParams, setSearchParams] = useSearchParams();
  const {
    getProduct,
    products,
    getCategory,
    Categories,
    getColors,
    colors,
    API_BASE_URL,
    notify,
  } = useContext(MainContext);

  useEffect(() => {
    getCategory();
    getColors();
    if (searchParams.get("limit")) {
      setLimit(searchParams.get("limit"));
    }
    if (searchParams.get("colorSlug")) {
      setColorSlug(searchParams.get("colorSlug"));
    }
  }, []);

  useEffect(() => {
    const query = {};
    if (limit) query.limit = limit;
    if (colorSlug) query.colorSlug = colorSlug;
    if (minPrice) query.minPrice = minPrice;
    if (maxPrice) query.maxPrice = maxPrice;

    setSearchParams(query);
    getProduct(null, limit, categorySlug, colorSlug, minPrice, maxPrice);
  }, [limit, categorySlug, colorSlug, minPrice, maxPrice]);

  async function carthandler(data) {
    if (user !== null) {
      await axios.post(`${API_BASE_URL}/cart/add-to-cart`, {
        userId: user?._id,
        productId: data.productId,
        qty: 1,
      });
    }
    dispacher(addItem(data));
  }

  const formatCurrencyINR = (amount) => {
    return new Intl.NumberFormat("en-IN", {
      style: "currency",
      currency: "INR",
      maximumFractionDigits: 2,
    }).format(amount);
  };

  const handleFilterByPrice = () => {
    const min = parseFloat(minPrice) || 0;
    const max = parseFloat(maxPrice) || 0;

    if (min > max && max !== 0) {
      notify("Min price should be less than max price", false);
      return;
    }

    getProduct(null, limit, categorySlug, colorSlug, minPrice, maxPrice);
  };

  return (
    <>
      <TopSells />
      <BestSeller />

      <div className="bg-[#0e1623] p-6 rounded-xl shadow-xl text-white">
        <h2 className="text-lg font-bold mb-6 text-yellow-400 tracking-wide">
          BEST SELLER IN THIS CATEGORY
        </h2>
        <div className="grid grid-cols-6 gap-4">
          {/* Sidebar */}
          <CategorySidebar />

          {/* Products Section */}
          <div className="col-span-5 p-4 bg-[#121c2b] rounded-xl shadow-lg">
            {/* <select
              onChange={(e) => setLimit(e.target.value)}
              className="border rounded-lg px-6 font-semibold py-2 text-sm text-white focus:ring-2 focus:ring-yellow-400 transition-all duration-300 mb-6"
            >
              <option className="text-black" value="0">
                All
              </option>
              <option className="text-black" value="2">
                2
              </option>
              <option className="text-black" value="20">
                20
              </option>
              <option className="text-black" value="24">
                24
              </option>
            </select> */}
            <AllStoreProducts />
          </div>
        </div>
      </div>
    </>
  );
}
