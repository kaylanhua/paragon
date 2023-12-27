import React, { useState, useEffect } from "react";
import Image from "next/image";

interface CarouselItem {
  image: string;
  alt: string;
}

interface CarouselProps {
  items: CarouselItem[];
}

const Carousel: React.FC<CarouselProps> = ({ items }) => {
  // Ensure enough duplicates to create a seamless infinite scroll
  const duplicatedItems = Array.from({ length: 10 }, () => items).flat();

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      // Move to the next image
      setCurrentIndex((prevIndex) => (prevIndex + 1) % items.length);
    }, 5000); // Adjust the interval time to match the animation duration (e.g., 5000 milliseconds or 5 seconds)

    return () => clearInterval(intervalId);
  }, [currentIndex, items.length]);

  return (
    <div className="overflow-hidden w-full">
      <div
        className="flex"
        style={{
          animation: "slide 45s linear infinite", // Adjust the animation duration and timing function as needed
          transform: `translateX(-${currentIndex * 33.33}%)`, // Adjust based on the number of duplicates
        }}
      >
        {duplicatedItems.map((item, index) => (
          <div
            key={index}
            className="flex-shrink-0 w-32 h-32 md:w-40 md:h-40 snap-center"
          >
            <Image
              src={item.image}
              alt={item.alt}
              className="w-full h-full object-contain transform scale-80 pl-5"
              style={{ transformOrigin: "center center" }}
              // style={{ minWidth: "100%", minHeight: "100%" }}
            />
          </div>
        ))}
      </div>
      <style jsx>{`
        @keyframes slide {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(
              -${items.length * 33.33}%
            ); // Adjust based on the number of duplicates
          }
        }
      `}</style>
    </div>
  );
};

export default Carousel;
