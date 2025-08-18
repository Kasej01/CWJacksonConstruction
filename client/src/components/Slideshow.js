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

  return (
    <div className="sqc">
      {images.map((src, idx) => (
        <img
          key={src + idx}
          src={src}
          alt=""
          className={`sqc__slide ${idx === i ? "is-active" : ""}`}
          style={{ objectFit: fit }}
          loading="lazy"
        />
      ))}

      <button className="sqc__btn sqc__btn--prev" onClick={() => go(-1)} aria-label="Previous">‹</button>
      <button className="sqc__btn sqc__btn--next" onClick={() => go(+1)} aria-label="Next">›</button>

      <div className="sqc__dots" role="tablist" aria-label="Slide selector">
        {images.map((_, idx) => (
          <button
            key={idx}
            className={`sqc__dot ${idx === i ? "is-active" : ""}`}
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
