import React from "react";
import { SlideShow } from "../components/Slide-show";
import Categories_card from "../components/Categories-card";
import SectionName from "../components/SectionName";
import PopularProductCard from "../components/PopularProduct-card";
import popularProducts from "../assets/images/PopularProducts";
import FeaturesBanner from "../components/FeaturesBanner";
import DiscountProductCard from "../components/DiscountProduct-card";
import latestDiscountModel from "../assets/images/latest-product-model.jpg";
import { Bigbanner } from "../components/Bigbanner";
import BigSectionName from "../components/BigSectionName";

import { InfiniteImageSlider } from "../components/InfiniteImageSlider";
import WhyChooseUs from "../components/WhyChooseUs";

function Home() {
  const popularProductsData = [
    {
      image: popularProducts.image1,
      title: "True Balance Vitamin",
      rating: 4.5,
      price: "₹250.0",
      offer: "10% OFF",
    },
    {
      image: popularProducts.image2,
      title: "Body Lotion 200ml",
      rating: 4,
      price: "₹150.0",
      offer: "5% OFF",
    },
    {
      image: popularProducts.image3,
      title: "Face Mask",
      rating: 4.5,
      price: "₹50.0",
      offer: "15% OFF",
    },
    {
      image: popularProducts.image4,
      title: "Vitamin B12",
      rating: 4.5,
      price: "₹2000.0",
      offer: "20% OFF",
    },
    {
      image: popularProducts.image5,
      title: "Vitamin C",
      rating: 3,
      price: "₹250.0",
      offer: "10% OFF",
    },
    {
      image: popularProducts.image6,
      title: "Vitamin D3",
      rating: 4.5,
      price: "₹250.0",
      offer: "10% OFF",
    },
    {
      image: popularProducts.image5,
      title: "Vitamin C",
      rating: 3,
      price: "₹250.0",
      offer: "10% OFF",
    },
    {
      image: popularProducts.image4,
      title: "Vitamin B12",
      rating: 4.5,
      price: "₹2000.0",
      offer: "20% OFF",
    },
    {
      image: popularProducts.image1,
      title: "True Balance Vitamin",
      rating: 4.5,
      price: "₹250.0",
      offer: "10% OFF",
    },
    {
      image: popularProducts.image2,
      title: "Body Lotion 200ml",
      rating: 4,
      price: "₹150.0",
      offer: "5% OFF",
    },
  ];

  return (
    <div className="bg-white min-h-screen w-full">
      {/* Slide Show */}
      <div className="flex justify-center items-center h-fit  lg:h-[600px]">
        <SlideShow />
      </div>

      <div className="p-10 pl-5 pr-5 md:pl-20 md:pr-20 mr-5 ml-5">
        <SectionName title="Top Category" link={"#"} className={"mt-5"} />
        <div className="grid grid-cols-2  md:grid-cols-3 w1257:grid-cols-5 lg:grid-cols-4 gap-4 p-0  md:p-10 justify-center">
          {[...Array(10)].map((_, index) => (
            <Categories_card key={index} />
          ))}
        </div>
        {/* Popular Product */}
        <SectionName title="Popular Product" link={"#"} className="mt-10" />
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 lg:grid-cols-5 gap-4 p-10">
          {popularProductsData.map((product, index) => (
            <PopularProductCard key={index} {...product} />
          ))}
        </div>
        {/* Features Banner */}
        <FeaturesBanner />
        {/* Latest Discount Products and Side Image */}
        <SectionName
          title="Latest Discount Products"
          link={"#"}
          className="mt-10"
        />
        <div className="flex flex-wrap">
          <div className="w-full lg:w-3/4">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-10">
              {[...Array(8)].map((_, index) => (
                <DiscountProductCard
                  key={index}
                  image={popularProducts.image1}
                  title={"Name"}
                  discount={"10% OFF"}
                  price={"₹199"}
                  rating={5}
                />
              ))}
            </div>
          </div>
          <div className="w-full lg:w-1/4 h-auto flex justify-center items-center mt-10 lg:mt-0">
            <img
              src={latestDiscountModel}
              alt="Discount Banner"
              className="w-full h-auto object-cover rounded-3xl lg:max-w-full lg:h-auto"
            />
          </div>
        </div>
        {/* Big Banner */}
        <Bigbanner />
        {/* Why Choose Us */}
        <WhyChooseUs />
        {/* Our Clients Sections */}
        <BigSectionName title="Our Clients" className="mt-10" />
      </div>
      {/* Image Slider *NOT FINAL*/}
      <InfiniteImageSlider />
    </div>
  );
}

export default Home;
