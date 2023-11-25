const express = require("express")
const route = express.Router()
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const auth = require("../middleware/authenticate");
const User = require('../model/userSchema')
const Booking = require("../model/bookingSchema");
const Contact = require("../model/contactSchema");
const Franchise = require('../model/franchiseSchema')
const nodemailer = require("nodemailer");
const dotenv = require('dotenv');

// const logo = require('../../client/')

dotenv.config();


function generateRandomNumber(length) {
  const min = Math.pow(10, length - 1);
  const max = Math.pow(10, length) - 1;
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

const generatedOTP = generateRandomNumber(6);
const otpString = generatedOTP.toString();

const transporter = nodemailer.createTransport({
  service: 'Gmail',
  auth: {
    user: process.env.AUTH_EMAIL,
    pass: process.env.AUTH_PASS
  },
})



route.post("/register", async (req, res) => {
  try {
    const { fullname, email, phone, password } = req.body;
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(422).send("User already exists");
    }

    const encryptpassword = await bcrypt.hash(password, 10);

    const user = await User.create({
      fullname,
      email,
      phone,
      password: encryptpassword,
    });

    const token = jwt.sign(
      { id: user._id },
      process.env.SECRET_KEY,
      { expiresIn: "365d" }
    );
    user.token = token;

    await user.save();
    return res.status(200).send({
      message: "Registered",
      user,
    })
  } catch (error) {
    console.log(error);
  }
});

route.post("/login", async (req, res) => {
  try {
    const { email, password } = req.body;

    if (!(email && password)) {
      return res.status(400).send('Please provide both email and password');
    }

    const user = await User.findOne({ email });

    if (user) {
      const isMatch = await bcrypt.compare(password, user.password);

      if (!isMatch) {
        return res.status(400).send({ error: 'Invalid credentials' });
      }

      const token = jwt.sign(
        { id: user._id },
        process.env.SECRET_KEY,
        { expiresIn: '365d' }
      );

      user.token = token;
      await user.save();

      res.cookie('token', token, {
        httpOnly: true,
      });
      return res.status(200).send({
        message: "Login success",
        user,
      })
    } else {
      return res.status(400).send({ error: 'Invalid credentials' });
    }
  } catch (error) {
    console.log(error);
  }
});

