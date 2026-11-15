import { useState } from "react";
import { programsData } from "../data/programs";
import { noticesData } from "../data/notices";
import ProgramCard from "../components/ProgramCard";
import NoticeCard from "../components/NoticeCard";
import Button from "../components/Button";

function Home() {
  const [selectedNotice, setSelectedNotice] = useState(null);

  const featuredPrograms = programsData.slice(0, 3);
  const latestNotices = noticesData.slice(0, 3);

  return (
    <div>
      {/* 1. Hero Section */}
      <section className="hero-section">
        <div className="container hero-grid">
          <div className="hero-content">
            <span className="hero-tag">Welcome to YSSE Main Portal</span>
            <h1>Empowering Youth Through Social Entrepreneurship & Innovation</h1>
            <p>
              Youth School for Social Entrepreneurs (YSSE) is a youth-led platform dedicated to nurturing changemakers, building practical career skills, and fostering positive community impact.
            </p>
            <div className="hero-actions">
              <Button to="/programs" variant="primary">Explore Programs</Button>
              <Button to="/about" variant="secondary">Learn About YSSE</Button>
            </div>
          </div>
          <div className="hero-visual">
            <img
              src="https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&w=900&q=80"
              alt="Youth collaboration at YSSE"
            />
          </div>
        </div>
      </section>

      {/* 2. About YSSE Preview Section */}
      <section className="section">
        <div className="container about-preview-box">
          <div className="about-preview-text">
            <span className="section-label">Who We Are</span>
            <h2>Building a Generation of Socially Conscious Leaders</h2>
            <p>
              At YSSE, we believe young people possess the creativity and determination needed to solve real-world problems. Through virtual internships, skill development workshops, and entrepreneurship bootcamps, we bridge the gap between academic learning and practical leadership.
            </p>
            <Button to="/about" variant="outline">Learn More About Us →</Button>
          </div>
          <div className="about-preview-stats">
            <div className="stat-card">
              <strong>Youth-Led</strong>
              <span>Collaborative Learning Ecosystem</span>
            </div>
            <div className="stat-card">
              <strong>Multi-Wing</strong>
              <span>IT, Design, Marketing, HR & Research</span>
            </div>
            <div className="stat-card">
              <strong>Impact Driven</strong>
              <span>Focused on SDGs & Youth Empowerment</span>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Featured Programs Section */}
      <section className="section bg-light">
        <div className="container">
          <div className="section-header-row">
            <div>
              <span className="section-label">What We Offer</span>
              <h2>Featured Programs</h2>
            </div>
            <Button to="/programs" variant="outline">View All Programs</Button>
          </div>

          <div className="grid-3">
            {featuredPrograms.map((program) => (
              <ProgramCard key={program.id} program={program} />
            ))}
          </div>
        </div>
      </section>

      {/* 4. Latest Notices Section */}
      <section className="section">
        <div className="container">
          <div className="section-header-row">
            <div>
              <span className="section-label">Stay Updated</span>
              <h2>Latest Notices & Announcements</h2>
            </div>
            <Button to="/notices" variant="outline">View All Notices</Button>
          </div>

          <div className="grid-3">
            {latestNotices.map((notice) => (
              <NoticeCard
                key={notice.id}
                notice={notice}
                onReadMore={(item) => setSelectedNotice(item)}
              />
            ))}
          </div>
        </div>
      </section>

      {/* 5. Call-to-Action Section */}
      <section className="cta-section">
        <div className="container cta-box">
          <h2>Ready to Start Your Changemaker Journey with YSSE?</h2>
          <p>
            Explore our development programs or reach out to our team with your questions and collaboration inquiries.
          </p>
          <div className="hero-actions justify-center">
            <Button to="/programs" variant="primary">Browse Programs</Button>
            <Button to="/contact" variant="secondary">Contact Us</Button>
          </div>
        </div>
      </section>

      {/* Notice Modal */}
      {selectedNotice && (
        <div className="modal-overlay" onClick={() => setSelectedNotice(null)}>
          <div className="modal-box" onClick={(e) => e.stopPropagation()}>
            <div className="notice-meta">
              <span className="notice-badge">{selectedNotice.category}</span>
              <span className="notice-date">📅 {selectedNotice.date}</span>
            </div>
            <h3>{selectedNotice.title}</h3>
            <p className="modal-details">{selectedNotice.details}</p>
            <Button variant="primary" onClick={() => setSelectedNotice(null)}>
              Close Notice
            </Button>
          </div>
        </div>
      )}
    </div>
  );
}

export default Home;