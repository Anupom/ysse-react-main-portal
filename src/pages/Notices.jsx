import { useState } from "react";
import { noticesData } from "../data/notices";
import PageHeader from "../components/PageHeader";
import NoticeCard from "../components/NoticeCard";
import Button from "../components/Button";

function Notices() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [activeNotice, setActiveNotice] = useState(null);

  const categories = [
    "All",
    "General Announcement",
    "Internship Notice",
    "Event Announcement",
    "Training & Workshop",
    "Recruitment Notice",
  ];

  const filteredNotices = noticesData.filter((notice) => {
    const matchesCategory =
      selectedCategory === "All" || notice.category === selectedCategory;
    const cleanQuery = searchQuery.trim().toLowerCase();
    const matchesSearch =
      !cleanQuery ||
      notice.title.toLowerCase().includes(cleanQuery) ||
      notice.summary.toLowerCase().includes(cleanQuery);
    return matchesCategory && matchesSearch;
  });

  return (
    <div>
      <PageHeader
        badge="Official Updates (Sample)"
        title="YSSE Notice Board"
        subtitle="Browse sample announcements, internship updates, workshop schedules, and recruitment notices."
        breadcrumb="Notices"
      />

      <section className="py-14 md:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Search & Category Filter */}
          <div className="bg-white border border-slate-200 rounded-xl p-4 mb-8 shadow-xs flex flex-col sm:flex-row gap-3.5">
            <input
              type="text"
              placeholder="Search notices by keyword..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="flex-1 rounded-lg border border-slate-300 px-4 py-2.5 text-sm focus:border-teal-600 focus:ring-2 focus:ring-teal-500/20 focus:outline-none"
            />
            <select
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
              className="sm:w-64 rounded-lg border border-slate-300 px-3.5 py-2.5 text-sm bg-white focus:border-teal-600 focus:ring-2 focus:ring-teal-500/20 focus:outline-none"
            >
              {categories.map((cat) => (
                <option key={cat} value={cat}>
                  {cat === "All" ? "All Categories" : cat}
                </option>
              ))}
            </select>
            {(searchQuery || selectedCategory !== "All") && (
              <Button
                variant="outline"
                onClick={() => {
                  setSearchQuery("");
                  setSelectedCategory("All");
                }}
              >
                Reset
              </Button>
            )}
          </div>

          {/* Conditional Empty State */}
          {filteredNotices.length === 0 ? (
            <div className="bg-white border-2 border-dashed border-slate-300 rounded-2xl p-12 text-center">
              <h3 className="text-lg font-bold text-slate-900 mb-2">
                No notices available matching your criteria.
              </h3>
              <p className="text-sm text-slate-600 mb-6">
                Try clearing your search keyword or selecting a different notice category.
              </p>
              <Button
                variant="primary"
                onClick={() => {
                  setSearchQuery("");
                  setSelectedCategory("All");
                }}
              >
                Show All Notices
              </Button>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">
              {filteredNotices.map((notice) => (
                <NoticeCard
                  key={notice.id}
                  notice={notice}
                  onReadMore={(item) => setActiveNotice(item)}
                />
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Notice Details Modal */}
      {activeNotice && (
        <div
          className="fixed inset-0 z-50 bg-slate-900/65 backdrop-blur-xs flex items-center justify-center p-4"
          onClick={() => setActiveNotice(null)}
        >
          <div
            className="bg-white rounded-2xl max-w-lg w-full p-6 sm:p-7 shadow-xl"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between gap-2 mb-3">
              <span className="bg-teal-50 text-teal-800 text-xs font-bold px-2.5 py-1 rounded-md">
                {activeNotice.category}
              </span>
              <span className="text-xs text-slate-500">📅 {activeNotice.date}</span>
            </div>
            <h3 className="text-xl font-bold text-slate-900 mb-3">
              {activeNotice.title}
            </h3>
            <p className="text-sm text-slate-600 leading-relaxed mb-6">
              {activeNotice.details}
            </p>
            <Button variant="primary" onClick={() => setActiveNotice(null)}>
              Close
            </Button>
          </div>
        </div>
      )}
    </div>
  );
}

export default Notices;