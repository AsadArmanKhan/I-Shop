import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { FaEdit } from "react-icons/fa";
import { MdPreview } from "react-icons/md";
import { AiFillDelete } from "react-icons/ai";

const dummyProducts = [
    {
        _id: "1",
        name: "Samsung Galaxy S24",
        slug: "samsung-galaxy-s24",
        orignalPrice: 79999,
        discountPercentage: 15,
        finalPrice: 67999,
        stock: true,
        topSelling: true,
        status: true,
        thumbnail: "https://via.placeholder.com/150",
    },
    {
        _id: "2",
        name: "Sony Bravia 55'' 4K TV",
        slug: "sony-bravia-55-4k-tv",
        orignalPrice: 120000,
        discountPercentage: 10,
        finalPrice: 108000,
        stock: false,
        topSelling: false,
        status: false,
        thumbnail: "",
    },
    {
        _id: "3",
        name: "HP Pavilion Laptop",
        slug: "hp-pavilion-laptop",
        orignalPrice: 60000,
        discountPercentage: 20,
        finalPrice: 48000,
        stock: true,
        topSelling: false,
        status: true,
        thumbnail: "https://via.placeholder.com/150",
    },
];

const ViewProduct = () => {
    const navigate = useNavigate();

    return (
        <div className="p-4">
            <div className="flex justify-between items-center mb-4">
                <h2 className="text-lg font-semibold text-gray-800">Product List</h2>
                <Link to={"/admin/product/add"}>
                    <button
                        className="px-4 py-2 text-sm font-medium text-white bg-blue-600 rounded hover:bg-blue-700 transition"
                    >
                        + Add Product
                    </button>
                </Link>
            </div>

            <div className="overflow-x-auto">
                <table className="min-w-full border border-gray-200 text-sm bg-white shadow-md rounded-lg">
                    <thead className="bg-gray-100 text-gray-600 uppercase text-xs">
                        <tr>
                            <th className="p-3 text-left">Thumbnail</th>
                            <th className="p-3 text-left">Name</th>
                            <th className="p-3 text-left">Category</th>
                            <th className="p-3 text-left">Original Price</th>
                            <th className="p-3 text-left">Discount (%)</th>
                            <th className="p-3 text-left">Final Price</th>
                            <th className="p-3 text-left">Stock</th>
                            <th className="p-3 text-left">Top Selling</th>
                            <th className="p-3 text-left">Status</th>
                            <th className="p-3 text-left">Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {dummyProducts.map((item) => (
                            <tr key={item._id} className="border-t hover:bg-gray-50">
                                <td className="p-3">
                                    {item.thumbnail ? (
                                        <img
                                            src={item.thumbnail}
                                            alt={item.name}
                                            className="w-12 h-12 rounded object-cover border"
                                        />
                                    ) : (
                                        <span className="italic text-gray-400">No Image</span>
                                    )}
                                </td>
                                <td className="p-3">{item.name}</td>
                                <td className="p-3">{item.slug}</td>
                                <td className="p-3">₹{item.orignalPrice}</td>
                                <td className="p-3">{item.discountPercentage}%</td>
                                <td className="p-3 text-green-600 font-semibold">₹{item.finalPrice}</td>
                                <td className="p-3">
                                    <span
                                        className={`px-2 py-1 text-xs font-medium rounded-full ${item.stock ? "bg-green-100 text-green-600" : "bg-red-100 text-red-600"
                                            }`}
                                    >
                                        {item.stock ? "In Stock" : "Out of Stock"}
                                    </span>
                                </td>
                                <td className="p-3">
                                    <span
                                        className={`px-2 py-1 text-xs font-medium rounded-full ${item.topSelling ? "bg-blue-100 text-blue-600" : "bg-gray-100 text-gray-500"
                                            }`}
                                    >
                                        {item.topSelling ? "Yes" : "No"}
                                    </span>
                                </td>
                                <td className="p-3">
                                    <span
                                        className={`px-2 py-1 text-xs font-medium rounded-full ${item.status ? "bg-green-200 text-green-800" : "bg-red-200 text-red-800"
                                            }`}
                                    >
                                        {item.status ? "Active" : "Inactive"}
                                    </span>
                                </td>
                                <td className="p-5 space-x-2">
                                    <button
                                        onClick={() => navigate(`/edit-product/${item._id}`)}
                                        className="px-3 py-3 text-xs text-white bg-yellow-500 rounded hover:bg-yellow-600"
                                    >
                                        <FaEdit />
                                    </button>
                                    <button
                                        onClick={() => navigate(`/edit-product/${item._id}`)}
                                        className="px-3 py-3 text-xs text-white bg-black rounded hover:bg-yellow-600"
                                    >
                                        <MdPreview />
                                    </button>
                                    <button
                                        onClick={() => alert(`Delete product ${item._id}`)}
                                        className="px-3 py-3 text-xs text-white bg-red-500 rounded hover:bg-red-600"
                                    >
                                        <AiFillDelete />
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default ViewProduct;
