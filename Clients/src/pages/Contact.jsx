import React, { useEffect, useState } from "react";
import Footer from "../Components/Footer";
import Breadcrumb from "../Components/Bredcrumb"; // Corrected typo in import statement
import { Link } from "react-router-dom";
import { AiOutlineMail } from "react-icons/ai";
import { PiPhoneCall } from "react-icons/pi";
import { ImLocation } from "react-icons/im";
import { toast } from "react-toastify";
import Header from "../Components/Header";
import BookingNotifier from "../Components/BookingNotifier";
import ScrollToTop from "../Components/ScrollToTop";

const Contact = () => {
  const [formData, setFormData] = useState({
    fullname: "",
    email: "",
    phone: "",
    subject: "",
    comment: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const { fullname, email, phone, subject, comment } = formData;
    try {
      await fetch(`${process.env.REACT_APP_API}/contact`, {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          fullname,
          email,
          phone,
          subject,
          comment,
        }),
      }).then((response) => {
        if (response.status === 200) {
          // window.location.href = "/contact";
          toast.success("Message sent !", {
            position: toast.POSITION.BOTTOM_RIGHT,
          });
          setFormData({
            fullname: "",
            email: "",
            phone: "",
            subject: "",
            comment: "",
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
  };

  useEffect(()=>{
    document.title = "Waasho - Contact" 
   })

  return (
    <>
    <BookingNotifier/>
    <ScrollToTop/>
      <Header />
      <Breadcrumb page={"Contact"} />
      <section className="contact mt-20">
        <div className="header my-6 md:px-20 px-6">
          <p className="text-xl font-medium text-sky-600 relative after:content-[''] after:h-[2px] after:w-14 after:bg-blue-500 after:absolute after:top-1/2 after:ms-1">
            Write a Message
          </p>
          <h2 className="md:text-5xl text-2xl font-semibold my-3 text-cyan-950">
            We&#39;re Connected To Help You 24/7.
          </h2>
        </div>
        <div className="mx-auto md:px-20 px-6 md:my-8 my-6">
          <div>
            <p className="text-xl text-slate-500 mb-8">
            Contact <span className="font-bold text-blue-600">Waasho</span> whenever you require help or have inquiries. For your convenience, we&#39;ve created a specific contact page with several options to get in touch with us. Whether you prefer phone, email, or a brief message, our accommodating team is prepared to help you right away. Your pleasure is our top priority, and we&#39;re here to make sure that using a waterless vehicle wash is easy and fun. For questions, comments, or support, please don&#39;t hesitate to contact us. We&#39;re only a click or phone call away. Together, let&#39;s keep your car clean and Shiny together.
            </p>
            <div>
              <h2 className="text-xl font-bold text-blue-900">
                {" "}
                <ImLocation className="inline text-2xl" />
                Mumbai Head Office
              </h2>
              <Link
                to={
                  "https://www.google.com/maps/place/Tulip+Building,+GCC+Club+Rd,+Wing-A,+Hatkesh+Udhog+Nagar,+Mira+Road+East,+Mira+Bhayandar,+Maharashtra+401107/@19.2821063,72.8747728,17z/data=!3m1!4b1!4m6!3m5!1s0x3be7b06842cbad35:0xaa5c4d90b920d99f!8m2!3d19.2821013!4d72.8773477!16s%2Fg%2F12lt826rj?entry=ttu"
                }
                className="font-semibold flex md:items-center text-slate-600 my-4"
              >
                flat no. 502 GCC Club Rd, Wing-A, Hatkesh Udhog Nagar, Mira Road
                East, Mira Bhayandar, Maharashtra 401107
              </Link>
            </div>
            <div>
              <h2 className="text-xl font-bold text-blue-900">
                {" "}
                <ImLocation className="inline text-2xl" />
                Bengaluru Office
              </h2>
              <Link
                to={
                  "https://www.google.com/maps/place/BTM+Layout,+Bengaluru,+Karnataka/@12.9135634,77.5919904,14z/data=!3m1!4b1!4m6!3m5!1s0x3bae14fc91a93031:0xf0afe62576cbdc3f!8m2!3d12.9165757!4d77.6101163!16s%2Fm%2F02rqxr3?entry=ttu"
                }
                className="font-semibold flex md:items-center text-slate-600 my-4"
              >
                477,2nd floor, 9th cross, 29th main, Near bbnl office, Btm 2nd
                stage, bangalore , 560076
              </Link>
            </div>
        
            <div>
              <h2 className="text-xl font-bold text-blue-900">
                {" "}
                <ImLocation className="inline text-2xl" /> Bhubaneswar Office
              </h2>
              <Link
                to={
                  "https://www.google.com/maps/place/Somu+Meadows/@20.3529639,85.8361538,17z/data=!3m1!4b1!4m6!3m5!1s0x3a1909f64fa722d1:0x1d0d4d76b8f766af!8m2!3d20.3529589!4d85.8387287!16s%2Fg%2F11rz2fzf8t?entry=ttu"
                }
                className="font-semibold flex md:items-center text-slate-600 my-4"
              >
                Somu meadows, Near patia station road,patia
              </Link>
            </div>

          
            <div className="mt-4">
              <Link
                className="text-xl text-slate-500"
                to={"mailto:someone@example.com"}
              >
                <AiOutlineMail className="inline text-xl me-2 text-blue-600" />
                <span>WaashoCare@gmail.com</span>
              </Link>
              <br />
              <Link
                className="text-xl text-slate-500 my-3"
                to={"tel:+918926136363"}
              >
                <PiPhoneCall className="inline text-xl me-2 text-blue-600" />
                <span>+91 89261 36363</span>
              </Link>
            </div>
          </div>
          <div>
            <form action="" method="POST" onSubmit={handleSubmit}>
              <h2 className="text-center text-blue-950 text-2xl font-semibold mb-4">
                Get in touch
              </h2>
              <div className="grid md:grid-cols-2 gap-4">
                <input
                  type="text"
                  name="fullname"
                  id="fullname"
                  placeholder="Your Fullname"
                  className="p-3 outline-0 border duration-300 hover:outline-1 hover:outline-blue-800"
                  value={formData.fullname}
                  onChange={handleChange}
                  required
                />

                <input
                  type="email"
                  name="email"
                  id="email"
                  placeholder="Your Email"
                  className="p-3 outline-0 border duration-300 hover:outline-1 hover:outline-blue-800"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />

                <input
                  type="text"
                  name="phone"
                  id="phone"
                  placeholder="Enter your phone number"
                  className="p-3 outline-0 border duration-300 hover:outline-1 hover:outline-blue-800"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                />
                <input
                  type="text"
                  name="subject"
                  id="subject"
                  placeholder="Subject"
                  className="p-3 outline-0 border duration-300 hover:outline-1 hover:outline-blue-800"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                />

                <textarea
                  name="comment"
                  id="comment"
                  placeholder="Your Comment"
                  className="p-3 outline-0 border duration-300 hover:outline-1 hover:outline-blue-800 md:col-span-2"
                  value={formData.comment}
                  onChange={handleChange}
                ></textarea>
              </div>

              <div className="flex justify-center my-8">
                <button
                  type="submit"
                  className=" w-full bg-sky-500 border-2 border-sky-500 rounded-lg px-5 py-2 duration-300 hover:bg-transparent hover:border-2 hover:border-sky-500 text-white hover:text-black cursor-pointer"
                >
                  Send message
                </button>
              </div>
            </form>
          </div>
        </div>
        <div className="map-details h-96">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d31111.27282301489!2d77.591990355357!3d12.913563423965753!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae14fc91a93031%3A0xf0afe62576cbdc3f!2sBTM%20Layout%2C%20Bengaluru%2C%20Karnataka!5e0!3m2!1sen!2sin!4v1695286960037!5m2!1sen!2sin"
            allowFullScreen=""
            className="h-full w-full"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="map"
          ></iframe>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default Contact;
