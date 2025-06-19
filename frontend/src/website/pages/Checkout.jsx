import { useSelector, useDispatch } from 'react-redux';
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { setUser } from '../../redux/slice/userSlice';

export default function Checkout() {
    const user = useSelector((state) => state.user.data);
    console.log(user);
    
    const [showSavedAddress, setShowSavedAddress] = useState(false);
    const [selectedAddressIndex, setSelectedAddressIndex] = useState(null);
    const [useSavedAddress, setUseSavedAddress] = useState(false);
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

    // ✅ Use address
    const handleUseAddress = (index) => {
        const addr = savedAddresses[index];
        setSelectedAddress(addr);
        setUseSavedAddress(true);
        setSelectedAddressIndex(index);
    };

    // ✅ Edit address
    const handleEditAddress = (index) => {
        const addr = savedAddresses[index];
        setSelectedAddress(addr);
        setSelectedAddressIndex(null); // so we know it's editing
        setUseSavedAddress(false);
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    // ✅ Delete address
    const handleDeleteAddress = async (index) => {
        const confirmDelete = window.confirm('Are you sure you want to delete this address?');
        if (!confirmDelete) return;

        try {
            const updatedAddresses = savedAddresses.filter((_, i) => i !== index);
            const res = await axios.post('http://localhost:5000/user/update-address', {
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

    // ✅ Input change
    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setSelectedAddress((prev) => ({
            ...prev,
            [name]: value,
        }));
    };

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
                                <p>
                                    <strong>Address Line 1:</strong> {address.adressLine1}
                                </p>
                                {address.adressLine2 && (
                                    <p>
                                        <strong>Address Line 2:</strong> {address.adressLine2}
                                    </p>
                                )}
                                <p>
                                    <strong>City:</strong> {address.city}
                                </p>
                                <p>
                                    <strong>State:</strong> {address.state}
                                </p>
                                <p>
                                    <strong>Postal Code:</strong> {address.postalCode}
                                </p>
                                <p>
                                    <strong>Country:</strong> {address.country}
                                </p>
                                {address.contact && (
                                    <p>
                                        <strong>Contact:</strong> {address.contact}
                                    </p>
                                )}

                                <div className="flex gap-2 mt-3">
                                    <button
                                        className="text-sm text-white bg-green-600 hover:bg-green-700 px-3 py-1 rounded"
                                        onClick={() => handleUseAddress(index)}
                                    >
                                        Use
                                    </button>
                                    <Link
                                        to="/edit/address"
                                        state={{ index }}
                                    >
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
                            onClick={() => navigate('/profile/myaddress')}
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
                    name="adressLine1"
                    placeholder="Address Line 1 *"
                    value={selectedAddress.adressLine1}
                    onChange={handleInputChange}
                    className="w-full p-3 border rounded-md"
                />

                <input
                    type="text"
                    name="adressLine2"
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
        </div>
    );
}
