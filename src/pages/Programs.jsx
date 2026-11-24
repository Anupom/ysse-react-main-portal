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
    "Community Engagement",
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

      <section className="py-14 md:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Category Filter Pills */}
          <div className="flex flex-wrap justify-center gap-2.5 mb-10">
            {categories.map((cat) => (
              <button
                key={cat}
                type="button"
                onClick={() => setSelectedCategory(cat)}
                className={`px-4 py-2 rounded-full text-xs sm:text-sm font-semibold border transition-colors cursor-pointer ${
                  selectedCategory === cat
                    ? "bg-teal-700 text-white border-teal-700 shadow-xs"
                    : "bg-white text-slate-700 border-slate-300 hover:border-teal-600 hover:text-teal-700"
                }`}
              >
                {cat === "All" ? "All Programs" : cat}
              </button>
            ))}
          </div>

          {filteredPrograms.length === 0 ? (
            <div className="bg-white border-2 border-dashed border-slate-300 rounded-2xl p-12 text-center">
              <h3 className="text-lg font-bold text-slate-900 mb-4">
                No programs found in this category.
              </h3>
              <Button variant="primary" onClick={() => setSelectedCategory("All")}>
                View All Programs
              </Button>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">
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