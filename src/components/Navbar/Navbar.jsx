import React, { useState } from "react";
import { FaCoffee } from "react-icons/fa";
import Login from "./Login";

const Menu = [
  { id: 1, name: "Home", link: "/#" },
  { id: 2, name: "Services", link: "/#services" },
  { id: 3, name: "About", link: "/#about" },
];

const Navbar = () => {
  const [showLogin, setShowLogin] = useState(false);

  const handleLoginClick = () => {
    setShowLogin(true);
  };

  const handleCloseLogin = () => {
    setShowLogin(false);
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
                {Menu.map((menu) => (
                  <li key={menu.id}>
                    <a
                      href={menu.link}
                      className="inline-block text-xl py-4 px-4 text-white/70 hover:text-white duration-200"
                    >
                      {menu.name}
                    </a>
                  </li>
                ))}
              </ul>
              <button className="bg-primary/70 text-white px-4 py-2 rounded-full flex items-center gap-3">
                Order
                <FaCoffee className="text-xl text-white drop-shadow-sm cursor-pointer" />
              </button>
              <button
                onClick={handleLoginClick}
                className="bg-secondary/70 text-white px-4 py-2 rounded-full"
              >
                Login
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Login Form Modal */}
      {showLogin && <Login onClose={handleCloseLogin} />}
    </>
  );
};

export default Navbar;
