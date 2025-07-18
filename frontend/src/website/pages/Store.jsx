import BestSeller from './BestSeller';
import TopSells from './TopSells';
import { useContext, useEffect, useState } from "react";
import { MainContext } from "../../Context";
import { Link, useSearchParams, useParams } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux'
import { addItem } from '../../redux/slice/cartSlice';
import axios from 'axios';
import AllStoreProducts from './AllStoreProducts';

export default function Store() {
    const user = useSelector((state) => state.user?.data)
    const dispacher = useDispatch()
    const { categorySlug } = useParams();
    const [limit, setLimit] = useState(0)
    const [colorSlug, setColorSlug] = useState();
    const [minPrice, setMinPrice] = useState("");   // ✅ new
    const [maxPrice, setMaxPrice] = useState("");   // ✅ new
    const [searchParams, setSearchParams] = useSearchParams()
    const { getProduct, products, getCategory, Categories,
        getColors, colors, API_BASE_URL, notify } = useContext(MainContext)

    useEffect(() => {
        getCategory()
        getColors()
        if (searchParams.get('limit')) {
            setLimit(searchParams.get('limit'))
        }
        if (searchParams.get('colorSlug')) {
            setColorSlug(searchParams.get('colorSlug'))
        }
    }, [])

    useEffect(() => {
        const query = {};
        if (limit) query.limit = limit;
        if (colorSlug) query.colorSlug = colorSlug;
        setSearchParams(query)
        getProduct(null, limit, categorySlug, colorSlug)
    }, [limit, categorySlug, colorSlug])

    async function carthandler(data) {
        if (user !== null) {
            await axios.post(`${API_BASE_URL}/cart/add-to-cart`, {
                userId: user?._id,
                productId: data.productId,
                qty: 1
            })
        }
        dispacher(addItem(data))
    }

    const formatCurrencyINR = (amount) => {
        return new Intl.NumberFormat('en-IN', {
            style: 'currency',
            currency: 'INR',
            maximumFractionDigits: 2
        }).format(amount);
    };

    // ✅ New function: apply filter by price
    const handleFilterByPrice = () => {
        const min = parseFloat(minPrice) || 0;
        const max = parseFloat(maxPrice) || 0;

        if (min > max && max !== 0) {
            notify("Min price should be less than max price", false);
            return;
        }

        // ⚠ Your backend doesn't yet support price filter, so for now:
        // just reload products and you can do client-side filtering later if needed
        getProduct(null, limit, categorySlug, colorSlug);
    }

    return (
        <>
            <TopSells />
            <BestSeller />

            <div className="bg-gray-100 p-6 rounded-xl shadow-xl text-white">
                <h2 className="text-lg font-bold mb-6 text-yellow-400 tracking-wide">BEST SELLER IN THIS CATEGORY</h2>
                <div className="grid grid-cols-6 gap-4">
                    {/* Sidebar */}
                    <div className="col-span-1 bg-gray-200 text-white p-4 rounded-xl shadow-lg">
                        <h3 className="font-semibold text-yellow-400 mb-4 tracking-wide">CATEGORIES</h3>
                        <button className="w-full text-sm font-semibold text-left mb-4 px-3 py-2 bg-blue-50 rounded shadow-md text-black hover:bg-gradient-to-r from-white to-yellow-700 hover:text-black transition transform hover:scale-105">
                            <Link to={`/store`}>All Categories</Link>
                        </button>
                        <ul className="space-y-2 text-sm">
                            {Categories.map((category) => (
                                <li key={category._id}
                                    className="flex justify-between cursor-pointer text-sm font-semibold text-left py-2 px-3 bg-blue-50 text-black rounded shadow-md transition transform hover:scale-105 hover:bg-gradient-to-r from-white to-yellow-700 hover:text-black">
                                    <Link to={`/store/${category.slug}`}>{category.name}</Link>
                                    <span className='flex justify-end'>({category.productCount})</span>
                                </li>
                            ))}
                        </ul>

                        {/* Color Filter */}
                        <div className="my-10">
                            <h4 className="font-semibold text-yellow-400 mb-2 tracking-wide">BY COLOR</h4>
                            <div className="flex flex-wrap gap-2">
                                {colors.map((color, index) => (
                                    <li key={index}
                                        onClick={() => setColorSlug(color.slug)}
                                        className="w-6 h-6 rounded-full border-2 border-gray-600 list-none hover:scale-110 transition"
                                        style={{ backgroundColor: color.hexcode }}>
                                    </li>
                                ))}
                            </div>
                        </div>

                        {/* ✅ Filter by price */}
                        <div className="my-10">
                            <h4 className="font-semibold text-yellow-400 mb-2 tracking-wide">FILTER BY PRICE</h4>
                            <div className="flex flex-col space-y-2">
                                <input
                                    type="number"
                                    placeholder="Min Price"
                                    value={minPrice}
                                    onChange={(e) => setMinPrice(e.target.value)}
                                    className="w-full px-2 py-1 rounded border border-gray-300 text-black text-sm focus:outline-none focus:ring-2 focus:ring-yellow-400"
                                />
                                <input
                                    type="number"
                                    placeholder="Max Price"
                                    value={maxPrice}
                                    onChange={(e) => setMaxPrice(e.target.value)}
                                    className="w-full px-2 py-1 rounded border border-gray-300 text-black text-sm focus:outline-none focus:ring-2 focus:ring-yellow-400"
                                />
                                <button
                                    onClick={handleFilterByPrice}
                                    className="mt-2 w-full bg-yellow-400 text-black font-semibold text-sm py-2 rounded hover:bg-yellow-500 transition">
                                    Apply
                                </button>
                            </div>
                        </div>
                    </div>

                    {/* Products Section */}
                    <div className="col-span-5 p-4 bg-gray-200 text-white rounded-xl shadow-lg">
                        <select
                            onChange={(e) => setLimit(e.target.value)}
                            className="border rounded-lg px-6 py-2 text-sm text-black focus:ring-2 focus:ring-black transition-all duration-300 mb-6">
                            <option value="0">All</option>
                            <option value="2">2</option>
                            <option value="20">20</option>
                            <option value="24">24</option>
                        </select>
                        {/* <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-4">
                            {products.map((product, index) => (
                                <div key={index}
                                    className="border rounded-2xl p-4 hover:scale-[1.03] transform transition duration-300 shadow-xl hover:shadow-[0_0_15px_#facc15] relative">
                                    <div className="absolute top-2 right-2 bg-gray-200 text-[10px] sm:text-xs text-black px-2 py-1 rounded shadow">
                                        {index + 1}
                                    </div>
                                    <img src={`${API_BASE_URL}/images/product/${product.thumbnail}`}
                                        alt="Product" className="w-full object-cover rounded-lg mb-3" />
                                    <p className="text-sm sm:text-base text-gray-300 font-medium text-center">{product.name}</p>
                                    <p className="text-center font-bold text-base sm:text-lg mt-1">
                                        <span className="text-yellow-400">{formatCurrencyINR(product.finalPrice)}</span>{" "}
                                        <span className="text-gray-500 line-through ml-2">{formatCurrencyINR(product.originalPrice)}</span>
                                    </p>
                                    <button className="text-xs sm:text-sm text-green-400 font-semibold text-center mt-1">
                                        FREE SHIPPING
                                    </button>
                                    <p className="text-sm text-red-400 text-center mt-1">
                                        {product.stock}
                                    </p>
                                    <button
                                        onClick={() => carthandler({
                                            productId: product._id,
                                            finalPrice: product.finalPrice,
                                            originalPrice: product.originalPrice,
                                        })}
                                        className="mt-4 w-full bg-white hover:bg-gradient-to-r from-white to-yellow-700 hover:text-black transition transform hover:scale-105 text-black font-semibold text-sm sm:text-base py-2 rounded-lg shadow-md">
                                        Add to Cart
                                    </button>
                                </div>
                            ))}
                        </div> */}
                        <AllStoreProducts />
                    </div>
                </div>
            </div>
        </>
    );
}



