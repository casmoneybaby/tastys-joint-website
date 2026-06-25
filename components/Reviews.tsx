import Link from "next/link";

const reviews = [
  {
    quote:
      "Hands down the best burger in Marin County. The Sausalito is absolutely incredible — I drive from Mill Valley just for it.",
    author: "Jordan M.",
    source: "Yelp",
  },
  {
    quote:
      "Fresh, bold, and totally unforgettable. The Truffle Smash changed my life. Incredible atmosphere too.",
    author: "Priya K.",
    source: "Google",
  },
];

export default function Reviews() {
  return (
    <div className="content-strip-col" id="reviews">
      <div className="section-label">
        <span className="section-label-title">What People Are Saying</span>
        <Link href="#reviews" className="section-label-link" aria-label="View all reviews">
          VIEW ALL
        </Link>
      </div>

      <div className="reviews-grid">
        {reviews.map((review) => (
          <article key={review.author} className="review-card">
            {/* Stars */}
            <div className="review-stars" aria-label="5 out of 5 stars">
              {Array.from({ length: 5 }).map((_, i) => (
                <StarIcon key={i} />
              ))}
            </div>

            <p className="review-quote">&ldquo;{review.quote}&rdquo;</p>

            <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
              <p className="review-author">{review.author}</p>
              <p style={{
                fontFamily: "var(--font-inter)",
                fontSize: "0.6rem",
                color: "var(--gray)",
                letterSpacing: "0.1em",
                textTransform: "uppercase",
              }}>
                via {review.source}
              </p>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}

function StarIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 20 20"
      fill="currentColor"
      width={13}
      height={13}
      aria-hidden="true"
      style={{ color: "var(--gold)" }}
    >
      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
    </svg>
  );
}
