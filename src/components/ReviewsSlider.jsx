import { useState } from "react";
import "../styles/ReviewsSlider.css";
import ReviewCard from "./ReviewCard";

const reviews = [
  {
    name: "Ana Paula",
    rating: 5,
    date: "10/07/2025",
    comment: "Simplesmente incrível! O DJ Marquim levantou a festa do começo ao fim!"
  },
  {
    name: "Carlos Henrique",
    rating: 4,
    date: "03/07/2025",
    comment: "Ótima vibe, som de qualidade. Só faltou tocar meu pedido 😅"
  },
  {
    name: "Letícia Souza",
    rating: 5,
    date: "28/06/2025",
    comment: "Foi o melhor show da minha vida! Energia lá no alto!"
  },
  {
    name: "Fábio Castro",
    rating: 5,
    date: "20/06/2025",
    comment: "Sensacional! O melhor do país, podem contratar sem medo."
  }
];


export default function ReviewsSlider() {
  const [current, setCurrent] = useState(0);

  const isMobile = window.innerWidth <= 1160;

  const nextSlide = () =>
    setCurrent((current + 1) % reviews.length);

  const prevSlide = () =>
    setCurrent((current - 1 + reviews.length) % reviews.length);

  return (
    <div className="vertical-slider-wrapper">
      <button className="reviewslider-button up" onClick={nextSlide}>▼</button>

      <div className="vertical-slider-track">
        {reviews.map((review, index) => {
          const length = reviews.length;
          let diff = index - current;
          if (diff > length / 2) diff -= length;
          if (diff < -length / 2) diff += length;
          let style = {};

          if (diff === 0) {
            style = {
              transform: "scale(1.1)",
              zIndex: 3,
              opacity: 1,
              filter: "none",
              height: "clamp(90px, 16vh, 140px)",
              width: "100%"
            };
          } else if (diff === 1 || diff === -1) {
            style = {
              transform: "scale(0.9)",
              zIndex: 2,
              opacity: 0.4,
              filter: "blur(2px)",
              height: "clamp(60px, 12vh, 100px)"
            };
          } else {
            style = {
              transform: "scale(0.7)",
              zIndex: 1,
              opacity: 0,
              height: 0,
              overflow: "hidden"
            };
          }

          return (
            <div
              key={index}
              className="reviewslider-slide-vertical"
              style={style}
            >
              <ReviewCard {...review} />
            </div>
          );
        })}
      </div>
    </div>
  );
}