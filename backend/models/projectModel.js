const mongoose = require("mongoose");

//Define schema for projects

const projectSchema = new mongoose.Schema({
  name: { type: String, required: true },
  description: { type: String, required: true },
  link: { type: String, required: true },
  imagePath: { type: String, required: true },

  // Create Model for projects
});
const Project = mongoose.model("Project", projectSchema);

module.exports = Project;
