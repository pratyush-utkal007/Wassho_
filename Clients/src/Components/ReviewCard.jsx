import React from "react";
import PropTypes from "prop-types";
import { AiFillStar } from "react-icons/ai";

const ReviewCard = ({ name, designation, review }) => {
  return (
    <>
      <div className="max-w-[550px] bg-white text-black mb-8 py-8 px-2 text-center clear-both mx-6 overflow-auto">
        <div className="items-center">
          <div className="mt-5">
            <h5 className="text-xl font-extrabold text-black my-1">{name}</h5>
            <h6 className="text-base font-semibold text-slate-500 mb-6">
              {designation}
            </h6>
          </div>
        </div>
        <div className="star mb-3">
          <AiFillStar className="text-yellow-400 text-xl inline mx-1" />
          <AiFillStar className="text-yellow-400 text-xl inline mx-1" />
          <AiFillStar className="text-yellow-400 text-xl inline mx-1" />
          <AiFillStar className="text-yellow-400 text-xl inline mx-1" />
          <AiFillStar className="text-yellow-400 text-xl inline mx-1" />
        </div>
        <div>
          <p className="text-base text-slate-800">&#34; {review} &#34;</p>
        </div>
      </div>
    </>
  );
};

// PropTypes validation for the component's props
ReviewCard.propTypes = {
  name: PropTypes.string, // Example: "John Doe"
  designation: PropTypes.string, // Example: "Customer"
  review: PropTypes.string, // Example: "This is a great product."
};

export default ReviewCard;
