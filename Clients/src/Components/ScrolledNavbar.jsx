import React, { useState } from 'react'
import Logo from "../assets/white_blue__logo_2.png";
import { Link, NavLink } from "react-router-dom";
import { TfiMenu } from "react-icons/tfi";
import { FaFacebookF, FaPinterestP, FaWhatsapp } from "react-icons/fa";
import { AiOutlineInstagram } from "react-icons/ai";
import { GrFormClose } from "react-icons/gr";
import { useAuth } from './context/auth';


const ScrolledNavbar = () => {
  const [show, setShow] = useState(false);
  const [auth, setAuth] =useAuth()

  const handleLogout = ()=>{
    setAuth({
      ...auth, user:null, token:''
    })
    localStorage.removeItem('token')
  }

  return (
    <>
      <nav>
        <div className="md:px-14 max-w-full md:h-24 h-20 bg-white shadow-md mx-auto flex items-start z-10">
          <div className="logo-container bg-[#02489D] lg:h-[140px] h-full md:w-[200px] w-[400px] inline-block">
            <Link to={"/"}>
              {" "}
              <img src={Logo} alt="logo" className="p-2 w-[130px] lg:w-[150px] relative bottom-6" />
            </Link>
          </div>
          <div className="navlist p-8 w-full flex justify-end">
            <ul className="lg:flex hidden gap-6">
              <li className="navlink text-lg font-medium">
                <NavLink to={"/"}>Home</NavLink>
              </li>
              <li className="navlink text-lg font-medium">
                <NavLink to={"/booking"}>Booking</NavLink>
              </li>
              <li className="navlink text-lg font-medium">
                <NavLink to={"/services"}>Services</NavLink>
              </li>
              <li className="navlink text-lg font-medium">
                <NavLink to={"/about"}>About</NavLink>
              </li>
              <li className="navlink text-lg font-medium">
                <NavLink to={"/contact"}>Contact</NavLink>
              </li>
            </ul>
            <div className="hidden lg:block ps-1 ms-2 border-s-2">
            {
                !auth.user ? (
                  <>
                  <Link
                to={"/login"}
                className="text-lg m-2 rounded-md bg-blue-600 px-3 py-2 text-white duration-300 hover:bg-black"
              >
                Login
              </Link>
              <Link
                to={"/register"}
                className="text-lg m-2 rounded-md bg-blue-600 px-3 py-2 text-white duration-300 hover:bg-black "
              >
                Register
              </Link>
                  </>
                ) : (
                  <>
                   <Link
                   onClick={handleLogout}
                to={"/login"}
                className="text-lg m-2 rounded-md bg-blue-600 px-3 py-2 text-white duration-300 hover:bg-black "
              >
                Logout
              </Link>
                  </>
                )
              }
            </div>
            {/* ======humbergur====== */}
            <button
              className="lg:hidden block text-black float-right"
              onClick={() => setShow(true)}
            >
              <TfiMenu className="text-black text-xl" />
            </button>

            {/* =============Mobile navbar========= */}

            <div
              className={
                show
                  ? "fixed bg-[#0e1b46fa] w-60 h-screen top-0 left-0 overflow-auto lg:hidden block duration-500 z-50"
                  : "fixed bg-[#0e1b46fa] w-60 h-screen top-0 -left-[100%] overflow-auto lg:hidden block z-50 duration-500"
              }
            >
              <span className="absolute top-5 right-3 text-white z-50">
                <button onClick={() => setShow(false)}>
                  <GrFormClose className="text-4xl font-semibold text-white" />
                </button>
              </span>
              <div className="w-60 inline-block">
                <Link to={"/"}>
                  {" "}
                  <img src={Logo} alt="logo" className="lg:w-44 w-32 ps-4" />
                </Link>
              </div>
              <hr className="my-3" />
              <ul className="lg:hidden flex flex-col gap-6 ps-6 text-white">
                <li className="navlink text-lg font-medium ">
                  <NavLink to={"/"}>Home</NavLink>
                </li>
                <li className="navlink text-lg font-medium">
                  <NavLink to={"/booking"}>Booking</NavLink>
                </li>
                <li className="navlink text-lg font-medium">
                  <NavLink to={"/services"}>Services</NavLink>
                </li>
                <li className="navlink text-lg font-medium">
                  <NavLink to={"/about"}>About</NavLink>
                </li>
                <li className="navlink text-lg font-medium">
                  <NavLink to={"/contact"}>Contact</NavLink>
                </li>
              </ul>
              <div className="inline-flex text-center flex-col lg:hidden ms-2 mt-3">
              {
                !auth.user ? (
                  <>
                  <Link
                to={"/login"}
                className="text-lg m-2 rounded-md bg-blue-600 px-3 py-2 text-white duration-300 hover:bg-black"
              >
                Login
              </Link>
              <Link
                to={"/register"}
                className="text-lg m-2 rounded-md bg-blue-600 px-3 py-2 text-white duration-300 hover:bg-black "
              >
                Register
              </Link>
                  </>
                ) : (
                  <>
                   <Link
                   onClick={handleLogout}
                to={"/login"}
                className="text-lg m-2 rounded-md bg-blue-600 px-3 py-2 text-white duration-300 hover:bg-black "
              >
                Logout
              </Link>
                  </>
                )
              }
              </div>
              <div className="social-links flex gap-3 text-lg items-center  text-white ps-3 mt-4">
                <Link>
                  <FaFacebookF className="hover:text-white hover:scale-105 duration-300" />
                </Link>
                <Link>
                  <AiOutlineInstagram className="hover:text-white hover:scale-105 duration-300" />
                </Link>
                <Link>
                  <FaPinterestP className="hover:text-white hover:scale-105 duration-300" />
                </Link>
                <Link>
                  <FaWhatsapp className="hover:text-white hover:scale-105 duration-300" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </>
  )
}

export default ScrolledNavbar