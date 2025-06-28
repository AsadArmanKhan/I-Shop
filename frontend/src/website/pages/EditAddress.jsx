import { useSelector, useDispatch } from 'react-redux';
import { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import axios from 'axios';
import { setUser } from '../../redux/slice/userSlice';

export default function EditAddress() {
    const user = useSelector((state) => state.user.data);
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const location = useLocation();

    const index = location.state?.index ?? null; // index of the address to edit
    const savedAddresses = user?.shipping_address || [];

    const [address, setAddress] = useState({
        addressLine1: '',
        addressLine2: '',
        city: '',
        state: '',
        postalCode: '',
        country: '',
        contact: '',
    });

    // ✅ Pre-fill form with existing address
    useEffect(() => {
        if (index !== null && savedAddresses[index]) {
            setAddress(savedAddresses[index]);
        } else {
            navigate('/profile'); // Invalid index
        }
    }, [index, savedAddresses, navigate]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setAddress((prev) => ({
            ...prev,
            [name]: value,
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!user?._id || index === null) return;

        try {
            const updatedAddresses = [...savedAddresses];
            updatedAddresses[index] = address;

            const res = await axios.post('http://localhost:5000/user/update-address', {
                user_id: user._id,
                shipping_address: updatedAddresses,
            });

            if (res.data.flag === 1) {
                dispatch(setUser(res.data.user));
                alert('Address updated successfully!');
                navigate('/profile');
            } else {
                alert(res.data.msg || 'Failed to update address');
            }
        } catch (err) {
            console.error(err);
            alert('Something went wrong');
        }
    };

    return (
        <div className="w-full max-w-3xl mx-auto px-4 py-8">
            <h2 className="text-2xl font-semibold mb-6">Edit Address</h2>
            <form onSubmit={handleSubmit} className="space-y-4">
                <input
                    name="adressLine1"
                    placeholder="Address Line 1 *"
                    value={address.addressLine1}
                    onChange={handleChange}
                    required
                    className="w-full p-3 border rounded-md"
                />
                <input
                    name="adressLine2"
                    placeholder="Address Line 2"
                    value={address.addressLine2}
                    onChange={handleChange}
                    className="w-full p-3 border rounded-md"
                />
                <input
                    name="city"
                    placeholder="City *"
                    value={address.city}
                    onChange={handleChange}
                    required
                    className="w-full p-3 border rounded-md"
                />
                <input
                    name="state"
                    placeholder="State *"
                    value={address.state}
                    onChange={handleChange}
                    required
                    className="w-full p-3 border rounded-md"
                />
                <input
                    name="postalCode"
                    placeholder="Postal Code *"
                    value={address.postalCode}
                    onChange={handleChange}
                    required
                    className="w-full p-3 border rounded-md"
                />
                <input
                    name="country"
                    placeholder="Country *"
                    value={address.country}
                    onChange={handleChange}
                    required
                    className="w-full p-3 border rounded-md"
                />
                <input
                    name="contact"
                    placeholder="Contact"
                    value={address.contact}
                    onChange={handleChange}
                    className="w-full p-3 border rounded-md"
                />
                <button
                    type="submit"
                    className="w-full mt-4 bg-yellow-500 hover:bg-yellow-600 text-white font-semibold py-3 rounded-md shadow-md"
                >
                    Save Changes
                </button>
            </form>
        </div>
    );
}
