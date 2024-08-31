import React from "react";
import { Button } from "react-bootstrap";

const SectionBlog = () => {
  return (
    <>
      <div className="Blog-layout bg-[#F7F5F2] w-[100%] h-[450px] py-[60px] border flex flex-col items-center justify-center gap-4">
        <div className="blog-title font-bold text-2xl">Beautiful Blog Layouts</div> 
        <div className="blog-desc w-[790px] text-gray-600 text-center"> 
          The Elated Slider comes with video and image support, as well as full
          screen and parallax functionality. Display your essential content in
          style. Add sections with the stunning parallax effect to your pages.
          Make browsing your website an exciting and intuitive experience.
        </div>
        <div className="blog-btn mt-4"> 
          <Button className="w-[160px] h-[43px] text-white" variant="info">
            VIEW FEATURES
          </Button>
        </div>

        <div className="blog-image"></div>
        
      </div>
    </>
  );
};

export default SectionBlog;
