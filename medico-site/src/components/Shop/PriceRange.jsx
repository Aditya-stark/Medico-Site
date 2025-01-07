import { s } from "framer-motion/client";
import React, { useState } from "react";
import ReactSlider from "react-slider";

const PriceRangeSlider = ({ min = 10, max = 100000, onPriceChange }) => {
  const [values, setValues] = useState([10  , 50000]);

  const handleChange = (newValues) => {
    setValues(newValues);
    if (onPriceChange) onPriceChange(newValues);
  };

  return (
    <div className="p-4 bg-white shadow rounded-lg">
      <h3 className="font-semibold mb-4 text-gray-800">Price Range</h3>
      <div className="text-teal-500 mb-4">
        ₹{values[0]} - ₹{values[1]}
      </div>
      <ReactSlider
        className="w-full h-2 bg-gray-900 rounded-full "
        thumbClassName="h-4 w-4 bg-teal-500 rounded-full cursor-pointer"
        renderTrack={(props, state) => (
          <div
            {...props}
            className={`h-2 ${
              state.index === 1 ? "bg-mainCyan" : "bg-gray-200"
            } rounded-full ` }
          />
        )}
        min={min}
        max={max}
        value={values}
        onChange={handleChange}
        pearling
        minDistance={10}
      />
    </div>
  );
};

export default PriceRangeSlider;
