
// AuthForm.js
import React, { useContext, useEffect, useState } from "react";
import { FaEnvelope, FaUser, FaLock } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useSearchParams } from "react-router-dom";
// import { setUser } from "../../redux/features/userSlice";
import { MainContext } from "../../Context";
import { setUser } from "../../redux/slice/userSlice";
import axios from "axios";

export default function AuthForm() {
  const user = useSelector((state) => state.user.data)
  const [searchParams, SetsearchParams] = useSearchParams()
  const { notify, API_BASE_URL, USER_URL } = useContext(MainContext)
  const [isSignUp, setIsSignUp] = useState(false);
  const dispacher = useDispatch()
  const navigator = useNavigate()
  const cartData = JSON.parse(localStorage.getItem("cart"));
  const cart = cartData ? cartData.items : null
  console.log(cartData)

  function submitHandle(e) {
    e.preventDefault();

    const email = e.target.email.value;
    const password = e.target.password.value;

    if (!email || !password) {
      notify("Please fill all fields", 0);
      return;
    }

    const data = { email, password };

    axios.post(`${API_BASE_URL}${USER_URL}/login`, data)
      .then(async (response) => {
        notify(response.data.msg, response.data.flag);

        if (response.data.flag === 1) {
          const userPayload = {
            user: response.data.user,
            user_token: response.data.token
          };

          // ✅ Set Redux user state
          dispacher(setUser(userPayload));

          // ✅ Also store in localStorage to persist login across refreshes
          localStorage.setItem("user", JSON.stringify(userPayload));

          // ✅ Move guest cart to DB and update local cart
          const updateCart = await axios.post(`${API_BASE_URL}/cart/move-to-db`, {
            cart: cart != null ? cart : null,
            user_id: response.data?.user?._id
          });
          console.log(updateCart);
          

          let final_total = 0;
          let original_total = 0;

          const cartUpdate = updateCart.data.cart.map((cd) => {
            const { product_id, qty } = cd;
            final_total += (product_id.finalPrice * qty);
            original_total += (product_id.originalPrice * qty);

            return {
              productId: product_id._id,
              qty: qty
            };
          });

          // ✅ Save cart to localStorage
          localStorage.setItem("cart", JSON.stringify({
            items: cartUpdate,
            final_total,
            original_total
          }));

          // ✅ Navigate accordingly
          if (searchParams.get("ref") === "checkout") {
            navigator("/checkout");
          } else {
            navigator("/");
          }
        }
      })
      .catch((error) => {
        console.log(error);
        notify("Login failed. Check credentials.", "error");
      });

    console.log("end");
  }


  function registerHandle(e) {
    e.preventDefault();

    const data = {
      name: e.target.name.value,
      email: e.target.email.value,
      password: e.target.password.value,
    };

    axios.post("http://localhost:5000/user/register", data)
      .then((response) => {
        notify(response.data.msg, response.data.flag);
        if (response.data.flag === 1) {
          dispacher(setUser(
            {
              user: response.data.user,
              user_token: response.data.token
            }
          ));

        }
        navigator("/"); // or your desired route
      })
      .catch((error) => {
        console.log(error);
        notify("Login failed. Check credentials.", "error");
      });

    console.log("end");
  }
  useEffect(
    () => {
      if (user != null) {
        navigator("/")
      }
    },
    [user]
  )


  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100 p-4">
      <div className="w-full max-w-md bg-white rounded-2xl shadow-xl p-8">
        <h2 className="text-2xl font-bold text-center mb-6 text-gray-800">
          {isSignUp ? "Create Account" : "Welcome Back"}
        </h2>

        {isSignUp ?
          <form onSubmit={registerHandle} className="space-y-4">
            <div className="relative">
              <FaUser className="absolute left-3 top-3 text-gray-400" />
              <input
                type="text"
                placeholder="Name"
                name="name"
                className="w-full pl-10 pr-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <div className="relative">
              <FaEnvelope className="absolute left-3 top-3 text-gray-400" />
              <input
                type="email"
                name="email"
                placeholder="Email"
                className="w-full pl-10 pr-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <div className="relative">
              <FaLock className="absolute left-3 top-3 text-gray-400" />
              <input
                type="password"
                name="password"
                placeholder="Password"
                className="w-full pl-10 pr-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <button
              type="submit"
              className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition duration-300"
            >
              Sign Up
            </button>
          </form>
          :
          <form onSubmit={submitHandle} className="space-y-4">
            <div className="relative">
              <FaEnvelope className="absolute left-3 top-3 text-gray-400" />
              <input
                type="email"
                name="email"
                placeholder="Email"
                className="w-full pl-10 pr-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <div className="relative">
              <FaLock className="absolute left-3 top-3 text-gray-400" />
              <input
                type="password"
                name="password"
                placeholder="Password"
                className="w-full pl-10 pr-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <button
              type="submit"
              className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition duration-300"
            >
              Sign In
            </button>
          </form>
        }

        <div className="text-center mt-4">
          <p className="text-sm text-gray-600">
            {isSignUp ? "Already have an account?" : "Don't have an account?"}
            <button
              onClick={() => setIsSignUp(!isSignUp)}
              className="ml-1 text-blue-600 hover:underline"
            >
              {isSignUp ? "Sign In" : "Sign Up"}
            </button>
          </p>
        </div>
      </div>
    </div>
  );
}


































































