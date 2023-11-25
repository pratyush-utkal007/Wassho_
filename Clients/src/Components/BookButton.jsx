
import React from 'react'
import { Link } from 'react-router-dom'

const BookButton = () => {
  return (
    <>
        <Link to={"/booking"} className='border text-xl text-slate-900 font-semibold px-4 py-2 duration-500 hover:bg-blue-800 hover:text-white'>Book Now</Link>
    </>
  )
}

export default BookButton