route.post("/booking", async (req, res) => {
  try {
    const {
      email,
      name,
      phone,
      address,
      city,
      vehicleType,
      vehicleNo,
      vehicleModel,
      modelYear,
      date,
      time,
    } = req.body;


    const price = req.body.plans.price;
    const package = req.body.plans.name;

    const booking = await new Booking({
      package,
      price,
      name,
      email,
      phone,
      address,
      city,
      vehicleType,
      vehicleNo,
      vehicleModel,
      modelYear,
      date,
      time,
    });
    // sending mail to Owner

    // const owner = {
    //   from: process.env.AUTH_EMAIL,
    //   to: process.env.AUTH_EMAIL,
    //   subject: "Booking Confirmed",
    //   text: `
    //   New Order Received:

    //   Full Name: ${name}
    //   Email: ${email}
    //   Phone: ${phone}
    //   Model Year: ${modelYear}
    //   Vehicle Model Name: ${vehicleModel}
    //   Vehicle Type: ${vehicleType}
    //   Date: ${date}
    //   Time: ${time}

    //   `
    // }

    const owner = {
      from: process.env.AUTH_EMAIL,
      to: process.env.AUTH_EMAIL,
      subject: "NEW BOOKING",
      html: `
      <html>
<style>
    li{
        margin-bottom: .5rem;
    }
</style>
<body style="background-color: #000000; font-family: sans-serif; font-size: 1.2rem; letter-spacing: .4px; ">

    <div style="position: relative; width: 80%; margin: 10px auto; color: rgb(0, 0, 0); background-color: #ffffff; padding: .1rem 2rem; padding-bottom: 2rem;">
       
        <p style="font-size: 1.8rem; font-weight: 600;">New Booking.</p>
       
        <p><b>Here are the details of your booking:</b></p>
        <ul>
            <li> Package: ${package}</li>
            <li> Price: ${price}</li>
            <li> Customer Name: ${name}</li>
            <li> Email: ${email}</li>
            <li> Phone: ${phone}</li>
            <li> Address: ${address}</li>
            <li> City: ${city}</li>
            <li> Vehicle Type: ${vehicleType}</li>
            <li> Vehicle Number:${vehicleNo}</li>
            <li> Vehicle Model: ${vehicleModel}</li>
            <li> Model Year: ${modelYear}</li>
            <li> Date: ${date}</li>
            <li> Time: ${time}</li>
        </ul>

    </div>
</body>

</html>
      `
    }

    // sending mail to client

    // const client = {
    //   from: process.env.AUTH_EMAIL,
    //   to: `${email}`,
    //   subject: "Booking Confirmed",
    //   text: `
    //   Your booking has been confirmed.
    //   Thank You for Choosing Waasho.
    //   Have a nice day.

    // Full Name: ${name}
    // Email: ${email}
    // Phone: ${phone}
    // Model Year: ${modelYear}
    // Vehicle Model Name: ${vehicleModel}
    // Vehicle Type: ${vehicleType}
    // Date: ${date}
    // Time: ${time}

    //   `
    // }
    const client = {
      from: process.env.AUTH_EMAIL,
      to: `${email}`,
      subject: "Booking Confirmed",
      html: `<html>
      <style>
          li{
              margin-bottom: .5rem;
          }
      </style>
      <body style="font-family: sans-serif; font-size: 1.2rem; letter-spacing: .4px; ">
      
          <div style="position: relative; width: 80%; margin: 10px auto; color: rgb(0, 0, 0); background-color: #ffffff; padding: .1rem 2rem; padding-bottom: 2rem;">
             
              <p style="font-size: 1.8rem; font-weight: 600;">Dear ${name},</p>
              <p>We are thrilled to confirm your booking for the Package: ${package} and <b>${price}</b> on <b>${date}</b> at <b>${time}</b>. Thank you for choosing
                  <span style="color: rgba(26, 26, 187, 0.836); font-weight: 600;">Waasho</span> for your upcoming journey. We are committed to providing you with an exceptional
                  experience.</p>
              <p><b>Here are the details of your booking:</b></p>
              <ul>
              <li> City: ${city}</li>
              <li> Vehicle Type: ${vehicleType}</li>
              <li> Vehicle Number:${vehicleNo}</li>
              <li> Vehicle Model: ${vehicleModel}</li>
              <li> Model Year: ${modelYear}</li>
              </ul>
              <p>Thank you for choosing [Your Company Name]. We look forward to providing you with an
                  unforgettable experience.</p>
              <p>If you have any questions or need to make changes, please contact us at <a style="text-decoration: none;" href="mailto:waashocare@gmail.com">waashocare@gmail.com</a> or you can
                  call on <a style="text-decoration: none;" href="tel:+918926123232">+918926123232</a></p>
              <p>
                  Best regards,
              </p>
              <p style="margin: 0px;">Waasho Team</p>
              <p style="margin: 0px;">waashocare@gmail.com</p>
              <p style="margin: 0px;">+918926123232</p>
      
      
          </div>
      </body>
      
      </html>`
    }


    await transporter.sendMail(owner)
    await transporter.sendMail(client)
    await booking.save()
    return res.status(200).send({
      success: true,
      message: "Booking Confirmed"
    })
  } catch (error) {
    console.log(error)
  }
})

route.post("/contact", async (req, res) => {
  try {
    const { fullname, email, phone, subject, comment } = req.body

    const contact = await Contact.create({
      fullname, email, phone, subject, comment
    })
    const contactMail = {
      from: process.env.AUTH_EMAIL,
      to: process.env.AUTH_EMAIL,
      subject: "Contact Query",
      html: `
      <html>
<style>
    li{
        margin-bottom: .5rem;
    }
</style>
<body style="background-color: #000000; font-family: sans-serif; font-size: 1.2rem; letter-spacing: .4px; ">

    <div style="position: relative; width: 80%; margin: 10px auto; color: rgb(0, 0, 0); background-color: #ffffff; padding: .1rem 2rem; padding-bottom: 2rem;">
       
        <p style="font-size: 1.8rem; font-weight: 600;">Contact Query</p>
       
        <p><b>Here are the details of your booking:</b></p>
        <ul>
        User Name: ${fullname}
        Email: ${email}
        Phone: ${phone}
        Subject: ${subject}
        Comment: ${comment}
        </ul>

    </div>
</body>

</html>
      `

    }
    await transporter.sendMail(contactMail)
    
    await contact.save()
    return res.status(200).send({
      success: true,
      message: "Message sent"
    })
  
  } catch (error) {
    console.log(error)
  }
})

