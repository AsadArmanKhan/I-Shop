// AuthForm.js
import React, { useContext, useEffect, useState } from "react";
import { FaEnvelope, FaUser, FaLock } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useSearchParams } from "react-router-dom";
import { setUser } from "../../redux/slice/userSlice";
import { MainContext } from "../../Context";
import { MdVisibility, MdVisibilityOff } from "react-icons/md";
import axios from "axios";

export default function AuthForm() {
  const user = useSelector((state) => state.user.data);
  const [searchParams] = useSearchParams();
  const { notify, API_BASE_URL } = useContext(MainContext);

  const [isSignUp, setIsSignUp] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);

  const dispatch = useDispatch();
  const navigate = useNavigate();
  // console.log(searchParams.get("ref"));


  const cartData = JSON.parse(localStorage.getItem("cart"));
  const cart = cartData ? cartData.items : null;

  useEffect(() => {
    console.log(user);
    // return
    if (user) navigate("/");
  }, [user]);

  const handleLogin = async (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;

    if (!email || !password) {
      notify("Please fill all fields", 0);
      return;
    }

    try {
      const resp = await axios.post(`${API_BASE_URL}/user/login`, { email, password });
      notify(resp.data.msg, resp.data.flag);
      if (resp.data.flag === 1) {
        dispatch(setUser({
          user: resp.data.user,
          userToken: resp.data.token
        })
        );

        const updateCart = await axios.post(`${API_BASE_URL}/cart/move-to-db`, {
          cart: cart || null,
          user_id: resp.data.user._id,
        });

        let final_total = 0;
        let original_total = 0;

        const updatedItems = updateCart.data.cart.map(item => {
          final_total += item.product_id.finalPrice * item.qty;
          original_total += item.product_id.originalPrice * item.qty;
          return { productId: item.product_id._id, qty: item.qty };
        });

        localStorage.setItem("cart", JSON.stringify({ items: updatedItems, final_total, original_total }));

        navigate(searchParams.get("ref") === "checkout" ? "/checkout" : "/");
      }
    } catch (err) {
      console.log(err);
      notify("Login failed. Check credentials.", 0);
    }
  };

  const handleRegister = async (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const email = e.target.email.value;
    const password = e.target.password.value;
    const confirmPassword = e.target.confirmPassword?.value;

    if (!name || !email || !password || !confirmPassword) {
      notify("All fields are required", 0);
      return;
    }

    if (password !== confirmPassword) {
      notify("Passwords do not match", 0);
      return;
    }

    try {
      const resp = await axios.post(`${API_BASE_URL}/user/register`, { name, email, password });
      notify(resp.data.msg, resp.data.flag);

      if (resp.data.flag === 1) {
        dispatch(setUser({
          user: resp.data.user,
          userToken: resp.data.token
        }));
        navigate("/");
      }
    } catch (err) {
      console.log(err);
      notify("Registration failed. Try again.", 0);
    }
  };

  // AuthForm.js (only UI part changed)

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 p-4">
      <div className="bg-white rounded-xl shadow-lg w-full max-w-5xl grid grid-cols-1 md:grid-cols-2 overflow-hidden">
        {/* Left Image */}
        <div className="hidden md:flex items-center justify-center p-8 bg-gray-50">
          <img
            src='public/login.svg.png'
            alt="auth illustration"
            className="w-full max-w-md"
          />
        </div>

        {/* Right Form */}
        <div className="p-8">
          <h2 className="text-2xl font-bold text-teal-600">
            {isSignUp ? "Register" : "Welcome Back"}
          </h2>
          <p className="text-sm text-gray-500 mb-6">
            {isSignUp ? "JOIN TO US" : "LOGIN TO CONTINUE"}
          </p>

          <form onSubmit={isSignUp ? handleRegister : handleLogin} className="space-y-5">
            {isSignUp && (
              <div>
                <label className="text-sm text-gray-600 block mb-1">Your name</label>
                <input
                  type="text"
                  name="name"
                  placeholder="Jhon Deo"
                  className="w-full border px-4 py-2 rounded focus:outline-none focus:ring-2 focus:ring-teal-500"
                />
              </div>
            )}

            <div>
              <label className="text-sm text-gray-600 block mb-1">Email Address</label>
              <input
                type="email"
                name="email"
                placeholder="Example@gmail.com"
                className="w-full border px-4 py-2 rounded focus:outline-none focus:ring-2 focus:ring-teal-500"
              />
            </div>

            <div className="relative">
              <label className="text-sm text-gray-600 block mb-1">Password</label>
              <input
                type={showPassword ? "text" : "password"}
                name="password"
                placeholder="••••••••"
                className="w-full border px-4 py-2 rounded pr-10 focus:outline-none focus:ring-2 focus:ring-teal-500"
              />
              <span
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-9 text-gray-500 cursor-pointer"
              >
                {showPassword ? <MdVisibilityOff /> : <MdVisibility />}
              </span>
            </div>

            {isSignUp && (
              <div className="relative">
                <label className="text-sm text-gray-600 block mb-1">Confirm Password</label>
                <input
                  type={showConfirm ? "text" : "password"}
                  name="confirmPassword"
                  placeholder="••••••••"
                  className="w-full border px-4 py-2 rounded pr-10 focus:outline-none focus:ring-2 focus:ring-teal-500"
                />
                <span
                  onClick={() => setShowConfirm(!showConfirm)}
                  className="absolute right-3 top-9 text-gray-500 cursor-pointer"
                >
                  {showConfirm ? <MdVisibilityOff /> : <MdVisibility />}
                </span>
              </div>
            )}

            {!isSignUp && (
              <p className="text-sm text-gray-500 text-right cursor-pointer hover:underline">
                Forget Password ?
              </p>
            )}

            <button
              type="submit"
              className="w-full bg-teal-600 hover:bg-teal-700 text-white font-semibold py-2 rounded transition duration-300"
            >
              {isSignUp ? "REGISTER" : "LOGIN"}
            </button>
          </form>

          <p className="text-sm text-gray-600 text-center mt-4">
            {isSignUp ? "ALREADY USER ?" : "NEW USER ?"}
            <button
              className="text-green-600 font-medium ml-1 hover:underline"
              onClick={() => setIsSignUp(!isSignUp)}
            >
              {isSignUp ? "LOGIN" : "SIGN UP"}
            </button>
          </p>
        </div>
      </div>
    </div>
  );


}
