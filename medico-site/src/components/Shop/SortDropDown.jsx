import React from "react";
import PropTypes from "prop-types";

export default function SortDropDown({ onSort }) {
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
        className="bg-white text-gray-800 font-semibold py-2 px-4 rounded-md focus:outline-none focus:ring-2 focus:ring-mainCyan transition-all duration-300"
        onChange={handleSortChange}
        defaultValue="default"
      >
        {options.map((option) => (
          <option key={option.value} value={option.value} >
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
