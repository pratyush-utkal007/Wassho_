import BookButton from "./BookButton"
import React from "react"
import PropTypes from 'prop-types'; 

const ServicePlan =({icon, title})=>{
    return(
        <>
        <div className="shadow-lg md:p-4 p-2 max-w-[350px] duration-300 hover:-translate-y-5">
            <div className=" w-[80px]">
            <img src={icon} alt="img" />
            </div>

            <div>
                <h2 className="text-xl font-semibold">{title}</h2>
                <div className="mt-8 mb-3">
                <BookButton/>
                </div>
            </div>
        </div>
        </>
    )
}
ServicePlan.propTypes = {
    icon: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
  };

export default ServicePlan