import { useState } from "react";
import Navbar from "../components/Navbar";
import webProjects from "../data/web-projects.json";

interface WebProject {
  id: string;
  title: string;
  type: string;
  format: string;
  tasks: string[];
  tools: string[];
  features: string[];
  images: string[];
  description: string;
  demo: string;
  github: string;
}

const ProjectsWD = () => {
  const [projects] = useState<WebProject[]>(webProjects);

  return (
    <div className="app-container">
      <Navbar />
      <main className="main-content">
        <section className="wd-projects-container">
          <h1 className="wd-projects-title">Web & Interaktiv</h1>
          <div className="wd-projects-list">
            {projects.map((project) => {
              const isAFormat = project.id === "toktok1"; // Example: toktok1 uses A format
              const CardComponent = isAFormat ? "wd-project-card-a" : "wd-project-card-b";
              const ContentComponent = isAFormat ? "wd-project-content-a" : "wd-project-content-b";
              const TextComponent = isAFormat ? "wd-project-text-a" : "wd-project-text-b";
              const ImagesComponent = isAFormat ? "wd-project-images-a" : "wd-project-images-b";
              const ImageClass = isAFormat ? "wd-project-image-a" : "wd-project-image-b";

              return (
                <div key={project.id} className={CardComponent}>
                  <div className={ContentComponent}>
                    <div className={TextComponent}>
                      <h3 className="wd-project-title">{project.title}</h3>
                      <div className="wd-project-type">
                        <h4 className="wd-project-subtitle">Typ</h4>
                        <p>{project.type}</p>
                      </div>
                      <div className="wd-project-format">
                        <h4 className="wd-project-subtitle">Format</h4>
                        <p>{project.format}</p>
                      </div>
                      <div className="wd-project-description">
                        <h4 className="wd-project-desc-title">Beschreibung</h4>
                        <p className="wd-project-desc-content">{project.description}</p>
                      </div>
                      <div style={{ display: "flex", gap: "0.5rem" }}>
                        <div className="wd-project-tasks">
                          <h4 className="wd-project-subtitle">Aufgaben</h4>
                          <ul className="wd-project-list">
                            {project.tasks.map((task, index) => (
                              <li key={index}>{task}</li>
                            ))}
                          </ul>
                        </div>
                        <div className="wd-project-tech">
                          <h4 className="wd-project-subtitle">Technologien</h4>
                          <ul className="wd-project-list">
                            {project.tools.map((tech, index) => (
                              <li key={index}>{tech}</li>
                            ))}
                          </ul>
                        </div>
                        <div className="wd-project-features">
                          <h4 className="wd-project-subtitle">Funktionen</h4>
                          <ul className="wd-project-list">
                            {project.features.map((feature, index) => (
                              <li key={index}>{feature}</li>
                            ))}
                          </ul>
                        </div>
                      </div>
                      <div className="wd-project-links">
                        {project.demo && (
                          <a
                            href={project.demo}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="wd-project-link"
                          >
                            {project.demo}
                          </a>
                        )}
                        {project.github && (
                          <a
                            href={project.github}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="wd-project-link"
                          >
                            {project.github}
                          </a>
                        )}
                      </div>
                      {project.id === "supertimer01" && (
                        <iframe
                          src="https://hao-317.github.io/Project_SuperTimer/"
                          className="wd-project-embed"
                          title="SuperTimer Embed"
                        ></iframe>
                      )}
                    </div>
                    <div className={ImagesComponent}>
                      {project.images.map((screenshot, index) => (
                        <img
                          key={index}
                          src={`/assets/image/${screenshot}`}
                          alt={`${project.title} Screenshot ${index + 1}`}
                          className={ImageClass}
                        />
                      ))}
                    </div>
                  </div>
                </div>
              );
            })}
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