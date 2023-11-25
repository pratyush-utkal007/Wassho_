import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Booking from "./pages/Booking";
import Register from "./pages/Register";
import Login from "./pages/Login";
import { AuthProvider } from "./Components/context/auth";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Reviews from "./pages/Reviews";
import React, { Suspense } from "react";
import BookingForm from "./Components/BookingForm";
import Franchise from "./pages/Franchise";
import ForgotPassword from "./pages/ForgotPassword";
const Home = React.lazy(()=> import ("./pages/Home"))
const Services = React.lazy(()=> import ("./pages/Services"))
const About = React.lazy(()=> import ("./pages/About"))
const Contact = React.lazy(()=> import ("./pages/Contact"))

function App() {
  return (
    <>
    <Suspense>
      <AuthProvider>
        <BrowserRouter>

        <ToastContainer 
        position="bottom-center"
        autoClose={4000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"/>
          <Routes>
            <Route exact path="/" Component={Home} />
            <Route path="/booking" Component={Booking} />
            <Route path="/services" Component={Services} />
            <Route path="/register" Component={Register} />
            <Route path="/login" Component={Login} />
            <Route path="/about" Component={About} />
            <Route path="/contact" Component={Contact} />
            <Route path="/reviews" Component={Reviews} />
            <Route path="/franchise" Component={Franchise} />
            <Route path="/confirm-booking" Component={BookingForm} />
            <Route path="/forgotten-password" Component={ForgotPassword} />
          </Routes>
        </BrowserRouter>
      </AuthProvider>
    </Suspense>

    </>
  );
}

export default App;
