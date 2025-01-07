import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import PageTitle from "../components/PageTitle";
import { ProductsData } from "../DummyData/productdata";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar, faStarHalfAlt } from "@fortawesome/free-solid-svg-icons";

export default function SingleProduct() {
  const { productId } = useParams();
  const product = ProductsData.find(
    (product) => product.id === Number(productId)
  );

  const [mainImage, setMainImage] = useState(product?.image);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  if (!product) {
    return (
      <div className="overflow-x-hidden">
        <PageTitle title={"Product Page"} />
        <div className="flex justify-center items-center h-[50vh]">
          <p className="text-3xl font-bold">Product not found : (</p>
        </div>
      </div>
    );
  }

  const fullStars = Math.floor(product.rating);
  const halfStar = product.rating % 1 !== 0;
  const emptyStars = 5 - fullStars - (halfStar ? 1 : 0);

  const handleThumbnailClick = (image) => {
    setMainImage(image);
  };

  const testimage =
    "https://live.themewild.com/medion/assets/img/product/07.png";

  return (
    <div className="overflow-x-hidden">
      <PageTitle title={product.title} />
      {/* Add more product details here */}

      <div className="max-w-screen-lg md:max-w-[80%] mx-auto p-6 md:p-10 md:mt-4">
        <div className="md:flex md:flex-col md:items-center ">
          {/* Product Details */}
          <div className="flex flex-col md:w-full lg:flex-row gap-8">
            {/* Images Section */}
            <div className="flex-1 md:w-[60%]">
              <div className="flex justify-center border-gray-300 border-2 rounded-xl p-4">
                <img
                  src={mainImage}
                  alt={product.title}
                  className="md:w-[80%] w-full rounded-lg"
                />
              </div>

              <div className="flex justify-center gap-4 mt-4">
                {[product.image, testimage, product.image].map(
                  (image, index) => (
                    <div
                      key={index}
                      className="flex justify-center border-gray-300 border-2 rounded-xl p-4"
                      onClick={() => handleThumbnailClick(image)}
                    >
                      <img
                        src={image}
                        alt={`Thumbnail ${index + 1}`}
                        className="w-20 h-20 object-cover rounded-lg cursor-pointer hover:opacity-75"
                      />
                    </div>
                  )
                )}
              </div>
            </div>

            {/* Product Info */}
            <div className="flex-1 md:mt-10">
              <h1 className="text-2xl md:text-3xl font-bold">
                {product.title}
              </h1>
              {/* Star */}
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
                <span className="ml-2 text-gray-500">{product.rating}</span>
              </div>

              <p className="text-gray-500 mt-2 text-sm md:text-base">
                (4 Customer Reviews)
              </p>

              {/* Price Section */}
              <div className="flex items-center gap-4 mt-4">
                <p className="line-through text-gray-400 text-sm md:text-base">
                  ₹{product.originalPrice}
                </p>
                <p className="text-2xl md:text-3xl font-semibold text-mainCyan">
                  {product.price}
                </p>
                <p className="text-red-500 text-xs md:text-sm">
                  {product.discount}
                </p>
              </div>

              {/* Description */}
              <p className="mt-2 text-gray-700 text-sm md:text-base">
                {product.shortDescription}
              </p>

              <hr className="border border-gray-200 flex-1 mt-4" />

              {/* Stock Info */}
              <div className="mt-4 text-sm md:text-base">
                <p>
                  <span className="font-semibold">Stock:</span> {product.stock}
                </p>
                <p>
                  <span className="font-semibold">Category:</span>{" "}
                  {product.categories.join(", ")}
                </p>
                <p>
                  <span className="font-semibold">Brand:</span>{" "}
                  {product.brands.join(", ")}
                </p>
              </div>

              {/* Quantity Selector and Add to Cart */}
              <hr className="border border-gray-200 flex-1 mt-5" />
              <div className="mt-6 flex items-center gap-4">
                <span className="font-semibold text-sm md:text-base">Qty:</span>{" "}
                <div className="flex items-center border rounded-lg w-24">
                  <button className="px-2 md:px-4 py-1 md:py-2 text-gray-600 hover:text-black">
                    -
                  </button>
                  <p className="flex-1 text-center text-sm md:text-base">1</p>
                  <button className="px-2 md:px-4 py-1 md:py-2 text-gray-600 hover:text-black">
                    +
                  </button>
                </div>
                <button className="px-4 md:px-6 py-2 md:py-3 bg-mainCyan text-white rounded-lg hover:bg-green-700 text-sm md:text-base">
                  Add to Cart
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Product Details Section */}
        <hr className="border border-gray-300 flex-1 mt-10 " />
        {/* Description Section */}
        <div className="mt-12 bg-gray-100 rounded-lg md:p-6 p-2">
          <h2 className="text-lg md:text-xl font-semibold border-b pb-2">
            Description
          </h2>
          <p className="mt-4 text-gray-700 text-sm md:text-base">
            {product.description}
          </p>
        </div>
      </div>
    </div>
  );
}
