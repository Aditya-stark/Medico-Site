import React from "react";
import headImg from "../assets/images/AboutUsImg/headImg.jpg";
import { Link } from "react-router-dom";

const PageTitle = ({ title }) => {
  return (
    <div
      className="head bg-cover bg-center h-[100%] md:h-[180px] flex items-center"
      style={{
        backgroundImage: `url(${headImg})`,
      }}
    >
      <div className="mx-2 p-4 text-[#13324e] space-y-2 font-bold text-xl md:text-3xl md:p-8 md:mx-14">
        <div>{title}</div>
        <div className="flex items-center text-sm md:text-base  text-gray-600">
          <Link to="/" className="hover:text-mainCyan text-[#13324e]">
            Home
          </Link>
          <span className="mx-2 text-[#13324e]">&gt;&gt;</span>
          <span className="text-mainCyan ">{title}</span>
        </div>
      </div>
    </div>
  );
};

export default PageTitle;
