import React, { useContext, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useSearchParams } from "react-router-dom";
import axios from "axios";
import { setUser } from "../../redux/slice/userSlice";
import { MainContext } from "../../Context";
import { MdVisibility, MdVisibilityOff } from "react-icons/md";

export default function AuthForm() {
  const user = useSelector((state) => state.user.data);
  const [isSignUp, setIsSignUp] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const { notify, API_BASE_URL, USER_URL } = useContext(MainContext);

  const storedCart = JSON.parse(localStorage.getItem("cart"));
  const cart = storedCart?.item || [];

  useEffect(() => {
    if (user) {
      const redirectTo = searchParams.get("ref") === "checkout" ? "/checkout" : "/";
      navigate(redirectTo);
    }
  }, [user]);

  const handleLogin = async (e) => {
    e.preventDefault();
    const email = e.target.email.value.trim();
    const password = e.target.password.value.trim();

    if (!email || !password) {
      return notify("Please fill all fields", 0);
    }

    try {
      const res = await axios.post(`${API_BASE_URL}${USER_URL}/login`, { email, password });
      notify(res.data.msg, res.data.flag);

      if (res.data.flag === 1) {
        const userId = res.data.user._id;
        dispatch(setUser({ user: res.data.user, userToken: res.data.token }));

        const moveCartRes = await axios.post(`${API_BASE_URL}/cart/move-to-db`, {
          cart,
          user_id: userId,
        });

        const updatedItems = moveCartRes.data.cart.map((item) => ({
          productId: item.product_id._id,
          qty: item.qty,
        }));

        const finalTotal = moveCartRes.data.cart.reduce(
          (acc, item) => acc + item.product_id.finalPrice * item.qty,
          0
        );

        const originalTotal = moveCartRes.data.cart.reduce(
          (acc, item) => acc + item.product_id.orignalPrice * item.qty,
          0
        );

        localStorage.setItem(
          "cart",
          JSON.stringify({
            item: updatedItems,
            finalTotal,
            orignalTotal: originalTotal,
          })
        );

        const redirectTo = searchParams.get("ref") === "checkout" ? "/checkout" : "/";
        navigate(redirectTo);
      }
    } catch (err) {
      console.error("Login error:", err);
      notify("Login failed. Check your credentials.", 0);
    }
  };

  const handleRegister = async (e) => {
    e.preventDefault();
    const name = e.target.name.value.trim();
    const email = e.target.email.value.trim();
    const password = e.target.password.value.trim();
    const confirmPassword = e.target.confirmPassword.value.trim();

    if (!name || !email || !password || !confirmPassword) {
      return notify("All fields are required", 0);
    }

    if (password !== confirmPassword) {
      return notify("Passwords do not match", 0);
    }

    try {
      const res = await axios.post(`${API_BASE_URL}${USER_URL}/register`, {
        name,
        email,
        password,
      });

      notify(res.data.msg, res.data.flag);

      if (res.data.flag === 1) {
        dispatch(setUser({ user: res.data.user, userToken: res.data.token }));
        notify("Account created! You are now logged in.");
        setIsSignUp(false);
        navigate("/");
      }
    } catch (err) {
      console.error("Registration error:", err);
      notify("Registration failed. Try again.", 0);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 px-2 sm:px-4 md:px-6">
      <div className="bg-white rounded-lg shadow-md w-full max-w-5xl grid grid-cols-1 md:grid-cols-2 overflow-hidden">
        {/* Left side image */}
        <div className="hidden md:flex items-center justify-center bg-white p-4">
          <img
            src="/login.svg.png"
            alt="auth illustration"
            className="w-[90%] max-w-xs sm:max-w-sm md:max-w-md h-auto"
          />
        </div>

        {/* Right side form */}
        <div className="p-6 sm:p-8 md:p-10 flex flex-col justify-center">
          <h2 className="text-2xl font-bold text-teal-600 mb-1">
            {isSignUp ? "Register" : "Welcome Back"}
          </h2>
          <p className="text-xs text-gray-500 mb-6">
            {isSignUp ? "JOIN TO US" : "LOGIN TO CONTINUE"}
          </p>

          <form onSubmit={isSignUp ? handleRegister : handleLogin} className="space-y-5">
            {isSignUp && (
              <div>
                <label className="text-sm text-gray-600 block mb-1">Your name</label>
                <input
                  name="name"
                  type="text"
                  className="w-full border border-gray-300 rounded px-4 py-2 text-sm outline-none focus:ring-2 focus:ring-teal-500"
                  placeholder="Jhon Deo"
                />
              </div>
            )}

            <div>
              <label className="text-sm text-gray-600 block mb-1">Email Address</label>
              <input
                name="email"
                type="email"
                className="w-full border border-gray-300 rounded px-4 py-2 text-sm outline-none focus:ring-2 focus:ring-teal-500"
                placeholder="Example@gmail.com"
              />
            </div>

            <div className="relative">
              <label className="text-sm text-gray-600 block mb-1">Password</label>
              <input
                name="password"
                type={showPassword ? "text" : "password"}
                className="w-full border border-gray-300 rounded px-4 py-2 text-sm pr-10 outline-none focus:ring-2 focus:ring-teal-500"
              />
              <span
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-[38px] cursor-pointer text-gray-500"
              >
                {showPassword ? <MdVisibilityOff /> : <MdVisibility />}
              </span>
            </div>

            {isSignUp && (
              <div className="relative">
                <label className="text-sm text-gray-600 block mb-1">Confirm Password</label>
                <input
                  name="confirmPassword"
                  type={showConfirm ? "text" : "password"}
                  className="w-full border border-gray-300 rounded px-4 py-2 text-sm pr-10 outline-none focus:ring-2 focus:ring-teal-500"
                />
                <span
                  onClick={() => setShowConfirm(!showConfirm)}
                  className="absolute right-3 top-[38px] cursor-pointer text-gray-500"
                >
                  {showConfirm ? <MdVisibilityOff /> : <MdVisibility />}
                </span>
              </div>
            )}

            {!isSignUp && (
              <p className="text-sm text-gray-400 text-right cursor-pointer hover:underline">
                Forget Password ?
              </p>
            )}

            <button
              type="submit"
              className="w-full bg-teal-600 hover:bg-teal-700 text-white py-2 text-sm rounded shadow"
            >
              {isSignUp ? "REGISTER" : "LOGIN"}
            </button>
          </form>

          <p className="text-sm text-gray-500 text-center mt-6">
            {isSignUp ? "ALREADY USER ?" : "NEW USER ?"}
            <button
              className="text-green-600 font-semibold ml-1 hover:underline"
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
