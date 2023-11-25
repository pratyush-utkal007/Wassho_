import React, { useEffect } from "react";
import Header from "../Components/Header";
import Footer from "../Components/Footer";
import Bredcrumb from "../Components/Bredcrumb";
import '../App.css'

import { GiCheckMark } from "react-icons/gi";

import "../App.css";
import ServicePlanWrapper from "../Components/ServicePlanWrapper";
import Methodology from "../Components/Methodology";
import ProbleWrapper from "../Components/ProbleWrapper";
import BookingNotifier from "../Components/BookingNotifier";
import ScrollToTop from "../Components/ScrollToTop";

const Services = () => {

  useEffect(()=>{
    document.title = "Waasho - Services" 
   })
  return (
    <>
    <BookingNotifier/>
    <ScrollToTop/>
      <Header />
      <Bredcrumb page={"Services"} />
      <section className="services-wrapper md:px-16 md:py-8 py-6 px-4">
        <div className="my-8 md:px-14 shadow-xl md:py-14 p-4 md:mb-14 mb-4">
          <div className="interior grid md:grid-cols-3 grid-cols-1 md:px-8">
            <div className="md:max-w-[350px] md:p-6">
              <p className="text-lg text-blue-600 font-semibold">
                Car Cleaning
              </p>
              <h1 className="text-2xl font-extrabold text-blue-950">
                INTERIOR CLEANING
              </h1>
              <div></div>
            </div>
            <div className="md:p-6">
              <h1 className="text-lg text-blue-600 font-semibold">About</h1>
              <p className="my-6 text-lg font-medium text-slate-600">
                Interior headliner, interior and boot vacuuming and floor
                brushing, Seats cleaning and scrubbing, dashboard scrubbing,
                cleaning and polishing, all doors fibre parts scrubbing,
                cleaning and polishing, foot mat paper placement, deoderisation
              </p>
              <div></div>
            </div>
            <div>
              <h1 className="text-lg text-blue-600 font-semibold mt-7">
                Features
              </h1>
              <p className="text-lg">
                <GiCheckMark className="inline me-1 text-blue-600" />
                <span>Roof Top Cleaning</span>
              </p>
              <p className="text-lg">
                <GiCheckMark className="inline me-1 text-blue-600" />
                <span>Vacuuming</span>
              </p>
              <p className="text-lg">
                <GiCheckMark className="inline me-1 text-blue-600" />
                <span>Floor Brushing</span>
              </p>
              <p className="text-lg">
                <GiCheckMark className="inline me-1 text-blue-600" />
                <span>Deodorisation</span>
              </p>
              <p className="text-lg">
                <GiCheckMark className="inline me-1 text-blue-600" />
                <span>Foot Mat</span>
              </p>
              <p className="text-lg">
                <GiCheckMark className="inline me-1 text-blue-600" />
                <span>All Doors + Windows + Boot</span>
              </p>
            </div>
          </div>
          <div>
            <ServicePlanWrapper />
          </div>
        </div>
        <div className="my-8 md:px-14 shadow-xl md:py-14 p-4">
          <div className="exterior grid md:grid-cols-3 grid-cols-1 md:px-8">
            <div className="md:max-w-[350px] md:p-6">
              <p className="text-lg text-blue-600 font-semibold">
                Car Cleaning
              </p>
              <h1 className="text-2xl font-extrabold text-blue-950">
                EXTERIOR CLEANING
              </h1>
            </div>
            <div className="md:p-6">
              <h1 className="text-lg text-blue-600 font-semibold">About</h1>
              <p className="my-6 text-lg font-medium text-slate-600">
                Exterior paint surface waterless cleaning, tyres cleaning and
                polishing, Exterior fibre parts cleaning and polishing.
              </p>
              <div></div>
            </div>
            <div>
              <h1 className="text-lg text-blue-600 font-semibold mt-7">
                Features
              </h1>
              <p className="text-lg">
                <GiCheckMark className="inline me-1 text-blue-600" />
                <span>Exterior Car Cleaning including Tyres</span>
              </p>
              <p className="text-lg">
                <GiCheckMark className="inline me-1 text-blue-600" />
                <span>External Fibre Part Polishing</span>
              </p>
            </div>
          </div>
          <div>
          <ServicePlanWrapper />
          </div>
        </div>
        <div className="my-8 md:px-14 px-3 shadow-xl md:py-14 md:p-4">
          <div className="Car-detailing grid md:grid-cols-3 grid-cols-1 md:px-8 px-2  mt-8">
            <div className="md:max-w-[350px] md:p-6">
              <p className="text-lg text-blue-600 font-semibold">
                Car Cleaning
              </p>
              <h1 className="text-2xl font-extrabold text-blue-950">
                CAR DETAILING
              </h1>
            </div>
            <div className="md:p-6">
              <h1 className="text-lg text-blue-600 font-semibold">About</h1>
              <p className="my-6 text-lg font-medium text-slate-600">
              A car detailing service is the ultimate pampering for your vehicle. Your automobile will look showroom-fresh after being professionally cleaned, polished, and protected by skilled experts. Detailing improves appearance and maintains value, through interior cleaning to exterior paint repair.
              </p>
              <div></div>
            </div>
            <div>
              <h1 className="text-lg text-blue-600 font-semibold mt-7">
                Features
              </h1>
              <p className="text-lg">
                <GiCheckMark className="inline me-1 text-blue-600" />
                <span>Ceremic coating</span>
              </p>
              <p className="text-lg">
                <GiCheckMark className="inline me-1 text-blue-600" />
                <span>Car Waxing</span>
              </p>
            </div>
          </div>
          <div>
          <ServicePlanWrapper />
          </div>
          </div>
      </section>
      <section className="service-problem">
      <div>
      <ProbleWrapper/>
      </div>
      <section>
        <Methodology/>
      </section>
      </section>
      
      <Footer />
    </>
  );
};

export default Services;
