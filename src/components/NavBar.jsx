import React from "react";

const NavBar = () => {
  return (
    <div className=" flex items-center justify-evenly px-4 py-2 sm:px-4 md:px-8 lg:px-16 font-serif">
      {/* Search bar container */}
      <div className="flex items-center justify-center">
        <input
          type="text"
          placeholder="Search Our Store"
          className="sm:w-28 md:w-40 lg:w-48 border-yellow-400 border-2 p-1 ml-[-20px] rounded-lg"
        />
        <button className="sm:w-16 md:w-16 lg:w-20 border-2 border-yellow-400 text-gray-400 ml-2 rounded px-2 py-1 text-sm  ">
          Search
        </button>
      </div>

      {/* Logo */}
      <h1 className="text-lg sm:text-4xl mt-2 text-center flex-grow text-yellow-400 font-bold">
        Essentials Hub
      </h1>
      {/* Icons */}
      <div className="flex items-center space-x-4 flex-1 justify-end text-yellow-400">
        <i className="fa-regular fa-user text-xl"></i>
        <i className="fa-solid fa-cart-shopping text-xl"></i>
      </div>
    </div>
  );
};
export default NavBar;
