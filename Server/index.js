// server.js

const express = require("express");
const dotenv = require("dotenv");
const cookieParser = require("cookie-parser");
const cors = require('cors');
const indexrouter = require("./routes/indexroutes")


const app = express();
dotenv.config();
app.use(cors());

require('./database/db')
const port = process.env.PORT || 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

// routes
app.use("/", indexrouter)

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
