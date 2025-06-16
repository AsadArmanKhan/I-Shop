
// import AllCategories from './AllCategories';
import BestSeller from './BestSeller';
// import ByColor from './ByColor';
import TopSells from './TopSells';
import { useContext, useEffect, useState } from "react";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa";
import { MainContext } from "../../Context";
import { Link, useSearchParams, useParams } from "react-router-dom";
import { useDispatch } from 'react-redux'
import { addItem } from '../../redux/slice/cartSlice';
import AllStoreProducts from './AllStoreProducts';
// import { hex } from 'framer-motion';
export default function Store() {
    const dispacher = useDispatch()
    const { categorySlug } = useParams();
    console.log(categorySlug);
    const [limit, setLimit] = useState(0)
    const [colorSlug, setColorSlug] = useState();
    const [searchParams, setSearchParams] = useSearchParams()
    const { getProduct, products, getCategory, Categories,
        COLOR_URL, getColors, colors, API_BASE_URL } = useContext(MainContext)

    // console.log(products)


    useEffect(
        () => {
            getCategory()
            getColors()
            // getProduct()
            if (searchParams.get('limit')) {
                setLimit(searchParams.get('limit'))
            }
            if (searchParams.get('colorSlug')) {
                setColorSlug(searchParams.get('colorSlug'))
            }
        },
        []
    )

    useEffect(
        () => {
            const query = {};
            if (limit) {
                query.limit = limit;
            }
            if (colorSlug) {
                query.colorSlug = colorSlug;
            }
            setSearchParams(query)
            getProduct(null, limit, categorySlug, colorSlug)
        },
        [limit, categorySlug, colorSlug]
    )
    return (
        <>
            <TopSells />
            {/* <BestSeller /> */}
            {/* <AllCategories /> */}

            <div className="bg-gray-100 p-6 rounded-xl shadow-xl text-white">
                <h2 className="text-lg font-bold mb-6 text-yellow-400 tracking-wide">BEST SELLER IN THIS CATEGORY</h2>
                <div className="grid grid-cols-6 gap-4">
                    {/* Sidebar */}
                    <div className="col-span-1 bg-gray-200 text-white p-4 rounded-xl shadow-lg">
                        <h3 className="font-semibold text-yellow-400 mb-4 tracking-wide">CATEGORIES</h3>

                        {/* All Categories Button */}
                        <button className="w-full text-sm font-semibold text-left mb-4 px-3 py-2 bg-blue-50 rounded shadow-md  text-black hover:bg-gradient-to-r from-white to-yellow-700 hover:text-black transition transform hover:scale-105">
                            <Link to={`/store`}>All Categories</Link>
                        </button>

                        {/* Category List */}
                        <ul className="space-y-2 text-sm">
                            {Categories.map((category) => (
                                <li
                                    key={category._id}
                                    className="flex justify-between cursor-pointer text-sm font-semibold text-left py-2 px-3 bg-blue-50 text-black   rounded shadow-md transition transform hover:scale-105 hover:bg-gradient-to-r from-white to-yellow-700 hover:text-black"
                                >
                                    <Link to={`/store/${category.slug}`}>{category.name}</Link>
                                    <span className='flex justify-end '>({category.productCount})</span>
                                </li>
                            ))}
                        </ul>
                        {/* Color Filter */}
                        <div className="my-10">
                            <h4 className="font-semibold text-yellow-400 mb-2 tracking-wide">BY COLOR</h4>
                            <div className="flex flex-wrap  gap-2">
                                {colors.map((color, index) => (
                                    <li
                                        onClick={() => setColorSlug(color.slug)}
                                        key={index}
                                        className="w-6 h-6 rounded-full border-2 border-gray-600 list-none hover:scale-110 transition"
                                        style={{ backgroundColor: color.hexcode }}
                                    ></li>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Products Section */}
                    <div className="col-span-5 p-4 bg-white text-white rounded-xl shadow-lg">
                        {/* Limit Selector */}
                        <select
                            onChange={(e) => setLimit(e.target.value)}
                            className="border  rounded-lg px-6 py-2 text-sm text-black focus:ring-2 focus:ring-black transition-all duration-300 mb-6"
                        >
                            <option value="0">All</option>
                            <option value="2">2</option>
                            <option value="20">20</option>
                            <option value="24">24</option>
                        </select>
                        {/* Product Grid */}
                        {/* Product Grid */}

                        <AllStoreProducts />

                    </div>
                </div>
            </div>


            {/* <ByColor /> */}

        </>


    );
}


