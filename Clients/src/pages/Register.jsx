import React, { useEffect, useState } from "react";
import Footer from "../Components/Footer";
import Logo from "../assets/waasho-logo-1.png";
import { BiSolidUser } from "react-icons/bi";
import { GrMail } from "react-icons/gr";
import { BsTelephoneFill } from "react-icons/bs";
import {
  AiFillLock,
  AiOutlineEye,
  AiOutlineEyeInvisible,
} from "react-icons/ai";

import { Link } from "react-router-dom";
import regImg from "../assets/logo3.png";
import Header from "../Components/Header";
import { toast } from "react-toastify";
import ScrollToTop from "../Components/ScrollToTop";

const Register = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    fullname: "",
    email: "",
    phone: "",
    password: "",
    term: false,
  });
  const [loader, setLoader] = useState(false);
  const [nameError, setNameError] = useState("");
  const [phoneError, setPhoneError] = useState("");

  const handleShow = (e) => {
    e.preventDefault();
    setShowPassword(!showPassword);
  };

  const handleNameChange = (e) => {
    const fullName = e.target.value;

    // Use a regular expression to check if the input consists only of letters and spaces
    if (/^[A-Za-z\s]+$/.test(fullName)) {
      setNameError("");
      setFormData({ ...formData, fullname: fullName });
    } else {
      setNameError("Full name should only contain letters");
      setFormData({ ...formData, fullname: fullName });
    }
  };

  const handlePhoneChange = (e) => {
    const phoneNumber = e.target.value;

    // Remove any non-numeric characters from the input
    const numericPhoneNumber = phoneNumber.replace(/\D/g, '');

    if (/^\d{10}$/.test(numericPhoneNumber)) {
      setPhoneError("");
      setFormData({ ...formData, phone: numericPhoneNumber });
    } else {
      setPhoneError("Phone number should be 10 digit");
      setFormData({ ...formData, phone: numericPhoneNumber });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const { fullname, email, phone, password } = formData;

    if (!nameError && !phoneError) {
      if (fullname === "" || email === "" || phone === "" || password === "") {
        toast.error("All fields are required.", {
          position: toast.POSITION.BOTTOM_RIGHT,
        });
        return;
      }

      if (!/^\S+$/.test(password) || password.length < 6) {
        toast.error("Password should be at least 6 characters", {
          position: toast.POSITION.BOTTOM_RIGHT,
        });
        return;
      }

      if (!formData.term) {
        toast.error("Agree to terms & conditions", {
          position: toast.POSITION.BOTTOM_RIGHT,
        });
        return;
      }

      try {
        setLoader(true);
        await fetch(`${process.env.REACT_APP_API}/register`, {
          method: "POST",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            fullname,
            email,
            phone,
            password,
          }),
        }).then((response) => {
          if (response.status === 200) {
            toast.success("Registered successfully!", {
              position: toast.POSITION.BOTTOM_RIGHT,
            });
            window.location.href = "/login";
          } else if (response.status === 422) {
            toast.error("Email already exists!", {
              position: toast.POSITION.BOTTOM_RIGHT,
            });
          } else {
            toast.error("Something went wrong!", {
              position: toast.POSITION.BOTTOM_RIGHT,
            });
          }
        });
      } catch (error) {
        console.error("register failed:", error);
      }
    }
  };


  useEffect(()=>{
    document.title = "Waasho - Register" 
   })
  return (
    <>
    <ScrollToTop/>
      <Header />
      <section className="register max-w-full flex items-center justify-center md:pt-8 bg-[#dbe6ee]">
        <div className="bg-white rounded-md register my-8 p-4">
          <div className="border px-2 bg-blue-900 text-white mx-auto grid place-items-center">
            <img src={Logo} alt="logo" className="p-2 w-40 mx-auto" />
            <span className="text-2xl font-bold mb-2">
              Create a new account!
            </span>
          </div>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="reg-img">
              <img src={regImg} alt="img" className="md:w-[430px]" />
            </div>
            <div>
              <form onSubmit={handleSubmit} method="POST" className="my-4">
                <div className="border-2 border-sky-500 p-2 mb-4 rounded-md">
                  <BiSolidUser className="inline me-2" />
                  <input
                    type="text"
                    name="fullname"
                    id="fullname"
                    className="outline-0 w-[90%]"
                    placeholder="Full name"
                    value={formData.fullname}
                    onChange={handleNameChange}
                  />
                  {nameError && <p className="text-red-500 text-sm">{nameError}</p>}
                </div>
                <div className="border-2 border-sky-500 p-2 mb-4 rounded-md">
                  <GrMail className="inline me-2" />
                  <input
                    type="email"
                    name="email"
                    id="email"
                    className="outline-0 w-[90%]"
                    placeholder="Email"
                    value={formData.email}
                    onChange={(e) =>
                      setFormData({ ...formData, email: e.target.value })
                    }
                  />
                </div>
                <div className="border-2 border-sky-500 p-2 mb-4 rounded-md">
                  <BsTelephoneFill className="inline me-2" />
                  <input
                    type="text"
                    name="phone"
                    id="phone"
                    className="outline-0 w-[90%]"
                    placeholder="Phone number"
                    value={formData.phone}
                    onChange={handlePhoneChange}
                  />
                  {phoneError && <p className="text-red-500 text-sm">{phoneError}</p>}
                </div>
                <div className="border-2 border-sky-500 p-2 mb-4 rounded-md">
                  <AiFillLock className="inline me-2" />
                  {showPassword ? (
                    <input
                      type="text"
                      name="password"
                      id="password"
                      className="outline-0 w-[80%]"
                      placeholder="Password"
                      value={formData.password}
                      onChange={(e) =>
                        setFormData({ ...formData, password: e.target.value })
                      }
                    />
                  ) : (
                    <input
                      type="password"
                      name="password"
                      id="password"
                      className="outline-0 w-[80%]"
                      placeholder="Password"
                      value={formData.password}
                      onChange={(e) =>
                        setFormData({ ...formData, password: e.target.value })
                      }
                    />
                  )}
                  <button
                    className="cursor-pointer float-right"
                    onClick={handleShow}
                  >
                    {showPassword ? (
                      <AiOutlineEye className="inline" />
                    ) : (
                      <AiOutlineEyeInvisible className="inline" />
                    )}
                  </button>
                </div>
                <div className="flex items-center">
                  <input
                    type="checkbox"
                    name="term"
                    id="term"
                    className="me-2"
                    checked={formData.term}
                    onChange={(e) =>
                      setFormData({ ...formData, term: e.target.checked })
                    }
                  />
                  <label htmlFor="term">
                    You agree to our{" "}
                    <Link to={"/terms"} className="text-sky-700">
                      term & conditions
                    </Link>
                  </label>
                </div>
                <div className="text-center my-4">
                  <button
                    type="submit"
                    className="bg-sky-500 w-full text-white py-1 px-4 border-2 border-sky-500 rounded-md duration-300 hover:bg-transparent hover:text-black"
                  >
                    {loader ? "Processing..." : "Register"}
                  </button>
                </div>
                <div className="text-center font-medium">
                  <span>
                    Already have an account?{" "}
                    <Link to={"/login"} className="text-sky-700">
                      Login
                    </Link>{" "}
                  </span>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default Register;
