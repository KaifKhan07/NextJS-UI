import Image from "next/image";
import React from "react";

const FeaturesCards = ({img, name, price}) => {
  return (
    <>
      <div className="main-cards">
        <div className="img">
          <Image
            className="w-[300px] h-[300px]"
            src={img}
            height={300} 
            width={300}  
            alt={name} 
          /> 
        </div>

        <div className="text-center flex flex-col py-3 gap-2">
          <div className="name font-semibold fs-5">
            {name}
          </div>
          <div className="price font-medium">
            {price}
          </div>
        </div>
      </div>
    </>
  );
};

export default FeaturesCards;
