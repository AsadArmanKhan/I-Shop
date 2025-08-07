import BestSeller from "./BestSeller";
// import ByColor from './ByColor';
import TopSells from "./TopSells";
import { useContext, useEffect, useState } from "react";
// import { FaAngleLeft, FaAngleRight } from "react-icons/fa";
import { MainContext } from "../../Context";
import { Link, useSearchParams, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addItem } from "../../redux/slice/cartSlice";
import axios from "axios";

export default function AllStoreProducts() {
  const user = useSelector((state) => state.user?.data);
  const dispatch = useDispatch();
  const { categorySlug } = useParams();
  const [colorSlug, setColorSlug] = useState();
  const [searchParams, setSearchParams] = useSearchParams();

  const { getProduct, products, getCategory, API_BASE_URL, isDark } =
    useContext(MainContext);

  useEffect(() => {
    getCategory();
  }, []);

  function cartHandler(data) {
    if (user !== null) {
      axios.post(`${API_BASE_URL}/cart/add-to-cart`, {
        user_id: user?._id,
        product_id: data?.productId,
        qty: 1,
      });
    }
    dispatch(addItem(data));
  }

  const formatCurrencyINR = (amount) => {
    return new Intl.NumberFormat("en-IN", {
      style: "currency",
      currency: "INR",
      maximumFractionDigits: 2,
    }).format(amount);
  };

  return (
    <>
      <div
        className={`grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-4 transition-colors duration-300 ${
          isDark ? "bg-[#1a2233]" : "bg-white"
        }`}
      >
        {products.map((product, index) => (
          <div
            key={index}
            className={`border rounded-2xl p-4 transition duration-300 shadow-xl relative hover:scale-[1.03] transform ${
              isDark
                ? "bg-[#1f2a3c] text-white hover:shadow-[0_0_15px_#17C3B2]"
                : "bg-white text-black hover:shadow-[0_0_15px_#facc15]"
            }`}
          >
            <div
              className={`absolute top-2 right-2 px-2 py-1 rounded text-[10px] sm:text-xs shadow ${
                isDark ? "bg-gray-700 text-white" : "bg-gray-200 text-black"
              }`}
            >
              {index + 1}
            </div>

            <Link to={`/productdetailpage/${product._id}`} className="block">
              <img
                src={`${API_BASE_URL}/images/product/${product.thumbnail}`}
                alt={product.name}
                className="w-full object-cover rounded-lg mb-3 hover:scale-[1.03] transform transition duration-300"
              />
              <p
                className={`text-sm sm:text-base font-medium text-center ${
                  isDark ? "text-white" : "text-gray-800"
                }`}
              >
                {product.name}
              </p>
            </Link>

            <p className="text-center font-bold text-base sm:text-lg mt-1">
              <span className="text-yellow-400">
                {formatCurrencyINR(product.finalPrice)}
              </span>{" "}
              <span className="line-through ml-2 text-gray-500">
                {formatCurrencyINR(product.originalPrice)}
              </span>
            </p>

            <button
              className={`text-xs sm:text-sm font-semibold text-center mt-1 ${
                isDark ? "text-green-300" : "text-green-500"
              }`}
            >
              FREE SHIPPING
            </button>

            <p
              className={`text-sm text-center mt-1 ${
                isDark ? "text-red-400" : "text-red-500"
              }`}
            >
              {product.stock}
            </p>

            <button
              onClick={() =>
                cartHandler({
                  productId: product._id,
                  finalPrice: product.finalPrice,
                  originalPrice: product.originalPrice,
                })
              }
              className={`mt-4 w-full font-semibold text-sm sm:text-base py-2 rounded-lg shadow-md transition transform hover:scale-105 ${
                isDark
                  ? "bg-[#1a2233] text-white hover:bg-teal-500 hover:text-black"
                  : "bg-white text-black hover:bg-gradient-to-r from-white to-yellow-700 hover:text-black"
              }`}
            >
              Add to Cart
            </button>
          </div>
        ))}
      </div>
    </>
  );
}
