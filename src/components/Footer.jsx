import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="bg-slate-900 text-slate-300 pt-14 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand Column */}
          <div>
            <div className="flex items-center gap-2.5 text-white mb-3">
              <span className="bg-teal-600 text-white font-extrabold text-xs px-2.5 py-1.5 rounded-md">
                YSSE
              </span>
              <strong className="text-lg font-bold">YSSE Main Portal</strong>
            </div>
            <p className="text-sm text-slate-400 leading-relaxed mb-3">
              Youth School for Social Entrepreneurs (YSSE) empowers young changemakers through leadership, skill development, and collaborative social innovation.
            </p>
            <p className="text-xs text-teal-400">
              * Academic React + Tailwind CSS demonstration for Week 8 Assignment.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-bold text-sm uppercase tracking-wider mb-4">
              Quick Links
            </h4>
            <ul className="space-y-2.5 text-sm">
              <li><Link to="/" className="hover:text-teal-400 transition-colors">Home</Link></li>
              <li><Link to="/about" className="hover:text-teal-400 transition-colors">About YSSE</Link></li>
              <li><Link to="/notices" className="hover:text-teal-400 transition-colors">Notice Board</Link></li>
              <li><Link to="/programs" className="hover:text-teal-400 transition-colors">Our Programs</Link></li>
              <li><Link to="/contact" className="hover:text-teal-400 transition-colors">Contact / Inquiry</Link></li>
            </ul>
          </div>

          {/* Program Tracks */}
          <div>
            <h4 className="text-white font-bold text-sm uppercase tracking-wider mb-4">
              Featured Tracks
            </h4>
            <ul className="space-y-2.5 text-sm">
              <li><Link to="/programs/1" className="hover:text-teal-400 transition-colors">Virtual Internship</Link></li>
              <li><Link to="/programs/2" className="hover:text-teal-400 transition-colors">Social Entrepreneurship</Link></li>
              <li><Link to="/programs/3" className="hover:text-teal-400 transition-colors">Web & Tech Innovation</Link></li>
              <li><Link to="/programs/4" className="hover:text-teal-400 transition-colors">Youth Leadership</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-white font-bold text-sm uppercase tracking-wider mb-4">
              Connect With Us
            </h4>
            <p className="text-sm text-slate-400 mb-2">📍 Dhaka, Bangladesh</p>
            <p className="text-sm text-slate-400 mb-4">✉️ info@ysseglobal.org (Placeholder)</p>
            <div className="flex items-center gap-2.5">
              {["FB", "IN", "YT"].map((social) => (
                <a
                  key={social}
                  href={`#${social.toLowerCase()}`}
                  onClick={(e) => e.preventDefault()}
                  className="w-9 h-9 rounded-full bg-slate-800 hover:bg-teal-700 text-teal-400 hover:text-white flex items-center justify-center text-xs font-bold transition-colors"
                >
                  {social}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Copyright */}
      <div className="border-t border-slate-800 py-5 text-center text-xs sm:text-sm text-slate-400 px-4">
        &copy; {new Date().getFullYear()} YSSE IT Department · Web Development & CMS Wing · Week 8 Tailwind CSS Portal
      </div>
    </footer>
  );
}

export default Footer;