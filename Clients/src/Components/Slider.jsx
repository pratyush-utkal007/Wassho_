import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import slide1 from '../assets/slide1.jpg'
import slide2 from '../assets/slide2.jpg'
import slide3 from '../assets/slide3.jpg'
import slide4 from '../assets/slide4.jpg'

import SlideCard from "./SlideCard";
const Slider = () => {
  const responsive = {
    desktop: {
        breakpoint: { max: 3000, min: 1024 },
        items: 1,
        slidesToSlide: 1 // optional, default to 1.
      },
      tablet: {
        breakpoint: { max: 1024, min: 464 },
        items: 1,
        slidesToSlide: 1 // optional, default to 1.
      },
      mobile: {
        breakpoint: { max: 464, min: 0 },
        items: 1,
        slidesToSlide: 1 // optional, default to 1.
      }
    };
  return (
    <section className="max-w-full relative">
      <Carousel 
      showDots={false}
      responsive={responsive}
      autoPlay={true}
      // autoPlaySpeed={1000}
      infinite={true}
      >
       

    <SlideCard img={slide1} text={"24/7 Cleanliness at Your Door"} desc={"Our 24/7 Waterless Car Wash Keeps Your Ride Spotless Day and Night."}/>
    <SlideCard img={slide2} text={"Go Green and Get Clean"} desc={"Our Waterless Car Wash is Kind to Your Car and the Planet."}/>
    <SlideCard img={slide3} text={"Waterless Car Wash For Your Cars"} desc={"Choose Our Waterless Car Wash for an Eco-Friendly Car Care Experience."}/>
    <SlideCard img={slide4} text={"Now Your Car Will Be A Showroom Shine"} desc={"Insider Tricks for That Showroom Look"}/>
    
      </Carousel>
    </section>
  );
};

export default Slider;
