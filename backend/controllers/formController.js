const Form = require("../models/formModel");

//Handle Form Submissions

const submitForm = async (req, res) => {
  const { name, email, subject, message } = req.body;

  if (!name || !email || !subject || !message) {
    return res.status(400).json({ error: "All fields are required" });
  }

  try {
    const form = new Form({ name, email, subject, message });
    await form.save();
  } catch (error) {
    console.error("Error saving form data:", error);
    res.status(500).json({
      error: "Internal Server Error",
    });
  }
};
module.exports = {
  submitForm,
};
