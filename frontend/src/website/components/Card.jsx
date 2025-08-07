import React from "react";
import { FaLaptop, FaCameraRetro } from "react-icons/fa";
import { RiComputerFill } from "react-icons/ri";
import { GiVibratingSmartphone } from "react-icons/gi";
import { TbDeviceTabletShare } from "react-icons/tb";
import TopCategories from "../pages/TopCategories";
import BestSeller from "../pages/BestSeller";
import TopCellphones from "../pages/TopCellphones";
import BestLaptop from "../pages/BestLaptop";
import Cameras from "../pages/Cameras";
import DealsOfDay from "../pages/DealsOfDay";
import FeaturedBrand from "../pages/FeaturedBrand";
import { useContext } from "react";
import { MainContext } from "../../Context";

const Card = () => {
  const { isDark, toggleTheme } = useContext(MainContext);

  return (
    <div
      className={`flex flex-col p-4 rounded-2xl shadow-xl border ${
        isDark
          ? "bg-[#1A2233] text-white border-gray-700"
          : "bg-white text-black border-gray-200"
      }`}
    >
      <button
        onClick={toggleTheme}
        className={`self-end mb-4 px-4 py-2 rounded-full text-sm font-semibold ${
          isDark ? "bg-[#1A2233] text-[#1A2233]" : "bg-white text-[#17C3B2]"
        }`}
      >
        {/* Toggle Theme */}
        {/* {theme === "dark" ? "☀️ Light Mode" : "🌙 Dark Mode"} */}
      </button>
      <TopCategories />
      <FeaturedBrand />
      <DealsOfDay />
      <BestSeller />
      <TopCellphones />
      <BestLaptop />
      <Cameras />
    </div>
  );
};

export default Card;

// import React from "react";
// import { FaLaptop, FaCameraRetro } from "react-icons/fa";
// import { RiComputerFill } from "react-icons/ri";
// import { GiVibratingSmartphone } from "react-icons/gi";
// import { TbDeviceTabletShare } from "react-icons/tb";
// import TopCategories from "../pages/TopCategories";
// import BestSeller from "../pages/BestSeller";
// import TopCellphones from "../pages/TopCellphones";
// import BestLaptop from "../pages/BestLaptop";
// import Cameras from "../pages/Cameras";
// import DealsOfDay from "../pages/DealsOfDay";
// import FeaturedBrand from "../pages/FeaturedBrand";

// const Card = () => {
//   return (
//     <>
//       <div
//         className="flex flex-col p-4 rounded-2xl
//         bg-gradient-to-br from-black via-gray-900 to-black
//         text-gray-200 shadow-xl border border-gray-800"
//       >
//         <TopCategories />
//         <FeaturedBrand />

//         <DealsOfDay />

//         <BestSeller />

//         <TopCellphones />

//         <BestLaptop />

//         <Cameras />
//       </div>
//     </>
//   );
// };

// export default Card;
