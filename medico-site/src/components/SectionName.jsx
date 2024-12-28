import React from "react";

function SectionName({ title, link, className }) {
  return (
    <div
      className={`flex justify-between items-center mb-5 ${className || ""}`}
    >
      <p className="text:[10px] tablet:text-xl  md:text-2xl font-semibold text-gray-800 relative">
        <span className="before:absolute before:left-0 before:bottom-0 before:w-4 before:h-1 before:bg-teal-500 before:rounded-sm">
          {title}
        </span>
      </p>
      <a
        href={link}
        className="text-teal-500 text-sm font-medium flex items-center hover:underline"
      >
        View More
        <span className="ml-1">»</span>
      </a>
    </div>
  );
}

export default SectionName;
