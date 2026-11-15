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
    "Recruitment Notice"
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

      <section className="section">
        <div className="container">
          {/* Filter & Search Bar */}
          <div className="filter-bar">
            <input
              type="text"
              className="filter-input"
              placeholder="Search notices by keyword..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            <select
              className="filter-select"
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
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

          {/* Conditional Rendering for Empty State */}
          {filteredNotices.length === 0 ? (
            <div className="empty-state">
              <h3>No notices available matching your criteria.</h3>
              <p>Try clearing your search keyword or selecting a different notice category.</p>
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
            <div className="grid-3">
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
        <div className="modal-overlay" onClick={() => setActiveNotice(null)}>
          <div className="modal-box" onClick={(e) => e.stopPropagation()}>
            <div className="notice-meta">
              <span className="notice-badge">{activeNotice.category}</span>
              <span className="notice-date">📅 {activeNotice.date}</span>
            </div>
            <h3>{activeNotice.title}</h3>
            <p className="modal-details">{activeNotice.details}</p>
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