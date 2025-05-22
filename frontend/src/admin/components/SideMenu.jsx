import React, { useEffect } from "react";
import {
    FiGrid,
    FiLayout,
    FiBox,
    FiLayers,
} from "react-icons/fi";
import { FaProductHunt } from "react-icons/fa6";
import { IoMdColorFill } from "react-icons/io";
import { BiSolidCategory } from "react-icons/bi";
import { Link, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
// import { state } from "../../redux/slice/adminSlice";
// import { state } from "../../redux/slice/adminSlice";



// import { MdWhatshot } from "react-icons/md";

const SideMenu = () => {


    const admin = useSelector((state) => state.admin?.data)
    const navigator = useNavigate()
    useEffect(
        () => {
            if (admin == null) {
                navigator("/admin/login")
            }
        },
        [admin]
    )

    return (
        <div className="w-full h-full bg-[#0f172a] text-white shadow-lg p-4 space-y-6">
            {/* Logo */}
            <div className="text-3xl font-bold text-center tracking-wider">
                <span className="text-white">ADMIN</span>
                <span className="text-yellow-400">|</span>
                <span className="text-white">ZONE</span>
            </div>

            {/* Sections */}
            <div className="space-y-4">
                {/* Menu Section */}
                <div>
                    <h3 className="text-xs text-gray-400 uppercase mb-2">Menu</h3>
                    <ul className="space-y-2">
                        <Link to={"/admin"}>
                            <li className="flex items-center justify-between text-sm hover:bg-slate-800 rounded-md px-3 py-2 cursor-pointer">
                                <span className="flex items-center gap-2">
                                    <FiGrid />
                                    Dashboards
                                </span>
                            </li>
                        </Link>
                        <li className="flex items-center gap-2 text-sm hover:bg-slate-800 rounded-md px-3 py-2 cursor-pointer">
                            <FiLayout />
                            Apps
                        </li>
                        <li className="flex items-center justify-between text-sm hover:bg-slate-800 rounded-md px-3 py-2 cursor-pointer">
                            <span className="flex items-center gap-2">
                                <FiLayout />
                                Layouts
                            </span>
                            <span className="bg-red-600 text-white text-[10px] font-semibold px-2 py-[2px] rounded-full">
                                HOT
                            </span>
                        </li>
                    </ul>
                </div>

                {/* Pages Section */}
                <div>
                    <h3 className="text-xs text-gray-400 uppercase mb-2">Pages</h3>
                    <ul className="space-y-2">
                        <Link to={"/admin/category"}>
                            <li className="flex items-center gap-2 text-sm hover:bg-slate-800 rounded-md px-3 py-2 cursor-pointer">
                                <BiSolidCategory />
                                Category
                            </li>
                        </Link>
                        <Link to={"/admin/color"}>
                            <li className="flex items-center gap-2 text-sm hover:bg-slate-800 rounded-md px-3 py-2 cursor-pointer">
                                <IoMdColorFill />
                                Colors
                            </li>
                        </Link>
                        <Link to={"/admin/product"}>
                            <li className="flex items-center gap-2 text-sm hover:bg-slate-800 rounded-md px-3 py-2 cursor-pointer">
                                <FaProductHunt />

                                Product
                            </li>
                        </Link>
                    </ul>
                </div>

                {/* Components Section */}
                <div>
                    <h3 className="text-xs text-gray-400 uppercase mb-2">Components</h3>
                    <ul className="space-y-2">
                        <li className="flex items-center gap-2 text-sm hover:bg-slate-800 rounded-md px-3 py-2 cursor-pointer">
                            <FiBox />
                            Base UI
                        </li>
                        <li className="flex items-center gap-2 text-sm hover:bg-slate-800 rounded-md px-3 py-2 cursor-pointer">
                            <FiLayers />
                            Advance UI
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default SideMenu;
