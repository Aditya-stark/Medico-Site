import { Carousel } from "@material-tailwind/react";
import React from "react";
import slideShowModel1 from "../assets/images/slide-show-model-1.png";

export function SlideShow() {
  return (
    <Carousel loop={true} autoplay={true} autoplayDelay={2000}>
      <div className="h-full w-full flex flex-col md:flex-row items-center justify-center bg-gradient-to-r from-green-200 to-blue-200">
        <div className="text-left p-8 w-full md:w-1/2">
          <div className="relative inline-block bg-teal-500 text-white font-bold text-sm py-2 px-4 mb-4 uppercase rounded-md">
            EASY HEALTH CARE
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Explore our wide Range of Medical Supplies
          </h1>
          <p className="text-lg md:text-xl mb-6">
            We provide bulk orders with the best prices in the market for
            products that suit all your needs.
          </p>
          <button className="bg-blue-500 text-white py-3 px-6 rounded-full text-lg">
            Browse Now
          </button>
        </div>
        <img
          src={slideShowModel1}
          alt="Medical Supplies"
          className="w-2/3 md:w-1/3 ml-8 self-end"
        />
      </div>
      <div className="h-full w-full flex items-center justify-center bg-gradient-to-r from-light-blue-300 to-yellow-200">
        {/* Add content here if needed */}
      </div>
      <div className="h-full w-full flex items-center justify-center bg-gradient-to-r from-orange-200 to-lime-300">
        {/* Add content here if needed */}
      </div>
    </Carousel>
  );
}
