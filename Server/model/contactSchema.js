const mongoose = require("mongoose");

const contactSchema = new mongoose.Schema({
  fullname: {
    type: String,
    require: true,
  },
  email: {
    type: String,
    require: true,
  },
  phone: {
    type: String,
    require: true,
  },
  subject: {
    type: String,
    require: true,
  },
  comment: {
    type: String,
  }
});

const Contact = mongoose.model("Contacts", contactSchema);

module.exports = Contact;
