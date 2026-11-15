import { Link } from "react-router-dom";

function PageHeader({ badge, title, subtitle, breadcrumb }) {
  return (
    <section className="page-header">
      <div className="container">
        {breadcrumb && (
          <nav className="breadcrumb" aria-label="Breadcrumb">
            <Link to="/">Home</Link>
            <span>/</span>
            <span className="current">{breadcrumb}</span>
          </nav>
        )}
        {badge && <span className="header-badge">{badge}</span>}
        <h1 className="page-title">{title}</h1>
        {subtitle && <p className="page-subtitle">{subtitle}</p>}
      </div>
    </section>
  );
}

export default PageHeader;