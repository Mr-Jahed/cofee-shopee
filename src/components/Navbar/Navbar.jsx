import React, { useState } from "react";
import { FaCoffee } from "react-icons/fa";

const Navbar = () => {
  const [showForm, setShowForm] = useState(false);
  const [isLogin, setIsLogin] = useState(true);

  const toggleForm = () => {
    setShowForm(!showForm);
  };

  return (
    <>
      <div className="bg-gradient-to-r from-secondary to-secondary/90 shadow-md bg-gray-900 text-white">
        <div className="container py-2">
          <div className="flex justify-between items-center">
            {/* Logo Section */}
            <div>
              <a
                href="#"
                className="font-bold text-2xl sm:text-3xl flex justify-center items-center gap-2 tracking-wider font-cursive"
              >
                <img src="/coffee_logo.png" alt="Logo" className="w-14" />
                Coffee Cafe
              </a>
            </div>

            {/* Menu Section */}
            <div className="flex justify-between items-center gap-4">
              <ul className="hidden sm:flex items-center gap-4">
                <li>
                  <a
                    href="/#"
                    className="inline-block text-xl py-4 px-4 text-white/70 hover:text-white duration-200"
                  >
                    Home
                  </a>
                </li>
                <li>
                  <a
                    href="/#services"
                    className="inline-block text-xl py-4 px-4 text-white/70 hover:text-white duration-200"
                  >
                    Services
                  </a>
                </li>
                <li>
                  <a
                    href="/#about"
                    className="inline-block text-xl py-4 px-4 text-white/70 hover:text-white duration-200"
                  >
                    About
                  </a>
                </li>
              </ul>
              <button className="bg-primary/70 text-white px-4 py-2 rounded-full flex items-center gap-3">
                Order
                <FaCoffee className="text-xl text-white drop-shadow-sm cursor-pointer" />
              </button>

              {/* Login/Signup Button */}
              <button
                onClick={toggleForm}
                className="bg-secondary/70 text-white px-4 py-2 rounded-full"
              >
                Login/Signup
              </button>
            </div>
          </div>

          {/* Login/Signup Form */}
          {showForm && (
            <div className="mt-4 bg-white rounded-lg shadow-lg p-6 max-w-sm mx-auto">
              <div className="flex justify-between mb-4">
                <button
                  className={`text-lg font-bold ${
                    isLogin ? "border-b-2 border-primary text-primary" : "text-gray-500"
                  }`}
                  onClick={() => setIsLogin(true)}
                >
                  Login
                </button>
                <button
                  className={`text-lg font-bold ${
                    !isLogin ? "border-b-2 border-primary text-primary" : "text-gray-500"
                  }`}
                  onClick={() => setIsLogin(false)}
                >
                  Signup
                </button>
              </div>

              {isLogin ? (
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
              ) : (
                <form>
                  <div className="mb-4">
                    <label
                      htmlFor="name"
                      className="block text-sm font-medium text-gray-700 mb-2"
                    >
                      Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                      placeholder="Enter your name"
                    />
                  </div>
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
                      placeholder="Create a password"
                    />
                  </div>
                  <button
                    type="submit"
                    className="w-full bg-primary text-white py-2 rounded-lg hover:bg-primary/90 transition"
                  >
                    Signup
                  </button>
                </form>
              )}
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default Navbar;
