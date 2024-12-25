import React from "react";
import medicineIcon from "../assets/images/CategoriesLogo/medicine.svg";

function Categories_card() {
    return (
        <>
            <div className="flex flex-col items-center bg-white shadow-md rounded-3xl p-4 w-48 h-60 border-2 border-transparent hover:border-teal-500 transition-colors duration-300 hover:shadow-2xl">
                {/* Icon Container */}
                <div className="flex items-center justify-center w-20 h-20 bg-teal-500 rounded-full relative">
                    <img
                        src={medicineIcon}
                        alt="Medicine Icon"
                        className="w-12 h-12 transition-transform duration-300 ease-in-out transform hover:scale-110"
                    />
                </div>

                {/* Title */}
                <h3 className="text-lg font-semibold text-gray-800 mt-4">Medicine</h3>

                {/* Items Count */}
                <p className="text-teal-500 text-sm font-medium mt-1">30 Items</p>
            </div>
        </>
    );
}

export default Categories_card;
