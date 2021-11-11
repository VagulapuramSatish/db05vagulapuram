const mongoose = require("mongoose")
const IcecreamSchema = mongoose.Schema({brand: String,flavour: String,cost: Number})
module.exports = mongoose.model("Icecream",IcecreamSchema)