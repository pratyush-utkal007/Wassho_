import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { GiCheckMark } from "react-icons/gi";
import Bredcrumb from "../Components/Bredcrumb";
import Header from "../Components/Header";
import Footer from "../Components/Footer";
import FranchiseCard from "../Components/FranchiseCard";
import { toast } from "react-toastify";
import BookingNotifier from "../Components/BookingNotifier";
import ScrollToTop from "../Components/ScrollToTop";

const Franchise = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    city: "",
    state: "",
    address: "",
    pincode: "",
    occupation: "",
    know: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      await fetch(`${process.env.REACT_APP_API}/franchise`, {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          formData,
        }),
      }).then((res) => {
        if (res.status === 200) {
          toast.success("Enquiry sent successfully !", {
            position: toast.POSITION.BOTTOM_RIGHT,
          });
          setFormData({
            name: "",
            email: "",
            phone: "",
            city: "",
            state: "",
            address: "",
            pincode: "",
            occupation: "",
            know: "",
          });
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
    setLoading(false);
  };

  useEffect(()=>{
    document.title = "Waasho - Franchise" 
   })
  return (
    <>
    <BookingNotifier/>
    <ScrollToTop/>
      <Header />
      <Bredcrumb page={"Franchise"} />
      <div className="franchise-page md:px-14 px-6 py-6 mt-7">
        <div>
          <h1 className="md:text-5xl text-xl text-center  my-5 pb-4 font-extrabold text-blue-900">
            Join Our Doorstep Waterless Car Wash Model Today.
          </h1>
          <p className="md:text-lg text-base text-slate-600">
            <span className="text-sky-700">
              <em>
                Are you interested in starting a waterless auto cleaning
                company?{" "}
              </em>
            </span>
            Are you a business owner that cares about the environment and wants
            to offer eco-friendly car wash services while making a small
            investment yield a significant profit? More importantly, do you want
            to join a movement that aspires to completely transform the Indian
            car care market?
            <br />
            <br />
            If the answer to that question is unambiguously YES, then you&#39;ve
            found the proper site! The innovators in waterless car washing since
            2015, Waasho, present a fascinating opportunity.
            <br />
            <br />
            Water shortages are a distressingly typical occurrence in the modern
            world. Our commitment to water conservation has won us the
            allegiance of many clients because of its captivating vision and
            pragmatism. The future of car cleaning is without water.
            <br />
            with organic growth in doorstep and a track record to back it up
            Waasho is currently offering waterless auto cleaning services in
            several cities. ready to increase its footprint throughout all the
            cities in the country using the FOFO model (Franchise Owned,
            Franchise Operated). &#34;
            <br />
            <br />
            Leading publications and websites have acknowledged Waasho&#39;s
            breakthrough waterless auto cleaning method, and now is your chance
            to participate in this thrilling voyage. <br />
            <br />
            Don&#39;t wait if you&#39;re a proactive go-getter! Call us at{" "}
            <Link to="tel:+918926123232" className="text-blue-700 font-bold">
              +91 89261 23232
            </Link>{" "}
            or Mail us{" "}
            <Link
              to={"mailto:waashocare@gmail.com"}
              className="text-blue-700 font-bold"
            >
              waashocare@gmail.com
            </Link>{" "}
            and decide to follow the revolutionary path in ecologically friendly
            business using Waasho premium car care Company!
          </p>
        </div>

        <div className="grid md:grid-cols-2 grid-cols-1 gap-8 md:my-8 my-3">
          <div className="shadow-lg md:py-14 py-6 md:px-10 px-2">
            <h2 className="md:text-3xl text-xl font-extrabold text-blue-800 my-4">
              WHY PARTNER WITH WAASHO
            </h2>
            <hr className="my-6" />
            <div>
              <p className="text-base mb-3">
                <GiCheckMark className="inline me-3 text-blue-600" />
                <span>India&#39;s leading waterless car wash company</span>
              </p>
              <p className="text-base mb-3">
                <GiCheckMark className="inline me-3 text-blue-600" />
                <span>Total support to franchisees</span>
              </p>
              <p className="text-base mb-3">
                <GiCheckMark className="inline me-3 text-blue-600" />
                <span>Highly scalable and revenue driven business model</span>
              </p>
              <p className="text-base mb-3">
                <GiCheckMark className="inline me-3 text-blue-600" />
                <span>Eco-friendly innovation</span>
              </p>
              <p className="text-base mb-3">
                <GiCheckMark className="inline me-3 text-blue-600" />
                <span>Coverage in traditional and online media</span>
              </p>
              <p className="text-base mb-3">
                <GiCheckMark className="inline me-3 text-blue-600" />
                <span>Best-in-class services at affordable rates</span>
              </p>
              <p className="text-base mb-3">
                <GiCheckMark className="inline me-3 text-blue-600" />
                <span>
                  We Provide doorstep service, No garage or office required.
                </span>
              </p>
            </div>
          </div>
          <div className="shadow-lg md:py-14 py-6 md:px-10 px-2">
            <h2 className="md:text-3xl text-xl font-extrabold text-blue-800 my-4">
              WHAT IS THE CRITERIA
              <p className="text-lg text-slate-500 my-3">
                TO GET A FRANCHISE WITH WAASHO ?
              </p>
            </h2>
            <hr className="my-6" />
            <div>
              <p className="text-base mb-3">
                <GiCheckMark className="inline me-3 text-blue-600" />
                <span>
                  Any Person Male Or Female Who Has a Passion for automobiles
                  Can Become Our Franchise.
                </span>
              </p>
              <p className="text-base mb-3">
                <GiCheckMark className="inline me-3 text-blue-600" />
                <span>Should Be 18+ No Prior Experience Is Required.</span>
              </p>
              <p className="text-base mb-3">
                <GiCheckMark className="inline me-3 text-blue-600" />
                <span>
                  Housewives, College Students, Business People Or Working
                  Professionals Can Become Our Franchise.
                </span>
              </p>
              <p className="text-base mb-3">
                <GiCheckMark className="inline me-3 text-blue-600" />
                <span>
                  At Present Too We Have 19 young College Going Student Who
                  Operates Our Franchise.
                </span>
              </p>
              <p className="text-base mb-3">
                <GiCheckMark className="inline me-3 text-blue-600" />
                <span>
                  We Have House Wives, It Engineers, Doctors, Advocates,
                  Industrialists, Exporters And Many More Professionals Who Are
                  Successfully Operating Our Profitable Franchise.
                </span>
              </p>
              <p className="text-base mb-3">
                <GiCheckMark className="inline me-3 text-blue-600" />
                <span>Dedication & Long Term Vision Is The Key Factor.</span>
              </p>
            </div>
          </div>
        </div>

        <h2 className="md:text-4xl text-2xl text-blue-950 font-extrabold md:my-14 my-8 text-center">
          Franchise Working Module
        </h2>

        <div className="grid md:grid-cols-3 gap-8">
          <FranchiseCard
            no={"1"}
            text={"FRANCHISE WILL HIRE 3 SERVICE STAFF INITIALLY."}
          />
          <FranchiseCard
            no={"2"}
            text={"STAFF WHO HAS 2 WHEELER WILL BE HIRED BY THE FRANCHISE."}
          />
          <FranchiseCard
            no={"3"}
            text={
              "10 DAYS OF TRAINING WILL BE PROVIDED TO STAFFS BY COMPANY AT OUR TRAINING CENTRE ."
            }
          />
          <FranchiseCard
            no={"4"}
            text={
              "BOOKINGS RECEIVED BY THE FRANCHISE WILL BE FORWARDED TO THE SELECTED STAFF."
            }
          />
          <FranchiseCard
            no={"5"}
            text={
              "THE STAFF WILL ACCEPT THE BOOKING, FOLLOW THE ROUTE THROUGH WHATSAPP WITH GPS LOCATION  & REACH CUSTOMER'S HOUSE OR OFFICE."
            }
          />
          <FranchiseCard
            no={"6"}
            text={
              "SERVICE STAFF WILL COMPLETE THE SERVICE, TAKE THE PAYMENT ONLINE & GO TO THE NEXT SERVICE."
            }
          />
        </div>

        <div className="mt-20">
          <h1 className="text-2xl font-bold text-blue-800 my-2">For Enquiry</h1>
          <form action="" className="w-full" onSubmit={handleSubmit}>
            <input
              type="text"
              name="name"
              id="name"
              placeholder="Name "
              required
              className="w-full p-3 outline-0 border duration-300 hover:outline-1 hover:outline-blue-800 mb-6"
              value={formData.name}
              onChange={handleChange}
            />
            <input
              type="text"
              name="email"
              id="email"
              placeholder="Email "
              required
              className="w-full p-3 outline-0 border duration-300 hover:outline-1 hover:outline-blue-800 mb-6"
              value={formData.email}
              onChange={handleChange}
            />
            <input
              type="text"
              name="phone"
              id="phone"
              placeholder="Phone number"
              className="w-full p-3 outline-0 border duration-300 hover:outline-1 hover:outline-blue-800 mb-6"
              value={formData.phone}
              onChange={handleChange}
              required
            />
            <input
              type="text"
              name="city"
              id="city"
              placeholder="City"
              className="w-full p-3 outline-0 border duration-300 hover:outline-1 hover:outline-blue-800 mb-6"
              value={formData.city}
              onChange={handleChange}
            />
            <input
              type="text"
              name="state"
              id="state"
              placeholder="State"
              className="w-full p-3 outline-0 border duration-300 hover:outline-1 hover:outline-blue-800 mb-6"
              value={formData.state}
              onChange={handleChange}
            />
            <input
              type="text"
              name="address"
              id="address"
              placeholder="Address"
              className="w-full p-3 outline-0 border duration-300 hover:outline-1 hover:outline-blue-800 mb-6"
              value={formData.address}
              onChange={handleChange}
            />
            <input
              type="text"
              name="pincode"
              id="pincode"
              placeholder="Pincode"
              className="w-full p-3 outline-0 border duration-300 hover:outline-1 hover:outline-blue-800 mb-6"
              value={formData.pincode}
              onChange={handleChange}
            />
            <input
              type="text"
              name="occupation"
              id="occupation"
              placeholder="Occupation"
              className="w-full p-3 outline-0 border duration-300 hover:outline-1 hover:outline-blue-800 mb-6"
              value={formData.occupation}
              onChange={handleChange}
            />
            <input
              type="text"
              name="know"
              id="know"
              placeholder="How you came to know about us"
              className="w-full p-3 outline-0 border duration-300 hover:outline-1 hover:outline-blue-800 mb-6"
              value={formData.know}
              onChange={handleChange}
            />
            <button
              type="submit"
              className="text-lg font-bold rounded-md text-white border-2 border-blue-600 bg-blue-600 py-2 w-full duration-300 hover:bg-white hover:text-blue-600"
              onChange={handleChange}
            >
              {loading ? "Please wait" : "Send Enquiry"}
            </button>
          </form>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Franchise;
