import React, { useEffect } from 'react';
import {
    FiGrid,
    FiLayout,
    FiChevronDown,
    FiBox,
    FiCpu,
    FiTrendingUp
} from 'react-icons/fi';
import { FaProductHunt } from "react-icons/fa6";
import { IoIosColorPalette } from "react-icons/io";
import { TbCategoryFilled } from "react-icons/tb";
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { logout, setAdmin } from '../../redux/slice/adminSlice';




const SideMenu = () => {
    const navigator = useNavigate()
    const dispatcher = useDispatch()
    const admin = useSelector((state) => state.admin?.data)

    useEffect(
        () => {
            const admin = localStorage.getItem('admin')
            const token = localStorage.getItem('token')
            if (admin == null) {
                navigator("/admin/login")
            } else {
                const lsadmin = JSON.parse(admin)
                dispatcher(setAdmin({ admin: lsadmin, token: token }))
            }
        },
        [])
    const handleLogout = () => {
        localStorage.removeItem("admin")
        localStorage.removeItem("adminTimeStamp")
        localStorage.removeItem("token")
        navigator("/admin/login");
        dispatcher(setAdmin(null))
    }

    return (
        <div className="w-full h-screen bg-[#1e1e2f] text-gray-300 p-5">
            {/* Logo */}
            <div className="text-white text-2xl font-bold mb-8 tracking-wide">
                <span className="text-white">ISHOP</span>
                <span className="text-yellow-400"> AD</span>
                <span className="text-white">MIN</span>
            </div>

            {/* Menu Section */}
            <div className="space-y-4">
                <div className="uppercase text-xs text-gray-500 font-semibold">Menu</div>

                <div className="flex items-center justify-between hover:text-white cursor-pointer">
                    <Link to="/admin">
                        <div className="flex items-center gap-3">
                            <FiTrendingUp className="text-lg" />
                            <span>Dashboards</span>
                        </div>
                    </Link>


                </div>

                <div className="flex items-center justify-between hover:text-white cursor-pointer">
                    <div className="flex items-center gap-3">
                        <FiGrid className="text-lg" />
                        <span>Apps</span>
                    </div>
                    <FiChevronDown className="text-sm" />
                </div>

                <div className="flex items-center gap-3 hover:text-white cursor-pointer">
                    <FiLayout className="text-lg" />
                    <span>Layouts</span>
                    <span className="ml-auto bg-red-500 text-white text-xs px-2 py-0.5 rounded-full font-semibold">Hot</span>
                </div>
            </div>

            {/* Pages Section */}
            <div className="mt-8 space-y-4">
                <div className="uppercase text-xs text-gray-500 font-semibold">Pages</div>
                <Link className="flex items-center gap-3 hover:text-white cursor-pointer" to="/admin/category">

                    <TbCategoryFilled className="text-lg" />
                    <span>Category</span>
                </Link>

                <Link to="/admin/color" className="flex items-center gap-3 hover:text-white cursor-pointer">
                    <IoIosColorPalette className="text-lg" />
                    <span>Color</span>

                </Link>

                <Link to="/admin/product" className="flex items-center gap-3 hover:text-white cursor-pointer">
                    <FaProductHunt className="text-lg" />
                    <span>Product</span>

                </Link>
            </div>

            {/* Components Section */}
            <div className="mt-8 space-y-4">
                <div className="uppercase text-xs text-gray-500 font-semibold">Components</div>

                <div className="flex items-center gap-3 hover:text-white cursor-pointer">
                    <FiBox className="text-lg" />
                    <span>Base UI</span>

                </div>

                <div className="flex items-center gap-3 hover:text-white cursor-pointer">
                    <FiCpu className="text-lg" />
                    <span>Advance UI</span>

                </div>
            </div>
        </div>
    );
}

export default SideMenu;