import "../styles/ReviewCard.css";

export default function ReviewCard({ name, rating, date, comment }) {
  return (
    <div className="review-card">
      <div className="review-header">
        <div className="review-name">{name}</div>
        <div className="review-stars">
          {Array.from({ length: 5 }, (_, i) => (
            <span key={i} className={i < rating ? "filled" : ""}>★</span>
          ))}
        </div>
      </div>
      <div className="review-date">{date}</div>
      <div className="review-comment">"{comment}"</div>
    </div>
  );
}