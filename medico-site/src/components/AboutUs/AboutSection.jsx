import React from "react";
import AboutSectionImg1 from "../../assets/images/AboutUsImg/AboutSectionImg1.jpg";
import AboutSectionImg2 from "../../assets/images/AboutUsImg/AboutSectionImg2.jpg";
import dotGrid from "../../assets/images/AboutUsImg/dotGrid.png";
import checkMark from "../../assets/images/AboutUsImg/check-mark.svg";
import { Typography } from "@material-tailwind/react";

export default function AboutSection() {
  return (
    <div className="bg-white py-12 px-6 md:px-16">
      <div className="flex flex-col md:flex-row items-center">
        {/* Left Section - Images */}
        <div className="flex-1 h-full w-full flex justify-center">
          {/* First Image - Medical Products */}
          <div className="rounded-[5em] overflow-hidden">
            <img
              src={AboutSectionImg1} // Replace with actual image
              alt="Medical Products"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Second Section with Dot Grid and Smaller Doctor Image */}
          <div className="relative flex flex-col justify-center items-center">
            {/* Dot Grid - Positioned Above */}
            <img
              src={dotGrid} // Replace with actual image
              alt="Dot Grid"
              className="top-0 transform  w-[40%] h-auto"
            />

            {/* Doctor Image */}
            <img
              src={AboutSectionImg2} // Replace with actual image
              alt="Doctor"
              className="w-3/4 h- object-cover rounded-[5em] z-10"
            />
          </div>
        </div>

        {/* Right Section - Content */}
        <div className="flex-1 mt-8 md:mt-0 md:ml-8">
          <h3 className="text-lg font-semibold text-mainCyan mb-2">About Us</h3>
          <h2 className="text-3xl font-bold text-mainCyan leading-tight">
            We Provide Best And Original{" "}
            <span className="text-mainCyan">Medical</span> Product For You
          </h2>
          <p className="text-gray-600 mt-4">
            We are standard text ever since the when an unknown printer took a
            galley of type and scrambled it to make type but the majority have
            suffered alteration in some form by injected humour specimen book.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-6">
            <div className="flex items-center">
              <img src={checkMark} alt="Check Mark" className="w-6 h-6 mr-3" />
              <p className="text-gray-700">Streamlined Shipping Experience</p>
            </div>
            <div className="flex items-center">
              <img src={checkMark} alt="Check Mark" className="w-6 h-6 mr-3" />
              <p className="text-gray-700">Affordable Modern Design</p>
            </div>
            <div className="flex items-center">
              <img src={checkMark} alt="Check Mark" className="w-6 h-6 mr-3" />
              <p className="text-gray-700">Competitive Price & Easy To Shop</p>
            </div>
            <div className="flex items-center">
              <img src={checkMark} alt="Check Mark" className="w-6 h-6 mr-3" />
              <p className="text-gray-700">We Made Awesome Products</p>
            </div>
          </div>
          <button className="mt-8 px-6 py-3 bg-mainCyan text-white rounded-lg shadow hover:bg-green-500">
            Discover More →
          </button>
          <Typography color="mainCyan" className="font-medium" textGradient>
            CEO / Co-Founder
          </Typography>
        </div>
      </div>
    </div>
  );
}
