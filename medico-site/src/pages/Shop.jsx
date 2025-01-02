import React from "react";
import PageTitle from "../components/PageTitle";
import Dropdown from "../components/Shop/Dropdown";
import PriceRange from "../components/Shop/PriceRange";
import SortDropDown from "../components/Shop/SortDropDown";
import ResetBtn from "../components/Shop/ResetBtn";

export default function Shop() {
  return (
    <div className="overflow-x-hidden">
      {/* Head Title */}
      <PageTitle title="Shop" />

      {/* Shop Page */}
      <div className="flex flex-col md:flex-row gap-4 h-screen bg-[#f6f7fa]">
        {/*Left Section with reset button, Price Range, Categories DropDown and Brand DropDown */}
        <div className="flex flex-col gap-4 md:w-1/4 px-4 ">
          <div className="flex justify-between items-center gap-4 w-full rounded-lg bg-white p-4 mt-10">
            <p className="text-2xl font-bold text-gray-800">Filters</p>
            <ResetBtn />
          </div>

          <PriceRange />
          <div className=" items-center w-full bg-white rounded-lg p-4">
            <p className="text-lg font-bold text-gray-800 mb-2">
              Filter by Category
            </p>
            <Dropdown title="Select Categories" />
          </div>

          <div className=" items-center w-full bg-white rounded-lg p-4">
            <p className="text-lg font-bold text-gray-800 mb-2">
              Filter by Category
            </p>
            <Dropdown title="Select Brands" />
          </div>
        </div>
      </div>
    </div>
  );
}
