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

const Card = () => {
  return (
    <>
      <div className="flex flex-col  p-4 rounded-2xl overflow-hidden">
        <TopCategories />

        <FeaturedBrand />
      </div>
      
      <DealsOfDay />

      <BestSeller />

      <TopCellphones />

      <BestLaptop />

      <Cameras />
    </>
  );
};

export default Card;
