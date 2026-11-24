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
    { name: "Contact", path: "/contact" },
  ];

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur border-b border-slate-200 shadow-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-18 py-3">
          {/* Brand Logo */}
          <Link
            to="/"
            onClick={closeMenu}
            className="flex items-center gap-3 group"
          >
            <span className="bg-teal-700 text-white font-extrabold text-sm px-2.5 py-2 rounded-lg tracking-wide group-hover:bg-teal-800 transition-colors">
              YSSE
            </span>
            <div className="flex flex-col leading-tight">
              <strong className="text-slate-900 text-base sm:text-lg font-bold">
                YSSE Portal
              </strong>
              <span className="text-[11px] text-slate-500 hidden sm:block">
                Youth School for Social Entrepreneurs
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-1.5">
            {navItems.map((item) => (
              <NavLink
                key={item.path}
                to={item.path}
                end={item.path === "/"}
                className={({ isActive }) =>
                  `px-3.5 py-2 rounded-lg text-sm font-semibold transition-colors ${
                    isActive
                      ? "bg-teal-50 text-teal-700"
                      : "text-slate-600 hover:text-teal-700 hover:bg-slate-50"
                  }`
                }
              >
                {item.name}
              </NavLink>
            ))}
            <Link
              to="/programs"
              className="ml-3 bg-teal-700 text-white hover:bg-teal-800 px-4 py-2 rounded-lg text-sm font-semibold transition-colors shadow-xs"
            >
              Explore Programs
            </Link>
          </nav>

          {/* Mobile Hamburger Button */}
          <button
            type="button"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle Menu"
            className="md:hidden inline-flex items-center justify-center p-2 rounded-lg border border-slate-200 text-slate-700 hover:bg-slate-100 focus:outline-none focus:ring-2 focus:ring-teal-600"
          >
            <span className="text-xl leading-none">{menuOpen ? "✕" : "☰"}</span>
          </button>
        </div>

        {/* Mobile Dropdown Menu */}
        {menuOpen && (
          <nav className="md:hidden pb-4 pt-2 border-t border-slate-100 flex flex-col gap-1.5">
            {navItems.map((item) => (
              <NavLink
                key={item.path}
                to={item.path}
                end={item.path === "/"}
                onClick={closeMenu}
                className={({ isActive }) =>
                  `px-4 py-2.5 rounded-lg text-sm font-semibold transition-colors ${
                    isActive
                      ? "bg-teal-50 text-teal-700"
                      : "text-slate-700 hover:bg-slate-50"
                  }`
                }
              >
                {item.name}
              </NavLink>
            ))}
            <Link
              to="/programs"
              onClick={closeMenu}
              className="mt-2 text-center bg-teal-700 text-white hover:bg-teal-800 px-4 py-2.5 rounded-lg text-sm font-semibold"
            >
              Explore Programs
            </Link>
          </nav>
        )}
      </div>
    </header>
  );
}

export default Navbar;