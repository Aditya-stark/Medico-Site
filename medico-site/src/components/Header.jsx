import { useState } from "react";
import { FaCartPlus, FaUser } from "react-icons/fa";
import logo from "../assets/images/logo.png";
import CategoriesDropDown from "./CategoriesDropDown";

function Header() {
  return (
    <header className="bg-white shadow-md p-5 pl-20 pr-20 flex items-center justify-between fixed top-0 left-0 right-0 z-50">
      <div className="flex items-center">
        {/* Logo */}
        <img src={logo} alt="Logo" className="h-10 w-auto mr-5 pr-5" />
        {/* Navigation */}
        <nav>
          <ul className="flex space-x-4">
            <li>
              <a href="#home" className="text-gray-700 hover:text-[#6bc5bb]">
                Home
              </a>
            </li>
            <li>
              <a href="#about" className="text-gray-700 hover:text-[#6bc5bb]">
                About
              </a>
            </li>
            <li className="relative group">
              <CategoriesDropDown />
            </li>
            <li>
              <a href="#shop" className="text-gray-700 hover:text-[#6bc5bb]">
                Shop
              </a>
            </li>
            <li>
              <a href="#contact" className="text-gray-700 hover:text-[#6bc5bb]">
                Contact
              </a>
            </li>
          </ul>
        </nav>
      </div>
      <div className="flex items-center">
        {/* Search Input */}
        <div className="relative text-gray-600">
          <input
            type="search"
            name="search"
            placeholder="Search"
            className="bg-white h-10 px-5 pr-10 rounded-full text-sm focus:outline-none focus:ring-2 focus:ring-teal-500 border border-gray-300 w-full sm:w-64 md:w-80 lg:w-96"
          />
          <button type="submit" className="absolute right-0 top-0 mt-2.5 mr-4">
            <svg
              className="h-4 w-4 fill-current text-gray-600"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 56.966 56.966"
              xmlSpace="preserve"
            >
              <path d="M55.146,51.887L41.588,37.786c3.486-4.144,5.396-9.358,5.396-14.786c0-12.682-10.318-23-23-23s-23,10.318-23,23  s10.318,23,23,23c4.761,0,9.298-1.436,13.177-4.162l13.661,14.208c0.571,0.593,1.339,0.92,2.162,0.92  c0.779,0,1.518-0.297,2.079-0.837C56.255,54.982,56.293,53.08,55.146,51.887z M23.984,6c9.374,0,17,7.626,17,17s-7.626,17-17,17  s-17-7.626-17-17S14.61,6,23.984,6z" />
            </svg>
          </button>
        </div>
        {/* Cart and User Icons */}
        <button className="ml-4 text-gray-700 hover:text-[#6bc5bb] p-2 rounded-md">
          <FaCartPlus size={25} />
        </button>
        <button className="ml-4 text-gray-700 hover:text-[#6bc5bb] p-2 rounded-md">
          <FaUser size={20} />
        </button>
      </div>
    </header>
  );
}

export default Header;
