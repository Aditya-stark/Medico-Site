import React from "react";
import BigbannerImage from "../assets/images/big-banner.jpg";

// Bigbanner component
export const Bigbanner = () => {
  return (
    <div
      className="relative w-full my-20 h-80 max-h-80 rounded-xl bg-cover bg-center"
      style={{
        backgroundImage: `url(${BigbannerImage})`,
      }}
    >
      <div className="absolute inset-0 flex flex-col items-center justify-center text-[#1b324d]">
        <div className="text-center">
          <p className="text-xl md:text-2xl mb-2 tracking-wider">mega collections</p>
          <h2 className="text-xl md:text-4xl font-bold mb-4 leading-tight">HUGE SALE UP TO 40% OFF</h2>
          <p className="text-lg md:text-xl mb-6">at our outlet stores</p>

          <button className="relative overflow-hidden bg-teal-500 text-white font-bold py-3 px-8 rounded-full text-lg group">
            <span className="relative z-10">Shop Now →</span>
            <div className="absolute inset-0 h-full w-full bg-[#e2736f] transform scale-0 transition-transform duration-300 ease-in-out rounded-full group-hover:scale-150"></div>
          </button>
        </div>
      </div>
    </div>
  );
};
