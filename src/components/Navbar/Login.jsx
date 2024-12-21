import React, { useState } from "react";

const Login = ({ onClose }) => {
  return (
    <div className="fixed inset-0 bg-black/50 flex justify-center items-center z-50">
      <div className="bg-white rounded-lg shadow-lg w-full max-w-sm p-6 relative">
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-3 right-3 text-gray-600 hover:text-gray-900"
          aria-label="Close"
        >
          ✖
        </button>

        <h2 className="text-2xl font-bold text-center text-gray-700 mb-4">
          Login
        </h2>
        <form>
          <div className="mb-4">
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700 mb-2"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
              placeholder="Enter your email"
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="password"
              className="block text-sm font-medium text-gray-700 mb-2"
            >
              Password
            </label>
            <input
              type="password"
              id="password"
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
              placeholder="Enter your password"
            />
          </div>
          <button
            type="submit"
            className="w-full bg-primary text-white py-2 rounded-lg hover:bg-primary/90 transition"
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

const Navbar = () => {
  const [showLogin, setShowLogin] = useState(false);

  return (
    <>
      <div className="bg-gradient-to-r from-secondary to-secondary/90 shadow-md bg-gray-900 text-white">
        <div className="container py-2">
          <div className="flex justify-between items-center">
            <div>
              <a href="#" className="font-bold text-2xl sm:text-3xl">
                Coffee Cafe
              </a>
            </div>
            <div className="flex items-center gap-4">
              <button className="bg-primary text-white px-4 py-2 rounded-lg">
                Order
              </button>
              <button
                onClick={() => setShowLogin(true)}
                className="bg-primary text-white px-4 py-2 rounded-lg"
              >
                Login
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Show login modal */}
      {showLogin && <Login onClose={() => setShowLogin(false)} />}
    </>
  );
};

export default Navbar;
