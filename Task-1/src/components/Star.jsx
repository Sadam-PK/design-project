// Star.js
import React from 'react';

export default function Star({ filled }) {
  return (
    <svg
      className={`w-4 h-4 ${filled ? 'text-blue-400' : 'text-gray-300'}`}
      fill="currentColor"
      viewBox="0 0 20 20"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.36 4.178a1 1 0 00.95.69h4.39c.969 0 1.371 1.24.588 1.81l-3.557 2.58a1 1 0 00-.364 1.118l1.36 4.178c.3.921-.755 1.688-1.539 1.118L10 14.347l-3.557 2.58c-.783.57-1.838-.197-1.539-1.118l1.36-4.178a1 1 0 00-.364-1.118L2.342 9.605c-.783-.57-.381-1.81.588-1.81h4.39a1 1 0 00.95-.69l1.36-4.178z"
      />
    </svg>
  );
};

