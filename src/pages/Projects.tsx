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
      <h2 className="projects-title">Wähle deinen Weg und tauche ein in eine Welt des Designs</h2>
      <div className="home-buttons">
        <div className="home-button-container1">
          <Link to="/projects" className="home-button">
          Kommunikation Design & Markenraum
        </Link>
        </div>
        <div className="home-button-container2">
          <Link to="/projects-web" className="home-button">
          Web & Interaktive
        </Link>
        </div>


      </div>
   
    
    </motion.section>
  );
};

export default Projects;