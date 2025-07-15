import React from 'react';
import { FaFacebookF, FaLinkedinIn, FaPinterestP, FaTwitter } from 'react-icons/fa';
import { Link, useParams } from 'react-router-dom';
export default function ThankYou() {
    const { orderId } = useParams()
    return (
        <div className="min-h-screen flex flex-col items-center justify-center bg-[#f3f9f5] relative overflow-hidden">
            {/* Colored Corners */}
            <div className=''>
                <div className="absolute top-0 left-0 w-0 h-0 border-t-[150px] border-l-[150px] border-t-yellow-400 border-l-transparent">OrderId=<span className='text-blue-600' >{orderId}</span></div>
            </div>
            <div className="absolute bottom-0 right-0 w-0 h-0 border-b-[150px] border-r-[150px] border-b-teal-500 border-r-transparent"></div>

            {/* Content */}
            <div className="z-10 text-center px-4">
                <div className="text-green-600 text-5xl mb-4">✔</div>
                <h1 className="text-3xl font-bold text-gray-800 mb-2">Thank you!</h1>
                <p className="text-gray-600 max-w-md mx-auto">
                    We've sent your free report to your inbox so it's easy to access. You can find more information on our website and social pages.
                </p>

                <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-6 max-w-2xl mx-auto">
                    <div className="bg-white rounded-lg shadow p-6">
                        <h2 className="text-lg font-semibold text-gray-800 mb-4">Connect With Us</h2>
                        <div className="flex gap-4 justify-center">
                            <a href="#" className="text-blue-600 hover:scale-110 transition-transform"><FaFacebookF size={20} /></a>
                            <a href="#" className="text-blue-700 hover:scale-110 transition-transform"><FaLinkedinIn size={20} /></a>
                            <a href="#" className="text-red-500 hover:scale-110 transition-transform"><FaPinterestP size={20} /></a>
                            <a href="#" className="text-blue-400 hover:scale-110 transition-transform"><FaTwitter size={20} /></a>
                        </div>
                    </div>

                    <div className="bg-white rounded-lg shadow p-6 flex flex-col items-center justify-center">
                        <h2 className="text-lg font-semibold text-gray-800 mb-4">Visit Our Website</h2>
                        <Link to={'/'}>
                            <span href="#" className="bg-green-500 text-white px-6 py-2 rounded hover:bg-green-600 transition">Continue Shoping</span  >
                        </Link>

                    </div>
                </div>
            </div>
        </div>
    );
}
