import { Link } from "react-router-dom";

function Button({
  children,
  to,
  onClick,
  type = "button",
  variant = "primary",
  className = "",
}) {
  const baseStyles =
    "inline-flex items-center justify-center gap-2 rounded-lg px-5 py-2.5 text-sm font-semibold transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 cursor-pointer";

  const variants = {
    primary:
      "bg-teal-700 text-white hover:bg-teal-800 focus:ring-teal-600 shadow-sm",
    secondary:
      "bg-white text-slate-900 hover:bg-slate-100 focus:ring-slate-300 shadow-sm",
    outline:
      "border border-teal-700 text-teal-700 bg-transparent hover:bg-teal-700 hover:text-white focus:ring-teal-600",
    ghost:
      "text-slate-700 hover:bg-slate-100 focus:ring-slate-300",
  };

  const combinedClasses = `${baseStyles} ${variants[variant] || variants.primary} ${className}`.trim();

  if (to) {
    return (
      <Link to={to} className={combinedClasses}>
        {children}
      </Link>
    );
  }

  return (
    <button type={type} onClick={onClick} className={combinedClasses}>
      {children}
    </button>
  );
}

export default Button;