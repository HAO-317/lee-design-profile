type Project = {
  id: string;
  title: string;
  client: string;
  location?: string;
  year: string;
  tags: string[];
  role: string[];
  tasks: string[];
  images: string[];
  printImage: string;
};

type ProjectCardProps = {
  project: Project;
  onClick: () => void;
};

const ProjectCard = ({ project, onClick }: ProjectCardProps) => {
  return (
    <div className="project-card" onClick={onClick}>
      <div className="project-image">
        <img
          src={`/assets/image/${project.printImage}`}
          alt={project.title}
          className="project-image-content"
        />
      </div>
      <div className="project-info">
        <h3 className="project-title-text">{project.title}</h3>
        <p className="project-client-text">Client: {project.client}</p>
        <div className="project-tags">
          <span className="project-tags-label">Tags: </span>
          {project.tags.map((tag) => (
            <span key={tag} className="project-tag">
              {tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;