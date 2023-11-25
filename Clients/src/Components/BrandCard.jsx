import React from 'react'
import '../App.css'
import PropTypes from "prop-types";

const BrandCard = ({img}) => {
  return (
    <>
    <div className='brandCards md:w-32 w-24 md:mx-12 sm:mx-4  duration-300 my-6 p-2 overflow-hidden rounded-full'>
        <div className='overflow-hidden'>
          <img src={img} alt="img" className='w-fit'/>
        </div>
    </div>
    </>
  )
}
BrandCard.propTypes = {
  img: PropTypes.string.isRequired
}

export default BrandCard