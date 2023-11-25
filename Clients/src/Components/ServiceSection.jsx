import React from "react";
import service1 from '../assets/interior.jpeg'
import service2 from '../assets/exterior.jpg'
import service3 from '../assets/car-detailing.jpeg'
import serviceIcon1 from '../assets/interiorCleaning.png'
import serviceIcon2 from '../assets/service-icon-2.png'
import serviceIcon3 from '../assets/service-icon-3.png'

import '../App.css'
import ServiceCard from "./ServiceCard";



const ServiceSection = () => {
  return (
    <>
      <section className="service-container max-w-full mx-auto md:p-8 px-2 py-6 mb-8 text-teal-950 bg-slate-200 mt-8">
        <div className="heading text-center">
          <h4 className="md:text-lg font-medium text-sky-600 relative after:content-[''] after:h-[2px] after:w-14 after:bg-blue-500 after:absolute after:top-1/2 after:ms-1">
            Waterless Car Wash
          </h4>
          <h1 className="md:text-5xl text-xl font-bold my-4">{`Services We're Providing To Customers`}</h1>
        </div>
        <div className="flex justify-center items-center">
        <div className="service-wrapper max-w-[1200px] grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mx-auto my-8">
           
           <ServiceCard sImg={service2} url={'/services'} sIcon={serviceIcon2} title={"Exterior Cleaning"} description={"Exterior cleaning in waterless car wash is a sustainable, convenient and effective way to maintain the cleanliness and shine,enhance the paint gloss and reducing the risk of scratches and swirl marks in vehicles without the excessive use of water or harmful chemicals."} btnUrl={"/services"}/>
           <ServiceCard sImg={service1} url={'/services'} sIcon={serviceIcon1} title={"Interior Cleaning"} description={"In interior Cleaning specially formulated eco-friendly cleaning agents are sprayed onto the dashboard, seats, or carpets for lifting and removing dirt, dust and stains.Moreover, it leaves behind a fresh, clean scent, making it an environmentally conscious and convenient choice for both car owners and the planet."} btnUrl={"/services"}/>
           <ServiceCard sImg={service3} url={'/services'} sIcon={serviceIcon3} title={"Car Detailing"} description={"Car detailing is the meticulous process of cleaning, restoring, and enhancing a vehicle's appearance. It involves cleaning, polishing, and protection your car from rain and Uv rays. It enhance the car's life and leaves the car looking showroom-worthy and well-maintained.."} btnUrl={"/services"}/>
        
        </div>
        </div>

      </section>
    </>
  );
};

export default ServiceSection;
