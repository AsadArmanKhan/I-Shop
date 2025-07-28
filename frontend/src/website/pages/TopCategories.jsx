import React, { useContext } from "react";
import { MainContext } from "../../Context";
import { Link } from "react-router-dom";

export default function TopCategories() {
  const { Categories, API_BASE_URL } = useContext(MainContext);
  console.log(Categories);

  const wantedNames = [
    "Macbook",
    "Gaming PC",
    "Laptop Office",
    "Laptop 15’’",
    "M1 2023",
    "Secondhand",
  ];

  const filteredCategories = Categories.filter((cat) =>
    wantedNames.includes(cat?.name)
  );

  return (
    <div className="flex">
      {/* Left Sidebar */}
      <div className="w-80 bg-white rounded-2xl shadow-md p-6 flex flex-col">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">Category</h2>
        <div className="h-1 w-16 bg-teal-400 mb-6 rounded-full"></div>

        {filteredCategories.map((category) => (
          <Link
            to={`/store/${category?.slug}`}
            key={category?._id}
            className="flex items-center justify-between bg-white rounded-xl p-4 mb-4 shadow hover:shadow-lg transition-shadow"
          >
            <div className="flex items-center gap-3">
              <img
                src={`${API_BASE_URL}/images/categories/${category?.Image}`}
                alt={category?.name}
                className="w-6 h-6 object-cover rounded"
              />
              <span className="text-gray-800 font-medium">
                {category?.name}
              </span>
            </div>
            <div className="w-6 h-6 bg-teal-400 text-white rounded-full flex items-center justify-center text-sm font-bold">
              {category?.productCount}
            </div>
          </Link>
        ))}
      </div>

      {/* Right Section */}
      <div className="flex-1 ml-6 rounded-2xl overflow-hidden relative">
        <div
          className="w-full h-full min-h-[500px] bg-cover bg-center rounded-2xl flex flex-col justify-center items-start p-10"
          style={{
            backgroundImage: "url('./img/Tabpanel.png')",
          }}
        ></div>
      </div>
    </div>
  );
}
