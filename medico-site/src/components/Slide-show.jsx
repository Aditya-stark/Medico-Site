import { Carousel } from "@material-tailwind/react";
import React from "react";
import slideShowModel1 from "../assets/images/slide-show-model-1.png";
import slideShowModel2 from "../assets/images/slide-show-model-2.png";
import slideShowSub1 from "../assets/images/slide-show-2-sub-1.jpg";
import slideShowSub2 from "../assets/images/slide-show-2-sub-2.jpg";
import slideShowSub3 from "../assets/images/slide-show-2-sub-3.webp";
import slideShowMedi3 from "../assets/images/slide-show-medi.png";

export function SlideShow() {
  return (
    <Carousel
      loop={true}
      autoplay={true}
      autoplayDelay={3000}
      className="h-[110vh] md:h-[600px] w-full overflow-hidden"
    >
      {/* Slide 1 */}
      <div className="h-full w-full flex flex-col md:flex-row items-center justify-center bg-gradient-to-r from-green-200 to-blue-200">
        <div className="text-left p-8 w-full md:w-1/2">
          <div className="relative inline-block bg-teal-500 text-white font-bold uppercase rounded-md text-xs py-1 px-2 md:text-sm md:py-2 md:px-4 md:mb-4">
            EASY HEALTH CARE
          </div>
          <h1 className="text-4xl py-3 font-extrabold md:font-bold md:mb-6 md:text-5xl">
            Explore our wide Range of Medical Supplies
          </h1>
          <p className="mb-3 md:text-xl md:mb-6">
            We provide bulk orders with the best prices in the market for
            products that suit all your needs.
          </p>
          <button className="bg-blue-500 text-white py-1 px-2 rounded-md transform transition-transform duration-300 hover:scale-110 hover:bg-blue-600 md:py-3 md:px-6 md:rounded-full md:text-lg">
            Browse Now
          </button>
        </div>
        <img
          src={slideShowModel1}
          alt="Medical Supplies"
          className="h-[300px] flex items justify-center self-end md:h-[90%] md:w-auto md:ml-8 md:self-end"
        />
      </div>
      {/* Slide 2 */}
      <div className="h-full w-full flex flex-col md:flex-row items-center justify-center bg-gradient-to-r from-light-blue-300 to-yellow-200">
        <div className="text-left px-8 pt-8 w-full md:w-1/2">
          <div className="relative inline-block bg-teal-500 text-white font-bold uppercase rounded-md text-xs py-1 px-2 md:text-sm md:py-2 md:px-4 md:mb-4">
            EASY HEALTH CARE
          </div>
          <h1 className="text-4xl py-3 font-extrabold md:font-bold md:mb-6 md:text-5xl">
            Explore our Wide Range of Orthopaedic Products
          </h1>
          <button className="bg-blue-500 text-white py-1 px-2 rounded-md transform transition-transform duration-300 hover:scale-110 hover:bg-blue-600 md:py-3 md:px-6 md:rounded-full md:text-lg">
            Browse Now
          </button>
        </div>
        <div className="sub-images flex flex-row gap-1 p-3 justify-center h-fit w-auto md:flex-col items-center md:gap-4">
          <img
            src={slideShowSub1}
            alt="slideShowSub1"
            className="rounded-full h-16 object-cover md:h-32 md:w-32 shadow-2xl transform transition-transform duration-300 hover:scale-110"
          />
          <img
            src={slideShowSub2}
            alt="slideShowSub2"
            className="rounded-full h-16 object-cover md:h-32 md:w-32 shadow-2xl transform transition-transform duration-300 hover:scale-110"
          />
          <img
            src={slideShowSub3}
            alt="slideShowSub3"
            className="rounded-full h-16 object-cover md:h-32 md:w-32 shadow-2xl transform transition-transform duration-300 hover:scale-110"
          />
        </div>
        <img
          src={slideShowModel2}
          alt="Orthopaedic Products"
          className="h-80 flex transform justify-center bottom-0 md:h-[90%] md:w-auto md:ml-8 md:self-end"
        />
      </div>
      {/* Slide 3 */}
      <div className="h-full w-full flex flex-col md:flex-row items-center justify-center bg-gradient-to-r bg-[#e3faf9] relative">
        <div className="absolute inset-0 self-end">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1440 320"
            className="w-full h-full"
          >
            <defs>
              <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop
                  offset="0%"
                  style={{ stopColor: "#34d399", stopOpacity: 1 }}
                />
                <stop
                  offset="100%"
                  style={{ stopColor: "#509488", stopOpacity: 1 }}
                />
              </linearGradient>
            </defs>
            <path
              fill="url(#gradient)"
              fill-opacity="1"
              d="M0,224L40,213.3C80,203,160,181,240,186.7C320,192,400,224,480,202.7C560,181,640,107,720,74.7C800,43,880,53,960,74.7C1040,96,1120,128,1200,122.7C1280,117,1360,75,1400,53.3L1440,32L1440,320L1400,320C1360,320,1280,320,1200,320C1120,320,1040,320,960,320C880,320,800,320,720,320C640,320,560,320,480,320C400,320,320,320,240,320C160,320,80,320,40,320L0,320Z"
            ></path>
          </svg>
        </div>
        <div className="text-left p-8 w-full md:w-1/2 relative z-10">
          <div className="relative inline-block bg-teal-500 text-white font-bold uppercase rounded-md text-xs py-1 px-2 md:text-sm md:py-2 md:px-4 md:mb-4">
            EASY HEALTH CARE
          </div>
          <h1 className="text-4xl py-3 font-extrabold md:font-bold md:mb-6 md:text-5xl">
            Your health is our priority
          </h1>
          <p className="text-lg md:text-xl mb-6">
            We provide bulk orders with the best prices in the market for
            products that suit all your needs.
          </p>
          <button className="bg-blue-500 text-white py-1 px-2 rounded-md transform transition-transform duration-300 hover:scale-110 hover:bg-blue-600 md:py-3 md:px-6 md:rounded-full md:text-lg">
            Browse Now
          </button>
        </div>
        <img
          src={slideShowMedi3}
          alt="Medical Supplies"
          className="h-72 md:h-auto md:w-1/3 md:ml-8 self-end z-10"
        />
      </div>
    </Carousel>
  );
}
