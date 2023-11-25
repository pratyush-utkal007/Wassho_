import React, { useState } from "react";
import { useAuth } from "./context/auth";
import { toast } from "react-toastify";
import PropTypes from "prop-types"; 
const BookingForm = ({ vehicle, plans }) => {
  const vehicleTypes = vehicle.title;
  const [auth] = useAuth();
  const names = auth?.user?.fullname;
  const [name, setName] = useState(names);
  const [phone, setPhone] = useState("");
  const [address, setAdddress] = useState("");
  const [city, setCity] = useState("");
  const [vehicleType, setVehicleType] = useState(vehicleTypes);
  const [vehicleNo, setVehicleNo] = useState("");
  const [vehicleName, setVehicleName] = useState("");
  const [modelYear, setModelYear] = useState("");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [loading, setLoading] = useState(false);
  const [phoneValid, setPhoneValid] = useState(true);


  const email = auth?.user?.email;
  const validPattern = /^[0-9]{10}$/;

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    if(!phoneValid){
      toast.error("Enter a valid phone number", {
        position: toast.POSITION.BOTTOM_RIGHT,
      });
    return;
    }
    try {
      const res = await fetch(`${process.env.REACT_APP_API}/booking`, {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          vehicle,
          plans,
          name,
          email,
          phone,
          address,
          city,
          vehicleType,
          vehicleNo,
          vehicleName,
          modelYear,
          date,
          time,
        }),
      });
      if (res.status === 200) {
        toast.success("Booking Successfull", {
          position: toast.POSITION.BOTTOM_RIGHT,
        });
        setTimeout(() => {
          window.location.href = "/";
        }, 1000);
      }
    } catch (error) {
      console.log(error);
    }
    setLoading(false);
  };

  return (
    <>
      <form method="POST" onSubmit={handleSubmit}>
        <div className="grid md:grid-cols-2 grid-cols-1 gap-4 bg-slate-50 p-4">
          <div>
            <label
              htmlFor="name"
              className="text-lg font-semibold text-slate-800"
            >
              Name
            </label>
            <br />
            <input
              className="py-2 ps-6 border-2 outline-0 text-lg text-slate-700 w-full rounded-md focus:outline-2 focus:outline-blue-700"
              type="text"
              name="name"
              id="name"
              placeholder="Enter your name"
              value={name}
              onChange={(e) => {
                const inputName = e.target.value;
                const validName = inputName.replace(/[^A-Za-z\s]/g, "");
                setName(validName);
              }}
              required
            />
          </div>
          <div>
            <label
              htmlFor="phone"
              className="text-lg font-semibold text-slate-800"
            >
              Phone Number
            </label>
            <br />
            <input
              className="py-2 ps-6 border-2 outline-0 text-lg text-slate-700 w-full rounded-md focus:outline-2 focus:outline-blue-700"
              type="number"
              name="phone"
              id="phone"
              placeholder="Enter your phone number"
              value={phone}
              onChange={(e) => {
                setPhone(e.target.value);
                setPhoneValid(validPattern.test(e.target.value));
              }}
              required
            />{" "}
            <br />
            {!phoneValid && (
              <p className="text-red-600 text-[0.9rem]">
                Please enter 10 digit valid phone number
              </p>
            )}
          </div>
          <div>
            <label
              htmlFor="address"
              className="text-lg font-semibold text-slate-800"
            >
              Address
            </label>
            <br />
            <input
              className="py-2 ps-6 border-2 outline-0 text-lg text-slate-700 w-full rounded-md focus:outline-2 focus:outline-blue-700"
              type="text"
              name="address"
              id="address"
              placeholder="Enter your address"
              value={address}
              onChange={(e) => setAdddress(e.target.value)}
              required
            />
          </div>
          <div>
            <label
              htmlFor="name"
              className="text-lg font-semibold text-slate-800"
            >
              Select City
            </label>
            <br />
            <select
              name="city"
              id="city"
              value={city}
              onChange={(e) => setCity(e.target.value)}
              className="py-2 ps-6 border-2 outline-0 text-lg text-slate-700 w-full rounded-md focus:outline-2 focus:outline-blue-700"
              required
            >
              <option value="">Choose City</option>
              <option value="Bhubaneswar">Bhubaneswar</option>
              <option value="Cuttack">Cuttack</option>
              <option value="Patna">Patna</option>
              <option value="Delhi">Delhi</option>
              <option value="Bengaluru">Bengaluru</option>
              <option value="Pune">Pune</option>
            </select>
          </div>
          <div>
            <label
              htmlFor="vehicleType"
              className="text-lg font-semibold text-slate-800"
            >
              Vehicle Type
            </label>
            <br />
            <input
              type="text"
              name="vehicleType"
              id="vehicleType"
              value={vehicleType}
              onChange={(e) => setVehicleType(e.target.value)}
              placeholder=""
              readOnly
              required
              className="py-2 px-6 border-2 outline-0 text-lg text-slate-700 w-full rounded-md focus:outline-2 focus:outline-blue-700"
            />
          </div>
          <div>
            <label
              htmlFor="vehicleManufacturer"
              className="text-lg font-semibold text-slate-800"
            >
              Vehicle Number
            </label>
            <br />
            <input
              className="py-2 ps-6 border-2 outline-0 text-lg text-slate-700 w-full rounded-md focus:outline-2 focus:outline-blue-700"
              type="text"
              name="vehicleNo"
              id="vehicleNo"
              placeholder="Enter vehicle number"
              value={vehicleNo}
              onChange={(e) => setVehicleNo(e.target.value)}
              required
            />
          </div>
          <div>
            <label
              htmlFor="vehicleName"
              className="text-lg font-semibold text-slate-800"
            >
              Vehicle Name
            </label>
            <br />
            <input
              className="py-2 ps-6 border-2 outline-0 text-lg text-slate-700 w-full rounded-md focus:outline-2 focus:outline-blue-700"
              type="text"
              name="vehicleName"
              id="vehicleName"
              placeholder="Ex-Bmw,Ford,Hyundai,Toyota etc... "
              value={vehicleName}
              onChange={(e) => setVehicleName(e.target.value)}
              required
            />
          </div>
          <div>
            <label
              htmlFor="modelYear"
              className="text-lg font-semibold text-slate-800"
            >
              {`Model Year (Optional)`}
            </label>
            <br />
            <input
              className="py-2 ps-6 border-2 outline-0 text-lg text-slate-700 w-full rounded-md focus:outline-2 focus:outline-blue-700"
              type="text"
              name="modelYear"
              id="modelYear"
              placeholder="Enter model year"
              value={modelYear}
              onChange={(e) => setModelYear(e.target.value)}
            />
          </div>
          <div>
            <label
              htmlFor="date"
              className="text-lg font-semibold text-slate-800"
            >
              Select Date
            </label>
            <br />
            <input
              type="date"
              name="date"
              id="date"
              min={new Date().toISOString().split("T")[0]}
              value={date}
              onChange={(e) => setDate(e.target.value)}
              required
              className="py-2 px-6 border-2 outline-0 text-lg text-slate-700 w-full rounded-md focus:outline-2 focus:outline-blue-700"
            />
          </div>
          <div>
            <label
              htmlFor="time"
              className="text-lg font-semibold text-slate-800"
            >
              Select Time
            </label>
            <br />
            <input
              type="time"
              name="time"
              id="time"
              value={time}
              onChange={(e) => setTime(e.target.value)}
              required
              className="py-2 px-6 border-2 outline-0 text-lg text-slate-700 w-full rounded-md focus:outline-2 focus:outline-blue-700"
            />
          </div>
        </div>
        <div className="px-3">
          <button
            type="submit"
            className={`bg-blue-600 w-full text-white text-lg font-semibold px-4 py-2 rounded-md duration-500 hover:bg-blue-900 hover:text-white`}
          >
            {
                      loading ? `Processing ...`: "Book now"
                    }
          </button>
        </div>
      </form>
    </>
  );
};
BookingForm.propTypes = {
  vehicle: PropTypes.object.isRequired, 
  plans: PropTypes.array.isRequired,    
};

export default BookingForm;
