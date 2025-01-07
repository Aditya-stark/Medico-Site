import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faStar,
  faStarHalfAlt,
  faShoppingCart,
  faDollarSign,
} from "@fortawesome/free-solid-svg-icons";

export default function DiscountProductCard({
  image,
  title,
  rating,
  price,
  discount,
}) {
  // Calculate the number of full, half, and empty stars based on the rating
  const fullStars = Math.floor(rating);
  const halfStar = rating % 1 !== 0;
  const emptyStars = 5 - fullStars - (halfStar ? 1 : 0);

  return (
    <div className="card bg-white rounded-lg shadow-lg p-4 relative overflow-hidden transform transition-transform duration-300 hover:scale-105 hover:shadow-2xl cursor-pointer">
      {/* Discount Badge */}
      <div className="absolute top-2 right-2 bg-red-500 text-white text-[10px] sm:text-xs md:text-sm font-bold px-1.5 sm:px-2 py-0.5 sm:py-1 rounded-full">
        {discount}
      </div>

      {/* Product Image */}
      <div className="flex justify-center items-center h-48">
        <img
          src={image}
          alt="Product"
          className="block w-full h-full object-contain"
        />
      </div>

      {/* Product All Details */}
      <div className="mt-2 sm:mt-3 md:mt-4">
        <h3 className="text-gray-800 font-bold overflow-hidden text-ellipsis text-sm md:text-lg">
          {title}
        </h3>
        <div className="flex items-center mt-2 text-xs md:text-sm">
          <div className="text-orange-400 flex space-x-1">
            {[...Array(fullStars)].map((_, index) => (
              <FontAwesomeIcon key={index} icon={faStar} />
            ))}
            {halfStar && <FontAwesomeIcon icon={faStarHalfAlt} />}
            {[...Array(emptyStars)].map((_, index) => (
              <FontAwesomeIcon
                key={index}
                icon={faStar}
                className="text-gray-300"
              />
            ))}
          </div>
          <span className="ml-2 text-gray-500 text-sm">{rating}</span>
        </div>
        <p className="text-teal-600 text-base sm:text-lg md:text-xl font-semibold mt-1 sm:mt-2">
          {price}
        </p>
        {/* Cart and Buy Now Buttons */}
        <div className="absolute bottom-2 right-2 md:bottom-4 md:right-4 flex space-x-2">
          <button className="w-6 h-6 md:w-8 md:h-8 bg-orange-500 text-white rounded-full shadow-md hover:bg-yellow-600 transform transition-transform duration-300 hover:scale-110">
            <FontAwesomeIcon icon={faDollarSign} />
          </button>
          <button className="w-6 h-6 md:w-8 md:h-8 bg-teal-500 text-white rounded-full shadow-md hover:bg-teal-600 transform transition-transform duration-300 hover:scale-110">
            <FontAwesomeIcon icon={faShoppingCart} />
          </button>
        </div>
      </div>
    </div>
  );
}
