import React, { useEffect, useState } from "react";
import Header from "../Components/Header";
import Footer from "../Components/Footer";
import Logo from "../assets/waasho-logo-1.png";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";



const ForgotPassword = () => {

   const [email, setEmail] = useState('')
   const [otp, setOtp] = useState('')
   const [password, setPassword] = useState('')
  const [loading, setLoading] = useState(false);

const sendOtp = async (e) =>{
    e.preventDefault();
    if(!email){
      toast.error("Email is required", {
        position: toast.POSITION.BOTTOM_RIGHT,
      });
      return;
    }
    setLoading(true);
    await fetch(`${process.env.REACT_APP_API}/send-otp`, {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
                email
        })
        }).then((res)=>{
            if(res.status === 200){
              toast.success("OTP Sent", {
                position: toast.POSITION.BOTTOM_RIGHT,
              });
            }
            else if(res.status === 404){
              toast.error("User not found", {
                position: toast.POSITION.BOTTOM_RIGHT,
              });
              return;
          }
            else{
              toast.error("Something went wrong", {
                position: toast.POSITION.BOTTOM_RIGHT,
              });
            }
        })
setLoading(false)
}

const forgotPass = async (e) =>{
    e.preventDefault();
    await fetch(`${process.env.REACT_APP_API}/forgotten-password`, {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
                email,
                password,
                otp
        })
        }).then((res)=>{
            if(res.status === 200){

              toast.success("Password changed", {
                position: toast.POSITION.BOTTOM_RIGHT,
              });

                window.location.href = '/login'
            }
           
            else{
              toast.error("Something went wrong", {
                position: toast.POSITION.BOTTOM_RIGHT,
              });
            }
        })
}


useEffect(()=>{
  document.title = "Waasho - Forgotten Password" 
 })
  
  return (
    <>
      <Header />
      <section className="max-w-full flex items-center justify-center bg-[#dbe6ee]">
        <div className="bg-white md:min-w-[700px] rounded my-20 login">
          <div className="text-center bg-blue-900 shadow-md px-2 text-white">
            <img src={Logo} alt="logo" className="p-2 w-40 mx-auto" />
            <span className="text-xl font-semibold relative bottom-4"></span>
          </div>
          <div>
            <form>
              <div className="mb-4 flex p-4">
                <input
                  type="email"
                  name="email"
                  id="email"
                  className="border p-2 focus:outline-blue-700 flex-grow"
                  placeholder="Enter your email"
                  required
                  value={email}
                  onChange={(e)=>{setEmail(e.target.value)}}
                />{" "}
                <button className="text-lg font-semibold p-2 bg-blue-700 hover:bg-transparent hover:text-blue-600 hover:border-blue-600 duration-500 hover:border border text-white" onClick={sendOtp}>
                  {loading? "Sending...":"Send OTP"}
                </button>
              </div>
              <div className="px-4">
                <input
                  type="text"
                  name="otp"
                  id="otp"
                  placeholder="Enter OTP"
                  className="border p-2 focus:outline-blue-700 mb-4 w-full"
                  value={otp}
                  required
                  onChange={(e)=>{setOtp(e.target.value)}}
                />
                <input
                  type="text"
                  name="newpass"
                  id="newpass"
                  placeholder="Enter a new password"
                  className="border p-2 focus:outline-blue-700 w-full mb-4"
                  required
                  value={password}
                  onChange={(e)=>{setPassword(e.target.value)}}
                />
              </div>
              <div className="flex justify-center p-4">
              <button className="text-lg font-semibold p-2 bg-blue-700 hover:bg-transparent hover:text-blue-600 hover:border-blue-600 duration-500 hover:border border text-white" onClick={forgotPass}>
                  Continue
                </button>
              </div>
            </form>
            <p className="text-center py-4 text-slate-500 md:text-lg font-bol">OR</p>
            <div className="flex justify-center p-4">

            <Link to="/login" className="text-center py-4 text-slate-500 md:text-lg font-bold">Login via password ?</Link>
            </div>
          </div>
          <div></div>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default ForgotPassword;
