import Button from "./Button";

function ProgramCard({ program }) {
  return (
    <article className="program-card">
      <div className="program-img-wrapper">
        <img src={program.image} alt={program.title} loading="lazy" />
        <span className="program-cat-badge">{program.category}</span>
      </div>
      <div className="program-body">
        <div className="program-info-row">
          <span>⏱ {program.duration}</span>
          <span>🌐 {program.mode}</span>
        </div>
        <h3 className="program-title">{program.title}</h3>
        <p className="program-desc">{program.shortDescription}</p>
        <div className="program-footer">
          <Button to={`/programs/${program.id}`} variant="outline">
            View Details
          </Button>
        </div>
      </div>
    </article>
  );
}

export default ProgramCard;