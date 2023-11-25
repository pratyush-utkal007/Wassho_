import React from 'react';
import PropTypes from 'prop-types'; // Import PropTypes

const Cities = ({ img, cityname }) => {
  return (
    <>
      <div className='mx-auto'>
        <div className='overflow-hidden text-center mx-auto h-fit'>
          <img src={img} alt="img" className='w-60' />
        </div>
        <div>
          <h1 className='text-xl font-bold my-3 text-center'>{cityname}</h1>
        </div>
      </div>
    </>
  );
};

// Add PropTypes validation for your props
Cities.propTypes = {
  img: PropTypes.string.isRequired, // Ensure 'img' is a string and is required
  cityname: PropTypes.string.isRequired, // Ensure 'cityname' is a string and is required
};

export default Cities;
