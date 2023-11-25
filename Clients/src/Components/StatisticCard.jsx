import React from "react";
import PropTypes from "prop-types";

const StatisticCard = ({ img, number, desc }) => {
  return (
    <>
      <div className="p-8 shadow-lg rounded-md text-center">
        <div className="w-40 h-40 p-4 my-4 mx-auto">
          <img src={img} alt="img" className="mx-auto" />
        </div>
        <p className="md:text-4xl text-2xl font-extrabold text-black">
          {number}
        </p>
        <p className="md:text-xl text-lg font-bold text-slate-700 mt-4">
          {desc}
        </p>
      </div>
    </>
  );
};
// Add PropTypes validation for your props
StatisticCard.propTypes = {
  img: PropTypes.string.isRequired, 
  number: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired, 
  desc: PropTypes.string.isRequired, 
};

export default StatisticCard;
