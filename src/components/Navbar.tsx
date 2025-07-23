import { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";

const Navbar = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [isProjectsOpen, setIsProjectsOpen] = useState(false);

  const linkClass = (path: string) =>
    location.pathname === path
      ? "active-link"
      : "default-link hover-link";

  const handleAnchorClick = (sectionId: string) => {
    if (location.pathname !== "/") {
      navigate("/");
      setTimeout(() => {
        const element = document.getElementById(sectionId);
        if (element) {
          element.scrollIntoView({ behavior: "smooth" });
        }
      }, 100);
    } else {
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  return (
    <header className="app-header">
      <div className="header-content">
        <Link to="/" className="logo-link">
          <img
            src="/assets/image/logo.jpg"
            alt="H.LEE Design Logo"
            className="logo-image"
          />
          <span className="logo-text">H.LEE Design</span>
        </Link>
        <div className="nav-container">
          <nav className="main-nav">
            <button
              className={linkClass("/") + " focus:outline-none"}
              onClick={() => handleAnchorClick("home")}
            >
              Home
            </button>
            <div
              className="dropdown"
              onMouseEnter={() => setIsProjectsOpen(true)}
              onMouseLeave={() => setIsProjectsOpen(false)}
            >
              <button
                className={linkClass("/projects") + " focus:outline-none"}
                onClick={() => setIsProjectsOpen(!isProjectsOpen)}
              >
                Projekte
              </button>
              {isProjectsOpen && (
                <div className="dropdown-menu">
                  <Link
                    to="/projects"
                    className="dropdown-item"
                    onClick={() => setIsProjectsOpen(false)}
                  >
                    Kommunikation & Raum
                  </Link>
                  <Link
                    to="/projects-web"
                    className="dropdown-item"
                    onClick={() => setIsProjectsOpen(false)}
                  >
                    Web & Interaktiv
                  </Link>
                </div>
              )}
            </div>
            <button
              className={linkClass("/about") + " focus:outline-none"}
              onClick={() => handleAnchorClick("about")}
            >
              Über mich
            </button>
            <button
              className={linkClass("/contact") + " focus:outline-none"}
              onClick={() => handleAnchorClick("contact")}
            >
              Kontakt
            </button>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Navbar;