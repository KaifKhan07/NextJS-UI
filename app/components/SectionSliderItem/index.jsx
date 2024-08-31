import React from 'react'
import FeaturesItem from '../FeaturesItems'

const SectionSliderItem = () => {
  const Data = [
    {
      img: "/assets/images/asset 42.png"
    },
    {
      img: "/assets/images/asset 44.png"
    },
    {
      img: "/assets/images/asset 46.png"
    },
    {
      img: "/assets/images/asset 48.png"
    },
  ]
  return (
    <>
      <div className="sectionScroller">
        <div className="bg-[#50c5bb] h-[250px] border flex justify-center items-center ">
        {
          Data.map((item, index) => {
            return (

              <FeaturesItem 
              key={index}
              img={item.img}
              />
            )
          })
        }
        </div>
      </div>
    </>
  )
}

export default SectionSliderItem;
