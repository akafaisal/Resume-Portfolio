import React, { useState, useEffect } from "react";
import axios from "axios"; // Import axios

const ProjectD = () => {
  const [projects, setProjects] = useState([]); // State to store fetched projects
  const [loading, setLoading] = useState(true); // State to track loading status
  const [error, setError] = useState(null); // State to track errors

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const response = await axios.get("http://localhost:5000/api/projects"); // Fetch projects using axios
        setProjects(response.data); // Axios automatically parses JSON
      } catch (error) {
        setError(error.response ? error.response.data : error.message); // Handle errors
      } finally {
        setLoading(false); // Set loading to false once done
      }
    };

    fetchProjects();
  }, []);

  if (loading) {
    return <div>Loading projects...</div>; // Show a loading message while fetching
  }

  if (error) {
    return <div>Error: {error}</div>; // Show an error message if fetching fails
  }

  return (
    <div className="project-list grid grid-cols-1 md:grid-cols-2 gap-6 p-6">
      {projects.map((project) => (
        <div
          key={project._id}
          className="project-item bg-white shadow-lg rounded-lg p-4"
        >
          <h2 className="text-lg font-bold mb-2">{project.name}</h2>
          <p className="text-gray-600 mb-4">{project.description}</p>
          <a href={project.link} className="text-blue-500 hover:underline">
            Visit Project
          </a>
          <img
            src={`http://localhost:5000${project.imagePath}`}
            alt={project.name}
            className="mt-4 w-full h-40  object-cover rounded-md"
          />
        </div>
      ))}
    </div>
  );
};

export default ProjectD;
