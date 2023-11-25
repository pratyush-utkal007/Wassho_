import React from 'react';
import PropTypes from 'prop-types'; // Import PropTypes

const MethodologyCard = ({ img, text }) => {
  return (
    <>
      <div>
        <div className='my-2'>
          <img src={img} alt="img" />
        </div>
        <div>
          <h2 className='text-white my-2'>{text}</h2>
        </div>
      </div>
    </>
  );
};

// Add PropTypes validation for your props
MethodologyCard.propTypes = {
  img: PropTypes.string.isRequired, // Ensure 'img' is a string and is required
  text: PropTypes.string.isRequired, // Ensure 'text' is a string and is required
};

export default MethodologyCard;
