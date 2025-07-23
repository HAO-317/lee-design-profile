import { motion } from "framer-motion";

const Contact = () => {
  return (
    <motion.section
      id="contact"
      className="contact-container"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <h1 className="contact-title">Kontakt</h1>
      <p className="contact-text">
        Sie können mich jederzeit per E-Mail kontaktieren. Ich freue mich auf Ihre Nachricht!
      </p>
      <div className="contact-details">
        <p>
          ✉️ E-Mail: 
          <a href="mailto:your.email@example.com" className="contact-link">
            your.email@example.com
          </a>
        </p>
        <p>
          💻 GitHub: 
          <a
            href="https://github.com/yourusername"
            target="_blank"
            rel="noopener noreferrer"
            className="contact-link"
          >
            github.com/yourusername
          </a>
        </p>
        <p>📍 Standort: Düsseldorf/Erkrath, Deutschland</p>
      </div>
    </motion.section>
  );
};

export default Contact;