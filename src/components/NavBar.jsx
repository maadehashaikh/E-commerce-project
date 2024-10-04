import { useContext } from "react";
import React from "react";
import { CartContext } from "./CartContext";
import { Link } from "react-router-dom";

const NavBar = () => {
  const { cartItems } = useContext(CartContext);
  const totalItems = cartItems.reduce(
    (total, item) => total + item.quantity,
    0
  );

  return (
    <div className="flex items-center justify-between px-4 py-2 sm:px-4 md:px-8 lg:px-16 font-serif bg-white shadow-md">
      {/* Logo */}
      <h1 className="text-lg sm:text-2xl md:text-3xl lg:text-4xl text-yellow-400 font-bold flex-grow text-center sm:text-left">
        Essentials Hub
      </h1>

      {/* Search bar container */}
      <div className="hidden sm:flex items-center justify-center ml-auto">
        <input
          type="text"
          placeholder="Search Our Store"
          className="w-24 sm:w-32 md:w-48 lg:w-64 border-yellow-400 border-2 p-1 rounded-lg"
        />
        <button className="w-16 md:w-20 border-2 border-yellow-400 text-gray-500 ml-2 rounded px-2 py-1 text-sm">
          Search
        </button>
      </div>

      {/* Icons */}
      <div className="flex items-center space-x-4 ml-auto sm:ml-4">
        <i className="fa-regular fa-user text-lg sm:text-xl text-yellow-400"></i>
        <Link to="/Cart" className="relative">
          <i className="fa-solid fa-cart-shopping text-lg sm:text-xl text-yellow-400"></i>
          {totalItems > 0 && (
            <span className="absolute top-0 right-0 bg-red-500 text-white rounded-full text-xs w-5 h-5 flex items-center justify-center">
              {totalItems}
            </span>
          )}
        </Link>
      </div>
    </div>
  );
};

export default NavBar;
