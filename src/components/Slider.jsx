import { useState } from "react";
import "../styles/Slider.css";

const images = [
  "Marquim1.png",
  "Marquim2.jpg",
  "Marquim7.png",
  "Marquim4.png"
];

export default function Slider() {
  const [current, setCurrent] = useState(0);

  const nextSlide = () => setCurrent((current + 1) % images.length);
  const prevSlide = () => setCurrent((current - 1 + images.length) % images.length);

  return (
    <div className="slider-wrapper">
      <button className="slider-button left" onClick={prevSlide}>‹</button>
      <div className="slider-track">
        {images.map((img, index) => {
          const diff = (index - current + images.length) % images.length;
          let style = {};

          if (diff === 0) {
            style = {
              transform: "translateX(0) scale(0.8) rotateY(0deg)",
              zIndex: 3,
              opacity: 1,
              filter: "none"
            };
          } else if (diff === 1) {
            style = {
              transform: "translateX(250px) scale(0.7) rotateY(20deg)",
              zIndex: 2,
              opacity: 0.4
            };
          } else if (diff === images.length - 1) {
            style = {
              transform: "translateX(-250px) scale(0.7) rotateY(-20deg)",
              zIndex: 2,
              opacity: 0.4
            };
          } else {
            style = {
              transform: "scale(0.5)",
              zIndex: 1,
              opacity: 0
            };
          }

          return (
            <img
              key={index}
              src={img}
              alt={`Slide ${index + 1}`}
              className="slider-slide"
              style={style}
            />
          );
        })}
      </div>
      <button className="slider-button right" onClick={nextSlide}>›</button>
    </div>
  );
}
