function NoticeCard({ notice, onReadMore }) {
  return (
    <article className="bg-white border border-slate-200 rounded-xl p-6 shadow-xs hover:shadow-md hover:-translate-y-1 transition-all duration-200 flex flex-col justify-between">
      <div>
        <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
          <span className="bg-teal-50 text-teal-800 border border-teal-200 text-xs font-bold px-2.5 py-1 rounded-md">
            {notice.category}
          </span>
          <span className="text-xs text-slate-500 font-medium">
            📅 {notice.date}
          </span>
        </div>

        <h3 className="text-lg font-bold text-slate-900 leading-snug mb-2.5">
          {notice.title}
        </h3>

        <p className="text-sm text-slate-600 leading-relaxed mb-5">
          {notice.summary}
        </p>
      </div>

      <div className="pt-3.5 border-t border-slate-100">
        <button
          type="button"
          onClick={() => onReadMore && onReadMore(notice)}
          className="text-sm font-bold text-teal-700 hover:text-teal-900 inline-flex items-center gap-1 cursor-pointer"
        >
          Read More <span>→</span>
        </button>
      </div>
    </article>
  );
}

export default NoticeCard;