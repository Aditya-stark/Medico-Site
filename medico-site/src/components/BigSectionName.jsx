import React from "react";

export default function BigSectionName({ title, className }) {
  return (
    <div
      className={`big-section-name ${className}`}
      style={{ textAlign: "center", fontWeight: "bold", fontSize: "2em" }}
    >
      <p className="text-[#1b324d] ">{title}</p>
    </div>
  );
}
