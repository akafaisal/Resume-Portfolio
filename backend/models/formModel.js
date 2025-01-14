const mongoose = require("mongoose");

const formSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    default: "Not Provided",
  },
  email: {
    type: String,
    required: true,
    default: "Not Provided",
  },

  subject: {
    type: String,
    required: true,
    default: "Not Provided",
  },
  message: { type: String, required: true, default: "Not Provided" },
});

module.exports = mongoose.model("Form", formSchema);
