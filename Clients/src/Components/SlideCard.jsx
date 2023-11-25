import React from 'react'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types';


const SlideCard = ({img,text,desc}) => {
  return (
    <>
    <div className="slide z-0 w-full flex justify-center items-center text-center relative overflow-hidden">
          <img
            src={img}
            alt=""
            className="w-full h-[250px] md:h-full"
          />
          <div className="overlay bg-gradient-to-b bg-[#0b0816ad] z-10 absolute w-full h-[100%]"></div>
          <div className="container z-20 absolute text-white mx-auto max-w-[900px] px-6 text-wrapper">
            <h2 className="md:text-5xl text-2xl font-bold">
            {text}
            </h2>
            <p className="text-slate-300 md:my-6 mb-10 md:text-xl"> {desc}</p>
            <Link to="/booking" className="text-base bg-sky-600 text-white p-3 mt-10 border border-sky-500 duration-300 hover:bg-transparent">Book Now</Link>
          </div>
        </div>
    </>
  )
}
// Add PropTypes validation for your props
SlideCard.propTypes = {
  img: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  desc: PropTypes.string.isRequired,
};


export default SlideCard