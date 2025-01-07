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
import { ProductsData } from "../DummyData/productdata";

function Home() {

  // DummyData
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

  //Dummny Data
  const categories = [
    {
      id: 1,
      name: "Medicine",
      itemsCount: 30,
      icon: "https://live.themewild.com/medion/assets/img/icon/medicine.svg",
    },
    {
      id: 2,
      name: "Health Care",
      itemsCount: 20,
      icon: "https://live.themewild.com/medion/assets/img/icon/health-care.svg",
    },
    {
      id: 3,
      name: "Beauty Care",
      itemsCount: 50,
      icon: "https://live.themewild.com/medion/assets/img/icon/beauty-care.svg",
    },
    {
      id: 4,
      name: "sexual wellness",
      itemsCount: 10,
      icon: "https://live.themewild.com/medion/assets/img/icon/sexual.svg",
    },
    {
      id: 5,
      name: "Fitness",
      itemsCount: 15,
      icon: "https://live.themewild.com/medion/assets/img/icon/fitness.svg",
    },
    {
      id: 6,
      name: "Lab Test",
      itemsCount: 5,
      icon: "https://live.themewild.com/medion/assets/img/icon/lab-test.svg",
    },
    {
      id: 7,
      name: "Baby & Mother Care",
      itemsCount: 25,
      icon: "https://live.themewild.com/medion/assets/img/icon/baby-mom-care.svg",
    },
    {
      id: 8,
      name: "Supplement",
      itemsCount: 40,
      icon: "https://live.themewild.com/medion/assets/img/icon/supplements.svg",
    },
    {
      id: 9,
      name: "Food & Nutrition",
      itemsCount: 35,
      icon: "https://live.themewild.com/medion/assets/img/icon/food-nutrition.svg",
    },
    {
      id: 10,
      name: "Equipment",
      itemsCount: 60,
      icon: "https://live.themewild.com/medion/assets/img/icon/medical-equipements.svg",
    }
  ];

  return (
    <div className="bg-white min-h-screen w-full">
      {/* Slide Show */}
      <div className="flex justify-center items-center h-fit  lg:h-[600px]">
        <SlideShow />
      </div>

      <div className="p-10 pl-5 pr-5 md:pl-20 md:pr-20 md:mr-5 md:ml-5">
        {/* Categories */}
        <SectionName title="Top Category" link={"/categories"} className={"mt-5"} />
        <div className="grid grid-cols-2  md:grid-cols-3 w1257:grid-cols-5 lg:grid-cols-4 gap-4 p-0  md:p-10 justify-center">
          {categories.map((category, index) => (
            <Categories_card key={index} {...category} />
          ))}
        </div>

        {/* Popular Product */}
        <SectionName title="Popular Product" link={"/shop"} className="mt-10" />
        <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4 mt-4">
          {ProductsData.map((product, index) => (
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
            <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 mt-4">
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
      {/* <InfiniteImageSlider /> */}

    </div>
  );
}

export default Home;
