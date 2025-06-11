import React, { useContext } from 'react';
import { FaEnvelope, FaLock } from 'react-icons/fa';
import { MainContext } from '../../Context';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { setAdmin, logout } from '../../redux/slice/adminSlice';

export default function AdminLogin() {
    const { API_BASE_URL, ADMIN_URL, notify } = useContext(MainContext)
    const navigator = useNavigate()
    const dispatcher = useDispatch()
    const cartData = JSON.parse(localStorage.getItem('cart'))
    const cart = cartData ? cartData.items : null

    function submitHandler(e) {
        e.preventDefault();
        const data = {
            email: e.target.email.value,
            password: e.target.password.value,
        }
        // console.log("Hello")

        axios.post(API_BASE_URL + ADMIN_URL + "/login", data).then(
            async (resp) => {
                // console.log();

                notify(resp.data.msg, resp.data.flag)
                if (resp.data.flag === 1) {
                    // console.log(resp.data?.admin)
                    e.target.reset()
                    dispatcher(setAdmin(
                        {
                            admin: resp.data?.admin,

                            token: resp.data.token
                        }
                    ))
                    navigator("/admin")
                }

            }
        ).catch(
            (err) => {
                console.log(err)
                notify("Error from AdminLogin", 0)


            }
        )

    }


    return (
        <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-gray-800 via-slate-700 to-gray-900p-4">
            <div className="w-full max-w-md bg-[#f0f8ff] text-gray-900 rounded-2xl shadow-2xl p-8">
                <h2 className="text-3xl font-bold text-center text-gray-800 mb-6">Admin Login</h2>

                <form onSubmit={submitHandler} className="space-y-6">
                    <div>
                        <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                            Email Address
                        </label>
                        <input
                            type="email"
                            name="email"
                            id="email"
                            className="mt-1 w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                            placeholder="admin@example.com"
                            required
                        />
                    </div>

                    <div>
                        <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                            Password
                        </label>
                        <input
                            type="password"
                            name="password"
                            id="password"
                            className="mt-1 w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                            placeholder="••••••••"
                            required
                        />
                    </div>

                    <div className="flex items-center justify-between">
                        <label className="flex items-center text-sm">
                            <input type="checkbox" className="form-checkbox h-4 w-4 text-blue-600" />
                            <span className="ml-2 text-gray-700">Remember me</span>
                        </label>
                        <a href="#" className="text-sm text-blue-600 hover:underline">Forgot password?</a>
                    </div>

                    <button
                        type="submit"
                        className="w-full bg-blue-600 text-white font-semibold py-2 px-4 rounded-lg hover:bg-blue-700 transition duration-300"
                    >
                        Sign In
                    </button>
                </form>

                <p className="mt-6 text-center text-sm text-gray-600">
                    Not an admin? <a href="#" className="text-blue-600 hover:underline">Contact support</a>
                </p>
            </div>
        </div>
    );
}
