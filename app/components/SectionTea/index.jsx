import React from "react";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import CardGiftcardIcon from '@mui/icons-material/CardGiftcard';
import StarBorderIcon from '@mui/icons-material/StarBorder';
import Image from "next/image";

const SectionTea = () => {
  return (
    <>
      <div className="section-Tea relative px-[90px] py-[90px] flex flex-col justify-around">
          <div className="content-1 flex gap-x-2 ">
            <div className="icon">
              <FavoriteBorderIcon />
            </div>
            <div className="heading font-bold text-xl">
              Powerful Elated Settings
            </div>
          </div>
          <div className="desc px-4 text-gray-600 w-[550px] pb-10">
            Take control over your website. All elements can be easily styled
            and modified in Elated settings easily and intuitively.
          </div>

          <div className="content-1 flex gap-x-2 ">
            <div className="icon">
              <CardGiftcardIcon />
            </div>
            <div className="heading font-bold text-xl">
              Drag-and-Drop Builder
            </div>
          </div>
          <div className="desc px-4 text-gray-600 w-[550px] pb-10">
            Add sections with the stunning parallax effect to your pages. Make
            browsing your website an exciting experience.
          </div>
          <div className="content-1 flex gap-x-2 ">
            <div className="icon">
              <StarBorderIcon />
            </div>
            <div className="heading font-bold text-xl">Welcome to Elated</div>
          </div>

          <div className="desc px-4 text-gray-600 w-[550px]">
            The Visual Composer drag-and-drop page builder is packed with all
            Elated Themes to set up your stunning website.{" "}
          </div>

            <div className="tea-image absolute top-[-100px]  right-0">
                <Image src={"/assets/images/asset 41.png"} width={750} height={50} alt="tea-img"/>
            </div>
        
      </div>
    </>
  );
};

export default SectionTea;
