import React from "react";
import { Link } from "react-router-dom";
import mobileApp from '../assets/mobile-app.avif'
import playstore from '../assets/playstore.png'
import appstore from '../assets/appstore.png'

const MobileApp = () => {
  return (
    <>
      <section className="bg-black mt-10 md:px-8 py-8 mobile-app">
        <h2 className="md:text-4xl text-center my-8 font-bold text-white">
          Scheduling a Service Now a Click Away
        </h2>
        <div className="grid md:grid-cols-2">
          <div className="mx-auto">
            <img
              src={mobileApp}
              alt=""
              width={400}
            />
          </div>
          <div className="right text-white mx-auto px-3">
            <p className="text-xl mt-6">
              Waasho App Offers Unmatched Service Experience In Just Few Clicks.
            </p>
            <p className="my-8 font-bold md:text-2xl">Download the App</p>
            <p className="my-8 text-md">
              Waasho App Offers Unmatched Service Experience In Just Few Clicks
              . Download the App. Register and Select a Service ,Enter Pick Up
              Time and Location, We Are Done !
            </p>
            <div className="flex gap-8">
            <Link className="inline shadow-md shadow-white"><img src={playstore} alt="" /></Link>
            <Link className="inline shadow-md shadow-white"><img src={appstore} alt="" /></Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default MobileApp;
