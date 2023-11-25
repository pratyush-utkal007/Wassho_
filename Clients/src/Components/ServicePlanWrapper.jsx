import React from 'react'
import ServicePlan from './ServicePlan'
import smallCar from '../assets/small-car.png'
import mediumCar from '../assets/medium-car.png'
import largeCar from '../assets/large-car.png'

const ServicePlanWrapper = () => {
  return (
    <>
    <div className='grid md:grid-cols-3 grid-cols-1 gap-8'>
        <ServicePlan title={"Small Car"} icon={smallCar}/>
        <ServicePlan title={"Medium Car"} icon={mediumCar}/>
        <ServicePlan title={"Large Car"} icon={largeCar}/>
    </div>
    </>
  )
}

export default ServicePlanWrapper