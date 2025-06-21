import { useSelector, useDispatch } from 'react-redux';
import { useContext, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { setUser } from '../../redux/slice/userSlice';
import { MainContext } from '../../Context';

export default function Checkout() {
    const { API_BASE_URL, USER_URL, notify } = useContext(MainContext);
    const user = useSelector((state) => state.user.data);
    const cart = useSelector((state) => state.cart);

    const [showSavedAddress, setShowSavedAddress] = useState(false);
    const [selectedAddressIndex, setSelectedAddressIndex] = useState(null);
    const [useSavedAddress, setUseSavedAddress] = useState(false);
    const [paymentMode, setPaymentMode] = useState(0);
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const savedAddresses = user?.shipping_address || [];

    const [selectedAddress, setSelectedAddress] = useState({
        addressLine1: '',
        addressLine2: '',
        city: '',
        state: '',
        postalCode: '',
        country: '',
        contact: '',
    });

    const handleUseAddress = (index) => {
        const addr = savedAddresses[index];
        // console.log(addr);
        setSelectedAddress(addr);
        setUseSavedAddress(true);
        setSelectedAddressIndex(index);
    };

    // const handleEditAddress = (index) => {
    //     const addr = savedAddresses[index];
    //     // console.log(addr);
    //     setSelectedAddress(addr);
    //     setSelectedAddressIndex(null);
    //     setUseSavedAddress(false);
    //     window.scrollTo({ top: 0, behavior: 'smooth' });
    // };

    const handleDeleteAddress = async (index) => {
        const confirmDelete = window.confirm('Are you sure you want to delete this address?');
        if (!confirmDelete) return;

        try {
            const updatedAddresses = savedAddresses.filter((_, i) => i !== index);
            const res = await axios.post(`${API_BASE_URL}user/update-address`, {
                user_id: user._id,
                shipping_address: updatedAddresses,
            });

            if (res.data.flag === 1) {
                dispatch(setUser(res.data.user));
                alert('Address deleted successfully!');
            } else {
                alert(res.data.msg || 'Failed to delete address');
            }
        } catch (err) {
            console.error(err);
            alert('Something went wrong while deleting');
        }
    };

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setSelectedAddress((prev) => ({
            ...prev,
            [name]: value,
        }));
    };

    const formatToIndianCurrency = (amount) => {
        if (isNaN(amount)) return 'Invalid amount';

        return new Intl.NumberFormat('en-IN', {
            style: 'currency',
            currency: 'INR',
            maximumFractionDigits: 2,
        }).format(amount);
    };


    function handlePlaceOrder() {

        const userId = user?._id;
        // console.log(userId);
        const shippingAddressList = user?.shipping_address;
        // console.log(user?.shipping_address)
        const selectedAddress = savedAddresses[selectedAddressIndex];

        if (!userId || !selectedAddress) {
            notify("Missing user ID or shipping address.", 0);
            console.warn("Invalid order attempt", { userId, selectedAddressIndex, shippingAddressList });
            return;
        }

        const payload = {
            user_id: userId,
            order_total: cart.finalTotal,
            payment_mode: paymentMode,
            shipping_details: selectedAddress,
        };

        console.log("Sending payload:", payload);

        axios.post(`${API_BASE_URL}/order/place-order`, payload)
            .then((response) => {
                notify(response.data.msg, response.data.flag);
                if (response.data.flag === 1) {
                    console.log("Order placed:", response.data);
                }
            })
            .catch((error) => {
                console.error("Order failed:", error);
            });
    }



    return (
        <div className="w-full max-w-6xl mx-auto px-4 py-8">
            <div className="mb-6 space-y-4">
                <label className="flex items-center gap-2 text-sm font-medium text-gray-700">
                    <input
                        type="checkbox"
                        checked={showSavedAddress}
                        onChange={() => setShowSavedAddress(!showSavedAddress)}
                        className="accent-yellow-500"
                    />
                    Show Saved Shipping Addresses
                </label>

                {showSavedAddress && savedAddresses.length > 0 && (
                    <div className="space-y-4">
                        {savedAddresses.map((address, index) => (

                            <div
                                key={index}
                                className={`p-4 border rounded-lg bg-gray-50 text-sm space-y-1 ${selectedAddressIndex === index
                                    ? 'border-yellow-400'
                                    : 'border-gray-200'
                                    }`}
                            >
                                <p><strong>Address Line 1:</strong> {address.adressLine1}</p>
                                {address.adressLine2 && (
                                    <p><strong>Address Line 2:</strong> {address.adressLine2}</p>
                                )}
                                <p><strong>City:</strong> {address.city}</p>
                                <p><strong>State:</strong> {address.state}</p>
                                <p><strong>Postal Code:</strong> {address.postalCode}</p>
                                <p><strong>Country:</strong> {address.country}</p>
                                {address.contact && (
                                    <p><strong>Contact:</strong> {address.contact}</p>
                                )}

                                <div className="flex gap-2 mt-3">
                                    <button
                                        className="text-sm text-white bg-green-600 hover:bg-green-700 px-3 py-1 rounded"
                                        onClick={() => handleUseAddress(index)}
                                    >
                                        Use
                                    </button>
                                    <Link to="/edit/address" state={{ index }}>
                                        <button
                                            className="text-sm text-blue-600 border border-blue-600 hover:bg-blue-50 px-3 py-1 rounded"
                                            onClick={() => handleEditAddress(index)}
                                        >
                                            Edit
                                        </button>
                                    </Link>
                                    <button
                                        className="text-sm text-red-600 border border-red-600 hover:bg-red-50 px-3 py-1 rounded"
                                        onClick={() => handleDeleteAddress(index)}
                                    >
                                        Delete
                                    </button>
                                </div>
                            </div>
                        ))}

                        <button
                            onClick={() => navigate('/profile/useraddress')}
                            className="mt-4 text-sm text-yellow-600 border border-yellow-500 hover:bg-yellow-50 px-4 py-2 rounded"
                        >
                            + Add New Address
                        </button>
                    </div>
                )}
            </div>

            <form className="space-y-4">
                <h2 className="text-xl font-semibold">Billing Details</h2>

                <input
                    type="text"
                    name="addressLine1"
                    placeholder="Address Line 1 *"
                    value={selectedAddress.adressLine1}
                    onChange={handleInputChange}
                    className="w-full p-3 border rounded-md"
                />

                <input
                    type="text"
                    name="addressLine2"
                    placeholder="Address Line 2"
                    value={selectedAddress.adressLine2}
                    onChange={handleInputChange}
                    className="w-full p-3 border rounded-md"
                />

                <input
                    type="text"
                    name="city"
                    placeholder="City *"
                    value={selectedAddress.city}
                    onChange={handleInputChange}
                    className="w-full p-3 border rounded-md"
                />

                <input
                    type="text"
                    name="state"
                    placeholder="State *"
                    value={selectedAddress.state}
                    onChange={handleInputChange}
                    className="w-full p-3 border rounded-md"
                />

                <input
                    type="text"
                    name="postalCode"
                    placeholder="Postal Code *"
                    value={selectedAddress.postalCode}
                    onChange={handleInputChange}
                    className="w-full p-3 border rounded-md"
                />

                <input
                    type="text"
                    name="country"
                    placeholder="Country *"
                    value={selectedAddress.country}
                    onChange={handleInputChange}
                    className="w-full p-3 border rounded-md"
                />

                <input
                    type="text"
                    name="contact"
                    placeholder="Contact"
                    value={selectedAddress.contact}
                    onChange={handleInputChange}
                    className="w-full p-3 border rounded-md"
                />
            </form>

            {/* ✅ Place Order Button */}
            <button onClick={handlePlaceOrder}
                className="mt-6 w-full bg-yellow-500 hover:bg-yellow-600 text-white font-semibold py-3 px-6 rounded-lg transition duration-300"
            >
                Place Order
            </button>
        </div >
    );
}



