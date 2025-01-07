import React from "react";
import WhyChooseUsImg from "../assets/images/WhyCooseUsImg.jpg";
import delivery from "../assets/images/delivery.svg";
import price from "../assets/images/price.svg";
import warranty from "../assets/images/warranty.svg";

const WhyChooseUs = () => {
  return (
    <section className="bg-[#f2f8f7] rounded-2xl py-12">
      <div className="max-w-6xl mx-auto px-6 lg:px-12">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-[#579f97] mb-4">
            Why Choose Us
          </h2>
          <p className="text-xl text-gray-600 mb-2">
            We Provide Premium Quality Product To You
          </p>
          <p className="text-gray-500 max-w-3xl mx-auto">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione ex
            incidunt error iste laudantium dolor nulla praesentium tempore
            cumque harum aut aspernatur suscipit deserunt, repellat, adipisci
            neque eveniet aliquid. Repellat.
          </p>
        </div>
        <div className="mt-4 flex flex-col lg:flex-row justify-center items-center gap-12">
          <div className="flex-1">
            <img
              src={WhyChooseUsImg}
              alt="Furniture Showcase"
              className="rounded-lg shadow-lg"
            />
          </div>
          <div className="flex-1 grid gap-6">
            <div className="flex items-center space-x-4 bg-white p-6 rounded-lg shadow-md">
              <img src={warranty} alt="Warranty" className="h-14 w-14" />
              <div>
                <h4 className="font-semibold text-lg">Original Products</h4>
                <p className="text-sm text-gray-500">
                  It is a long established fact that a reader will be distracted
                  by the readable content of a page when looking at its layout.
                </p>
              </div>
            </div>
            <div className="flex items-center space-x-4 bg-white p-6 rounded-lg shadow-md">
              <img src={price} alt="Price" className="h-14 w-14" />
              <div>
                <h4 className="font-semibold text-lg">Affordable Price</h4>
                <p className="text-sm text-gray-500">
                  It is a long established fact that a reader will be distracted
                  by the readable content of a page when looking at its layout.
                </p>
              </div>
            </div>
            <div className="flex items-center space-x-4 bg-white p-6 rounded-lg shadow-md">
              <img src={delivery} alt="Delivery" className="h-14 w-14" />
              <div>
                <h4 className="font-semibold text-lg">Free Shipping</h4>
                <p className="text-sm text-gray-500">
                  It is a long established fact that a reader will be distracted
                  by the readable content of a page when looking at its layout.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
