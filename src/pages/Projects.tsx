import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const Projects = () => {
  return (
    <motion.section
      id="projects"
      className="projects-container"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <h2 className="projects-title">Bitte wählen Sie ein Design-Welt</h2>
      <div className="home-buttons">
        <Link to="/projects" className="home-button">
          Kommunikation & Raum
        </Link>
        <Link to="/projects-web" className="home-button">
          Web & Interaktiv
        </Link>
      </div>
   
    
    </motion.section>
  );
};

export default Projects;