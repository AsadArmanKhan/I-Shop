import BestSeller from './BestSeller';
// import ByColor from './ByColor';
import TopSells from './TopSells';
import { useContext, useEffect, useState } from "react";
// import { FaAngleLeft, FaAngleRight } from "react-icons/fa";
import { MainContext } from "../../Context";
import { Link, useSearchParams, useParams } from "react-router-dom";
import { useDispatch } from 'react-redux'
import { addItem } from '../../redux/slice/cartSlice';

export default function AllStoreProducts() {


    const dispacher = useDispatch()
    const { categorySlug } = useParams();
    // console.log(categorySlug);
    const [colorSlug, setColorSlug] = useState();
    const [searchParams, setSearchParams] = useSearchParams()
    const { getProduct, products, getCategory, API_BASE_URL } = useContext(MainContext)

    useEffect(
        () => {
            getCategory()
        },
        []
    )

    return (

        <>
            {/* <div className="col-span-5 p-4 bg-white text-white rounded-xl shadow-lg"> */}
            {/* Limit Selector */}

            Product Grid
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-4">
                {products.map((product, index) => (
                    // console.log(product),
                    <div
                        key={index}
                        className=" border rounded-2xl p-4 hover:scale-[1.03] transform transition duration-300 shadow-xl hover:shadow-[0_0_15px_#facc15] relative"
                    >
                        {/* Product ID Badge */}
                        <div className="absolute top-2 right-2 bg-gray-200 text-[10px] sm:text-xs text-black px-2 py-1 rounded shadow">
                            {index + 1}
                        </div>

                        {/* Product Image */}
                        <img
                            src={`${API_BASE_URL}/images/product/${product.thumbnail}`}
                            alt="Product"
                            className="w-full object-cover rounded-lg mb-3"
                        />

                        {/* Product Name */}
                        <p className="text-sm sm:text-base text-gray-300 font-medium text-center">
                            {product.name}
                        </p>

                        {/* Price */}
                        <p className="text-center font-bold text-base sm:text-lg mt-1">
                            <span className="text-yellow-400">{product.finalPrice}</span>{" "}
                            <span className="text-gray-500 line-through ml-2">{product.orignalPrice}</span>
                        </p>
                        {
                            // console.log(product.finalPrice)

                        }
                        {/* Free Shipping */}
                        <button className="text-xs sm:text-sm text-green-400 font-semibold text-center mt-1">
                            FREE SHIPPING
                        </button>

                        {/* Stock */}
                        <p className="text-sm text-red-400 text-center mt-1">
                            {product.stock}
                        </p>

                        {/* Add to Cart Button */}
                        <button
                            onClick={() => {
                                dispacher(
                                    addItem({
                                        productId: product._id,
                                        finalPrice: product.finalPrice,
                                        orignalPrice: product.orignalPrice,
                                    })
                                )
                                // console.log('hello');

                            }}
                            className="mt-4 w-full bg-white hover:bg-gradient-to-r from-white to-yellow-700 hover:text-black transition transform hover:scale-105 text-black font-semibold text-sm sm:text-base py-2 rounded-lg shadow-md"
                        >
                            Add to Cart
                        </button>
                    </div>
                ))}
            </div>

            {/* </div> */}


        </>
    )
}
