import { useState, useEffect } from "react";
import Home from "./Home";
import About from "./About";
import data from "../data/projects.json";
import webProjects from "../data/web-projects.json";

const PdfPrintPage = () => {
  const [isTopVisible, setIsTopVisible] = useState(false);

  // 滚动事件处理
  useEffect(() => {
    const handleScroll = () => {
      setIsTopVisible(window.scrollY > 100);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleBack = () => {
    window.history.back();
  };

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="app-container">
      <div className="pdf-container">
        {/* 封面 - 使用 Home 组件，固定高度 */}
        <div className="pdf-page cover-page">
          <div className="pdf-centered-content">
            <Home />
          </div>
        </div>

        {/* About 页面 - 使用 About 组件，固定高度 */}
        <div className="pdf-page about-page">
          <div className="pdf-centered-content">
            <About />
          </div>
        </div>

        {/* Kommunikation & Raum 标题 - 固定高度，添加边框 */}
        <div className="pdf-page title-page">
          <div className="pdf-centered-content title-frame">
            <h2>Kommunikation & Raum</h2>
          </div>
        </div>

        {/* Kommunikation & Raum 项目 */}
        {data.map((project, index) => (
          <div key={project.id} className="pdf-page">
            <img
              src={`/assets/image/${project.printImage}`}
              alt={project.title}
              className="pdf-image"
            />
            <div className="pdf-title">{project.title}</div>
            <div className="pdf-meta">
              {project.client} – {project.location || ""} ({project.year})
            </div>
            <div className="pdf-details">
              <span className="pdf-role-label">Rolle:</span> {project.role.join(", ")}<br />
              <span className="pdf-tasks-label">Aufgaben:</span> {project.tasks.join(", ")}
            </div>
            {index !== data.length - 1 && <div className="pdf-separator" />}
          </div>
        ))}

        {/* Web & Interaktiv 标题 - 固定高度，添加边框 */}
        <div className="pdf-page title-page">
          <div className="pdf-centered-content title-frame">
            <h2>Web & Interaktiv</h2>
          </div>
        </div>

        {/* Web 项目 - 使用 ProjectsWD 版式，固定高度 */}
        {webProjects.map((project, index) => (
          <div key={project.id} className="pdf-page wd-project-card-a" style={{ maxHeight: "1000px", overflow: "hidden" }}>
            <div className="wd-project-content-a">
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
              <div className="wd-project-images-a" style={{ display: "flex", flexWrap: "wrap", gap: "0.5rem" }}>
                {project.images.map((screenshot, idx) => (
                  <img
                    key={idx}
                    src={`/assets/image/${screenshot}`}
                    alt={`${project.title} Screenshot ${idx + 1}`}
                    className="wd-project-image-a"
                    style={{ flex: "1 1 auto", maxWidth: "50%", height: "auto" }}
                  />
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* 回到页面顶部 */}
      {isTopVisible && (
        <button className="scroll-to-top" onClick={scrollToTop}>
          <img
            src="/assets/image/icon_up-to-line.svg"
            alt="Back to Top"
            className="menu-icon"
          />
        </button>
      )}

      {/* back 和 print 按钮 */}
      <button className="scroll-to-top back-button" onClick={handleBack} style={{ top: "2rem", right: "2rem" }}>
        <img
          src="/assets/image/icon_left.svg"
          alt="Back"
          className="menu-icon"
        />
      </button>
      <button className="scroll-to-top print-button" onClick={handlePrint} style={{ top: "2rem", right: "7rem" }}>
        <img
          src="/assets/image/icon_printer.svg"
          alt="Print"
          className="menu-icon"
        />
      </button>
    </div>
  );
};

export default PdfPrintPage;