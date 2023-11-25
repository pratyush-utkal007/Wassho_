import React, { useState } from "react";
import PropTypes from 'prop-types'; // Import PropTypes
import PlanCard from "./PlanCard";
import BookingForm from "./BookingForm";

const Plans = ({ vehicle }) => {
  const [selectedPlan, setSelectedPlan] = useState(null);

  // Function to handle plan selection
  const handlePlanSelection = (plan) => {
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
                price={"299"}
                duration={"One Time Service"}
                details={[
                  "1 Time Exterior Cleaning Service",
                  "1 Time Interior Cleaning Service",
                  "1 Time Interior Restore Polish Service",
                  "1 Time Tires Cleaning Service",
                ]}
                onSelect={handlePlanSelection}
              />
              <PlanCard
                borderColor={"yellow"}
                name={"Gold"}
                price={"799"}
                duration={"Monthly Alternate Service"}
                details={[
                  "12 day Exterior Cleaning Service",
                  "12 day Tires Cleaning Service",
                  "2 day Interior Cleaning Service",
                  "2 day Interior Restore Polish Service",
                ]}
                onSelect={handlePlanSelection}
              />
              <PlanCard
                borderColor={"cyan"}
                name={"Diamond"}
                price={"1599"}
                duration={"Monthly Service"}
                details={[
                  "24 day Exterior Cleaning Service",
                  "24 day Tires Cleaning Service",
                  "4 day Interior Cleaning Service",
                  "4 day Interior Restore Polish Service",
                ]}
                onSelect={handlePlanSelection}
              />
            </>
          )}
        </div>
      </section>
      {selectedPlan && <BookingForm vehicle={vehicle} plans={selectedPlan} />}
    </>
  );
};

// Add PropTypes validation for your props
Plans.propTypes = {
  vehicle: PropTypes.object.isRequired, // Ensure 'vehicle' is an object and is required
};

export default Plans;
