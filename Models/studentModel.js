const mongoose = require("mongoose");
const studentSchema = new mongoose.Schema({
  firstname: {
    type: String,
  },
  lastname: {
    type: String,
  },
  email: {
    type: String,
  },
});

module.exports = mongoose.model("Student", studentSchema);
