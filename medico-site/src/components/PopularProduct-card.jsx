import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faStar,
  faStarHalfAlt,
  faShoppingCart,
  faDollarSign,
} from "@fortawesome/free-solid-svg-icons";

export default function PopularProductCard({
  image,
  title,
  rating,
  price,
  offer,
}) {
  const fullStars = Math.floor(rating);
  const halfStar = rating % 1 !== 0;
  const emptyStars = 5 - fullStars - (halfStar ? 1 : 0);

  return (
    <div className="card bg-white rounded-lg shadow-lg p-4 relative overflow-hidden transform transition-transform duration-300 hover:scale-105 hover:shadow-2xl">
      {/* HOT Badge */}
      <div className="absolute top-2 right-2 bg-orange-400 text-white text-xs font-bold px-2 py-1 rounded-full">
        {offer}
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
      <div className="mt-4">
        <h3 className="text-gray-800 text-lg font-bold overflow-hidden text-ellipsis">
          {title}
        </h3>
        <div className="flex items-center mt-2 text-sm">
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
        <p className="text-teal-600 text-xl font-semibold mt-2">{price}</p>
        {/* Cart Button */}
        <div className="absolute bottom-4 right-4 flex space-x-2">
          <button className="w-10 h-10 bg-orange-500 text-white rounded-full shadow-md hover:bg-yellow-600 transform transition-transform duration-300 hover:scale-110">
            <FontAwesomeIcon icon={faDollarSign} />
          </button>
          <button className="w-10 h-10 bg-teal-500 text-white rounded-full shadow-md hover:bg-teal-600 transform transition-transform duration-300 hover:scale-110">
            <FontAwesomeIcon icon={faShoppingCart} />
          </button>
        </div>
      </div>
    </div>
  );
}
