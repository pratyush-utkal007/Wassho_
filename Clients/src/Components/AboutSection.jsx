import React from "react";
import { BsCheckCircleFill } from "react-icons/bs";
import {FiPhoneCall} from 'react-icons/fi'
import Button from "./Button";
import washImg from '../assets/about-2-1-1.jpg.webp'
import washPng from '../assets/car-service.png'
import { Link } from "react-router-dom";
const AboutSection = () => {
  return (
    <>
      <section className="about-section lg:px-28 px-4 my-20 flex justify-center">
        <div className="grid md:grid-cols-2 grid-cols-1 gap-8">
          <div className="text-wrapper mx-auto">
            <div>
              <p className="text-lg font-medium text-sky-600 relative after:content-[''] after:h-[2px] after:w-14 after:bg-blue-500 after:absolute after:top-1/2 after:ms-1">
                Write a Message
              </p>
              <h2 className="md:text-5xl text-2xl font-semibold my-3 text-cyan-950">
                It's Time to Come and Clean Your Car
              </h2>
              <p className="text-lg my-8 text-slate-500">
                There are many variations of passages of Lorem Ipsum available,
                but the majority have suffered alteration in some form, by
                injected humour, or randomised words which don't look even.
              </p>
              <div>
                <p className="my-2 md:items-center flex">
                  <BsCheckCircleFill className="inline text-sky-400 text-lg me-1 mt-1" />
                  <span className="text-blue-700 text-lg">
                    We're professional and certified car washers
                  </span>
                </p>
                <p className="my-2 md:items-center flex">
                  <BsCheckCircleFill className="inline text-sky-400 text-lg me-1 mt-1" />
                  <span className="text-blue-700 text-lg">
                    We use quality material to clean your cars
                  </span>
                </p>
                <p className="my-2 md:items-center flex">
                  <BsCheckCircleFill className="inline text-sky-400 text-lg me-1 mt-1" />
                  <span className="text-blue-700 text-lg">
                    We care about our customers satisfaction
                  </span>
                </p>
              </div>
            </div>
            <hr className="my-5" />
            <div>
              <div className="flex items-center gap-5">
                <div className="icon"><img src={washPng} alt="img"  className="w-28 hidden md:block"/></div>
                <div>
                  <h2 className="md:text-3xl text-xl font-medium text-orange-600">
                    We have 30+ years of experiences for give you better quality
                    results.
                  </h2>
                </div>
              </div>
              <div className="flex flex-wrap items-center my-6">
                <div className="">
                 <Button text={'Book now'} url={'/booking'}/>
                </div>
                <div>
                  <div className="md:ms-8 ms-2 me-2 md:p-6 p-2 inline bg-slate-300 md:w-20 md:h-20 rounded-full"><FiPhoneCall className="inline md:text-2xl text-xl"/></div>
                </div>
                  <Link >
                  <p className="md:text-2xl  text-slate-400">Call us on</p>
                  <p className="md:text-xl font-semibold">+91 99970 90879</p>
                  </Link>
              </div>
            </div>
          </div>
          <div className="img-wrapper-about mx-auto">
            <div className="img-box overflow-hidden">
              <img src={washImg} alt="" />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default AboutSection;
