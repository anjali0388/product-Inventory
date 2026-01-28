import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { FaUser } from "react-icons/fa";

const LoginDropdown = () => {
  const navigate = useNavigate();
  const token = localStorage.getItem("token"); // ✅ login check

  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/login");
  };

  return (
    <div className="relative inline-block group">

      {/* Button */}
      <div
        className="flex items-center gap-2 text-gray-800 px-4 py-2 rounded 
                   hover:bg-blue-700 hover:text-white transition cursor-pointer"
      >
        <FaUser />
        {token ? "Account" : "Login"}
        <span className="text-sm">▼</span>
      </div>

      {/* Dropdown */}
      <div
        className="absolute right-0 mt-2 w-56 bg-white border rounded shadow-lg
                   opacity-0 invisible group-hover:visible group-hover:opacity-100
                   transition-all duration-200 z-50"
      >

        {/* NOT LOGGED IN */}
        {!token && (
          <div className="p-3 border-b">
            <p className="text-gray-700 text-sm">
              New customer?{" "}
              <Link to="/signup" className="text-blue-600 font-semibold">
                Sign Up
              </Link>
            </p>

            <Link
              to="/login"
              className="block mt-2 text-center bg-blue-600 text-white py-1 rounded"
            >
              Login
            </Link>
          </div>
        )}

        {/* LOGGED IN */}
        {token && (
          <ul className="flex flex-col text-gray-700 text-sm">
            <li>
              <Link
                to="/profile"
                className="px-4 py-2 hover:bg-gray-100 flex gap-2"
              >
                <FaUser /> My Profile
              </Link>
            </li>

            <li>
              <Link
                to="/orders"
                className="px-4 py-2 hover:bg-gray-100 flex gap-2"
              >
                📦 Orders
              </Link>
            </li>

            <li>
              <Link
                to="/wishlist"
                className="px-4 py-2 hover:bg-gray-100 flex gap-2"
              >
                ❤️ Wishlist
              </Link>
            </li>

            <li>
              <button
                onClick={handleLogout}
                className="px-4 py-2 text-left hover:bg-red-100 text-red-600"
              >
                🚪 Logout
              </button>
            </li>
          </ul>
        )}
      </div>
    </div>
  );
};

export default LoginDropdown;
