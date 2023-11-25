import React from "react";
import { BsCheckCircleFill } from "react-icons/bs";
import Button from "./Button";

const Offer = () => {
  return (
    <>
      <section className="offer-section mb-8 py-6">
        <div className="flex justify-center items-center mx-auto md:px-16 px-3">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 md:gap-8 gap-3 text-white">
              <div className="heading text-white">
                <h4 className="md:text-lg font-medium text-sky-600 relative after:content-[''] after:h-[2px] after:w-14 after:bg-blue-500 after:absolute after:top-1/2 after:ms-1">
                  What We&#39;re Offering
                </h4>
                <h1 className="md:text-4xl text-xl font-bold my-4">
                  Premium Doorstep Car Wash Service
                </h1>
                <Button text={'Appointment'} url={'/booking'}/>
            
            </div>
              <div className="offer">
                <p className="text-lg mb-3"><BsCheckCircleFill className="inline me-1 text-blue-500"/>Premium Exterior Cleaning</p>
                <p className="text-lg mb-3"><BsCheckCircleFill className="inline me-1 text-blue-500"/>Interior Vacuuming</p>
                <p className="text-lg mb-3"><BsCheckCircleFill className="inline me-1 text-blue-500"/>Tire Cleaning</p>
                <p className="text-lg mb-3"><BsCheckCircleFill className="inline me-1 text-blue-500"/>Doors + Windows + Rooftop Cleaning</p>
                <p className="text-lg mb-3"><BsCheckCircleFill className="inline me-1 text-blue-500"/>External Fiber parts Polishing</p>
              </div>
              <div className="offer">
                <p className="text-lg mb-3"><BsCheckCircleFill className="inline me-1 text-blue-500"/>Premium Interior Cleaning</p>
                <p className="text-lg mb-3"><BsCheckCircleFill className="inline me-1 text-blue-500"/>Seats and Dashboard Cleaning</p>
                <p className="text-lg mb-3"><BsCheckCircleFill className="inline me-1 text-blue-500"/>Floor Brushing</p>
                <p className="text-lg mb-3"><BsCheckCircleFill className="inline me-1 text-blue-500"/>Internal Fiber parts Polishing</p>
                <p className="text-lg mb-3"><BsCheckCircleFill className="inline me-1 text-blue-500"/>Deodorisation</p>
                <p className="text-lg mb-3"><BsCheckCircleFill className="inline me-1 text-blue-500"/>Interior Polish</p>
                <p className="text-lg mb-3"><BsCheckCircleFill className="inline me-1 text-blue-500"/>Best Quality</p>
              </div>
             
          </div>
        </div>
      </section>
    </>
  );
};

export default Offer;