// AuthForm.js
// AuthForm.js
// import React, { useContext, useEffect, useState } from "react";
// import { FaEnvelope, FaUser, FaLock } from "react-icons/fa";
// import { useDispatch, useSelector } from "react-redux";
// import { useNavigate, useSearchParams, } from "react-router-dom";
// // import { setUser } from "../../redux/features/userSlice";
// import { MainContext } from "../../Context";
// import axios from "axios";
// import { setUser } from "../../redux/slice/userSlice";

// export default function AuthForm() {
//   const user = useSelector((state) => state.user.data)
//   const [searchParams, SetsearchParams] = useSearchParams()
//   const { notify, API_BASE_URL, USER_URL } = useContext(MainContext)
//   const [isSignUp, setIsSignUp] = useState(false);
//   const dispacher = useDispatch()
//   const navigator = useNavigate()
//   const cartData = JSON.parse(localStorage.getItem("cart"));
//   const cart = cartData ? cartData.items : null
//   console.log(cart)

//   function submitHandle(e) {
//     e.preventDefault();

//     const data = {
//       email: e.target.email.value,
//       password: e.target.password.value,
//     };


//     axios.post("http://localhost:5000/user/login", data)
//       .then(
//         async (response) => {
//           notify(response.data.msg, response.data.flag);
//           if (response.data.flag === 1) {
//             dispacher(setUser(
//               {
//                 user: response.data.user,
//                 user_token: response.data.token
//               }
//             ));

//             const updateCart = await axios.post(`${API_BASE_URL}/cart/move-to-db`, {
//               cart: cart != null ? cart : null,
//               user_id: response.data?.user?._id
//             })
//             let finalTotal = 0;
//             let orignalTotal = 0;
//             const cartUpdate = updateCart.data.cart.map(
//               (cd) => {
//                 const { product_id, qty, user_id } = cd;
//                 finalTotal += (product_id.finalPrice * qty)
//                 orignalTotal += (product_id.originalPrice * qty)

//                 return {
//                   productId: product_id._id,
//                   qty: qty

//                 }

//               }
//             )

//             localStorage.setItem("cart", JSON.stringify({
//               items: cartUpdate, finalTotal, orignalTotal
//             }))

//             if (searchParams.get("ref") === "checkout") {
//               navigator("/checkout");

//             } else {
//               navigator("/")
//             }

//           }
//           // or your desired route
//         })
//       .catch((error) => {
//         console.log(error);
//         notify("Login failed. Check credentials.", "error");
//       });

//     console.log("end");
//   }

//   function registerHandle(e) {
//     e.preventDefault();

//     const data = {
//       name: e.target.name.value,
//       email: e.target.email.value,
//       password: e.target.password.value,
//     };

//     axios.post("http://localhost:5000/user/register", data)
//       .then((response) => {
//         notify(response.data.msg, response.data.flag);
//         if (response.data.flag === 1) {
//           dispacher(setUser(
//             {
//               user: response.data.user,
//               userToken: response.data.token
//             }
//           ));

