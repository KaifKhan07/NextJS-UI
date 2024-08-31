import React from 'react'
import Image from "next/image";


const FeaturesItem = ({img}) => {
  return (
    <>
      <div className="sliderItem ">
        <Image src={img} width={300} height={50} alt='items' />
      </div>
    </>
  )
}

export default FeaturesItem
