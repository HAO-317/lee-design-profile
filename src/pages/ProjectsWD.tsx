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
            {projects.map((project, index) => (
              <div key={project.id} className="wd-project-card-a">
                <div className="wd-project-content-a">
                  {index % 2 === 0 ? (
                    <>
                      <div className="wd-project-text-a">
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
                              {project.tasks.map((task, idx) => (
                                <li key={idx}>{task}</li>
                              ))}
                            </ul>
                          </div>
                          <div className="wd-project-tech">
                            <h4 className="wd-project-subtitle">Technologien</h4>
                            <ul className="wd-project-list">
                              {project.tools.map((tech, idx) => (
                                <li key={idx}>{tech}</li>
                              ))}
                            </ul>
                          </div>
                          <div className="wd-project-features">
                            <h4 className="wd-project-subtitle">Funktionen</h4>
                            <ul className="wd-project-list">
                              {project.features.map((feature, idx) => (
                                <li key={idx}>{feature}</li>
                              ))}
                            </ul>
                          </div>
                        </div>
                        <div className="wd-project-links">
                          {project.demo && (
                            <div className="wd-project-link-item">
                              <h4 className="wd-project-subtitle">Demo</h4>
                              <a
                                href={project.demo}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="wd-project-link"
                              >
                                {project.demo}
                              </a>
                            </div>
                          )}
                          {project.github && (
                            <div className="wd-project-link-item">
                              <h4 className="wd-project-subtitle">GitHub</h4>
                              <a
                                href={project.github}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="wd-project-link"
                              >
                                {project.github}
                              </a>
                            </div>
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
                      {index !== 7 && (
                        <div
                          className={
                            index === 1
                              ? "wd-project-images-a wd-project-images-custom-2"
                              : index === 2
                              ? "wd-project-images-a wd-project-images-custom-3"
                              : index === 3
                              ? "wd-project-images-a wd-project-images-custom-4"
                              : index === 4
                              ? "wd-project-images-a wd-project-images-custom-5"
                              : index === 6
                              ? "wd-project-images-a wd-project-images-custom-7"
                              : index === 8
                              ? "wd-project-images-a wd-project-images-custom-9"
                              : "wd-project-images-a"
                          }
                        >
                          {project.images.map((screenshot, idx) => (
                            <img
                              key={idx}
                              src={`/assets/image/${screenshot}`}
                              alt={`${project.title} Screenshot ${idx + 1}`}
                              className="wd-project-image-a"
                            />
                          ))}
                        </div>
                      )}
                    </>
                  ) : (
                    <>
                      {index !== 7 && (
                        <div
                          className={
                            index === 1
                              ? "wd-project-images-a wd-project-images-custom-2"
                              : index === 2
                              ? "wd-project-images-a wd-project-images-custom-3"
                              : index === 3
                              ? "wd-project-images-a wd-project-images-custom-4"
                              : index === 4
                              ? "wd-project-images-a wd-project-images-custom-5"
                              : index === 6
                              ? "wd-project-images-a wd-project-images-custom-7"
                              : index === 8
                              ? "wd-project-images-a wd-project-images-custom-9"
                              : "wd-project-images-a"
                          }
                        >
                          {project.images.map((screenshot, idx) => (
                            <img
                              key={idx}
                              src={`/assets/image/${screenshot}`}
                              alt={`${project.title} Screenshot ${idx + 1}`}
                              className="wd-project-image-a"
                            />
                          ))}
                        </div>
                      )}
                      <div className="wd-project-text-a">
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
                              {project.tasks.map((task, idx) => (
                                <li key={idx}>{task}</li>
                              ))}
                            </ul>
                          </div>
                          <div className="wd-project-tech">
                            <h4 className="wd-project-subtitle">Technologien</h4>
                            <ul className="wd-project-list">
                              {project.tools.map((tech, idx) => (
                                <li key={idx}>{tech}</li>
                              ))}
                            </ul>
                          </div>
                          <div className="wd-project-features">
                            <h4 className="wd-project-subtitle">Funktionen</h4>
                            <ul className="wd-project-list">
                              {project.features.map((feature, idx) => (
                                <li key={idx}>{feature}</li>
                              ))}
                            </ul>
                          </div>
                        </div>
                        <div className="wd-project-links">
                          {project.demo && (
                            <div className="wd-project-link-item">
                              <h4 className="wd-project-subtitle">Demo</h4>
                              <a
                                href={project.demo}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="wd-project-link"
                              >
                                {project.demo}
                              </a>
                            </div>
                          )}
                          {project.github && (
                            <div className="wd-project-link-item">
                              <h4 className="wd-project-subtitle">GitHub</h4>
                              <a
                                href={project.github}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="wd-project-link"
                              >
                                {project.github}
                              </a>
                            </div>
                          )}
                        </div>

                      </div>
                    </>
                  )}
                  {index === 7 && (
                    <div className="wd-project-embed-container">

                      <iframe
                        src="https://hao-317.github.io/Project_SuperTimer/"
                        className="wd-project-embed"
                        title="SuperTimer Embed"
                      ></iframe>
                      <h4>Live Demo</h4>
                    </div>
                  )}
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