import React from "react";
import { GiCheckMark } from "react-icons/gi";
import { useAuth } from "./context/auth";
import { useLocation, useNavigate } from 'react-router-dom';
import PropTypes from 'prop-types';

const PlanCard = ({ borderColor, name, duration, price, details, onSelect }) => {
  const [auth] = useAuth();
  const navigate = useNavigate()
  const location = useLocation()

  const handleLoginClick = () => {
    navigate('/login', {
      state: location.pathname
    })
  }

  return (
    <div
      className={`plan-card border-2 shadow-lg md:p-4 p-2 rounded-lg max-w-[400px] border-${borderColor}-400 duration-500 hover:-translate-y-6`}
    >
      <div className="heading text-center">
        <h1 className="md:text-2xl text-xl font-extrabold">{name}</h1>
        <p className="font-bold md:text-xl text-lg my-3"> Starting at: ₹ {price} /-</p>
        <p className="text-slate-400">{duration}</p>
      </div>
      <div className="details-wrapper ps-4">
        {details.map((elem, index) => {
          return (
            <p key={index} className="text-lg mt-1">
              <GiCheckMark className="inline text-blue-600" />
              <span>{elem}</span>
            </p>
          );
        })}
      </div>
      <div className="flex justify-center mt-6">
        {
          !auth?.user ? (
            <>
              <button onClick={handleLoginClick} className='bg-blue-500 text-white px-3 py-2 rounded-lg float-right duration-500 hover:bg-blue-900'>Login to Proceed</button>
            </>
          ) : (
            <>
              <button type="submit" onClick={() => onSelect({ name, duration, price, details })} className={`bg-blue-700 text-white text-lg font-semibold px-4 py-2 rounded-3xl duration-500 hover:bg-blue-900 hover:text-white`}>
                Subscribe
              </button>
            </>
          )
        }
      </div>
    </div>
  );
};

// Add PropTypes validation for your props
PlanCard.propTypes = {
  borderColor: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  duration: PropTypes.string.isRequired,
  price: PropTypes.string.isRequired,
  details: PropTypes.arrayOf(PropTypes.string).isRequired,
  onSelect: PropTypes.func.isRequired,
};

export default PlanCard;
