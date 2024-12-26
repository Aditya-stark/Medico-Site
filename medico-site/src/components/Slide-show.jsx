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
    <Carousel loop={true} autoplay={true} autoplayDelay={3000}>
      {/* Slide 1 */}
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
          <button className="bg-blue-500 text-white py-3 px-6 rounded-full text-lg transform transition-transform duration-300 hover:scale-110 hover:bg-blue-600">
            Browse Now
          </button>
        </div>
        <img
          src={slideShowModel1}
          alt="Medical Supplies"
          className="w-2/3 md:w-1/3 ml-8 self-end"
        />
      </div>
      {/* Slide 2 */}
      <div className="h-full w-full flex items-center justify-center bg-gradient-to-r from-light-blue-300 to-yellow-200">
        <div className="text-left p-8 w-full md:w-1/2">
          <div className="relative inline-block bg-teal-500 text-white font-bold text-sm py-2 px-4 mb-4 uppercase rounded-md">
            EASY HEALTH CARE
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Explore our Wide Range of Orthopaedic Products
          </h1>
          <p className="text-lg md:text-xl mb-6">
            Empowering Mobility, Enhancing Lives Precision Engineering for
            Perfect Orthopedic Care Your Path t..
          </p>
          <button className="bg-blue-500 text-white py-3 px-6 rounded-full text-lg transform transition-transform duration-300 hover:scale-110 hover:bg-blue-600">
            {" "}
            Browse Now
          </button>
        </div>
        <div className="sub-images h-fit w-auto flex flex-col items-center justify-center gap-4">
          <img
            src={slideShowSub1}
            alt="slideShowSub1"
            className="rounded-full h-24 w-24 md:h-32 md:w-32 shadow-2xl border-red-100 object-cover transform transition-transform duration-300 hover:scale-110"
          />
          <img
            src={slideShowSub2}
            alt="slideShowSub2"
            className="rounded-full h-24 w-24 md:h-32 md:w-32 shadow-2xl border-red-100 object-cover transform transition-transform duration-300 hover:scale-110"
          />
          <img
            src={slideShowSub3}
            alt="slideShowSub3"
            className="rounded-full h-24 w-24 md:h-32 md:w-32 shadow-2xl border-red-100 object-cover transform transition-transform duration-300 hover:scale-110"
          />
        </div>
        <img
          src={slideShowModel2}
          alt="Orthopaedic Products"
          className="h-[100%] w-auto ml-8 self-end"
        />
      </div>
      {/* Slide 3 */}
      <div className="h-full w-full flex items-center justify-center bg-[#e3faf9] relative">
        {/* Add content here if needed */}
        <div className="absolute inset-0 self-end ">
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
          <div className="relative inline-block bg-teal-500 text-white font-bold text-sm py-2 px-4 mb-4 uppercase rounded-md">
            EASY HEALTH CARE
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Your health is our priority
          </h1>
          <p className="text-lg md:text-xl mb-6">
            We provide bulk orders with the best prices in the market for
            products that suit all your needs.
          </p>
          <button className="bg-blue-500 text-white py-3 px-6 rounded-full text-lg transform transition-transform duration-300 hover:scale-110 hover:bg-blue-600">
            Browse Now
          </button>
        </div>
        <img
          src={slideShowMedi3}
          alt="Medical Supplies"
          className="w-2/3 md:w-1/3 ml-8 self-end z-10"
        />
      </div>
    </Carousel>
  );
}
