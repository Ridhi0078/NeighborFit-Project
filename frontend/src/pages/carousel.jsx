import { useEffect, useState } from "react";

const images = [
  "/assets1/image8.jpg",
  "/assets1/image12.jpg",
  "/assets1/image3.jpg",
  "/assets1/image10.jpg",
  "/assets1/image5.jpg",
];

export default function Carousel() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 4000); // Change image every 4s
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-full h-screen overflow-hidden">
      {/* Images */}
      {images.map((img, index) => (
        <div
          key={index}
          className={`absolute inset-0 w-full h-full bg-cover bg-center transition-opacity duration-1000 ${
            index === current ? "opacity-100" : "opacity-0"
          }`}
          style={{ backgroundImage: `url(${img})` }}
        ></div>
      ))}

      {/* Dark overlay for better text contrast (optional, you can remove if you want clear images) */}
      <div className="absolute inset-0 bg-black/40"></div>
    </div>
  );
}
