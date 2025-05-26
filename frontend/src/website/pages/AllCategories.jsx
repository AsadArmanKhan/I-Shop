import { FaAngleLeft, FaAngleRight } from "react-icons/fa";
// import { BadgeCheck, Truck } from "lucide-react";

export default function AllCategories() {
    return (
        <div className="bg-white p-6">
            <h2 className="text-lg font-semibold mb-6">BEST SELLER IN THIS CATEGORY</h2>
            <div className="grid grid-cols-6 gap-4">
                {/* Sidebar */}
                <div className="col-span-1 bg-gray-100 p-4 rounded-xl">
                    <h3 className="font-semibold mb-2">CATEGORIES</h3>
                    <button className="text-sm font-semibold text-left text-gray-800 mb-4 transition duration-300 ease-in-out transform hover:scale-105 hover:bg-gradient-to-r from-purple-500 to-indigo-500 hover:text-white px-3 py-1 rounded shadow-md">
                        All Categories
                    </button>
                    <ul className="space-y-1 text-sm text-gray-700">
                        {[
                            "All",
                            "Iphone",
                            "Samsung",
                            "Xiaomi",
                            "Asus",
                            "Oppo",
                            "Gaming Smartphone",
                            "Ipad",
                            "Window Tablets",
                            "eReader",
                            "Smartphone Chargers",
                            "5G Support Smartphone",
                            "Smartphone Accessories",
                            "Tablets Accessories",
                            "Cell Phones Accessories",
                            "Cell Phones $200"
                        ].map((item, index) => (
                            <li
                                key={index}
                                className="transition duration-300 ease-in-out transform hover:scale-105 hover:bg-gradient-to-r from-purple-500 to-indigo-500 hover:text-white px-3 py-1 rounded cursor-pointer"
                            >
                                {item.includes("$") ? (
                                    <>
                                        {item.split(" $")[0]} <span className="font-semibold">${item.split(" $")[1]}</span>
                                    </>
                                ) : (
                                    item
                                )}
                            </li>
                        ))}
                    </ul>
                </div>

                {/* Products Section */}
                <div className="col-span-5">
                    <div className="flex justify-between items-center mb-4">
                        <button className="p-2 bg-gray-100 rounded-full">
                            <FaAngleLeft className="text-gray-600" />
                        </button>
                        <button className="p-2 bg-gray-100 rounded-full">
                            <FaAngleRight className="text-gray-600" />
                        </button>
                    </div>
                    <div className="grid grid-cols-4 gap-6">
                        {/* Product Card */}
                        {[...
                            Array(4).keys()
                        ].map((i) => (
                            <div
                                key={i}
                                className="relative border rounded-xl p-4 transition-transform duration-300 ease-in-out transform hover:scale-105 hover:shadow-lg hover:border-purple-500"
                            >
                                <div className="absolute top-2 left-2 bg-green-500 text-white text-xs px-2 py-1 rounded">
                                    {i === 0 && "SAVE $59.00"}
                                    {i === 1 && "SAVE $280.00"}
                                    {i === 2 && "SAVE $3.00"}
                                    {i === 3 && "SAVE $199.00"}
                                </div>
                                <img
                                    src="https://via.placeholder.com/150"
                                    alt="Product"
                                    className="mx-auto mb-4"
                                />
                                <p className="text-sm text-gray-600">
                                    {i === 0 && "uLosk Mini case 2.0, Xenon i7 / 32GB / SSD 512GB / VGA 8GB"}
                                    {i === 1 && "Opple Watch Series 8 GPS + Cellular Stainless Steel Case with Milanese Loop"}
                                    {i === 2 && "iSmart 24V Charger"}
                                    {i === 3 && "QPod Pro 12.9 Inch M1 2023, 64GB + WiFi, GPS"}
                                </p>
                                <p className="font-bold text-lg mt-2">
                                    {i === 0 && (
                                        <>
                                            <span className="text-red-600">$1,729.00</span>{" "}
                                            <span className="text-gray-400 line-through ml-1">$2,149.00</span>
                                        </>
                                    )}
                                    {i === 1 && <span className="text-black">$979.00 - $1,259.00</span>}
                                    {i === 2 && (
                                        <>
                                            <span className="text-red-600">$9.00</span>{" "}
                                            <span className="text-gray-400 line-through ml-1">$12.00</span>
                                        </>
                                    )}
                                    {i === 3 && (
                                        <>
                                            <span className="text-red-600">$569.00</span>{" "}
                                            <span className="text-gray-400 line-through ml-1">$750.00</span>
                                        </>
                                    )}
                                </p>
                                <p className="text-sm font-semibold">
                                    {i === 0 && <span className="text-green-500">FREE SHIPPING</span>}
                                    {i === 1 && <span className="text-gray-600">$2.98 SHIPPING</span>}
                                    {i === 2 && <span className="text-gray-600">$3.98 SHIPPING</span>}
                                    {i === 3 && <span className="text-green-500">FREE SHIPPING</span>}
                                </p>
                                <p className="text-sm">
                                    {i === 0 && <span className="text-red-500">Out of stock</span>}
                                    {i === 1 && <span className="text-gray-500">PRE - ORDER</span>}
                                    {i === 2 && <span className="text-gray-500">Contact</span>}
                                    {i === 3 && (
                                        <span className="text-green-600 flex items-center gap-1">
                                            In stock
                                        </span>
                                    )}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}