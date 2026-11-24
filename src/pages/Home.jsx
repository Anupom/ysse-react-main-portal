import { useState } from "react";
import { programsData } from "../data/programs";
import { noticesData } from "../data/notices";
import { eventsData } from "../data/events";
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
      <section className="bg-gradient-to-br from-slate-900 via-slate-800 to-teal-950 text-white py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          <div className="lg:col-span-7">
            <span className="inline-block bg-teal-500/20 text-teal-300 border border-teal-400/30 text-xs font-bold uppercase tracking-wider px-3.5 py-1 rounded-full mb-4">
              Welcome to YSSE Main Portal
            </span>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold leading-tight tracking-tight mb-5">
              Empowering Youth Through Social Entrepreneurship & Innovation
            </h1>
            <p className="text-base sm:text-lg text-slate-300 leading-relaxed mb-8 max-w-2xl">
              Youth School for Social Entrepreneurs (YSSE) is a youth-led platform dedicated to nurturing changemakers, building practical career skills, and fostering positive community impact.
            </p>
            <div className="flex flex-wrap gap-3.5">
              <Button to="/programs" variant="primary">
                Explore Programs
              </Button>
              <Button to="/about" variant="secondary">
                Learn About YSSE
              </Button>
            </div>
          </div>

          <div className="lg:col-span-5">
            <img
              src="https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&w=900&q=80"
              alt="Youth collaboration at YSSE"
              className="rounded-2xl shadow-2xl border border-white/10 w-full object-cover"
            />
          </div>
        </div>
      </section>

      {/* 2. About YSSE Preview */}
      <section className="py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white border border-slate-200 rounded-2xl p-6 sm:p-10 shadow-xs grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-7">
              <span className="inline-block bg-teal-50 text-teal-800 text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-full mb-3">
                Who We Are
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mb-4">
                Building a Generation of Socially Conscious Leaders
              </h2>
              <p className="text-slate-600 leading-relaxed mb-6">
                At YSSE, we believe young people possess the creativity and determination needed to solve real-world problems. Through virtual internships, skill development workshops, and entrepreneurship bootcamps, we bridge the gap between academic learning and practical leadership.
              </p>
              <Button to="/about" variant="outline">
                Learn More About Us →
              </Button>
            </div>

            <div className="lg:col-span-5 flex flex-col gap-3.5">
              <div className="bg-slate-50 p-4 rounded-xl border-l-4 border-teal-700">
                <strong className="block text-slate-900 text-base">Youth-Led Ecosystem</strong>
                <span className="text-sm text-slate-600">Collaborative peer-to-peer learning environment</span>
              </div>
              <div className="bg-slate-50 p-4 rounded-xl border-l-4 border-teal-700">
                <strong className="block text-slate-900 text-base">Multi-Wing Operations</strong>
                <span className="text-sm text-slate-600">IT, Web CMS, Design, Marketing, HR & Research</span>
              </div>
              <div className="bg-slate-50 p-4 rounded-xl border-l-4 border-teal-700">
                <strong className="block text-slate-900 text-base">Impact & SDG Focused</strong>
                <span className="text-sm text-slate-600">Driving sustainable community transformation</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Featured Programs */}
      <section className="py-16 bg-slate-100/80 border-y border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-10">
            <div>
              <span className="inline-block bg-teal-100 text-teal-800 text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-full mb-2">
                What We Offer
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900">
                Featured Programs
              </h2>
            </div>
            <Button to="/programs" variant="outline">
              View All Programs
            </Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">
            {featuredPrograms.map((program) => (
              <ProgramCard key={program.id} program={program} />
            ))}
          </div>
        </div>
      </section>

      {/* 4. Latest Notices */}
      <section className="py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-10">
            <div>
              <span className="inline-block bg-teal-50 text-teal-800 text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-full mb-2">
                Stay Updated
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900">
                Latest Notices & Announcements
              </h2>
            </div>
            <Button to="/notices" variant="outline">
              View All Notices
            </Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">
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

      {/* 5. Upcoming Events Section (Required in Week 8) */}
      <section className="py-16 bg-slate-100/80 border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <span className="inline-block bg-teal-100 text-teal-800 text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-full mb-2">
              Mark Your Calendar (Sample)
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mb-2">
              Upcoming Events & Workshops
            </h2>
            <p className="text-sm sm:text-base text-slate-600">
              Explore upcoming youth summits, skill-building bootcamps, and virtual community sessions.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {eventsData.map((event) => (
              <div
                key={event.id}
                className="bg-white border border-slate-200 rounded-xl p-6 shadow-xs flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between gap-2 mb-3">
                    <span className="bg-amber-50 text-amber-800 border border-amber-200 text-xs font-bold px-2.5 py-1 rounded-md">
                      {event.category}
                    </span>
                    <span className="text-xs font-semibold text-teal-700">
                      {event.date}
                    </span>
                  </div>
                  <h3 className="text-lg font-bold text-slate-900 mb-2">
                    {event.title}
                  </h3>
                  <p className="text-sm text-slate-600 mb-4">{event.summary}</p>
                </div>
                <div className="pt-3 border-t border-slate-100 text-xs text-slate-500 space-y-1">
                  <p>🕒 {event.time}</p>
                  <p>📍 {event.location}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. Call to Action */}
      <section className="bg-gradient-to-r from-teal-800 to-slate-900 text-white py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <h2 className="text-2xl sm:text-3xl font-extrabold mb-3">
            Ready to Start Your Changemaker Journey with YSSE?
          </h2>
          <p className="text-slate-200 text-sm sm:text-base mb-7 max-w-2xl mx-auto">
            Explore our development programs or reach out to our team with your questions and collaboration inquiries.
          </p>
          <div className="flex flex-wrap justify-center gap-3.5">
            <Button to="/programs" variant="primary">
              Browse Programs
            </Button>
            <Button to="/contact" variant="secondary">
              Contact Us
            </Button>
          </div>
        </div>
      </section>

      {/* Notice Modal */}
      {selectedNotice && (
        <div
          className="fixed inset-0 z-50 bg-slate-900/65 backdrop-blur-xs flex items-center justify-center p-4"
          onClick={() => setSelectedNotice(null)}
        >
          <div
            className="bg-white rounded-2xl max-w-lg w-full p-6 sm:p-7 shadow-xl"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between gap-2 mb-3">
              <span className="bg-teal-50 text-teal-800 text-xs font-bold px-2.5 py-1 rounded-md">
                {selectedNotice.category}
              </span>
              <span className="text-xs text-slate-500">📅 {selectedNotice.date}</span>
            </div>
            <h3 className="text-xl font-bold text-slate-900 mb-3">
              {selectedNotice.title}
            </h3>
            <p className="text-sm text-slate-600 leading-relaxed mb-6">
              {selectedNotice.details}
            </p>
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