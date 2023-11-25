const mongoose = require("mongoose");

const franchiseSchema = new mongoose.Schema({
    name:{
        type: String,
        require: true
    },
    email:{
        type: String,
        require: true
    },
    phone:{
        type: String,
        require: true
    },
    city:{
        type: String
    },
    state:{
        type: String
    },
    address:{
        type: String
    },
    pincode:{
        type: String
    },
    occupation:{
        type: String
    },
    kno:{
        type: String
    },
})

const Franchise = mongoose.model("Franchise", franchiseSchema);

module.exports = Franchise;