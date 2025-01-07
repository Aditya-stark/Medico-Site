import { useState, useEffect, useRef } from "react";
import { FaAngleDown } from "react-icons/fa";

// Dropdown component
export default function Dropdown({ title, options }) {
  // State for open/closed dropdown and selected options
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOptions, setSelectedOptions] = useState([]);
  const dropdownRef = useRef(null);

  // Default options if none are provided (Dammy Data)
  if (options === undefined) {
    options = ["Option 1", "Option 2", "Option 3", "Option 4", "Option 5"];
  }

  // Click outside handler to close the dropdown
  useEffect(() => {
    function handleClickOutside(event) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [dropdownRef]);

  // Handle Dropdown option click
  const handleOptionClick = (option) => {
    setSelectedOptions((prevOptions) =>
      prevOptions.includes(option)
        ? prevOptions.filter((item) => item !== option)
        : [...prevOptions, option]
    );
  };

  return (
    <div className="relative w-full inline-block text-center" ref={dropdownRef}>
      <button
        className="bg-white text-gray-700 font-semibold py-2 px-6 w-full  rounded-lg border-gray-300 border-2 focus:outline-none focus:ring-2 focus:ring-mainCyan transition-all duration-300 inline-flex justify-between items-center"
        onClick={() => setIsOpen(!isOpen)}
      >
        {selectedOptions.length > 0
          ? `${selectedOptions.length} Selected`
          : title
          ? title
          : "Select an Option   "}
        <FaAngleDown className="ml-2" />
      </button>
      {isOpen && (
        <ul className="absolute z-10 mt-1 w-full max-h-40 py-1 bg-white border rounded-lg shadow-lg overflow-y-auto">
          {options.map((option, index) => (
            <li
              key={index}
              className="px-4 py-2 text-gray-800 hover:bg-gray-300 flex items-center"
              onClick={() => handleOptionClick(option)}
            >
              <input
                type="checkbox"
                checked={selectedOptions.includes(option)}
                readOnly
                className="mr-2"
              />
              {option}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
