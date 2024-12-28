import React from "react";
import headImg from "../assets/images/AboutUsImg/headImg.jpg";

export default function AboutUs() {
  return (
    <div>
      <div
        className="head bg-cover bg-center h-[100%] md:h-[200px] flex items-center "
        style={{
          backgroundImage: `url(${headImg})`,
        }}
      >
        <div className="about-us-text mx-2 p-4 text-[#13324e] font-bold text-xl md:text-3xl md:p-8 md:mx-14">
          About Us
        </div>
      </div>
    </div>
  );
}
