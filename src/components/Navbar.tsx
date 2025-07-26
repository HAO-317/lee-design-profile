import { useState, useEffect, useRef } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";

const Navbar = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [isNavOpen, setIsNavOpen] = useState(false);
  const [isProjectsOpen, setIsProjectsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const linkClass = (path: string) =>
    location.pathname === path ? "active-link" : "default-link hover-link";

  const handleAnchorClick = (sectionId: string) => {
    if (location.pathname !== "/") {
      navigate("/");
      setTimeout(() => {
        const element = document.getElementById(sectionId);
        if (element) element.scrollIntoView({ behavior: "smooth" });
      }, 100);
    } else {
      const element = document.getElementById(sectionId);
      if (element) element.scrollIntoView({ behavior: "smooth" });
    }
    setIsNavOpen(false); // 跳转后收起 navbar
  };

  const handleMenuClick = () => {
    setIsNavOpen(!isNavOpen);
    setIsProjectsOpen(false); // 收起时关闭
  };

  // 处理点击外部关闭下拉菜单
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsProjectsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

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
        <div className="menu-container">
          <nav className={`main-nav ${isNavOpen ? "nav-open" : ""}`}>
            <button
              className={linkClass("/") + " nav-button"}
              onClick={() => handleAnchorClick("home")}
            >
              Home
            </button>
            <div className="dropdown" ref={dropdownRef}>
              <button
                className={linkClass("/projects") + " nav-button"}
                onClick={() => setIsProjectsOpen(!isProjectsOpen)}
                onMouseEnter={() => setIsProjectsOpen(true)}
              >
                Projekte
              </button>
              {isProjectsOpen && (
                <div className="dropdown-menu">
                  <Link
                    to="/projects"
                    className="dropdown-item"
                    onClick={() => setIsNavOpen(false)}
                  >
                    Kommunikation Design & Raum
                  </Link>
                  <Link
                    to="/projects-web"
                    className="dropdown-item"
                    onClick={() => setIsNavOpen(false)}
                  >
                    Web & Interaktiv
                  </Link>
                </div>
              )}
            </div>
            <button
              className={linkClass("/about") + " nav-button"}
              onClick={() => handleAnchorClick("about")}
            >
              Über mich
            </button>
            <button
              className={linkClass("/contact") + " nav-button"}
              onClick={() => handleAnchorClick("contact")}
            >
              Kontakt
            </button>
            <Link to="/print" className="nav-button print-icon">
              <img
                src="/assets/image/icon_printer.svg"
                alt="Print"
                className="print-icon-image"
              />
            </Link>
          </nav>
          <button
            className={`menu-toggle ${isNavOpen ? "menu-toggle-active" : ""}`}
            onClick={handleMenuClick}
          >
            <img
              src={`/assets/image/${isNavOpen ? "icon_right.svg" : "icon_menu.svg"}`}
              alt={isNavOpen ? "Close Menu" : "Open Menu"}
              className="menu-icon"
            />
          </button>
        </div>
      </div>
    </header>
  );
};

export default Navbar;