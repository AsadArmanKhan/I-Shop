import React from "react";
import {
  FiUsers,
  FiDollarSign,
  FiCheckSquare,
  FiBriefcase,
} from "react-icons/fi";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
} from "recharts";

const salesData = [
  { name: "Jan", sales: 18000 },
  { name: "Feb", sales: 16000 },
  { name: "Mar", sales: 5000 },
  { name: "Apr", sales: 7000 },
  { name: "May", sales: 3000 },
  { name: "Jun", sales: 14000 },
  { name: "Jul", sales: 15000 },
  { name: "Aug", sales: 16000 },
  { name: "Sep", sales: 17000 },
  { name: "Oct", sales: 18000 },
  { name: "Nov", sales: 17500 },
  { name: "Dec", sales: 20000 },
];

const trafficData = [
  { name: "Desktop", value: 63 },
  { name: "Tablet", value: 15 },
  { name: "Phone", value: 22 },
];

const COLORS = ["#6366f1", "#f59e0b", "#10b981"];

const DashBoard = () => {
  return (
    <div className="flex h-screen bg-gray-50">
      <div className="flex-1 flex flex-col p-6 space-y-6">
        {/* Top Stats Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="bg-white rounded-2xl shadow p-5">
            <div className="flex items-center justify-between">
              <h2 className="text-sm text-gray-500">Budget</h2>
              <FiDollarSign className="text-indigo-500 text-xl" />
            </div>
            <p className="text-2xl font-bold mt-2">$24k</p>
            <p className="text-green-500 text-sm">↑ 12% since last month</p>
          </div>

          <div className="bg-white rounded-2xl shadow p-5">
            <div className="flex items-center justify-between">
              <h2 className="text-sm text-gray-500">Total Customers</h2>
              <FiUsers className="text-green-500 text-xl" />
            </div>
            <p className="text-2xl font-bold mt-2">1.6k</p>
            <p className="text-red-500 text-sm">↓ 16% since last month</p>
          </div>

          <div className="bg-white rounded-2xl shadow p-5">
            <div className="flex items-center justify-between">
              <h2 className="text-sm text-gray-500">Task Progress</h2>
              <FiCheckSquare className="text-yellow-500 text-xl" />
            </div>
            <p className="text-2xl font-bold mt-2">75.5%</p>
            <div className="w-full bg-gray-200 h-2 rounded mt-2">
              <div
                className="bg-indigo-500 h-2 rounded"
                style={{ width: "75.5%" }}
              ></div>
            </div>
          </div>

          <div className="bg-white rounded-2xl shadow p-5">
            <div className="flex items-center justify-between">
              <h2 className="text-sm text-gray-500">Total Profit</h2>
              <FiBriefcase className="text-indigo-500 text-xl" />
            </div>
            <p className="text-2xl font-bold mt-2">$15k</p>
          </div>
        </div>

        {/* Sales and Traffic Source */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Sales Chart */}
          <div className="bg-white rounded-2xl shadow p-5">
            <h2 className="text-lg font-semibold text-gray-700 mb-4">Sales</h2>
            <ResponsiveContainer width="100%" height={250}>
              <BarChart data={salesData}>
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Bar dataKey="sales" fill="#6366f1" radius={[6, 6, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </div>

          {/* Traffic Source */}
          <div className="bg-white rounded-2xl shadow p-5">
            <h2 className="text-lg font-semibold text-gray-700 mb-4">
              Traffic Source
            </h2>
            <ResponsiveContainer width="100%" height={250}>
              <PieChart>
                <Pie
                  data={trafficData}
                  dataKey="value"
                  cx="50%"
                  cy="50%"
                  innerRadius={60}
                  outerRadius={90}
                  paddingAngle={4}
                >
                  {trafficData.map((entry, index) => (
                    <Cell
                      key={`cell-${index}`}
                      fill={COLORS[index % COLORS.length]}
                    />
                  ))}
                </Pie>
              </PieChart>
            </ResponsiveContainer>
            <div className="flex justify-around mt-4 text-sm">
              <div className="flex flex-col items-center">
                <span className="w-3 h-3 rounded-full bg-indigo-500 inline-block"></span>
                <p>Desktop</p>
                <p className="font-semibold">63%</p>
              </div>
              <div className="flex flex-col items-center">
                <span className="w-3 h-3 rounded-full bg-yellow-500 inline-block"></span>
                <p>Tablet</p>
                <p className="font-semibold">15%</p>
              </div>
              <div className="flex flex-col items-center">
                <span className="w-3 h-3 rounded-full bg-green-500 inline-block"></span>
                <p>Phone</p>
                <p className="font-semibold">22%</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashBoard;

// import React from "react";
// // import SideMenu from ".../admin";
// import confetti from "canvas-confetti";
// import { FiBell, FiUser } from "react-icons/fi";

// const DashBoard = () => {
//   const triggerConfetti = () => {
//     confetti({ particleCount: 100, spread: 70, origin: { y: 0.6 } });
//   };
//   return (
//     <div className="flex h-screen bg-gray-100">
//       <div className="flex-1 flex flex-col">
//         {/* Page Content */}
//         <main className="p-6">
//           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
//             {/* Card Example */}
//             <div className="bg-white rounded-2xl shadow p-5 transition-all hover:scale-[1.02]">
//               <h2 className="text-xl font-semibold text-gray-800">Users</h2>
//               <p className="text-3xl font-bold mt-2">1,245</p>
//               <p className="text-sm text-gray-500 mt-1">Active this month</p>
//             </div>
//             <div className="bg-white rounded-2xl shadow p-5 transition-all hover:scale-[1.02]">
//               <h2 className="text-xl font-semibold text-gray-800">Revenue</h2>
//               <p className="text-3xl font-bold mt-2">$13,548</p>
//               <p className="text-sm text-gray-500 mt-1">Total income</p>
//             </div>
//             <div className="bg-white rounded-2xl shadow p-5 transition-all hover:scale-[1.02]">
//               <h2 className="text-xl font-semibold text-gray-800">Orders</h2>
//               <p className="text-3xl font-bold mt-2">346</p>
//               <p className="text-sm text-gray-500 mt-1">Pending delivery</p>
//             </div>
//           </div>
//         </main>
//       </div>
//     </div>
//   );
// };

// export default DashBoard;
