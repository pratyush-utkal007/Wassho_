import React from 'react'
import PropTypes from 'prop-types'

const FeaturesBannerCard = ({img}) => {
  return (
    <>
      <div>
        <div className='w-36 h-36'>
            <img src={img} alt="" />
        </div>
        <div className='text-xl font-bold text-center text-green-700'>
        </div>
    </div>
    </>
  )
}

FeaturesBannerCard.propTypes = {
  img: PropTypes.string.isRequired
}

export default FeaturesBannerCard