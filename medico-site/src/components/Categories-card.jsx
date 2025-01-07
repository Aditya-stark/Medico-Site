import React from "react";

function Categories_card({ name, itemsCount, icon }) {
  return (
    <>
      <div className="flex flex-col items-center justify-center bg-white shadow rounded-3xl p-2 w-36 h-64 border-2 border-transparent md:border-mainCyan md:border-opacity-20 hover:border-teal-500 transition-colors duration-300 hover:shadow-2xl mx-auto md:h-[300px] md:w-[192px]">
        {/* Icon Container */}
        <div className="flex items-center justify-center w-fit p-5 bg-gray-200 rounded-full relative">
          <img
            src={icon}
            alt="Medicine Icon"
            className="w-16 h-16 transition-transform duration-300 ease-in-out transform hover:scale-110 md:w-18 md:h-18"
          />
        </div>

        {/* Title */}
        <h3 className="text-sm font-semibold text-gray-800 mt-2 mdPhone:text-md md:text-lg">
          {name}
        </h3>

        {/* Items Count */}
        <p className="text-teal-500 text-xs font-medium mt-1 sm:text-sm mdPhone:text-sm">
          {itemsCount} Items
        </p>
      </div>
    </>
  );
}

export default Categories_card;