route.post("/subscribe", async (req, res) => {
  try {
    const { email } = req.body

    const subscriber = {
      from: process.env.AUTH_EMAIL,
      to: process.env.AUTH_EMAIL,
      subject: "One More Subscriber",
      text: `
      ${email}. This user has been subscribed your newslatter for Daily upadate 
      
      `
    }
    await transporter.sendMail(subscriber)

    return res.status(200).send({
      success: true,
      message: "Message sent"
    })
  
  } catch (error) {
    console.log(error)
  }
})
route.post("/franchise", async (req, res) => {
  try {
    const {
      name,
      email,
      phone,
      city,
      state,
      address,
      pincode,
      occupation,
      know } = req.body.formData
    const franchise = await Franchise.create({
      name,
      email,
      phone,
      city,
      state,
      address,
      pincode,
      occupation,
      know
    });

    //getting franchise mail 

    const franchiseMail = {
      from: process.env.AUTH_EMAIL,
      to: process.env.AUTH_EMAIL,
      subject: "Franchise Query",
      html: `
      <html>
<style>
    li{
        margin-bottom: .5rem;
    }
</style>
<body style="background-color: #000000; font-family: sans-serif; font-size: 1.2rem; letter-spacing: .4px; ">

    <div style="position: relative; width: 80%; margin: 10px auto; color: rgb(0, 0, 0); background-color: #ffffff; padding: .1rem 2rem; padding-bottom: 2rem;">
       
        <p style="font-size: 1.8rem; font-weight: 600;">Franchise Enquiry</p>
       
        <p><b>Here are the details of your booking:</b></p>
        <ul>
        User Name: ${name}
        Email: ${email}
        Phone: ${phone}
        City: ${city}
        State: ${state}
        Address: ${address}
        Pincode: ${pincode}
        Occupation: ${occupation}
       How do you Know about us: ${know}
        </ul>

    </div>
</body>

</html>
      `

    }

    await transporter.sendMail(franchiseMail)
    await franchise.save()
    return res.status(200).send({
      success: true
    })
  } catch (error) {
    console.log(error)
  }
})


route.post('/send-otp', async (req, res) => {
  try {
    const { email } = req.body
    // console.log(email);
    if (!email) {
      return res.status(404).send({
        success: false,
        message: "Email is required"
      })
    }
    const regdUser = await User.findOne({ email })
    if (!regdUser) {
      return res.status(404).send({
        success: false,
        message: "Email doesn't exists"
      })
    }
    const sendOtp = {
      from: process.env.AUTH_EMAIL,
      to: `${email}`,
      subject: "Forgot Password",
      text: `
          Your Recovery OTP is : ${generatedOTP}
      `
    }
    await transporter.sendMail(sendOtp)
    return res.status(200).send({
      success: true,
      message: "Opt Sent to your registered email"
    })
  }
  catch (error) {

    console.log(error);
  }
})


route.post('/forgotten-password', async (req, res) => {
  try {
    const { email, otp, password } = req.body
    const user = await User.findOne({ email })
    if (!otp) {
      return res.status(404).send({
        success: true,
        message: "OTP is required"
      })
    }
    const encryptpassword = await bcrypt.hash(password, 10);
    if (otpString === otp) {
      console.log("updated")
      await User.findByIdAndUpdate(user._id, { password: encryptpassword }, { new: true })
      res.status(200).send({
        success: true,
        message: "Password successfully updated"
      })
    }

  } catch (error) {
    console.log(error);
  }
})




module.exports = route;