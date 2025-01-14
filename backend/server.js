const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const mongoose = require("mongoose");
//

const connectDB = require("./config/db");
const formRoutes = require("./routes/formRoutes");

//

const projectRoutes = require("./routes/projectRoutes");
//

const app = express();

// Middleware
app.use(bodyParser.json());
app.use(cors());

//Database connectionA
connectDB();

// Serve images from the 'uploads' folder
app.use("/uploads", express.static("uploads"));

// Routes for handling project creation
app.use("/api/projects", projectRoutes);

// Define a schema and model for form submissions
const formSchema = new mongoose.Schema({
  name: String,
  email: String,
  subject: String,
  message: String,
});

//Routes
app.use("/api/forms", formRoutes);

// Sample Route
app.get("/", (req, res) => {
  res.send("API is running...");
});

// Server Start
const PORT = 5000;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
