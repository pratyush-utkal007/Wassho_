import React, { useState } from "react";
import Logo from "../assets/waasho-logo-1.png";
import { Link, NavLink } from "react-router-dom";
import { TfiMenu } from "react-icons/tfi";
import { GrFormClose } from "react-icons/gr";
import "../App.css";
import { useAuth } from "./context/auth";

import facebook from "../assets/facebook.png";
import instagram from "../assets/instagram.png";
import whatsapp from "../assets/whatsapp.png";

const Navbar = () => {
  const [show, setShow] = useState(false);
  const [auth, setAuth] = useAuth();

  const handleLogout = () => {
    setAuth({
      ...auth,
      user: null,
      token: "",
    });
    localStorage.removeItem("token");
  };

  return (
    <>
      <nav>
        <div className="w-full bg-white shadow-md mx-auto flex items-center sticky top-0 z-40 md:pe-14 pe-4">
          <div className="logo-container md:ps-14 ps-4 py-2 md:w-96 w-[90%]">
            <Link to={"/"} className="m-0 p-0">
              <img src={Logo} alt="logo" className="ms-6 md:w-24 w-16" />
            </Link>
          </div>
          <div className="navlist w-full flex justify-end items-center pe-4 py-2">
            <ul className="lg:flex hidden gap-6">
              <li className="navlink text-xl font-medium">
                <NavLink to={"/"}>Home</NavLink>
              </li>
              <li className="navlink text-lg font-medium">
                <NavLink to={"/booking"}>Booking</NavLink>
              </li>
              <li className="navlink text-lg font-medium">
                <NavLink to={"/services"}>Services</NavLink>
              </li>
              <li className="navlink text-lg font-medium">
                <NavLink to={"/franchise"}>Franchise</NavLink>
              </li>
              <li className="navlink text-lg font-medium">
                <NavLink to={"/reviews"}>Reviews</NavLink>
              </li>
              <li className="navlink text-lg font-medium">
                <NavLink to={"/about"}>About</NavLink>
              </li>
              <li className="navlink text-lg font-medium">
                <NavLink to={"/contact"}>Contact</NavLink>
              </li>
            </ul>
            <div className="hidden lg:block ps-1 ms-2 border-s-2">
              {!auth.user ? (
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
              )}
            </div>
            {/* ======humbergur====== */}
            {
              show? <button onClick={() => setShow(false)}>
              <GrFormClose className="lg:hidden block text-black float-right text-3xl" />
            </button>:
              <button
              className="lg:hidden block text-black float-right"
              onClick={() => setShow(true)}
              >
              <TfiMenu className="text-black text-xl" />
            </button>
            }

            {/* =============Mobile navbar========= */}

            <div
              className={
                show
                  ? "fixed bg-[#0e1b46fa] w-60 h-screen top-0 left-0 overflow-auto lg:hidden block duration-500 z-50"
                  : "fixed bg-[#0e1b46fa] w-60 h-screen top-0 -left-[100%] overflow-auto lg:hidden block z-50 duration-500"
              }
            >
              <div className="w-60 inline-block">
                <Link to={"/"}>
                  {" "}
                  <img src={Logo} alt="logo" className="lg:w-44 w-28 mx-auto pt-4" />
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
                  <NavLink to={"/franchise"}>Franchise</NavLink>
                </li>
                <li className="navlink text-lg font-medium">
                  <NavLink to={"/reviews"}>Reviews</NavLink>
                </li>
                <li className="navlink text-lg font-medium">
                  <NavLink to={"/about"}>About</NavLink>
                </li>
                <li className="navlink text-lg font-medium">
                  <NavLink to={"/contact"}>Contact</NavLink>
                </li>
              </ul>
              <div className="inline-flex text-center flex-col lg:hidden ms-2 mt-3">
                {!auth.user ? (
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
                )}
              </div>
              <div className="social-links flex gap-3 text-lg items-center  text-white ps-3 mt-4 border-t py-3">
              <Link to={"https://www.facebook.com/people/Waasho-Waterless-Car-Wash/61551987690499/?mibextid=2JQ9oc"} target="_blank">
                <img src={facebook} alt="img" className="w-8" />
              </Link>
              <Link to="https://www.instagram.com/waasho.in?igshid=MzRlODBiNWFlZA%3D%3D" target="_blank">
                <img src={instagram} alt="img" className="w-8" />
              </Link>
              <Link to={"https://wa.me/918926136363"} target="_blank">
                <img src={whatsapp} alt="img" className="w-8" />
              </Link>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
