import React, { useState } from "react";
import { FaSearch, FaExpand } from "react-icons/fa";
import { SlBell } from "react-icons/sl";
import { IoGridSharp } from "react-icons/io5";
import { FiMessageSquare, FiMoon, FiSearch, FiSettings, FiSun } from "react-icons/fi";

const Header = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleDarkMode = () => {
    document.documentElement.classList.toggle("dark");
    setIsDarkMode(!isDarkMode);
  };

  return (
    <div className="flex items-center justify-between p-4 bg-white shadow-md dark:!bg-indigo-950">
      {/* Search Bar */}
      <div className="flex items-center border rounded px-3 py-2">
        <input
          type="text"
          placeholder="Search here..."
          className="outline-none w-full text-sm bg-transparent"
        />
        <FiSearch  className="text-gray-500" />
      </div>

      {/* Icons */}
      <div className="flex items-center space-x-4">
        {/* Dark Mode Icon */}
        <div
          className="relative -bg--clr-primar-light rounded-full cursor-pointer"
          onClick={toggleDarkMode}
        >
          {isDarkMode ? <FiSun className="m-2" /> : <FiMoon className="m-2" />}
        </div>

        {/* Notification Icon */}
        <div className="relative -bg--clr-primar-light rounded-full ">
          <SlBell className="cursor-pointer m-2 z-10" />
          <span className="absolute -top-1 -right-1 bg-orange-500 text-white text-[10px] rounded-full w-4 h-4 text-center">
            1
          </span>
        </div>

        {/* Message Icon */}
        <div className="relative -bg--clr-primar-light rounded-full">
          <FiMessageSquare className="cursor-pointer m-2 z-10" />
          <span className="absolute -top-1 -right-1 bg-blue-500 text-white text-[10px] rounded-full w-4 h-4 text-center">
            1
          </span>
        </div>

        {/* Expand Icon */}
        <FaExpand className="text-gray-500 cursor-pointer" />

        {/* Grid Icon */}
        <IoGridSharp className="text-gray-500 cursor-pointer" />

        {/* Profile Section */}
        <div className="flex items-center space-x-2">
          <img
            src="https://via.placeholder.com/30"
            alt="User Avatar"
            className="w-8 h-8 rounded-full"
          />
          <div className="text-sm dark:text-white">
            <p>Micheal Adekiunle</p>
            <p className="-text--clr-light-gray ">Admin</p>
          </div>
        </div>

        

        {/* Settings Icon */}
        <FiSettings
          className="text-gray-500 dark:!-text--clr-light-gray-v3 cursor-pointer animate-spin-slow"
          size={20}
        />
      </div>
    </div>
  );
};

export default Header;
