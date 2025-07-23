import { Outlet } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Projects from "./pages/Projects";
import About from "./pages/About";
import Contact from "./pages/Contact";

const App = () => {
  return (
    <div className="app-container">
      <Navbar />
      <main className="main-content">
        <Home />
        <Projects />
        <About />
        <Contact />
        <Outlet />
      </main>
      <footer className="app-footer">
        © 2025 H.LEE Design
      </footer>
    </div>
  );
};

export default App;