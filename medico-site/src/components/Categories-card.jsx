import React from "react";
import medicineIcon from "../assets/images/CategoriesLogo/medicine.svg";

function Categories_card() {
  return (
    <>
      <div className="flex flex-col items-center justify-center bg-white shadow-md rounded-3xl p-2 w-24 h-32 sm:w-28 sm:h-36 border-2 border-transparent hover:border-teal-500 transition-colors duration-300 hover:shadow-2xl mx-auto mdPhone:w-36 mdPhone:h-48 md:h-[240px] md:w-[192px]">
        {/* Icon Container */}
        <div className="flex items-center justify-center w-10 h-10 sm:w-12 sm:h-12 bg-teal-500 rounded-full relative mdPhone:w-16 mdPhone:h-16 md:w-20 md:h-20">
          <img
            src={medicineIcon}
            alt="Medicine Icon"
            className="w-6 h-6 sm:w-8 sm:h-8 transition-transform duration-300 ease-in-out transform hover:scale-110 mdPhone:w-10 mdPhone:h-10 md:w-12 md:h-12"
          />
        </div>

        {/* Title */}
        <h3 className="text-xs sm:text-sm font-semibold text-gray-800 mt-2 mdPhone:text-md md:text-lg">
          Medicine
        </h3>

        {/* Items Count */}
        <p className="text-teal-500 text-xs font-medium mt-1 sm:text-sm mdPhone:text-sm">
          30 Items
        </p>
      </div>
    </>
  );
}

export default Categories_card;
