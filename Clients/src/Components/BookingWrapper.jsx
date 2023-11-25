import React from 'react'
import Button from './Button'

const BookingWrapper = () => {
  return (
    <>
    <section className="booking-wrapper bg-orange-500 text-white py-24">
        <div className="flex items-center justify-center flex-wrap md:gap-10">
            <h2 className='md:text-4xl text-2xl font-bold text-center'>Easy Online Carwash Booking System</h2>
            <Button text={'Book Appointment'}/>
        </div>
    </section>
    </>
  )
}

export default BookingWrapper