// // import AllCategories from './AllCategories';
// import BestSeller from './BestSeller';
// // import ByColor from './ByColor';
// import TopSells from './TopSells';
// import { useContext, useEffect, useState } from "react";
// import { FaAngleLeft, FaAngleRight } from "react-icons/fa";
// import { MainContext } from "../../Context";
// import { Link, useSearchParams, useParams } from "react-router-dom";
// import { useDispatch, useSelector } from 'react-redux'
// import { addItem } from '../../redux/slice/cartSlice';
// import axios from 'axios';
// // import { hex } from 'framer-motion';
// export default function Store() {
//     const user = useSelector((state) => state.user?.data)
//     const dispacher = useDispatch()
//     const { categorySlug } = useParams();
//     // console.log(categorySlug);
//     const [limit, setLimit] = useState(0)
//     const [colorSlug, setColorSlug] = useState();
//     const [searchParams, setSearchParams] = useSearchParams()
//     const { getProduct, products, getCategory, Categories,
//         COLOR_URL, getColors, colors, API_BASE_URL } = useContext(MainContext)

//     console.log(products,"jsXNKJLS")


//     useEffect(
//         () => {
//             getCategory()
//             getColors()
//             // getProduct()
//             if (searchParams.get('limit')) {
//                 setLimit(searchParams.get('limit'))
//             }
//             if (searchParams.get('colorSlug')) {
//                 setColorSlug(searchParams.get('colorSlug'))
//             }

