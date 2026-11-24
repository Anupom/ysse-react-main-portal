import { useParams } from "react-router-dom";
import { programsData } from "../data/programs";
import PageHeader from "../components/PageHeader";
import Button from "../components/Button";

function ProgramDetails() {
  const { id } = useParams();
  const program = programsData.find((item) => item.id === Number(id));

  if (!program) {
    return (
      <div>
        <PageHeader
          badge="Program Not Found"
          title="Requested Program Does Not Exist"
          subtitle="We could not find any program matching the provided ID."
          breadcrumb="Program Details"
        />
        <section className="py-16">
          <div className="max-w-3xl mx-auto px-4">
            <div className="bg-white border-2 border-dashed border-slate-300 rounded-2xl p-12 text-center">
              <h3 className="text-xl font-bold text-slate-900 mb-2">
                Invalid Program ID: "{id}"
              </h3>
              <p className="text-slate-600 text-sm mb-6">
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

      <section className="py-14 md:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Main Details */}
          <div className="lg:col-span-8 bg-white border border-slate-200 rounded-2xl p-6 sm:p-8 shadow-xs">
            <img
              src={program.image}
              alt={program.title}
              className="w-full h-64 sm:h-80 object-cover rounded-xl mb-6"
            />
            <h2 className="text-2xl font-bold text-slate-900 mb-3">
              Program Overview
            </h2>
            <p className="text-slate-600 leading-relaxed mb-6">
              {program.fullDescription}
            </p>

            <h3 className="text-lg font-bold text-slate-900 mb-3">
              Key Learning & Program Highlights
            </h3>
            <ul className="divide-y divide-slate-100 border-y border-slate-100 mb-8">
              {program.highlights.map((point, index) => (
                <li key={index} className="py-3 text-sm sm:text-base text-slate-700 font-medium flex items-center gap-2.5">
                  <span className="text-teal-600 font-bold">✓</span> {point}
                </li>
              ))}
            </ul>

            <div className="flex flex-wrap gap-3.5">
              <Button to="/programs" variant="outline">
                ← Back to Programs
              </Button>
              <Button to="/contact" variant="primary">
                Inquire About This Program
              </Button>
            </div>
          </div>

          {/* Sidebar Info */}
          <aside className="lg:col-span-4 bg-white border border-slate-200 rounded-2xl p-6 shadow-xs">
            <h3 className="text-lg font-bold text-slate-900 mb-4 pb-3 border-b border-slate-100">
              Program Information
            </h3>
            <div className="space-y-3.5 text-sm">
              <div className="flex justify-between gap-2 pb-2.5 border-b border-slate-100">
                <span className="text-slate-500">Category</span>
                <strong className="text-slate-900 text-right">{program.category}</strong>
              </div>
              <div className="flex justify-between gap-2 pb-2.5 border-b border-slate-100">
                <span className="text-slate-500">Duration</span>
                <strong className="text-slate-900">{program.duration}</strong>
              </div>
              <div className="flex justify-between gap-2 pb-2.5 border-b border-slate-100">
                <span className="text-slate-500">Delivery Mode</span>
                <strong className="text-slate-900">{program.mode}</strong>
              </div>
              <div className="flex justify-between gap-2 pb-2.5 border-b border-slate-100">
                <span className="text-slate-500">Target Audience</span>
                <strong className="text-slate-900 text-right">{program.audience}</strong>
              </div>
            </div>
            <p className="mt-4 text-xs text-slate-500">
              * Sample program information for the YSSE Main Portal React + Tailwind CSS assignment.
            </p>
          </aside>
        </div>
      </section>
    </div>
  );
}

export default ProgramDetails;