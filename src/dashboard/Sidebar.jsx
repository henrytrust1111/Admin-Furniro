import React from "react";
import {
  FiHome,
  FiShoppingCart,
  FiLayers,
  FiUser,
  FiBox,
} from "react-icons/fi";

const Sidebar = () => {
  return (
    <aside className="w-64 bg-white shadow-md dark:!-bg--clr-dark">
      {/* Top Section */}
      <div className="p-4">
        <h2 className="text-xl font-semibold -text--clr-primary">Furniro</h2>
      </div>

      <nav className="flex flex-col p-4 space-y-4">
        <a
          href="#"
          className="flex items-center text-gray-600 hover:text-blue-600"
        >
          <FiHome className="mr-2" /> Dashboard
        </a>
        <a
          href="#"
          className="flex items-center text-gray-600 hover:text-blue-600"
        >
          <FiShoppingCart className="mr-2" /> Ecommerce
        </a>
        <a
          href="#"
          className="flex items-center text-gray-600 hover:text-blue-600"
        >
          <FiLayers className="mr-2" /> Category
        </a>
        <a
          href="#"
          className="flex items-center text-gray-600 hover:text-blue-600"
        >
          <FiBox className="mr-2" /> Attributes
        </a>
        <a
          href="#"
          className="flex items-center text-gray-600 hover:text-blue-600"
        >
          <FiUser className="mr-2" /> User
        </a>
      </nav>
    </aside>
  );
};

export default Sidebar;
