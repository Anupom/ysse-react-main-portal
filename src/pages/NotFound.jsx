import Button from "../components/Button";

function NotFound() {
  return (
    <section className="py-20">
      <div className="max-w-2xl mx-auto px-4">
        <div className="bg-white border-2 border-dashed border-slate-300 rounded-2xl p-10 sm:p-14 text-center shadow-xs">
          <span className="text-6xl font-black text-teal-700 block mb-3">
            404
          </span>
          <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mb-3">
            Page Not Found
          </h1>
          <p className="text-slate-600 text-sm sm:text-base mb-8">
            Oops! The route you entered does not exist on the YSSE Main Portal. Please check the URL or return to the homepage.
          </p>
          <div className="flex flex-wrap justify-center gap-3.5">
            <Button to="/" variant="primary">
              Return to Home
            </Button>
            <Button to="/programs" variant="outline">
              Browse Programs
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default NotFound;