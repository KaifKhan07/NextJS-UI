import React from "react";
import FeaturesCards from "../FeaturesCards";

const SectionCard = () => {
  const CardsData = [
    {
      img: "/assets/images/asset 29.jpeg",
      name: "Flowering tea",
      price: "$190.00",
    },
    {
      img: "/assets/images/asset 30.jpeg",
      name: "Mock ups",
      price: "$190.00",
    },
    {
      img: "/assets/images/asset 31.jpeg",
      name: "Fruit tea",
      price: "$190.00",
    },
    {
      img: "/assets/images/asset 32.jpeg",
      name: "Green tea",
      price: "$190.00",
    },
    {
      img: "/assets/images/asset 33.jpeg",
      name: "Black tea",
      price: "$190.00",
    },
    {
      img: "/assets/images/asset 34.jpeg",
      name: "Herbal tea",
      price: "$190.00",
    },
    {
      img: "/assets/images/asset 35.jpeg",
      name: "Metal box tea",
      price: "$190.00",
    },
    {
      img: "/assets/images/asset 36.jpeg",
      name: "Blueberry tea",
      price: "$190.00",
    },
  ];

  return (
    <>
      <div className="card-section">
        <div className="content-first w-[750px] text-center m-auto flex flex-col py-20 gap-y-6">
          <div className="heading font-bold fs-2">Easy to Customize</div>
          <div className="description text-gray-600">
            The Visual Composer drag-and-drop page builder is packed with all
            Elated Themes. Setting up your website and creating pages full of
            stunning content.
          </div>
        </div>
      </div>
      
      <div className="main-cards px-[90px] flex flex-wrap gap-10 pb-5">
        {CardsData.map((currVal, index) => {
          return (
            <FeaturesCards
              key={index}
              img={currVal.img}
              name={currVal.name}
              price={currVal.price}
            />
          );
        })}
      </div>
    </>
  );
};

export default SectionCard;
