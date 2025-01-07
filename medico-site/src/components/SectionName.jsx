import React from "react";
import { Link } from "react-router-dom";

function SectionName({ title, link, className }) {
  return (
    <div
      className={`flex justify-between items-center mb-5 ${className || ""}`}
    >
      <p className="text:[12px] tablet:text-xl  md:text-2xl font-semibold text-gray-800 relative">
        <span className="before:absolute before:left-0 before:bottom-0 before:w-4 before:h-1 before:bg-teal-500 before:rounded-sm">
          {title}
        </span>
      </p>
      <Link to={link} className="text-teal-500 text-sm md:text-base">
        View More
        <span className="ml-1">»</span>
      </Link>
    </div>
  );
}

export default SectionName;
