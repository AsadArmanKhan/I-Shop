import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { MainContext } from "../../Context";

const FrontCategorySidebar = () => {
  const { API_BASE_URL, isDark, Categories } = useContext(MainContext);

  const wantedNames = [
    "Macbook",
    "Gaming PC",
    "Laptop Office",
    "Laptop 15’’",
    "M1 2023",
    "Secondhand",
  ];

  const filteredCategories = Array.isArray(Categories)
    ? Categories.filter((cat) => wantedNames.includes(cat?.name))
    : [];

  return (
    <div
      className={`w-80 text-sm shadow-xl border rounded-2xl p-6 flex flex-col transition-all duration-300 ${
        isDark
          ? "bg-gradient-to-br from-black via-gray-900 to-black text-gray-200 border-gray-800"
          : "bg-white text-gray-800 border-gray-200"
      }`}
    >
      <h2
        className={`text-2xl font-semibold mb-4 ${
          isDark ? "text-white" : "text-gray-900"
        }`}
      >
        Category
      </h2>
      <div
        className={`h-1 w-16 mb-6 rounded-full ${
          isDark ? "bg-teal-400" : "bg-teal-600"
        }`}
      ></div>

      {filteredCategories.length === 0 ? (
        <p className="text-center italic text-gray-400">No categories found.</p>
      ) : (
        filteredCategories.map((category) => (
          <Link
            to={`/store/${category?.slug}`}
            key={category?._id}
            className={`flex items-center justify-between rounded-xl p-4 mb-4 shadow hover:shadow-lg transition-shadow ${
              isDark ? "bg-gray-800 text-white" : "bg-gray-100 text-gray-800"
            }`}
          >
            <div className="flex items-center gap-3">
              <img
                src={`${API_BASE_URL}/images/categories/${category?.Image}`}
                alt={category?.name}
                className="w-6 h-6 object-cover rounded"
              />
              <span className="font-medium">{category?.name}</span>
            </div>
            <div
              className={`w-6 h-6 text-white rounded-full flex items-center justify-center text-sm font-bold ${
                isDark ? "bg-teal-400" : "bg-teal-600"
              }`}
            >
              {category?.productCount}
            </div>
          </Link>
        ))
      )}
    </div>
  );
};

export default FrontCategorySidebar;
