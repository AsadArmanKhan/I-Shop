import BestSeller from './BestSeller';
// import ByColor from './ByColor';
import TopSells from './TopSells';
import { useContext, useEffect, useState } from "react";
// import { FaAngleLeft, FaAngleRight } from "react-icons/fa";
import { MainContext } from "../../Context";
import { Link, useSearchParams, useParams } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux'
import { addItem } from '../../redux/slice/cartSlice';
import axios from 'axios';

export default function AllStoreProducts() {
    const user = useSelector((state) => state.user?.data)

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
    function cartHandler(data) {
        if (user !== null) {
            axios.post(`${API_BASE_URL}/cart/add-to-cart`, {
                user_id: user?._id,
                product_id: data?.productId,
                qty: 1,
            })
        }
        console.log(data, "Data from allStorePro...");

        dispacher(
            addItem(data)
        )
    }

    const formatCurrencyINR = (amount) => {
        return new Intl.NumberFormat('en-IN', {
            style: 'currency',
            currency: 'INR',
            maximumFractionDigits: 2
        }).format(amount);
    };

    return (

        <>
            {/* <div className="col-span-5 p-4 bg-white text-white rounded-xl shadow-lg"> */}
            {/* Limit Selector */}

             <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4  gap-6 p-4">
                            {products.map((product, index) => (
                                <div key={index}
                                    className="border rounded-2xl p-4 bg-white hover:scale-[1.03] transform transition duration-300 shadow-xl hover:shadow-[0_0_15px_#facc15] relative">
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
                        </div>

            {/* </div> */}
        </>
    )
}
