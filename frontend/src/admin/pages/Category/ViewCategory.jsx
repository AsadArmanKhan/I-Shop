import { FaArrowLeft } from "react-icons/fa";

export default function ViewCategory() {
  return (
    <div className="p-6 max-w-6xl mx-auto">
      {/* Go Back Button */}
      <button className="flex items-center gap-2 text-white bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded-md shadow mb-6 transition-all duration-300">
        <FaArrowLeft />
        Go Back
      </button>

      {/* Table */}
      <div className="overflow-x-auto rounded-lg shadow">
        <table className="min-w-full bg-white text-left border border-gray-200">
          <thead className="bg-gray-100 border-b">
            <tr>
              <th className="py-3 px-4 text-gray-700 font-semibold">#</th>
              <th className="py-3 px-4 text-gray-700 font-semibold">Category</th>
              <th className="py-3 px-4 text-gray-700 font-semibold">Description</th>
              <th className="py-3 px-4 text-gray-700 font-semibold">Status</th>
            </tr>
          </thead>
          <tbody>
            {/* Sample rows */}
            <tr className="border-b hover:bg-gray-50">
              <td className="py-3 px-4">1</td>
              <td className="py-3 px-4">Electronics</td>
              <td className="py-3 px-4">Gadgets and digital devices</td>
              <td className="py-3 px-4 text-green-600 font-medium">Active</td>
            </tr>
            <tr className="border-b hover:bg-gray-50">
              <td className="py-3 px-4">2</td>
              <td className="py-3 px-4">Beauty</td>
              <td className="py-3 px-4">Makeup and skincare</td>
              <td className="py-3 px-4 text-green-600 font-medium">Active</td>
            </tr>
            {/* Add more rows as needed */}
          </tbody>
        </table>
      </div>
    </div>
  );
}
