import { useState } from "react";
import { programsData } from "../data/programs";
import PageHeader from "../components/PageHeader";
import ProgramCard from "../components/ProgramCard";
import Button from "../components/Button";

function Programs() {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const categories = [
    "All",
    "Career Development",
    "Entrepreneurship",
    "Technology & Innovation",
    "Leadership",
    "Training & Development",
    "Community Engagement"
  ];

  const filteredPrograms =
    selectedCategory === "All"
      ? programsData
      : programsData.filter((item) => item.category === selectedCategory);

  return (
    <div>
      <PageHeader
        badge="YSSE Initiatives (Sample)"
        title="Our Programs & Activities"
        subtitle="Explore our sample youth development tracks, internships, and entrepreneurship programs."
        breadcrumb="Programs"
      />

      <section className="section">
        <div className="container">
          {/* Category Pills */}
          <div className="category-pills">
            {categories.map((cat) => (
              <button
                key={cat}
                type="button"
                className={`pill-btn ${selectedCategory === cat ? "active" : ""}`}
                onClick={() => setSelectedCategory(cat)}
              >
                {cat === "All" ? "All Programs" : cat}
              </button>
            ))}
          </div>

          {/* Conditional Rendering */}
          {filteredPrograms.length === 0 ? (
            <div className="empty-state">
              <h3>No programs found in this category.</h3>
              <Button variant="primary" onClick={() => setSelectedCategory("All")}>
                View All Programs
              </Button>
            </div>
          ) : (
            <div className="grid-3">
              {filteredPrograms.map((program) => (
                <ProgramCard key={program.id} program={program} />
              ))}
            </div>
          )}
        </div>
      </section>
    </div>
  );
}

export default Programs;