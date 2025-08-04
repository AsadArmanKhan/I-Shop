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
          {/* <div
            className="w-full sm:w-64 md:w-72 lg:w-60 bg-[#121c2b] p-4 rounded-xl shadow-lg 
             mb-4 sm:mb-0 flex-shrink-0"
          >
            <h3 className="font-semibold text-yellow-400 mb-4 tracking-wide text-base sm:text-lg md:text-xl">
              CATEGORIES
            </h3>

            <button
              className="w-full text-xs sm:text-sm font-semibold text-left mb-4 px-3 py-2 bg-blue-50 rounded shadow-md text-black 
               hover:bg-gradient-to-r from-white to-yellow-700 hover:text-black transition transform hover:scale-105"
            >
              <Link to={`/store`}>All Categories</Link>
            </button>

            <ul className="space-y-2 text-xs sm:text-sm">
              {Categories.map((category) => (
                <li
                  key={category._id}
                  className="flex justify-between items-center cursor-pointer py-2 px-3 bg-blue-50 text-black rounded shadow-md 
                   transition transform hover:scale-105 hover:bg-gradient-to-r from-white to-yellow-700 hover:text-black"
                >
                  <Link to={`/store/${category.slug}`} className="truncate">
                    {category.name}
                  </Link>
                  <span className="ml-2 text-xs font-medium">
                    ({category.productCount})
                  </span>
                </li>
              ))}
            </ul>
          </div> */}

          <CategorySidebar />
          {/* Products Section */}
          <div className="col-span-5 p-4 bg-[#121c2b] rounded-xl shadow-lg">
            <select
              onChange={(e) => setLimit(e.target.value)}
              className="border rounded-lg px-6 py-2 text-sm text-black focus:ring-2 focus:ring-yellow-400 transition-all duration-300 mb-6"
            >
              <option value="0">All</option>
              <option value="2">2</option>
              <option value="20">20</option>
              <option value="24">24</option>
            </select>
            <AllStoreProducts />
          </div>
        </div>
      </div>
    </>
  );
}
