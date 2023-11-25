import React from 'react';
import PropTypes from 'prop-types';

const ProblemCard = ({ img, title, desc }) => {
  return (
    <div className="problem-card overflow-hidden shadow-lg bg-white">
      <div className='problem-img h-40 overflow-hidden'>
        <img src={img} alt="img" className=''/>
      </div>
      <div className='text-wrapper text-center p-2'>
        <h2 className='text-xl font-bold text-blue-600'>{title}</h2>
        <p className='text-slate-600 text-[0.9rem]'>{desc}</p>
      </div>
    </div>
  );
}

// PropTypes validation for the component's props
ProblemCard.propTypes = {
  img: PropTypes.string.isRequired, // Example: "path_to_your_image.jpg"
  title: PropTypes.string.isRequired, // Example: "Title Here"
  desc: PropTypes.string.isRequired, // Example: "Description Here"
};

export default ProblemCard;
