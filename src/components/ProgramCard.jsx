import Button from "./Button";

function ProgramCard({ program }) {
  return (
    <article className="bg-white border border-slate-200 rounded-xl overflow-hidden shadow-xs hover:shadow-md hover:-translate-y-1 transition-all duration-200 flex flex-col">
      <div className="relative h-48 bg-slate-200 overflow-hidden">
        <img
          src={program.image}
          alt={program.title}
          loading="lazy"
          className="w-full h-full object-cover"
        />
        <span className="absolute top-3 left-3 bg-slate-900/85 backdrop-blur-xs text-teal-300 text-xs font-semibold px-3 py-1 rounded-md">
          {program.category}
        </span>
      </div>

      <div className="p-5 flex flex-col flex-1">
        <div className="flex items-center justify-between text-xs text-slate-500 font-medium mb-2.5">
          <span>⏱ {program.duration}</span>
          <span>🌐 {program.mode}</span>
        </div>

        <h3 className="text-lg font-bold text-slate-900 leading-snug mb-2">
          {program.title}
        </h3>

        <p className="text-sm text-slate-600 leading-relaxed mb-5 flex-1">
          {program.shortDescription}
        </p>

        <div className="pt-3.5 border-t border-slate-100">
          <Button to={`/programs/${program.id}`} variant="outline" className="w-full">
            View Details
          </Button>
        </div>
      </div>
    </article>
  );
}

export default ProgramCard;