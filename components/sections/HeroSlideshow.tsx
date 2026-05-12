"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

const images = [
  { src: "/hero-1.jpg", alt: "Student athlete studying with mentor at LSU" },
  { src: "/hero-2.jpg", alt: "UCLA women's basketball national champions" },
  { src: "/hero-3.jpg", alt: "University of Washington athletes studying" },
  { src: "/hero-4.jpg", alt: "Michigan State athlete at computer" },
  { src: "/hero-5.jpg", alt: "Student athletes at career conference" },
];

export default function HeroSlideshow() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div
      style={{
        position: "relative",
        width: "100%",
        aspectRatio: "4 / 3",
        borderRadius: 16,
        overflow: "hidden",
        border: "1px solid #2a2a2a",
        boxShadow: "0 0 60px rgba(0,0,0,0.6)",
      }}
    >
      {images.map((img, i) => (
        <Image
          key={img.src}
          src={img.src}
          alt={img.alt}
          fill
          style={{
            objectFit: "cover",
            opacity: i === current ? 1 : 0,
            transition: "opacity 1s ease-in-out",
          }}
          priority={i === 0}
        />
      ))}

      {/* Dots */}
      <div
        style={{
          position: "absolute",
          bottom: 16,
          left: "50%",
          transform: "translateX(-50%)",
          display: "flex",
          gap: 8,
          zIndex: 10,
        }}
      >
        {images.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrent(i)}
            style={{
              width: i === current ? 20 : 8,
              height: 8,
              borderRadius: 4,
              background: i === current ? "var(--accent)" : "rgba(255,255,255,0.3)",
              border: "none",
              cursor: "pointer",
              padding: 0,
              transition: "all 0.3s",
            }}
          />
        ))}
      </div>
    </div>
  );
}
