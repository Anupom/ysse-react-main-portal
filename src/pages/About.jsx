import PageHeader from "../components/PageHeader";
import Button from "../components/Button";

function About() {
  const activities = [
    {
      title: "Social Entrepreneurship Promotion",
      icon: "🌱",
      description: "Encouraging youth to design sustainable business solutions that address social, educational, and environmental challenges."
    },
    {
      title: "Skill & Career Development",
      icon: "💻",
      description: "Providing structured virtual internships and hands-on training in web development, graphic design, digital marketing, and management."
    },
    {
      title: "Youth Leadership & Networking",
      icon: "🤝",
      description: "Connecting motivated students across universities to practice teamwork, public speaking, and organizational leadership."
    },
    {
      title: "Community & Awareness Initiatives",
      icon: "🌍",
      description: "Organizing workshops, seminars, and volunteer campaigns aligned with the Sustainable Development Goals (SDGs)."
    }
  ];

  const impactPlaceholders = [
    { label: "Active Departments & Wings", value: "Multiple Wings (Placeholder)" },
    { label: "Internship Cohorts Completed", value: "17+ Batches (Sample Metric)" },
    { label: "University Representation", value: "Nationwide Network (Placeholder)" },
    { label: "Core Focus Areas", value: "Youth, Skills & Social Impact" }
  ];

  return (
    <div>
      <PageHeader
        badge="About Organization"
        title="About Youth School for Social Entrepreneurs (YSSE)"
        subtitle="Discover our purpose, mission, vision, and commitment to youth empowerment."
        breadcrumb="About"
      />

      {/* 1. Introduction */}
      <section className="section">
        <div className="container">
          <div className="content-card">
            <span className="section-label">Introduction</span>
            <h2>Who We Are & What We Stand For</h2>
            <p>
              <strong>Youth School for Social Entrepreneurs (YSSE)</strong> is a youth-focused organization dedicated to inspiring, educating, and equipping young people to become socially responsible leaders and innovators. By combining practical skill-building with social entrepreneurship values, YSSE creates an inclusive platform where students learn by doing.
            </p>
            <p>
              Through our diverse operational wings—including Information Technology, Web Development & CMS, Graphic Design, Content Writing, Digital Marketing, and Human Resources—participants collaborate on real projects that prepare them for future careers and community leadership.
            </p>
          </div>
        </div>
      </section>

      {/* 2. Mission & Vision */}
      <section className="section bg-light">
        <div className="container grid-2">
          <div className="info-panel">
            <span className="panel-icon">🎯</span>
            <h3>Our Mission</h3>
            <p>
              To empower young individuals with practical skills, entrepreneurial mindset, and ethical leadership qualities through collaborative learning, mentorship, and hands-on community and digital initiatives.
            </p>
          </div>

          <div className="info-panel">
            <span className="panel-icon">🔭</span>
            <h3>Our Vision</h3>
            <p>
              To cultivate a self-reliant, innovative, and socially conscious generation of youth leaders who drive sustainable positive transformation in their communities and beyond.
            </p>
          </div>
        </div>
      </section>

      {/* 3. What We Do */}
      <section className="section">
        <div className="container">
          <div className="section-center-head">
            <span className="section-label">Core Pillars</span>
            <h2>What We Do</h2>
            <p>Our key operational areas designed to support holistic youth development.</p>
          </div>

          <div className="grid-2">
            {activities.map((item, index) => (
              <div key={index} className="activity-card">
                <div className="activity-icon">{item.icon}</div>
                <div>
                  <h3>{item.title}</h3>
                  <p>{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Our Impact / Achievements */}
      <section className="section bg-light">
        <div className="container">
          <div className="section-center-head">
            <span className="section-label">Our Footprint</span>
            <h2>Our Impact & Milestones</h2>
            <p>
              Clearly labelled sample/placeholder indicators demonstrating portal layout structure in accordance with assignment guidelines.
            </p>
          </div>

          <div className="grid-4">
            {impactPlaceholders.map((stat, idx) => (
              <div key={idx} className="impact-box">
                <strong>{stat.value}</strong>
                <span>{stat.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. Get Involved CTA */}
      <section className="cta-section">
        <div className="container cta-box">
          <h2>Get Involved With YSSE</h2>
          <p>
            Whether you want to join our internship programs, attend a workshop, or inquire about partnerships, we would love to hear from you.
          </p>
          <div className="hero-actions justify-center">
            <Button to="/programs" variant="primary">Explore Programs</Button>
            <Button to="/contact" variant="secondary">Send an Inquiry</Button>
          </div>
        </div>
      </section>
    </div>
  );
}

export default About;