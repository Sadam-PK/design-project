import React, { useState } from "react";
import food from "../assets/hero_1.jpg.webp";
import slider5 from "../assets/slider-5.jpg.webp";
import slider6 from "../assets/slider-6.jpg.webp";

const images = [food, slider5, slider6];

export default function ImageSlider() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToPrevious = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? images.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const goToNext = () => {
    const isLastSlide = currentIndex === images.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  return (
    <div className="relative flex items-center justify-center w-full px-3 sm:px-0 py-20 sm:pt-20 sm:pb-0 -mb-32 sm:h-screen">
      <div className="shadow-sm shadow-gray-400 w-full max-w-[95%] sm:max-w-[90%] lg:max-w-[85%] mx-auto h-full sm:h-screen">
        <button
          onClick={goToPrevious}
          className="absolute left-4 top-1/2 transform -translate-y-1/2 flex items-center justify-center h-12 w-12 text-white bg-black bg-opacity-50 hover:bg-opacity-75 rounded-full z-10"
        >
          &#10094;
        </button>
        <div className="relative w-full h-80 sm:h-full overflow-hidden rounded-lg shadow-lg">
          <img
            src={images[currentIndex]}
            alt={`Slide ${currentIndex + 1}`}
            className="w-full h-full object-cover"
          />
        </div>
        <button
          onClick={goToNext}
          className="absolute right-4 top-1/2 transform -translate-y-1/2 flex items-center justify-center h-12 w-12 text-white bg-black bg-opacity-50 hover:bg-opacity-75 rounded-full z-10"
        >
          &#10095;
        </button>
      </div>
    </div>
  );
}
