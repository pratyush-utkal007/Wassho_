import React, { useState } from "react";
import { Link } from "react-router-dom";
import { ImLocation } from "react-icons/im";
import { MdCall } from "react-icons/md";
import { AiOutlineMail } from "react-icons/ai";

import facebook from "../assets/facebook.png";
import instagram from "../assets/instagram.png";
import whatsapp from "../assets/whatsapp.png";
import { FaArrowRight } from "react-icons/fa";
import Logo from "../assets/waasho-logo-1.png";
import {toast} from 'react-toastify'

import "../App.css";

const Footer = () => {
const [subscriber,setSubscriber] = useState("")

  const handleSubmit = async (e) =>{
    e.preventDefault();
    try {
      await fetch(`${process.env.REACT_APP_API}/subscribe`, {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          subscriber
        }),
      }).then((response) => {
        if (response.status === 200) {
          toast.success("Subscribed Successfully!", {
            position: toast.POSITION.BOTTOM_RIGHT,
          });
      setSubscriber("")
        } else {
          console.log("can not send message");
          toast.error("Something went wrong !", {
            position: toast.POSITION.BOTTOM_LEFT,
          });
        }
      });
    } catch (error) {
      console.error("sending failed:", error);
    }


  }

  return (
    <>
      <footer className="footer-section">
        <div className="footer-section grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 md:p-6 py-3 px-6">
          <div>
            <div className="logo-wrapper my-6">
              <img src={Logo} alt="logo" className="w-48 mx-auto" />
              <h2 className="text-white font-bold md:text-2xl text-xl text-center my-4">
                India&#39;s <span className="text-sky-400">No. 1</span> Waterless
                Car Wash Company
              </h2>
            </div>

            <div className="social-links flex gap-4 justify-center">
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
          <div className="md:mt-20 mt-3">
            <h2 className="md:text-2xl text-xl font-extrabold text-white">
              Quick Links
            </h2>
            <div className="inline-flex flex-col gap-1 text-slate-400 mt-4 ">
              <Link to={"/"} className="duration-500 hover:text-white text-lg md:text-xl">
                Home
              </Link>
              <Link to={"/booking"} className="duration-500 hover:text-white text-lg md:text-xl">
                Online Booking
              </Link>
              <Link to={"/services"} className="duration-500 hover:text-white text-lg md:text-xl">
                Services
              </Link>
              <Link to={"/franchise"} className="duration-500 hover:text-white text-lg md:text-xl">
                Franchise
              </Link>
              <Link to={"/about"} className="duration-500 hover:text-white text-lg md:text-xl">
                About
              </Link>
              <Link to={"/contact"} className="duration-500 hover:text-white text-lg md:text-xl">
                Contact us
              </Link>
            </div>
          </div>
          <div className="md:mt-20 mt-2">
            <h2 className="md:text-2xl text-xl font-extrabold text-white">
              Contact
            </h2>
            <div className="inline-flex flex-col gap-2 mt-4">
              <Link className="text-slate-400 duration-500 hover:text-white text-lg">
                <ImLocation className="inline text-orange-500 text-xl font-bold me-1" />
                <span>
                flat no. 502 GCC Club Rd, Wing-A, Hatkesh Udhog Nagar, Mira Road
                East, Mira Bhayandar, Maharashtra 401107
                </span>
              </Link>
              <Link to={"mailto:waashocare@gmail.com"} className="text-slate-400 duration-500 hover:text-white text-lg">
                <AiOutlineMail className="inline text-orange-500 text-xl font-bold me-1" />
                <span>waashocare@gmail.com</span>
              </Link>
              <Link to={"tel:+918926136363"} className="text-slate-400 duration-500 hover:text-white text-lg">
                <MdCall className="inline text-orange-500 text-xl font-bold me-1" />
                <span>+91 89261 36363</span>
              </Link>
            </div>
          </div>
          <div className="md:mt-20 mt-3">
            <h2 className="md:text-2xl text-xl font-extrabold text-white">
              Newsletter
            </h2>
            <div>
              <p className="text-lg text-slate-400 mt-4">
                Subscribe to our newsletter for daily new updates.
              </p>
              <form onSubmit={handleSubmit}>
                <input
                  type="text"
                  name="email"
                  id="email1"
                  placeholder="Email"
                  className="p-3 outline-0 mt-2"
                  value={subscriber}
                  required
                  onChange={(e)=>setSubscriber(e.target.value)}
                />
                <button className="bg-blue-500 text-white p-3 font-semibold mt-4">
                  Submit <FaArrowRight className="inline" />
                </button>
              </form>
            </div>
          </div>
        </div>
        <div className="bottom-footer flex md:gap-8 flex-wrap items-center bg-[#02489d] px-1 md:w-[56%] w-full">
          <p className="text-slate-400 md:text-[0.8rem] text-[0.6rem]">
            Copyright © 2023 All Rights Reserved. Developed By DIGITAL DETA
          </p>
          <div>
            <Link className="text-white text-[0.8rem] font-medium ">
              Terms & Condition
            </Link>
            <Link className="text-white text-[0.8rem] font-medium mx-2">
              Privacy Policy
            </Link>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
