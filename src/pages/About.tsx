import { motion } from "framer-motion";

const About = () => {
  return (
    <motion.section
      id="about"
      className="about-container"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <div className="about-image-section">
        <img
          src="/assets/image/Hao_Li.jpg"
          alt="Portrait"
          className="about-image"
        />
      </div>
      <div className="about-content">
        <h2 className="about-title">Über mich</h2>
        <p className="about-text">
          Ich bin Hao Lee, ein erfahrener Kommunikationsdesigner und Frontend/Backend-Entwickler mit einem
          Fokus auf Markenraum, UI/UX und React-Entwicklung. Meine Arbeit verbindet kreative Konzepte
          mit technischer Präzision, um einzigartige Erlebnisse zu schaffen.
        </p>
        <div className="about-specializations">
          <h3 className="about-subtitle">Spezialisierungen</h3>
          <ul className="about-list">
            <li>Markenraum</li>
            <li>UI/UX Design</li>
            <li>Frontend & Backend Development (Html, CSS, React, TypeScript, Vite, Node, Git)</li>
            <li>Agile Arbeitsmethoden</li>
          </ul>
        </div>
        <div>
          <h3 className="about-subtitle">Tools</h3>
          <ul className="about-list">
            <li>Figma</li>
            <li>VS Code</li>
            <li>Adobe CC Suite</li>
            <li>Cinema 4D</li>
          </ul>
        </div>
      </div>
    </motion.section>
  );
};

export default About;