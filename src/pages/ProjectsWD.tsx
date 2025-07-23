import { useState } from "react";
import Navbar from "../components/Navbar";

interface WebProject {
  id: string;
  title: string;
  description: string;
  techStack: string[];
  features: string[];
  screenshots: string[];
  demoUrl: string;
  githubUrl: string;
}

const tempData: WebProject[] = [
  {
    id: "web1",
    title: "Portfolio Website",
    description: "Ein modernes Portfolio für Design- und Entwicklungsprojekte.",
    techStack: ["React", "TypeScript", "Tailwind CSS", "Vite"],
    features: ["Responsives Design", "Projektfilter", "Modale Ansicht"],
    screenshots: ["portfolio_screenshot_1.jpg", "portfolio_screenshot_2.jpg"],
    demoUrl: "https://example.com/demo1",
    githubUrl: "https://github.com/yourusername/portfolio",
  },
  {
    id: "web2",
    title: "E-Commerce Plattform",
    description: "Eine skalierbare E-Commerce-Lösung mit Warenkorb und Zahlungsabwicklung.",
    techStack: ["React", "Node.js", "Express", "MongoDB"],
    features: ["Produktkatalog", "Warenkorb", "Zahlungs-Gateway"],
    screenshots: ["ecommerce_screenshot_1.jpg", "ecommerce_screenshot_2.jpg", "ecommerce_screenshot_3.jpg"],
    demoUrl: "https://example.com/demo2",
    githubUrl: "https://github.com/yourusername/ecommerce",
  },
];

const ProjectsWD = () => {
  const [projects] = useState<WebProject[]>(tempData);

  return (
    <div className="app-container">
      <Navbar />
      <main className="main-content">
        <section className="projects-web-container">
          <h1 className="projects-title">Web & Interaktiv</h1>
          <div className="projects-list">
            {projects.map((project) => (
              <div
                key={project.id}
                className="project-card"
              >
                <div className="project-content">
                  <div className="project-images">
                    {project.screenshots.map((screenshot, index) => (
                      <img
                        key={index}
                        src={`/assets/image/${screenshot}`}
                        alt={`${project.title} Screenshot ${index + 1}`}
                        className="project-image"
                      />
                    ))}
                  </div>
                  <div className="project-details">
                    <h3 className="project-title-text">{project.title}</h3>
                    <p className="project-description">{project.description}</p>
                    <div className="project-tech">
                      <h4 className="project-subtitle">Technologien</h4>
                      <ul className="project-list">
                        {project.techStack.map((tech, index) => (
                          <li key={index}>{tech}</li>
                        ))}
                      </ul>
                    </div>
                    <div className="project-features">
                      <h4 className="project-subtitle">Funktionen</h4>
                      <ul className="project-list">
                        {project.features.map((feature, index) => (
                          <li key={index}>{feature}</li>
                        ))}
                      </ul>
                    </div>
                    <div className="project-links">
                      <a
                        href={project.demoUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="project-link"
                      >
                        Demo
                      </a>
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="project-link"
                      >
                        GitHub
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>
      </main>
      <footer className="app-footer">
        © 2025 H.LEE Design
      </footer>
    </div>
  );
};

export default ProjectsWD;