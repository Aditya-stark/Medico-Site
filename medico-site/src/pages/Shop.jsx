import React from "react";
import PageTitle from "../components/PageTitle";
import Dropdown from "../components/Shop/Dropdown";
import PriceRange from "../components/Shop/PriceRange";
import SortDropDown from "../components/Shop/SortDropDown";
import ResetBtn from "../components/Shop/ResetBtn";
import popularProducts from "../assets/images/PopularProducts";
import ShopProductCard from "../components/Shop/ShopProductCard";
import { b } from "framer-motion/client";
import { badge } from "@material-tailwind/react";

export default function Shop() {
  //Dummy Data
  const popularProductsData = [
    {
      image: popularProducts.image1,
      title: "True Balance Vitamin",
      rating: 4.5,
      price: "₹250.0",
      badge: "Hot",
      badgeColor: "bg-orange-500",
      categories: ["Vitamins", "Supplements"],
      brands: ["Brand 1"],
    },
    {
      image: popularProducts.image2,
      title: "Body Lotion 200ml",
      rating: 4,
      price: "₹150.0",
      badge: "New",
      badgeColor: "bg-green-500",
      categories: ["Skin Care", "Body Care"],
      brands: ["Brand 2"],
    },
    {
      image: popularProducts.image3,
      title: "Face Mask",
      rating: 4.5,
      price: "₹50.0",
      badge: "Trending",
      badgeColor: "bg-[#579f97]",
      categories: ["Skin Care", "Face Care"],
      brands: ["Brand 3"],
    },
    {
      image: popularProducts.image4,
      title: "Vitamin B12",
      rating: 4.5,
      price: "₹2000.0",
      badge: "Out of Stock",
      badgeColor: "bg-red-500",
      categories: ["Vitamins", "Supplements"],
      brands: ["Brand 1"],
    },
    {
      image: popularProducts.image5,
      title: "Vitamin C",
      rating: 3,
      price: "₹250.0",
      badge: "10% OFF",
      badgeColor: "bg-orange-500",
      categories: ["Vitamins", "Supplements"],
      brands: ["Brand 2"],
    },
    {
      image: popularProducts.image6,
      title: "Vitamin D3",
      rating: 4.5,
      price: "₹250.0",
      badge: "10% OFF",
      categories: ["Vitamins", "Supplements"],
      brands: ["Brand 4"],
    },
    {
      image: popularProducts.image5,
      title: "Vitamin C",
      rating: 3,
      price: "₹250.0",
      badge: "10% OFF",
      badgeColor: "bg-orange-500",
      categories: ["Vitamins", "Supplements"],
      brands: ["Brand 2"],
    },
    {
      image: popularProducts.image4,
      title: "Vitamin B12",
      rating: 4.5,
      price: "₹2000.0",
      badge: "New",
      badgeColor: "bg-orange-500",
      categories: ["Vitamins", "Supplements"],
      brands: ["Brand 1"],
    },
    {
      image: popularProducts.image1,
      title: "True Balance Vitamin",
      rating: 4.5,
      price: "₹250.0",
      badge: "Out of Stock",
      badgeColor: "bg-red-500",
      categories: ["Vitamins", "Supplements"],
      brands: ["Brand 5"],
    },
    {
      image: popularProducts.image2,
      title: "Body Lotion 200ml",
      rating: 4,
      price: "₹150.0",
      badge: "" || null,
      badgeColor: "",
      categories: ["Skin Care", "Body Care"],
      brands: ["Brand 6"],
    },
  ];

  return (
    <div className="overflow-x-hidden">
      {/* Head Title */}
      <PageTitle title="Shop" />

      {/* Shop Page */}
      <div className="flex flex-col md:flex-row gap-4 bg-[#f6f7fa]">
        {/*Left Section with reset button, Price Range, Categories DropDown and Brand DropDown */}
        <div className="flex flex-col gap-4 md:w-1/4 px-4 ">
          <div className="flex justify-between items-center gap-4 w-full rounded-lg bg-white p-4 mt-10 shadow">
            <p className="text-2xl font-bold text-gray-800">Filters</p>
            <ResetBtn />
          </div>

          <PriceRange />
          <div className=" items-center w-full bg-white rounded-lg p-4 shadow">
            <p className="text-lg font-bold text-gray-800 mb-2">
              Filter by Category
            </p>
            <Dropdown title="Select Categories" />
          </div>

          <div className=" items-center w-full bg-white rounded-lg p-4 shadow">
            <p className="text-lg font-bold text-gray-800 mb-2">
              Filter by Category
            </p>
            <Dropdown
              title="Select Brands"
              options={[
                "Brand 1",
                "Brand 2",
                "Brand 3",
                "Brand 4",
                "Brand 5",
                "Brand 6",
              ]}
            />
          </div>
        </div>

        {/* Right Section with Total items Found, Sort DropDown and Products */}
        <div className="flex flex-col md:w-3/4 px-4 mb-6">
          {/* upper bar */}
          <div className=" md:flex md:flex-row md:justify-start rounded-lg bg-white p-4 mt-10 shadow gap-4 ">
            <div className="flex items-center md:gap-4">
              <p className="text-[12px] pr-2 md:text-xl md:pr-0 text-gray-500">
                Sort By:
              </p>
              <SortDropDown />
            </div>
            <p className="mt-2 md:flex md:mt-0 self-center text-sm  md:text-xl text-gray-600">
              Total Items Found: 100
            </p>
          </div>

          {/* Products */}
          <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 mt-4">
            {/* Product Card */}
            {popularProductsData.map((product, index) => (
              <ShopProductCard key={index} {...product} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
