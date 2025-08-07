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
    isDark,
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

      <div
        className={`p-6 rounded-xl shadow-xl ${
          isDark ? "bg-[#0e1623] text-white" : "bg-white text-gray-800"
        }`}
      >
        <h2
          className={`text-lg font-bold mb-6 tracking-wide ${
            isDark ? "text-yellow-400" : "text-teal-600"
          }`}
        >
          BEST SELLER IN THIS CATEGORY
        </h2>

        <div className="grid grid-cols-6 gap-4">
          {/* Sidebar */}
          <CategorySidebar />

          {/* Products Section */}
          <div
            className={`col-span-5 p-4 rounded-xl shadow-lg ${
              isDark ? "bg-[#121c2b]" : "bg-gray-100"
            }`}
          >
            <select
              onChange={(e) => setLimit(e.target.value)}
              className={`border rounded-lg px-6 font-semibold py-2 text-sm mb-6 focus:ring-2 transition-all duration-300 ${
                isDark
                  ? "text-white border-gray-600 bg-[#1e293b] focus:ring-yellow-400"
                  : "text-gray-800 border-gray-300 bg-white focus:ring-teal-400"
              }`}
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
            </select>

            <AllStoreProducts />
          </div>
        </div>
      </div>
    </>
  );
}
