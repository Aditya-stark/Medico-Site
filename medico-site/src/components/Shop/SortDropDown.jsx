import React from "react";
import PropTypes from "prop-types";

export default function SortDropDown({ onSort  }) {
  const options = [
    { value: "default", label: "Default" },
    { value: "lowToHigh", label: "Low to High" },
    { value: "highToLow", label: "High to Low" },
  ];

  const handleSortChange = (event) => {
    onSort(event.target.value);
  };

  return (
    <div className="relative inline-block text-left">
      <label htmlFor="sort-dropdown" className="sr-only">
        Sort by
      </label>
      <select
        id="sort-dropdown"
        className="bg-white text-gray-600  font-semibold py-1 px-1 md:py-2 md:px-4 text-sm md:text-base rounded-md focus:outline-none focus:ring-2 focus:ring-mainCyan transition-all duration-300 border-gray-300 border-2"
        onChange={handleSortChange}
        defaultValue="default"
      >
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </div>
  );
}

SortDropDown.propTypes = {
  onSort: PropTypes.func.isRequired,
};