// import { useSelector, useDispatch } from 'react-redux';
// import { useState } from 'react';
// import { Link, useNavigate } from 'react-router-dom';
// import axios from 'axios';
// import { setUser } from '../../redux/slice/userSlice';

// export default function Checkout() {
//   const user = useSelector((state) => state.user.data);
//   const [showSavedAddress, setShowSavedAddress] = useState(false);
//   const [selectedAddressIndex, setSelectedAddressIndex] = useState(null);
//   const [useSavedAddress, setUseSavedAddress] = useState(false);
//   const navigate = useNavigate();
//   const dispatch = useDispatch();

//   const savedAddresses = user?.shipping_address || [];

//   const [selectedAddress, setSelectedAddress] = useState({
//     addressLine1: '',
//     addressLine2: '',
//     city: '',
//     state: '',
//     postalCode: '',
//     country: '',
//     contact: '',
//   });

//   const handleUseAddress = (index) => {
//     const addr = savedAddresses[index];
//     setSelectedAddress(addr);
//     setUseSavedAddress(true);
//     setSelectedAddressIndex(index);
//   };

//   const handleEditAddress = (index) => {
//     const addr = savedAddresses[index];
//     setSelectedAddress(addr);
//     setSelectedAddressIndex(null);
//     setUseSavedAddress(false);
//     window.scrollTo({ top: 0, behavior: 'smooth' });
//   };

