import PageHeader from "../components/PageHeader";
import Button from "../components/Button";

function About() {
  const activities = [
    {
      title: "Social Entrepreneurship Promotion",
      icon: "🌱",
      description:
        "Encouraging youth to design sustainable business solutions that address social, educational, and environmental challenges.",
    },
    {
      title: "Skill & Career Development",
      icon: "💻",
      description:
        "Providing structured virtual internships and hands-on training in web development, graphic design, digital marketing, and management.",
    },
    {
      title: "Youth Leadership & Networking",
      icon: "🤝",
      description:
        "Connecting motivated students across universities to practice teamwork, public speaking, and organizational leadership.",
    },
    {
      title: "Community & Awareness Initiatives",
      icon: "🌍",
      description:
        "Organizing workshops, seminars, and volunteer campaigns aligned with the Sustainable Development Goals (SDGs).",
    },
  ];

  const impactPlaceholders = [
    { label: "Active Departments & Wings", value: "Multiple Wings (Placeholder)" },
    { label: "Internship Cohorts Completed", value: "17+ Batches (Sample Metric)" },
    { label: "University Representation", value: "Nationwide Network (Placeholder)" },
    { label: "Core Focus Areas", value: "Youth, Skills & Social Impact" },
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
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white border border-slate-200 rounded-2xl p-6 sm:p-10 shadow-xs">
            <span className="inline-block bg-teal-50 text-teal-800 text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-full mb-3">
              Introduction
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mb-4">
              Who We Are & What We Stand For
            </h2>
            <p className="text-slate-600 leading-relaxed mb-4">
              <strong className="text-slate-900">Youth School for Social Entrepreneurs (YSSE)</strong> is a youth-focused organization dedicated to inspiring, educating, and equipping young people to become socially responsible leaders and innovators. By combining practical skill-building with social entrepreneurship values, YSSE creates an inclusive platform where students learn by doing.
            </p>
            <p className="text-slate-600 leading-relaxed">
              Through our diverse operational wings—including Information Technology, Web Development & CMS, Graphic Design, Content Writing, Digital Marketing, and Human Resources—participants collaborate on real projects that prepare them for future careers and community leadership.
            </p>
          </div>
        </div>
      </section>

      {/* 2. Mission & Vision */}
      <section className="py-16 bg-slate-100/80 border-y border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-2 gap-7">
          <div className="bg-white border border-slate-200 rounded-2xl p-8 shadow-xs">
            <span className="text-3xl block mb-3">🎯</span>
            <h3 className="text-xl font-bold text-slate-900 mb-2.5">Our Mission</h3>
            <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
              To empower young individuals with practical skills, entrepreneurial mindset, and ethical leadership qualities through collaborative learning, mentorship, and hands-on community and digital initiatives.
            </p>
          </div>

          <div className="bg-white border border-slate-200 rounded-2xl p-8 shadow-xs">
            <span className="text-3xl block mb-3">🔭</span>
            <h3 className="text-xl font-bold text-slate-900 mb-2.5">Our Vision</h3>
            <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
              To cultivate a self-reliant, innovative, and socially conscious generation of youth leaders who drive sustainable positive transformation in their communities and beyond.
            </p>
          </div>
        </div>
      </section>

      {/* 3. What We Do */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <span className="inline-block bg-teal-50 text-teal-800 text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-full mb-2">
              Core Pillars
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mb-2">
              What We Do
            </h2>
            <p className="text-slate-600 text-sm sm:text-base">
              Our key operational areas designed to support holistic youth development.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {activities.map((item, idx) => (
              <div
                key={idx}
                className="bg-white border border-slate-200 rounded-2xl p-6 shadow-xs flex items-start gap-4"
              >
                <div className="text-2xl bg-teal-50 p-3 rounded-xl shrink-0">
                  {item.icon}
                </div>
                <div>
                  <h3 className="text-lg font-bold text-slate-900 mb-1.5">
                    {item.title}
                  </h3>
                  <p className="text-sm text-slate-600 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Impact & Achievements */}
      <section className="py-16 bg-slate-100/80 border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <span className="inline-block bg-teal-100 text-teal-800 text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-full mb-2">
              Our Footprint
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mb-2">
              Our Impact & Milestones
            </h2>
            <p className="text-xs sm:text-sm text-slate-600">
              Clearly labelled sample/placeholder indicators demonstrating portal layout structure in accordance with assignment guidelines.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {impactPlaceholders.map((stat, idx) => (
              <div
                key={idx}
                className="bg-white border border-slate-200 rounded-xl p-6 text-center shadow-xs"
              >
                <strong className="block text-base sm:text-lg font-extrabold text-teal-700 mb-1">
                  {stat.value}
                </strong>
                <span className="text-xs sm:text-sm text-slate-600">
                  {stat.label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. Get Involved */}
      <section className="bg-gradient-to-r from-teal-800 to-slate-900 text-white py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <h2 className="text-2xl sm:text-3xl font-extrabold mb-3">
            Get Involved With YSSE
          </h2>
          <p className="text-slate-200 text-sm sm:text-base mb-7 max-w-xl mx-auto">
            Whether you want to join our internship programs, attend a workshop, or inquire about partnerships, we would love to hear from you.
          </p>
          <div className="flex flex-wrap justify-center gap-3.5">
            <Button to="/programs" variant="primary">
              Explore Programs
            </Button>
            <Button to="/contact" variant="secondary">
              Send an Inquiry
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}

export default About;