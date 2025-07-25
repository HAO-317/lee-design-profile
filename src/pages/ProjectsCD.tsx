import { useState, useMemo, useEffect } from "react";
import Navbar from "../components/Navbar";
import FilterBar from "../components/FilterBar";
import ProjectCard from "../components/ProjectCard";
import ProjectModal from "../components/ProjectModal";
import ErrorBoundary from "../components/ErrorBoundary";
import data from "../data/projects.json";

interface Project {
  id: string;
  title: string;
  client: string;
  year: string;
  role: string[];
  tasks: string[];
  printImage: string;
  images: string[];
  description: string;
  tags: string[];
  location?: string;
}

const allTags = (projects: Project[], key: keyof Project) => {
  const set = new Set<string>();
  projects.forEach((p) => {
    const value = p[key];
    if (Array.isArray(value)) {
      value.forEach((val: string) => set.add(val));
    } else if (typeof value === "string") {
      set.add(value);
    } else {
      console.warn(`Unexpected value for key ${key} in project ${p.id}:`, value);
    }
  });
  return [...set];
};

const ProjectsCD = () => {
  const [projects] = useState<Project[]>(data);
  const [selectedTags, setSelectedTags] = useState<string[]>(["ALLE"]);
  const [modalProject, setModalProject] = useState<Project | null>(null);
  const [showNoResult, setShowNoResult] = useState(false);

  const toggleTag = (tag: string) => {
    if (tag === "ALLE") {
      setSelectedTags(["ALLE"]);
      return;
    }
    setSelectedTags((prev) => {
      const newTags = prev.includes(tag)
        ? prev.filter((t) => t !== tag)
        : [...prev.filter((t) => t !== "ALLE"), tag];
      return newTags.length === 0 ? ["ALLE"] : newTags;
    });
  };

  const filtered = selectedTags.includes("ALLE")
    ? projects
    : projects.filter((p) =>
        selectedTags.every((tag) => [...p.tags, ...p.role, ...p.tasks].includes(tag))
      );

  useEffect(() => {
    if (filtered.length === 0 && !selectedTags.includes("ALLE")) {
      setShowNoResult(true);
      const timer = setTimeout(() => {
        setSelectedTags(["ALLE"]);
        setShowNoResult(false);
      }, 3000);
      return () => clearTimeout(timer);
    }
  }, [filtered, selectedTags]);

  const tagOptions = useMemo(() => allTags(projects, "tags"), [projects]);
  const roleOptions = useMemo(() => allTags(projects, "role"), [projects]);
  const tasksOptions = useMemo(() => allTags(projects, "tasks"), [projects]);

  return (
    <div className="app-container">
      <Navbar />
      <main className="main-content">
        <ErrorBoundary>
          <section className="projects-container-cd">
            <h2 className="projects-title">Kommunikation & Raum</h2>
            <FilterBar
              filters={roleOptions}
              selected={selectedTags}
              onToggle={toggleTag}
              label="Rolle"
              className="filter-bar"
              activeClass="filter-bar-active"
            />
            <FilterBar
              filters={tasksOptions}
              selected={selectedTags}
              onToggle={toggleTag}
              label="Tasks"
              className="filter-bar"
              activeClass="filter-bar-active"
            />
            <FilterBar
              filters={tagOptions}
              selected={selectedTags}
              onToggle={toggleTag}
              label="Tags"
              className="filter-bar"
              activeClass="filter-bar-active"
            />
            {showNoResult ? (
              <p className="no-result-text">
                Dieses Attribut hat keine passenden Projekte, kehrt in 3 Sekunden zur Ausgangsseite zurück
              </p>
            ) : (
              <div className="project-grid">
                {filtered.map((project) => {
                  const image = project.images.find((img) => img.match(/_1\.(jpg|png|JPG)$/i)) || project.printImage;
                  return (
                    <ProjectCard
                      key={project.id}
                      project={{ ...project, printImage: image }}
                      onClick={() => {
                        console.log("Clicked project:", project.title);
                        setModalProject(project);
                      }}
                    />
                  );
                })}
              </div>
            )}
            {modalProject && (
              <ProjectModal project={modalProject} onClose={() => setModalProject(null)} />
            )}
          </section>
        </ErrorBoundary>
      </main>
      <footer className="app-footer">
        © 2025 H.LEE Design
      </footer>
    </div>
  );
};

export default ProjectsCD;