//   const handleDeleteAddress = async (index) => {
//     const confirmDelete = window.confirm('Are you sure you want to delete this address?');
//     if (!confirmDelete) return;

//     try {
//       const updatedAddresses = savedAddresses.filter((_, i) => i !== index);
//       const res = await axios.post('http://localhost:5000/user/update-address', {
//         user_id: user._id,
//         shipping_address: updatedAddresses,
//       });

//       if (res.data.flag === 1) {
//         dispatch(setUser(res.data.user));
//         alert('Address deleted successfully!');
//       } else {
//         alert(res.data.msg || 'Failed to delete address');
//       }
//     } catch (err) {
//       console.error(err);
//       alert('Something went wrong while deleting');
//     }
//   };

//   const handleInputChange = (e) => {
//     const { name, value } = e.target;
//     setSelectedAddress((prev) => ({ ...prev, [name]: value }));
//   };

//   return (
//     <div className="max-w-7xl mx-auto p-6">
//       <div className="flex flex-col lg:flex-row gap-8">
//         {/* Billing Form */}
//         <div className="w-full lg:w-2/3 bg-white p-6 rounded-lg shadow">
//           <h2 className="text-2xl font-semibold mb-4">Billing Detail</h2>

//           <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//             <div>
//               <label className="block text-sm font-medium mb-1">First Name *</label>
//               <input name="firstName" className="w-full p-3 border rounded-md" placeholder="John" />
//             </div>
//             <div>
//               <label className="block text-sm font-medium mb-1">Last Name *</label>
//               <input name="lastName" className="w-full p-3 border rounded-md" placeholder="Doe" />
//             </div>
//             <div className="md:col-span-2">
//               <label className="block text-sm font-medium mb-1">Company Name</label>
//               <input name="company" className="w-full p-3 border rounded-md" placeholder="Optional" />
//             </div>
//             <div className="md:col-span-2">
//               <label className="block text-sm font-medium mb-1">Country / Region *</label>
//               <select className="w-full p-3 border rounded-md">
//                 <option>United States (US)</option>
//               </select>
//             </div>
//             <div className="md:col-span-2">
//               <label className="block text-sm font-medium mb-1">Street Address *</label>
//               <input
//                 name="addressLine1"
//                 value={selectedAddress.addressLine1}
//                 onChange={handleInputChange}
//                 className="w-full p-3 border rounded-md mb-2"
//                 placeholder="House number and street name"
//               />
//               <input
//                 name="addressLine2"
//                 value={selectedAddress.addressLine2}
//                 onChange={handleInputChange}
//                 className="w-full p-3 border rounded-md"
//                 placeholder="Apartment, suite, unit, etc. (optional)"
//               />
//             </div>
//             <div>
//               <label className="block text-sm font-medium mb-1">Town / City *</label>
//               <input
//                 name="city"
//                 value={selectedAddress.city}
//                 onChange={handleInputChange}
//                 className="w-full p-3 border rounded-md"
//               />
//             </div>
//             <div>
//               <label className="block text-sm font-medium mb-1">State / County *</label>
//               <select
//                 name="state"
//                 value={selectedAddress.state}
//                 onChange={handleInputChange}
//                 className="w-full p-3 border rounded-md"
//               >
//                 <option>Washington</option>
//               </select>
//             </div>
//             <div>
//               <label className="block text-sm font-medium mb-1">ZIP Code *</label>
//               <input
//                 name="postalCode"
//                 value={selectedAddress.postalCode}
//                 onChange={handleInputChange}
//                 className="w-full p-3 border rounded-md"
//               />
//             </div>
//             <div>
//               <label className="block text-sm font-medium mb-1">Phone Number *</label>
//               <input
//                 name="contact"
//                 value={selectedAddress.contact}
//                 onChange={handleInputChange}
//                 className="w-full p-3 border rounded-md"
//               />
//             </div>
//             <div className="md:col-span-2">
//               <label className="block text-sm font-medium mb-1">Email Address *</label>
//               <input className="w-full p-3 border rounded-md" placeholder="you@example.com" />
//             </div>
//             <div className="md:col-span-2">
//               <label className="block text-sm font-medium mb-1">Order Notes</label>
//               <textarea className="w-full p-3 border rounded-md" rows={3} placeholder="Note about your order..." />
//             </div>
//           </div>
//         </div>