//         }
//         navigator("/"); // or your desired route
//       })
//       .catch((error) => {
//         console.log(error);
//         notify("Login failed. Check credentials.", "error");
//       });

//     console.log("end");
//   }
//   useEffect(
//     () => {
//       if (user != null) {
//         navigator("/")
//       }
//     },
//     [user]
//   )


//   return (
//     <div className="flex items-center justify-center min-h-screen bg-gray-100 p-4">
//       <div className="w-full max-w-md bg-white rounded-2xl shadow-xl p-8">
//         <h2 className="text-2xl font-bold text-center mb-6 text-gray-800">
//           {isSignUp ? "Create Account" : "Welcome Back"}
//         </h2>

//         {isSignUp ?
//           <form onSubmit={registerHandle} className="space-y-4">
//             <div className="relative">
//               <FaUser className="absolute left-3 top-3 text-gray-400" />
//               <input
//                 type="text"
//                 placeholder="Name"
//                 name="name"
//                 className="w-full pl-10 pr-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
//               />
//             </div>

//             <div className="relative">
//               <FaEnvelope className="absolute left-3 top-3 text-gray-400" />
//               <input
//                 type="email"
//                 name="email"
//                 placeholder="Email"
//                 className="w-full pl-10 pr-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
//               />
//             </div>

//             <div className="relative">
//               <FaLock className="absolute left-3 top-3 text-gray-400" />
//               <input
//                 type="password"
//                 name="password"
//                 placeholder="Password"
//                 className="w-full pl-10 pr-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
//               />
//             </div>

//             <button
//               type="submit"
//               className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition duration-300"
//             >
//               Sign Up
//             </button>
//           </form>
//           :
//           <form onSubmit={submitHandle} className="space-y-4">
//             <div className="relative">
//               <FaEnvelope className="absolute left-3 top-3 text-gray-400" />
//               <input
//                 type="email"
//                 name="email"
//                 placeholder="Email"
//                 className="w-full pl-10 pr-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
//               />
//             </div>

//             <div className="relative">
//               <FaLock className="absolute left-3 top-3 text-gray-400" />
//               <input
//                 type="password"
//                 name="password"
//                 placeholder="Password"
//                 className="w-full pl-10 pr-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
//               />
//             </div>

//             <button
//               type="submit"
//               className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition duration-300"
//             >
//               Sign In
//             </button>
//           </form>
//         }

//         <div className="text-center mt-4">
//           <p className="text-sm text-gray-600">
//             {isSignUp ? "Already have an account?" : "Don't have an account?"}
//             <button
//               onClick={() => setIsSignUp(!isSignUp)}
//               className="ml-1 text-blue-600 hover:underline"
//             >
//               {isSignUp ? "Sign In" : "Sign Up"}
//             </button>
//           </p>
//         </div>
//       </div>
//     </div>
//   );
// }




















// import React, { useContext, useEffect, useState } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import { data, useNavigate, useSearchParams } from "react-router-dom";
// import { setUser } from "../../redux/slice/userSlice";
// import { MainContext } from "../../Context";
// import { MdVisibility, MdVisibilityOff } from "react-icons/md";
// import axios from "axios";

// export default function AuthForm() {
//   const user = useSelector((state) => state.user.data);
//   const [searchParams] = useSearchParams();
//   const { notify, API_BASE_URL, USER_URL } = useContext(MainContext);

//   const [isSignUp, setIsSignUp] = useState(false);
//   const [showPassword, setShowPassword] = useState(false);
//   const [showConfirm, setShowConfirm] = useState(false);

//   const dispatch = useDispatch();
//   const navigate = useNavigate();

//   const cartData = JSON.parse(localStorage.getItem("Cart"));
//   const cart = cartData ? cartData.item : null;
//   console.log(cart)

//   useEffect(() => {
//     if (user) navigate("/");
//   }, [user]);

//   const handleLogin = async (e) => {

//     e.preventDefault();
//     const email = e.target.email.value;
//     const password = e.target.password.value;

//     if (!email || !password) {
//       notify("Please fill all fields", 0);
//       return;
//     }

