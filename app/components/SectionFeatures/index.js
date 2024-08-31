import Image from "next/image";
import React from "react";
import Feature1 from '../FeaturesArea/Feature1'
import Feature2 from '../FeaturesArea/Feature2'

const Features = () => {
  const dataLeft = [
    {
      title: "Stunning Full Screen Slider",
      description:
        "The Visual Composer drag-and-drop page builder is packed with all Elated Themes. Setting up your website and creating pages.",
    },
    {
      title: "Smooth Parallax Effect",
      description:
        "The Elated Slider comes with video and image support, as well as full screen and parallax functionality. Display your content.",
    },
    {
      title: "WooCommerce Compatible",
      description:
        "Elated Themes provide a large collection of elements and shortcodes. Create any layout combination you can imagine and.",
    },
  ];

  const dataRight = [
    {
      title: "Simple Demo Import",
      description:
        "The Elated Slider comes with video and image support, as well as full screen and parallax functionality that comes in style.",
    },
    {
      title: "Infographic Elements",
      description:
        "The Visual Composer drag-and-drop page builder is packed with all Elated Themes. Setting up your website has never been.",
    },
    {
      title: "Retina Ready",
      description:
        "The Elated Slider comes with video and image support, as well as full screen and parallax functionality display your main",
    },
  ];
  return (
    <div className="main_feature bg-[#F7F5F2] h-[650px] flex justify-between px-[90px] py-[60px]">

      <div className="left">
        {dataLeft.map((curr, index) => {
          return (
            <Feature1
              key={index}
              title={curr.title}
              description={curr.description}
            />
          );
        })}
      </div>

      <div className="middle ">
        <Image
          src="/assets/images/asset 28.png"
          alt="centerImage"
          width={400}
          height={60}
        />
      </div>

      <div className="right">
        {
          dataRight.map((item,index) => {
            return (
              <Feature2 key={index}
                title={item.title}
                description={item.description}
              />
            )
          })
        }
      </div>
    </div>
  );
};

export default Features;
