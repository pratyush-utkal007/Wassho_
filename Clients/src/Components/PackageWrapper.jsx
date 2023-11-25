import React from "react";
import HomePackagesCard from "./HomePackagesCard";
import logo1 from '../assets/logo1.png'
import logo2 from '../assets/logo2.png'
import logo3 from '../assets/logo3.png'
import logo4 from '../assets/logo4.png'

const PackageWrapper = () => {
  return (
    <div className="packages max-w-full md:px-8 px-3 py-4 bg-slate-200">
      <div className="mx-auto my-7">
        <h2 className="md:text-4xl text-2xl font-bold text-center mb-1">
          Our Service Process
        </h2>
        <p className="md:text-xl text-lg text-center">We have a Very Easy and Costumer friendly Process</p>
      </div>
      <div className="grid md:grid-cols-3 sm:grid-cols-2 lg:grid-cols-4">
        <HomePackagesCard
        icon={logo1}
          title={"1 - Choose Your Package"}
          desc={
            "Choose From Silver Or Gold Or Diamond Package For Your Car Wash"
          }
        />
        <HomePackagesCard
          icon={logo2}
          title={"2 -  Schedule Your Service"}
          desc={
            "Book Your Service By filling out the form on the booking page."
          }
        />
        <HomePackagesCard
          icon={logo3}
          title={"3 - Get Your Doorstep Service"}
          desc={
            "Door Step Service is Provided to you by our trained professionals"
          }
        />
        <HomePackagesCard
          icon={logo4}
          title={"4 - Pay Online or Use COD Option"}
          desc={
            "Pay Easily before or after the service by your preferred payment method"
          }
        />
      </div>
    </div>
  );
};

export default PackageWrapper;
