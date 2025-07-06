import { useState } from 'react'
import '../styles/Slider.css'

const images = [
  "/src/images/equipamento-de-dj-1.jpg",
  "https://source.unsplash.com/800x400/?music,2",
  "https://source.unsplash.com/800x400/?party,3"
]

export default function Slider() {
  const [current, setCurrent] = useState(0)

  const nextSlide = () => setCurrent((current + 1) % images.length)
  const prevSlide = () => setCurrent((current - 1 + images.length) % images.length)

  return (
    <div className="slider-wrapper">
      <button className="slider-button left" onClick={prevSlide}>‹</button>
      <div className="slider-track" style={{  transform: `translateX(calc(50% - 150px - ${current * (300 + 16)}px))` , }}>
        {images.map((img, index) => (
          <img
            key={index}
            src={img}
            alt={`Slide ${index + 1}`}
            className={`slider-slide ${index === current ? 'active' : 'blurred'}`}
          />
        ))}
      </div>
      <button className="slider-button right" onClick={nextSlide}>›</button>
    </div>
  )
}