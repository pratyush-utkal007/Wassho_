import React from 'react';
import PropTypes from 'prop-types'; // Import PropTypes
import { Link } from 'react-router-dom';

const Button = ({ text, url }) => {
  return (
    <>
      <Link to={`${url}`}>
        <button className="px-3 py-1 rounded-lg bg-blue-500 text-white duration-300 hover:bg-white hover:text-sky-400 border-sky-500 border my-3">
          {text}
        </button>
      </Link>
    </>
  );
};

// Add PropTypes validation for your props
Button.propTypes = {
  text: PropTypes.string.isRequired, // Ensure 'text' is a string and is required
  url: PropTypes.string.isRequired, // Ensure 'url' is a string and is required
};

export default Button;
