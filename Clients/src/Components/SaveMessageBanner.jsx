import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import img1 from '../assets/washoo_img_of_web_1.jpg'
import img2 from '../assets/washoo_img_of_web_2.jpg'
import img3 from '../assets/washoo_img_of_web_3.jpg'

import '../App.css'

const SaveMessageBanner = () => {
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
      <div className="top-offers-wrapper my-7 max-w-[1200px] overflow-hidden rounded-lg mx-auto">
       
        <div className="carousel">
          <Carousel
            className="relative"
            showDots={true}
            responsive={responsive}
            autoPlay={true}
            autoPlaySpeed={2000}
            infinite={true}
          >
            <div className="mx-auto w-full overflow-hidden md:h-[320px] h-[120px]">
              <img
                src={img1}
                alt="img"
                className="md:h-[280px] h-auto"
              />
            </div>
            <div className="mx-auto w-full overflow-hidden md:h-[320px] h-[120px]">
            <img
                src={img2}
                alt="img"
                className="md:h-[280px] h-auto"
              />
            </div>
            <div className="mx-auto w-full overflow-hidden md:h-[320px] h-[120px]">
            <img
                src={img3}
                alt="img"
                className="md:h-[280px] h-auto"
              />
            </div>
          </Carousel>
        </div>
      </div>
    </>
  );
};

export default SaveMessageBanner;
