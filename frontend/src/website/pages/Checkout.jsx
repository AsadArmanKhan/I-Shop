import { useDispatch, useSelector } from "react-redux";
import { useState, useContext } from "react";
import { FaPaypal } from "react-icons/fa";
import { MdOutlineLocalShipping } from "react-icons/md";
import { BsBank, BsCash } from "react-icons/bs";
import { Link, useNavigate } from "react-router-dom";
import { MainContext } from "../../Context";
import axios from "axios";
import { emptycart } from "../../redux/slice/cartSlice";
import { useRazorpay } from "react-razorpay";

export default function Checkout() {
  const { Razorpay } = useRazorpay();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const user = useSelector((state) => state.user?.data);
  const cart = useSelector((state) => state.cart);
  const { API_BASE_URL, notify, isDark } = useContext(MainContext);

  const [showSavedAddress, setShowSavedAddress] = useState(false);
  const [selectedAddressIndex, setSelectedAddressIndex] = useState(null);
  const [useSavedAddress, setUseSavedAddress] = useState(false);
  const [paymentMode, setPaymentMode] = useState(0);
  const [form, setForm] = useState({
    adressLine1: "",
    adressLine2: "",
    city: "",
    state: "",
    postalCode: "",
    country: "",
    contact: "",
  });

  const savedAddresses = user?.shipping_address || [];
  const saved = savedAddresses[selectedAddressIndex] || {};

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const formatCurrencyINR = (amount) => {
    return new Intl.NumberFormat("en-IN", {
      style: "currency",
      currency: "INR",
      maximumFractionDigits: 2,
    }).format(amount);
  };

  const handlePlaceOrder = () => {
    if (!user?._id) {
      notify("Please log in to place an order.", 0);
      navigate("/login");
      return;
    }

    const selectedAddress = useSavedAddress
      ? user.shipping_address[selectedAddressIndex]
      : form;

    axios
      .post(`${API_BASE_URL}/order/place-order`, {
        user_id: user._id,
        order_total: cart.finalTotal,
        payment_mode: paymentMode,
        shipping_details: selectedAddress,
      })
      .then((response) => {
        notify(response.data.msg, response.data.flag);
        if (response.data.flag === 1) {
          dispatch(emptycart());

          if (paymentMode === 0) {
            navigate(`/thankyou/${response.data.order_id}`);
          } else {
            try {
              const options = {
                key: "rzp_test_hYGOo0vBKlVRkD",
                currency: "INR",
                name: "Ishop",
                order_id: response.data.razorpay_order_id,
                handler: (razorpay_response) => {
                  axios
                    .post(`${API_BASE_URL}/order/success`, {
                      order_id: response.data.order_id,
                      user_id: user._id,
                      razorpay_response,
                    })
                    .then((res) => {
                      if (res.data.flag === 1) {
                        dispatch(emptycart());
                        navigate(`/thank-you/${res.data.order_id}`);
                      }
                    });
                },
                prefill: {
                  name: user?.name,
                },
                theme: {
                  color: "#F37220",
                },
              };

              const razorpayInstance = new Razorpay(options);
              razorpayInstance.open();
            } catch (error) {
              console.log(error.message);
            }
          }
        }
      })
      .catch((error) => {
        console.error("Order error:", error);
        notify("Something went wrong while placing the order.", 0);
      });
  };

  return (
    <div
      className={`mt-30 mb-2 rounded-2xl w-full max-w-7xl mx-auto px-4 py-10 grid grid-cols-1 lg:grid-cols-3 gap-10 transition-all duration-300 ${
        isDark ? "bg-[#1A2233] text-white" : "bg-white text-black"
      }`}
    >
      {/* Address Section */}
      <div className="lg:col-span-2 space-y-6">
        <div className="space-y-4">
          <label className="flex items-center gap-2 text-sm font-medium">
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
                  className={`p-4 border rounded-md text-sm space-y-1 ${
                    selectedAddressIndex === index
                      ? "border-yellow-400"
                      : isDark
                      ? "border-gray-700 bg-[#2A3446]"
                      : "border-gray-200 bg-white"
                  }`}
                >
                  <p className="font-medium">
                    {address.adressLine1}, {address.city}, {address.state}
                  </p>
                  <p className="text-sm">
                    {address.country} - {address.postalCode}
                  </p>
                  {address.contact && <p>📞 {address.contact}</p>}

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
                onClick={() => navigate("/profile/useraddress")}
                className="mt-4 text-sm text-yellow-600 border border-yellow-500 hover:bg-yellow-50 px-4 py-2 rounded"
              >
                + Add New Address
              </button>
            </div>
          )}
        </div>

        {/* Billing Form */}
        <form className="space-y-4">
          <h2 className="text-xl font-semibold">Billing Details</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <input
              type="text"
              name="adressLine1"
              placeholder="Address Line 1 *"
              value={
                useSavedAddress ? saved.adressLine1 || "" : form.adressLine1
              }
              onChange={useSavedAddress ? undefined : handleChange}
              className="w-full p-3 border rounded-md"
              disabled={useSavedAddress}
            />
            <input
              type="text"
              name="adressLine2"
              placeholder="Address Line 2"
              value={
                useSavedAddress ? saved.adressLine2 || "" : form.adressLine2
              }
              onChange={useSavedAddress ? undefined : handleChange}
              className="w-full p-3 border rounded-md"
              disabled={useSavedAddress}
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <input
              type="text"
              name="city"
              placeholder="City *"
              value={useSavedAddress ? saved.city || "" : form.city}
              onChange={useSavedAddress ? undefined : handleChange}
              className="w-full p-3 border rounded-md"
              disabled={useSavedAddress}
            />
            <input
              type="text"
              name="state"
              placeholder="State *"
              value={useSavedAddress ? saved.state || "" : form.state}
              onChange={useSavedAddress ? undefined : handleChange}
              className="w-full p-3 border rounded-md"
              disabled={useSavedAddress}
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <input
              type="text"
              name="postalCode"
              placeholder="Postal Code *"
              value={useSavedAddress ? saved.postalCode || "" : form.postalCode}
              onChange={useSavedAddress ? undefined : handleChange}
              className="w-full p-3 border rounded-md"
              disabled={useSavedAddress}
            />
            <input
              type="text"
              name="country"
              placeholder="Country *"
              value={useSavedAddress ? saved.country || "" : form.country}
              onChange={useSavedAddress ? undefined : handleChange}
              className="w-full p-3 border rounded-md"
              disabled={useSavedAddress}
            />
          </div>

          <input
            type="text"
            name="contact"
            placeholder="Contact"
            value={useSavedAddress ? saved.contact || "" : form.contact}
            onChange={useSavedAddress ? undefined : handleChange}
            className="w-full p-3 border rounded-md"
            disabled={useSavedAddress}
          />

          <textarea
            placeholder="Order Notes (Optional)"
            className="w-full p-3 border rounded-md"
          ></textarea>
        </form>
      </div>

      {/* Order Summary */}
      <div
        className={`p-6 rounded-md space-y-4 shadow-md border ${
          isDark
            ? "bg-[#2A3446] text-white border-gray-600"
            : "bg-gray-50 text-black border-gray-200"
        }`}
      >
        <h2 className="text-lg font-semibold">Your Order</h2>
        <div className="border-t border-b py-4 space-y-2">
          <div className="flex justify-between text-sm font-medium">
            <span>SUBTOTAL</span>
            <span>{formatCurrencyINR(cart.originalTotal)}</span>
          </div>
          <div className="flex justify-between text-sm">
            <span>Discount</span>
            <span className="text-red-500">
              {formatCurrencyINR(cart.originalTotal - cart.finalTotal)}
            </span>
          </div>
          <div className="flex justify-between font-semibold text-base">
            <span>Order Total</span>
            <span className="text-green-500">
              {formatCurrencyINR(cart.finalTotal)}
            </span>
          </div>
        </div>

        {/* Payment Options */}
        <div className="space-y-3 text-sm">
          <label className="flex items-start gap-2">
            <input
              type="radio"
              name="payment"
              checked={paymentMode === 0}
              onChange={() => setPaymentMode(0)}
              className="mt-1 accent-green-600"
            />
            <span>
              <strong className="flex items-center gap-1">
                <BsBank /> Bank Transfer
              </strong>
              <br />
              Pay directly into our bank account using Order ID as reference.
            </span>
          </label>
          <label className="flex items-center gap-2">
            <input
              type="radio"
              name="payment"
              checked={paymentMode === 1}
              onChange={() => setPaymentMode(1)}
              className="accent-gray-600"
            />
            <span className="flex items-center gap-1">
              <BsCash /> Cash on Delivery
            </span>
          </label>
          <label className="flex items-center gap-2">
            <input
              type="radio"
              name="payment"
              checked={paymentMode === 2}
              onChange={() => setPaymentMode(2)}
              className="accent-blue-500"
            />
            <span className="flex items-center gap-1">
              <FaPaypal /> PayPal
              <a href="#" className="text-blue-500 underline ml-1">
                What is PayPal?
              </a>
            </span>
          </label>
        </div>

        <button
          onClick={handlePlaceOrder}
          className="w-full bg-green-500 text-white font-semibold py-3 rounded-md hover:bg-green-600 transition"
        >
          PLACE ORDER
        </button>
      </div>
    </div>
  );
}
