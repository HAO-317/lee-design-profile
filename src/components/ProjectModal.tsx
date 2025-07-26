import { useEffect, useState } from "react";

type Project = {
  id: string;
  title: string;
  client: string;
  location?: string;
  year: string;
  tags: string[];
  role: string[];
  tasks: string[];
  printImage: string;
  images: string[];
  description: string;
};

type ProjectModalProps = {
  project: Project;
  onClose: () => void;
};

const ProjectModal = ({ project, onClose }: ProjectModalProps) => {
  const [activeImage, setActiveImage] = useState(project.images[0] || project.printImage);

  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "auto";
    };
  }, []);

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <button className="modal-close" onClick={onClose}>
          <img
            src="/assets/image/icon_close.svg"
            alt="Close"
            className="modal-icon"
          />
        </button>
        <button className="modal-back" onClick={onClose}>
          <img
            src="/assets/image/icon_left.svg"
            alt="Back"
            className="modal-icon"
          />
        </button>

        <div className="modal-image-section">
          {project.images.length > 1 ? (
            <div className="modal-image-gallery">
              <div className="modal-image-large">
                <img
                  src={`/assets/image/${activeImage}`}
                  alt="Großansicht"
                  className="modal-image-large-content"
                />
              </div>
              <div className="modal-image-thumbnails">
                {project.images.map((img) => (
                  <img
                    key={img}
                    src={`/assets/image/${img}`}
                    className={`modal-image-thumbnail ${img === activeImage ? "modal-image-thumbnail-active" : ""}`}
                    onMouseEnter={() => setActiveImage(img)}
                    alt={`Vorschau ${img}`}
                  />
                ))}
              </div>
            </div>
          ) : (
            <div className="modal-image-single">
              <img
                src={`/assets/image/${project.images}`}
                alt="Großansicht"
                className="modal-image-large-content"
              />
            </div>
          )}
        </div>

        <div className="modal-info">
          <p className="modal-title">{project.title}</p>
          <p className="modal-client">Client: {project.client}</p>
          <p className="modal-year">Year: {project.year}</p>
          <p className="modal-location">Location: {project.location || "N/A"}</p>
          <p className="modal-role">Role: {project.role.join(", ")}</p>
          <p className="modal-tasks">Tasks: {project.tasks.join(", ")}</p>
          <p className="modal-description">Description: {project.description}</p>
          <div className="modal-tags">
            <span className="modal-tags-label">Tags: </span>
            {project.tags.map((tag) => (
              <span key={tag} className="modal-tag">
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectModal;