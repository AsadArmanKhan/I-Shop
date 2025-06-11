import { FaPaypal } from 'react-icons/fa';
import { MdOutlineLocalShipping } from 'react-icons/md';
import { BsBank, BsCash } from 'react-icons/bs';

export default function Checkout() {
    return (
        <div className="w-full max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10 p-4">
            {/* Billing Details */}
            <div className="md:col-span-2 space-y-6">
                <h2 className="text-xl font-semibold">Billing Detail</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <input type="text" placeholder="First Name *" className="border border-gray-300 p-3 rounded-md w-full" />
                    <input type="text" placeholder="Last Name *" className="border border-gray-300 p-3 rounded-md w-full" />
                </div>
                <input type="text" placeholder="Company Name (Optional)" className="border border-gray-300 p-3 rounded-md w-full" />
                <select className="border border-gray-300 p-3 rounded-md w-full">
                    <option>India</option>
                    <option>United States (US)</option>
                    <option>Canada</option>
                    <option>Sauhi Arabia</option>
                    <option>Afganistan</option>
                    <option>Kzakistan</option>

                </select>
                <input type="text" placeholder="Street Address" className="border border-gray-300 p-3 rounded-md w-full" />
                <input type="text" placeholder="Apartment, suite, unit, etc. (Optional)" className="border border-gray-300 p-3 rounded-md w-full" />
                <input type="text" placeholder="Town / City" className="border border-gray-300 p-3 rounded-md w-full" />
                <select className="border border-gray-300 p-3 rounded-md w-full">
                    <option>Washington</option>
                </select>
                <input type="text" placeholder="Zip Code *" className="border border-gray-300 p-3 rounded-md w-full" />
                <input type="text" placeholder="Phone Number *" className="border border-gray-300 p-3 rounded-md w-full" />
                <input type="email" placeholder="Email Address *" className="border border-gray-300 p-3 rounded-md w-full" />
                <label className="flex items-center space-x-2">
                    <input type="checkbox" className="accent-pink-500" />
                    <span>Create an account?</span>
                </label>
                <textarea placeholder="Order Notes (Optional)" className="border border-gray-300 p-3 rounded-md w-full"></textarea>
            </div>

            {/* Order Summary */}
            <div className="bg-gray-50 border border-gray-200 p-6 rounded-md space-y-4">
                <h2 className="text-lg font-semibold">Your Order</h2>
                <div className="border-t border-b py-4">
                    <div className="flex justify-between text-sm font-medium">
                        <span>PRODUCT</span>
                        <span>SUBTOTAL</span>
                    </div>
                    <div className="flex items-center justify-between mt-4">
                        <div className="flex items-center gap-2">
                            <img src="https://cdn-icons-png.flaticon.com/512/777/777670.png" alt="Product" className="w-10 h-10 rounded" />
                            <div>
                                <p className="text-sm">Primestone Macbook Pro 2022</p>
                                <p className="text-xs text-gray-500">M1 / 512GB x 1</p>
                                <p className="text-xs text-green-600 flex items-center gap-1">
                                    <MdOutlineLocalShipping /> Worldwide Standard Shipping Free
                                </p>
                            </div>
                        </div>
                        <p className="text-sm text-red-500">$ -9.50</p>
                    </div>
                    <div className="flex justify-between mt-4 text-base font-semibold">
                        <span>Order Total</span>
                        <span className="text-green-600">$1,748.50</span>
                    </div>
                </div>
                <div className="space-y-3">
                    <label className="flex items-start space-x-2">
                        <input type="radio" name="payment" className="mt-1 accent-green-600" />
                        <span>
                            <strong className="flex items-center gap-1"><BsBank /> Direct Bank Transfer</strong><br />
                            Make your payment directly into our bank account. Please use your Order ID as the payment reference.
                        </span>
                    </label>
                    <label className="flex items-center space-x-2">
                        <input type="radio" name="payment" className="accent-gray-600" />
                        <span className="flex items-center gap-1"><BsCash /> Cash on Delivery</span>
                    </label>
                    <label className="flex items-center space-x-2">
                        <input type="radio" name="payment" className="accent-blue-500" />
                        <span className="flex items-center gap-1"><FaPaypal /> Paypal <a href="#" className="text-blue-500 underline">What is PayPal?</a></span>
                    </label>
                </div>
                <button className="w-full bg-green-500 text-white font-semibold py-3 rounded-md hover:bg-green-600 transition duration-300">PLACE ORDER</button>
            </div>
        </div>
    );
}
