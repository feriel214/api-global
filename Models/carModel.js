const mongoose = require("mongoose");
const carSchema = new mongoose.Schema({
  matricule: {
    type: String,
    required: true,
    unique: true,
  },
  brand: {
    type: String,
  },
  price: {
    type: Number,
  },
  owner: {
    type: String,
  },
  imageUrl: {
    type: String,
  },
  color: {
    type: String,
  },
});

module.exports = mongoose.model("Car", carSchema);
