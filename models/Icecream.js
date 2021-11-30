const mongoose = require("mongoose")
const IcecreamSchema = mongoose.Schema({brand: String,flavour: String,cost: {type:Number,min:15,max:100}})
module.exports = mongoose.model("Icecream",IcecreamSchema)