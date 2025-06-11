import { useState, useContext } from 'react';
import { FaLock, FaDollarSign, FaStar } from 'react-icons/fa';
import { MdVisibility, MdVisibilityOff } from 'react-icons/md';
import { useDispatch } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { setUser } from '../../redux/slice/userSlice';
import { MainContext } from '../../Context';
import axios from 'axios';

export default function LoginPage() {
    const { notify, API_BASE_URL, USER_URL } = useContext(MainContext);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const [showPassword, setShowPassword] = useState(false);

    function submitHandler(e) {
        // console.log(`${API_BASE_URL}${USER_URL}/login`)
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;

        if (!email || !password) {
            notify("Please fill in both fields", 0);
            return;
        }

        const data = { email, password };
        // console.log("hello");
        axios.post(`${API_BASE_URL}${USER_URL}/login`, data)
            .then((resp) => {
                console.log("FULL RESPONSE:", resp);
                console.log("DATA:", resp.data);
                notify(resp.data.msg, resp.data.flag);
                if (resp.data.flag === 1) {
                    e.target.reset();
                    dispatch(setUser({
                        user: resp.data?.user,
                        userToken: resp.data.userToken,
                    }));
                    navigate("/");
                }
            })
            .catch((err) => {
                console.log(err);
                notify("Login failed. Please try again.", 0); //  frontend toast
            });
    }

    return (
        <div className="min-h-screen bg-gray-100 flex flex-col items-center">
            {/* Breadcrumb */}
            <div className="w-full max-w-6xl bg-white my-5 shadow px-6 py-6 rounded-xl">
                <nav className="text-sm text-gray-500">
                    <Link to="/">
                        <span className="font-semibold text-gray-700">Home</span>
                    </Link>
                    / <span>pages</span> / <span className="font-bold text-black">Login</span>
                </nav>
            </div>

            <div className="w-full max-w-6xl">
                <div className="flex flex-col md:flex-row items-center justify-center px-6 py-12 md:py-16 gap-12 bg-white rounded-b-xl shadow-md">
                    {/* Illustration */}
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

                    {/* Login Form */}
                    <div className="w-full max-w-md">
                        <div className="bg-white rounded-xl shadow-lg p-8">
                            <h2 className="text-2xl font-semibold text-teal-600">Welcome Back</h2>
                            <p className="text-sm text-gray-500 mt-1 mb-6">LOGIN TO CONTINUE</p>

                            <form onSubmit={submitHandler} className="space-y-5">
                                <div>
                                    <label className="text-sm font-medium text-gray-700">Email Address</label>
                                    <input
                                        type="email"
                                        name="email"
                                        placeholder="example@gmail.com"
                                        className="mt-1 w-full px-4 py-2 border rounded-md shadow-sm focus:ring-2 focus:ring-teal-400 focus:outline-none"
                                    />
                                </div>
                                <div>
                                    <label className="text-sm font-medium text-gray-700">Password</label>
                                    <div className="relative mt-1">
                                        <input
                                            type={showPassword ? "text" : "password"}
                                            name="password"
                                            placeholder="••••••••"
                                            className="w-full px-4 py-2 border rounded-md shadow-sm focus:ring-2 focus:ring-teal-400 focus:outline-none"
                                        />
                                        {showPassword ? (
                                            <MdVisibility
                                                onClick={() => setShowPassword(false)}
                                                className="absolute right-3 top-2.5 text-gray-400 cursor-pointer"
                                            />
                                        ) : (
                                            <MdVisibilityOff
                                                onClick={() => setShowPassword(true)}
                                                className="absolute right-3 top-2.5 text-gray-400 cursor-pointer"
                                            />
                                        )}
                                    </div>
                                    <div className="text-sm text-gray-500 mt-2 underline cursor-pointer">
                                        Forgot Password?
                                    </div>
                                </div>

                                <button
                                    type="submit"
                                    className="w-full py-2 bg-teal-600 hover:bg-teal-700 text-white rounded-md font-semibold transition duration-300"
                                >
                                    LOGIN
                                </button>
                                <p className="text-sm text-gray-600 text-center">
                                    NEW USER?
                                    <Link to="/register">
                                        <span className="text-green-600 font-semibold cursor-pointer ml-1">SIGN UP</span>
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
