import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import App from "./App";
import ProjectsCD from "./pages/ProjectsCD";
import ProjectsWD from "./pages/ProjectsWD";
import PdfPrintPage from "./pages/PdfPrintPage";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/projects" element={<ProjectsCD />} />
        <Route path="/projects-web" element={<ProjectsWD />} />
        <Route path="/print" element={<PdfPrintPage />} />
      </Routes>
    </Router>
  </React.StrictMode>
);