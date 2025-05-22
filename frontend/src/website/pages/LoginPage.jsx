import { FaLock, FaDollarSign, FaStar } from 'react-icons/fa';
import { MdEmail, MdVisibilityOff } from 'react-icons/md';
import { Link } from 'react-router-dom';

export default function LoginPage() {
    return (
        <div className="min-h-screen bg-gray-100 flex flex-col items-center">
            {/* Breadcrumb */}
            <div className="w-full max-w-6xl bg-white-400 my-5 shadow px-6 py-6 rounded-xl">
                <nav className="text-sm text-gray-500">
                    <Link to={"/"}>
                        <span className="font-semibold text-gray-700">Home</span>
                    </Link>
                    / <span>pages</span>

                    / <span className="font-bold text-black">login</span>
                </nav>
            </div>
            <div className="w-full max-w-6xl">

                {/* Main Content */}
                <div className="flex flex-col md:flex-row items-center justify-center px-6 py-12 md:py-16 gap-12 bg-white rounded-b-xl shadow-md">
                    {/* Illustration Section */}
                    <div className="flex justify-center w-full md:w-1/2">
                        <div className="relative w-80 h-80">
                            <div className="absolute top-0 left-0 bg-white rounded-full shadow-lg p-4">
                                <FaLock className="text-blue-600 text-3xl" />
                            </div>
                            <div className="absolute bottom-6 left-0 bg-white rounded shadow-md p-2">
                                <FaDollarSign className="text-green-500 text-xl" />
                            </div>
                            <div className="absolute bottom-0 right-2 bg-white rounded shadow-md p-2">
                                <FaStar className="text-yellow-400 text-xl" />
                            </div>
                            <div className="absolute inset-0 flex flex-col items-center justify-center">
                                <div className="bg-blue-200 rounded-lg w-48 h-64 shadow-lg"></div>
                                <div className="flex mt-4 gap-2">
                                    <div className="w-6 h-6 bg-green-500 rounded-full"></div>
                                    <div className="w-6 h-6 bg-green-700 rounded-full"></div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Login Form Section */}
                    <div className="w-full max-w-md">
                        <div className="bg-white rounded-xl shadow-lg p-8">
                            <h2 className="text-2xl font-semibold text-teal-600">Welcome Back</h2>
                            <p className="text-sm text-gray-500 mt-1 mb-6">LOGIN TO CONTINUE</p>

                            <form className="space-y-5">
                                <div>
                                    <label className="text-sm font-medium text-gray-700">Email Address</label>
                                    <input
                                        type="email"
                                        placeholder="Example@gmail.com"
                                        className="mt-1 w-full px-4 py-2 border rounded-md shadow-sm focus:ring-2 focus:ring-teal-400 focus:outline-none"
                                    />
                                </div>
                                <div>
                                    <label className="text-sm font-medium text-gray-700">Password</label>
                                    <div className="relative mt-1">
                                        <input
                                            type="password"
                                            placeholder="...."
                                            className="w-full px-4 py-2 border rounded-md shadow-sm focus:ring-2 focus:ring-teal-400 focus:outline-none"
                                        />
                                        <MdVisibilityOff className="absolute right-3 top-2.5 text-gray-400" />
                                    </div>
                                    <div className="text-sm text-gray-500 mt-2 underline cursor-pointer">
                                        Forget Password ?
                                    </div>
                                </div>

                                <button
                                    type="submit"
                                    className="w-full py-2 bg-teal-600 hover:bg-teal-700 text-white rounded-md font-semibold transition duration-300"
                                >
                                    LOGIN
                                </button>

                                <p className="text-sm text-gray-600 text-center">
                                    NEW USER ?
                                    <Link to={"/register"}>
                                     <span className="text-green-600 font-semibold cursor-pointer">SIGN UP</span>
                                    </Link>
                                </p>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}   