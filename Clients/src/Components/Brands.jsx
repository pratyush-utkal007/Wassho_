import React from 'react'
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import BrandCard from './BrandCard';
import SectionHeader from './SectionHeader';

const Brands = () => {
    const responsive = {
    desktop: {
        breakpoint: { max: 3000, min: 1024 },
        items: 7,
        slidesToSlide: 1 // optional, default to 1.
      },
      tablet: {
        breakpoint: { max: 1024, min: 464 },
        items: 4,
        slidesToSlide: 1 // optional, default to 1.
      },
      mobile: {
        breakpoint: { max: 464, min: 0 },
        items: 2,
        slidesToSlide: 1 // optional, default to 1.
      }
    };

    const imageUrls = [
      "https://fixigo.in/FixigoAssets2023/images/make_logo/bmw.png",
      "https://fixigo.in/FixigoAssets2023/images/make_logo/audi.png",
      "https://fixigo.in/FixigoAssets2023/images/make_logo/mercedes.png",
      "https://fixigo.in/FixigoAssets2023/images/make_logo/landrover.png",
      "https://fixigo.in/FixigoAssets2023/images/make_logo/jaguar.png",
      "https://fixigo.in/FixigoAssets2023/images/make_logo/mahendra2.png",
      "https://fixigo.in/FixigoAssets2023/images/make_logo/mitsubishi.png",
      "https://fixigo.in/FixigoAssets2023/images/make_logo/mg.png",
      "https://fixigo.in/FixigoAssets2023/images/make_logo/ssangyong.png",
      "https://fixigo.in/FixigoAssets2023/images/make_logo/volvo.png",
      "https://fixigo.in/FixigoAssets2023/images/make_logo/jeep.png",
      "https://fixigo.in/FixigoAssets2023/images/make_logo/skoda.png",
      "https://fixigo.in/FixigoAssets2023/images/make_logo/fiat.png",
      "https://fixigo.in/FixigoAssets2023/images/make_logo/datsun.png",
      "https://fixigo.in/FixigoAssets2023/images/make_logo/volkswagen.png",
      "https://fixigo.in/FixigoAssets2023/images/make_logo/chevrolet.png",
      "https://fixigo.in/FixigoAssets2023/images/make_logo/nissan.png",
      "https://fixigo.in/FixigoAssets2023/images/make_logo/renault.png",
      "https://fixigo.in/FixigoAssets2023/images/make_logo/ford.png",
      "https://fixigo.in/FixigoAssets2023/images/make_logo/mahendra.png",
      "https://fixigo.in/FixigoAssets2023/images/make_logo/hyundai.png",
      "https://fixigo.in/FixigoAssets2023/images/make_logo/honda.png",
      "https://fixigo.in/FixigoAssets2023/images/make_logo/tyota.png",
      "https://fixigo.in/FixigoAssets2023/images/make_logo/tata.png",
      "https://fixigo.in/FixigoAssets2023/images/make_logo/suzuki.png",
      "https://fixigo.in/FixigoAssets2023/images/make_logo/citroen.png"
    ];
    
     

  return (
    <>
      <div className="top-offers-wrapper my-20 max-w-1000px">
        <div className="section-heading-wrapper">
         <SectionHeader text={"We Service Most Brands"} textColor={"black"}/>
        </div>

        <div className="carousel px-10">
          <Carousel
            className="relative px-10 mt-14"
            showDots={false}
            responsive={responsive}
            autoPlay={true}
            // autoPlaySpeed={1000}
            infinite={true}
          >
           
            {
            imageUrls.map((url, index)=>{
             return <BrandCard img={url} key={index}/>
            })
            }
          </Carousel>
        </div>
      </div>
    </>
  );
}

export default Brands