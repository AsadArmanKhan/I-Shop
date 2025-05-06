import React from "react";
// import SideMenu from ".../admin";
import confetti from "canvas-confetti";
import { FiBell, FiUser } from "react-icons/fi";

const DashBoard = () => {
    const triggerConfetti = () => {
        confetti({ particleCount: 100, spread: 70, origin: { y: 0.6 } });
    };
    return (

        <div className="flex h-screen bg-gray-100">
            {/* Sidebar */}
            {/* <SideMenu /> */}

            {/* Main Content */}
            <div className="flex-1 flex flex-col">
                {/* Top Navbar */}
                {/* <header className="bg-white shadow px-6 py-4 flex items-center justify-between">
                    <h1 className="text-2xl font-bold text-gray-700">Dashboard</h1>
                    <div className="flex items-center gap-4">
                        <FiBell className="text-xl text-gray-600 cursor-pointer" />
                        <div className="w-8 h-8 rounded-full bg-gray-300 flex items-center justify-center">
                            <FiUser />
                        </div>
                    </div>
                </header> */}

                {/* Page Content */}
                <main className="p-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {/* Card Example */}
                        <div className="bg-white rounded-2xl shadow p-5 transition-all hover:scale-[1.02]">
                            <h2 className="text-xl font-semibold text-gray-800">Users</h2>
                            <p className="text-3xl font-bold mt-2">1,245</p>
                            <p className="text-sm text-gray-500 mt-1">Active this month</p>
                        </div>
                        <div className="bg-white rounded-2xl shadow p-5 transition-all hover:scale-[1.02]">
                            <h2 className="text-xl font-semibold text-gray-800">Revenue</h2>
                            <p className="text-3xl font-bold mt-2">$13,548</p>
                            <p className="text-sm text-gray-500 mt-1">Total income</p>
                        </div>
                        <div className="bg-white rounded-2xl shadow p-5 transition-all hover:scale-[1.02]">
                            <h2 className="text-xl font-semibold text-gray-800">Orders</h2>
                            <p className="text-3xl font-bold mt-2">346</p>
                            <p className="text-sm text-gray-500 mt-1">Pending delivery</p>
                        </div>
                    </div>
                </main>
            </div>
        </div>
    );
};

export default DashBoard;
