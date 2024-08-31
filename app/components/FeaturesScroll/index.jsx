import Image from 'next/image'
import React from 'react'

const SectionScroll = ({img, number, name}) => {
  return (
    <>

        <div className="contents-at-scroll text-white text-2xl flex flex-col w-[200px] text-center">
          <div className="scroll-img flex flex-col justify-center items-center">
            <Image src={img} width={50} height={50} alt='img-coffee'/>
          </div>
          <div className="scroll-no font-bold">
            {number}
          </div>
          <div className="scroll-txt">
            {name}
          </div>
        </div>

        
    </>
  )
}

export default SectionScroll