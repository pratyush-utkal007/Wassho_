const mongoose = require("mongoose");

const bookingSchema = new mongoose.Schema({
  package: {
    type: String,
  },
  price: {
    type: String,
  },
  name: {
    type: String,
  },
  email: {
    type: String,
  },
  phone: {
    type: String,
  },
  address: {
    type: String,
  },
  city: {
    type: String,
  },
  vehicleType: {
    type: String,
  },
  vehicleNo: {
    type: String,
  },
  vehicleModel: {
    type: String,
  },
  modelYear: {
    type: String,
  },
  date: {
    type: String,
  },
  time: {
    type: String,
  },
});

const Booking = mongoose.model("Booking", bookingSchema);

module.exports = Booking;