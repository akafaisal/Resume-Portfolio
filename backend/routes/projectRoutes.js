const express = require("express");
const Project = require("../models/projectModel"); // Import the Project model
const upload = require("../config/multerConfig"); // Import the Multer configuration

const router = express.Router();

// Create Project Route (POST)
router.post("/", upload.single("image"), async (req, res) => {
  const { name, description, link } = req.body;
  const imagePath = req.file ? `/uploads/${req.file.filename}` : ""; // Store the image path, not the image itself

  // Create a new project instance
  const newProject = new Project({
    name,
    description,
    link,
    imagePath, // Save the image path in the database
  });

  try {
    await newProject.save(); // Save to MongoDB
    res.status(201).json(newProject); // Respond with the saved project
  } catch (error) {
    res.status(500).json({ error: "Failed to save project" });
  }
});

// Get all Projects Route (GET)
router.get("/", async (req, res) => {
  try {
    const projects = await Project.find(); // Fetch all projects from the database
    res.status(200).json(projects); // Respond with the list of projects
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch projects" });
  }
});

module.exports = router;
