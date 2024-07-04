// ReviewStars.js
import React from "react";
import Star from "./Star";

export default function ReviewStars({ rating, maxStars = 5 }) {
  return (
    <div className="flex">
      {Array.from({ length: maxStars }, (v, i) => (
        <Star key={i} filled={i < rating} />
      ))}
    </div>
  );
}
