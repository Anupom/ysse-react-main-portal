import { Link } from "react-router-dom";

function PageHeader({ badge, title, subtitle, breadcrumb }) {
  return (
    <section className="bg-gradient-to-br from-slate-900 via-slate-800 to-teal-950 text-white py-14 md:py-16 border-b-4 border-teal-600">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {breadcrumb && (
          <nav
            className="flex items-center justify-center gap-2 text-xs sm:text-sm text-slate-400 mb-4"
            aria-label="Breadcrumb"
          >
            <Link to="/" className="hover:text-teal-300 transition-colors">
              Home
            </Link>
            <span>/</span>
            <span className="text-teal-300 font-medium">{breadcrumb}</span>
          </nav>
        )}

        {badge && (
          <span className="inline-block bg-teal-500/20 text-teal-300 border border-teal-400/30 text-xs font-bold uppercase tracking-wider px-3.5 py-1 rounded-full mb-3">
            {badge}
          </span>
        )}

        <h1 className="text-2xl sm:text-3xl md:text-4xl font-extrabold tracking-tight mb-3">
          {title}
        </h1>

        {subtitle && (
          <p className="max-w-2xl mx-auto text-sm sm:text-base text-slate-300 leading-relaxed">
            {subtitle}
          </p>
        )}
      </div>
    </section>
  );
}

export default PageHeader;