import BigSectionName from "../components/BigSectionName";
import Categories_card from "../components/Categories-card";
import PageTitle from "../components/PageTitle";

export default function Categories() {
  //dummy data for categories
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
    },
    {
      id: 11,
      name: "Medical Supplies",
      itemsCount: 70,
      icon: "https://live.themewild.com/medion/assets/img/icon/medical-supplies.svg",
    },
    {
      id: 12,
      name: "Pet Care",
      itemsCount: 10,
      icon: "https://live.themewild.com/medion/assets/img/icon/pet-care.svg",
    },
  ];

  return (
    <div className="overflow-x-hidden">
      <PageTitle title="Categories" />
      <div className="bg-gray-100 p-8 ">
        <BigSectionName title="Our Categories" />
      </div>
      <div className="grid grid-cols-2 gap-2 md:gap-5 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 p-4 md:mx-20">
        {categories.map((category, index) => (
          <Categories_card key={index} {...category} />
        ))}
      </div>
    </div>
  );
}
