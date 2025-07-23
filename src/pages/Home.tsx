import { motion } from "framer-motion";

const Home = () => {
  return (
    <motion.section
      id="home"
      className="home-container"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <div className="home-content">
        <h1 className="home-title">Welcome to my DESIGN WORLD</h1>
        <h2 className="home-subtitle">25 Jahre spannende und umfangreiche professionelle Gestaltung</h2>
      </div>
    </motion.section>
  );
};

export default Home;