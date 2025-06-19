import { useSelector } from 'react-redux';
import { useState } from 'react';
import { FaPaypal, FaMapMarkerAlt } from 'react-icons/fa';
import { MdOutlineLocalShipping } from 'react-icons/md';
import { BsBank, BsCash } from 'react-icons/bs';
import { useNavigate } from 'react-router-dom';

export default function Checkout() {
  const user = useSelector((state) => state.user.data);
  const [showSavedAddress, setShowSavedAddress] = useState(false);
  const [selectedAddressIndex, setSelectedAddressIndex] = useState(null);
  const [useSavedAddress, setUseSavedAddress] = useState(false);
  const navigate = useNavigate();

  const savedAddresses = user?.shipping_address || [];
  const saved = savedAddresses[selectedAddressIndex] || {};

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
                className={`p-4 border rounded-lg bg-gray-50 text-sm space-y-1 ${
                  selectedAddressIndex === index ? 'border-yellow-400' : 'border-gray-200'
                }`}
              >
                <p><strong>Address Line 1:</strong> {address.adressLine1}</p>
                {address.adressLine2 && <p><strong>Address Line 2:</strong> {address.adressLine2}</p>}
                <p><strong>City:</strong> {address.city}</p>
                <p><strong>State:</strong> {address.state}</p>
                <p><strong>Postal Code:</strong> {address.postalCode}</p>
                <p><strong>Country:</strong> {address.country}</p>
                {address.contact && <p><strong>Contact:</strong> {address.contact}</p>}

                <button
                  className="mt-2 text-sm text-white bg-green-600 hover:bg-green-700 px-4 py-1 rounded"
                  onClick={() => {
                    setSelectedAddressIndex(index);
                    setUseSavedAddress(true);
                  }}
                >
                  Use this address
                </button>
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
          placeholder="Address Line 1 *"
          value={useSavedAddress ? saved.adressLine1 : ''}
          disabled={useSavedAddress}
          className="w-full p-3 border rounded-md"
        />

        <input
          type="text"
          placeholder="Address Line 2"
          value={useSavedAddress ? saved.adressLine2 : ''}
          disabled={useSavedAddress}
          className="w-full p-3 border rounded-md"
        />

        <input
          type="text"
          placeholder="City *"
          value={useSavedAddress ? saved.city : ''}
          disabled={useSavedAddress}
          className="w-full p-3 border rounded-md"
        />

        <input
          type="text"
          placeholder="State *"
          value={useSavedAddress ? saved.state : ''}
          disabled={useSavedAddress}
          className="w-full p-3 border rounded-md"
        />

        <input
          type="text"
          placeholder="Postal Code *"
          value={useSavedAddress ? saved.postalCode : ''}
          disabled={useSavedAddress}
          className="w-full p-3 border rounded-md"
        />

        <input
          type="text"
          placeholder="Country *"
          value={useSavedAddress ? saved.country : ''}
          disabled={useSavedAddress}
          className="w-full p-3 border rounded-md"
        />

        <input
          type="text"
          placeholder="Contact"
          value={useSavedAddress ? saved.contact : ''}
          disabled={useSavedAddress}
          className="w-full p-3 border rounded-md"
        />
      </form>
    </div>
  );
}