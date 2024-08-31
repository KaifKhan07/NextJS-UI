import React from 'react'
import './globals.css'
import Navbar from './components/Navbar'
import SectionMain from './components/SectionMain';
import SectionFeatures from './components/SectionFeatures'
import SectionCards from './components/SectionCards'
import SectionScroll from './components/SectionScroll'
import SectionBlog from './components/SectionBlog'
import SectionTea from './components/SectionTea'
import SectionSliderItem from './components/SectionSliderItem'
import SectionTestimonial from './components/SectionTestimonial'
import SectionImgCard from './components/SectionImgCard'
import Footer from './components/Footer'
import "bootstrap/dist/css/bootstrap.min.css";


const page = () => {
  return (
    <div>

      <Navbar />
      <SectionMain />
     <SectionFeatures />
     <SectionCards />
     <SectionScroll />
     <SectionBlog />
     <SectionTea />
     <SectionSliderItem />
     <SectionTestimonial />
     <SectionImgCard />
     <Footer />

      
    </div>
  )
}

export default page
