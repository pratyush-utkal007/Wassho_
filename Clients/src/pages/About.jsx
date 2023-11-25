import Footer from "../Components/Footer";
import React, { useEffect } from "react";
import Header from "../Components/Header";
import Bredcrumb from "../Components/Bredcrumb";
import SaveMessageBanner from "../Components/SaveMessageBanner";

import aboutBanner from "../assets/about-banner.png";
import BookingNotifier from "../Components/BookingNotifier";
import ScrollToTop from "../Components/ScrollToTop";

const About = () => {

  useEffect(()=>{
   document.title = "Waasho - About" 
  })

  return (
    <>
    <ScrollToTop/>
    <BookingNotifier/>
      <Header />
      <Bredcrumb page={"About"} />
      <section className="about">
        <div className="px-6">
          <SaveMessageBanner />
        </div>

        <div className="md:px-14 py-2 px-6">
          <h2 className="md:text-5xl text-3xl text-blue-950 font-sans font-bold my-4 text-center">
          Welcome To <span className="md:text-6xl text-3xl text-sky-500">Waasho</span> Premium Car Care Company.
          </h2>
          <p className="text-blue-900 md:text-2xl text-lg"><em>&#34;Say Goodbye to Wasting Water: Discover the Power of{" "}
            <span className="font-bold text-sky-600">Waterless</span> Car
            Cleaning!&#34;</em></p>
          <p className="text-lg">
             With our revolutionary{" "}
            <span className="font-bold text-sky-600">waterless</span> car
            cleaning technology, you can finally bid farewell to the wasteful
            practice of traditional car washing. We Deliver a more sustainable
            and <span className="text-green-600 font-bold">eco - friendly</span> way to care for your vehicle. Our innovative
            solutions harness cutting-edge cleaning agents that require no
            water, yet they deliver a pristine, showroom-worthy shine. By
            choosing <span className="font-bold text-sky-600">waterless</span>{" "}
            car cleaning, you&#39;re not only preserving this precious resource but
            also saving time and energy. It&#39;s time to make a positive impact on
            both your car and the <span className="text-green-600 font-bold">environment</span> - all while enjoying the
            incredible convenience and effectiveness of our{" "}
            <span className="font-bold text-sky-600">waterless</span> cleaning
            products. Join the movement and experience the future of car care
            today!
          </p>
        </div>

        <div className="grid md:grid-cols-2 grid-cols-1 gap-8 md:my-10 my-6 md:px-16 px-6">
          <div className="left">
            <p className="text-xl font-medium text-sky-600 relative after:content-[''] after:h-[2px] after:w-14 after:bg-blue-500 after:absolute after:top-1/2 after:ms-1">
              About Waasho
            </p>
            <h2 className="md:text-4xl text-2xl font-semibold my-2 text-cyan-950">
              We&#39;re The Leading{" "}
              <span className="font-bold text-sky-600">Waterless</span> Carwash
              Company
            </h2>
          </div>
          <div className="right md:col-span-2">
            <p className="text-blue-950 text-3xl mb-8">
              We have 05+ years of experiences for give you Excellent quality
              results.
            </p>
            <p className="text-slate-600 text-lg">
              We are the premier{" "}
              <span className="font-bold text-sky-600">Waterless</span> Carwash
              Company, setting the industry standard for eco-friendly automotive
              care. With a commitment to <span className="text-green-400 font-semibold">environmental</span> sustainability and a
              passion for impeccable car detailing, we have become the trusted
              choice for car owners worldwide. Our innovative{" "}
              <span className="font-bold text-sky-600">waterless</span>{" "}
              technology not only conserves precious resources but also delivers
              a showroom shine without harming the planet.
            </p>
            <p className="text-lg my-2 text-slate-600">
            Our  <span className="font-bold text-sky-600">waterless</span> car wash company is dedicated to revolutionizing the way vehicles are cleaned and maintained. With a strong commitment to <span className="text-green-400 font-semibold">environmental</span> sustainability, we offer a convenient and eco-friendly solution to car cleaning. Our advanced  <span className="font-bold text-sky-600">waterless</span> car wash products not only save thousands of gallons of water but also deliver exceptional cleaning results, leaving your vehicle looking pristine without harming the planet. Our team of skilled professionals is passionate about providing top-notch service to our customers, ensuring their cars are not only spotless but also contributing to a greener future. Join us in the journey towards a cleaner, more sustainable automotive industry.
            </p>
          </div>
        </div>
      </section>
      <div className="my-2">
        <img src={aboutBanner} alt="" />
      </div>
      <Footer />
    </>
  );
};

export default About;
