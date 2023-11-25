import React from 'react'
import PropTypes from 'prop-types';

const VehicleTypeCard = ({img, title, price, onSelect}) => {
  return (
    <>
     <div className="bg-white rounded-2xl border shadow-lg px-3 pb-6 duration-500 hover:shadow-2xl">
        <div className="icon-wrapper">
          <img src={img} alt="icon" className="" />
        </div>
        <div className="text-wrapper">
          <h2 className="text-lg font-extrabold my-2 text-blue-900">{title}</h2>
          <p className="text-lg text-slate-400 my-1">Starting at:</p>
          <p className="font-bold text-xl mb-4">₹ {price} /-</p>
          <button onClick={() => onSelect({ img, title, price })} className='bg-blue-500 text-white px-3 py-2 rounded-lg float-right duration-500 hover:bg-blue-900'>View All Plans</button>
        </div>
      </div>
    </>
  )
}
VehicleTypeCard.propTypes = {
  img: PropTypes.string.isRequired, 
  title: PropTypes.string.isRequired,
  price: PropTypes.string,
  onSelect: PropTypes.func.isRequired,
};

export default VehicleTypeCard