import VehicleTypeCard from "./VehicleTypeCard";
import hatchback from "../assets/hatchback.png";
import sedan from "../assets/sedan-car.png";
import suv from "../assets/suv-car.png";
import lamborghini from "../assets/lamborghini-car.png";
import React from "react";
import PropTypes from "prop-types";

const Vehicle = ({ onSelect, onSecSelect }) => {
  return (
    <>
      <div className="grid md:grid-cols-2 lg:grid-cols-4 grid-cols-1 gap-8">
        <VehicleTypeCard
          img={hatchback}
          title={"HATCHBACK"}
          price={"299"}
          onSelect={onSelect}
        />
        <VehicleTypeCard
          img={sedan}
          title={"SEDAN"}
          price={"299"}
          onSelect={onSelect}
        />
        <VehicleTypeCard
          img={suv}
          title={"SUV"}
          price={"399"}
          onSelect={onSecSelect}
        />
        <VehicleTypeCard
          img={lamborghini}
          title={"PREMIUM"}
          price={"399"}
          onSelect={onSecSelect}
        />
      </div>
    </>
  );
};


Vehicle.propTypes = {
  onSelect: PropTypes.func.isRequired,
  onSecSelect: PropTypes.func.isRequired,
};

export default Vehicle;
