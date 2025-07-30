import { motion } from "framer-motion";

const Home = () => {
  return (
    <motion.section
      id="home"
      className="home-container"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.7 }}
    >
      <div className="home-content">
        <h1 className="home-title">Welcome to my DESIGN WORLD
          <br />
          Willkommen in meiner DESIGN-WELT
        </h1>
        <h2 className="home-subtitle">Seit über 20 Jahren surfe ich durch die weite und lebendige Welt des Designs</h2>
      </div>
    </motion.section>
  );
};

export default Home;