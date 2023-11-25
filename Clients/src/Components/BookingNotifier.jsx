import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/logo1.png";

const BookingNotifier = () => {
  return (
    <>
      <div className="md:w-20 md:h-20 w-20 h-20 p-2 rounded-full overflow-auto shadow-md fixed right-6 bottom-20 z-[999] bg-blue-900 hover:opacity-100 duration-700 animate-bounce group">
        <p className="md:text-xl fixed right-[6.7rem] bottom-[4.5rem] text-white  hidden group-hover:block">Book Now !</p>
        <Link to={"/booking"}>
          <img src={logo} alt="Book Now" className="object-contain" />
        </Link>
      </div>
    </>
  );
};

export default BookingNotifier;
