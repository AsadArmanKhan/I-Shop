import { FaArrowLeft, FaPlus } from "react-icons/fa";

export default function AddCategory() {
    return (
        <div className="max-w-xl mx-auto p-6">
            {/* Go Back Button */}
            <button className="flex items-center gap-2 text-white bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded-md shadow mb-6 transition-all duration-300">
                <FaArrowLeft />
                Go Back
            </button>

            {/* Form Card */}
            <div className="bg-white p-6 rounded-lg shadow border">
                <h2 className="text-2xl font-semibold mb-4">Create New Category</h2>

                <form className="space-y-4">
                    {/* Category Name */}
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                            Category Name
                        </label>
                        <input
                            type="text"
                            placeholder="e.g. Electronics"
                            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
                        />
                    </div>

                    {/* Description */}
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                            Description
                        </label>
                        <textarea
                            rows="3"
                            placeholder="Short description about the category"
                            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
                        ></textarea>
                    </div>

                    {/* Status */}
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                            Status
                        </label>
                        <select className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400">
                            <option value="active">Active</option>
                            <option value="inactive">Inactive</option>
                        </select>
                    </div>

                    {/* Submit Button */}
                    <button
                        type="submit"
                        className="flex items-center gap-2 bg-green-600 hover:bg-green-700 text-white px-5 py-2 rounded-md shadow transition-all duration-300"
                    >
                        <FaPlus />
                        Create Category
                    </button>
                </form>
            </div>
        </div>
    );
}
