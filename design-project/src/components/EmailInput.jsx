import React from "react";

export default function EmailInput() {
  return (
    <div className="flex flex-col sm:flex-row justify-center items-center sm:p-2 rounded mt-5">
      <div className="relative w-full sm:w-auto">
        <input
          type="email"
          placeholder="Your email..."
          className="w-full bg-transparent border-b-2 bg-black bg-opacity-95
          indent-2 italic p-3 border-gray-700
           text-white placeholder-gray-600 focus:outline-none text-sm"
        />
        <button className="absolute right-0 -top-0 text-white p-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            className="w-5 h-5"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M16 12H8m8 0l-8-8m8 8l-8 8"
            />
          </svg>
        </button>
      </div>
    </div>
  );
}
