import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";

import "@fontsource/roboto/300.css"; // Roboto font weight 300
import "@fontsource/roboto/400.css"; // Roboto font weight 400
import "@fontsource/roboto/500.css"; // Roboto font weight 500
import "@fontsource/roboto/700.css"; // Roboto font weight 700

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
  </StrictMode>
);
