import React from "react";

const Feature2 = ({ title, description }) => {
  return (
    <>
      <div className="main-feature-2 flex flex-col gap-10">
        <div className="feature-content-2  h-[200px] w-[400px] text-left flex flex-col justify-center">
          <h3 className="globally-hover font-bold">{title}</h3>
          <p className=" text-gray-600">{description}</p>
        </div>
      </div>
      
    </>
  );
};

export default Feature2;
