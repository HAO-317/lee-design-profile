import data from "../data/projects.json";

const PdfPrintPage = () => {
  return (
    <div className="pdf-container">
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
    </div>
  );
};

export default PdfPrintPage;