import { useEffect, useState } from "react";
import "./Review-section.css"

const reviews = [
  {
    id: 1,
    text: "ZENVIA isn't just a restaurant; it's *the* experience. Modern, cool, and the food truly delivers. My new favorite.",
    author: "— MARCO R., FOOD CRITIC",
  },
  {
    id: 2,
    text: "Every plate is a masterpiece. The depth of flavor in the pasta is just incredible. The city's boldest kitchen by far.",
    author: "— ELENA V., LIFESTYLE BLOGGER",
  },
  {
    id: 3,
    text: "From ambiance to execution, everything feels intentional. It's rare to find a place that gets both taste and design this right.",
    author: "— DAVID K., ARCHITECT",
  },
  {
    id: 4,
    text: "The attention to detail here is unmatched. Every bite felt curated, and the overall experience was effortlessly elegant.",
    author: "— SOPHIA L., CREATIVE DIRECTOR",
  },
  {
    id: 5,
    text: "ZENVIA has redefined fine dining for me. It’s not just about food — it’s about how everything makes you feel.",
    author: "— ARJUN M., ENTREPRENEUR",
  }
];

export default function ReviewSection() {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);

  // 🔁 AUTOPLAY
  useEffect(() => {
    if (paused) return;

    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % reviews.length);
    }, 4000);

    return () => clearInterval(interval);
  }, [paused]);

  return (
    <div className="review-container" id="reviews">

      <h1 className="review-title">Guest Reviews</h1>

      {/* ⭐ STARS */}
      <div className="star-icons">
        {[...Array(5)].map((_, i) => (
          <img
            key={i}
            src="https://cdn.jsdelivr.net/npm/lucide-static/icons/star.svg"
            alt="star"
          />
        ))}
      </div>

      {/* 🔥 SLIDER */}
      <div
        className="slider"
        onMouseEnter={() => setPaused(true)}
        onMouseLeave={() => setPaused(false)}
      >
        <div
          className="slider-track"
          style={{ transform: `translateX(-${index * 100}%)` }}
        >
          {reviews.map((item) => (
            <div className="review-card" key={item.id}>
              <p className="review">"{item.text}"</p>
              <span className="reviewer">{item.author}</span>
            </div>
          ))}
        </div>
      </div>

      {/* 🔘 DOTS */}
      <div className="dots">
        {reviews.map((_, i) => (
          <span
            key={i}
            className={`dot ${i === index ? "active" : ""}`}
            onClick={() => setIndex(i)}
          />
        ))}
      </div>

    </div>
  );
}