//         },
//         []
//     )

//     useEffect(
//         () => {
//             const query = {};
//             if (limit) {
//                 query.limit = limit;
//             }
//             if (colorSlug) {
//                 query.colorSlug = colorSlug;
//             }
//             setSearchParams(query)
//             getProduct(null, limit, categorySlug, colorSlug)
//         },
//         [limit, categorySlug, colorSlug]
//     )


//     async function carthandler(data) {

//         if (user !== null) {
//             const response = await axios.post(`${API_BASE_URL}/cart/add-to-cart`, {
//                 userId: user?._id,
//                 productId: data.productId,
//                 qty: 1
//             })

//             console.log(response)
//         }

//         dispacher(
//             addItem(data)
//         )
//     }


//     const formatCurrencyINR = (amount) => {
//         return new Intl.NumberFormat('en-IN', {
//             style: 'currency',
//             currency: 'INR',
//             maximumFractionDigits: 2
//         }).format(amount);
//     };

//     return (
//         <>
//             <TopSells />
//             <BestSeller />
//             {/* <AllCategories /> */}

//             <div className="bg-gray-100 p-6 rounded-xl shadow-xl text-white">
//                 <h2 className="text-lg font-bold mb-6 text-yellow-400 tracking-wide">BEST SELLER IN THIS CATEGORY</h2>
//                 <div className="grid grid-cols-6 gap-4">
//                     {/* Sidebar */}
//                     <div className="col-span-1 bg-gray-200 text-white p-4 rounded-xl shadow-lg">
//                         <h3 className="font-semibold text-yellow-400 mb-4 tracking-wide">CATEGORIES</h3>

//                         {/* All Categories Button */}
//                         <button className="w-full text-sm font-semibold text-left mb-4 px-3 py-2 bg-blue-50 rounded shadow-md  text-black hover:bg-gradient-to-r from-white to-yellow-700 hover:text-black transition transform hover:scale-105">
//                             <Link to={`/store`}>All Categories</Link>
//                         </button>

//                         {/* Category List */}
//                         <ul className="space-y-2 text-sm">
//                             {Categories.map((category) => (
//                                 <li
//                                     key={category._id}
//                                     className="flex justify-between cursor-pointer text-sm font-semibold text-left py-2 px-3 bg-blue-50 text-black   rounded shadow-md transition transform hover:scale-105 hover:bg-gradient-to-r from-white to-yellow-700 hover:text-black"
//                                 >
//                                     <Link to={`/store/${category.slug}`}>{category.name}</Link>
//                                     <span className='flex justify-end '>({category.productCount})</span>
//                                 </li>
//                             ))}
//                         </ul>

