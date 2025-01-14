const mongoose = require("mongoose");
const Project = require("./models/projectModel");

mongoose
  .connect("mongodb://127.0.0.1:27017/projectsDB", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("Connected to MongoDB"))
  .catch((err) => console.error("MongoDB connection error:", err));

const seedProjects = async () => {
  await Project.deleteMany(); // Clear old data

  await Project.insertMany([
    {
      name: "Project 1",
      description: "Description of Project 1",
      link: "http://example.com/project1",
      imagePath: "/uploads/project1.jpg", // Example path
    },
    {
      name: "Project 2",
      description: "Description of Project 2",
      link: "http://example.com/project2",
      imagePath: "/uploads/project2.jpg",
    },
  ]);

  console.log("Sample data added");
  mongoose.disconnect();
};

seedProjects();
