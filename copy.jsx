import React, { useState, useEffect, useRef } from "react";

const copy = () => {
  const items = [
    <div className="bg-red-500 w-full h-full text-white text-center">Slide 1</div>,
    <div className="bg-blue-500 w-full h-full text-white text-center">Slide 2</div>,
    <div className="bg-green-500 w-full h-full text-white text-center">Slide 3</div>,
    <div className="bg-yellow-500 w-full h-full text-white text-center">Slide 4</div>,
  ];
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const carouselRef = useRef();

  // Clone first and last items for infinite effect
  const clonedItems = [items[items.length - 1], ...items, items[0]];

  const handleNext = () => {
    if (!isAnimating) {
      setIsAnimating(true);
      setCurrentIndex((prevIndex) => prevIndex + 1);
    }
  };

  const handlePrev = () => {
    if (!isAnimating) {
      setIsAnimating(true);
      setCurrentIndex((prevIndex) => prevIndex - 1);
    }
  };

  useEffect(() => {
    if (isAnimating) {
      const timeout = setTimeout(() => {
        setIsAnimating(false);

        // Handle index resetting for infinite loop
        if (currentIndex === clonedItems.length - 1) {
          setCurrentIndex(1); // Reset to first item
          carouselRef.current.style.transition = "none";
        } else if (currentIndex === 0) {
          setCurrentIndex(clonedItems.length - 2); // Reset to last item
          carouselRef.current.style.transition = "none";
        }
      }, 300); // Transition duration matches CSS
      return () => clearTimeout(timeout);
    }
  }, [isAnimating, currentIndex, clonedItems.length]);

  useEffect(() => {
    if (carouselRef.current) {
      carouselRef.current.style.transition = "transform 0.3s ease-in-out";
      carouselRef.current.style.transform = `translateX(-${currentIndex * 100}%)`;
    }
  }, [currentIndex]);

  return (
    <div className="carousel-container relative overflow-hidden w-full">
      <div
        ref={carouselRef}
        className="carousel-track flex"
        style={{ width: `${clonedItems.length * 100}%` }}
      >
        {clonedItems.map((item, index) => (
          <div
            key={index}
            className="carousel-item flex-shrink-0 w-full h-64 bg-gray-200 flex items-center justify-center"
          >
            {item}
          </div>
        ))}
      </div>
      <button
        className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white px-3 py-2 rounded"
        onClick={handlePrev}
      >
        Prev
      </button>
      <button
        className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white px-3 py-2 rounded"
        onClick={handleNext}
      >
        Next
      </button>
    </div>
  );
}

export default copy