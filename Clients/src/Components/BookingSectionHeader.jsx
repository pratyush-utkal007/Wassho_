import React from 'react'

const BookingSectionHeader = ({heading, subHeading , step}) => {
  return (
    <>
     <div className="flex justify-between flex-wrap md:flex-row flex-col-reverse">
            <div className="user-details">
              <p className="text-xl font-medium text-sky-600 relative after:content-[''] after:h-[2px] after:w-14 after:bg-blue-500 after:absolute after:top-1/2 after:ms-1">
                {heading}
              </p>
              <h2 className="md:text-5xl text-2xl font-semibold mb-3 text-cyan-950">
                {subHeading}
              </h2>
            </div>
            <div className="step my-4">
              <div className="bg-blue-600 text-white md:text-4xl text-xl rounded-full md:w-20 md:h-20 w-16 h-16 grid place-items-center">
                {step}
              </div>
            </div>
          </div>
    </>
  )
}

export default BookingSectionHeader