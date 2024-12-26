import React, { useState } from "react";
import client1 from "../assets/images/ClientsImage/fortis.webp";
import client2 from "../assets/images/ClientsImage/GOI.webp";
import client3 from "../assets/images/ClientsImage/Himsr.webp";
import client4 from "../assets/images/ClientsImage/Max.webp";
import client5 from "../assets/images/ClientsImage/jaypee.webp";
import client6 from "../assets/images/ClientsImage/Sarvodaya-Hospital.webp";
import client7 from "../assets/images/ClientsImage/trsh.webp";

export default function ImageSlider() {
  const [isPaused, setIsPaused] = useState(false);

  const images = [
    { src: client1, alt: "Fortis Hospital" },
    { src: client2, alt: "Government of India" },
    { src: client3, alt: "HIMSR" },
    { src: client4, alt: "Max Healthcare" },
    { src: client5, alt: "Jaypee Hospital" },
    { src: client6, alt: "Sarvodaya Hospital" },
    { src: client7, alt: "TRSH" },
  ];

  return (
    <div
      className="relative overflow-hidden w-full bg-white py-10"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      <div className={`flex gap-4 ${isPaused ? "" : "animate-slide"}`}>
        {images.concat(images).map((image, index) => (
          <div
            key={index}
            className="flex-none w-64 h-40 transform transition-transform duration-300 hover:scale-110"
          >
            <img
              src={image.src}
              alt={image.alt}
              className="w-full h-full object-cover rounded-lg shadow-md"
            />
          </div>
        ))}
      </div>
    </div>
  );
}
