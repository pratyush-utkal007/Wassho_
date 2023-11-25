import React from 'react';
import PropTypes from 'prop-types'; // Import PropTypes
import '../App.css';

const SectionHeader = ({ text, textColor }) => {
  return (
    <>
      <div className="section-heading-wrapper">
        <h2
          className={`md:text-4xl text-2xl font-bold text-center section-heading text-${textColor} after:bg-${textColor} `}
        >
          {text}
        </h2>
      </div>
    </>
  );
};

SectionHeader.propTypes = {
  text: PropTypes.string,
  textColor: PropTypes.string,
};

export default SectionHeader;
