import { FaCartPlus, FaUser, FaBars, FaTimes } from "react-icons/fa";
import logo from "../../assets/images/logo.png";
import CategoriesDropDown from "../CategoriesDropDown";
import { useState, useEffect } from "react";
import { Link, NavLink } from "react-router-dom";

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 640) {
        setIsMenuOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const navLinkStyle =
    "text-[12px] md:text-[16px] text-gray-700 hover:text-mainCyan";
  const activeStyle = "text-mainCyan font-semibold";

  return (
    <header className="bg-white shadow-md p-5 lg:pl-20 lg:pr-20 flex items-center justify-between fixed top-0 left-0 right-0 z-50">
      <div className="flex items-center justify-between w-full">
        <div className="flex items-center">
          {/* Logo */}
          <Link to="/">
            <img
              src={logo}
              alt="Logo"
              className="h-7 w-auto lg:h-10 lg:w-auto mr-3 lg:mr-5 lg:pr-5"
            />
          </Link>

          {/* Navigation */}
          <nav className="hidden sm:flex">
            <ul className="flex sm:space-x-2 md:space-x-4">
              <li>
                <NavLink
                  to="/"
                  className={(e) =>
                    e.isActive ? `${navLinkStyle} ${activeStyle}` : navLinkStyle
                  }
                >
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink
                  to={"/about"}
                  className={(e) =>
                    e.isActive ? `${navLinkStyle} ${activeStyle}` : navLinkStyle
                  }
                >
                  About
                </NavLink>
              </li>
              <li className="relative group">
                <CategoriesDropDown />
              </li>
              <li>
                <NavLink
                  to="/shop"
                  className={(e) =>
                    e.isActive ? `${navLinkStyle} ${activeStyle}` : navLinkStyle
                  }
                >
                  Shop
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/contact"
                  className={(e) =>
                    e.isActive ? `${navLinkStyle} ${activeStyle}` : navLinkStyle
                  }
                >
                  Contact
                </NavLink>
              </li>
            </ul>
          </nav>
        </div>
        {/* Search Field */}
        <div className="hidden sm:flex items-center ml-auto">
          <div className="relative text-gray-600 sm:w-32 md:w-48 lg:w-64">
            <input
              type="search"
              name="search"
              placeholder="Search"
              className="bg-white sm:h-8 md:h-10 px-5 pr-10 rounded-full text-sm focus:outline-none focus:ring-2 focus:ring-teal-500 border border-gray-300 sm:w-[90%] lg:w-full"
            />
            <button
              type="submit"
              className="absolute inset-y-0 right-0 flex items-center pr-3"
            >
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
        </div>
        {/* Cart and User Icons */}
        <div className="flex items-center">
          <button className="ml-4 text-gray-700 hover:text-mainCyan p-2 rounded-md">
            <FaCartPlus className="h-5 w-5 md:h-6 md:w-6 lg:h-7 lg:w-7" />
          </button>
          <button className="ml-4 text-gray-700 hover:text-mainCyan p-2 rounded-md">
            <FaUser className="h-4 w-4 md:h-5 md:w-5 lg:h-6 lg:w-6" />
          </button>
          <button
            className="ml-4 text-gray-700 hover:text-mainCyan p-2 rounded-md sm:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <FaBars className="h-5 w-5" />
          </button>
        </div>
      </div>
      
      {/* Mobile Menu */}
      <div
        className={`fixed top-0 right-0 h-full bg-white shadow-lg transform transition-transform duration-300 ease-in-out ${
          isMenuOpen ? "translate-x-0" : "translate-x-full"
        } w-2/3 sm:hidden z-50`}
      >
        <div className="flex justify-between items-center p-4">
          <h2 className="text-lg font-semibold">Menu</h2>
          <button
            className="text-gray-700 hover:text-mainCyan p-2 rounded-md"
            onClick={() => setIsMenuOpen(false)}
          >
            <FaTimes className="h-5 w-5" />
          </button>
        </div>
        <div className="relative text-gray-600 p-4">
          <input
            type="search"
            name="search"
            placeholder="Search"
            className="bg-white h-10 px-5 pr-10 rounded-full text-sm focus:outline-none focus:ring-2 focus:ring-teal-500 border border-gray-300 w-full"
          />
          <button
            type="submit"
            className="absolute inset-y-0 right-0 flex items-center pr-3"
          >
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

        <nav className="mt-4 p-4">
          <ul className="flex flex-col space-y-4">
            <li>
              <NavLink
                to="/"
                className={(e) =>
                  e.isActive ? `${navLinkStyle} ${activeStyle}` : navLinkStyle
                }
                onClick={() => setIsMenuOpen(false)}
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/about"
                className={(e) =>
                  e.isActive ? `${navLinkStyle} ${activeStyle}` : navLinkStyle
                }
                onClick={() => setIsMenuOpen(false)}
              >
                About
              </NavLink>
            </li>
            <li className="relative group">
              <CategoriesDropDown />
            </li>
            <li>
              <NavLink
                to="/shop"
                className={(e) =>
                  e.isActive ? `${navLinkStyle} ${activeStyle}` : navLinkStyle
                }
                onClick={() => setIsMenuOpen(false)}
              >
                Shop
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/contact"
                className={(e) =>
                  e.isActive ? `${navLinkStyle} ${activeStyle}` : navLinkStyle
                }
                onClick={() => setIsMenuOpen(false)}
              >
                Contact
              </NavLink>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;
