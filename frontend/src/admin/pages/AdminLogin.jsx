export default function AdminLogin() {
    return (
        <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-gray-800 via-slate-700 to-gray-900
 p-4">
            <div className="w-full max-w-md bg-[#f0f8ff] text-gray-900 rounded-2xl shadow-2xl p-8">
                <h2 className="text-3xl font-bold text-center text-gray-800 mb-6">Admin Login</h2>

                <form className="space-y-6">
                    <div>
                        <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                            Email Address
                        </label>
                        <input
                            type="email"
                            id="email"
                            className="mt-1 w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                            placeholder="admin@example.com"
                            required
                        />
                    </div>

                    <div>
                        <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                            Password
                        </label>
                        <input
                            type="password"
                            id="password"
                            className="mt-1 w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                            placeholder="••••••••"
                            required
                        />
                    </div>

                    <div className="flex items-center justify-between">
                        <label className="flex items-center text-sm">
                            <input type="checkbox" className="form-checkbox h-4 w-4 text-blue-600" />
                            <span className="ml-2 text-gray-700">Remember me</span>
                        </label>
                        <a href="#" className="text-sm text-blue-600 hover:underline">Forgot password?</a>
                    </div>

                    <button
                        type="submit"
                        className="w-full bg-blue-600 text-white font-semibold py-2 px-4 rounded-lg hover:bg-blue-700 transition duration-300"
                    >
                        Sign In
                    </button>
                </form>

                <p className="mt-6 text-center text-sm text-gray-600">
                    Not an admin? <a href="#" className="text-blue-600 hover:underline">Contact support</a>
                </p>
            </div>
        </div>
    );
}
