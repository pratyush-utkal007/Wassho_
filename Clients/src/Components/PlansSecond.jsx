import React, { useState } from "react";
import PropTypes from "prop-types"; // Import PropTypes
import PlanCard from "./PlanCard";
import BookingForm from "../Components/BookingForm";

const Plans = ({ vehicle }) => {
  const [selectedPlan, setSelectedPlan] = useState(null);

  // Function to handle plan selection
  const handleSecondPlanSelection = (plan) => {
    setSelectedPlan(plan);
  };

  return (
    <>
      <section className="plans-wrapper max-w-[1100px] mx-auto p-2">
        <div className="grid md:grid-cols-3 grid-cols-1 gap-8 place-items-center">
          {!selectedPlan && (
            <>
              <PlanCard
                borderColor={"slate"}
                name={"Silver"}
                price={"399"}
                duration={"One Time Service"}
                details={[
                  "1 Time Exterior Cleaning Service",
                  "1 Time Interior Cleaning Service",
                  "1 Time Interior Restore Polish Service",
                  "1 Time Tires Cleaning Service",
                ]}
                onSelect={handleSecondPlanSelection}
              />
              <PlanCard
                borderColor={"yellow"}
                name={"Gold"}
                price={"899"}
                duration={"Monthly Alternate Service"}
                details={[
                  "12 day Exterior Cleaning Service",
                  "12 day Tires Cleaning Service",
                  "2 day Interior Cleaning Service",
                  "2 day Interior Restore Polish Service",
                ]}
                onSelect={handleSecondPlanSelection}
              />
              <PlanCard
                borderColor={"cyan"}
                name={"Diamond"}
                price={"1999"}
                duration={"Monthly Service"}
                details={[
                  "24 day Exterior Cleaning Service",
                  "24 day Tires Cleaning Service",
                  "4 day Interior Cleaning Service",
                  "4 day Interior Restore Polish Service",
                ]}
                onSelect={handleSecondPlanSelection}
              />
            </>
          )}
        </div>
      </section>
      {selectedPlan && <BookingForm vehicle={vehicle} plans={selectedPlan} />}
    </>
  );
};

// PropTypes validation for the 'vehicle' prop
Plans.propTypes = {
  vehicle: PropTypes.object.isRequired, // Ensure 'vehicle' is an object and is required
};

export default Plans;
