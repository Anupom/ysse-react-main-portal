import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="site-footer">
      <div className="container footer-grid">
        <div className="footer-col brand-col">
          <div className="footer-brand">
            <span className="logo-mark">YSSE</span>
            <strong>YSSE Main Portal</strong>
          </div>
          <p className="footer-desc">
            Youth School for Social Entrepreneurs (YSSE) empowers youth through leadership, social entrepreneurship, skill development, and collaborative innovation.
          </p>
          <p className="sample-disclaimer">
            * Note: This portal is an academic React demonstration built for the Week 7 Internship Assignment.
          </p>
        </div>

        <div className="footer-col">
          <h4>Quick Links</h4>
          <ul className="footer-links">
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About YSSE</Link></li>
            <li><Link to="/notices">Notice Board</Link></li>
            <li><Link to="/programs">Our Programs</Link></li>
            <li><Link to="/contact">Contact / Inquiry</Link></li>
          </ul>
        </div>

        <div className="footer-col">
          <h4>Program Tracks</h4>
          <ul className="footer-links">
            <li><Link to="/programs/1">Virtual Internship</Link></li>
            <li><Link to="/programs/2">Social Entrepreneurship</Link></li>
            <li><Link to="/programs/3">Web & Tech Innovation</Link></li>
            <li><Link to="/programs/4">Youth Leadership</Link></li>
          </ul>
        </div>

        <div className="footer-col">
          <h4>Connect With Us</h4>
          <p className="footer-contact-item">📍 Dhaka, Bangladesh</p>
          <p className="footer-contact-item">✉️ info@ysseglobal.org (Placeholder)</p>
          <div className="social-placeholders">
            <a href="#facebook" onClick={(e) => e.preventDefault()} aria-label="Facebook">FB</a>
            <a href="#linkedin" onClick={(e) => e.preventDefault()} aria-label="LinkedIn">IN</a>
            <a href="#youtube" onClick={(e) => e.preventDefault()} aria-label="YouTube">YT</a>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <div className="container footer-bottom-inner">
          <p>&copy; {new Date().getFullYear()} YSSE IT Department · Web Development & CMS Wing · Week 7 React Portal</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;