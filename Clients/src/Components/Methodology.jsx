import React from 'react'
import MethodologyCard from './MethodologyCard'
import methodology1 from '../assets/methodology-1.png'
import methodology2 from '../assets/methodology-2.png'
import methodology3 from '../assets/methodology-3.png'

const Methodology = () => {
  return (
    <>
    <div className='md:px-40 md:pt-14 md:py-10 py-4'>
     
      <div className='grid md:grid-cols-4 grid-cols-1 gap-14 place-items-center'>
      <div className='relative'>
        <h2 className='md:text-3xl text-xl font-bold text-white'>
        Waterless Car Cleaning Methodology
        </h2>
      </div>
        <MethodologyCard img={methodology1} text={"The product on the surface of the car"}/>
        <MethodologyCard img={methodology2} text={"The dirt off with a microfiber towel"}/>
        <MethodologyCard img={methodology3} text={"Buff the car with microfiber towel for a shine"}/>
      </div>
    </div>
    </>
  )
}

export default Methodology