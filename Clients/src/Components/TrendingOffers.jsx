import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import SectionHeader from "./SectionHeader";
import offer1 from '../assets/offer-1.jpg'
import offer2 from '../assets/offer-2.jpg'
import offer3 from '../assets/offer-3.jpg'


const TrendingOffers = () => {
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
    <>
      <div className="top-offers-wrapper my-7 w-1000px">
       
       <SectionHeader text={"Top Trending Offer"}/>

        <div className="carousel mt-10">
          <Carousel
            className="relative"
            showDots={true}
            responsive={responsive}
            autoPlay={true}
            autoPlaySpeed={3000}
            infinite={true}
          >
            <div className="lg:w-[700px] md:h-[300px] mx-auto overflow-hidden">
              <img
                src={offer1}
                alt="" 
                className="w-full"
              />
            </div>
            <div className="lg:w-[700px] md:h-[300px] mx-auto overflow-hidden">
              <img
                src={offer2}
                alt="img"
                className="w-full"
              />
            </div>
            <div className="lg:w-[700px] md:h-[300px] mx-auto overflow-hidden">
              <img
                src={offer3}
                alt="img"
                className="w-full"
              />
            </div>
          </Carousel>
        </div>
      </div>
    </>
  );
};

export default TrendingOffers;
