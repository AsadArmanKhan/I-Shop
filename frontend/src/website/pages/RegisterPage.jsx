import { useState, useContext } from 'react';
import { FaLock, FaDollarSign, FaStar } from 'react-icons/fa';
import { MdVisibility, MdVisibilityOff } from 'react-icons/md';
import { useDispatch } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { setUser } from '../../redux/slice/userSlice';
import { MainContext } from '../../Context';

export default function RegisterPage() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { notify, API_BASE_URL, axios } = useContext(MainContext);

  const [showPassword, setShowPassword] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);

  function submitHandler(e) {
    e.preventDefault();
    const name = e.target.name.value;
    const email = e.target.email.value;
    const password = e.target.password.value;
    const confirmPassword = e.target.confirmPassword.value;

    if (!name || !email || !password || !confirmPassword) {
      notify("All fields are required", 0);
      return;
    }

    if (password !== confirmPassword) {
      notify("Passwords do not match", 0);
      return;
    }

    const data = { name, email, password };

    axios.post(`${API_BASE_URL}/user/register`, data)
      .then((resp) => {
        notify(resp.data.msg, resp.data.flag);
        if (resp.data.flag === 1) {
          e.target.reset();
          dispatch(setUser({
            user: resp.data?.user,
            userToken: resp.data.userToken
          }));
          navigate("/");
        }
      })
      .catch((err) => {
        console.log(err);
        notify("Registration Unsuccessful", 0);
      });
  }

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center">
      {/* Breadcrumb */}
      <div className="w-full max-w-6xl my-5 bg-white shadow px-6 py-6 rounded-xl">
        <nav className="text-sm text-gray-500">
          <Link to={"/"}>
            <span className="font-semibold text-gray-700">Home</span>
          </Link>
          / <span>pages</span> / <span className="font-bold text-black">Register</span>
        </nav>
      </div>

      <div className="w-full max-w-6xl">
        {/* Main Content */}
        <div className="flex flex-col md:flex-row items-center justify-center px-6 py-12 md:py-16 gap-12 bg-white rounded-b-xl shadow-md">
          {/* Illustration Section */}
          <div className="flex justify-center w-full md:w-1/2">
            <div className="relative w-80 h-80">
              <div className="absolute top-0 left-0 bg-white rounded-full shadow-lg p-4">
                <FaLock className="text-blue-600 text-3xl" />
              </div>
              <div className="absolute bottom-6 left-0 bg-white rounded shadow-md p-2">
                <FaDollarSign className="text-green-500 text-xl" />
              </div>
              <div className="absolute bottom-0 right-2 bg-white rounded shadow-md p-2">
                <FaStar className="text-yellow-400 text-xl" />
              </div>
              <div className="absolute inset-0 flex flex-col items-center justify-center">
                <div className="bg-blue-200 rounded-lg w-48 h-64 shadow-lg"></div>
                <div className="flex mt-4 gap-2">
                  <div className="w-6 h-6 bg-green-500 rounded-full"></div>
                  <div className="w-6 h-6 bg-green-700 rounded-full"></div>
                </div>
              </div>
            </div>
          </div>

          {/* Register Form Section */}
          <div className="w-full max-w-md">
            <div className="bg-white rounded-xl shadow-lg p-8">
              <h2 className="text-2xl font-semibold text-teal-600">Register</h2>
              <p className="text-sm text-gray-500 mt-1 mb-6">JOIN TO US</p>

              <form onSubmit={submitHandler} className="space-y-5">
                <div>
                  <label className="text-sm font-medium text-gray-700">Your name</label>
                  <input
                    type="text"
                    name="name"
                    placeholder="Jhon Deo"
                    className="mt-1 w-full px-4 py-2 border rounded-md shadow-sm focus:ring-2 focus:ring-teal-400 focus:outline-none"
                  />
                </div>
                <div>
                  <label className="text-sm font-medium text-gray-700">Email Address</label>
                  <input
                    type="email"
                    name="email"
                    placeholder="Example@gmail.com"
                    className="mt-1 w-full px-4 py-2 border rounded-md shadow-sm focus:ring-2 focus:ring-teal-400 focus:outline-none"
                  />
                </div>
                <div>
                  <label className="text-sm font-medium text-gray-700">Password</label>
                  <div className="relative mt-1">
                    <input
                      type={showPassword ? "text" : "password"}
                      name="password"
                      placeholder="...."
                      className="w-full px-4 py-2 border rounded-md shadow-sm focus:ring-2 focus:ring-teal-400 focus:outline-none"
                    />
                    {showPassword ? (
                      <MdVisibility
                        onClick={() => setShowPassword(false)}
                        className="absolute right-3 top-2.5 text-gray-400 cursor-pointer"
                      />
                    ) : (
                      <MdVisibilityOff
                        onClick={() => setShowPassword(true)}
                        className="absolute right-3 top-2.5 text-gray-400 cursor-pointer"
                      />
                    )}
                  </div>
                </div>
                <div>
                  <label className="text-sm font-medium text-gray-700">Confirm Password</label>
                  <div className="relative mt-1">
                    <input
                      type={showConfirm ? "text" : "password"}
                      name="confirmPassword"
                      placeholder="...."
                      className="w-full px-4 py-2 border rounded-md shadow-sm focus:ring-2 focus:ring-teal-400 focus:outline-none"
                    />
                    {showConfirm ? (
                      <MdVisibility
                        onClick={() => setShowConfirm(false)}
                        className="absolute right-3 top-2.5 text-gray-400 cursor-pointer"
                      />
                    ) : (
                      <MdVisibilityOff
                        onClick={() => setShowConfirm(true)}
                        className="absolute right-3 top-2.5 text-gray-400 cursor-pointer"
                      />
                    )}
                  </div>
                </div>

                <button
                  type="submit"
                  className="w-full py-2 bg-teal-600 hover:bg-teal-700 text-white rounded-md font-semibold transition duration-300"
                >
                  REGISTER
                </button>

                <p className="text-sm text-gray-600 text-center">
                  ALREADY USER ?
                  <Link to="/login">
                    <span className="text-green-600 font-semibold cursor-pointer ml-1">LOGIN</span>
                  </Link>
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
