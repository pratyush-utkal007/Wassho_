import React from "react";
import tire from '../assets/tire.png'
import car from '../assets/car.png'
import mat from '../assets/mat.png'
import featureImg from '../assets/feature-1-5.jpg.webp'

const Quality = () => {
  return (
    <>
      <section className="quality-section bg-blue-900 my-8">
        <div className="flex flex-wrap flex-col-reverse lg:flex-row">
          <div className="text-wrapper md:p-14 p-4 lg:w-1/2">
            <p className="text-lg font-medium text-sky-600 relative after:content-[''] after:h-[2px] after:w-14 after:bg-blue-500 after:absolute after:top-1/2 after:ms-1">
              Find Who We Are
            </p>
            <h2 className="md:text-5xl text-2xl font-semibold my-3 text-white">
              We Only Provide Quality Care Services
            </h2>
            <div className="flex md:p-3 hover:bg-blue-950 duration-500 items-center gap-4 mb-4">
                <div className="icon">
                    <img src={car} alt="img" />
                </div>
                <div className="text text-white">
                    <h1 className="heading md:text-3xl text-xl font-semibold mb-2">Natural Cleaners</h1>
                    <p className="desc text-slate-300">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptates pariatur debitis magni quidem blandit atque ex.</p>
                </div>
            </div>
            <div className="flex md:p-3 hover:bg-blue-950 duration-500 items-center gap-4 mb-4">
                <div className="icon">
                    <img src={tire} alt="img" />
                </div>
                <div className="text text-white">
                    <h1 className="heading md:text-3xl text-xl font-semibold mb-2">Tires Shines</h1>
                    <p className="desc text-slate-300">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptates pariatur debitis magni quidem blandit atque ex.</p>
                </div>
            </div>
            <div className="flex md:p-3 hover:bg-blue-950 duration-500 items-center gap-4 mb-4">
                <div className="icon">
                    <img src={mat} alt="img" />
                </div>
                <div className="text text-white">
                    <h1 className="heading md:text-3xl text-xl font-semibold mb-2">Mat Washing</h1>
                    <p className="desc text-slate-400">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptates pariatur debitis magni quidem blandit atque ex.</p>
                </div>
            </div>
          </div>
          
          <div className="img-wrapper lg:w-1/2">
            <img src={featureImg} alt="img" className="h-full"/>
          </div>
        </div>
      </section>
    </>
  );
};

export default Quality;
