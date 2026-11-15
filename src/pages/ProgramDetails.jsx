import { useParams } from "react-router-dom";
import { programsData } from "../data/programs";
import PageHeader from "../components/PageHeader";
import Button from "../components/Button";

function ProgramDetails() {
  const { id } = useParams();
  const program = programsData.find((item) => item.id === Number(id));

  // Conditional Rendering: Invalid Program ID
  if (!program) {
    return (
      <div>
        <PageHeader
          badge="Program Not Found"
          title="Requested Program Does Not Exist"
          subtitle="We could not find any program matching the provided ID."
          breadcrumb="Program Details"
        />
        <section className="section">
          <div className="container">
            <div className="empty-state">
              <h3>Invalid Program ID: "{id}"</h3>
              <p>
                The program you are looking for may have been moved or the URL parameter is invalid.
              </p>
              <Button to="/programs" variant="primary">
                ← Back to Programs
              </Button>
            </div>
          </div>
        </section>
      </div>
    );
  }

  return (
    <div>
      <PageHeader
        badge={program.category}
        title={program.title}
        subtitle={program.shortDescription}
        breadcrumb={program.title}
      />

      <section className="section">
        <div className="container details-layout">
          <div className="details-main">
            <img
              src={program.image}
              alt={program.title}
              className="details-banner-img"
            />
            <h2>Program Overview</h2>
            <p>{program.fullDescription}</p>

            <h3>Key Learning & Program Highlights</h3>
            <ul className="highlights-list">
              {program.highlights.map((point, index) => (
                <li key={index}>✓ {point}</li>
              ))}
            </ul>

            <div className="details-actions">
              <Button to="/programs" variant="outline">
                ← Back to Programs
              </Button>
              <Button to="/contact" variant="primary">
                Inquire About This Program
              </Button>
            </div>
          </div>

          <aside className="details-sidebar">
            <div className="sidebar-box">
              <h3>Program Information</h3>
              <div className="meta-item">
                <span>Category</span>
                <strong>{program.category}</strong>
              </div>
              <div className="meta-item">
                <span>Duration</span>
                <strong>{program.duration}</strong>
              </div>
              <div className="meta-item">
                <span>Delivery Mode</span>
                <strong>{program.mode}</strong>
              </div>
              <div className="meta-item">
                <span>Target Audience</span>
                <strong>{program.audience}</strong>
              </div>
              <p className="sidebar-note">
                * Sample program information for the YSSE Main Portal React Router assignment.
              </p>
            </div>
          </aside>
        </div>
      </section>
    </div>
  );
}

export default ProgramDetails;