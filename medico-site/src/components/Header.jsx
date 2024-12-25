import { useState } from "react";
import { FaCartPlus, FaSearch, FaUser } from "react-icons/fa";
import logo from "../assets/images/logo.png";

function Header() {
  const [searchOpen, setSearchOpen] = useState(false);

  return (
    <header className="bg-white shadow-md p-5 pl-20 pr-20 flex items-center justify-between fixed top-0 left-0 right-0 z-50">
      <div className="flex items-center">
        <img src={logo} alt="Logo" className="h-10 w-auto mr-5 pr-5" />
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
              <a
                href="#category"
                className="text-gray-700 hover:text-[#6bc5bb]"
              >
                Category
              </a>
              <ul className="absolute hidden group-hover:block bg-white shadow-md mt-2">
                <li>
                  <a
                    href="#category1"
                    className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
                  >
                    Category 1
                  </a>
                </li>
                <li>
                  <a
                    href="#category2"
                    className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
                  >
                    Category 2
                  </a>
                </li>
                <li>
                  <a
                    href="#category3"
                    className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
                  >
                    Category 3
                  </a>
                </li>
              </ul>
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
        {searchOpen ? (
          <div className="flex items-center">
            <input
              type="text"
              placeholder="Search..."
              className="border border-gray-300 p-2 rounded-l-md"
            />
            <button
              type="submit"
              className="bg-blue-500 text-white p-2 rounded-r-md"
            >
              Search
            </button>
            <button
              onClick={() => setSearchOpen(false)}
              className="ml-2 text-gray-700 hover:text-red-700"
            >
              Close
            </button>
          </div>
        ) : (
          <button
            onClick={() => setSearchOpen(true)}
            className="text-gray-700 hover:text-[#6bc5bb]"
          >
            <FaSearch size={20} />
          </button>
        )}
        <button className=" ml-4 text-gray-700 hover:text-[#6bc5bb] p-2 rounded-md">
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
