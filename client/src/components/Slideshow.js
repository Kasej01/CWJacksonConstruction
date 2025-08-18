import { useEffect, useState, useRef } from "react";
import "../styles/components/Slideshow.css";

export default function Slideshow({ images = [], fit = "cover", intervalMs = 4000 }) {
  const [i, setI] = useState(0);
  const timerRef = useRef(null);

  useEffect(() => {
    timerRef.current = setInterval(() => setI((prev) => (prev + 1) % images.length), intervalMs);
    return () => clearInterval(timerRef.current);
  }, [images.length, intervalMs]);

  const go = (n) => setI((prev) => (prev + n + images.length) % images.length);

  // Debug: Show a test message to confirm component is rendering
  // Remove this after debugging
  console.log('Slideshow component rendered');

  if (!images || images.length === 0) {
    return (
      <div className="carousel carousel--empty">
        <p>Slideshow component is rendering, but no images to display in the carousel.</p>
      </div>
    );
  }

  return (
    <div className="carousel">
      {images.map((src, idx) => (
        <img
          key={src + idx}
          src={src}
          alt={src}
          className={`carousel__slide${idx === i ? " is-active" : ""}`}
          style={{ objectFit: fit }}
          loading="lazy"
        />
      ))}

      <button className="carousel__btn carousel__btn--prev" onClick={() => go(-1)} aria-label="Previous">‹</button>
      <button className="carousel__btn carousel__btn--next" onClick={() => go(+1)} aria-label="Next">›</button>

      <div className="carousel__dots" role="tablist" aria-label="Slide selector">
        {images.map((_, idx) => (
          <button
            key={idx}
            className={`carousel__dot${idx === i ? " is-active" : ""}`}
            onClick={() => setI(idx)}
            aria-label={`Go to slide ${idx + 1}`}
            aria-selected={idx === i}
            role="tab"
          />
        ))}
      </div>
    </div>
  );
}