//     try {
//       const resp = await axios.post(`${API_BASE_URL}${USER_URL}/login`, data);
//       notify(resp.data.msg, resp.data.flag);
//       if (resp.data.flag === 1) {
//         dispatch(setUser({ user: resp.data.user, userToken: resp.data.token }));

//         localStorage.setItem(
//           "user",
//           JSON.stringify(
//      {
//  user: resp.data.user,
//  userToken: resp.data.token
//         }
// ));

//         if (cart && Array.isArray(cart) && cart.length > 0) {
//           // ✅ Move local cart to DB
//           const updateCart = await axios.post(`${API_BASE_URL}/cart/move-to-db`, {
//             cart,
//             user_id: resp.data?.user?._id,
//           });

//           console.log("✅ Cart sync response:", updateCart.data);

//           if (Array.isArray(updateCart.data.cart) && updateCart.data.cart.length > 0) {
//             let final_total = 0;
//             let original_total = 0;

//             const updatedItems = updateCart.data.cart.map(item => {
//               final_total += item.product_id.finalPrice * item.qty;
//               original_total += item.product_id.originalPrice * item.qty;
//               return { productId: item.product_id._id, qty: item.qty };
//             });

//             localStorage.setItem(
//               "Cart",
//               JSON.stringify({ item: updatedItems, final_total, original_total })
//             );
//           }

//         } else {
//           // ⬅️ Fetch cart from DB if local cart is empty
//           const dbCart = await axios.get(`${API_BASE_URL}/cart/${resp.data?.user?._id}`);

//           if (Array.isArray(dbCart.data.cart) && dbCart.data.cart.length > 0) {
//             let final_total = 0;
//             let original_total = 0;

//             const updatedItems = dbCart.data.cart.map(item => {
//               final_total += item.product_id.finalPrice * item.qty;
//               original_total += item.product_id.originalPrice * item.qty;
//               return { productId: item.product_id._id, qty: item.qty };
//             });

//             localStorage.setItem(
//               "cart",
//               JSON.stringify({ item: updatedItems, final_total, original_total })
//             );

//             console.log("🛒 Restored cart from DB:", updatedItems);
//           } else {
//             console.log("ℹ️ No cart found in DB.");
//           }
//         }


//         navigate(searchParams.get("ref") === "checkout" ? "/checkout" : "/");
//       }
//     } catch (err) {
//       console.log(err);
//       notify("Login failed. Check credentials.", 0);
//     }
//   };

//   const handleRegister = async (e) => {
//     e.preventDefault();
//     const name = e.target.name.value;
//     const email = e.target.email.value;
//     const password = e.target.password.value;
//     const confirmPassword = e.target.confirmPassword?.value;

//     if (!name || !email || !password || !confirmPassword) {
//       notify("All fields are required", 0);
//       return;
//     }

//     if (password !== confirmPassword) {
//       notify("Passwords do not match", 0);
//       return;
//     }

//     try {
//       const resp = await axios.post(`${API_BASE_URL}/user/register`, { name, email, password });
//       notify(resp.data.msg, resp.data.flag);

//       if (resp.data.flag === 1) {
//         dispatch(setUser({
//           user: resp.data.user,
//           userToken: resp.data.token
//         }));

//         localStorage.setItem(
//           "user",
//           JSON.stringify({ user: resp.data.user, userToken: resp.data.token })
//         );

//         // 🔁 Sync local cart to DB (SAME as login)
//         if (cart && Array.isArray(cart) && cart.length > 0) {
//           const updateCart = await axios.post(`${API_BASE_URL}/cart/move-to-db`, {
//             cart,
//             user_id: resp.data?.user?._id,
//           });

//           console.log("✅ Cart sync response:", updateCart.data);

//           if (Array.isArray(updateCart.data.cart) && updateCart.data.cart.length > 0) {
//             let final_total = 0;
//             let original_total = 0;

//             const updatedItems = updateCart.data.cart.map(item => {
//               final_total += item.product_id.finalPrice * item.qty;
//               original_total += item.product_id.originalPrice * item.qty;
//               return { productId: item.product_id._id, qty: item.qty };
//             });

