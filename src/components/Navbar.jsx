import { useState } from "react";
import { NavLink, Link } from "react-router-dom";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => setMenuOpen(false);

  const navItems = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Notices", path: "/notices" },
    { name: "Programs", path: "/programs" },
    { name: "Contact", path: "/contact" }
  ];

  return (
    <header className="navbar-wrapper">
      <div className="container navbar">
        <Link to="/" className="brand-logo" onClick={closeMenu}>
          <span className="logo-mark">YSSE</span>
          <div className="logo-text">
            <strong>YSSE Portal</strong>
            <span>Youth School for Social Entrepreneurs</span>
          </div>
        </Link>

        <button
          type="button"
          className="mobile-toggle"
          aria-label="Toggle navigation menu"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? "✕" : "☰"}
        </button>

        <nav className={`nav-links ${menuOpen ? "open" : ""}`}>
          {navItems.map((item) => (
            <NavLink
              key={item.path}
              to={item.path}
              end={item.path === "/"}
              onClick={closeMenu}
              className={({ isActive }) =>
                isActive ? "nav-item active" : "nav-item"
              }
            >
              {item.name}
            </NavLink>
          ))}
          <Link to="/programs" className="btn btn-primary nav-cta" onClick={closeMenu}>
            Explore Programs
          </Link>
        </nav>
      </div>
    </header>
  );
}

export default Navbar;