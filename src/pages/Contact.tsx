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
      <div className="contact-section">
        <h2 className="contact-title">Bist du bereit, mit mir die nächste Herausforderung anzunehmen?</h2>
        <p className="contact-text">
          Sie können mich jederzeit per E-Mail kontaktieren. Ich freue mich auf Ihre Nachricht!
        </p>
        <div className="contact-details">
          <p>
            ✉️ E-Mail:&nbsp;  
            <a href="mailto:your.email@example.com" className="contact-link">
              lihao317@gmail.com
            </a>
          </p>
          <p>
            💻 GitHub:&nbsp; 
            <a
              href="https://github.com/HAO-317"
              target="_blank"
              rel="noopener noreferrer"
              className="contact-link"
            >
              github.com/HAO-317
            </a>
          </p>
          <p>📍 Standort: Düsseldorf/Erkrath, Deutschland</p>
        </div>
      </div>

    </motion.section>
  );
};

export default Contact;