//             localStorage.setItem(
//               "cart",
//               JSON.stringify({ item: updatedItems, final_total, original_total })
//             );
//           }
//         }

//         navigate("/");
//       }

//     } catch (err) {
//       console.log(err);
//       notify("Registration failed. Try again.", 0);
//     }
//   };

//   return (
//     <div className="min-h-screen flex items-center justify-center bg-gray-100 p-4">
//       <div className="bg-white rounded-xl shadow-lg w-full max-w-5xl grid grid-cols-1 md:grid-cols-2 overflow-hidden">
//         {/* Left Image */}
//         <div className="hidden md:flex items-center justify-center p-8 bg-gray-50">
//           <img
//             src='public/login.svg.png'
//             alt="auth illustration"
//             className="w-full max-w-md"
//           />
//         </div>

//         {/* Right Form */}
//         <div className="p-8">
//           <h2 className="text-2xl font-bold text-teal-600">
//             {isSignUp ? "Register" : "Welcome Back"}
//           </h2>
//           <p className="text-sm text-gray-500 mb-6">
//             {isSignUp ? "JOIN TO US" : "LOGIN TO CONTINUE"}
//           </p>

//           <form onSubmit={isSignUp ? handleRegister : handleLogin} className="space-y-5">
//             {isSignUp && (
//               <div>
//                 <label className="text-sm text-gray-600 block mb-1">Your name</label>
//                 <input
//                   type="text"
//                   name="name"
//                   placeholder="Jhon Deo"
//                   className="w-full border px-4 py-2 rounded focus:outline-none focus:ring-2 focus:ring-teal-500"
//                 />
//               </div>
//             )}

//             <div>
//               <label className="text-sm text-gray-600 block mb-1">Email Address</label>
//               <input
//                 type="email"
//                 name="email"
//                 placeholder="Example@gmail.com"
//                 className="w-full border px-4 py-2 rounded focus:outline-none focus:ring-2 focus:ring-teal-500"
//               />
//             </div>

//             <div className="relative">
//               <label className="text-sm text-gray-600 block mb-1">Password</label>
//               <input
//                 type={showPassword ? "text" : "password"}
//                 name="password"
//                 placeholder="••••••••"
//                 className="w-full border px-4 py-2 rounded pr-10 focus:outline-none focus:ring-2 focus:ring-teal-500"
//               />
//               <span
//                 onClick={() => setShowPassword(!showPassword)}
//                 className="absolute right-3 top-9 text-gray-500 cursor-pointer"
//               >
//                 {showPassword ? <MdVisibilityOff /> : <MdVisibility />}
//               </span>
//             </div>

//             {isSignUp && (
//               <div className="relative">
//                 <label className="text-sm text-gray-600 block mb-1">Confirm Password</label>
//                 <input
//                   type={showConfirm ? "text" : "password"}
//                   name="confirmPassword"
//                   placeholder="••••••••"
//                   className="w-full border px-4 py-2 rounded pr-10 focus:outline-none focus:ring-2 focus:ring-teal-500"
//                 />
//                 <span
//                   onClick={() => setShowConfirm(!showConfirm)}
//                   className="absolute right-3 top-9 text-gray-500 cursor-pointer"
//                 >
//                   {showConfirm ? <MdVisibilityOff /> : <MdVisibility />}
//                 </span>
//               </div>
//             )}

//             {!isSignUp && (
//               <p className="text-sm text-gray-500 text-right cursor-pointer hover:underline">
//                 Forget Password ?
//               </p>
//             )}

//             <button
//               type="submit"
//               className="w-full bg-teal-600 hover:bg-teal-700 text-white font-semibold py-2 rounded transition duration-300"
//             >
//               {isSignUp ? "REGISTER" : "LOGIN"}
//             </button>
//           </form>

//           <p className="text-sm text-gray-600 text-center mt-4">
//             {isSignUp ? "ALREADY USER ?" : "NEW USER ?"}
//             <button
//               className="text-green-600 font-medium ml-1 hover:underline"
//               onClick={() => setIsSignUp(!isSignUp)}
//             >
//               {isSignUp ? "LOGIN" : "SIGN UP"}
//             </button>
//           </p>
//         </div>
//       </div>
//     </div>
//   );
// }