//         {/* Order Summary */}
//         <div className="w-full lg:w-1/3 bg-gray-50 p-6 rounded-lg shadow space-y-4">
//           <h3 className="text-lg font-semibold border-b pb-2">Your Order</h3>

//           <div className="space-y-2 text-sm">
//             <div className="flex justify-between">
//               <span>Product</span>
//               <span className="font-medium">Subtotal</span>
//             </div>
//             <div className="flex justify-between">
//               <span>Pinnapple Macbook Pro 2022 × 3</span>
//               <span>$1,746.50</span>
//             </div>
//             <div className="flex justify-between text-green-600">
//               <span>Worldwide Shipping</span>
//               <span>Free</span>
//             </div>
//             <div className="flex justify-between text-red-500">
//               <span>Coupon Discount</span>
//               <span>− $9.50</span>
//             </div>
//             <div className="flex justify-between border-t pt-2 font-semibold text-lg">
//               <span>Total</span>
//               <span>$1,746.50</span>
//             </div>
//           </div>

//           <div className="space-y-2">
//             <label className="flex items-center gap-2">
//               <input type="radio" name="payment" defaultChecked className="accent-green-600" />
//               <span className="text-sm">Direct Bank Transfer</span>
//             </label>
//             <p className="text-xs text-gray-600">
//               Make your payment directly into our bank account. Your order will not be shipped until the funds have cleared.
//             </p>
//             <label className="flex items-center gap-2">
//               <input type="radio" name="payment" className="accent-yellow-600" />
//               <span className="text-sm">Cash on Delivery</span>
//             </label>
//             <label className="flex items-center gap-2">
//               <input type="radio" name="payment" className="accent-blue-600" />
//               <span className="text-sm">PayPal <a href="#" className="text-blue-500 underline ml-1">What’s PayPal?</a></span>
//             </label>
//           </div>

//           <button className="w-full bg-emerald-600 hover:bg-emerald-700 text-white text-sm font-medium py-3 rounded">
//             PLACE ORDER
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// }

