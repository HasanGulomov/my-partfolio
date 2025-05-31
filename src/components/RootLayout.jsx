import React, { useState, useEffect } from "react";
import { NavLink, Outlet, useLocation } from "react-router-dom";

function Layout() {
  const location = useLocation();
  const [activeLink, setActiveLink] = useState("");
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const path = location.pathname;
    if (path === "/") setActiveLink("home");
    else if (path.includes("about")) setActiveLink("about");
    else if (path.includes("contact")) setActiveLink("contact");
    else setActiveLink("");
    
    
    setMenuOpen(false);
  }, [location]);

  return (
    <>
    <div className="container">
      <header>
        <h2 className="header-logo">MyPortfolio</h2>
        <button
          className="menu-toggle"
          aria-label="Toggle menu"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {/* Hamburger icon */}
          ☰
        </button>
        <ul className={`header-links-wrapper ${menuOpen ? "menu-open" : ""}`}>
          <li className={activeLink === "home" ? "active" : ""}>
            <NavLink to="/">Home</NavLink>
          </li>
          <li className={activeLink === "about" ? "active" : ""}>
            <NavLink to="/about">About</NavLink>
          </li>
          <li className={activeLink === "contact" ? "active" : ""}>
            <NavLink to="/contact">Contact</NavLink>
          </li>
        </ul>
      </header>
      <Outlet />
      </div>
    </>
  );
}

export default Layout;
