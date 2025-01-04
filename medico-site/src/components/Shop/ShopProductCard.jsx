import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faStar,
  faStarHalfAlt,
  faShoppingCart,
  faDollarSign,
} from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";

export default function ShopProductCard({ product }) {
  const { image, title, rating, price, badge, badgeColor } = product;
  // Star Rating Calculation
  const fullStars = Math.floor(rating);
  const halfStar = rating % 1 !== 0;
  const emptyStars = 5 - fullStars - (halfStar ? 1 : 0);

  //Navigation to Single Product Page
  const navigate = useNavigate();
  const handleClick = () => {
    navigate(`/product/${product.id}`);
  };

  return (
    <div
      onClick={handleClick}
      className="card bg-white rounded-lg shadow-lg p-4 relative overflow-hidden transform transition-transform duration-300 hover:scale-105 hover:shadow-2xl cursor-pointer"
    >
      {/* HOT Badge */}
      {badge !== null && (
        <div
          className={`absolute top-2 right-2 ${badgeColor} text-white text-xs font-bold px-2 py-1 rounded-full`}
        >
          {badge}
        </div>
      )}

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
          <span className="ml-2 text-gray-500">{rating}</span>
        </div>
        <p className="text-teal-600 font-semibold mt-1 md:mt-2 text-base md:text-lg">
          {price}
        </p>
        {/* Cart Button */}
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
