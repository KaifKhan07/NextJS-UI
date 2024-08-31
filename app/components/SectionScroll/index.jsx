import React from 'react'
import FeaturesScroll from '../FeaturesScroll'

const SectionScroll = () => {
    const ScrollData = [
        {
            img: "/assets/images/asset 37.png",
            number: "9859",
            name: "Icon Collections"
        },
        {
            img: "/assets/images/asset 38.png",
            number: "8197",
            name: "Masonry Layouts"
        },
        {
            img: "/assets/images/asset 39.png",
            number: "1143",
            name: "Only The Best"
        },
        {
            img: "/assets/images/asset 40.png",
            number: "2177",
            name: "Elated Design"
        },
    ]
  return (
    <>
      <div className="scroller-attach w-100% h-[410px] flex justify-center items-center gap-32">
        {
          ScrollData.map((item, index) => {
            return (

              <FeaturesScroll  key={index}
              img={item.img}
              number={item.number}
              name={item.name}
              />
            )
          })
        }
      </div>
    </>
  )
}

export default SectionScroll;
