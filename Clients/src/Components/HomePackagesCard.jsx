import React from 'react';
import PropTypes from 'prop-types'; // Import PropTypes

const HomePackagesCard = ({ icon, title, desc }) => {
  return (
    <>
      <div className='package-details text-center bg-transparent p-4 mx-auto w-80 md:w-auto'>
        <div className="package-logo w-32 h-32 mx-auto overflow-hidden">
          <img src={icon} alt="" />
        </div>
        <div className="package-detail-wrapper">
          <h2 className='text-black text-xl font-bold my-2'>{title}</h2>
          <p className='text-slate-600 text-lg'>{desc}</p>
        </div>
      </div>
    </>
  );
};

// Add PropTypes validation for your props
HomePackagesCard.propTypes = {
  icon: PropTypes.string.isRequired, // Ensure 'icon' is a string and is required
  title: PropTypes.string.isRequired, // Ensure 'title' is a string and is required
  desc: PropTypes.string.isRequired, // Ensure 'desc' is a string and is required
};

export default HomePackagesCard;
