import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import React from "react";

import ReviewCard from "./ReviewCard";


const Testimonial = () => {
  const reviews = [
    {
      name: "Manoj kumar",
      review: "Although I had my doubts at initially, this waterless vehicle wash exceeded them! It's environmentally friendly and produces excellent results. highly recommended",
    },
    {
      name: "Ravi Sahu",
      review: "For someone who commutes by automobile every day, this waterless car wash is invaluable. My car looks like a showroom after, and it's handy and quick. Impressed!",
    },
    {
      name: "Surjya Pattnaik",
      review: "I adore that this programme promotes water conservation. Without damaging the environment, my automobile sparkles. The team deserves praise for using a green strategy.",
    },
    {
      name: "Ankit Pandey",
      review: "I've saved time and money by using the waterless car wash. Even my staff members adore it. Both cost effectiveness and convenience benefit from this.",
    },
    {
      name: "Sushmita Nayak",
      review: "Never before has my automobile looked this beautiful! My new favourite wash is the waterless one. Effortless, quick, and leaves a dazzling sheen. unable to get enough of it",
    }
  ];
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 3
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };
  return (
    <>
    <div className="testimonial-component">
      <Carousel
      swipeable={true}
      draggable={true}
      showDots={true}
      autoPlay= {true}
      responsive={responsive}
      infinite={true}
      >

      {
        reviews.map((data, index)=>{
          const {image, name, designation, review} = data
          return (
            <ReviewCard 
            key={index}
            img={image}
            name={name}
            designation={designation}
            review={review}
            />
          )
        })

      }
      </Carousel>
    </div>
    </>
  )
}

export default Testimonial