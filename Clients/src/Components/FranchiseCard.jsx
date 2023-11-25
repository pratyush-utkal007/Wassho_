import React from "react";
import PropTypes from "prop-types"; // Import PropTypes

const FranchiseCard = ({ no, text }) => {
  return (
    <div className="flex gap-2 items-start shadow-lg p-6 rounded-sm hover:scale-105 duration-300">
      <div className="text-2xl border flex justify-center items-center w-[20px] h-[20px] rounded-full p-6">
        <span>{no}</span>
      </div>
      <div>
        <p className="text-lg font-semibold text-black">{text}</p>
      </div>
    </div>
  );
};

// Add PropTypes validation for your props
FranchiseCard.propTypes = {
  no: PropTypes.string.isRequired, // Ensure 'no' is a number and is required
  text: PropTypes.string.isRequired, // Ensure 'text' is a string and is required
};

export default FranchiseCard;
