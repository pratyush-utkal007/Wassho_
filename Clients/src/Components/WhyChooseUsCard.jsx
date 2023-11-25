import React from 'react'
import PropTypes from 'prop-types';

const WhyChooseUsCard = ({img, title}) => {
  return (
    <>
        <div className="WhyChooseUsCard shadow-xl rounded-xl sm:w-[350px] md:w-auto mx-auto">
            <div className="img-wrapper-why-choose-wrapper overflow-hidden">
                <img src={img} alt="" />
            </div>
            <div className="text-wrapper bg-white text-center">
                <h2 className='text-2xl font-bold p-8 text-black'>{title}</h2>
            </div>
        </div>
    </>
  )
}

WhyChooseUsCard.propTypes = {
  img: PropTypes.string.isRequired, 
  title: PropTypes.string.isRequired, 
};

export default WhyChooseUsCard