import React from "react";
import image1 from "../assets/images/ClientsImage/fortis.webp";
import image2 from "../assets/images/ClientsImage/GOI.webp";
import image3 from "../assets/images/clientsImage/Himsr.webp";
import image4 from "../assets/images/clientsImage/jaypee.webp";
import image5 from "../assets/images/clientsImage/Max.webp";
import image6 from "../assets/images/clientsImage/Sarvodaya-Hospital.webp";
import image7 from "../assets/images/clientsImage/trsh.webp";

const images = [image1, image2, image3, image4, image5, image6, image7];

export function InfiniteImageSlider() {
  return (
    <div className="flex overflow-hidden whitespace-nowrap mb-[10em]">
      {images.map((image, index) => (
        <div
          key={index}
          className="inline-block p-[.3em] rounded-lg transition-transform duration-300 hover:scale-110"
        >
          <img
            src={image}
            alt={`Slide ${index + 1}`}
            className="w-64 h-48 object-cover"
          />
        </div>
      ))}
    </div>
  );
}