//                         {/* Color Filter */}
//                         <div className="my-10">
//                             <h4 className="font-semibold text-yellow-400 mb-2 tracking-wide">BY COLOR</h4>
//                             <div className="flex flex-wrap  gap-2">
//                                 {colors.map((color, index) => (
//                                     <li
//                                         onClick={() => setColorSlug(color.slug)}
//                                         key={index}
//                                         className="w-6 h-6 rounded-full border-2 border-gray-600 list-none hover:scale-110 transition"
//                                         style={{ backgroundColor: color.hexcode }}
//                                     ></li>
//                                 ))}
//                             </div>
//                         </div>
//                     </div>

//                     {/* Products Section */}
//                     <div className="col-span-5 p-4 bg-white text-white rounded-xl shadow-lg">
//                         {/* Limit Selector */}
//                         <select
//                             onChange={(e) => setLimit(e.target.value)}
//                             className="border  rounded-lg px-6 py-2 text-sm text-black focus:ring-2 focus:ring-black transition-all duration-300 mb-6"
//                         >
//                             <option value="0">All</option>
//                             <option value="2">2</option>
//                             <option value="20">20</option>
//                             <option value="24">24</option>
//                         </select>

//                         {/* Pagination Buttons */}

//                         {/* Product Grid */}
//                         <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-4">
//                             {products.map((product, index) => (
//                                 <div
//                                     key={index}
//                                     className=" border rounded-2xl p-4 hover:scale-[1.03] transform transition duration-300 shadow-xl hover:shadow-[0_0_15px_#facc15] relative"
//                                 >
//                                     {/* Product ID Badge */}
//                                     <div className="absolute top-2 right-2 bg-gray-200 text-[10px] sm:text-xs text-black px-2 py-1 rounded shadow">
//                                         {index + 1}
//                                     </div>

//                                     {/* Product Image */}
//                                     <img
//                                         src={`${API_BASE_URL}/images/product/${product.thumbnail}`}
//                                         alt="Product"
//                                         className="w-full object-cover rounded-lg mb-3"
//                                     />

//                                     {/* Product Name */}
//                                     <p className="text-sm sm:text-base text-gray-300 font-medium text-center">
//                                         {product.name}
//                                     </p>

//                                     {/* Price */}
//                                     <p className="text-center font-bold text-base sm:text-lg mt-1">
//                                         <span className="text-yellow-400">{formatCurrencyINR(product.finalPrice)}</span>{" "}
//                                         <span className="text-gray-500 line-through ml-2">{formatCurrencyINR(product.originalPrice)}</span>
//                                     </p>
//                                     {
//                                         console.log(product.originalPrice)

//                                     }
//                                     {/* Free Shipping */}
//                                     <button className="text-xs sm:text-sm text-green-400 font-semibold text-center mt-1">
//                                         FREE SHIPPING
//                                     </button>

//                                     {/* Stock */}
//                                     <p className="text-sm text-red-400 text-center mt-1">
//                                         {product.stock}
//                                     </p>

//                                     {/* Add to Cart Button */}
//                                     <button
//                                         onClick={() => {
//                                             carthandler({
//                                                 productId: product._id,
//                                                 finalPrice: product.finalPrice,
//                                                 originalPrice: product.originalPrice,
//                                             })
//                                         }}
//                                         className="mt-4 w-full bg-white hover:bg-gradient-to-r from-white to-yellow-700 hover:text-black transition transform hover:scale-105 text-black font-semibold text-sm sm:text-base py-2 rounded-lg shadow-md"
//                                     >
//                                         Add to Cart
//                                     </button>
//                                 </div>
//                             ))}
//                         </div>

//                     </div>
//                 </div>
//             </div>


//             {/* <ByColor /> */}

//         </>


//     );
// }    