function NoticeCard({ notice, onReadMore }) {
  return (
    <article className="notice-card">
      <div className="notice-meta">
        <span className="notice-badge">{notice.category}</span>
        <span className="notice-date">📅 {notice.date}</span>
      </div>
      <h3 className="notice-title">{notice.title}</h3>
      <p className="notice-summary">{notice.summary}</p>
      <div className="notice-footer">
        <button
          type="button"
          className="btn-text-link"
          onClick={() => onReadMore && onReadMore(notice)}
        >
          Read More →
        </button>
      </div>
    </article>
  );
}

export default NoticeCard;