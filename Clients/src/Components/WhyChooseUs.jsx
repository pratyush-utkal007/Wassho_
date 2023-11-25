import React from 'react'
import WhyChooseUsCard from './WhyChooseUsCard'
import SectionHeader from './SectionHeader'
import professional from '../assets/professional-staff.png'
import doorStep from '../assets/doorstep.png'
import organic from '../assets/organic.png'
import affordable from '../assets/affordable-price.png'
import '../App.css'

const WhyChooseUs = () => {
  return (
    <>
    <div className='why-choose-us-wrapper bg-sky-700 py-8 sm:px-14 px-6 lg:h-80 md:mb-48 mb-6'>
       <SectionHeader text={"Why You Choose Us"} textColor={"white"}/>
        <div className='grid lg:grid-cols-4 grid-cols-1 gap-14 mt-[70px]'>
        <WhyChooseUsCard img={professional} title={"Professional Staffs"}/>
        <WhyChooseUsCard img={doorStep} title={"24/7 Doorstep Service"}/>
        <WhyChooseUsCard img={organic} title={"Organic Products"}/>
        <WhyChooseUsCard img={affordable} title={"Affordable Prices"}/>
        </div>
    </div>
    </>
  )
}

export default WhyChooseUs