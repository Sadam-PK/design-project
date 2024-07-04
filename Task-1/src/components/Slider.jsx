// src/ImageSlider.js
import React, { useState } from "react";
import mountain from "../assets/img_1_long.jpg.webp";
import food from "../assets/hero_1.jpg.webp";

const images = [food, mountain];

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
    <div className="relative flex items-center justify-center  w-full h-screen ">
      <div className="shadow-xl shadow-gray-400">
        <button
          onClick={goToPrevious}
          className="absolute left-4 top-1/2 transform -translate-y-1/2 flex items-center justify-center h-12 w-12 text-white bg-black bg-opacity-50 hover:bg-opacity-75 rounded-full z-10"
        >
          &#10094;
        </button>
        <div className="relative w-full max-w-4xl overflow-hidden rounded-lg shadow-lg">
          <img
            src={images[currentIndex]}
            alt={`Slide ${currentIndex + 1}`}
            className="w-full"
          />
        </div>
        <button
          onClick={goToNext}
          className="absolute right-4 top-1/2 transform -translate-y-1/2 
        flex items-center justify-center h-12 w-12 text-white
         bg-black bg-opacity-50 hover:bg-opacity-75 rounded-full z-10
         "
        >
          &#10095;
        </button>
      </div>
    </div>
  );
}
