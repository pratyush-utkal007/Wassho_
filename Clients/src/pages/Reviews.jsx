import React, { useEffect } from "react";
import Header from "../Components/Header";
import Bredcrumb from "../Components/Bredcrumb";
import Footer from "../Components/Footer";
import img from "../assets/exterior.jpg";
import StatisticCard from "../Components/StatisticCard";
import teamImg from "../assets/team.png";
import indiaImg from "../assets/india.png";
import waterdropImg from "../assets/waterdrop.png";
import carsDelivereImg from "../assets/carsDelivered.png";
import Testimonial from "../Components/Testimonial";
import englishVideo from "../assets/washo-english.mp4";
import hindiVideo from "../assets/washo-hindi.mp4";
import '../App.css'
import BookingNotifier from "../Components/BookingNotifier";
import ScrollToTop from "../Components/ScrollToTop";

const Reviews = () => {

  useEffect(()=>{
    document.title = "Waasho - Reviews" 
   })

  return (
    <>
    <BookingNotifier/>
    <ScrollToTop/>
      <Header />
      <Bredcrumb page={"Reviews"} />
      <section className="Reviews">
      <section className="testimonial md:mt-1 mt-1  md:px-14 px-4 py-8 my-8">
          <h2 className="md:text-4xl text-2xl font-extrabold text-blue-50 text-center">
            Testimonial
          </h2>
          <div className="my-14 -z-10">
            <Testimonial />
          </div>
        </section>
        <section className=" md:px-14 px-6 py-8 benifits grid md:grid-cols-2 grid-cols-1 md:my-8 gap-8 my-6 place-content-center">
          <div>
            <h2 className="md:text-5xl text-3xl font-extrabold text-blue-950">
              Benefits Of Waterless <br /> Car Wash
            </h2>
            <p className="text-lg text-slate-800 my-4">
              Waterless car wash is an innovative and eco-friendly alternative
              to traditional car washing methods that employ copious amounts of
              water. This approach offers numerous benefits for both vehicle
              owners and the environment.
            </p>
            <p className="text-lg text-slate-800 my-4">
              First and foremost, waterless car washes conserve a precious
              natural resource: water. Traditional car washes can use up to 100
              gallons of water per wash, contributing to water scarcity
              concerns. In contrast, waterless methods require minimal water,
              typically just a few ounces for a single vehicle, reducing overall
              water consumption and easing the strain on local water supplies.
            </p>
          </div>
          <div>
            <img src={img} alt="img" />
          </div>
        </section>
        {/* ==========Videos section========= */}
        <div>
          <h2 className="md:text-5xl text-4xl text-center my-14 md:my-6 text-blue-950 font-extrabold">Why To Choose Waasho</h2>
          <div className="grid md:grid-cols-2 grid-cols-1 justify-evenly md:gap-14 md:px-14 px-6">
            <div className="relative z-0">
              <video controls controlsList="nodownload" className="border">
                <source src={englishVideo} />
              </video>
              {/* <button className="absolute grid place-items-center md:text-2xl text-center md:top-1/3 top-16 sm:top-24  left-[45%] rounded-full p-4 bg-indigo-950 text-white duration-300 hover:bg-blue-800 z-50">
                  <FaPlay />
                </button> */}
                {/* <div className="fixed left-0 top-0 h-screen w-full z-[999] bg-black">
                <video controls controlsList="nodownload" className="border">
                <source src={englishVideo} />
              </video>
                </div> */}
              <h2 className="md:text-2xl text-xl font-bold text-center my-3 text-slate-800">
                Short Video On Waasho in English
              </h2>
            </div>
            <div className="relative -z-10">
              <video controls controlsList="nodownload" className="border">
                <source src={hindiVideo} />
              </video>
              {/* <button className="absolute grid place-items-center md:text-2xl text-center md:top-1/3 top-16 sm:top-24  left-[45%] rounded-full p-4 bg-indigo-950 text-white duration-300 hover:bg-blue-800 z-50">
                  <FaPlay />
                </button> */}
              <h2 className="md:text-2xl text-xl font-bold text-center my-3 text-slate-800">
                Short Video On Waasho in Hindi
              </h2>
            </div>
          </div>
        </div>

        <section className=" md:px-14 px-4 py-8 statistics-banner">
          <div>
            <h2 className="md:text-4xl text-2xl font-extrabold text-blue-00 my-8">
              Statistics
            </h2>
            <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-8 mx-auto">
              <StatisticCard
                img={teamImg}
                number={"45,000"}
                desc={"Satisfied Customers"}
              />
              <StatisticCard
                img={carsDelivereImg}
                number={"120,000"}
                desc={"Sessions Delivered"}
              />
              <StatisticCard
                img={waterdropImg}
                number={"50"}
                desc={"Lakhs ltrs Water Saved"}
              />
              <StatisticCard
                img={indiaImg}
                number={"6"}
                desc={"Presence in Cities in India"}
              />
            </div>
          </div>
        </section>

        
      </section>
      <Footer />
    </>
  );
};

export default Reviews;
