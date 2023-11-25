import React, { useEffect, useState } from "react";
import Footer from "../Components/Footer";
import Breadcrumb from "../Components/Bredcrumb";
import Vehicle from "../Components/Vehicle";
import Header from '../Components/Header'
import Plans from "../Components/Plans";
import PlansSecond from "../Components/PlansSecond";
import ScrollToTop from "../Components/ScrollToTop";

const Booking = () => {
  const [selectedVehicle, setSelectedVehicle] = useState(null);
  const [selectedVehicles, setSelectedVehicles] = useState(null);

  // Function to handle vehicle selection
  const handleVehicleSelection = (vehicle) => {
    setSelectedVehicle(vehicle);
  };

  const handleVehicleSelections = (vehicle) => {
    setSelectedVehicles(vehicle);
  };
  useEffect(()=>{
    document.title = "Waasho - Booking" 
   })

  return (
    <>
    <ScrollToTop/>
      <Header />
      <div>
        <Breadcrumb page={"Booking Service"} />
      </div>
      <div className="mb-8 md:px-10 px-2">

      <section className="booking md:mt-20 my-4 px-4">
        <div className="Choose-car">
          <div className="vehicles">
            {!selectedVehicle && !selectedVehicles && <Vehicle onSelect={handleVehicleSelection} onSecSelect={handleVehicleSelections} />}
          </div>
        </div>
      </section>


      {/* Conditionally render the PricePlan component based on the selected vehicle */}
      {selectedVehicle && <Plans vehicle={selectedVehicle} />}
      {selectedVehicles && <PlansSecond vehicle={selectedVehicles} />}
      </div>

      <Footer />
    </>
  );
};

export default Booking;
